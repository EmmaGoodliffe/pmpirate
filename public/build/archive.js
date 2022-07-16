var archive=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,a;function h(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function g(){return p("")}function m(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function w(t){a=t}function I(){if(!a)throw new Error("Function called outside component initialization");return a}const E=[],T=[],C=[],S=[],A=Promise.resolve();let D=!1;function k(t){C.push(t)}const _=new Set;let $=0;function O(){const t=a;do{for(;$<E.length;){const t=E[$];$++,w(t),j(t.$$)}for(w(null),E.length=0,$=0;T.length;)T.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];_.has(e)||(_.add(e),e())}C.length=0}while(E.length);for(;S.length;)S.pop()();D=!1,_.clear(),w(t)}function j(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const L=new Set;let x;function P(){x={r:0,c:[],p:x}}function M(){x.r||i(x.c),x=x.p}function R(t,e){t&&t.i&&(L.delete(t),t.i(e))}function N(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),x.c.push((()=>{L.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}function F(t,e){const n=e.token={};function i(t,i,s,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==s&&(o=o.slice(),o[s]=r);const a=t&&(e.current=t)(o);let h=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==i&&t&&(P(),N(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),M())})):e.block.d(1),a.c(),R(a,1),a.m(e.mount(),e.anchor),h=!0),e.block=a,e.blocks&&(e.blocks[i]=a),h&&O()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=I();if(t.then((t=>{w(n),i(e.then,1,e.value,t),w(null)}),(t=>{if(w(n),i(e.catch,2,e.error,t),w(null),!e.hasCatch)throw t})),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}var s}function B(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function H(t){t&&t.c()}function U(t,n,r,o){const{fragment:a,on_mount:h,on_destroy:c,after_update:l}=t.$$;a&&a.m(n,r),o||k((()=>{const n=h.map(e).filter(s);c?c.push(...n):i(n),t.$$.on_mount=[]})),l.forEach(k)}function z(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(E.push(t),D||(D=!0,A.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,s,r,o,h,c,l,f=[-1]){const p=a;w(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||p.$$.root};l&&l(d.root);let g=!1;if(d.ctx=r?r(e,s.props||{},((t,n,...i)=>{const s=i.length?i[0]:n;return d.ctx&&h(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),g&&V(e,t)),n})):[],d.update(),g=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();s.intro&&R(e.$$.fragment),U(e,s.target,s.anchor,s.customElement),O()}w(p)}class X{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K=t=>{const e=parseInt(t);if(!isNaN(e))return e;const n=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(t);return-1===n?n+1:void 0},G=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()],W=(t,e,n)=>new Date(n,e-1,t),Y=(t,e="/",n=!1)=>{const[i,s,r]=G(t).map((t=>`${t}`)),o=[i.padStart(2,"0"),s.padStart(2,"0"),r];return(n?o.reverse():o).join(e)},J=t=>{const e=`${t}`;return e.length<=2?J("20"+e.padStart(2,"0")):3===e.length?null:parseInt(e)},Q=t=>{const e=["/","-","."];for(const n of e){const[e,i,s]=t.split(n).map(K),r=W(e,i,J(s));if(![e,i,s].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}for(const n of e){const[e,i,s]=t.split(n).map(K),r=W(s,i,J(e));if(![s,i,e].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}const n=new Date(t);if("Invalid Date"!=`${n}`)return n},Z=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,c=s>>2,l=(3&s)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,r||(u=64)),i.push(n[c],n[l],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const h=s<<2|r>>4;if(i.push(h),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},et=function(t){return function(t){const e=Z(t);return tt.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}function it(){return"object"==typeof indexedDB}function st(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class rt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ot.prototype.create)}}class ot{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(at,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new rt(i,o,n)}}const at=/\{\$([^}]+)}/g;function ht(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(ct(n)&&ct(r)){if(!ht(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function ct(t){return null!==t&&"object"==typeof t}
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
     */function lt(t,e=1e3,n=2){const i=e*Math.pow(n,t),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
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
     */function ut(t){return t&&t._delegate?t._delegate:t}class ft{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const pt="[DEFAULT]";
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
     */class dt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new nt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:pt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===pt?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:pt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class gt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new dt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var mt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(mt||(mt={}));const yt={debug:mt.DEBUG,verbose:mt.VERBOSE,info:mt.INFO,warn:mt.WARN,error:mt.ERROR,silent:mt.SILENT},vt=mt.INFO,bt={[mt.DEBUG]:"log",[mt.VERBOSE]:"log",[mt.INFO]:"info",[mt.WARN]:"warn",[mt.ERROR]:"error"},wt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=bt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class It{constructor(t){this.name=t,this._logLevel=vt,this._logHandler=wt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?yt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,mt.DEBUG,...t),this._logHandler(this,mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,mt.VERBOSE,...t),this._logHandler(this,mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,mt.INFO,...t),this._logHandler(this,mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,mt.WARN,...t),this._logHandler(this,mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,mt.ERROR,...t),this._logHandler(this,mt.ERROR,...t)}}let Et,Tt;const Ct=new WeakMap,St=new WeakMap,At=new WeakMap,Dt=new WeakMap,kt=new WeakMap;let _t={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return St.get(t);if("objectStoreNames"===e)return t.objectStoreNames||At.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function $t(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Lt(this),e),jt(Ct.get(this))}:function(...e){return jt(t.apply(Lt(this),e))}:function(e,...n){const i=t.call(Lt(this),e,...n);return At.set(i,e.sort?e.sort():[e]),jt(i)}}function Ot(t){return"function"==typeof t?$t(t):(t instanceof IDBTransaction&&function(t){if(St.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));St.set(t,e)}(t),e=t,(Et||(Et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,_t):t);var e}function jt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(jt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&Ct.set(e,t)})).catch((()=>{})),kt.set(e,t),e}(t);if(Dt.has(t))return Dt.get(t);const e=Ot(t);return e!==t&&(Dt.set(t,e),kt.set(e,t)),e}const Lt=t=>kt.get(t);function xt(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=jt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(jt(o.result),t.oldVersion,t.newVersion,jt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const Pt=["get","getKey","getAll","getAllKeys","count"],Mt=["put","add","delete","clear"],Rt=new Map;function Nt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Rt.get(e))return Rt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Mt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Pt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return Rt.set(e,r),r}_t=(t=>({...t,get:(e,n,i)=>Nt(e,n)||t.get(e,n,i),has:(e,n)=>!!Nt(e,n)||t.has(e,n)}))(_t);
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
class Ft{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Bt="@firebase/app",Ht="0.7.28",Ut=new It("@firebase/app"),zt="[DEFAULT]",Vt={[Bt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},qt=new Map,Xt=new Map;function Kt(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Xt.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Xt.set(e,t);for(const e of qt.values())Kt(e,t);return!0}function Wt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
     */const Yt=new ot("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Jt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ft("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}
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
     */function Qt(t="[DEFAULT]"){const e=qt.get(t);if(!e)throw Yt.create("no-app",{appName:t});return e}function Zt(t,e,n){var i;let s=null!==(i=Vt[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ut.warn(t.join(" "))}Gt(new ft(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
     */const te="firebase-heartbeat-store";let ee=null;function ne(){return ee||(ee=xt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(te)}}).catch((t=>{throw Yt.create("storage-open",{originalErrorMessage:t.message})}))),ee}async function ie(t,e){var n;try{const n=(await ne()).transaction(te,"readwrite"),i=n.objectStore(te);return await i.put(e,se(t)),n.done}catch(t){throw Yt.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function se(t){return`${t.name}!${t.options.appId}`}
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
     */class re{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ae(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=oe(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),he(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),he(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=et(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oe(){return(new Date).toISOString().substring(0,10)}class ae{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!it()&&st().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await ne()).transaction(te).objectStore(te).get(se(t))}catch(t){throw Yt.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ie(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ie(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function he(t){return et(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var ce;ce="",Gt(new ft("platform-logger",(t=>new Ft(t)),"PRIVATE")),Gt(new ft("heartbeat",(t=>new re(t)),"PRIVATE")),Zt(Bt,Ht,ce),Zt(Bt,Ht,"esm2017"),Zt("fire-js","");var le,ue="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},fe=fe||{},pe=ue||self;function de(){}function ge(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function me(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ye="closure_uid_"+(1e9*Math.random()>>>0),ve=0;function be(t,e,n){return t.call.apply(t.bind,arguments)}function we(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ie(t,e,n){return(Ie=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?be:we).apply(null,arguments)}function Ee(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Te(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Ce(){this.s=this.s,this.o=this.o}var Se={};Ce.prototype.s=!1,Ce.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,ye)&&t[ye]||(t[ye]=++ve)}(this);delete Se[t]}},Ce.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ae=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},De=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function ke(t){return Array.prototype.concat.apply([],arguments)}function _e(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function $e(t){return/^[\s\xa0]*$/.test(t)}var Oe,je=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Le(t,e){return-1!=t.indexOf(e)}function xe(t,e){return t<e?-1:t>e?1:0}t:{var Pe=pe.navigator;if(Pe){var Me=Pe.userAgent;if(Me){Oe=Me;break t}}Oe=""}function Re(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ne(t){const e={};for(const n in t)e[n]=t[n];return e}var Fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Be(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Fe.length;e++)n=Fe[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function He(t){return He[" "](t),t}He[" "]=de;var Ue,ze,Ve=Le(Oe,"Opera"),qe=Le(Oe,"Trident")||Le(Oe,"MSIE"),Xe=Le(Oe,"Edge"),Ke=Xe||qe,Ge=Le(Oe,"Gecko")&&!(Le(Oe.toLowerCase(),"webkit")&&!Le(Oe,"Edge"))&&!(Le(Oe,"Trident")||Le(Oe,"MSIE"))&&!Le(Oe,"Edge"),We=Le(Oe.toLowerCase(),"webkit")&&!Le(Oe,"Edge");function Ye(){var t=pe.document;return t?t.documentMode:void 0}t:{var Je="",Qe=(ze=Oe,Ge?/rv:([^\);]+)(\)|;)/.exec(ze):Xe?/Edge\/([\d\.]+)/.exec(ze):qe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ze):We?/WebKit\/(\S+)/.exec(ze):Ve?/(?:Version)[ \/]?(\S+)/.exec(ze):void 0);if(Qe&&(Je=Qe?Qe[1]:""),qe){var Ze=Ye();if(null!=Ze&&Ze>parseFloat(Je)){Ue=String(Ze);break t}}Ue=Je}var tn={};function en(){return function(t){var e=tn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=je(String(Ue)).split("."),n=je("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=xe(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||xe(0==s[2].length,0==r[2].length)||xe(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}pe.document&&qe&&Ye();var nn=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",de,e),pe.removeEventListener("test",de,e)}catch(t){}return t}();function sn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rn(t,e){if(sn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ge){t:{try{He(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:on[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rn.Z.h.call(this)}}sn.prototype.h=function(){this.defaultPrevented=!0},Te(rn,sn);var on={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),hn=0;function cn(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++hn,this.ca=this.fa=!1}function ln(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function un(t){this.src=t,this.g={},this.h=0}function fn(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Ae(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ln(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function pn(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}un.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=pn(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new cn(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var dn="closure_lm_"+(1e6*Math.random()|0),gn={};function mn(t,e,n,i,s){if(i&&i.once)return vn(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)mn(t,e[r],n,i,s);return null}return n=Sn(n),t&&t[an]?t.N(e,n,me(i)?!!i.capture:!!i,s):yn(t,e,n,!1,i,s)}function yn(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=me(s)?!!s.capture:!!s,a=Tn(t);if(a||(t[dn]=a=new un(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=En;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nn||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(In(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function vn(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vn(t,e[r],n,i,s);return null}return n=Sn(n),t&&t[an]?t.O(e,n,me(i)?!!i.capture:!!i,s):yn(t,e,n,!0,i,s)}function bn(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)bn(t,e[r],n,i,s);else i=me(i)?!!i.capture:!!i,n=Sn(n),t&&t[an]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=pn(r=t.g[e],n,i,s))&&(ln(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Tn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pn(e,n,i,s)),(n=-1<t?e[t]:null)&&wn(n))}function wn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[an])fn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(In(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Tn(e))?(fn(n,t),0==n.h&&(n.src=null,e[dn]=null)):ln(t)}}}function In(t){return t in gn?gn[t]:gn[t]="on"+t}function En(t,e){if(t.ca)t=!0;else{e=new rn(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&wn(t),t=n.call(i,e)}return t}function Tn(t){return(t=t[dn])instanceof un?t:null}var Cn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sn(t){return"function"==typeof t?t:(t[Cn]||(t[Cn]=function(e){return t.handleEvent(e)}),t[Cn])}function An(){Ce.call(this),this.i=new un(this),this.P=this,this.I=null}function Dn(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new sn(e,t);else if(e instanceof sn)e.target=e.target||t;else{var s=e;Be(e=new sn(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=kn(o,i,!0,e)&&s}if(s=kn(o=e.g=t,i,!0,e)&&s,s=kn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=kn(o=e.g=n[r],i,!1,e)&&s}function kn(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&fn(t.i,o),s=!1!==a.call(h,i)&&s}}return s&&!i.defaultPrevented}Te(An,Ce),An.prototype[an]=!0,An.prototype.removeEventListener=function(t,e,n,i){bn(this,t,e,n,i)},An.prototype.M=function(){if(An.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ln(n[i]);delete e.g[t],e.h--}}this.I=null},An.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},An.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var _n=pe.JSON.stringify;function $n(){var t=Rn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var On,jn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ln),(t=>t.reset()));class Ln{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xn(t){pe.setTimeout((()=>{throw t}),0)}function Pn(t,e){On||function(){var t=pe.Promise.resolve(void 0);On=function(){t.then(Nn)}}(),Mn||(On(),Mn=!0),Rn.add(t,e)}var Mn=!1,Rn=new class{constructor(){this.h=this.g=null}add(t,e){const n=jn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Nn(){for(var t;t=$n();){try{t.h.call(t.g)}catch(t){xn(t)}var e=jn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mn=!1}function Fn(t,e){An.call(this),this.h=t||1,this.g=e||pe,this.j=Ie(this.kb,this),this.l=Date.now()}function Bn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Hn(t,e,n){if("function"==typeof t)n&&(t=Ie(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ie(t.handleEvent,t)}return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function Un(t){t.g=Hn((()=>{t.g=null,t.i&&(t.i=!1,Un(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Te(Fn,An),(le=Fn.prototype).da=!1,le.S=null,le.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Dn(this,"tick"),this.da&&(Bn(this),this.start()))}},le.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},le.M=function(){Fn.Z.M.call(this),Bn(this),delete this.g};class zn extends Ce{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Un(this)}M(){super.M(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(t){Ce.call(this),this.h=t,this.g={}}Te(Vn,Ce);var qn=[];function Xn(t,e,n,i){Array.isArray(n)||(n&&(qn[0]=n.toString()),n=qn);for(var s=0;s<n.length;s++){var r=mn(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Kn(t){Re(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wn(t)}),t),t.g={}}function Gn(){this.g=!0}function Wn(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return _n(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Vn.prototype.M=function(){Vn.Z.M.call(this),Kn(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gn.prototype.Aa=function(){this.g=!1},Gn.prototype.info=function(){};var Yn={},Jn=null;function Qn(){return Jn=Jn||new An}function Zn(t){sn.call(this,Yn.Ma,t)}function ti(t){const e=Qn();Dn(e,new Zn(e,t))}function ei(t,e){sn.call(this,Yn.STAT_EVENT,t),this.stat=e}function ni(t){const e=Qn();Dn(e,new ei(e,t))}function ii(t,e){sn.call(this,Yn.Na,t),this.size=e}function si(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return pe.setTimeout((function(){t()}),e)}Yn.Ma="serverreachability",Te(Zn,sn),Yn.STAT_EVENT="statevent",Te(ei,sn),Yn.Na="timingevent",Te(ii,sn);var ri={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9};function oi(){}function ai(t){return t.h||(t.h=t.i())}oi.prototype.h=null;var hi,ci={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function li(){sn.call(this,"d")}function ui(){sn.call(this,"c")}function fi(){}function pi(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Vn(this),this.P=gi,t=Ke?125:void 0,this.W=new Fn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new di}function di(){this.i=null,this.g="",this.h=!1}Te(li,sn),Te(ui,sn),Te(fi,oi),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},hi=new fi;var gi=45e3,mi={},yi={};function vi(t,e,n){t.K=1,t.v=Hi(Pi(e)),t.s=n,t.U=!0,bi(t,null)}function bi(t,e){t.F=Date.now(),Ti(t),t.A=Pi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),ts(n.h,"t",i),t.C=0,n=t.l.H,t.h=new di,t.g=tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zn(Ie(t.Ia,t,t.g),t.O)),Xn(t.V,t.g,"readystatechange",t.gb),e=t.H?Ne(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ti(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function wi(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ii(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Ei(t,n),i==yi){4==e&&(t.o=4,ni(14),s=!1),Wn(t.j,t.m,null,"[Incomplete Response]");break}if(i==mi){t.o=4,ni(15),Wn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Wn(t.j,t.m,i,null),ki(t,i)}wi(t)&&i!=yi&&i!=mi&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ni(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xs(e),e.L=!0,ni(11))):(Wn(t.j,t.m,n,"[Invalid Chunked Response]"),Di(t),Ai(t))}function Ei(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?yi:(n=Number(e.substring(n,i)),isNaN(n)?mi:(i+=1)+n>e.length?yi:(e=e.substr(i,n),t.C=i+n,e))}function Ti(t){t.Y=Date.now()+t.P,Ci(t,t.P)}function Ci(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=si(Ie(t.eb,t),e)}function Si(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}function Ai(t){0==t.l.G||t.I||Ws(t.l,t)}function Di(t){Si(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bn(t.W),Kn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ki(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||os(n.i,t)))if(n.I=t.N,!t.J&&os(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Gs(n),Rs(n)}qs(n),ni(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=si(Ie(n.ab,n),6e3));if(1>=rs(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Js(n,11)}else if((t.J||n.g==t)&&Gs(n),!$e(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=c[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Le(t,"spdy")||Le(t,"quic")||Le(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(as(r,r.h),r.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Bi(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Zs(i,i.H?i.la:null,i.W),o.J){hs(i.i,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(Si(a),Ti(a)),i.g=o}else Vs(i);0<n.l.length&&Bs(n)}else"stop"!=c[0]&&"close"!=c[0]||Js(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Js(n,7):Ms(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}ti(4)}catch(t){}}function _i(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ge(t)||"string"==typeof t)De(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ge(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ge(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function $i(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof $i)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Oi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ji(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)ji(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function ji(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(le=pi.prototype).setTimeout=function(t){this.P=t},le.gb=function(t){t=t.target;const e=this.L;e&&3==Os(t)?e.l():this.Ia(t)},le.Ia=function(t){try{if(t==this.g)t:{const l=Os(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>l)&&(3!=l||Ke||this.g&&(this.h.h||this.g.ga()||js(this.g)))){this.I||4!=l||7==e||ti(8==e||0>=u?3:2),Si(this);var n=this.g.ba();this.N=n;e:if(wi(this)){var i=js(this.g);t="";var s=i.length,r=4==Os(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Di(this),Ai(this);var o="";break e}this.h.i=new pe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$e(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ni(12),Di(this),Ai(this);break t}Wn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ki(this,n)}this.U?(Ii(this,l,o),Ke&&this.i&&3==l&&(Xn(this.V,this.W,"tick",this.fb),this.W.start())):(Wn(this.j,this.m,o,null),ki(this,o)),4==l&&Di(this),this.i&&!this.I&&(4==l?Ws(this.l,this):(this.i=!1,Ti(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ni(12)):(this.o=0,ni(13)),Di(this),Ai(this)}}}catch(t){}},le.fb=function(){if(this.g){var t=Os(this.g),e=this.g.ga();this.C<e.length&&(Si(this),Ii(this,t,e),this.i&&4!=t&&Ti(this))}},le.cancel=function(){this.I=!0,Di(this)},le.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(ti(3),ni(17)),Di(this),this.o=2,Ai(this)):Ci(this,this.Y-t)},(le=$i.prototype).R=function(){Oi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},le.T=function(){return Oi(this),this.g.concat()},le.get=function(t,e){return ji(this.h,t)?this.h[t]:e},le.set=function(t,e){ji(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},le.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var Li=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xi){this.g=void 0!==e?e:t.g,Mi(this,t.j),this.s=t.s,Ri(this,t.i),Ni(this,t.m),this.l=t.l,e=t.h;var n=new Yi;n.i=e.i,e.g&&(n.g=new $i(e.g),n.h=e.h),Fi(this,n),this.o=t.o}else t&&(n=String(t).match(Li))?(this.g=!!e,Mi(this,n[1]||"",!0),this.s=Ui(n[2]||""),Ri(this,n[3]||"",!0),Ni(this,n[4]),this.l=Ui(n[5]||"",!0),Fi(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.g=!!e,this.h=new Yi(null,this.g))}function Pi(t){return new xi(t)}function Mi(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ri(t,e,n){t.i=n?Ui(e,!0):e}function Ni(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fi(t,e,n){e instanceof Yi?(t.h=e,function(t,e){e&&!t.j&&(Ji(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Qi(this,e),ts(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=zi(e,Gi)),t.h=new Yi(e,t.g))}function Bi(t,e,n){t.h.set(e,n)}function Hi(t){return Bi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zi(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Vi),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Vi(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}xi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zi(e,qi,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(zi(e,qi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(zi(n,"/"==n.charAt(0)?Ki:Xi,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zi(n,Wi)),t.join("")};var qi=/[#\/\?@]/g,Xi=/[#\?:]/g,Ki=/[#\?]/g,Gi=/[#\?@]/g,Wi=/#/g;function Yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ji(t){t.g||(t.g=new $i,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Qi(t,e){Ji(t),e=es(t,e),ji(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ji((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Oi(t)))}function Zi(t,e){return Ji(t),e=es(t,e),ji(t.g.h,e)}function ts(t,e,n){Qi(t,e),0<n.length&&(t.i=null,t.g.set(es(t,e),_e(n)),t.h+=n.length)}function es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(le=Yi.prototype).add=function(t,e){Ji(this),this.i=null,t=es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},le.forEach=function(t,e){Ji(this),this.g.forEach((function(n,i){De(n,(function(n){t.call(e,n,i,this)}),this)}),this)},le.T=function(){Ji(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},le.R=function(t){Ji(this);var e=[];if("string"==typeof t)Zi(this,t)&&(e=ke(e,this.g.get(es(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ke(e,t[n])}return e},le.set=function(t,e){return Ji(this),this.i=null,Zi(this,t=es(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},le.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},le.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function ns(t){this.l=t||is,pe.PerformanceNavigationTiming?t=0<(t=pe.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(pe.g&&pe.g.Ea&&pe.g.Ea()&&pe.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var is=10;function ss(t){return!!t.h||!!t.g&&t.g.size>=t.j}function rs(t){return t.h?1:t.g?t.g.size:0}function os(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function as(t,e){t.g?t.g.add(e):t.h=e}function hs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function cs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _e(t.i)}function ls(){}function us(){this.g=new ls}function fs(t,e,n){const i=n||"";try{_i(t,(function(t,n){let s=t;me(t)&&(s=_n(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ps(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function ds(t){this.l=t.$b||null,this.j=t.ib||!1}function gs(t,e){An.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ms,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ns.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ls.prototype.stringify=function(t){return pe.JSON.stringify(t,void 0)},ls.prototype.parse=function(t){return pe.JSON.parse(t,void 0)},Te(ds,oi),ds.prototype.g=function(){return new gs(this.l,this.j)},ds.prototype.i=function(t){return function(){return t}}({}),Te(gs,An);var ms=0;function ys(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(le=gs.prototype).open=function(t,e){if(this.readyState!=ms)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)},le.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||pe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},le.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vs(this)),this.readyState=ms},le.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==pe.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ys(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},le.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vs(this):bs(this),3==this.readyState&&ys(this)}},le.Ua=function(t){this.g&&(this.response=this.responseText=t,vs(this))},le.Ta=function(t){this.g&&(this.response=t,vs(this))},le.ha=function(){this.g&&vs(this)},le.setRequestHeader=function(t,e){this.v.append(t,e)},le.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},le.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ws=pe.JSON.parse;function Is(t){An.call(this),this.headers=new $i,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Es,this.K=this.L=!1}Te(Is,An);var Es="",Ts=/^https?$/i,Cs=["POST","PUT"];function Ss(t){return"content-type"==t.toLowerCase()}function As(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ds(t),_s(t)}function Ds(t){t.D||(t.D=!0,Dn(t,"complete"),Dn(t,"error"))}function ks(t){if(t.h&&void 0!==fe&&(!t.C[1]||4!=Os(t)||2!=t.ba()))if(t.v&&4==Os(t))Hn(t.Fa,0,t);else if(Dn(t,"readystatechange"),4==Os(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(Li)[1]||null;if(!s&&pe.self&&pe.self.location){var r=pe.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ts.test(s?s.toLowerCase():"")}n=i}if(n)Dn(t,"complete"),Dn(t,"success");else{t.m=6;try{var o=2<Os(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Ds(t)}}finally{_s(t)}}}function _s(t,e){if(t.g){$s(t);const n=t.g,i=t.C[0]?de:null;t.g=null,t.C=null,e||Dn(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function $s(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}function Os(t){return t.g?t.g.readyState:0}function js(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Es:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ls(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Re(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Bi(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ps(t){this.za=0,this.l=[],this.h=new Gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=xs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=xs("baseRetryDelayMs",5e3,t),this.$a=xs("retryDelaySeedMs",1e4,t),this.Ya=xs("forwardChannelMaxRetries",2,t),this.ra=xs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ns(t&&t.concurrentRequestLimit),this.Ca=new us,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ms(t){if(Ns(t),3==t.G){var e=t.V++,n=Pi(t.F);Bi(n,"SID",t.J),Bi(n,"RID",e),Bi(n,"TYPE","terminate"),Us(t,n),(e=new pi(t,t.h,e,void 0)).K=2,e.v=Hi(Pi(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon&&(n=pe.navigator.sendBeacon(e.v.toString(),"")),!n&&pe.Image&&((new Image).src=e.v,n=!0),n||(e.g=tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ti(e)}Qs(t)}function Rs(t){t.g&&(Xs(t),t.g.cancel(),t.g=null)}function Ns(t){Rs(t),t.u&&(pe.clearTimeout(t.u),t.u=null),Gs(t),t.i.cancel(),t.m&&("number"==typeof t.m&&pe.clearTimeout(t.m),t.m=null)}function Fs(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Bs(t)}function Bs(t){ss(t.i)||t.m||(t.m=!0,Pn(t.Ha,t),t.C=0)}function Hs(t,e){var n;n=e?e.m:t.V++;const i=Pi(t.F);Bi(i,"SID",t.J),Bi(i,"RID",n),Bi(i,"AID",t.U),Us(t,i),t.o&&t.s&&Ls(i,t.o,t.s),n=new pi(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=zs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),as(t.i,n),vi(n,i,e)}function Us(t,e){t.j&&_i({},(function(t,n){Bi(e,n,t)}))}function zs(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Ie(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{fs(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Vs(t){t.g||t.u||(t.Y=1,Pn(t.Ga,t),t.A=0)}function qs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=si(Ie(t.Ga,t),Ys(t,t.A)),t.A++,!0)}function Xs(t){null!=t.B&&(pe.clearTimeout(t.B),t.B=null)}function Ks(t){t.g=new pi(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Pi(t.oa);Bi(e,"RID","rpc"),Bi(e,"SID",t.J),Bi(e,"CI",t.N?"0":"1"),Bi(e,"AID",t.U),Us(t,e),Bi(e,"TYPE","xmlhttp"),t.o&&t.s&&Ls(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Hi(Pi(e)),n.s=null,n.U=!0,bi(n,t)}function Gs(t){null!=t.v&&(pe.clearTimeout(t.v),t.v=null)}function Ws(t,e){var n=null;if(t.g==e){Gs(t),Xs(t),t.g=null;var i=2}else{if(!os(t.i,e))return;n=e.D,hs(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Dn(i=Qn(),new ii(i,n,e,s)),Bs(t)}else Vs(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(rs(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=si(Ie(t.Ha,t,e),Ys(t,t.C)),t.C++,0)))}(t,e)||2==i&&qs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Js(t,5);break;case 4:Js(t,10);break;case 3:Js(t,6);break;default:Js(t,2)}}function Ys(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Js(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Ie(t.jb,t);n||(n=new xi("//www.google.com/images/cleardot.gif"),pe.location&&"http"==pe.location.protocol||Mi(n,"https"),Hi(n)),function(t,e){const n=new Gn;if(pe.Image){const i=new Image;i.onload=Ee(ps,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ee(ps,n,i,"TestLoadImage: error",!1,e),i.onabort=Ee(ps,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ee(ps,n,i,"TestLoadImage: timeout",!1,e),pe.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else ni(2);t.G=0,t.j&&t.j.va(e),Qs(t),Ns(t)}function Qs(t){t.G=0,t.I=-1,t.j&&(0==cs(t.i).length&&0==t.l.length||(t.i.i.length=0,_e(t.l),t.l.length=0),t.j.ua())}function Zs(t,e,n){let i=function(t){return t instanceof xi?Pi(t):new xi(t,void 0)}(n);if(""!=i.i)e&&Ri(i,e+"."+i.i),Ni(i,i.m);else{const t=pe.location;i=function(t,e,n,i){var s=new xi(null,void 0);return t&&Mi(s,t),e&&Ri(s,e),n&&Ni(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Re(t.aa,(function(t,e){Bi(i,e,t)})),e=t.D,n=t.sa,e&&n&&Bi(i,e,n),Bi(i,"VER",t.ma),Us(t,i),i}function tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Is(new ds({ib:!0})):new Is(t.qa)).L=t.H,e}function er(){}function nr(t,e){An.call(this),this.g=new Ps(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!$e(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$e(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new rr(this)}function ir(t){li.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sr(){ui.call(this),this.status=1}function rr(t){this.g=t}(le=Is.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hi.g(),this.C=this.u?ai(this.u):ai(hi),this.g.onreadystatechange=Ie(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void As(this,t)}t=n||"";const s=new $i(this.headers);i&&_i(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=Ss;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=pe.FormData&&t instanceof pe.FormData,!(0<=Ae(Cs,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$s(this),0<this.B&&((this.K=function(t){return qe&&en()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.pa,this)):this.A=Hn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){As(this,t)}},le.pa=function(){void 0!==fe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Dn(this,"timeout"),this.abort(8))},le.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Dn(this,"complete"),Dn(this,"abort"),_s(this))},le.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_s(this,!0)),Is.Z.M.call(this)},le.Fa=function(){this.s||(this.F||this.v||this.l?ks(this):this.cb())},le.cb=function(){ks(this)},le.ba=function(){try{return 2<Os(this)?this.g.status:-1}catch(t){return-1}},le.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},le.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ws(e)}},le.Da=function(){return this.m},le.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(le=Ps.prototype).ma=8,le.G=1,le.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},le.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new pi(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Ne(r),Be(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=zs(this,s,e),Bi(n=Pi(this.F),"RID",t),Bi(n,"CVER",22),this.D&&Bi(n,"X-HTTP-Session-Id",this.D),Us(this,n),this.o&&r&&Ls(n,this.o,r),as(this.i,s),this.Ra&&Bi(n,"TYPE","init"),this.ja?(Bi(n,"$req",e),Bi(n,"SID","null"),s.$=!0,vi(s,n,null)):vi(s,n,e),this.G=2}}else 3==this.G&&(t?Hs(this,t):0==this.l.length||ss(this.i)||Hs(this))},le.Ga=function(){if(this.u=null,Ks(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=si(Ie(this.bb,this),t)}},le.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ni(10),Rs(this),Ks(this))},le.ab=function(){null!=this.v&&(this.v=null,Rs(this),qs(this),ni(19))},le.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ni(2)):(this.h.info("Failed to ping google.com"),ni(1))},(le=er.prototype).xa=function(){},le.wa=function(){},le.va=function(){},le.ua=function(){},le.Oa=function(){},Te(nr,An),nr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pn(Ie(t.hb,t,e))),ni(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zs(t,null,t.W),Bs(t)},nr.prototype.close=function(){Ms(this.g)},nr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Fs(this.g,e)}else this.v?((e={}).__data__=_n(t),Fs(this.g,e)):Fs(this.g,t)},nr.prototype.M=function(){this.g.j=null,delete this.j,Ms(this.g),delete this.g,nr.Z.M.call(this)},Te(ir,li),Te(sr,ui),Te(rr,er),rr.prototype.xa=function(){Dn(this.g,"a")},rr.prototype.wa=function(t){Dn(this.g,new ir(t))},rr.prototype.va=function(t){Dn(this.g,new sr(t))},rr.prototype.ua=function(){Dn(this.g,"b")},nr.prototype.send=nr.prototype.u,nr.prototype.open=nr.prototype.m,nr.prototype.close=nr.prototype.close,ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",An.prototype.listen=An.prototype.N,Is.prototype.listenOnce=Is.prototype.O,Is.prototype.getLastError=Is.prototype.La,Is.prototype.getLastErrorCode=Is.prototype.Da,Is.prototype.getStatus=Is.prototype.ba,Is.prototype.getResponseJson=Is.prototype.Qa,Is.prototype.getResponseText=Is.prototype.ga,Is.prototype.send=Is.prototype.ea;const or="@firebase/firestore";
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
     */class ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ar.UNAUTHENTICATED=new ar(null),ar.GOOGLE_CREDENTIALS=new ar("google-credentials-uid"),ar.FIRST_PARTY=new ar("first-party-uid"),ar.MOCK_USER=new ar("mock-user");
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
let hr="9.9.0";
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
     */const cr=new It("@firebase/firestore");function lr(t,...e){if(cr.logLevel<=mt.DEBUG){const n=e.map(fr);cr.debug(`Firestore (${hr}): ${t}`,...n)}}function ur(t,...e){if(cr.logLevel<=mt.ERROR){const n=e.map(fr);cr.error(`Firestore (${hr}): ${t}`,...n)}}function fr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */var e}
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
     */function pr(t="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+t;throw ur(e),new Error(e)}function dr(t,e){t||pr()}
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
     */const gr="cancelled",mr="invalid-argument",yr="failed-precondition",vr="unavailable";class br extends rt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class wr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Ir{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Er{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ar.UNAUTHENTICATED)))}shutdown(){}}class Tr{constructor(t){this.t=t,this.currentUser=ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{lr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(lr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(lr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(dr("string"==typeof e.accessToken),new Ir(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return dr(null===t||"string"==typeof t),new ar(t)}}class Cr{constructor(t,e,n){this.type="FirstParty",this.user=ar.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Sr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Cr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ar{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&lr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,lr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{lr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):lr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(dr("string"==typeof t.token),this.p=t.token,new Ar(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function kr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */function _r(t){return"IndexedDbTransactionError"===t.name}
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
     */class $r{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Or{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Or&&t.projectId===this.projectId&&t.database===this.database}}
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
     */var jr,Lr;function xr(){return"undefined"!=typeof document?document:null}(Lr=jr||(jr={}))[Lr.OK=0]="OK",Lr[Lr.CANCELLED=1]="CANCELLED",Lr[Lr.UNKNOWN=2]="UNKNOWN",Lr[Lr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lr[Lr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lr[Lr.NOT_FOUND=5]="NOT_FOUND",Lr[Lr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lr[Lr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lr[Lr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lr[Lr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lr[Lr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lr[Lr.ABORTED=10]="ABORTED",Lr[Lr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lr[Lr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lr[Lr.INTERNAL=13]="INTERNAL",Lr[Lr.UNAVAILABLE=14]="UNAVAILABLE",Lr[Lr.DATA_LOSS=15]="DATA_LOSS";class Pr{constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&lr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
     */class Mr{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Mr(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new br(gr,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}
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
class Rr{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ar.UNAUTHENTICATED,this.clientId=class{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=kr(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{lr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(lr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new br(yr,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=function(t,e){if(ur("AsyncQueue",`${e}: ${t}`),_r(t))return new br(vr,`${e}: ${t}`);throw t}(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}const Nr=new Map;
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
class Fr{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new br(mr,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new br(mr,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new br(mr,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
class Br{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pr(this,"async_queue_retry"),this.Kc=()=>{const t=xr();t&&lr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=xr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=xr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new wr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!_r(t))throw t;lr("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw ur("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Mr.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&pr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Hr extends class{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fr({}),this._settingsFrozen=!1,t instanceof Or?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new br(mr,'"projectId" not provided in firebase.initializeApp.');return new Or(t.options.projectId)}(t))}get app(){if(!this._app)throw new br(yr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new br(yr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Er;switch(t.type){case"gapi":const e=t.client;return dr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Sr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new br(mr,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Nr.get(t);e&&(lr("ComponentProvider","Removing Datastore"),Nr.delete(t),e.terminate())}(this),Promise.resolve()}}{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Br,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||function(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new $r(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Rr(t._authCredentials,t._appCheckCredentials,t._queue,i)}(this),this._firestoreClient.terminate()}}!function(t,e=!0){hr="9.9.0",Gt(new ft("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Hr(i,new Tr(t.getProvider("auth-internal")),new Dr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Zt(or,"3.4.12",t),Zt(or,"3.4.12","esm2017")}();var Ur={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png","2022-03-03":"spin.png","2022-03-08":"physics mark.png","2022-03-16":"core prac..png","2022-03-23":"copper.png","2022-05-04":"A level.png","2022-05-05":"studying.png","2022-05-06":"Newton's III.png","2022-05-26":"physics 1 flashbacks.png","2022-05-27":"capacitors.jpg","2022-05-28":"diodes.jpg","2022-06-07":"cheese.png","2022-06-10":"wrapped.png","2022-06-11":"USB.png","2022-06-14":"Ferris.png","2022-06-16":"chicken.png"}};const zr={},Vr=new Set,qr=W(1,9,2021),Xr=t=>new Promise((e=>setTimeout(e,1e3*t))),Kr=(t,e,n)=>{const[,i,s]=G(t);return i===e&&s===n},Gr=(t,e)=>{const n=W(1,e,t),i=new Date,s=G(i)[2];return qr<=n&&t<=s},Wr=async(t,e)=>{const n=new Array(((t,e)=>new Date(t,e,0).getDate())
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
     */(t,e)).fill(null).map(((t,e)=>e+1)),i={};for(const s of n){const n=W(s,e,t),r=Y(n,"-",!0),o=Ur.otd[r];Kr(n,e,t)&&o&&(i[s]=o)}return await Xr(2),i},Yr=async(t,e,n)=>{if(!Gr(t,e))return null;const i=`${t}-${`${e}`.padStart(2,"0")}`;if(Vr.has(i))return await Xr(1),Jr(t,e);console.count(i),console.count("DB reads"),Vr.add(i),console.log(Vr,zr);const s=await Wr(t,e);return((t,e,n)=>{zr[t]||(zr[t]={}),zr[t][e]=n})(t,e,s),Vr.delete(i),console.log(Vr,zr),s},Jr=(t,e)=>{try{return zr[t][e]}catch(t){console.count("Cache errors")}},Qr=(t,e,n)=>{var i;return null!==(i=Jr(t,e))&&void 0!==i?i:Yr(t,e)},Zr=async(t,e,n=0)=>{if(!t)return null;if(n>=12)throw new Error("DB recursion");const[i,s,r]=G(t);if(!Gr(r,s))return null;try{return zr[r][s][i]}catch(t){console.count("Cache errors")}return await Qr(r,s),Zr(t,e,n+1)};function to(e){let n;return{c(){n=f("header"),n.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',y(n,"class","my-8 flex")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class eo extends X{constructor(t){super(),q(this,t,null,to,r,{})}}function no(e){let n;return{c(){n=f("p"),n.textContent="It's loading, bro..."},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class io extends X{constructor(t){super(),q(this,t,null,no,r,{})}}function so(t){let e,n;return{c(){e=f("br"),n=p("\n      (Sneak peek)")},m(t,i){l(t,e,i),l(t,n,i)},d(t){t&&u(e),t&&u(n)}}}function ro(e){let n,i,s,r,o,a,g,m,b=Y(e[0],"/")+"",w=e[2]&&so();return{c(){n=f("tr"),i=f("td"),s=p(b),r=d(),w&&w.c(),o=d(),a=f("td"),g=f("img"),y(i,"class","text-center"),y(g,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),h(g.src,m=`memes/${e[1]}`)||y(g,"src",m),y(g,"alt","Meme")},m(t,e){l(t,n,e),c(n,i),c(i,s),c(i,r),w&&w.m(i,null),c(n,o),c(n,a),c(a,g)},p(t,[e]){1&e&&b!==(b=Y(t[0],"/")+"")&&v(s,b),t[2]?w||(w=so(),w.c(),w.m(i,null)):w&&(w.d(1),w=null),2&e&&!h(g.src,m=`memes/${t[1]}`)&&y(g,"src",m)},i:t,o:t,d(t){t&&u(n),w&&w.d()}}}function oo(t,e,n){let{date:i}=e,{src:s}=e,{isTomorrow:r=!1}=e;return t.$$set=t=>{"date"in t&&n(0,i=t.date),"src"in t&&n(1,s=t.src),"isTomorrow"in t&&n(2,r=t.isTomorrow)},[i,s,r]}class ao extends X{constructor(t){super(),q(this,t,oo,ro,r,{date:0,src:1,isTomorrow:2})}}function ho(t,e,n){const i=t.slice();return i[18]=e[n],i}function co(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function lo(t){let e,n,i,s,r,o,a=!Object.keys(t[16]).length,h=Object.keys(t[16]).map(t[13]),p=[];for(let e=0;e<h.length;e+=1)p[e]=fo(ho(t,h,e));const m=t=>N(p[t],1,1,(()=>{p[t]=null}));let y={ctx:t,current:null,token:null,hasCatch:!1,pending:yo,then:go,catch:po,value:17,blocks:[,,,]};F(i=t[6],y);let v=a&&vo();return{c(){e=f("tbody");for(let t=0;t<p.length;t+=1)p[t].c();n=d(),y.block.c(),s=d(),v&&v.c(),r=g()},m(t,i){l(t,e,i);for(let t=0;t<p.length;t+=1)p[t].m(e,null);c(e,n),y.block.m(e,y.anchor=null),y.mount=()=>e,y.anchor=null,l(t,s,i),v&&v.m(t,i),l(t,r,i),o=!0},p(s,o){if(t=s,387&o){let i;for(h=Object.keys(t[16]).map(t[13]),i=0;i<h.length;i+=1){const s=ho(t,h,i);p[i]?(p[i].p(s,o),R(p[i],1)):(p[i]=fo(s),p[i].c(),R(p[i],1),p[i].m(e,n))}for(P(),i=h.length;i<p.length;i+=1)m(i);M()}y.ctx=t,64&o&&i!==(i=t[6])&&F(i,y)||B(y,t,o),128&o&&(a=!Object.keys(t[16]).length),a?v||(v=vo(),v.c(),v.m(r.parentNode,r)):v&&(v.d(1),v=null)},i(t){if(!o){for(let t=0;t<h.length;t+=1)R(p[t]);R(y.block),o=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)N(p[t]);for(let t=0;t<3;t+=1){N(y.blocks[t])}o=!1},d(t){t&&u(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(p,t),y.block.d(),y.token=null,y=null,t&&u(s),v&&v.d(t),t&&u(r)}}}function uo(t){let e,n;return e=new ao({props:{date:W(t[18],t[0],t[1]),src:t[16][t[18]]}}),{c(){H(e.$$.fragment)},m(t,i){U(e,t,i),n=!0},p(t,n){const i={};131&n&&(i.date=W(t[18],t[0],t[1])),128&n&&(i.src=t[16][t[18]]),e.$set(i)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function fo(t){let e,n,i=W(t[18],t[0],t[1])<=Q(Y(t[8])),s=i&&uo(t);return{c(){s&&s.c(),e=g()},m(t,i){s&&s.m(t,i),l(t,e,i),n=!0},p(t,n){131&n&&(i=W(t[18],t[0],t[1])<=Q(Y(t[8]))),i?s?(s.p(t,n),131&n&&R(s,1)):(s=uo(t),s.c(),R(s,1),s.m(e.parentNode,e)):s&&(P(),N(s,1,1,(()=>{s=null})),M())},i(t){n||(R(s),n=!0)},o(t){N(s),n=!1},d(t){s&&s.d(t),t&&u(e)}}}function po(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function go(t){let e,n,i=t[17]&&mo(t);return{c(){i&&i.c(),e=g()},m(t,s){i&&i.m(t,s),l(t,e,s),n=!0},p(t,n){t[17]?i?(i.p(t,n),64&n&&R(i,1)):(i=mo(t),i.c(),R(i,1),i.m(e.parentNode,e)):i&&(P(),N(i,1,1,(()=>{i=null})),M())},i(t){n||(R(i),n=!0)},o(t){N(i),n=!1},d(t){i&&i.d(t),t&&u(e)}}}function mo(t){let e,n;return e=new ao({props:{date:t[9],src:t[17],isTomorrow:!0}}),{c(){H(e.$$.fragment)},m(t,i){U(e,t,i),n=!0},p(t,n){const i={};64&n&&(i.src=t[17]),e.$set(i)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function yo(e){let n,i;return n=new io({}),{c(){H(n.$$.fragment)},m(t,e){U(n,t,e),i=!0},p:t,i(t){i||(R(n.$$.fragment,t),i=!0)},o(t){N(n.$$.fragment,t),i=!1},d(t){z(n,t)}}}function vo(t){let e;return{c(){e=f("tfoot"),e.textContent="No memes that month :("},m(t,n){l(t,e,n)},d(t){t&&u(e)}}}function bo(e){let n,i,s;return i=new io({}),{c(){n=f("tfoot"),H(i.$$.fragment)},m(t,e){l(t,n,e),U(i,n,null),s=!0},p:t,i(t){s||(R(i.$$.fragment,t),s=!0)},o(t){N(i.$$.fragment,t),s=!1},d(t){t&&u(n),z(i)}}}function wo(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Io(e){let n;function i(t,e){return t[15]?To:Eo}let s=i(e),r=s(e);return{c(){r.c(),n=g()},m(t,e){r.m(t,e),l(t,n,e)},p(t,e){s===(s=i(t))&&r?r.p(t,e):(r.d(1),r=s(t),r&&(r.c(),r.m(n.parentNode,n)))},i:t,o:t,d(t){r.d(t),t&&u(n)}}}function Eo(e){let n;return{c(){n=f("p"),n.textContent="No memes that day :(",y(n,"class","w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center")},m(t,e){l(t,n,e)},p:t,d(t){t&&u(n)}}}function To(t){let e,n;return{c(){e=f("img"),y(e,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),h(e.src,n=`memes/${t[15]}`)||y(e,"src",n),y(e,"alt","Meme")},m(t,n){l(t,e,n)},p(t,i){32&i&&!h(e.src,n=`memes/${t[15]}`)&&y(e,"src",n)},d(t){t&&u(e)}}}function Co(e){let n,i;return n=new io({}),{c(){H(n.$$.fragment)},m(t,e){U(n,t,e),i=!0},p:t,i(t){i||(R(n.$$.fragment,t),i=!0)},o(t){N(n.$$.fragment,t),i=!1},d(t){z(n,t)}}}function So(t){let e,n,s,r,o,a,h,g,w,I,E,T,C,S,A,D,k,_,$,O,j,L,x,P,M,V,q,X,K,G,W,Y,J,Q,Z,tt,et,nt,it,st=`${t[0]}`.padStart(2,"0")+"";e=new eo({});let rt={ctx:t,current:null,token:null,hasCatch:!1,pending:bo,then:lo,catch:co,value:16,blocks:[,,,]};F(M=t[7],rt);let ot={ctx:t,current:null,token:null,hasCatch:!1,pending:Co,then:Io,catch:wo,value:15,blocks:[,,,]};return F(Y=t[5],ot),{c(){H(e.$$.fragment),n=d(),s=f("main"),r=f("h2"),r.textContent="Meme archive",o=d(),a=f("div"),h=f("div"),g=f("div"),w=f("span"),w.textContent="<",E=d(),T=f("p"),C=p(st),S=p("/"),A=p(t[1]),D=d(),k=f("div"),_=f("div"),$=f("span"),$.textContent=">",j=d(),L=f("table"),x=f("thead"),x.innerHTML='<tr><th class="border-2">Date</th> \n        <th class="border-2">Meme</th></tr>',P=d(),rt.block.c(),V=d(),q=f("section"),X=f("h2"),X.textContent="Specify a date",K=d(),G=f("input"),W=d(),ot.block.c(),J=d(),Q=f("p"),Q.textContent="DVS-style dates accepted",Z=d(),tt=f("footer"),y(w,"class","-mt-1.5"),y(g,"class","flex-1 btn"),y(g,"disabled",I=!t[4]),y(h,"class","w-1/4"),y(T,"class","flex-1 my-2 text-lg text-center"),y($,"class","-mt-1.5"),y(_,"class","flex-1 btn"),y(_,"disabled",O=!t[3]),y(k,"class","w-1/4"),y(a,"class","flex sm:w-1/4 mx-auto my-4"),y(L,"class","table-auto w-full max-w-4xl mx-auto border-white border-2"),y(G,"type","text"),y(Q,"class","mt-4"),y(q,"class","mt-48")},m(i,u){U(e,i,u),l(i,n,u),l(i,s,u),c(s,r),c(s,o),c(s,a),c(a,h),c(h,g),c(g,w),c(a,E),c(a,T),c(T,C),c(T,S),c(T,A),c(a,D),c(a,k),c(k,_),c(_,$),c(s,j),c(s,L),c(L,x),c(L,P),rt.block.m(L,rt.anchor=null),rt.mount=()=>L,rt.anchor=null,l(i,V,u),l(i,q,u),c(q,X),c(q,K),c(q,G),b(G,t[2]),c(q,W),ot.block.m(q,ot.anchor=null),ot.mount=()=>q,ot.anchor=J,c(q,J),c(q,Q),l(i,Z,u),l(i,tt,u),et=!0,nt||(it=[m(g,"click",t[11]),m(_,"click",t[12]),m(G,"input",t[14])],nt=!0)},p(e,[n]){t=e,(!et||16&n&&I!==(I=!t[4]))&&y(g,"disabled",I),(!et||1&n)&&st!==(st=`${t[0]}`.padStart(2,"0")+"")&&v(C,st),(!et||2&n)&&v(A,t[1]),(!et||8&n&&O!==(O=!t[3]))&&y(_,"disabled",O),rt.ctx=t,128&n&&M!==(M=t[7])&&F(M,rt)||B(rt,t,n),4&n&&G.value!==t[2]&&b(G,t[2]),ot.ctx=t,32&n&&Y!==(Y=t[5])&&F(Y,ot)||B(ot,t,n)},i(t){et||(R(e.$$.fragment,t),R(rt.block),R(ot.block),et=!0)},o(t){N(e.$$.fragment,t);for(let t=0;t<3;t+=1){N(rt.blocks[t])}for(let t=0;t<3;t+=1){N(ot.blocks[t])}et=!1},d(t){z(e,t),t&&u(n),t&&u(s),rt.block.d(),rt.token=null,rt=null,t&&u(V),t&&u(q),ot.block.d(),ot.token=null,ot=null,t&&u(Z),t&&u(tt),nt=!1,i(it)}}}function Ao(t,e,n){let i,s,r,{db:o}=e;const a=new Date,h=new Date(Number(a)+24*Math.pow(60,2)*Math.pow(10,3));let c=a.getMonth()+1,l=a.getFullYear(),u=Y(a),f=!0,p=!0;return t.$$set=t=>{"db"in t&&n(10,o=t.db)},t.$$.update=()=>{3&t.$$.dirty&&(c<1?(n(0,c=12),n(1,l--,l)):c>12&&(n(0,c=1),n(1,l++,l))),3&t.$$.dirty&&n(3,f=!(a.getMonth()+1===c&&a.getFullYear()===l)),3&t.$$.dirty&&n(4,p=qr<W(1,c,l)),1027&t.$$.dirty&&n(7,i=Qr(l,c)),1024&t.$$.dirty&&n(6,s=Zr(h,o)),1028&t.$$.dirty&&n(5,r=Zr(Q(u),o))},[c,l,u,f,p,r,s,i,a,h,o,()=>p&&n(0,c--,c),()=>f&&n(0,c++,c),t=>parseInt(t),function(){u=this.value,n(2,u)}]}const Do="@firebase/installations",ko="0.5.12",_o=1e4,$o="w:0.5.12",Oo="FIS_v2",jo=36e5,Lo=new ot("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function xo(t){return t instanceof rt&&t.code.includes("request-failed")}
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
     */function Po({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Mo(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Ro(t,e){const n=(await e.json()).error;return Lo.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function No({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Fo(t,{refreshToken:e}){const n=No(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
     */(e)),n}async function Bo(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
function Ho(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const Uo=/^[cdef][\w-]{21}$/;function zo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
     */(t);return Uo.test(e)?e:""}catch(t){return""}}function Vo(t){return`${t.appName}!${t.appId}`}
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
     */const qo=new Map;function Xo(t,e){const n=Vo(t);Ko(n,e),function(t,e){const n=function(){!Go&&"BroadcastChannel"in self&&(Go=new BroadcastChannel("[Firebase] FID Change"),Go.onmessage=t=>{Ko(t.data.key,t.data.fid)});return Go}();n&&n.postMessage({key:t,fid:e});0===qo.size&&Go&&(Go.close(),Go=null)}(n,e)}function Ko(t,e){const n=qo.get(t);if(n)for(const t of n)t(e)}let Go=null;
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
const Wo="firebase-installations-store";let Yo=null;function Jo(){return Yo||(Yo=xt("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Wo)}})),Yo}async function Qo(t,e){const n=Vo(t),i=(await Jo()).transaction(Wo,"readwrite"),s=i.objectStore(Wo),r=await s.get(n);return await s.put(e,n),await i.done,r&&r.fid===e.fid||Xo(t,e.fid),e}async function Zo(t){const e=Vo(t),n=(await Jo()).transaction(Wo,"readwrite");await n.objectStore(Wo).delete(e),await n.done}async function ta(t,e){const n=Vo(t),i=(await Jo()).transaction(Wo,"readwrite"),s=i.objectStore(Wo),r=await s.get(n),o=e(r);return void 0===o?await s.delete(n):await s.put(o,n),await i.done,!o||r&&r.fid===o.fid||Xo(t,o.fid),o}
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
     */async function ea(t){let e;const n=await ta(t.appConfig,(n=>{const i=function(t){return sa(t||{fid:zo(),registrationStatus:0})}(n),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(Lo.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Po(t),s=No(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={fid:n,authVersion:Oo,appId:t.appId,sdkVersion:$o},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Bo((()=>fetch(i,a)));if(h.ok){const t=await h.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Mo(t.authToken)}}throw await Ro("Create Installation",h)}(t,e);return Qo(t.appConfig,n)}catch(n){throw xo(n)&&409===n.customData.serverCode?await Zo(t.appConfig):await Qo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:na(t)}:{installationEntry:e}}(t,i);return e=s.registrationPromise,s.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function na(t){let e=await ia(t.appConfig);for(;1===e.registrationStatus;)await Ho(100),e=await ia(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await ea(t);return n||e}return e}function ia(t){return ta(t,(t=>{if(!t)throw Lo.create("installation-not-found");return sa(t)}))}function sa(t){return 1===(e=t).registrationStatus&&e.registrationTime+_o<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
     */}async function ra({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${Po(t)}/${e}/authTokens:generate`}
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
     */(t,n),s=Fo(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={installation:{sdkVersion:$o,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Bo((()=>fetch(i,a)));if(h.ok){return Mo(await h.json())}throw await Ro("Generate Auth Token",h)}async function oa(t,e=!1){let n;const i=await ta(t.appConfig,(i=>{if(!ha(i))throw Lo.create("not-registered");const s=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jo}(t)}(s))return i;if(1===s.requestStatus)return n=async function(t,e){let n=await aa(t.appConfig);for(;1===n.authToken.requestStatus;)await Ho(100),n=await aa(t.appConfig);const i=n.authToken;return 0===i.requestStatus?oa(t,e):i}(t,e),i;{if(!navigator.onLine)throw Lo.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await ra(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Qo(t.appConfig,i),n}catch(n){if(!xo(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qo(t.appConfig,n)}else await Zo(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function aa(t){return ta(t,(t=>{if(!ha(t))throw Lo.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+_o<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
     */}))}function ha(t){return void 0!==t&&2===t.registrationStatus}
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
async function ca(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await ea(t);e&&await e}
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
     */(n);return(await oa(n,e)).token}function la(t){return Lo.create("missing-app-config-values",{valueName:t})}
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
     */const ua="installations",fa=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw la("App Configuration");if(!t.name)throw la("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw la(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Wt(e,"heartbeat"),_delete:()=>Promise.resolve()}},pa=t=>{const e=Wt(t.getProvider("app").getImmediate(),ua).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await ea(e);return i?i.catch(console.error):oa(e).catch(console.error),n.fid}(e),getToken:t=>ca(e,t)}};Gt(new ft(ua,fa,"PUBLIC")),Gt(new ft("installations-internal",pa,"PRIVATE")),Zt(Do,ko),Zt(Do,ko,"esm2017");
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
const da="analytics",ga="https://www.googletagmanager.com/gtag/js",ma=new It("@firebase/analytics");
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
function ya(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function va(t,e,n,i){return async function(s,r,o){try{"event"===s?await async function(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const i=await ya(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(t){ma.error(t)}}(t,e,n,r,o):"config"===s?await async function(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const t=(await ya(n)).find((t=>t.measurementId===s));t&&await e[t.appId]}}catch(t){ma.error(t)}t("config",s,r)}(t,e,n,i,r,o):"consent"===s?t("consent","update",o):t("set",r)}catch(t){ma.error(t)}}}
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
const ba=new ot("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const wa=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Ia(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ea(t,e=wa,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw ba.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ba.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ca;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Ta({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ta(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=wa){var r,o;const{appId:a,measurementId:h}=t;try{await function(t,e){return new Promise(((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener((()=>{clearTimeout(r),i(ba.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(h)return ma.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${null===(r=t)||void 0===r?void 0:r.message}]`),{appId:a,measurementId:h};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Ia(i)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw ba.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return s.deleteThrottleMetadata(a),e}catch(e){const r=e;if(!function(t){if(!(t instanceof rt&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r)){if(s.deleteThrottleMetadata(a),h)return ma.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${null==r?void 0:r.message}]`),{appId:a,measurementId:h};throw e}const c=503===Number(null===(o=null==r?void 0:r.customData)||void 0===o?void 0:o.httpStatus)?lt(n,s.intervalMillis,30):lt(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(a,l),ma.debug(`Calling attemptFetch again in ${c} millis`),Ta(t,l,i,s)}}class Ca{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function Sa(t,e,n,i,s,r,o){var a;const h=Ea(t);h.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ma.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>ma.error(t))),e.push(h);const c=
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
async function(){var t;if(!it())return ma.warn(ba.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await st()}catch(e){return ma.warn(ba.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[l,u]=await Promise.all([h,c]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ga))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${ga}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,l.measurementId),s("js",new Date);const f=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return f.origin="firebase",f.update=!0,null!=u&&(f.firebase_id=u),s("config",l.measurementId,f),l.measurementId}
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
     */class Aa{constructor(t){this.app=t}_delete(){return delete Da[this.app.options.appId],Promise.resolve()}}let Da={},ka=[];const _a={};let $a,Oa,ja="dataLayer",La=!1;function xa(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ba.create("invalid-analytics-context",{errorInfo:e});ma.warn(n.message)}}function Pa(t,e,n){xa();const i=t.options.appId;if(!i)throw ba.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ba.create("no-api-key");ma.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Da[i])throw ba.create("already-exists",{id:i});if(!La){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(ja);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=va(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}(Da,ka,_a,ja,"gtag");Oa=t,$a=e,La=!0}Da[i]=Sa(t,ka,_a,e,$a,ja,n);return new Aa(t)}function Ma(t,e,n,i){t=ut(t),async function(t,e,n,i,s){if(s&&s.global)t("event",n,i);else{const s=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:s}))}}(Oa,Da[t.app.options.appId],e,n,i).catch((t=>ma.error(t)))}const Ra="@firebase/analytics",Na="0.8.0";Gt(new ft(da,((t,{options:e})=>Pa(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Gt(new ft("analytics-internal",(function(t){try{const e=t.getProvider(da).getImmediate();return{logEvent:(t,n,i)=>Ma(e,t,n,i)}}catch(t){throw ba.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Zt(Ra,Na),Zt(Ra,Na,"esm2017");
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
Zt("firebase","9.9.0","app");const Fa=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:zt,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw Yt.create("bad-app-name",{appName:String(i)});const s=qt.get(i);if(s){if(ht(t,s.options)&&ht(n,s.config))return s;throw Yt.create("duplicate-app",{appName:i})}const r=new gt(i);for(const t of Xt.values())r.addComponent(t);const o=new Jt(t,n,r);return qt.set(i,o),o}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(t=Qt()){const e=Wt(t=ut(t),da);e.isInitialized()?e.getImmediate():function(t,e={}){const n=Wt(t,da);if(n.isInitialized()){const t=n.getImmediate();if(ht(e,n.getOptions()))return t;throw ba.create("already-initialized")}n.initialize({options:e})}(t)}(Fa);const Ba=function(t=Qt()){return Wt(t,"firestore").getImmediate()}(Fa);return new class extends X{constructor(t){super(),q(this,t,Ao,So,r,{db:10})}}({target:document.body,props:{db:Ba}})}();
//# sourceMappingURL=archive.js.map
