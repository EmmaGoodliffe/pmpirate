var index=function(){"use strict";
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
     */const t=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},n=function(n){return function(n){const s=t(n);return e.encodeByteArray(s,!0)}(n).replace(/\./g,"")};
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
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function i(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function r(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function o(){return"object"==typeof indexedDB}function a(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class c extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,u.prototype.create)}}class u{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(h,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new c(s,o,n)}}const h=/\{\$([^}]+)}/g;function l(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(d(n)&&d(r)){if(!l(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function d(t){return null!==t&&"object"==typeof t}
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
     */function f(t,e=1e3,n=2){const s=e*Math.pow(n,t),i=Math.round(.5*s*(Math.random()-.5)*2);return Math.min(144e5,s+i)}
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
     */function p(t){return t&&t._delegate?t._delegate:t}class g{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const m="[DEFAULT]";
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
     */class y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:m})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===m?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:m:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class v{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var w;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(w||(w={}));const b={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},E=w.INFO,T={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},I=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=T[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class S{constructor(t){this.name=t,this._logLevel=E,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in w))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...t),this._logHandler(this,w.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...t),this._logHandler(this,w.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,w.INFO,...t),this._logHandler(this,w.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,w.WARN,...t),this._logHandler(this,w.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...t),this._logHandler(this,w.ERROR,...t)}}let C,A;const D=new WeakMap,k=new WeakMap,_=new WeakMap,N=new WeakMap,x=new WeakMap;let L={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return k.get(t);if("objectStoreNames"===e)return t.objectStoreNames||_.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function O(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(A||(A=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(P(this),e),M(D.get(this))}:function(...e){return M(t.apply(P(this),e))}:function(e,...n){const s=t.call(P(this),e,...n);return _.set(s,e.sort?e.sort():[e]),M(s)}}function R(t){return"function"==typeof t?O(t):(t instanceof IDBTransaction&&function(t){if(k.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));k.set(t,e)}(t),e=t,(C||(C=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,L):t);var e}function M(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(M(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&D.set(e,t)})).catch((()=>{})),x.set(e,t),e}(t);if(N.has(t))return N.get(t);const e=R(t);return e!==t&&(N.set(t,e),x.set(e,t)),e}const P=t=>x.get(t);function F(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=M(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(M(o.result),t.oldVersion,t.newVersion,M(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const V=["get","getKey","getAll","getAllKeys","count"],$=["put","add","delete","clear"],U=new Map;function B(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(U.get(e))return U.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!V.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return U.set(e,r),r}L=(t=>({...t,get:(e,n,s)=>B(e,n)||t.get(e,n,s),has:(e,n)=>!!B(e,n)||t.has(e,n)}))(L);
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
class j{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const q="@firebase/app",K="0.7.28",z=new S("@firebase/app"),G="[DEFAULT]",H={[q]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Q=new Map,W=new Map;function X(t,e){try{t.container.addComponent(e)}catch(n){z.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Y(t){const e=t.name;if(W.has(e))return z.debug(`There were multiple attempts to register component ${e}.`),!1;W.set(e,t);for(const e of Q.values())X(e,t);return!0}function J(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
     */const Z=new u("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class tt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new g("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}
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
     */function et(t="[DEFAULT]"){const e=Q.get(t);if(!e)throw Z.create("no-app",{appName:t});return e}function nt(t,e,n){var s;let i=null!==(s=H[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void z.warn(t.join(" "))}Y(new g(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */const st="firebase-heartbeat-store";let it=null;function rt(){return it||(it=F("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(st)}}).catch((t=>{throw Z.create("storage-open",{originalErrorMessage:t.message})}))),it}async function ot(t,e){var n;try{const n=(await rt()).transaction(st,"readwrite"),s=n.objectStore(st);return await s.put(e,at(t)),n.done}catch(t){throw Z.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function at(t){return`${t.name}!${t.options.appId}`}
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
     */class ct{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ht(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=ut();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ut(),{heartbeatsToSend:e,unsentEntries:s}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),lt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),i=n(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ut(){return(new Date).toISOString().substring(0,10)}class ht{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!o()&&a().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await rt()).transaction(st).objectStore(st).get(at(t))}catch(t){throw Z.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function lt(t){return n(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var dt;dt="",Y(new g("platform-logger",(t=>new j(t)),"PRIVATE")),Y(new g("heartbeat",(t=>new ct(t)),"PRIVATE")),nt(q,K,dt),nt(q,K,"esm2017"),nt("fire-js","");const ft="@firebase/installations",pt="0.5.12",gt=1e4,mt="w:0.5.12",yt="FIS_v2",vt=36e5,wt=new u("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function bt(t){return t instanceof c&&t.code.includes("request-failed")}
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
     */function Et({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Tt(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function It(t,e){const n=(await e.json()).error;return wt.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function St({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ct(t,{refreshToken:e}){const n=St(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
     */(e)),n}async function At(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
function Dt(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const kt=/^[cdef][\w-]{21}$/;function _t(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
     */(t);return kt.test(e)?e:""}catch(t){return""}}function Nt(t){return`${t.appName}!${t.appId}`}
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
     */const xt=new Map;function Lt(t,e){const n=Nt(t);Ot(n,e),function(t,e){const n=function(){!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=t=>{Ot(t.data.key,t.data.fid)});return Rt}();n&&n.postMessage({key:t,fid:e});0===xt.size&&Rt&&(Rt.close(),Rt=null)}(n,e)}function Ot(t,e){const n=xt.get(t);if(n)for(const t of n)t(e)}let Rt=null;
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
const Mt="firebase-installations-store";let Pt=null;function Ft(){return Pt||(Pt=F("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Mt)}})),Pt}async function Vt(t,e){const n=Nt(t),s=(await Ft()).transaction(Mt,"readwrite"),i=s.objectStore(Mt),r=await i.get(n);return await i.put(e,n),await s.done,r&&r.fid===e.fid||Lt(t,e.fid),e}async function $t(t){const e=Nt(t),n=(await Ft()).transaction(Mt,"readwrite");await n.objectStore(Mt).delete(e),await n.done}async function Ut(t,e){const n=Nt(t),s=(await Ft()).transaction(Mt,"readwrite"),i=s.objectStore(Mt),r=await i.get(n),o=e(r);return void 0===o?await i.delete(n):await i.put(o,n),await s.done,!o||r&&r.fid===o.fid||Lt(t,o.fid),o}
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
     */async function Bt(t){let e;const n=await Ut(t.appConfig,(n=>{const s=function(t){return Kt(t||{fid:_t(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(wt.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Et(t),i=St(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:yt,appId:t.appId,sdkVersion:mt},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await At((()=>fetch(s,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Tt(t.authToken)}}throw await It("Create Installation",c)}(t,e);return Vt(t.appConfig,n)}catch(n){throw bt(n)&&409===n.customData.serverCode?await $t(t.appConfig):await Vt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:s}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:jt(t)}:{installationEntry:e}}(t,s);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function jt(t){let e=await qt(t.appConfig);for(;1===e.registrationStatus;)await Dt(100),e=await qt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Bt(t);return n||e}return e}function qt(t){return Ut(t,(t=>{if(!t)throw wt.create("installation-not-found");return Kt(t)}))}function Kt(t){return 1===(e=t).registrationStatus&&e.registrationTime+gt<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
     */}async function zt({appConfig:t,heartbeatServiceProvider:e},n){const s=function(t,{fid:e}){return`${Et(t)}/${e}/authTokens:generate`}
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
     */(t,n),i=Ct(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:mt,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await At((()=>fetch(s,a)));if(c.ok){return Tt(await c.json())}throw await It("Generate Auth Token",c)}async function Gt(t,e=!1){let n;const s=await Ut(t.appConfig,(s=>{if(!Qt(s))throw wt.create("not-registered");const i=s.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vt}(t)}(i))return s;if(1===i.requestStatus)return n=async function(t,e){let n=await Ht(t.appConfig);for(;1===n.authToken.requestStatus;)await Dt(100),n=await Ht(t.appConfig);const s=n.authToken;return 0===s.requestStatus?Gt(t,e):s}(t,e),s;{if(!navigator.onLine)throw wt.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(s);return n=async function(t,e){try{const n=await zt(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Vt(t.appConfig,s),n}catch(n){if(!bt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vt(t.appConfig,n)}else await $t(t.appConfig);throw n}}(t,e),e}}));return n?await n:s.authToken}function Ht(t){return Ut(t,(t=>{if(!Qt(t))throw wt.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+gt<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
     */}))}function Qt(t){return void 0!==t&&2===t.registrationStatus}
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
async function Wt(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Bt(t);e&&await e}
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
     */(n);return(await Gt(n,e)).token}function Xt(t){return wt.create("missing-app-config-values",{valueName:t})}
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
     */const Yt="installations",Jt=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Xt("App Configuration");if(!t.name)throw Xt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:J(e,"heartbeat"),_delete:()=>Promise.resolve()}},Zt=t=>{const e=J(t.getProvider("app").getImmediate(),Yt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:s}=await Bt(e);return s?s.catch(console.error):Gt(e).catch(console.error),n.fid}(e),getToken:t=>Wt(e,t)}};Y(new g(Yt,Jt,"PUBLIC")),Y(new g("installations-internal",Zt,"PRIVATE")),nt(ft,pt),nt(ft,pt,"esm2017");
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
const te="analytics",ee="https://www.googletagmanager.com/gtag/js",ne=new S("@firebase/analytics");
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
function se(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function ie(t,e,n,s){return async function(i,r,o){try{"event"===i?await async function(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const s=await se(n);for(const n of t){const t=s.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(t){ne.error(t)}}(t,e,n,r,o):"config"===i?await async function(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const t=(await se(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(t){ne.error(t)}t("config",i,r)}(t,e,n,s,r,o):"consent"===i?t("consent","update",o):t("set",r)}catch(t){ne.error(t)}}}
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
const re=new u("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const oe=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function ae(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ce(t,e=oe,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw re.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw re.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new he;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),ue({appId:s,apiKey:i,measurementId:r},o,a,e)}async function ue(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=oe){var r,o;const{appId:a,measurementId:u}=t;try{await function(t,e){return new Promise(((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(r),s(re.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(s,e)}catch(t){if(u)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null===(r=t)||void 0===r?void 0:r.message}]`),{appId:a,measurementId:u};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:ae(s)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(a),e}catch(e){const r=e;if(!function(t){if(!(t instanceof c&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r)){if(i.deleteThrottleMetadata(a),u)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null==r?void 0:r.message}]`),{appId:a,measurementId:u};throw e}const h=503===Number(null===(o=null==r?void 0:r.customData)||void 0===o?void 0:o.httpStatus)?f(n,i.intervalMillis,30):f(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,l),ne.debug(`Calling attemptFetch again in ${h} millis`),ue(t,l,s,i)}}class he{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function le(t,e,n,s,i,r,c){var u;const h=ce(t);h.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>ne.error(t))),e.push(h);const l=
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
async function(){var t;if(!o())return ne.warn(re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await a()}catch(e){return ne.warn(re.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?s.getId():void 0)),[d,f]=await Promise.all([h,l]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ee))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${ee}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,d.measurementId),i("js",new Date);const p=null!==(u=null==c?void 0:c.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),i("config",d.measurementId,p),d.measurementId}
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
     */class de{constructor(t){this.app=t}_delete(){return delete fe[this.app.options.appId],Promise.resolve()}}let fe={},pe=[];const ge={};let me,ye,ve="dataLayer",we=!1;function be(){const t=[];if(r()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=re.create("invalid-analytics-context",{errorInfo:e});ne.warn(n.message)}}function Ee(t,e,n){be();const s=t.options.appId;if(!s)throw re.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw re.create("no-api-key");ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=fe[s])throw re.create("already-exists",{id:s});if(!we){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(ve);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,s,i){let r=function(...t){window[s].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=ie(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}(fe,pe,ge,ve,"gtag");ye=t,me=e,we=!0}fe[s]=le(t,pe,ge,e,me,ve,n);return new de(t)}function Te(t,e,n,s){t=p(t),async function(t,e,n,s,i){if(i&&i.global)t("event",n,s);else{const i=await e;t("event",n,Object.assign(Object.assign({},s),{send_to:i}))}}(ye,fe[t.app.options.appId],e,n,s).catch((t=>ne.error(t)))}const Ie="@firebase/analytics",Se="0.8.0";Y(new g(te,((t,{options:e})=>Ee(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Y(new g("analytics-internal",(function(t){try{const e=t.getProvider(te).getImmediate();return{logEvent:(t,n,s)=>Te(e,t,n,s)}}catch(t){throw re.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),nt(Ie,Se),nt(Ie,Se,"esm2017");
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
nt("firebase","9.9.0","app");var Ce,Ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},De=De||{},ke=Ae||self;function _e(){}function Ne(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function xe(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Le="closure_uid_"+(1e9*Math.random()>>>0),Oe=0;function Re(t,e,n){return t.call.apply(t.bind,arguments)}function Me(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return(Pe=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Re:Me).apply(null,arguments)}function Fe(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function $e(){this.s=this.s,this.o=this.o}var Ue={};$e.prototype.s=!1,$e.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Le)&&t[Le]||(t[Le]=++Oe)}(this);delete Ue[t]}},$e.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Be=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},je=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function qe(t){return Array.prototype.concat.apply([],arguments)}function Ke(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ze(t){return/^[\s\xa0]*$/.test(t)}var Ge,He=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qe(t,e){return-1!=t.indexOf(e)}function We(t,e){return t<e?-1:t>e?1:0}t:{var Xe=ke.navigator;if(Xe){var Ye=Xe.userAgent;if(Ye){Ge=Ye;break t}}Ge=""}function Je(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ze(t){const e={};for(const n in t)e[n]=t[n];return e}var tn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function en(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<tn.length;e++)n=tn[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function nn(t){return nn[" "](t),t}nn[" "]=_e;var sn,rn,on=Qe(Ge,"Opera"),an=Qe(Ge,"Trident")||Qe(Ge,"MSIE"),cn=Qe(Ge,"Edge"),un=cn||an,hn=Qe(Ge,"Gecko")&&!(Qe(Ge.toLowerCase(),"webkit")&&!Qe(Ge,"Edge"))&&!(Qe(Ge,"Trident")||Qe(Ge,"MSIE"))&&!Qe(Ge,"Edge"),ln=Qe(Ge.toLowerCase(),"webkit")&&!Qe(Ge,"Edge");function dn(){var t=ke.document;return t?t.documentMode:void 0}t:{var fn="",pn=(rn=Ge,hn?/rv:([^\);]+)(\)|;)/.exec(rn):cn?/Edge\/([\d\.]+)/.exec(rn):an?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rn):ln?/WebKit\/(\S+)/.exec(rn):on?/(?:Version)[ \/]?(\S+)/.exec(rn):void 0);if(pn&&(fn=pn?pn[1]:""),an){var gn=dn();if(null!=gn&&gn>parseFloat(fn)){sn=String(gn);break t}}sn=fn}var mn,yn={};function vn(){return function(t){var e=yn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=He(String(sn)).split("."),n=He("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=We(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||We(0==i[2].length,0==r[2].length)||We(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(ke.document&&an){var wn=dn();mn=wn||(parseInt(sn,10)||void 0)}else mn=void 0;var bn=mn,En=function(){if(!ke.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ke.addEventListener("test",_e,e),ke.removeEventListener("test",_e,e)}catch(t){}return t}();function Tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function In(t,e){if(Tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hn){t:{try{nn(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Sn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&In.Z.h.call(this)}}Tn.prototype.h=function(){this.defaultPrevented=!0},Ve(In,Tn);var Sn={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),An=0;function Dn(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++An,this.ca=this.fa=!1}function kn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _n(t){this.src=t,this.g={},this.h=0}function Nn(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Be(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(kn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function xn(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}_n.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=xn(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Dn(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var Ln="closure_lm_"+(1e6*Math.random()|0),On={};function Rn(t,e,n,s,i){if(s&&s.once)return Pn(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rn(t,e[r],n,s,i);return null}return n=qn(n),t&&t[Cn]?t.N(e,n,xe(s)?!!s.capture:!!s,i):Mn(t,e,n,!1,s,i)}function Mn(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=xe(i)?!!i.capture:!!i,a=Bn(t);if(a||(t[Ln]=a=new _n(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Un;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)En||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent($n(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Pn(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pn(t,e[r],n,s,i);return null}return n=qn(n),t&&t[Cn]?t.O(e,n,xe(s)?!!s.capture:!!s,i):Mn(t,e,n,!0,s,i)}function Fn(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fn(t,e[r],n,s,i);else s=xe(s)?!!s.capture:!!s,n=qn(n),t&&t[Cn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=xn(r=t.g[e],n,s,i))&&(kn(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Bn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xn(e,n,s,i)),(n=-1<t?e[t]:null)&&Vn(n))}function Vn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Cn])Nn(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent($n(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Bn(e))?(Nn(n,t),0==n.h&&(n.src=null,e[Ln]=null)):kn(t)}}}function $n(t){return t in On?On[t]:On[t]="on"+t}function Un(t,e){if(t.ca)t=!0;else{e=new In(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Vn(t),t=n.call(s,e)}return t}function Bn(t){return(t=t[Ln])instanceof _n?t:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qn(t){return"function"==typeof t?t:(t[jn]||(t[jn]=function(e){return t.handleEvent(e)}),t[jn])}function Kn(){$e.call(this),this.i=new _n(this),this.P=this,this.I=null}function zn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Tn(e,t);else if(e instanceof Tn)e.target=e.target||t;else{var i=e;en(e=new Tn(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Gn(o,s,!0,e)&&i}if(i=Gn(o=e.g=t,s,!0,e)&&i,i=Gn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=Gn(o=e.g=n[r],s,!1,e)&&i}function Gn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Nn(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Ve(Kn,$e),Kn.prototype[Cn]=!0,Kn.prototype.removeEventListener=function(t,e,n,s){Fn(this,t,e,n,s)},Kn.prototype.M=function(){if(Kn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)kn(n[s]);delete e.g[t],e.h--}}this.I=null},Kn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Kn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Hn=ke.JSON.stringify;function Qn(){var t=es;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Wn,Xn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Yn),(t=>t.reset()));class Yn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Jn(t){ke.setTimeout((()=>{throw t}),0)}function Zn(t,e){Wn||function(){var t=ke.Promise.resolve(void 0);Wn=function(){t.then(ns)}}(),ts||(Wn(),ts=!0),es.add(t,e)}var ts=!1,es=new class{constructor(){this.h=this.g=null}add(t,e){const n=Xn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function ns(){for(var t;t=Qn();){try{t.h.call(t.g)}catch(t){Jn(t)}var e=Xn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ts=!1}function ss(t,e){Kn.call(this),this.h=t||1,this.g=e||ke,this.j=Pe(this.kb,this),this.l=Date.now()}function is(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function rs(t,e,n){if("function"==typeof t)n&&(t=Pe(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pe(t.handleEvent,t)}return 2147483647<Number(e)?-1:ke.setTimeout(t,e||0)}function os(t){t.g=rs((()=>{t.g=null,t.i&&(t.i=!1,os(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ve(ss,Kn),(Ce=ss.prototype).da=!1,Ce.S=null,Ce.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),zn(this,"tick"),this.da&&(is(this),this.start()))}},Ce.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ce.M=function(){ss.Z.M.call(this),is(this),delete this.g};class as extends $e{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:os(this)}M(){super.M(),this.g&&(ke.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(t){$e.call(this),this.h=t,this.g={}}Ve(cs,$e);var us=[];function hs(t,e,n,s){Array.isArray(n)||(n&&(us[0]=n.toString()),n=us);for(var i=0;i<n.length;i++){var r=Rn(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ls(t){Je(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Vn(t)}),t),t.g={}}function ds(){this.g=!0}function fs(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Hn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}cs.prototype.M=function(){cs.Z.M.call(this),ls(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ds.prototype.Aa=function(){this.g=!1},ds.prototype.info=function(){};var ps={},gs=null;function ms(){return gs=gs||new Kn}function ys(t){Tn.call(this,ps.Ma,t)}function vs(t){const e=ms();zn(e,new ys(e,t))}function ws(t,e){Tn.call(this,ps.STAT_EVENT,t),this.stat=e}function bs(t){const e=ms();zn(e,new ws(e,t))}function Es(t,e){Tn.call(this,ps.Na,t),this.size=e}function Ts(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ke.setTimeout((function(){t()}),e)}ps.Ma="serverreachability",Ve(ys,Tn),ps.STAT_EVENT="statevent",Ve(ws,Tn),ps.Na="timingevent",Ve(Es,Tn);var Is={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ss={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Cs(){}function As(t){return t.h||(t.h=t.i())}function Ds(){}Cs.prototype.h=null;var ks,_s={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ns(){Tn.call(this,"d")}function xs(){Tn.call(this,"c")}function Ls(){}function Os(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new cs(this),this.P=Ms,t=un?125:void 0,this.W=new ss(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Rs}function Rs(){this.i=null,this.g="",this.h=!1}Ve(Ns,Tn),Ve(xs,Tn),Ve(Ls,Cs),Ls.prototype.g=function(){return new XMLHttpRequest},Ls.prototype.i=function(){return{}},ks=new Ls;var Ms=45e3,Ps={},Fs={};function Vs(t,e,n){t.K=1,t.v=ai(ei(e)),t.s=n,t.U=!0,$s(t,null)}function $s(t,e){t.F=Date.now(),qs(t),t.A=ei(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),bi(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Rs,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new as(Pe(t.Ia,t,t.g),t.O)),hs(t.V,t.g,"readystatechange",t.gb),e=t.H?Ze(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),vs(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Us(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Bs(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=js(t,n),s==Fs){4==e&&(t.o=4,bs(14),i=!1),fs(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ps){t.o=4,bs(15),fs(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}fs(t.j,t.m,s,null),Qs(t,s)}Us(t)&&s!=Fs&&s!=Ps&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,bs(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dr(e),e.L=!0,bs(11))):(fs(t.j,t.m,n,"[Invalid Chunked Response]"),Hs(t),Gs(t))}function js(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Fs:(n=Number(e.substring(n,s)),isNaN(n)?Ps:(s+=1)+n>e.length?Fs:(e=e.substr(s,n),t.C=s+n,e))}function qs(t){t.Y=Date.now()+t.P,Ks(t,t.P)}function Ks(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ts(Pe(t.eb,t),e)}function zs(t){t.B&&(ke.clearTimeout(t.B),t.B=null)}function Gs(t){0==t.l.G||t.I||gr(t.l,t)}function Hs(t){zs(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,is(t.W),ls(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ai(n.i,t)))if(n.I=t.N,!t.J&&Ai(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;pr(n),sr(n)}lr(n),bs(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ts(Pe(n.ab,n),6e3));if(1>=Ci(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else yr(n,11)}else if((t.J||n.g==t)&&pr(n),!ze(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Qe(t,"spdy")||Qe(t,"quic")||Qe(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Di(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,oi(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=wr(s,s.H?s.la:null,s.W),o.J){ki(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(zs(a),qs(a)),s.g=o}else hr(s);0<n.l.length&&or(n)}else"stop"!=u[0]&&"close"!=u[0]||yr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?yr(n,7):nr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}vs(4)}catch(t){}}function Ws(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ne(t)||"string"==typeof t)je(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Ne(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Ne(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Xs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Xs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ys(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Js(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Js(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Js(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ce=Os.prototype).setTimeout=function(t){this.P=t},Ce.gb=function(t){t=t.target;const e=this.L;e&&3==Yi(t)?e.l():this.Ia(t)},Ce.Ia=function(t){try{if(t==this.g)t:{const h=Yi(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||un||this.g&&(this.h.h||this.g.ga()||Ji(this.g)))){this.I||4!=h||7==e||vs(8==e||0>=l?3:2),zs(this);var n=this.g.ba();this.N=n;e:if(Us(this)){var s=Ji(this.g);t="";var i=s.length,r=4==Yi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Hs(this),Gs(this);var o="";break e}this.h.i=new ke.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,bs(12),Hs(this),Gs(this);break t}fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qs(this,n)}this.U?(Bs(this,h,o),un&&this.i&&3==h&&(hs(this.V,this.W,"tick",this.fb),this.W.start())):(fs(this.j,this.m,o,null),Qs(this,o)),4==h&&Hs(this),this.i&&!this.I&&(4==h?gr(this.l,this):(this.i=!1,qs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,bs(12)):(this.o=0,bs(13)),Hs(this),Gs(this)}}}catch(t){}},Ce.fb=function(){if(this.g){var t=Yi(this.g),e=this.g.ga();this.C<e.length&&(zs(this),Bs(this,t,e),this.i&&4!=t&&qs(this))}},Ce.cancel=function(){this.I=!0,Hs(this)},Ce.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(vs(3),bs(17)),Hs(this),this.o=2,Gs(this)):Ks(this,this.Y-t)},(Ce=Xs.prototype).R=function(){Ys(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ce.T=function(){return Ys(this),this.g.concat()},Ce.get=function(t,e){return Js(this.h,t)?this.h[t]:e},Ce.set=function(t,e){Js(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ce.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Zs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ti(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ti){this.g=void 0!==e?e:t.g,ni(this,t.j),this.s=t.s,si(this,t.i),ii(this,t.m),this.l=t.l,e=t.h;var n=new mi;n.i=e.i,e.g&&(n.g=new Xs(e.g),n.h=e.h),ri(this,n),this.o=t.o}else t&&(n=String(t).match(Zs))?(this.g=!!e,ni(this,n[1]||"",!0),this.s=ci(n[2]||""),si(this,n[3]||"",!0),ii(this,n[4]),this.l=ci(n[5]||"",!0),ri(this,n[6]||"",!0),this.o=ci(n[7]||"")):(this.g=!!e,this.h=new mi(null,this.g))}function ei(t){return new ti(t)}function ni(t,e,n){t.j=n?ci(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function si(t,e,n){t.i=n?ci(e,!0):e}function ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ri(t,e,n){e instanceof mi?(t.h=e,function(t,e){e&&!t.j&&(yi(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vi(this,e),bi(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=ui(e,pi)),t.h=new mi(e,t.g))}function oi(t,e,n){t.h.set(e,n)}function ai(t){return oi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ci(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ui(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,hi),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hi(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ui(e,li,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ui(e,li,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(ui(n,"/"==n.charAt(0)?fi:di,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ui(n,gi)),t.join("")};var li=/[#\/\?@]/g,di=/[#\?:]/g,fi=/[#\?]/g,pi=/[#\?@]/g,gi=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yi(t){t.g||(t.g=new Xs,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vi(t,e){yi(t),e=Ei(t,e),Js(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Js((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ys(t)))}function wi(t,e){return yi(t),e=Ei(t,e),Js(t.g.h,e)}function bi(t,e,n){vi(t,e),0<n.length&&(t.i=null,t.g.set(Ei(t,e),Ke(n)),t.h+=n.length)}function Ei(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ce=mi.prototype).add=function(t,e){yi(this),this.i=null,t=Ei(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ce.forEach=function(t,e){yi(this),this.g.forEach((function(n,s){je(n,(function(n){t.call(e,n,s,this)}),this)}),this)},Ce.T=function(){yi(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},Ce.R=function(t){yi(this);var e=[];if("string"==typeof t)wi(this,t)&&(e=qe(e,this.g.get(Ei(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=qe(e,t[n])}return e},Ce.set=function(t,e){return yi(this),this.i=null,wi(this,t=Ei(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ce.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ce.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ti(t){this.l=t||Ii,ke.PerformanceNavigationTiming?t=0<(t=ke.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ke.g&&ke.g.Ea&&ke.g.Ea()&&ke.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ii=10;function Si(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ci(t){return t.h?1:t.g?t.g.size:0}function Ai(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Di(t,e){t.g?t.g.add(e):t.h=e}function ki(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _i(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ke(t.i)}function Ni(){}function xi(){this.g=new Ni}function Li(t,e,n){const s=n||"";try{Ws(t,(function(t,n){let i=t;xe(t)&&(i=Hn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Oi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Ri(t){this.l=t.$b||null,this.j=t.ib||!1}function Mi(t,e){Kn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ti.prototype.cancel=function(){if(this.i=_i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ni.prototype.stringify=function(t){return ke.JSON.stringify(t,void 0)},Ni.prototype.parse=function(t){return ke.JSON.parse(t,void 0)},Ve(Ri,Cs),Ri.prototype.g=function(){return new Mi(this.l,this.j)},Ri.prototype.i=function(t){return function(){return t}}({}),Ve(Mi,Kn);var Pi=0;function Fi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$i(t)}function $i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ce=Mi.prototype).open=function(t,e){if(this.readyState!=Pi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$i(this)},Ce.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ke).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ce.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vi(this)),this.readyState=Pi},Ce.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ke.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ce.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vi(this):$i(this),3==this.readyState&&Fi(this)}},Ce.Ua=function(t){this.g&&(this.response=this.responseText=t,Vi(this))},Ce.Ta=function(t){this.g&&(this.response=t,Vi(this))},Ce.ha=function(){this.g&&Vi(this)},Ce.setRequestHeader=function(t,e){this.v.append(t,e)},Ce.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ce.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ui=ke.JSON.parse;function Bi(t){Kn.call(this),this.headers=new Xs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ji,this.K=this.L=!1}Ve(Bi,Kn);var ji="",qi=/^https?$/i,Ki=["POST","PUT"];function zi(t){return"content-type"==t.toLowerCase()}function Gi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hi(t),Wi(t)}function Hi(t){t.D||(t.D=!0,zn(t,"complete"),zn(t,"error"))}function Qi(t){if(t.h&&void 0!==De&&(!t.C[1]||4!=Yi(t)||2!=t.ba()))if(t.v&&4==Yi(t))rs(t.Fa,0,t);else if(zn(t,"readystatechange"),4==Yi(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Zs)[1]||null;if(!i&&ke.self&&ke.self.location){var r=ke.self.location.protocol;i=r.substr(0,r.length-1)}s=!qi.test(i?i.toLowerCase():"")}n=s}if(n)zn(t,"complete"),zn(t,"success");else{t.m=6;try{var o=2<Yi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Hi(t)}}finally{Wi(t)}}}function Wi(t,e){if(t.g){Xi(t);const n=t.g,s=t.C[0]?_e:null;t.g=null,t.C=null,e||zn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Xi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ke.clearTimeout(t.A),t.A=null)}function Yi(t){return t.g?t.g.readyState:0}function Ji(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ji:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return Je(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):oi(t,e,n))}function tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function er(t){this.za=0,this.l=[],this.h=new ds,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=tr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=tr("baseRetryDelayMs",5e3,t),this.$a=tr("retryDelaySeedMs",1e4,t),this.Ya=tr("forwardChannelMaxRetries",2,t),this.ra=tr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ti(t&&t.concurrentRequestLimit),this.Ca=new xi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function nr(t){if(ir(t),3==t.G){var e=t.V++,n=ei(t.F);oi(n,"SID",t.J),oi(n,"RID",e),oi(n,"TYPE","terminate"),cr(t,n),(e=new Os(t,t.h,e,void 0)).K=2,e.v=ai(ei(n)),n=!1,ke.navigator&&ke.navigator.sendBeacon&&(n=ke.navigator.sendBeacon(e.v.toString(),"")),!n&&ke.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),qs(e)}vr(t)}function sr(t){t.g&&(dr(t),t.g.cancel(),t.g=null)}function ir(t){sr(t),t.u&&(ke.clearTimeout(t.u),t.u=null),pr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&ke.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&or(t)}function or(t){Si(t.i)||t.m||(t.m=!0,Zn(t.Ha,t),t.C=0)}function ar(t,e){var n;n=e?e.m:t.V++;const s=ei(t.F);oi(s,"SID",t.J),oi(s,"RID",n),oi(s,"AID",t.U),cr(t,s),t.o&&t.s&&Zi(s,t.o,t.s),n=new Os(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ur(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Di(t.i,n),Vs(n,s,e)}function cr(t,e){t.j&&Ws({},(function(t,n){oi(e,n,t)}))}function ur(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Pe(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Li(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function hr(t){t.g||t.u||(t.Y=1,Zn(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Ts(Pe(t.Ga,t),mr(t,t.A)),t.A++,!0)}function dr(t){null!=t.B&&(ke.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new Os(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ei(t.oa);oi(e,"RID","rpc"),oi(e,"SID",t.J),oi(e,"CI",t.N?"0":"1"),oi(e,"AID",t.U),cr(t,e),oi(e,"TYPE","xmlhttp"),t.o&&t.s&&Zi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ai(ei(e)),n.s=null,n.U=!0,$s(n,t)}function pr(t){null!=t.v&&(ke.clearTimeout(t.v),t.v=null)}function gr(t,e){var n=null;if(t.g==e){pr(t),dr(t),t.g=null;var s=2}else{if(!Ai(t.i,e))return;n=e.D,ki(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;zn(s=ms(),new Es(s,n,e,i)),or(t)}else hr(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(Ci(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Ts(Pe(t.Ha,t,e),mr(t,t.C)),t.C++,0)))}(t,e)||2==s&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yr(t,5);break;case 4:yr(t,10);break;case 3:yr(t,6);break;default:yr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Pe(t.jb,t);n||(n=new ti("//www.google.com/images/cleardot.gif"),ke.location&&"http"==ke.location.protocol||ni(n,"https"),ai(n)),function(t,e){const n=new ds;if(ke.Image){const s=new Image;s.onload=Fe(Oi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Fe(Oi,n,s,"TestLoadImage: error",!1,e),s.onabort=Fe(Oi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Fe(Oi,n,s,"TestLoadImage: timeout",!1,e),ke.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else bs(2);t.G=0,t.j&&t.j.va(e),vr(t),ir(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==_i(t.i).length&&0==t.l.length||(t.i.i.length=0,Ke(t.l),t.l.length=0),t.j.ua())}function wr(t,e,n){let s=function(t){return t instanceof ti?ei(t):new ti(t,void 0)}(n);if(""!=s.i)e&&si(s,e+"."+s.i),ii(s,s.m);else{const t=ke.location;s=function(t,e,n,s){var i=new ti(null,void 0);return t&&ni(i,t),e&&si(i,e),n&&ii(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Je(t.aa,(function(t,e){oi(s,e,t)})),e=t.D,n=t.sa,e&&n&&oi(s,e,n),oi(s,"VER",t.ma),cr(t,s),s}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Bi(new Ri({ib:!0})):new Bi(t.qa)).L=t.H,e}function Er(){}function Tr(){if(an&&!(10<=Number(bn)))throw Error("Environmental error: no available transport.")}function Ir(t,e){Kn.call(this),this.g=new er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ze(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ze(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ar(this)}function Sr(t){Ns.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Cr(){xs.call(this),this.status=1}function Ar(t){this.g=t}(Ce=Bi.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ks.g(),this.C=this.u?As(this.u):As(ks),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Gi(this,t)}t=n||"";const i=new Xs(this.headers);s&&Ws(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=zi;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=ke.FormData&&t instanceof ke.FormData,!(0<=Be(Ki,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xi(this),0<this.B&&((this.K=function(t){return an&&vn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=rs(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Gi(this,t)}},Ce.pa=function(){void 0!==De&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zn(this,"timeout"),this.abort(8))},Ce.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zn(this,"complete"),zn(this,"abort"),Wi(this))},Ce.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wi(this,!0)),Bi.Z.M.call(this)},Ce.Fa=function(){this.s||(this.F||this.v||this.l?Qi(this):this.cb())},Ce.cb=function(){Qi(this)},Ce.ba=function(){try{return 2<Yi(this)?this.g.status:-1}catch(t){return-1}},Ce.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ce.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ui(e)}},Ce.Da=function(){return this.m},Ce.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ce=er.prototype).ma=8,Ce.G=1,Ce.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ce.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Os(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Ze(r),en(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ur(this,i,e),oi(n=ei(this.F),"RID",t),oi(n,"CVER",22),this.D&&oi(n,"X-HTTP-Session-Id",this.D),cr(this,n),this.o&&r&&Zi(n,this.o,r),Di(this.i,i),this.Ra&&oi(n,"TYPE","init"),this.ja?(oi(n,"$req",e),oi(n,"SID","null"),i.$=!0,Vs(i,n,null)):Vs(i,n,e),this.G=2}}else 3==this.G&&(t?ar(this,t):0==this.l.length||Si(this.i)||ar(this))},Ce.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ts(Pe(this.bb,this),t)}},Ce.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,bs(10),sr(this),fr(this))},Ce.ab=function(){null!=this.v&&(this.v=null,sr(this),lr(this),bs(19))},Ce.jb=function(t){t?(this.h.info("Successfully pinged google.com"),bs(2)):(this.h.info("Failed to ping google.com"),bs(1))},(Ce=Er.prototype).xa=function(){},Ce.wa=function(){},Ce.va=function(){},Ce.ua=function(){},Ce.Oa=function(){},Tr.prototype.g=function(t,e){return new Ir(t,e)},Ve(Ir,Kn),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zn(Pe(t.hb,t,e))),bs(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wr(t,null,t.W),or(t)},Ir.prototype.close=function(){nr(this.g)},Ir.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?((e={}).__data__=Hn(t),rr(this.g,e)):rr(this.g,t)},Ir.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,Ir.Z.M.call(this)},Ve(Sr,Ns),Ve(Cr,xs),Ve(Ar,Er),Ar.prototype.xa=function(){zn(this.g,"a")},Ar.prototype.wa=function(t){zn(this.g,new Sr(t))},Ar.prototype.va=function(t){zn(this.g,new Cr(t))},Ar.prototype.ua=function(){zn(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Ss.COMPLETE="complete",Ds.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",Kn.prototype.listen=Kn.prototype.N,Bi.prototype.listenOnce=Bi.prototype.O,Bi.prototype.getLastError=Bi.prototype.La,Bi.prototype.getLastErrorCode=Bi.prototype.Da,Bi.prototype.getStatus=Bi.prototype.ba,Bi.prototype.getResponseJson=Bi.prototype.Qa,Bi.prototype.getResponseText=Bi.prototype.ga,Bi.prototype.send=Bi.prototype.ea;var Dr=Is,kr=Ss,_r=ps,Nr=10,xr=11,Lr=Ri,Or=Ds,Rr=Bi;const Mr="@firebase/firestore";
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
     */class Pr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pr.UNAUTHENTICATED=new Pr(null),Pr.GOOGLE_CREDENTIALS=new Pr("google-credentials-uid"),Pr.FIRST_PARTY=new Pr("first-party-uid"),Pr.MOCK_USER=new Pr("mock-user");
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
let Fr="9.9.0";
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
     */const Vr=new S("@firebase/firestore");function $r(){return Vr.logLevel}function Ur(t,...e){if(Vr.logLevel<=w.DEBUG){const n=e.map(qr);Vr.debug(`Firestore (${Fr}): ${t}`,...n)}}function Br(t,...e){if(Vr.logLevel<=w.ERROR){const n=e.map(qr);Vr.error(`Firestore (${Fr}): ${t}`,...n)}}function jr(t,...e){if(Vr.logLevel<=w.WARN){const n=e.map(qr);Vr.warn(`Firestore (${Fr}): ${t}`,...n)}}function qr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Kr(t="Unexpected state"){const e=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: `+t;throw Br(e),new Error(e)}function zr(t,e){t||Kr()}function Gr(t,e){return t}
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
     */const Hr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qr extends c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Wr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Xr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pr.UNAUTHENTICATED)))}shutdown(){}}class Jr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zr{constructor(t){this.t=t,this.currentUser=Pr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ur("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ur("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ur("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(zr("string"==typeof e.accessToken),new Xr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return zr(null===t||"string"==typeof t),new Pr(t)}}class to{constructor(t,e,n){this.type="FirstParty",this.user=Pr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class eo{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new to(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Pr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class no{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class so{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ur("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ur("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ur("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):Ur("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(zr("string"==typeof t.token),this.p=t.token,new no(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function io(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class ro{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=io(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function oo(t,e){return t<e?-1:t>e?1:0}function ao(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class co{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qr(Hr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qr(Hr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qr(Hr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qr(Hr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return co.fromMillis(Date.now())}static fromDate(t){return co.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new co(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?oo(this.nanoseconds,t.nanoseconds):oo(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class uo{constructor(t){this.timestamp=t}static fromTimestamp(t){return new uo(t)}static min(){return new uo(new co(0,0))}static max(){return new uo(new co(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class ho{constructor(t,e,n){void 0===e?e=0:e>t.length&&Kr(),void 0===n?n=t.length-e:n>t.length-e&&Kr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ho.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ho?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class lo extends ho{construct(t,e,n){return new lo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qr(Hr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new lo(e)}static emptyPath(){return new lo([])}}const fo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class po extends ho{construct(t,e,n){return new po(t,e,n)}static isValidIdentifier(t){return fo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),po.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new po(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Qr(Hr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Qr(Hr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qr(Hr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Qr(Hr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new po(e)}static emptyPath(){return new po([])}}
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
     */class go{constructor(t){this.path=t}static fromPath(t){return new go(lo.fromString(t))}static fromName(t){return new go(lo.fromString(t).popFirst(5))}static empty(){return new go(lo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===lo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return lo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new go(new lo(t.slice()))}}function mo(t){return new yo(t.readTime,t.key,-1)}class yo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new yo(uo.min(),go.empty(),-1)}static max(){return new yo(uo.max(),go.empty(),-1)}}function vo(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=go.comparator(t.documentKey,e.documentKey),0!==n?n:oo(t.largestBatchId,e.largestBatchId))}
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
async function wo(t){if(t.code!==Hr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Ur("LocalStore","Unexpectedly lost primary lease")}
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
     */class bo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Kr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new bo(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof bo?e:bo.resolve(e)}catch(t){return bo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):bo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):bo.reject(e)}static resolve(t){return new bo(((e,n)=>{e(t)}))}static reject(t){return new bo(((e,n)=>{n(t)}))}static waitFor(t){return new bo(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=bo.resolve(!1);for(const n of t)e=e.next((t=>t?bo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new bo(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new bo(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function Eo(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
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
     */class To{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
     */function Io(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function So(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
To.ot=-1;class Co{constructor(t,e){this.comparator=t,this.root=e||Do.EMPTY}insert(t,e){return new Co(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Do.BLACK,null,null))}remove(t){return new Co(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Do.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ao(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ao(this.root,t,this.comparator,!0)}}class Ao{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Do{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Do.RED,this.left=null!=s?s:Do.EMPTY,this.right=null!=i?i:Do.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Do(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Do.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Do.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Do.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Do.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Kr();if(this.right.isRed())throw Kr();const t=this.left.check();if(t!==this.right.check())throw Kr();return t+(this.isRed()?0:1)}}Do.EMPTY=null,Do.RED=!0,Do.BLACK=!1,Do.EMPTY=new class{constructor(){this.size=0}get key(){throw Kr()}get value(){throw Kr()}get color(){throw Kr()}get left(){throw Kr()}get right(){throw Kr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Do(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ko{constructor(t){this.comparator=t,this.data=new Co(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ko))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ko(this.comparator);return e.data=t,e}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class No{constructor(t){this.fields=t,t.sort(po.comparator)}static empty(){return new No([])}unionWith(t){let e=new ko(po.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new No(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ao(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class xo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new xo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return oo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xo.EMPTY_BYTE_STRING=new xo("");const Lo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oo(t){if(zr(!!t),"string"==typeof t){let e=0;const n=Lo.exec(t);if(zr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ro(t.seconds),nanos:Ro(t.nanos)}}function Ro(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Mo(t){return"string"==typeof t?xo.fromBase64String(t):xo.fromUint8Array(t)}
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
     */function Po(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fo(t){const e=t.mapValue.fields.__previous_value__;return Po(e)?Fo(e):e}function Vo(t){const e=Oo(t.mapValue.fields.__local_write_time__.timestampValue);return new co(e.seconds,e.nanos)}
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
     */class $o{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Uo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Uo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Uo&&t.projectId===this.projectId&&t.database===this.database}}
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
     */function Bo(t){return null==t}function jo(t){return 0===t&&1/t==-1/0}
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
     */const qo={fields:{__type__:{stringValue:"__max__"}}};function Ko(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Po(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:Kr()}function zo(t,e){if(t===e)return!0;const n=Ko(t);if(n!==Ko(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Oo(t.timestampValue),s=Oo(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Mo(t.bytesValue).isEqual(Mo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ro(t.geoPointValue.latitude)===Ro(e.geoPointValue.latitude)&&Ro(t.geoPointValue.longitude)===Ro(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ro(t.integerValue)===Ro(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ro(t.doubleValue),s=Ro(e.doubleValue);return n===s?jo(n)===jo(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],zo);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Io(n)!==Io(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!zo(n[t],s[t])))return!1;return!0}(t,e);default:return Kr()}}function Go(t,e){return void 0!==(t.values||[]).find((t=>zo(t,e)))}function Ho(t,e){if(t===e)return 0;const n=Ko(t),s=Ko(e);if(n!==s)return oo(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oo(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ro(t.integerValue||t.doubleValue),s=Ro(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Qo(t.timestampValue,e.timestampValue);case 4:return Qo(Vo(t),Vo(e));case 5:return oo(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Mo(t),s=Mo(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=oo(n[t],s[t]);if(0!==e)return e}return oo(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=oo(Ro(t.latitude),Ro(e.latitude));return 0!==n?n:oo(Ro(t.longitude),Ro(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Ho(n[t],s[t]);if(e)return e}return oo(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===qo&&e===qo)return 0;if(t===qo)return 1;if(e===qo)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=oo(s[t],r[t]);if(0!==e)return e;const o=Ho(n[s[t]],i[r[t]]);if(0!==o)return o}return oo(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Kr()}}function Qo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return oo(t,e);const n=Oo(t),s=Oo(e),i=oo(n.seconds,s.seconds);return 0!==i?i:oo(n.nanos,s.nanos)}function Wo(t){return Xo(t)}function Xo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Oo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,go.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Xo(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Xo(t.fields[i])}`;return n+"}"}(t.mapValue):Kr();var e,n}function Yo(t){return!!t&&"integerValue"in t}function Jo(t){return!!t&&"arrayValue"in t}function Zo(t){return!!t&&"nullValue"in t}function ta(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return So(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=na(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=na(t.arrayValue.values[n]);return e}return Object.assign({},t)}class sa{constructor(t){this.value=t}static empty(){return new sa({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ea(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=na(e)}setAll(t){let e=po.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=na(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());ea(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){So(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new sa(na(this.value))}}
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
     */class ia{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new ia(t,0,uo.min(),uo.min(),sa.empty(),0)}static newFoundDocument(t,e,n){return new ia(t,1,e,uo.min(),n,0)}static newNoDocument(t,e){return new ia(t,2,e,uo.min(),sa.empty(),0)}static newUnknownDocument(t,e){return new ia(t,3,e,uo.min(),sa.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sa.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sa.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=uo.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ia&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ia(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class ra{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ut=null}}function oa(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ra(t,e,n,s,i,r,o)}function aa(t){const e=Gr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Wo(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Wo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Wo(t))).join(",")),e.ut=t}return e.ut}function ca(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ea(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!zo(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ia(t.startAt,e.startAt)&&Ia(t.endAt,e.endAt)}function ua(t){return go.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ha extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new la(t,e,n):"array-contains"===e?new ga(t,n):"in"===e?new ma(t,n):"not-in"===e?new ya(t,n):"array-contains-any"===e?new va(t,n):new ha(t,e,n)}static ct(t,e,n){return"in"===e?new da(t,n):new fa(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Ho(e,this.value)):null!==e&&Ko(this.value)===Ko(e)&&this.at(Ho(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Kr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class la extends ha{constructor(t,e,n){super(t,e,n),this.key=go.fromName(n.referenceValue)}matches(t){const e=go.comparator(t.key,this.key);return this.at(e)}}class da extends ha{constructor(t,e){super(t,"in",e),this.keys=pa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fa extends ha{constructor(t,e){super(t,"not-in",e),this.keys=pa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pa(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>go.fromName(t.referenceValue)))}class ga extends ha{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Jo(e)&&Go(e.arrayValue,this.value)}}class ma extends ha{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Go(this.value.arrayValue,e)}}class ya extends ha{constructor(t,e){super(t,"not-in",e)}matches(t){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Go(this.value.arrayValue,e)}}class va extends ha{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Jo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Go(this.value.arrayValue,t)))}}class wa{constructor(t,e){this.position=t,this.inclusive=e}}class ba{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ea(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ta(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?go.comparator(go.fromName(o.referenceValue),n.key):Ho(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Ia(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zo(t.position[n],e.position[n]))return!1;return!0}
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
     */class Sa{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Ca(t){return new Sa(t)}function Aa(t){const e=Gr(t);if(null===e.lt){e.lt=[];const t=function(t){for(const e of t.filters)if(e.ht())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ba(t)),e.lt.push(new ba(po.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ba(po.keyField(),t))}}}return e.lt}function Da(t){const e=Gr(t);if(!e.ft)if("F"===e.limitType)e.ft=oa(e.path,e.collectionGroup,Aa(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Aa(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ba(n.field,e))}const n=e.endAt?new wa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new wa(e.startAt.position,e.startAt.inclusive):null;e.ft=oa(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.ft}function ka(t,e){return ca(Da(t),Da(e))&&t.limitType===e.limitType}function _a(t){return`${aa(Da(t))}|lt:${t.limitType}`}function Na(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Wo(e.value)}`;var e})).join(", ")}]`),Bo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Wo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Wo(t))).join(",")),`Target(${e})`}(Da(t))}; limitType=${t.limitType})`}function xa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):go.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ta(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Aa(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ta(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Aa(t),e))}(t,e)}function La(t){return(e,n)=>{let s=!1;for(const i of Aa(t)){const t=Oa(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Oa(t,e,n){const s=t.field.isKeyField()?go.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Ho(s,i):Kr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Kr()}}
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
     * Copyright 2018 Google LLC
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
     */class Ra{constructor(){this._=void 0}}function Ma(t,e,n){return t instanceof Fa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Va?$a(t,e):t instanceof Ua?Ba(t,e):function(t,e){const n=function(t,e){return t instanceof ja?Yo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),s=qa(n)+qa(t._t);return Yo(n)&&Yo(t._t)?function(t){return{integerValue:""+t}}(s):function(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}(t.wt,s)}(t,e)}function Pa(t,e,n){return t instanceof Va?$a(t,e):t instanceof Ua?Ba(t,e):n}class Fa extends Ra{}class Va extends Ra{constructor(t){super(),this.elements=t}}function $a(t,e){const n=Ka(e);for(const e of t.elements)n.some((t=>zo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ua extends Ra{constructor(t){super(),this.elements=t}}function Ba(t,e){let n=Ka(e);for(const e of t.elements)n=n.filter((t=>!zo(t,e)));return{arrayValue:{values:n}}}class ja extends Ra{constructor(t,e){super(),this.wt=t,this._t=e}}function qa(t){return Ro(t.integerValue||t.doubleValue)}function Ka(t){return Jo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class za{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new za}static exists(t){return new za(void 0,t)}static updateTime(t){return new za(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ga(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ha{}function Qa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new sc(t.key,za.none()):new Ja(t.key,t.data,za.none());{const n=t.data,s=sa.empty();let i=new ko(po.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Za(t.key,s,new No(i.toArray()),za.none())}}function Wa(t,e,n){t instanceof Ja?function(t,e,n){const s=t.value.clone(),i=ec(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Za?function(t,e,n){if(!Ga(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=ec(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(tc(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Xa(t,e,n,s){return t instanceof Ja?function(t,e,n,s){if(!Ga(t.precondition,e))return n;const i=t.value.clone(),r=nc(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Za?function(t,e,n,s){if(!Ga(t.precondition,e))return n;const i=nc(t.fieldTransforms,s,e),r=e.data;return r.setAll(tc(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Ga(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ya(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ao(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Va&&e instanceof Va||t instanceof Ua&&e instanceof Ua?ao(t.elements,e.elements,zo):t instanceof ja&&e instanceof ja?zo(t._t,e._t):t instanceof Fa&&e instanceof Fa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends Ha{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Za extends Ha{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function ec(t,e,n){const s=new Map;zr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Pa(o,a,n[i]))}return s}function nc(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Ma(t,r,e))}return s}class sc extends Ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class ic{constructor(t){this.count=t}}
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
     */var rc,oc;function ac(t){if(void 0===t)return Br("GRPC error has no .code"),Hr.UNKNOWN;switch(t){case rc.OK:return Hr.OK;case rc.CANCELLED:return Hr.CANCELLED;case rc.UNKNOWN:return Hr.UNKNOWN;case rc.DEADLINE_EXCEEDED:return Hr.DEADLINE_EXCEEDED;case rc.RESOURCE_EXHAUSTED:return Hr.RESOURCE_EXHAUSTED;case rc.INTERNAL:return Hr.INTERNAL;case rc.UNAVAILABLE:return Hr.UNAVAILABLE;case rc.UNAUTHENTICATED:return Hr.UNAUTHENTICATED;case rc.INVALID_ARGUMENT:return Hr.INVALID_ARGUMENT;case rc.NOT_FOUND:return Hr.NOT_FOUND;case rc.ALREADY_EXISTS:return Hr.ALREADY_EXISTS;case rc.PERMISSION_DENIED:return Hr.PERMISSION_DENIED;case rc.FAILED_PRECONDITION:return Hr.FAILED_PRECONDITION;case rc.ABORTED:return Hr.ABORTED;case rc.OUT_OF_RANGE:return Hr.OUT_OF_RANGE;case rc.UNIMPLEMENTED:return Hr.UNIMPLEMENTED;case rc.DATA_LOSS:return Hr.DATA_LOSS;default:return Kr()}}(oc=rc||(rc={}))[oc.OK=0]="OK",oc[oc.CANCELLED=1]="CANCELLED",oc[oc.UNKNOWN=2]="UNKNOWN",oc[oc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oc[oc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oc[oc.NOT_FOUND=5]="NOT_FOUND",oc[oc.ALREADY_EXISTS=6]="ALREADY_EXISTS",oc[oc.PERMISSION_DENIED=7]="PERMISSION_DENIED",oc[oc.UNAUTHENTICATED=16]="UNAUTHENTICATED",oc[oc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oc[oc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oc[oc.ABORTED=10]="ABORTED",oc[oc.OUT_OF_RANGE=11]="OUT_OF_RANGE",oc[oc.UNIMPLEMENTED=12]="UNIMPLEMENTED",oc[oc.INTERNAL=13]="INTERNAL",oc[oc.UNAVAILABLE=14]="UNAVAILABLE",oc[oc.DATA_LOSS=15]="DATA_LOSS";
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
class cc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){So(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}size(){return this.innerSize}}
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
     */const uc=new Co(go.comparator);function hc(){return uc}const lc=new Co(go.comparator);function dc(...t){let e=lc;for(const n of t)e=e.insert(n.key,n);return e}function fc(t){let e=lc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function pc(){return mc()}function gc(){return mc()}function mc(){return new cc((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Co(go.comparator);const yc=new ko(go.comparator);function vc(...t){let e=yc;for(const n of t)e=e.add(n);return e}const wc=new ko(oo);function bc(){return wc}
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
     */class Ec{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Tc.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ec(uo.min(),n,bc(),hc(),vc())}}class Tc{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Tc(xo.EMPTY_BYTE_STRING,e,vc(),vc(),vc())}}
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
     */class Ic{constructor(t,e,n,s){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=s}}class Sc{constructor(t,e){this.targetId=t,this.It=e}}class Cc{constructor(t,e,n=xo.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ac{constructor(){this.Tt=0,this.Et=_c(),this.At=xo.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=vc(),e=vc(),n=vc();return this.Et.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Kr()}})),new Tc(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=_c()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Dc{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=hc(),this.Bt=kc(),this.Lt=new ko(oo)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Kr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,s=this.Ht(e);if(s){const t=s.target;if(ua(t))if(0===n){const n=new go(t.path);this.Kt(e,n,ia.newNoDocument(n,uo.min()))}else zr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,s)=>{const i=this.Ht(s);if(i){if(n.current&&ua(i.target)){const e=new go(i.target.path);null!==this.$t.get(e)||this.Xt(s,e)||this.Kt(s,e,ia.newNoDocument(e,t))}n.vt&&(e.set(s,n.St()),n.Dt())}}));let n=vc();this.Bt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const s=new Ec(t,e,this.Lt,this.$t,n);return this.$t=hc(),this.Bt=kc(),this.Lt=new ko(oo),s}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const s=this.Qt(t);this.Xt(t,e)?s.Ct(e,1):s.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Ac,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new ko(oo),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Ur("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Ac),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function kc(){return new Co(go.comparator)}function _c(){return new Co(go.comparator)}
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
     */const Nc={asc:"ASCENDING",desc:"DESCENDING"},xc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Lc{constructor(t,e){this.databaseId=t,this.dt=e}}function Oc(t){return zr(!!t),uo.fromTimestamp(function(t){const e=Oo(t);return new co(e.seconds,e.nanos)}(t))}function Rc(t){const e=lo.fromString(t);return zr(Wc(e)),e}function Mc(t,e){const n=Rc(e);if(n.get(1)!==t.databaseId.projectId)throw new Qr(Hr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Qr(Hr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new go(Vc(n))}function Pc(t,e){return function(t,e){return function(t){return new lo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function Fc(t){return new lo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vc(t){return zr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $c(t,e){return{documents:[Pc(t,e.path)]}}function Uc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Pc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(ta(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NAN"}};if(Zo(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ta(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NOT_NAN"}};if(Zo(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zc(t.field),op:Kc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:zc(t.field),direction:qc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.dt||Bo(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Bc(t){let e=function(t){const e=Rc(t);return 4===e.length?lo.emptyPath():Vc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){zr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=jc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ba(Gc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Bo(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new wa(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new wa(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new Sa(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,u)}function jc(t){return t?void 0!==t.unaryFilter?[Qc(t)]:void 0!==t.fieldFilter?[Hc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>jc(t))).reduce(((t,e)=>t.concat(e))):Kr():[]}function qc(t){return Nc[t]}function Kc(t){return xc[t]}function zc(t){return{fieldPath:t.canonicalString()}}function Gc(t){return po.fromServerFormat(t.fieldPath)}function Hc(t){return ha.create(Gc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Kr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Qc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gc(t.unaryFilter.field);return ha.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gc(t.unaryFilter.field);return ha.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gc(t.unaryFilter.field);return ha.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gc(t.unaryFilter.field);return ha.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Kr()}}function Wc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */class Xc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Wa(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=gc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Qa(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(uo.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vc())}isEqual(t){return this.batchId===t.batchId&&ao(this.mutations,t.mutations,((t,e)=>Ya(t,e)))&&ao(this.baseMutations,t.baseMutations,((t,e)=>Ya(t,e)))}}
/**
     * @license
     * Copyright 2022 Google LLC
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
     */class Yc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */class Jc{constructor(t,e,n,s,i=uo.min(),r=uo.min(),o=xo.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Jc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class Zc{constructor(t){this.ne=t}}function tu(t){const e=Bc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
     */class eu{constructor(){this.ze=new nu}addToCollectionParentIndex(t,e){return this.ze.add(e),bo.resolve()}getCollectionParents(t,e){return bo.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return bo.resolve()}deleteFieldIndex(t,e){return bo.resolve()}getDocumentsMatchingTarget(t,e){return bo.resolve(null)}getIndexType(t,e){return bo.resolve(0)}getFieldIndexes(t,e){return bo.resolve([])}getNextCollectionGroupToUpdate(t){return bo.resolve(null)}getMinOffset(t,e){return bo.resolve(yo.min())}getMinOffsetFromCollectionGroup(t,e){return bo.resolve(yo.min())}updateCollectionGroup(t,e,n){return bo.resolve()}updateIndexEntries(t,e){return bo.resolve()}}class nu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ko(lo.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ko(lo.comparator)).toArray()}}
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
     */class su{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new su(0)}static Rn(){return new su(-1)}}
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
     * Copyright 2022 Google LLC
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
class iu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class ru{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Xa(n.mutation,t,No.empty(),co.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,vc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=vc()){const s=pc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=dc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=pc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,vc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=hc();const r=mc(),o=mc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Za)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Xa(o.mutation,e,o.mutation.getFieldMask(),co.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new iu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=mc();let s=new Co(((t,e)=>t-e)),i=vc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||No.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||vc()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=gc();c.forEach((t=>{if(!i.has(t)){const s=Qa(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return bo.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return go.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):bo.resolve(pc());let o=-1,a=i;return r.next((e=>bo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?bo.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,vc()))).next((t=>({batchId:o,changes:fc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new go(e)).next((t=>{let e=dc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=dc();return this.indexManager.getCollectionParents(t,s).next((r=>bo.forEach(r,(r=>{const o=function(t,e){return new Sa(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,ia.newInvalidDocument(n)))}));let n=dc();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&Xa(r.mutation,i,No.empty(),co.now()),xa(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):bo.resolve(ia.newInvalidDocument(e))}}
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
     */class ou{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return bo.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Oc(n.createTime)}),bo.resolve()}getNamedQuery(t,e){return bo.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:tu(t.bundledQuery),readTime:Oc(t.readTime)}}(e)),bo.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
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
     */class au{constructor(){this.overlays=new Co(go.comparator),this.Xn=new Map}getOverlay(t,e){return bo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=pc();return bo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ie(t,e,s)})),bo.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),bo.resolve()}getOverlaysForCollection(t,e,n){const s=pc(),i=e.length+1,r=new go(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return bo.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Co(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=pc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=pc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return bo.resolve(o)}ie(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Yc(e,n));let i=this.Xn.get(e);void 0===i&&(i=vc(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
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
     */class cu{constructor(){this.Zn=new ko(uu.ts),this.es=new ko(uu.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new uu(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new uu(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new go(new lo([])),n=new uu(e,t),s=new uu(e,t+1),i=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new go(new lo([])),n=new uu(e,t),s=new uu(e,t+1);let i=vc();return this.es.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new uu(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class uu{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return go.comparator(t.key,e.key)||oo(t.ls,e.ls)}static ns(t,e){return oo(t.ls,e.ls)||go.comparator(t.key,e.key)}}
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
     */class hu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new ko(uu.ts)}checkEmpty(t){return bo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Xc(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.ds=this.ds.add(new uu(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return bo.resolve(r)}lookupMutationBatch(t,e){return bo.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ws(n),i=s<0?0:s;return bo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return bo.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return bo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new uu(e,0),s=new uu(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,s],(t=>{const e=this._s(t.ls);i.push(e)})),bo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ko(oo);return e.forEach((t=>{const e=new uu(t,0),s=new uu(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),bo.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;go.isDocumentKey(i)||(i=i.child(""));const r=new uu(new go(i),0);let o=new ko(oo);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),r),bo.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){zr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return bo.forEach(e.mutations,(s=>{const i=new uu(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new uu(e,0),s=this.ds.firstAfterOrEqual(n);return bo.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,bo.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class lu{constructor(t){this.ps=t,this.docs=new Co(go.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return bo.resolve(n?n.document.mutableCopy():ia.newInvalidDocument(e))}getEntries(t,e){let n=hc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ia.newInvalidDocument(t))})),bo.resolve(n)}getAllFromCollection(t,e,n){let s=hc();const i=new go(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||vo(mo(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return bo.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Kr()}Is(t,e){return bo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new du(this)}getSize(t){return bo.resolve(this.size)}}class du extends class{constructor(){this.changes=new cc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ia.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?bo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.zn.addEntry(t,s)):this.zn.removeEntry(n)})),bo.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
     */class fu{constructor(t){this.persistence=t,this.Ts=new cc((t=>aa(t)),ca),this.lastRemoteSnapshotVersion=uo.min(),this.highestTargetId=0,this.Es=0,this.As=new cu,this.targetCount=0,this.Rs=su.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),bo.resolve()}getLastRemoteSnapshotVersion(t){return bo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return bo.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),bo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),bo.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new su(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,bo.resolve()}updateTargetData(t,e){return this.vn(e),bo.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,bo.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),bo.waitFor(i).next((()=>s))}getTargetCount(t){return bo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return bo.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),bo.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),bo.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),bo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return bo.resolve(n)}containsKey(t,e){return bo.resolve(this.As.containsKey(e))}}
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
     */class pu{constructor(t,e){this.bs={},this.overlays={},this.Ps=new To(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new fu(this),this.indexManager=new eu,this.remoteDocumentCache=function(t){return new lu(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Zc(e),this.Ds=new ou(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new au,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new hu(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ur("MemoryPersistence","Starting transaction:",t);const s=new gu(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((t=>this.referenceDelegate.xs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ns(t,e){return bo.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class gu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class mu{constructor(t){this.persistence=t,this.ks=new cu,this.Os=null}static Ms(t){return new mu(t)}get Fs(){if(this.Os)return this.Os;throw Kr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),bo.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),bo.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),bo.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return bo.forEach(this.Fs,(n=>{const s=go.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s,uo.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return bo.or([()=>bo.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
     */class yu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=s}static Vi(t,e){let n=vc(),s=vc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new yu(t,e.fromCache,n,s)}}
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
     */class vu{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ci(t,e).next((i=>i||this.xi(t,e,s,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return bo.resolve(null)}xi(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||s.isEqual(uo.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const r=this.ki(e,i);return this.Oi(e,r,n,s)?this.Ni(t,e):($r()<=w.DEBUG&&Ur("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Na(e)),this.Mi(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=uo.fromTimestamp(1e9===s?new co(n+1,0):new co(n,s));return new yo(i,go.empty(),e)}(s,-1)))}))}ki(t,e){let n=new ko(La(t));return e.forEach(((e,s)=>{xa(t,s)&&(n=n.add(s))})),n}Oi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(t,e){return $r()<=w.DEBUG&&Ur("QueryEngine","Using full collection scan to execute query:",Na(e)),this.Di.getDocumentsMatchingQuery(t,e,yo.min())}Mi(t,e,n,s){return this.Di.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class wu{constructor(t,e,n,s){this.persistence=t,this.Fi=e,this.wt=s,this.$i=new Co(oo),this.Bi=new cc((t=>aa(t)),ca),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ru(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}async function bu(t,e){const n=Gr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=vc();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Eu(t){const e=Gr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Tu(t,e){const n=Gr(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(xo.EMPTY_BYTE_STRING,uo.min()).withLastLimboFreeSnapshotVersion(uo.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Vs.updateTargetData(t,u))}));let a=hc(),c=vc();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=vc(),i=vc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=hc();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(uo.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Ur("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Gi:s,Qi:i}}))}(t,r,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!s.isEqual(uo.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return bo.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}async function Iu(t,e,n){const s=Gr(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Eo(t))throw t;Ur("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function Su(t,e,n){const s=Gr(t);let i=uo.min(),r=vc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Gr(t),i=s.Bi.get(n);return void 0!==i?bo.resolve(s.$i.get(i)):s.Vs.getTargetData(e,n)}(s,t,Da(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Fi.getDocumentsMatchingQuery(t,e,n?i:uo.min(),n?r:vc()))).next((t=>(function(t,e,n){let s=uo.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Li.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ji:r})))))}class Cu{constructor(){this.activeTargetIds=bc()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Au{constructor(){this.Fr=new Cu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Cu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class Du{Br(t){}shutdown(){}}
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
     */class ku{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ur("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Ur("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const _u={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Nu{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
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
     */class xu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,i){const r=this.oo(t,e);Ur("RestConnection","Sending: ",r,n);const o={};return this.uo(o,s,i),this.co(t,r,o,n).then((t=>(Ur("RestConnection","Received: ",t),t)),(e=>{throw jr("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,s,i,r){return this.ro(t,e,n,s,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Fr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=_u[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((i,r)=>{const o=new Rr;o.listenOnce(kr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dr.NO_ERROR:const e=o.getResponseJson();Ur("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Dr.TIMEOUT:Ur("Connection",'RPC "'+t+'" timed out'),r(new Qr(Hr.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const n=o.getStatus();if(Ur("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Hr).indexOf(e)>=0?e:Hr.UNKNOWN}(t.status);r(new Qr(e,t.message))}else r(new Qr(Hr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Qr(Hr.UNAVAILABLE,"Connection failed."));break;default:Kr()}}finally{Ur("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=new Tr,a=ms(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Lr({})),this.uo(c.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(i())||"object"==typeof navigator&&"ReactNative"===navigator.product||i().indexOf("Electron/")>=0||function(){const t=i();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||i().indexOf("MSAppHost/")>=0||r()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=s.join("");Ur("Connection","Creating WebChannel: "+u,c);const h=o.createWebChannel(u,c);let l=!1,d=!1;const f=new Nu({jr:t=>{d?Ur("Connection","Not sending because WebChannel is closed:",t):(l||(Ur("Connection","Opening WebChannel transport."),h.open(),l=!0),Ur("Connection","WebChannel sending:",t),h.send(t))},Wr:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,Or.EventType.OPEN,(()=>{d||Ur("Connection","WebChannel transport opened.")})),p(h,Or.EventType.CLOSE,(()=>{d||(d=!0,Ur("Connection","WebChannel transport closed"),f.eo())})),p(h,Or.EventType.ERROR,(t=>{d||(d=!0,jr("Connection","WebChannel transport errored:",t),f.eo(new Qr(Hr.UNAVAILABLE,"The operation could not be completed")))})),p(h,Or.EventType.MESSAGE,(t=>{var e;if(!d){const n=t.data[0];zr(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Ur("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=rc[t];if(void 0!==e)return ac(e)}(t),n=i.message;void 0===e&&(e=Hr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,f.eo(new Qr(e,n)),h.close()}else Ur("Connection","WebChannel received:",n),f.no(n)}})),p(a,_r.STAT_EVENT,(t=>{t.stat===Nr?Ur("Connection","Detected buffering proxy"):t.stat===xr&&Ur("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}}function Lu(){return"undefined"!=typeof document?document:null}
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
     */function Ou(t){return new Lc(t,!0)}class Ru{constructor(t,e,n=1e3,s=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&Ur("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
     */class Mu extends class{constructor(t,e,n,s,i,r,o,a){this.js=t,this.Ao=n,this.Ro=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ru(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Hr.RESOURCE_EXHAUSTED?(Br(e.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Hr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Qr(Hr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Ur("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Ur("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Kr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.dt?(zr(void 0===e||"string"==typeof e),xo.fromBase64String(e||"")):(zr(void 0===e||e instanceof Uint8Array),xo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Hr.UNKNOWN:ac(t.code);return new Qr(e,t.message||"")}(o);n=new Cc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Mc(t,s.document.name),r=Oc(s.document.updateTime),o=new sa({mapValue:{fields:s.document.fields}}),a=ia.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ic(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Mc(t,s.document),r=s.readTime?Oc(s.readTime):uo.min(),o=ia.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Mc(t,s.document),r=s.removedTargetIds||[];n=new Ic([],r,i,null)}else{if(!("filter"in e))return Kr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new ic(s),r=t.targetId;n=new Sc(r,i)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return uo.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?uo.min():e.readTime?Oc(e.readTime):uo.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Fc(this.wt),e.addTarget=function(t,e){let n;const s=e.target;return n=ua(s)?{documents:$c(t,s)}:{query:Uc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.dt?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(uo.min())>0&&(n.readTime=function(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Kr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Fc(this.wt),e.removeTarget=t,this.Mo(e)}}
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
     */class Pu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Qr(Hr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ro(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Hr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Hr.UNKNOWN,t.toString())}))}ao(t,e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ao(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Hr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Hr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Fu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Br(e),this.su=!1):Ur("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
     */class Vu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Hu(this)&&(Ur("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Gr(t);e.lu.add(4),await Uu(e),e._u.set("Unknown"),e.lu.delete(4),await $u(e)}(this))}))})),this._u=new Fu(n,s)}}async function $u(t){if(Hu(t))for(const e of t.fu)await e(!0)}async function Uu(t){for(const e of t.fu)await e(!1)}function Bu(t,e){const n=Gr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Gu(n)?zu(n):th(n).Co()&&qu(n,e))}function ju(t,e){const n=Gr(t),s=th(n);n.hu.delete(e),s.Co()&&Ku(n,e),0===n.hu.size&&(s.Co()?s.ko():Hu(n)&&n._u.set("Unknown"))}function qu(t,e){t.wu.Nt(e.targetId),th(t).Qo(e)}function Ku(t,e){t.wu.Nt(e),th(t).jo(e)}function zu(t){t.wu=new Dc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),th(t).start(),t._u.iu()}function Gu(t){return Hu(t)&&!th(t).Do()&&t.hu.size>0}function Hu(t){return 0===Gr(t).lu.size}function Qu(t){t.wu=void 0}async function Wu(t){t.hu.forEach(((e,n)=>{qu(t,e)}))}async function Xu(t,e){Qu(t),Gu(t)?(t._u.uu(e),zu(t)):t._u.set("Unknown")}async function Yu(t,e,n){if(t._u.set("Online"),e instanceof Cc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.hu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.hu.delete(s),t.wu.removeTarget(s))}(t,e)}catch(n){Ur("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ju(t,n)}else if(e instanceof Ic?t.wu.Ut(e):e instanceof Sc?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(uo.min()))try{const e=await Eu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(s);i&&t.hu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(xo.EMPTY_BYTE_STRING,n.snapshotVersion)),Ku(t,e);const s=new Jc(n.target,e,1,n.sequenceNumber);qu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ur("RemoteStore","Failed to raise snapshot:",e),await Ju(t,e)}}async function Ju(t,e,n){if(!Eo(e))throw e;t.lu.add(1),await Uu(t),t._u.set("Offline"),n||(n=()=>Eu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ur("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await $u(t)}))}async function Zu(t,e){const n=Gr(t);n.asyncQueue.verifyOperationInProgress(),Ur("RemoteStore","RemoteStore received new credentials");const s=Hu(n);n.lu.add(3),await Uu(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await $u(n)}function th(t){return t.mu||(t.mu=function(t,e,n){const s=Gr(t);return s.tu(),new Mu(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)
/**
     * @license
     * Copyright 2018 Google LLC
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
     */}(t.datastore,t.asyncQueue,{zr:Wu.bind(null,t),Jr:Xu.bind(null,t),Go:Yu.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Gu(t)?zu(t):t._u.set("Unknown")):(await t.mu.stop(),Qu(t))}))),t.mu
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
     */}class eh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new eh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qr(Hr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nh(t,e){if(Br("AsyncQueue",`${e}: ${t}`),Eo(t))return new Qr(Hr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class sh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||go.comparator(e.key,n.key):(t,e)=>go.comparator(t.key,e.key),this.keyedMap=dc(),this.sortedSet=new Co(this.comparator)}static emptySet(t){return new sh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof sh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new sh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class ih{constructor(){this.yu=new Co(go.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Kr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class rh{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new rh(t,e,sh.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ka(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class oh{constructor(){this.Iu=void 0,this.listeners=[]}}class ah{constructor(){this.queries=new cc((t=>_a(t)),ka),this.onlineState="Unknown",this.Tu=new Set}}function ch(t,e){const n=Gr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Au(t)&&(s=!0);i.Iu=t}}s&&hh(n)}function uh(t,e,n){const s=Gr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function hh(t){t.Tu.forEach((t=>{t.next()}))}class lh{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new rh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=rh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
     */class dh{constructor(t){this.key=t}}class fh{constructor(t){this.key=t}}class ph{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=vc(),this.mutatedKeys=vc(),this.Lu=La(t),this.Uu=new sh(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new ih,s=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=xa(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:r,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Kr()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new rh(this.query,t.Uu,s,i,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new ih,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=vc(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new fh(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new dh(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=vc();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return rh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class gh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class mh{constructor(t){this.key=t,this.Xu=!1}}class yh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new cc((t=>_a(t)),ka),this.ec=new Map,this.nc=new Set,this.sc=new Co(go.comparator),this.ic=new Map,this.rc=new cu,this.oc={},this.uc=new Map,this.cc=su.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function vh(t,e){const n=function(t){const e=Gr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Th.bind(null,e),e.Zu.Go=ch.bind(null,e.eventManager),e.Zu.lc=uh.bind(null,e.eventManager),e}(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const t=await function(t,e){const n=Gr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Vs.getTargetData(t,e).next((i=>i?(s=i,bo.resolve(s)):n.Vs.allocateTargetId(t).next((i=>(s=new Jc(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.$i.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}(n.localStore,Da(e));n.isPrimaryClient&&Bu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.hc=(e,n,s)=>async function(t,e,n,s){let i=e.view.Ku(n);i.Oi&&(i=await Su(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Ch(t,e.targetId,o.zu),o.snapshot}(t,e,n,s);const i=await Su(t.localStore,e,!0),r=new ph(e,i.ji),o=r.Ku(i.documents),a=Tc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Ch(t,n,c.zu);const u=new gh(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}(n,e,s,"current"===r)}return i}async function wh(t,e){const n=Gr(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter((t=>!ka(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Iu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ju(n.remoteStore,s.targetId),Ih(n,s.targetId)})).catch(wo)):(Ih(n,s.targetId),await Iu(n.localStore,s.targetId,!0))}async function bh(t,e){const n=Gr(t);try{const t=await Tu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ic.get(e);s&&(zr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Xu=!0:t.modifiedDocuments.size>0?zr(s.Xu):t.removedDocuments.size>0&&(zr(s.Xu),s.Xu=!1))})),await kh(n,t,e)}catch(t){await wo(t)}}function Eh(t,e,n){const s=Gr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.tc.forEach(((n,s)=>{const i=s.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Gr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(s=!0)})),s&&hh(n)}(s.eventManager,e),t.length&&s.Zu.Go(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Th(t,e,n){const s=Gr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let t=new Co(go.comparator);t=t.insert(r,ia.newNoDocument(r,uo.min()));const n=vc().add(r),i=new Ec(uo.min(),new Map,new ko(oo),t,n);await bh(s,i),s.sc=s.sc.remove(r),s.ic.delete(e),Dh(s)}else await Iu(s.localStore,e,!1).then((()=>Ih(s,e,n))).catch(wo)}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Sh(t,e)}))}function Sh(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(ju(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Dh(t))}function Ch(t,e,n){for(const s of n)s instanceof dh?(t.rc.addReference(s.key,e),Ah(t,s)):s instanceof fh?(Ur("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Sh(t,s.key)):Kr()}function Ah(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(Ur("SyncEngine","New document in limbo: "+n),t.nc.add(s),Dh(t))}function Dh(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new go(lo.fromString(e)),s=t.cc.next();t.ic.set(s,new mh(n)),t.sc=t.sc.insert(n,s),Bu(t.remoteStore,new Jc(Da(Ca(n.path)),s,2,To.ot))}}async function kh(t,e,n){const s=Gr(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((t,a)=>{o.push(s.hc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=yu.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Zu.Go(i),await async function(t,e){const n=Gr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>bo.forEach(e,(e=>bo.forEach(e.Pi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>bo.forEach(e.vi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Eo(t))throw t;Ur("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(e,i)}}}(s.localStore,r))}async function _h(t,e){const n=Gr(t);if(!n.currentUser.isEqual(e)){Ur("SyncEngine","User change. New user:",e.toKey());const t=await bu(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Qr(Hr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await kh(n,t.Ki)}}function Nh(t,e){const n=Gr(t),s=n.ic.get(e);if(s&&s.Xu)return vc().add(s.key);{let t=vc();const s=n.ec.get(e);if(!s)return t;for(const e of s){const s=n.tc.get(e);t=t.unionWith(s.view.qu)}return t}}class xh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Ou(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return function(t,e,n,s){return new wu(t,e,n,s)}(this.persistence,new vu,t.initialUser,this.wt)}_c(t){return new pu(mu.Ms,this.wt)}dc(t){return new Au}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Eh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=_h.bind(null,this.syncEngine),await async function(t,e){const n=Gr(t);e?(n.lu.delete(2),await $u(n)):e||(n.lu.add(2),await Uu(n),n._u.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ah}createDatastore(t){const e=Ou(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new xu(s));var s;return function(t,e,n,s){return new Pu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Eh(this.syncEngine,t,0),r=ku.V()?new ku:new Du,new Vu(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new yh(t,e,n,s,i,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Gr(t);Ur("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Uu(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
     */class Oh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class Rh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Pr.UNAUTHENTICATED,this.clientId=ro.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ur("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ur("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qr(Hr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=nh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Mh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Ur("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Ur("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await bu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new xh)),t.offlineComponents}(t);Ur("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Zu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Zu(e.remoteStore,n))),t.onlineComponents=e}async function Ph(t){const e=await async function(t){return t.onlineComponents||(Ur("FirestoreClient","Using default OnlineComponentProvider"),await Mh(t,new Lh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=vh.bind(null,e.syncEngine),n.onUnlisten=wh.bind(null,e.syncEngine),n}function Fh(t,e,n={}){const s=new Wr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Oh({next:r=>{e.enqueueAndForget((()=>async function(t,e){const n=Gr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new Qr(Hr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new Qr(Hr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new lh(Ca(n.path),r,{includeMetadataChanges:!0,Du:!0});return async function(t,e){const n=Gr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new oh),i)try{r.Iu=await n.onListen(s)}catch(t){const n=nh(t,`Initialization of query '${Na(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&hh(n)}(t,o)}(await Ph(t),t.asyncQueue,e,n,s))),s.promise}const Vh=new Map;
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
     */function $h(t,e,n){if(!n)throw new Qr(Hr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uh(t){if(!go.isDocumentKey(t))throw new Qr(Hr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qr(Hr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Kr()}(t);throw new Qr(Hr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class jh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Qr(Hr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qr(Hr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Qr(Hr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class qh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jh({}),this._settingsFrozen=!1,t instanceof Uo?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qr(Hr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(t.options.projectId)}(t))}get app(){if(!this._app)throw new Qr(Hr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qr(Hr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Yr;switch(t.type){case"gapi":const e=t.client;return zr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new eo(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Qr(Hr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Vh.get(t);e&&(Ur("ComponentProvider","Removing Datastore"),Vh.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Kh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Kh(this.firestore,t,this._key)}}class zh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zh(this.firestore,t,this._query)}}class Gh extends zh{constructor(t,e,n){super(t,e,Ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Kh(this.firestore,null,new go(t))}withConverter(t){return new Gh(this.firestore,t,this._path)}}
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
class Hh{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ru(this,"async_queue_retry"),this.Kc=()=>{const t=Lu();t&&Ur("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Lu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Lu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Wr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Eo(t))throw t;Ur("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Br("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const s=eh.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(s),s}Gc(){this.Bc&&Kr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Qh extends qh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Hh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Wh(this),this._firestoreClient.terminate()}}function Wh(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new $o(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Rh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
     */class Xh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qr(Hr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new po(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Yh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yh(xo.fromBase64String(t))}catch(t){throw new Qr(Hr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Yh(xo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Jh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qr(Hr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qr(Hr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return oo(this._lat,t._lat)||oo(this._long,t._long)}}const Zh=new RegExp("[~\\*/\\[\\]]");function tl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Qr(Hr.INVALID_ARGUMENT,a+t+c)
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
     */}class el{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Kh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nl extends el{data(){return super.data()}}function sl(t,e){return"string"==typeof e?function(t,e,n){if(e.search(Zh)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xh(...e.split("."))._internalPath}catch(s){throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Xh?e._internalPath:e._delegate._internalPath}
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
     */class il{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rl extends el{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(sl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ol extends rl{data(t={}){return super.data(t)}}
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
function al(t){t=Bh(t,Kh);const e=Bh(t.firestore,Qh);return Fh(function(t){return t._firestoreClient||Wh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),t._key).then((n=>function(t,e,n){const s=n.docs.get(e._key),i=new cl(t);return new rl(t,i,e._key,s,new il(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class cl extends class{convertValue(t,e="none"){switch(Ko(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ro(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Kr()}}convertObject(t,e){const n={};return So(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Jh(Ro(t.latitude),Ro(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Fo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vo(t));default:return null}}convertTimestamp(t){const e=Oo(t);return new co(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=lo.fromString(t);zr(Wc(n));const s=new Uo(n.get(1),n.get(3)),i=new go(n.popFirst(5));return s.isEqual(e)||Br(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Kh(this.firestore,null,e)}}!function(t,e=!0){Fr="9.9.0",Y(new g("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Qh(s,new Zr(t.getProvider("auth-internal")),new so(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),nt(Mr,"3.4.12",t),nt(Mr,"3.4.12","esm2017")}();
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
const ul="functions";
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
     */class hl{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||e.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||n.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}
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
     */const ll="us-central1";class dl{constructor(t,e,n,s,i="us-central1",r){this.app=t,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new hl(e,n,s),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(i);this.customDomain=t.origin,this.region=ll}catch(t){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}const fl="@firebase/functions",pl="0.8.4";!function(t,e){Y(new g(ul,((e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("messaging-internal"),o=e.getProvider("app-check-internal");return new dl(s,i,r,o,n,t)}),"PUBLIC").setMultipleInstances(!0)),nt(fl,pl,e),nt(fl,pl,"esm2017")}
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
     */(fetch.bind(self));const gl=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:G,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Z.create("bad-app-name",{appName:String(s)});const i=Q.get(s);if(i){if(l(t,i.options)&&l(n,i.config))return i;throw Z.create("duplicate-app",{appName:s})}const r=new v(s);for(const t of W.values())r.addComponent(t);const o=new tt(t,n,r);return Q.set(s,o),o}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(t=et()){const e=J(t=p(t),te);e.isInitialized()?e.getImmediate():function(t,e={}){const n=J(t,te);if(n.isInitialized()){const t=n.getImmediate();if(l(e,n.getOptions()))return t;throw re.create("already-initialized")}n.initialize({options:e})}(t)}(gl);const ml=function(t=et()){return J(t,"firestore").getImmediate()}(gl),yl=function(t=et(),e="us-central1"){return J(p(t),ul).getImmediate({identifier:e})}(gl,"europe-west2");var vl,wl;function bl(){}function El(t){return t()}function Tl(){return Object.create(null)}function Il(t){t.forEach(El)}function Sl(t){return"function"==typeof t}function Cl(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let Al,Dl;function kl(t,e){return Al||(Al=document.createElement("a")),Al.href=e,t===Al.href}function _l(t,e){t.appendChild(e)}function Nl(t,e,n){t.insertBefore(e,n||null)}function xl(t){t.parentNode.removeChild(t)}function Ll(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Ol(t){return document.createElement(t)}function Rl(t){return document.createTextNode(t)}function Ml(){return Rl(" ")}function Pl(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fl(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vl(t){Dl=t}function $l(){if(!Dl)throw new Error("Function called outside component initialization");return Dl}(location.href.includes("localhost")||location.href.includes("127.0.0.1"))&&(function(t,e,s,i={}){var r;const o=(t=Bh(t,qh))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&jr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${s}`,ssl:!1})),i.mockUserToken){let e,s;if("string"==typeof i.mockUserToken)e=i.mockUserToken,s=Pr.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[n(JSON.stringify({alg:"none",type:"JWT"})),n(JSON.stringify(o)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new Qr(Hr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new Pr(o)}t._authCredentials=new Jr(new Xr(e,s))}}(ml,"localhost",8080),vl="localhost",wl=5001,function(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}(p(yl),vl,wl));const Ul=[],Bl=[],jl=[],ql=[],Kl=Promise.resolve();let zl=!1;function Gl(t){jl.push(t)}const Hl=new Set;let Ql=0;function Wl(){const t=Dl;do{for(;Ql<Ul.length;){const t=Ul[Ql];Ql++,Vl(t),Xl(t.$$)}for(Vl(null),Ul.length=0,Ql=0;Bl.length;)Bl.pop()();for(let t=0;t<jl.length;t+=1){const e=jl[t];Hl.has(e)||(Hl.add(e),e())}jl.length=0}while(Ul.length);for(;ql.length;)ql.pop()();zl=!1,Hl.clear(),Vl(t)}function Xl(t){if(null!==t.fragment){t.update(),Il(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Gl)}}const Yl=new Set;let Jl;function Zl(){Jl={r:0,c:[],p:Jl}}function td(){Jl.r||Il(Jl.c),Jl=Jl.p}function ed(t,e){t&&t.i&&(Yl.delete(t),t.i(e))}function nd(t,e,n,s){if(t&&t.o){if(Yl.has(t))return;Yl.add(t),Jl.c.push((()=>{Yl.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function sd(t,e){const n=e.token={};function s(t,s,i,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==i&&(o=o.slice(),o[i]=r);const a=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(Zl(),nd(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),td())})):e.block.d(1),a.c(),ed(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[s]=a),c&&Wl()}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){const n=$l();if(t.then((t=>{Vl(n),s(e.then,1,e.value,t),Vl(null)}),(t=>{if(Vl(n),s(e.catch,2,e.error,t),Vl(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var i}function id(t){t&&t.c()}function rd(t,e,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),s||Gl((()=>{const e=r.map(El).filter(Sl);o?o.push(...e):Il(e),t.$$.on_mount=[]})),a.forEach(Gl)}function od(t,e){const n=t.$$;null!==n.fragment&&(Il(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ad(t,e){-1===t.$$.dirty[0]&&(Ul.push(t),zl||(zl=!0,Kl.then(Wl)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function cd(t,e,n,s,i,r,o,a=[-1]){const c=Dl;Vl(t);const u=t.$$={fragment:null,ctx:null,props:r,update:bl,not_equal:i,bound:Tl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Tl(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return u.ctx&&i(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),h&&ad(t,e)),n})):[],u.update(),h=!0,Il(u.before_update),u.fragment=!!s&&s(u.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);u.fragment&&u.fragment.l(t),t.forEach(xl)}else u.fragment&&u.fragment.c();e.intro&&ed(t.$$.fragment),rd(t,e.target,e.anchor,e.customElement),Wl()}Vl(c)}class ud{$destroy(){od(this,1),this.$destroy=bl}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const hd=t=>{const e=parseInt(t);if(!isNaN(e))return e;const n=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(t);return-1===n?n+1:NaN},ld=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()],dd=(t,e,n)=>new Date(n,e-1,t),fd=t=>{const e=`${t}`;return e.length<=2?fd("20"+e.padStart(2,"0")):3===e.length?NaN:parseInt(e)},pd=t=>(t=>{const e=["/","-","."];for(const n of e){const[e,s,i]=t.split(n).map(hd),r=dd(null!=e?e:NaN,null!=s?s:NaN,fd(null!=i?i:NaN));if(![e,s,i].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}for(const n of e){const[e,s,i]=t.split(n).map(hd),r=dd(null!=i?i:NaN,null!=s?s:NaN,fd(null!=e?e:NaN));if(![i,s,e].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}const n=new Date(t);if("Invalid Date"!=`${n}`)return n})(((t,e="/",n=!1)=>{const[s,i,r]=ld(t).map((t=>`${t}`)),o=[s.padStart(2,"0"),i.padStart(2,"0"),r];return(n?o.reverse():o).join(e)})(t)),gd=()=>pd(new Date),md={},yd=new Set,vd=dd(1,9,2021);async function wd(t,e,n){try{return console.count("DB reads"),console.count(n),(await al(function(t,e,...n){if(t=p(t),1===arguments.length&&(e=ro.I()),$h("doc","path",e),t instanceof qh){const s=lo.fromString(e,...n);return Uh(s),new Kh(t,null,new go(s))}{if(!(t instanceof Kh||t instanceof Gh))throw new Qr(Hr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(lo.fromString(e,...n));return Uh(s),new Kh(t.firestore,t instanceof Gh?t.converter:null,new go(s))}}(t,e,n))).data()}catch(t){console.warn("Your DB emulations are likely not running correctly"),console.error(t)}}const bd=(t,e)=>{const n=dd(1,e,t),s=gd(),i=ld(s)[2];return vd<=n&&t<=i},Ed=async(t,e,n)=>{var s;if(!bd(t,e))return null;const i=((t,e)=>`${t}-${`${e}`.padStart(2,"0")}`)(t,e);if(yd.has(i))return await(r=1,new Promise((t=>setTimeout(t,1e3*r)))),Td(t,e);var r;yd.add(i);const o=null!==(s=await wd(n,"memes",i))&&void 0!==s?s:{};return((t,e,n)=>{md[t]||(md[t]={}),md[t][e]=n})(t,e,o),yd.delete(i),o},Td=(t,e)=>{try{return md[t][e]}catch(t){console.count("Cache errors")}},Id=async(t,e,n=0)=>{if(!t)return null;if(n>=12)throw new Error("DB recursion");const[s,i,r]=ld(t);if(!bd(r,i))return null;try{return md[r][i][s]}catch(t){console.count("Cache errors")}return await((t,e,n)=>{var s;return null!==(s=Td(t,e))&&void 0!==s?s:Ed(t,e,n)})(r,i,e),Id(t,e,n+1)};function Sd(t){let e,n,s,i;return{c(){e=Ol("span"),n=Ol("a"),s=Rl(t[0]),Pl(n,"class","hover:underline"),Pl(n,"href",i=`pdf/${t[1]}.pdf`),Pl(e,"class","flex-1 basis-1/4 pt-2 pb-8")},m(t,i){Nl(t,e,i),_l(e,n),_l(n,s)},p(t,[e]){1&e&&Fl(s,t[0]),2&e&&i!==(i=`pdf/${t[1]}.pdf`)&&Pl(n,"href",i)},i:bl,o:bl,d(t){t&&xl(e)}}}function Cd(t,e,n){let{name:s}=e,{path:i}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name),"path"in t&&n(1,i=t.path)},[s,i]}class Ad extends ud{constructor(t){super(),cd(this,t,Cd,Sd,Cl,{name:0,path:1})}}function Dd(t){let e;return{c(){e=Ol("header"),e.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',Pl(e,"class","my-8 flex")},m(t,n){Nl(t,e,n)},p:bl,i:bl,o:bl,d(t){t&&xl(e)}}}class kd extends ud{constructor(t){super(),cd(this,t,null,Dd,Cl,{})}}function _d(t){let e;return{c(){e=Ol("p"),e.textContent="It's loading, bro..."},m(t,n){Nl(t,e,n)},p:bl,i:bl,o:bl,d(t){t&&xl(e)}}}class Nd extends ud{constructor(t){super(),cd(this,t,null,_d,Cl,{})}}function xd(t){let e,n;return{c(){e=Ol("p"),n=Rl(t[1]),Pl(e,"class",`${Rd} text-center`)},m(t,s){Nl(t,e,s),_l(e,n)},p(t,e){2&e&&Fl(n,t[1])},d(t){t&&xl(e)}}}function Ld(t){let e,n;return{c(){e=Ol("img"),Pl(e,"class",Rd),kl(e.src,n=t[0].url)||Pl(e,"src",n),Pl(e,"alt","Meme")},m(t,n){Nl(t,e,n)},p(t,s){1&s&&!kl(e.src,n=t[0].url)&&Pl(e,"src",n)},d(t){t&&xl(e)}}}function Od(t){let e;function n(t,e){return t[0]?Ld:xd}let s=n(t),i=s(t);return{c(){i.c(),e=Rl("")},m(t,n){i.m(t,n),Nl(t,e,n)},p(t,[r]){s===(s=n(t))&&i?i.p(t,r):(i.d(1),i=s(t),i&&(i.c(),i.m(e.parentNode,e)))},i:bl,o:bl,d(t){i.d(t),t&&xl(e)}}}const Rd="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";function Md(t,e,n){let{meme:s}=e,{noMemeMessage:i}=e;return t.$$set=t=>{"meme"in t&&n(0,s=t.meme),"noMemeMessage"in t&&n(1,i=t.noMemeMessage)},[s,i]}class Pd extends ud{constructor(t){super(),cd(this,t,Md,Od,Cl,{meme:0,noMemeMessage:1})}}function Fd(t,e,n){const s=t.slice();return s[7]=e[n],s}function Vd(t,e,n){const s=t.slice();return s[10]=e[n],s}function $d(t,e,n){const s=t.slice();return s[10]=e[n],s}function Ud(t){let e,n;return e=new Ad({props:{name:t[10],path:`maths/${t[10]}`}}),{c(){id(e.$$.fragment)},m(t,s){rd(e,t,s),n=!0},p:bl,i(t){n||(ed(e.$$.fragment,t),n=!0)},o(t){nd(e.$$.fragment,t),n=!1},d(t){od(e,t)}}}function Bd(t){let e,n;return e=new Ad({props:{name:t[10],path:`maths/${t[10]}`}}),{c(){id(e.$$.fragment)},m(t,s){rd(e,t,s),n=!0},p:bl,i(t){n||(ed(e.$$.fragment,t),n=!0)},o(t){nd(e.$$.fragment,t),n=!1},d(t){od(e,t)}}}function jd(t){let e,n;return e=new Ad({props:{name:t[7],path:`physics/${t[7].toLowerCase().split(" ").join("_")}_GBD`}}),{c(){id(e.$$.fragment)},m(t,s){rd(e,t,s),n=!0},p:bl,i(t){n||(ed(e.$$.fragment,t),n=!0)},o(t){nd(e.$$.fragment,t),n=!1},d(t){od(e,t)}}}function qd(t){return{c:bl,m:bl,p:bl,i:bl,o:bl,d:bl}}function Kd(t){let e,n;return e=new Pd({props:{meme:t[6],noMemeMessage:"No meme today :( ... Send suggestions"}}),{c(){id(e.$$.fragment)},m(t,s){rd(e,t,s),n=!0},p:bl,i(t){n||(ed(e.$$.fragment,t),n=!0)},o(t){nd(e.$$.fragment,t),n=!1},d(t){od(e,t)}}}function zd(t){let e,n;return e=new Nd({}),{c(){id(e.$$.fragment)},m(t,s){rd(e,t,s),n=!0},p:bl,i(t){n||(ed(e.$$.fragment,t),n=!0)},o(t){nd(e.$$.fragment,t),n=!1},d(t){od(e,t)}}}function Gd(t){let e,n,s,i,r,o,a,c,u,h,l,d,f,p,g,m,y,v,w,b,E,T,I,S,C,A,D,k,_,N,x,L,O,R,M,P,F,V,$,U,B,j;e=new kd({});let q=t[1],K=[];for(let e=0;e<q.length;e+=1)K[e]=Ud($d(t,q,e));const z=t=>nd(K[t],1,1,(()=>{K[t]=null}));let G=t[2],H=[];for(let e=0;e<G.length;e+=1)H[e]=Bd(Vd(t,G,e));const Q=t=>nd(H[t],1,1,(()=>{H[t]=null}));let W=t[3],X=[];for(let e=0;e<W.length;e+=1)X[e]=jd(Fd(t,W,e));const Y=t=>nd(X[t],1,1,(()=>{X[t]=null}));D=new Ad({props:{name:"Physics Year 2",path:"physics/Physics Year 2"}}),_=new Ad({props:{name:"PiP",path:"physics/PiP"}});let J={ctx:t,current:null,token:null,hasCatch:!1,pending:zd,then:Kd,catch:qd,value:6,blocks:[,,,]};return sd(t[0],J),{c(){id(e.$$.fragment),n=Ml(),s=Ol("main"),i=Ol("h2"),i.textContent="Maths",r=Ml(),o=Ol("div");for(let t=0;t<K.length;t+=1)K[t].c();a=Ml(),c=Ol("hr"),u=Ml(),h=Ol("h2"),h.textContent="Further Maths",l=Ml(),d=Ol("div");for(let t=0;t<H.length;t+=1)H[t].c();f=Ml(),p=Ol("p"),p.textContent="The year 1 pure and stats are dodgy older versions but I'll fix them soon.",g=Ml(),m=Ol("hr"),y=Ml(),v=Ol("h2"),v.textContent="GBD Booklets",w=Ml(),b=Ol("div");for(let t=0;t<X.length;t+=1)X[t].c();E=Ml(),T=Ol("hr"),I=Ml(),S=Ol("h2"),S.textContent="Physics",C=Ml(),A=Ol("div"),id(D.$$.fragment),k=Ml(),id(_.$$.fragment),N=Ml(),x=Ol("hr"),L=Ml(),O=Ol("section"),R=Ol("h2"),R.textContent="Meme of the Day",M=Ml(),J.block.c(),P=Ml(),F=Ol("hr"),V=Ml(),$=Ol("section"),$.innerHTML='<h2>Meme Archive</h2> \n  <p class="epilogue"><a class="hover:underline" href="archive.html">Meme Archive</a></p>',U=Ml(),B=Ol("footer"),Pl(o,"class","book-section"),Pl(d,"class","book-section"),Pl(p,"class","epilogue"),Pl(b,"class","book-section"),Pl(A,"class","book-section"),Pl(O,"id","otd")},m(t,q){rd(e,t,q),Nl(t,n,q),Nl(t,s,q),_l(s,i),_l(s,r),_l(s,o);for(let t=0;t<K.length;t+=1)K[t].m(o,null);_l(s,a),_l(s,c),_l(s,u),_l(s,h),_l(s,l),_l(s,d);for(let t=0;t<H.length;t+=1)H[t].m(d,null);_l(s,f),_l(s,p),_l(s,g),_l(s,m),_l(s,y),_l(s,v),_l(s,w),_l(s,b);for(let t=0;t<X.length;t+=1)X[t].m(b,null);_l(s,E),_l(s,T),_l(s,I),_l(s,S),_l(s,C),_l(s,A),rd(D,A,null),_l(A,k),rd(_,A,null),Nl(t,N,q),Nl(t,x,q),Nl(t,L,q),Nl(t,O,q),_l(O,R),_l(O,M),J.block.m(O,J.anchor=null),J.mount=()=>O,J.anchor=null,Nl(t,P,q),Nl(t,F,q),Nl(t,V,q),Nl(t,$,q),Nl(t,U,q),Nl(t,B,q),j=!0},p(e,[n]){if(t=e,2&n){let e;for(q=t[1],e=0;e<q.length;e+=1){const s=$d(t,q,e);K[e]?(K[e].p(s,n),ed(K[e],1)):(K[e]=Ud(s),K[e].c(),ed(K[e],1),K[e].m(o,null))}for(Zl(),e=q.length;e<K.length;e+=1)z(e);td()}if(4&n){let e;for(G=t[2],e=0;e<G.length;e+=1){const s=Vd(t,G,e);H[e]?(H[e].p(s,n),ed(H[e],1)):(H[e]=Bd(s),H[e].c(),ed(H[e],1),H[e].m(d,null))}for(Zl(),e=G.length;e<H.length;e+=1)Q(e);td()}if(8&n){let e;for(W=t[3],e=0;e<W.length;e+=1){const s=Fd(t,W,e);X[e]?(X[e].p(s,n),ed(X[e],1)):(X[e]=jd(s),X[e].c(),ed(X[e],1),X[e].m(b,null))}for(Zl(),e=W.length;e<X.length;e+=1)Y(e);td()}!function(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}(J,t,n)},i(t){if(!j){ed(e.$$.fragment,t);for(let t=0;t<q.length;t+=1)ed(K[t]);for(let t=0;t<G.length;t+=1)ed(H[t]);for(let t=0;t<W.length;t+=1)ed(X[t]);ed(D.$$.fragment,t),ed(_.$$.fragment,t),ed(J.block),j=!0}},o(t){nd(e.$$.fragment,t),K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)nd(K[t]);H=H.filter(Boolean);for(let t=0;t<H.length;t+=1)nd(H[t]);X=X.filter(Boolean);for(let t=0;t<X.length;t+=1)nd(X[t]);nd(D.$$.fragment,t),nd(_.$$.fragment,t);for(let t=0;t<3;t+=1){nd(J.blocks[t])}j=!1},d(t){od(e,t),t&&xl(n),t&&xl(s),Ll(K,t),Ll(H,t),Ll(X,t),od(D),od(_),t&&xl(N),t&&xl(x),t&&xl(L),t&&xl(O),J.block.d(),J.token=null,J=null,t&&xl(P),t&&xl(F),t&&xl(V),t&&xl($),t&&xl(U),t&&xl(B)}}}function Hd(t,e,n){let{db:s}=e;const i=gd(),r=Id(i,s);return t.$$set=t=>{"db"in t&&n(4,s=t.db)},[r,["Pure Year 1","Pure Year 2","Applied Year 1","Applied Year 2"],["Further Mech","Further Pure Year 1","Further Pure Year 2","Further Stats"],["Gravitational Fields","Circular Motion","Electric Fields","Simple Harmonic Motion","Capacitors","Thermal Physics","Magnetism","Nuclear Physics","Radioactivity","Astrophysics"],s]}return new class extends ud{constructor(t){super(),cd(this,t,Hd,Gd,Cl,{db:4})}}({target:document.body,props:{db:ml}})}();
//# sourceMappingURL=index.js.map
