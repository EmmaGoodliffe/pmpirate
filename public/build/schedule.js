var schedule=function(){"use strict";
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
     */const t=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=s>>2,h=(3&s)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),i.push(n[u],n[h],n[l],n[d])}return i.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},n=function(n){return function(n){const i=t(n);return e.encodeByteArray(i,!0)}(n).replace(/\./g,"")};
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
class i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function s(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function r(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function o(){return"object"==typeof indexedDB}function a(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class c extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,u.prototype.create)}}class u{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(h,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new c(i,o,n)}}const h=/\{\$([^}]+)}/g;function l(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(d(n)&&d(r)){if(!l(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function d(t){return null!==t&&"object"==typeof t}
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
     */function f(t,e=1e3,n=2){const i=e*Math.pow(n,t),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
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
     */class y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:m})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===m?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:m:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class v{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var w;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(w||(w={}));const b={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},E=w.INFO,T={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},I=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=T[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class S{constructor(t){this.name=t,this._logLevel=E,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in w))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...t),this._logHandler(this,w.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...t),this._logHandler(this,w.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,w.INFO,...t),this._logHandler(this,w.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,w.WARN,...t),this._logHandler(this,w.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...t),this._logHandler(this,w.ERROR,...t)}}let C,A;const D=new WeakMap,k=new WeakMap,_=new WeakMap,N=new WeakMap,x=new WeakMap;let O={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return k.get(t);if("objectStoreNames"===e)return t.objectStoreNames||_.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function L(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(A||(A=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(P(this),e),M(D.get(this))}:function(...e){return M(t.apply(P(this),e))}:function(e,...n){const i=t.call(P(this),e,...n);return _.set(i,e.sort?e.sort():[e]),M(i)}}function R(t){return"function"==typeof t?L(t):(t instanceof IDBTransaction&&function(t){if(k.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));k.set(t,e)}(t),e=t,(C||(C=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,O):t);var e}function M(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(M(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&D.set(e,t)})).catch((()=>{})),x.set(e,t),e}(t);if(N.has(t))return N.get(t);const e=R(t);return e!==t&&(N.set(t,e),x.set(e,t)),e}const P=t=>x.get(t);function F(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=M(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(M(o.result),t.oldVersion,t.newVersion,M(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const V=["get","getKey","getAll","getAllKeys","count"],U=["put","add","delete","clear"],$=new Map;function B(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if($.get(e))return $.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=U.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!V.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return $.set(e,r),r}O=(t=>({...t,get:(e,n,i)=>B(e,n)||t.get(e,n,i),has:(e,n)=>!!B(e,n)||t.has(e,n)}))(O);
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
class j{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const q="@firebase/app",K="0.7.28",z=new S("@firebase/app"),H="[DEFAULT]",G={[q]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Q=new Map,W=new Map;function X(t,e){try{t.container.addComponent(e)}catch(n){z.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Y(t){const e=t.name;if(W.has(e))return z.debug(`There were multiple attempts to register component ${e}.`),!1;W.set(e,t);for(const e of Q.values())X(e,t);return!0}function J(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
     */function et(t="[DEFAULT]"){const e=Q.get(t);if(!e)throw Z.create("no-app",{appName:t});return e}function nt(t,e,n){var i;let s=null!==(i=G[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void z.warn(t.join(" "))}Y(new g(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
     */const it="firebase-heartbeat-store";let st=null;function rt(){return st||(st=F("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(it)}}).catch((t=>{throw Z.create("storage-open",{originalErrorMessage:t.message})}))),st}async function ot(t,e){var n;try{const n=(await rt()).transaction(it,"readwrite"),i=n.objectStore(it);return await i.put(e,at(t)),n.done}catch(t){throw Z.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function at(t){return`${t.name}!${t.options.appId}`}
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
     */class ct{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ht(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=ut();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ut(),{heartbeatsToSend:e,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),lt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=n(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ut(){return(new Date).toISOString().substring(0,10)}class ht{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!o()&&a().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await rt()).transaction(it).objectStore(it).get(at(t))}catch(t){throw Z.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function lt(t){return n(JSON.stringify({version:2,heartbeats:t})).length}
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
     */const xt=new Map;function Ot(t,e){const n=Nt(t);Lt(n,e),function(t,e){const n=function(){!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=t=>{Lt(t.data.key,t.data.fid)});return Rt}();n&&n.postMessage({key:t,fid:e});0===xt.size&&Rt&&(Rt.close(),Rt=null)}(n,e)}function Lt(t,e){const n=xt.get(t);if(n)for(const t of n)t(e)}let Rt=null;
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
const Mt="firebase-installations-store";let Pt=null;function Ft(){return Pt||(Pt=F("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Mt)}})),Pt}async function Vt(t,e){const n=Nt(t),i=(await Ft()).transaction(Mt,"readwrite"),s=i.objectStore(Mt),r=await s.get(n);return await s.put(e,n),await i.done,r&&r.fid===e.fid||Ot(t,e.fid),e}async function Ut(t){const e=Nt(t),n=(await Ft()).transaction(Mt,"readwrite");await n.objectStore(Mt).delete(e),await n.done}async function $t(t,e){const n=Nt(t),i=(await Ft()).transaction(Mt,"readwrite"),s=i.objectStore(Mt),r=await s.get(n),o=e(r);return void 0===o?await s.delete(n):await s.put(o,n),await i.done,!o||r&&r.fid===o.fid||Ot(t,o.fid),o}
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
     */async function Bt(t){let e;const n=await $t(t.appConfig,(n=>{const i=function(t){return Kt(t||{fid:_t(),registrationStatus:0})}(n),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(wt.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Et(t),s=St(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={fid:n,authVersion:yt,appId:t.appId,sdkVersion:mt},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await At((()=>fetch(i,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Tt(t.authToken)}}throw await It("Create Installation",c)}(t,e);return Vt(t.appConfig,n)}catch(n){throw bt(n)&&409===n.customData.serverCode?await Ut(t.appConfig):await Vt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:jt(t)}:{installationEntry:e}}(t,i);return e=s.registrationPromise,s.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function jt(t){let e=await qt(t.appConfig);for(;1===e.registrationStatus;)await Dt(100),e=await qt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Bt(t);return n||e}return e}function qt(t){return $t(t,(t=>{if(!t)throw wt.create("installation-not-found");return Kt(t)}))}function Kt(t){return 1===(e=t).registrationStatus&&e.registrationTime+gt<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
     */}async function zt({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${Et(t)}/${e}/authTokens:generate`}
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
     */(t,n),s=Ct(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={installation:{sdkVersion:mt,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await At((()=>fetch(i,a)));if(c.ok){return Tt(await c.json())}throw await It("Generate Auth Token",c)}async function Ht(t,e=!1){let n;const i=await $t(t.appConfig,(i=>{if(!Qt(i))throw wt.create("not-registered");const s=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vt}(t)}(s))return i;if(1===s.requestStatus)return n=async function(t,e){let n=await Gt(t.appConfig);for(;1===n.authToken.requestStatus;)await Dt(100),n=await Gt(t.appConfig);const i=n.authToken;return 0===i.requestStatus?Ht(t,e):i}(t,e),i;{if(!navigator.onLine)throw wt.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await zt(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Vt(t.appConfig,i),n}catch(n){if(!bt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vt(t.appConfig,n)}else await Ut(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function Gt(t){return $t(t,(t=>{if(!Qt(t))throw wt.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+gt<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
     */(n);return(await Ht(n,e)).token}function Xt(t){return wt.create("missing-app-config-values",{valueName:t})}
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
     */const Yt="installations",Jt=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Xt("App Configuration");if(!t.name)throw Xt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:J(e,"heartbeat"),_delete:()=>Promise.resolve()}},Zt=t=>{const e=J(t.getProvider("app").getImmediate(),Yt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Bt(e);return i?i.catch(console.error):Ht(e).catch(console.error),n.fid}(e),getToken:t=>Wt(e,t)}};Y(new g(Yt,Jt,"PUBLIC")),Y(new g("installations-internal",Zt,"PRIVATE")),nt(ft,pt),nt(ft,pt,"esm2017");
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
function ie(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function se(t,e,n,i){return async function(s,r,o){try{"event"===s?await async function(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const i=await ie(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(t){ne.error(t)}}(t,e,n,r,o):"config"===s?await async function(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const t=(await ie(n)).find((t=>t.measurementId===s));t&&await e[t.appId]}}catch(t){ne.error(t)}t("config",s,r)}(t,e,n,i,r,o):"consent"===s?t("consent","update",o):t("set",r)}catch(t){ne.error(t)}}}
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
const re=new u("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const oe=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function ae(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ce(t,e=oe,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw re.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw re.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new he;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),ue({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ue(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=oe){var r,o;const{appId:a,measurementId:u}=t;try{await function(t,e){return new Promise(((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener((()=>{clearTimeout(r),i(re.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(u)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null===(r=t)||void 0===r?void 0:r.message}]`),{appId:a,measurementId:u};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:ae(i)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return s.deleteThrottleMetadata(a),e}catch(e){const r=e;if(!function(t){if(!(t instanceof c&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r)){if(s.deleteThrottleMetadata(a),u)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${null==r?void 0:r.message}]`),{appId:a,measurementId:u};throw e}const h=503===Number(null===(o=null==r?void 0:r.customData)||void 0===o?void 0:o.httpStatus)?f(n,s.intervalMillis,30):f(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(a,l),ne.debug(`Calling attemptFetch again in ${h} millis`),ue(t,l,i,s)}}class he{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function le(t,e,n,i,s,r,c){var u;const h=ce(t);h.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>ne.error(t))),e.push(h);const l=
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
async function(){var t;if(!o())return ne.warn(re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await a()}catch(e){return ne.warn(re.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[d,f]=await Promise.all([h,l]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ee))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${ee}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,d.measurementId),s("js",new Date);const p=null!==(u=null==c?void 0:c.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),s("config",d.measurementId,p),d.measurementId}
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
     */class de{constructor(t){this.app=t}_delete(){return delete fe[this.app.options.appId],Promise.resolve()}}let fe={},pe=[];const ge={};let me,ye,ve="dataLayer",we=!1;function be(){const t=[];if(r()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=re.create("invalid-analytics-context",{errorInfo:e});ne.warn(n.message)}}function Ee(t,e,n){be();const i=t.options.appId;if(!i)throw re.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw re.create("no-api-key");ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=fe[i])throw re.create("already-exists",{id:i});if(!we){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(ve);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=se(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}(fe,pe,ge,ve,"gtag");ye=t,me=e,we=!0}fe[i]=le(t,pe,ge,e,me,ve,n);return new de(t)}function Te(t,e,n,i){t=p(t),async function(t,e,n,i,s){if(s&&s.global)t("event",n,i);else{const s=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:s}))}}(ye,fe[t.app.options.appId],e,n,i).catch((t=>ne.error(t)))}const Ie="@firebase/analytics",Se="0.8.0";Y(new g(te,((t,{options:e})=>Ee(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Y(new g("analytics-internal",(function(t){try{const e=t.getProvider(te).getImmediate();return{logEvent:(t,n,i)=>Te(e,t,n,i)}}catch(t){throw re.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),nt(Ie,Se),nt(Ie,Se,"esm2017");
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
nt("firebase","9.9.0","app");var Ce,Ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},De=De||{},ke=Ae||self;function _e(){}function Ne(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function xe(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Oe="closure_uid_"+(1e9*Math.random()>>>0),Le=0;function Re(t,e,n){return t.call.apply(t.bind,arguments)}function Me(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return(Pe=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Re:Me).apply(null,arguments)}function Fe(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Ue(){this.s=this.s,this.o=this.o}var $e={};Ue.prototype.s=!1,Ue.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Oe)&&t[Oe]||(t[Oe]=++Le)}(this);delete $e[t]}},Ue.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Be=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},je=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function qe(t){return Array.prototype.concat.apply([],arguments)}function Ke(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ze(t){return/^[\s\xa0]*$/.test(t)}var He,Ge=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qe(t,e){return-1!=t.indexOf(e)}function We(t,e){return t<e?-1:t>e?1:0}t:{var Xe=ke.navigator;if(Xe){var Ye=Xe.userAgent;if(Ye){He=Ye;break t}}He=""}function Je(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ze(t){const e={};for(const n in t)e[n]=t[n];return e}var tn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function en(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<tn.length;e++)n=tn[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function nn(t){return nn[" "](t),t}nn[" "]=_e;var sn,rn,on=Qe(He,"Opera"),an=Qe(He,"Trident")||Qe(He,"MSIE"),cn=Qe(He,"Edge"),un=cn||an,hn=Qe(He,"Gecko")&&!(Qe(He.toLowerCase(),"webkit")&&!Qe(He,"Edge"))&&!(Qe(He,"Trident")||Qe(He,"MSIE"))&&!Qe(He,"Edge"),ln=Qe(He.toLowerCase(),"webkit")&&!Qe(He,"Edge");function dn(){var t=ke.document;return t?t.documentMode:void 0}t:{var fn="",pn=(rn=He,hn?/rv:([^\);]+)(\)|;)/.exec(rn):cn?/Edge\/([\d\.]+)/.exec(rn):an?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rn):ln?/WebKit\/(\S+)/.exec(rn):on?/(?:Version)[ \/]?(\S+)/.exec(rn):void 0);if(pn&&(fn=pn?pn[1]:""),an){var gn=dn();if(null!=gn&&gn>parseFloat(fn)){sn=String(gn);break t}}sn=fn}var mn,yn={};function vn(){return function(t){var e=yn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ge(String(sn)).split("."),n=Ge("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=We(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||We(0==s[2].length,0==r[2].length)||We(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(ke.document&&an){var wn=dn();mn=wn||(parseInt(sn,10)||void 0)}else mn=void 0;var bn=mn,En=function(){if(!ke.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ke.addEventListener("test",_e,e),ke.removeEventListener("test",_e,e)}catch(t){}return t}();function Tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function In(t,e){if(Tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hn){t:{try{nn(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Sn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&In.Z.h.call(this)}}Tn.prototype.h=function(){this.defaultPrevented=!0},Ve(In,Tn);var Sn={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),An=0;function Dn(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++An,this.ca=this.fa=!1}function kn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _n(t){this.src=t,this.g={},this.h=0}function Nn(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Be(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(kn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function xn(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}_n.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=xn(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Dn(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var On="closure_lm_"+(1e6*Math.random()|0),Ln={};function Rn(t,e,n,i,s){if(i&&i.once)return Pn(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rn(t,e[r],n,i,s);return null}return n=qn(n),t&&t[Cn]?t.N(e,n,xe(i)?!!i.capture:!!i,s):Mn(t,e,n,!1,i,s)}function Mn(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=xe(s)?!!s.capture:!!s,a=Bn(t);if(a||(t[On]=a=new _n(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=$n;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)En||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Un(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Pn(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pn(t,e[r],n,i,s);return null}return n=qn(n),t&&t[Cn]?t.O(e,n,xe(i)?!!i.capture:!!i,s):Mn(t,e,n,!0,i,s)}function Fn(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fn(t,e[r],n,i,s);else i=xe(i)?!!i.capture:!!i,n=qn(n),t&&t[Cn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=xn(r=t.g[e],n,i,s))&&(kn(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Bn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xn(e,n,i,s)),(n=-1<t?e[t]:null)&&Vn(n))}function Vn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Cn])Nn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Un(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Bn(e))?(Nn(n,t),0==n.h&&(n.src=null,e[On]=null)):kn(t)}}}function Un(t){return t in Ln?Ln[t]:Ln[t]="on"+t}function $n(t,e){if(t.ca)t=!0;else{e=new In(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Vn(t),t=n.call(i,e)}return t}function Bn(t){return(t=t[On])instanceof _n?t:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qn(t){return"function"==typeof t?t:(t[jn]||(t[jn]=function(e){return t.handleEvent(e)}),t[jn])}function Kn(){Ue.call(this),this.i=new _n(this),this.P=this,this.I=null}function zn(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Tn(e,t);else if(e instanceof Tn)e.target=e.target||t;else{var s=e;en(e=new Tn(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Hn(o,i,!0,e)&&s}if(s=Hn(o=e.g=t,i,!0,e)&&s,s=Hn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=Hn(o=e.g=n[r],i,!1,e)&&s}function Hn(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Nn(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}Ve(Kn,Ue),Kn.prototype[Cn]=!0,Kn.prototype.removeEventListener=function(t,e,n,i){Fn(this,t,e,n,i)},Kn.prototype.M=function(){if(Kn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)kn(n[i]);delete e.g[t],e.h--}}this.I=null},Kn.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Kn.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Gn=ke.JSON.stringify;function Qn(){var t=ei;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Wn,Xn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Yn),(t=>t.reset()));class Yn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Jn(t){ke.setTimeout((()=>{throw t}),0)}function Zn(t,e){Wn||function(){var t=ke.Promise.resolve(void 0);Wn=function(){t.then(ni)}}(),ti||(Wn(),ti=!0),ei.add(t,e)}var ti=!1,ei=new class{constructor(){this.h=this.g=null}add(t,e){const n=Xn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function ni(){for(var t;t=Qn();){try{t.h.call(t.g)}catch(t){Jn(t)}var e=Xn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ti=!1}function ii(t,e){Kn.call(this),this.h=t||1,this.g=e||ke,this.j=Pe(this.kb,this),this.l=Date.now()}function si(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ri(t,e,n){if("function"==typeof t)n&&(t=Pe(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pe(t.handleEvent,t)}return 2147483647<Number(e)?-1:ke.setTimeout(t,e||0)}function oi(t){t.g=ri((()=>{t.g=null,t.i&&(t.i=!1,oi(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ve(ii,Kn),(Ce=ii.prototype).da=!1,Ce.S=null,Ce.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),zn(this,"tick"),this.da&&(si(this),this.start()))}},Ce.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ce.M=function(){ii.Z.M.call(this),si(this),delete this.g};class ai extends Ue{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:oi(this)}M(){super.M(),this.g&&(ke.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(t){Ue.call(this),this.h=t,this.g={}}Ve(ci,Ue);var ui=[];function hi(t,e,n,i){Array.isArray(n)||(n&&(ui[0]=n.toString()),n=ui);for(var s=0;s<n.length;s++){var r=Rn(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function li(t){Je(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Vn(t)}),t),t.g={}}function di(){this.g=!0}function fi(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Gn(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}ci.prototype.M=function(){ci.Z.M.call(this),li(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},di.prototype.Aa=function(){this.g=!1},di.prototype.info=function(){};var pi={},gi=null;function mi(){return gi=gi||new Kn}function yi(t){Tn.call(this,pi.Ma,t)}function vi(t){const e=mi();zn(e,new yi(e,t))}function wi(t,e){Tn.call(this,pi.STAT_EVENT,t),this.stat=e}function bi(t){const e=mi();zn(e,new wi(e,t))}function Ei(t,e){Tn.call(this,pi.Na,t),this.size=e}function Ti(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ke.setTimeout((function(){t()}),e)}pi.Ma="serverreachability",Ve(yi,Tn),pi.STAT_EVENT="statevent",Ve(wi,Tn),pi.Na="timingevent",Ve(Ei,Tn);var Ii={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Si={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ci(){}function Ai(t){return t.h||(t.h=t.i())}function Di(){}Ci.prototype.h=null;var ki,_i={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ni(){Tn.call(this,"d")}function xi(){Tn.call(this,"c")}function Oi(){}function Li(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new ci(this),this.P=Mi,t=un?125:void 0,this.W=new ii(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}Ve(Ni,Tn),Ve(xi,Tn),Ve(Oi,Ci),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},ki=new Oi;var Mi=45e3,Pi={},Fi={};function Vi(t,e,n){t.K=1,t.v=as(es(e)),t.s=n,t.U=!0,Ui(t,null)}function Ui(t,e){t.F=Date.now(),qi(t),t.A=es(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),bs(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ri,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ai(Pe(t.Ia,t,t.g),t.O)),hi(t.V,t.g,"readystatechange",t.gb),e=t.H?Ze(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),vi(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function $i(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Bi(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=ji(t,n),i==Fi){4==e&&(t.o=4,bi(14),s=!1),fi(t.j,t.m,null,"[Incomplete Response]");break}if(i==Pi){t.o=4,bi(15),fi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}fi(t.j,t.m,i,null),Qi(t,i)}$i(t)&&i!=Fi&&i!=Pi&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,bi(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dr(e),e.L=!0,bi(11))):(fi(t.j,t.m,n,"[Invalid Chunked Response]"),Gi(t),Hi(t))}function ji(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Fi:(n=Number(e.substring(n,i)),isNaN(n)?Pi:(i+=1)+n>e.length?Fi:(e=e.substr(i,n),t.C=i+n,e))}function qi(t){t.Y=Date.now()+t.P,Ki(t,t.P)}function Ki(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ti(Pe(t.eb,t),e)}function zi(t){t.B&&(ke.clearTimeout(t.B),t.B=null)}function Hi(t){0==t.l.G||t.I||gr(t.l,t)}function Gi(t){zi(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,si(t.W),li(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||As(n.i,t)))if(n.I=t.N,!t.J&&As(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;pr(n),ir(n)}lr(n),bi(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ti(Pe(n.ab,n),6e3));if(1>=Cs(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else yr(n,11)}else if((t.J||n.g==t)&&pr(n),!ze(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Qe(t,"spdy")||Qe(t,"quic")||Qe(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ds(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,os(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=wr(i,i.H?i.la:null,i.W),o.J){ks(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(zi(a),qi(a)),i.g=o}else hr(i);0<n.l.length&&or(n)}else"stop"!=u[0]&&"close"!=u[0]||yr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?yr(n,7):nr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}vi(4)}catch(t){}}function Wi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ne(t)||"string"==typeof t)je(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Ne(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Ne(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Xi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Xi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Yi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Ji(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)Ji(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function Ji(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ce=Li.prototype).setTimeout=function(t){this.P=t},Ce.gb=function(t){t=t.target;const e=this.L;e&&3==Ys(t)?e.l():this.Ia(t)},Ce.Ia=function(t){try{if(t==this.g)t:{const h=Ys(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||un||this.g&&(this.h.h||this.g.ga()||Js(this.g)))){this.I||4!=h||7==e||vi(8==e||0>=l?3:2),zi(this);var n=this.g.ba();this.N=n;e:if($i(this)){var i=Js(this.g);t="";var s=i.length,r=4==Ys(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gi(this),Hi(this);var o="";break e}this.h.i=new ke.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,bi(12),Gi(this),Hi(this);break t}fi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qi(this,n)}this.U?(Bi(this,h,o),un&&this.i&&3==h&&(hi(this.V,this.W,"tick",this.fb),this.W.start())):(fi(this.j,this.m,o,null),Qi(this,o)),4==h&&Gi(this),this.i&&!this.I&&(4==h?gr(this.l,this):(this.i=!1,qi(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,bi(12)):(this.o=0,bi(13)),Gi(this),Hi(this)}}}catch(t){}},Ce.fb=function(){if(this.g){var t=Ys(this.g),e=this.g.ga();this.C<e.length&&(zi(this),Bi(this,t,e),this.i&&4!=t&&qi(this))}},Ce.cancel=function(){this.I=!0,Gi(this)},Ce.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(vi(3),bi(17)),Gi(this),this.o=2,Hi(this)):Ki(this,this.Y-t)},(Ce=Xi.prototype).R=function(){Yi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ce.T=function(){return Yi(this),this.g.concat()},Ce.get=function(t,e){return Ji(this.h,t)?this.h[t]:e},Ce.set=function(t,e){Ji(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ce.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var Zi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ts(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ts){this.g=void 0!==e?e:t.g,ns(this,t.j),this.s=t.s,is(this,t.i),ss(this,t.m),this.l=t.l,e=t.h;var n=new ms;n.i=e.i,e.g&&(n.g=new Xi(e.g),n.h=e.h),rs(this,n),this.o=t.o}else t&&(n=String(t).match(Zi))?(this.g=!!e,ns(this,n[1]||"",!0),this.s=cs(n[2]||""),is(this,n[3]||"",!0),ss(this,n[4]),this.l=cs(n[5]||"",!0),rs(this,n[6]||"",!0),this.o=cs(n[7]||"")):(this.g=!!e,this.h=new ms(null,this.g))}function es(t){return new ts(t)}function ns(t,e,n){t.j=n?cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function is(t,e,n){t.i=n?cs(e,!0):e}function ss(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rs(t,e,n){e instanceof ms?(t.h=e,function(t,e){e&&!t.j&&(ys(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vs(this,e),bs(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=us(e,ps)),t.h=new ms(e,t.g))}function os(t,e,n){t.h.set(e,n)}function as(t){return os(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function us(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,hs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(us(e,ls,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(us(e,ls,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(us(n,"/"==n.charAt(0)?fs:ds,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",us(n,gs)),t.join("")};var ls=/[#\/\?@]/g,ds=/[#\?:]/g,fs=/[#\?]/g,ps=/[#\?@]/g,gs=/#/g;function ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ys(t){t.g||(t.g=new Xi,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vs(t,e){ys(t),e=Es(t,e),Ji(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Ji((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Yi(t)))}function ws(t,e){return ys(t),e=Es(t,e),Ji(t.g.h,e)}function bs(t,e,n){vs(t,e),0<n.length&&(t.i=null,t.g.set(Es(t,e),Ke(n)),t.h+=n.length)}function Es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ce=ms.prototype).add=function(t,e){ys(this),this.i=null,t=Es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ce.forEach=function(t,e){ys(this),this.g.forEach((function(n,i){je(n,(function(n){t.call(e,n,i,this)}),this)}),this)},Ce.T=function(){ys(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},Ce.R=function(t){ys(this);var e=[];if("string"==typeof t)ws(this,t)&&(e=qe(e,this.g.get(Es(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=qe(e,t[n])}return e},Ce.set=function(t,e){return ys(this),this.i=null,ws(this,t=Es(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ce.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ce.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function Ts(t){this.l=t||Is,ke.PerformanceNavigationTiming?t=0<(t=ke.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ke.g&&ke.g.Ea&&ke.g.Ea()&&ke.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Is=10;function Ss(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cs(t){return t.h?1:t.g?t.g.size:0}function As(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ds(t,e){t.g?t.g.add(e):t.h=e}function ks(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _s(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ke(t.i)}function Ns(){}function xs(){this.g=new Ns}function Os(t,e,n){const i=n||"";try{Wi(t,(function(t,n){let s=t;xe(t)&&(s=Gn(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Ls(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function Rs(t){this.l=t.$b||null,this.j=t.ib||!1}function Ms(t,e){Kn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ps,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ts.prototype.cancel=function(){if(this.i=_s(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ns.prototype.stringify=function(t){return ke.JSON.stringify(t,void 0)},Ns.prototype.parse=function(t){return ke.JSON.parse(t,void 0)},Ve(Rs,Ci),Rs.prototype.g=function(){return new Ms(this.l,this.j)},Rs.prototype.i=function(t){return function(){return t}}({}),Ve(Ms,Kn);var Ps=0;function Fs(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Us(t)}function Us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ce=Ms.prototype).open=function(t,e){if(this.readyState!=Ps)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Us(this)},Ce.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ke).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ce.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vs(this)),this.readyState=Ps},Ce.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ke.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fs(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ce.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vs(this):Us(this),3==this.readyState&&Fs(this)}},Ce.Ua=function(t){this.g&&(this.response=this.responseText=t,Vs(this))},Ce.Ta=function(t){this.g&&(this.response=t,Vs(this))},Ce.ha=function(){this.g&&Vs(this)},Ce.setRequestHeader=function(t,e){this.v.append(t,e)},Ce.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ce.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var $s=ke.JSON.parse;function Bs(t){Kn.call(this),this.headers=new Xi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=js,this.K=this.L=!1}Ve(Bs,Kn);var js="",qs=/^https?$/i,Ks=["POST","PUT"];function zs(t){return"content-type"==t.toLowerCase()}function Hs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gs(t),Ws(t)}function Gs(t){t.D||(t.D=!0,zn(t,"complete"),zn(t,"error"))}function Qs(t){if(t.h&&void 0!==De&&(!t.C[1]||4!=Ys(t)||2!=t.ba()))if(t.v&&4==Ys(t))ri(t.Fa,0,t);else if(zn(t,"readystatechange"),4==Ys(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(Zi)[1]||null;if(!s&&ke.self&&ke.self.location){var r=ke.self.location.protocol;s=r.substr(0,r.length-1)}i=!qs.test(s?s.toLowerCase():"")}n=i}if(n)zn(t,"complete"),zn(t,"success");else{t.m=6;try{var o=2<Ys(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Gs(t)}}finally{Ws(t)}}}function Ws(t,e){if(t.g){Xs(t);const n=t.g,i=t.C[0]?_e:null;t.g=null,t.C=null,e||zn(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Xs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ke.clearTimeout(t.A),t.A=null)}function Ys(t){return t.g?t.g.readyState:0}function Js(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case js:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Je(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):os(t,e,n))}function tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function er(t){this.za=0,this.l=[],this.h=new di,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=tr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=tr("baseRetryDelayMs",5e3,t),this.$a=tr("retryDelaySeedMs",1e4,t),this.Ya=tr("forwardChannelMaxRetries",2,t),this.ra=tr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ts(t&&t.concurrentRequestLimit),this.Ca=new xs,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function nr(t){if(sr(t),3==t.G){var e=t.V++,n=es(t.F);os(n,"SID",t.J),os(n,"RID",e),os(n,"TYPE","terminate"),cr(t,n),(e=new Li(t,t.h,e,void 0)).K=2,e.v=as(es(n)),n=!1,ke.navigator&&ke.navigator.sendBeacon&&(n=ke.navigator.sendBeacon(e.v.toString(),"")),!n&&ke.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),qi(e)}vr(t)}function ir(t){t.g&&(dr(t),t.g.cancel(),t.g=null)}function sr(t){ir(t),t.u&&(ke.clearTimeout(t.u),t.u=null),pr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&ke.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&or(t)}function or(t){Ss(t.i)||t.m||(t.m=!0,Zn(t.Ha,t),t.C=0)}function ar(t,e){var n;n=e?e.m:t.V++;const i=es(t.F);os(i,"SID",t.J),os(i,"RID",n),os(i,"AID",t.U),cr(t,i),t.o&&t.s&&Zs(i,t.o,t.s),n=new Li(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ur(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ds(t.i,n),Vi(n,i,e)}function cr(t,e){t.j&&Wi({},(function(t,n){os(e,n,t)}))}function ur(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Pe(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Os(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function hr(t){t.g||t.u||(t.Y=1,Zn(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Ti(Pe(t.Ga,t),mr(t,t.A)),t.A++,!0)}function dr(t){null!=t.B&&(ke.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new Li(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=es(t.oa);os(e,"RID","rpc"),os(e,"SID",t.J),os(e,"CI",t.N?"0":"1"),os(e,"AID",t.U),cr(t,e),os(e,"TYPE","xmlhttp"),t.o&&t.s&&Zs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=as(es(e)),n.s=null,n.U=!0,Ui(n,t)}function pr(t){null!=t.v&&(ke.clearTimeout(t.v),t.v=null)}function gr(t,e){var n=null;if(t.g==e){pr(t),dr(t),t.g=null;var i=2}else{if(!As(t.i,e))return;n=e.D,ks(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;zn(i=mi(),new Ei(i,n,e,s)),or(t)}else hr(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(Cs(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Ti(Pe(t.Ha,t,e),mr(t,t.C)),t.C++,0)))}(t,e)||2==i&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:yr(t,5);break;case 4:yr(t,10);break;case 3:yr(t,6);break;default:yr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Pe(t.jb,t);n||(n=new ts("//www.google.com/images/cleardot.gif"),ke.location&&"http"==ke.location.protocol||ns(n,"https"),as(n)),function(t,e){const n=new di;if(ke.Image){const i=new Image;i.onload=Fe(Ls,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Fe(Ls,n,i,"TestLoadImage: error",!1,e),i.onabort=Fe(Ls,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Fe(Ls,n,i,"TestLoadImage: timeout",!1,e),ke.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else bi(2);t.G=0,t.j&&t.j.va(e),vr(t),sr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==_s(t.i).length&&0==t.l.length||(t.i.i.length=0,Ke(t.l),t.l.length=0),t.j.ua())}function wr(t,e,n){let i=function(t){return t instanceof ts?es(t):new ts(t,void 0)}(n);if(""!=i.i)e&&is(i,e+"."+i.i),ss(i,i.m);else{const t=ke.location;i=function(t,e,n,i){var s=new ts(null,void 0);return t&&ns(s,t),e&&is(s,e),n&&ss(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Je(t.aa,(function(t,e){os(i,e,t)})),e=t.D,n=t.sa,e&&n&&os(i,e,n),os(i,"VER",t.ma),cr(t,i),i}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Bs(new Rs({ib:!0})):new Bs(t.qa)).L=t.H,e}function Er(){}function Tr(){if(an&&!(10<=Number(bn)))throw Error("Environmental error: no available transport.")}function Ir(t,e){Kn.call(this),this.g=new er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ze(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ze(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ar(this)}function Sr(t){Ni.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Cr(){xi.call(this),this.status=1}function Ar(t){this.g=t}(Ce=Bs.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ki.g(),this.C=this.u?Ai(this.u):Ai(ki),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Hs(this,t)}t=n||"";const s=new Xi(this.headers);i&&Wi(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=zs;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=ke.FormData&&t instanceof ke.FormData,!(0<=Be(Ks,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xs(this),0<this.B&&((this.K=function(t){return an&&vn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=ri(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Hs(this,t)}},Ce.pa=function(){void 0!==De&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zn(this,"timeout"),this.abort(8))},Ce.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zn(this,"complete"),zn(this,"abort"),Ws(this))},Ce.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ws(this,!0)),Bs.Z.M.call(this)},Ce.Fa=function(){this.s||(this.F||this.v||this.l?Qs(this):this.cb())},Ce.cb=function(){Qs(this)},Ce.ba=function(){try{return 2<Ys(this)?this.g.status:-1}catch(t){return-1}},Ce.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ce.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),$s(e)}},Ce.Da=function(){return this.m},Ce.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ce=er.prototype).ma=8,Ce.G=1,Ce.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ce.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Li(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Ze(r),en(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ur(this,s,e),os(n=es(this.F),"RID",t),os(n,"CVER",22),this.D&&os(n,"X-HTTP-Session-Id",this.D),cr(this,n),this.o&&r&&Zs(n,this.o,r),Ds(this.i,s),this.Ra&&os(n,"TYPE","init"),this.ja?(os(n,"$req",e),os(n,"SID","null"),s.$=!0,Vi(s,n,null)):Vi(s,n,e),this.G=2}}else 3==this.G&&(t?ar(this,t):0==this.l.length||Ss(this.i)||ar(this))},Ce.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ti(Pe(this.bb,this),t)}},Ce.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,bi(10),ir(this),fr(this))},Ce.ab=function(){null!=this.v&&(this.v=null,ir(this),lr(this),bi(19))},Ce.jb=function(t){t?(this.h.info("Successfully pinged google.com"),bi(2)):(this.h.info("Failed to ping google.com"),bi(1))},(Ce=Er.prototype).xa=function(){},Ce.wa=function(){},Ce.va=function(){},Ce.ua=function(){},Ce.Oa=function(){},Tr.prototype.g=function(t,e){return new Ir(t,e)},Ve(Ir,Kn),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zn(Pe(t.hb,t,e))),bi(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wr(t,null,t.W),or(t)},Ir.prototype.close=function(){nr(this.g)},Ir.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?((e={}).__data__=Gn(t),rr(this.g,e)):rr(this.g,t)},Ir.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,Ir.Z.M.call(this)},Ve(Sr,Ni),Ve(Cr,xi),Ve(Ar,Er),Ar.prototype.xa=function(){zn(this.g,"a")},Ar.prototype.wa=function(t){zn(this.g,new Sr(t))},Ar.prototype.va=function(t){zn(this.g,new Cr(t))},Ar.prototype.ua=function(){zn(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,Si.COMPLETE="complete",Di.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",Kn.prototype.listen=Kn.prototype.N,Bs.prototype.listenOnce=Bs.prototype.O,Bs.prototype.getLastError=Bs.prototype.La,Bs.prototype.getLastErrorCode=Bs.prototype.Da,Bs.prototype.getStatus=Bs.prototype.ba,Bs.prototype.getResponseJson=Bs.prototype.Qa,Bs.prototype.getResponseText=Bs.prototype.ga,Bs.prototype.send=Bs.prototype.ea;var Dr=Ii,kr=Si,_r=pi,Nr=10,xr=11,Or=Rs,Lr=Di,Rr=Bs;const Mr="@firebase/firestore";
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
     */const Vr=new S("@firebase/firestore");function Ur(){return Vr.logLevel}function $r(t,...e){if(Vr.logLevel<=w.DEBUG){const n=e.map(qr);Vr.debug(`Firestore (${Fr}): ${t}`,...n)}}function Br(t,...e){if(Vr.logLevel<=w.ERROR){const n=e.map(qr);Vr.error(`Firestore (${Fr}): ${t}`,...n)}}function jr(t,...e){if(Vr.logLevel<=w.WARN){const n=e.map(qr);Vr.warn(`Firestore (${Fr}): ${t}`,...n)}}function qr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Kr(t="Unexpected state"){const e=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: `+t;throw Br(e),new Error(e)}function zr(t,e){t||Kr()}function Hr(t,e){return t}
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
     */const Gr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qr extends c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Xr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pr.UNAUTHENTICATED)))}shutdown(){}}class Jr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zr{constructor(t){this.t=t,this.currentUser=Pr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wr,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{$r("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):($r("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?($r("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(zr("string"==typeof e.accessToken),new Xr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return zr(null===t||"string"==typeof t),new Pr(t)}}class to{constructor(t,e,n){this.type="FirstParty",this.user=Pr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class eo{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new to(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Pr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class no{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class io{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&$r("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,$r("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{$r("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):$r("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(zr("string"==typeof t.token),this.p=t.token,new no(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function so(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class ro{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=so(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function oo(t,e){return t<e?-1:t>e?1:0}function ao(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
     */class co{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qr(Gr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qr(Gr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qr(Gr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qr(Gr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return co.fromMillis(Date.now())}static fromDate(t){return co.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new co(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?oo(this.nanoseconds,t.nanoseconds):oo(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class ho{constructor(t,e,n){void 0===e?e=0:e>t.length&&Kr(),void 0===n?n=t.length-e:n>t.length-e&&Kr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ho.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ho?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class lo extends ho{construct(t,e,n){return new lo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qr(Gr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new lo(e)}static emptyPath(){return new lo([])}}const fo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class po extends ho{construct(t,e,n){return new po(t,e,n)}static isValidIdentifier(t){return fo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),po.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new po(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Qr(Gr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Qr(Gr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qr(Gr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Qr(Gr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new po(e)}static emptyPath(){return new po([])}}
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
async function wo(t){if(t.code!==Gr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;$r("LocalStore","Unexpectedly lost primary lease")}
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
     */class bo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Kr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new bo(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof bo?e:bo.resolve(e)}catch(t){return bo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):bo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):bo.reject(e)}static resolve(t){return new bo(((e,n)=>{e(t)}))}static reject(t){return new bo(((e,n)=>{n(t)}))}static waitFor(t){return new bo(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=bo.resolve(!1);for(const n of t)e=e.next((t=>t?bo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new bo(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new bo(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}}function Eo(t){return"IndexedDbTransactionError"===t.name}
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
To.ot=-1;class Co{constructor(t,e){this.comparator=t,this.root=e||Do.EMPTY}insert(t,e){return new Co(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Do.BLACK,null,null))}remove(t){return new Co(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Do.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ao(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ao(this.root,t,this.comparator,!0)}}class Ao{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Do{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Do.RED,this.left=null!=i?i:Do.EMPTY,this.right=null!=s?s:Do.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new Do(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Do.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Do.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Do.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Do.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Kr();if(this.right.isRed())throw Kr();const t=this.left.check();if(t!==this.right.check())throw Kr();return t+(this.isRed()?0:1)}}Do.EMPTY=null,Do.RED=!0,Do.BLACK=!1,Do.EMPTY=new class{constructor(){this.size=0}get key(){throw Kr()}get value(){throw Kr()}get color(){throw Kr()}get left(){throw Kr()}get right(){throw Kr()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Do(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ko{constructor(t){this.comparator=t,this.data=new Co(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ko))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ko(this.comparator);return e.data=t,e}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return oo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xo.EMPTY_BYTE_STRING=new xo("");const Oo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lo(t){if(zr(!!t),"string"==typeof t){let e=0;const n=Oo.exec(t);if(zr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ro(t.seconds),nanos:Ro(t.nanos)}}function Ro(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Mo(t){return"string"==typeof t?xo.fromBase64String(t):xo.fromUint8Array(t)}
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
     */function Po(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fo(t){const e=t.mapValue.fields.__previous_value__;return Po(e)?Fo(e):e}function Vo(t){const e=Lo(t.mapValue.fields.__local_write_time__.timestampValue);return new co(e.seconds,e.nanos)}
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
     */class Uo{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class $o{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $o("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $o&&t.projectId===this.projectId&&t.database===this.database}}
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
     */(t)?9007199254740991:10:Kr()}function zo(t,e){if(t===e)return!0;const n=Ko(t);if(n!==Ko(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Lo(t.timestampValue),i=Lo(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Mo(t.bytesValue).isEqual(Mo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ro(t.geoPointValue.latitude)===Ro(e.geoPointValue.latitude)&&Ro(t.geoPointValue.longitude)===Ro(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ro(t.integerValue)===Ro(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ro(t.doubleValue),i=Ro(e.doubleValue);return n===i?jo(n)===jo(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],zo);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Io(n)!==Io(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!zo(n[t],i[t])))return!1;return!0}(t,e);default:return Kr()}}function Ho(t,e){return void 0!==(t.values||[]).find((t=>zo(t,e)))}function Go(t,e){if(t===e)return 0;const n=Ko(t),i=Ko(e);if(n!==i)return oo(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return oo(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ro(t.integerValue||t.doubleValue),i=Ro(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Qo(t.timestampValue,e.timestampValue);case 4:return Qo(Vo(t),Vo(e));case 5:return oo(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Mo(t),i=Mo(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=oo(n[t],i[t]);if(0!==e)return e}return oo(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=oo(Ro(t.latitude),Ro(e.latitude));return 0!==n?n:oo(Ro(t.longitude),Ro(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Go(n[t],i[t]);if(e)return e}return oo(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===qo&&e===qo)return 0;if(t===qo)return 1;if(e===qo)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=oo(i[t],r[t]);if(0!==e)return e;const o=Go(n[i[t]],s[r[t]]);if(0!==o)return o}return oo(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Kr()}}function Qo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return oo(t,e);const n=Lo(t),i=Lo(e),s=oo(n.seconds,i.seconds);return 0!==s?s:oo(n.nanos,i.nanos)}function Wo(t){return Xo(t)}function Xo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Lo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,go.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Xo(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Xo(t.fields[s])}`;return n+"}"}(t.mapValue):Kr();var e,n}function Yo(t){return!!t&&"integerValue"in t}function Jo(t){return!!t&&"arrayValue"in t}function Zo(t){return!!t&&"nullValue"in t}function ta(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return So(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=na(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=na(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ia{constructor(t){this.value=t}static empty(){return new ia({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ea(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=na(e)}setAll(t){let e=po.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=na(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());ea(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ea(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){So(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new ia(na(this.value))}}
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
     */class sa{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}static newInvalidDocument(t){return new sa(t,0,uo.min(),uo.min(),ia.empty(),0)}static newFoundDocument(t,e,n){return new sa(t,1,e,uo.min(),n,0)}static newNoDocument(t,e){return new sa(t,2,e,uo.min(),ia.empty(),0)}static newUnknownDocument(t,e){return new sa(t,3,e,uo.min(),ia.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ia.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ia.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=uo.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof sa&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sa(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class ra{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ut=null}}function oa(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ra(t,e,n,i,s,r,o)}function aa(t){const e=Hr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Wo(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Wo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Wo(t))).join(",")),e.ut=t}return e.ut}function ca(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ea(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!zo(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ia(t.startAt,e.startAt)&&Ia(t.endAt,e.endAt)}function ua(t){return go.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ha extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new la(t,e,n):"array-contains"===e?new ga(t,n):"in"===e?new ma(t,n):"not-in"===e?new ya(t,n):"array-contains-any"===e?new va(t,n):new ha(t,e,n)}static ct(t,e,n){return"in"===e?new da(t,n):new fa(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Go(e,this.value)):null!==e&&Ko(this.value)===Ko(e)&&this.at(Go(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Kr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class la extends ha{constructor(t,e,n){super(t,e,n),this.key=go.fromName(n.referenceValue)}matches(t){const e=go.comparator(t.key,this.key);return this.at(e)}}class da extends ha{constructor(t,e){super(t,"in",e),this.keys=pa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fa extends ha{constructor(t,e){super(t,"not-in",e),this.keys=pa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pa(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>go.fromName(t.referenceValue)))}class ga extends ha{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Jo(e)&&Ho(e.arrayValue,this.value)}}class ma extends ha{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ho(this.value.arrayValue,e)}}class ya extends ha{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ho(this.value.arrayValue,e)}}class va extends ha{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Jo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ho(this.value.arrayValue,t)))}}class wa{constructor(t,e){this.position=t,this.inclusive=e}}class ba{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ea(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ta(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?go.comparator(go.fromName(o.referenceValue),n.key):Go(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Ia(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zo(t.position[n],e.position[n]))return!1;return!0}
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
     */class Sa{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Ca(t){return new Sa(t)}function Aa(t){const e=Hr(t);if(null===e.lt){e.lt=[];const t=function(t){for(const e of t.filters)if(e.ht())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ba(t)),e.lt.push(new ba(po.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ba(po.keyField(),t))}}}return e.lt}function Da(t){const e=Hr(t);if(!e.ft)if("F"===e.limitType)e.ft=oa(e.path,e.collectionGroup,Aa(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Aa(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ba(n.field,e))}const n=e.endAt?new wa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wa(e.startAt.position,e.startAt.inclusive):null;e.ft=oa(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function ka(t,e){return ca(Da(t),Da(e))&&t.limitType===e.limitType}function _a(t){return`${aa(Da(t))}|lt:${t.limitType}`}function Na(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Wo(e.value)}`;var e})).join(", ")}]`),Bo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Wo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Wo(t))).join(",")),`Target(${e})`}(Da(t))}; limitType=${t.limitType})`}function xa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):go.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ta(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Aa(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ta(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Aa(t),e))}(t,e)}function Oa(t){return(e,n)=>{let i=!1;for(const s of Aa(t)){const t=La(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function La(t,e,n){const i=t.field.isKeyField()?go.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Go(i,s):Kr()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Kr()}}
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
     */class Ra{constructor(){this._=void 0}}function Ma(t,e,n){return t instanceof Fa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Va?Ua(t,e):t instanceof $a?Ba(t,e):function(t,e){const n=function(t,e){return t instanceof ja?Yo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),i=qa(n)+qa(t._t);return Yo(n)&&Yo(t._t)?function(t){return{integerValue:""+t}}(i):function(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}(t.wt,i)}(t,e)}function Pa(t,e,n){return t instanceof Va?Ua(t,e):t instanceof $a?Ba(t,e):n}class Fa extends Ra{}class Va extends Ra{constructor(t){super(),this.elements=t}}function Ua(t,e){const n=Ka(e);for(const e of t.elements)n.some((t=>zo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class $a extends Ra{constructor(t){super(),this.elements=t}}function Ba(t,e){let n=Ka(e);for(const e of t.elements)n=n.filter((t=>!zo(t,e)));return{arrayValue:{values:n}}}class ja extends Ra{constructor(t,e){super(),this.wt=t,this._t=e}}function qa(t){return Ro(t.integerValue||t.doubleValue)}function Ka(t){return Jo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class za{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new za}static exists(t){return new za(void 0,t)}static updateTime(t){return new za(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ha(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ga{}function Qa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ic(t.key,za.none()):new Ja(t.key,t.data,za.none());{const n=t.data,i=ia.empty();let s=new ko(po.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Za(t.key,i,new No(s.toArray()),za.none())}}function Wa(t,e,n){t instanceof Ja?function(t,e,n){const i=t.value.clone(),s=ec(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Za?function(t,e,n){if(!Ha(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ec(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(tc(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Xa(t,e,n,i){return t instanceof Ja?function(t,e,n,i){if(!Ha(t.precondition,e))return n;const s=t.value.clone(),r=nc(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Za?function(t,e,n,i){if(!Ha(t.precondition,e))return n;const s=nc(t.fieldTransforms,i,e),r=e.data;return r.setAll(tc(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Ha(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ya(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ao(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Va&&e instanceof Va||t instanceof $a&&e instanceof $a?ao(t.elements,e.elements,zo):t instanceof ja&&e instanceof ja?zo(t._t,e._t):t instanceof Fa&&e instanceof Fa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends Ga{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Za extends Ga{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function ec(t,e,n){const i=new Map;zr(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Pa(o,a,n[s]))}return i}function nc(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Ma(t,r,e))}return i}class ic extends Ga{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class sc{constructor(t){this.count=t}}
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
     */var rc,oc;function ac(t){if(void 0===t)return Br("GRPC error has no .code"),Gr.UNKNOWN;switch(t){case rc.OK:return Gr.OK;case rc.CANCELLED:return Gr.CANCELLED;case rc.UNKNOWN:return Gr.UNKNOWN;case rc.DEADLINE_EXCEEDED:return Gr.DEADLINE_EXCEEDED;case rc.RESOURCE_EXHAUSTED:return Gr.RESOURCE_EXHAUSTED;case rc.INTERNAL:return Gr.INTERNAL;case rc.UNAVAILABLE:return Gr.UNAVAILABLE;case rc.UNAUTHENTICATED:return Gr.UNAUTHENTICATED;case rc.INVALID_ARGUMENT:return Gr.INVALID_ARGUMENT;case rc.NOT_FOUND:return Gr.NOT_FOUND;case rc.ALREADY_EXISTS:return Gr.ALREADY_EXISTS;case rc.PERMISSION_DENIED:return Gr.PERMISSION_DENIED;case rc.FAILED_PRECONDITION:return Gr.FAILED_PRECONDITION;case rc.ABORTED:return Gr.ABORTED;case rc.OUT_OF_RANGE:return Gr.OUT_OF_RANGE;case rc.UNIMPLEMENTED:return Gr.UNIMPLEMENTED;case rc.DATA_LOSS:return Gr.DATA_LOSS;default:return Kr()}}(oc=rc||(rc={}))[oc.OK=0]="OK",oc[oc.CANCELLED=1]="CANCELLED",oc[oc.UNKNOWN=2]="UNKNOWN",oc[oc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oc[oc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oc[oc.NOT_FOUND=5]="NOT_FOUND",oc[oc.ALREADY_EXISTS=6]="ALREADY_EXISTS",oc[oc.PERMISSION_DENIED=7]="PERMISSION_DENIED",oc[oc.UNAUTHENTICATED=16]="UNAUTHENTICATED",oc[oc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oc[oc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oc[oc.ABORTED=10]="ABORTED",oc[oc.OUT_OF_RANGE=11]="OUT_OF_RANGE",oc[oc.UNIMPLEMENTED=12]="UNIMPLEMENTED",oc[oc.INTERNAL=13]="INTERNAL",oc[oc.UNAVAILABLE=14]="UNAVAILABLE",oc[oc.DATA_LOSS=15]="DATA_LOSS";
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
class cc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){So(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}size(){return this.innerSize}}
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
     */class Ec{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Tc.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ec(uo.min(),n,bc(),hc(),vc())}}class Tc{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Tc(xo.EMPTY_BYTE_STRING,e,vc(),vc(),vc())}}
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
     */class Ic{constructor(t,e,n,i){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=i}}class Sc{constructor(t,e){this.targetId=t,this.It=e}}class Cc{constructor(t,e,n=xo.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ac{constructor(){this.Tt=0,this.Et=_c(),this.At=xo.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=vc(),e=vc(),n=vc();return this.Et.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Kr()}})),new Tc(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=_c()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Dc{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=hc(),this.Bt=kc(),this.Lt=new ko(oo)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Kr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,i=this.Ht(e);if(i){const t=i.target;if(ua(t))if(0===n){const n=new go(t.path);this.Kt(e,n,sa.newNoDocument(n,uo.min()))}else zr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,i)=>{const s=this.Ht(i);if(s){if(n.current&&ua(s.target)){const e=new go(s.target.path);null!==this.$t.get(e)||this.Xt(i,e)||this.Kt(i,e,sa.newNoDocument(e,t))}n.vt&&(e.set(i,n.St()),n.Dt())}}));let n=vc();this.Bt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const i=new Ec(t,e,this.Lt,this.$t,n);return this.$t=hc(),this.Bt=kc(),this.Lt=new ko(oo),i}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,e)?i.Ct(e,1):i.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Ac,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new ko(oo),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||$r("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Ac),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function kc(){return new Co(go.comparator)}function _c(){return new Co(go.comparator)}
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
     */const Nc={asc:"ASCENDING",desc:"DESCENDING"},xc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Oc{constructor(t,e){this.databaseId=t,this.dt=e}}function Lc(t){return zr(!!t),uo.fromTimestamp(function(t){const e=Lo(t);return new co(e.seconds,e.nanos)}(t))}function Rc(t){const e=lo.fromString(t);return zr(Wc(e)),e}function Mc(t,e){const n=Rc(e);if(n.get(1)!==t.databaseId.projectId)throw new Qr(Gr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Qr(Gr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new go(Vc(n))}function Pc(t,e){return function(t,e){return function(t){return new lo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function Fc(t){return new lo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vc(t){return zr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Uc(t,e){return{documents:[Pc(t,e.path)]}}function $c(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Pc(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pc(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(ta(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NAN"}};if(Zo(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ta(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NOT_NAN"}};if(Zo(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zc(t.field),op:Kc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:zc(t.field),direction:qc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.dt||Bo(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Bc(t){let e=function(t){const e=Rc(t);return 4===e.length?lo.emptyPath():Vc(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){zr(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=jc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ba(Hc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Bo(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new wa(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new wa(n,e)}(n.endAt)),function(t,e,n,i,s,r,o,a){return new Sa(t,e,n,i,s,r,o,a)}(e,s,o,r,a,"F",c,u)}function jc(t){return t?void 0!==t.unaryFilter?[Qc(t)]:void 0!==t.fieldFilter?[Gc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>jc(t))).reduce(((t,e)=>t.concat(e))):Kr():[]}function qc(t){return Nc[t]}function Kc(t){return xc[t]}function zc(t){return{fieldPath:t.canonicalString()}}function Hc(t){return po.fromServerFormat(t.fieldPath)}function Gc(t){return ha.create(Hc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Kr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Qc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hc(t.unaryFilter.field);return ha.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hc(t.unaryFilter.field);return ha.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hc(t.unaryFilter.field);return ha.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Hc(t.unaryFilter.field);return ha.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Kr()}}function Wc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */class Xc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Wa(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=gc();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Qa(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(uo.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vc())}isEqual(t){return this.batchId===t.batchId&&ao(this.mutations,t.mutations,((t,e)=>Ya(t,e)))&&ao(this.baseMutations,t.baseMutations,((t,e)=>Ya(t,e)))}}
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
     */class Jc{constructor(t,e,n,i,s=uo.min(),r=uo.min(),o=xo.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Jc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class eu{constructor(){this.ze=new nu}addToCollectionParentIndex(t,e){return this.ze.add(e),bo.resolve()}getCollectionParents(t,e){return bo.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return bo.resolve()}deleteFieldIndex(t,e){return bo.resolve()}getDocumentsMatchingTarget(t,e){return bo.resolve(null)}getIndexType(t,e){return bo.resolve(0)}getFieldIndexes(t,e){return bo.resolve([])}getNextCollectionGroupToUpdate(t){return bo.resolve(null)}getMinOffset(t,e){return bo.resolve(yo.min())}getMinOffsetFromCollectionGroup(t,e){return bo.resolve(yo.min())}updateCollectionGroup(t,e,n){return bo.resolve()}updateIndexEntries(t,e){return bo.resolve()}}class nu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ko(lo.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ko(lo.comparator)).toArray()}}
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
     */class iu{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new iu(0)}static Rn(){return new iu(-1)}}
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
class su{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class ru{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Xa(n.mutation,t,No.empty(),co.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,vc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=vc()){const i=pc();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=dc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=pc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,vc())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=hc();const r=mc(),o=mc();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Za)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Xa(o.mutation,e,o.mutation.getFieldMask(),co.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new su(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=mc();let i=new Co(((t,e)=>t-e)),s=vc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||No.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||vc()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=gc();c.forEach((t=>{if(!s.has(t)){const i=Qa(e.get(t),n.get(t));null!==i&&u.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return bo.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return go.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):bo.resolve(pc());let o=-1,a=s;return r.next((e=>bo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?bo.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,vc()))).next((t=>({batchId:o,changes:fc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new go(e)).next((t=>{let e=dc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=dc();return this.indexManager.getCollectionParents(t,i).next((r=>bo.forEach(r,(r=>{const o=function(t,e){return new Sa(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,sa.newInvalidDocument(n)))}));let n=dc();return i.forEach(((i,s)=>{const r=t.get(i);void 0!==r&&Xa(r.mutation,s,No.empty(),co.now()),xa(e,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):bo.resolve(sa.newInvalidDocument(e))}}
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
     */class ou{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return bo.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Lc(n.createTime)}),bo.resolve()}getNamedQuery(t,e){return bo.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:tu(t.bundledQuery),readTime:Lc(t.readTime)}}(e)),bo.resolve()}}
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
     */class au{constructor(){this.overlays=new Co(go.comparator),this.Xn=new Map}getOverlay(t,e){return bo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=pc();return bo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),bo.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),bo.resolve()}getOverlaysForCollection(t,e,n){const i=pc(),s=e.length+1,r=new go(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return bo.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new Co(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=pc(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=pc(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return bo.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Yc(e,n));let s=this.Xn.get(e);void 0===s&&(s=vc(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
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
     */class cu{constructor(){this.Zn=new ko(uu.ts),this.es=new ko(uu.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new uu(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new uu(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new go(new lo([])),n=new uu(e,t),i=new uu(e,t+1),s=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new go(new lo([])),n=new uu(e,t),i=new uu(e,t+1);let s=vc();return this.es.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new uu(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class uu{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return go.comparator(t.key,e.key)||oo(t.ls,e.ls)}static ns(t,e){return oo(t.ls,e.ls)||go.comparator(t.key,e.key)}}
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
     */class hu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new ko(uu.ts)}checkEmpty(t){return bo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Xc(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.ds=this.ds.add(new uu(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return bo.resolve(r)}lookupMutationBatch(t,e){return bo.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),s=i<0?0:i;return bo.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return bo.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return bo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new uu(e,0),i=new uu(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);s.push(e)})),bo.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ko(oo);return e.forEach((t=>{const e=new uu(t,0),i=new uu(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),bo.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;go.isDocumentKey(s)||(s=s.child(""));const r=new uu(new go(s),0);let o=new ko(oo);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),r),bo.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){zr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return bo.forEach(e.mutations,(i=>{const s=new uu(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new uu(e,0),i=this.ds.firstAfterOrEqual(n);return bo.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,bo.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class lu{constructor(t){this.ps=t,this.docs=new Co(go.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return bo.resolve(n?n.document.mutableCopy():sa.newInvalidDocument(e))}getEntries(t,e){let n=hc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sa.newInvalidDocument(t))})),bo.resolve(n)}getAllFromCollection(t,e,n){let i=hc();const s=new go(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||vo(mo(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return bo.resolve(i)}getAllFromCollectionGroup(t,e,n,i){Kr()}Is(t,e){return bo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new du(this)}getSize(t){return bo.resolve(this.size)}}class du extends class{constructor(){this.changes=new cc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sa.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?bo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),bo.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
     */class fu{constructor(t){this.persistence=t,this.Ts=new cc((t=>aa(t)),ca),this.lastRemoteSnapshotVersion=uo.min(),this.highestTargetId=0,this.Es=0,this.As=new cu,this.targetCount=0,this.Rs=iu.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),bo.resolve()}getLastRemoteSnapshotVersion(t){return bo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return bo.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),bo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),bo.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new iu(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,bo.resolve()}updateTargetData(t,e){return this.vn(e),bo.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,bo.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),bo.waitFor(s).next((()=>i))}getTargetCount(t){return bo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return bo.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),bo.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),bo.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),bo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return bo.resolve(n)}containsKey(t,e){return bo.resolve(this.As.containsKey(e))}}
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
     */class pu{constructor(t,e){this.bs={},this.overlays={},this.Ps=new To(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new fu(this),this.indexManager=new eu,this.remoteDocumentCache=function(t){return new lu(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Zc(e),this.Ds=new ou(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new au,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new hu(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){$r("MemoryPersistence","Starting transaction:",t);const i=new gu(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return bo.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class gu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class mu{constructor(t){this.persistence=t,this.ks=new cu,this.Os=null}static Ms(t){return new mu(t)}get Fs(){if(this.Os)return this.Os;throw Kr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),bo.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),bo.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),bo.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return bo.forEach(this.Fs,(n=>{const i=go.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,uo.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return bo.or([()=>bo.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
     */class yu{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}static Vi(t,e){let n=vc(),i=vc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new yu(t,e.fromCache,n,i)}}
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
     */class vu{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((s=>s||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return bo.resolve(null)}xi(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(uo.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const r=this.ki(e,s);return this.Oi(e,r,n,i)?this.Ni(t,e):(Ur()<=w.DEBUG&&$r("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Na(e)),this.Mi(t,r,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=uo.fromTimestamp(1e9===i?new co(n+1,0):new co(n,i));return new yo(s,go.empty(),e)}(i,-1)))}))}ki(t,e){let n=new ko(Oa(t));return e.forEach(((e,i)=>{xa(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(t,e){return Ur()<=w.DEBUG&&$r("QueryEngine","Using full collection scan to execute query:",Na(e)),this.Di.getDocumentsMatchingQuery(t,e,yo.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class wu{constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new Co(oo),this.Bi=new cc((t=>aa(t)),ca),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ru(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}async function bu(t,e){const n=Hr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=vc();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Eu(t){const e=Hr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Tu(t,e){const n=Hr(t),i=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(xo.EMPTY_BYTE_STRING,uo.min()).withLastLimboFreeSnapshotVersion(uo.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Vs.updateTargetData(t,u))}));let a=hc(),c=vc();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,e,n){let i=vc(),s=vc();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=hc();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(uo.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):$r("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Gi:i,Qi:s}}))}(t,r,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!i.isEqual(uo.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return bo.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}async function Iu(t,e,n){const i=Hr(t),s=i.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Eo(t))throw t;$r("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.$i=i.$i.remove(e),i.Bi.delete(s.target)}function Su(t,e,n){const i=Hr(t);let s=uo.min(),r=vc();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Hr(t),s=i.Bi.get(n);return void 0!==s?bo.resolve(i.$i.get(s)):i.Vs.getTargetData(e,n)}(i,t,Da(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Fi.getDocumentsMatchingQuery(t,e,n?s:uo.min(),n?r:vc()))).next((t=>(function(t,e,n){let i=uo.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Li.set(e,i)}(i,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ji:r})))))}class Cu{constructor(){this.activeTargetIds=bc()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Au{constructor(){this.Fr=new Cu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Cu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class ku{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$r("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){$r("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */class xu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,i,s){const r=this.oo(t,e);$r("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.co(t,r,o,n).then((t=>($r("RestConnection","Received: ",t),t)),(e=>{throw jr("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,i,s,r){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Fr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=_u[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,i){return new Promise(((s,r)=>{const o=new Rr;o.listenOnce(kr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dr.NO_ERROR:const e=o.getResponseJson();$r("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Dr.TIMEOUT:$r("Connection",'RPC "'+t+'" timed out'),r(new Qr(Gr.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const n=o.getStatus();if($r("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Gr).indexOf(e)>=0?e:Gr.UNKNOWN}(t.status);r(new Qr(e,t.message))}else r(new Qr(Gr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Qr(Gr.UNAVAILABLE,"Connection failed."));break;default:Kr()}}finally{$r("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=new Tr,a=mi(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Or({})),this.uo(c.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(s())||"object"==typeof navigator&&"ReactNative"===navigator.product||s().indexOf("Electron/")>=0||function(){const t=s();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||s().indexOf("MSAppHost/")>=0||r()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");$r("Connection","Creating WebChannel: "+u,c);const h=o.createWebChannel(u,c);let l=!1,d=!1;const f=new Nu({jr:t=>{d?$r("Connection","Not sending because WebChannel is closed:",t):(l||($r("Connection","Opening WebChannel transport."),h.open(),l=!0),$r("Connection","WebChannel sending:",t),h.send(t))},Wr:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,Lr.EventType.OPEN,(()=>{d||$r("Connection","WebChannel transport opened.")})),p(h,Lr.EventType.CLOSE,(()=>{d||(d=!0,$r("Connection","WebChannel transport closed"),f.eo())})),p(h,Lr.EventType.ERROR,(t=>{d||(d=!0,jr("Connection","WebChannel transport errored:",t),f.eo(new Qr(Gr.UNAVAILABLE,"The operation could not be completed")))})),p(h,Lr.EventType.MESSAGE,(t=>{var e;if(!d){const n=t.data[0];zr(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){$r("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=rc[t];if(void 0!==e)return ac(e)}(t),n=s.message;void 0===e&&(e=Gr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),d=!0,f.eo(new Qr(e,n)),h.close()}else $r("Connection","WebChannel received:",n),f.no(n)}})),p(a,_r.STAT_EVENT,(t=>{t.stat===Nr?$r("Connection","Detected buffering proxy"):t.stat===xr&&$r("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}}function Ou(){return"undefined"!=typeof document?document:null}
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
     */function Lu(t){return new Oc(t,!0)}class Ru{constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&$r("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
     */class Mu extends class{constructor(t,e,n,i,s,r,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ru(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Gr.RESOURCE_EXHAUSTED?(Br(e.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Gr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Qr(Gr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return $r("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():($r("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Kr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.dt?(zr(void 0===e||"string"==typeof e),xo.fromBase64String(e||"")):(zr(void 0===e||e instanceof Uint8Array),xo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Gr.UNKNOWN:ac(t.code);return new Qr(e,t.message||"")}(o);n=new Cc(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Mc(t,i.document.name),r=Lc(i.document.updateTime),o=new ia({mapValue:{fields:i.document.fields}}),a=sa.newFoundDocument(s,r,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Ic(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Mc(t,i.document),r=i.readTime?Lc(i.readTime):uo.min(),o=sa.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Mc(t,i.document),r=i.removedTargetIds||[];n=new Ic([],r,s,null)}else{if(!("filter"in e))return Kr();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new sc(i),r=t.targetId;n=new Sc(r,s)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return uo.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?uo.min():e.readTime?Lc(e.readTime):uo.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Fc(this.wt),e.addTarget=function(t,e){let n;const i=e.target;return n=ua(i)?{documents:Uc(t,i)}:{query:$c(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.dt?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(uo.min())>0&&(n.readTime=function(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Kr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Fc(this.wt),e.removeTarget=t,this.Mo(e)}}
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
     */class Pu extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new Qr(Gr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Gr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Gr.UNKNOWN,t.toString())}))}ao(t,e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.bo.ao(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Gr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Gr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Fu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Br(e),this.su=!1):$r("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
     */class Vu{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Gu(this)&&($r("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Hr(t);e.lu.add(4),await $u(e),e._u.set("Unknown"),e.lu.delete(4),await Uu(e)}(this))}))})),this._u=new Fu(n,i)}}async function Uu(t){if(Gu(t))for(const e of t.fu)await e(!0)}async function $u(t){for(const e of t.fu)await e(!1)}function Bu(t,e){const n=Hr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Hu(n)?zu(n):th(n).Co()&&qu(n,e))}function ju(t,e){const n=Hr(t),i=th(n);n.hu.delete(e),i.Co()&&Ku(n,e),0===n.hu.size&&(i.Co()?i.ko():Gu(n)&&n._u.set("Unknown"))}function qu(t,e){t.wu.Nt(e.targetId),th(t).Qo(e)}function Ku(t,e){t.wu.Nt(e),th(t).jo(e)}function zu(t){t.wu=new Dc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),th(t).start(),t._u.iu()}function Hu(t){return Gu(t)&&!th(t).Do()&&t.hu.size>0}function Gu(t){return 0===Hr(t).lu.size}function Qu(t){t.wu=void 0}async function Wu(t){t.hu.forEach(((e,n)=>{qu(t,e)}))}async function Xu(t,e){Qu(t),Hu(t)?(t._u.uu(e),zu(t)):t._u.set("Unknown")}async function Yu(t,e,n){if(t._u.set("Online"),e instanceof Cc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.hu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.hu.delete(i),t.wu.removeTarget(i))}(t,e)}catch(n){$r("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ju(t,n)}else if(e instanceof Ic?t.wu.Ut(e):e instanceof Sc?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(uo.min()))try{const e=await Eu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(i);s&&t.hu.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(xo.EMPTY_BYTE_STRING,n.snapshotVersion)),Ku(t,e);const i=new Jc(n.target,e,1,n.sequenceNumber);qu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){$r("RemoteStore","Failed to raise snapshot:",e),await Ju(t,e)}}async function Ju(t,e,n){if(!Eo(e))throw e;t.lu.add(1),await $u(t),t._u.set("Offline"),n||(n=()=>Eu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{$r("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Uu(t)}))}async function Zu(t,e){const n=Hr(t);n.asyncQueue.verifyOperationInProgress(),$r("RemoteStore","RemoteStore received new credentials");const i=Gu(n);n.lu.add(3),await $u(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Uu(n)}function th(t){return t.mu||(t.mu=function(t,e,n){const i=Hr(t);return i.tu(),new Mu(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)
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
     */}(t.datastore,t.asyncQueue,{zr:Wu.bind(null,t),Jr:Xu.bind(null,t),Go:Yu.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Hu(t)?zu(t):t._u.set("Unknown")):(await t.mu.stop(),Qu(t))}))),t.mu
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
     */}class eh{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new eh(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qr(Gr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nh(t,e){if(Br("AsyncQueue",`${e}: ${t}`),Eo(t))return new Qr(Gr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class ih{constructor(t){this.comparator=t?(e,n)=>t(e,n)||go.comparator(e.key,n.key):(t,e)=>go.comparator(t.key,e.key),this.keyedMap=dc(),this.sortedSet=new Co(this.comparator)}static emptySet(t){return new ih(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ih))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ih;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class sh{constructor(){this.yu=new Co(go.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Kr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class rh{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new rh(t,e,ih.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ka(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class oh{constructor(){this.Iu=void 0,this.listeners=[]}}class ah{constructor(){this.queries=new cc((t=>_a(t)),ka),this.onlineState="Unknown",this.Tu=new Set}}function ch(t,e){const n=Hr(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Au(t)&&(i=!0);s.Iu=t}}i&&hh(n)}function uh(t,e,n){const i=Hr(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function hh(t){t.Tu.forEach((t=>{t.next()}))}class lh{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new rh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=rh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
     */class dh{constructor(t){this.key=t}}class fh{constructor(t){this.key=t}}class ph{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=vc(),this.mutatedKeys=vc(),this.Lu=Oa(t),this.Uu=new ih(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new sh,i=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const u=i.get(t),h=xa(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:r,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Kr()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new rh(this.query,t.Uu,i,s,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new sh,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=vc(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new fh(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new dh(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=vc();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return rh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class gh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class mh{constructor(t){this.key=t,this.Xu=!1}}class yh{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new cc((t=>_a(t)),ka),this.ec=new Map,this.nc=new Set,this.sc=new Co(go.comparator),this.ic=new Map,this.rc=new cu,this.oc={},this.uc=new Map,this.cc=iu.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function vh(t,e){const n=function(t){const e=Hr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Th.bind(null,e),e.Zu.Go=ch.bind(null,e.eventManager),e.Zu.lc=uh.bind(null,e.eventManager),e}(t);let i,s;const r=n.tc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Yu();else{const t=await function(t,e){const n=Hr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Vs.getTargetData(t,e).next((s=>s?(i=s,bo.resolve(i)):n.Vs.allocateTargetId(t).next((s=>(i=new Jc(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.$i.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}(n.localStore,Da(e));n.isPrimaryClient&&Bu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await async function(t,e,n,i){t.hc=(e,n,i)=>async function(t,e,n,i){let s=e.view.Ku(n);s.Oi&&(s=await Su(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Ch(t,e.targetId,o.zu),o.snapshot}(t,e,n,i);const s=await Su(t.localStore,e,!0),r=new ph(e,s.ji),o=r.Ku(s.documents),a=Tc.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);Ch(t,n,c.zu);const u=new gh(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}(n,e,i,"current"===r)}return s}async function wh(t,e){const n=Hr(t),i=n.tc.get(e),s=n.ec.get(i.targetId);if(s.length>1)return n.ec.set(i.targetId,s.filter((t=>!ka(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Iu(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),ju(n.remoteStore,i.targetId),Ih(n,i.targetId)})).catch(wo)):(Ih(n,i.targetId),await Iu(n.localStore,i.targetId,!0))}async function bh(t,e){const n=Hr(t);try{const t=await Tu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ic.get(e);i&&(zr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Xu=!0:t.modifiedDocuments.size>0?zr(i.Xu):t.removedDocuments.size>0&&(zr(i.Xu),i.Xu=!1))})),await kh(n,t,e)}catch(t){await wo(t)}}function Eh(t,e,n){const i=Hr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Hr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0)})),i&&hh(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Th(t,e,n){const i=Hr(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ic.get(e),r=s&&s.key;if(r){let t=new Co(go.comparator);t=t.insert(r,sa.newNoDocument(r,uo.min()));const n=vc().add(r),s=new Ec(uo.min(),new Map,new ko(oo),t,n);await bh(i,s),i.sc=i.sc.remove(r),i.ic.delete(e),Dh(i)}else await Iu(i.localStore,e,!1).then((()=>Ih(i,e,n))).catch(wo)}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),n&&t.Zu.lc(i,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Sh(t,e)}))}function Sh(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(ju(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Dh(t))}function Ch(t,e,n){for(const i of n)i instanceof dh?(t.rc.addReference(i.key,e),Ah(t,i)):i instanceof fh?($r("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||Sh(t,i.key)):Kr()}function Ah(t,e){const n=e.key,i=n.path.canonicalString();t.sc.get(n)||t.nc.has(i)||($r("SyncEngine","New document in limbo: "+n),t.nc.add(i),Dh(t))}function Dh(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new go(lo.fromString(e)),i=t.cc.next();t.ic.set(i,new mh(n)),t.sc=t.sc.insert(n,i),Bu(t.remoteStore,new Jc(Da(Ca(n.path)),i,2,To.ot))}}async function kh(t,e,n){const i=Hr(t),s=[],r=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=yu.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Zu.Go(s),await async function(t,e){const n=Hr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>bo.forEach(e,(e=>bo.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>bo.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Eo(t))throw t;$r("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(e,s)}}}(i.localStore,r))}async function _h(t,e){const n=Hr(t);if(!n.currentUser.isEqual(e)){$r("SyncEngine","User change. New user:",e.toKey());const t=await bu(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Qr(Gr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await kh(n,t.Ki)}}function Nh(t,e){const n=Hr(t),i=n.ic.get(e);if(i&&i.Xu)return vc().add(i.key);{let t=vc();const i=n.ec.get(e);if(!i)return t;for(const e of i){const i=n.tc.get(e);t=t.unionWith(i.view.qu)}return t}}class xh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Lu(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return function(t,e,n,i){return new wu(t,e,n,i)}(this.persistence,new vu,t.initialUser,this.wt)}_c(t){return new pu(mu.Ms,this.wt)}dc(t){return new Au}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Eh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=_h.bind(null,this.syncEngine),await async function(t,e){const n=Hr(t);e?(n.lu.delete(2),await Uu(n)):e||(n.lu.add(2),await $u(n),n._u.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ah}createDatastore(t){const e=Lu(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new xu(i));var i;return function(t,e,n,i){return new Pu(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Eh(this.syncEngine,t,0),r=ku.V()?new ku:new Du,new Vu(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new yh(t,e,n,i,s,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Hr(t);$r("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await $u(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
     */class Lh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class Rh{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Pr.UNAUTHENTICATED,this.clientId=ro.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{$r("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>($r("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qr(Gr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=nh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Mh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||($r("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),$r("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await bu(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new xh)),t.offlineComponents}(t);$r("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Zu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Zu(e.remoteStore,n))),t.onlineComponents=e}async function Ph(t){const e=await async function(t){return t.onlineComponents||($r("FirestoreClient","Using default OnlineComponentProvider"),await Mh(t,new Oh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=vh.bind(null,e.syncEngine),n.onUnlisten=wh.bind(null,e.syncEngine),n}function Fh(t,e,n={}){const i=new Wr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Lh({next:r=>{e.enqueueAndForget((()=>async function(t,e){const n=Hr(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Qr(Gr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Qr(Gr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new lh(Ca(n.path),r,{includeMetadataChanges:!0,Du:!0});return async function(t,e){const n=Hr(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new oh),s)try{r.Iu=await n.onListen(i)}catch(t){const n=nh(t,`Initialization of query '${Na(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&hh(n)}(t,o)}(await Ph(t),t.asyncQueue,e,n,i))),i.promise}const Vh=new Map;
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
     */function Uh(t,e,n){if(!n)throw new Qr(Gr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $h(t){if(!go.isDocumentKey(t))throw new Qr(Gr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qr(Gr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Kr()}(t);throw new Qr(Gr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class jh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Qr(Gr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qr(Gr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Qr(Gr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class qh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jh({}),this._settingsFrozen=!1,t instanceof $o?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qr(Gr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(t.options.projectId)}(t))}get app(){if(!this._app)throw new Qr(Gr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qr(Gr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Yr;switch(t.type){case"gapi":const e=t.client;return zr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new eo(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Qr(Gr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Vh.get(t);e&&($r("ComponentProvider","Removing Datastore"),Vh.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Kh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Kh(this.firestore,t,this._key)}}class zh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zh(this.firestore,t,this._query)}}class Hh extends zh{constructor(t,e,n){super(t,e,Ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Kh(this.firestore,null,new go(t))}withConverter(t){return new Hh(this.firestore,t,this._path)}}
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
class Gh{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ru(this,"async_queue_retry"),this.Kc=()=>{const t=Ou();t&&$r("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Ou();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Ou();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Wr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Eo(t))throw t;$r("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Br("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=eh.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&Kr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Qh extends qh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Gh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Wh(this),this._firestoreClient.terminate()}}function Wh(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Uo(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Rh(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
     */class Xh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qr(Gr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new po(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Yh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yh(xo.fromBase64String(t))}catch(t){throw new Qr(Gr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Yh(xo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Jh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qr(Gr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qr(Gr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return oo(this._lat,t._lat)||oo(this._long,t._long)}}const Zh=new RegExp("[~\\*/\\[\\]]");function tl(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Qr(Gr.INVALID_ARGUMENT,a+t+c)
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
     */}class el{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(il("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nl extends el{data(){return super.data()}}function il(t,e){return"string"==typeof e?function(t,e,n){if(e.search(Zh)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xh(...e.split("."))._internalPath}catch(i){throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Xh?e._internalPath:e._delegate._internalPath}
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
     */class sl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rl extends el{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(il("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ol extends rl{data(t={}){return super.data(t)}}
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
function al(t){t=Bh(t,Kh);const e=Bh(t.firestore,Qh);return Fh(function(t){return t._firestoreClient||Wh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),t._key).then((n=>function(t,e,n){const i=n.docs.get(e._key),s=new cl(t);return new rl(t,s,e._key,i,new sl(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class cl extends class{convertValue(t,e="none"){switch(Ko(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ro(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Kr()}}convertObject(t,e){const n={};return So(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Jh(Ro(t.latitude),Ro(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Fo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vo(t));default:return null}}convertTimestamp(t){const e=Lo(t);return new co(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=lo.fromString(t);zr(Wc(n));const i=new $o(n.get(1),n.get(3)),s=new go(n.popFirst(5));return i.isEqual(e)||Br(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Kh(this.firestore,null,e)}}!function(t,e=!0){Fr="9.9.0",Y(new g("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Qh(i,new Zr(t.getProvider("auth-internal")),new io(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),nt(Mr,"3.4.12",t),nt(Mr,"3.4.12","esm2017")}();function ul(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function hl(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t))return t;if(!0===t||!1===t)return t;if("[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map((t=>hl(t)));if("function"==typeof t||"object"==typeof t)return ul(t,(t=>hl(t)));throw new Error("Data cannot be encoded in JSON: "+t)}function ll(t){if(null==t)return t;if(t["@type"])switch(t["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map((t=>ll(t))):"function"==typeof t||"object"==typeof t?ul(t,(t=>ll(t))):t}
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
     */const dl="functions",fl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
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
     */class pl extends c{constructor(t,e,n){super(`functions/${t}`,e||""),this.details=n}}
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
class gl{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||e.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||n.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}
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
     */const ml="us-central1";class yl{constructor(t,e,n,i,s="us-central1",r){this.app=t,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new gl(e,n,i),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(s);this.customDomain=t.origin,this.region=ml}catch(t){this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function vl(t,e,n){return i=>function(t,e,n,i){const s=t._url(e);return async function(t,e,n,i){const s={data:n=hl(n)},r={},o=await t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken);o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken);null!==o.appCheckToken&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=function(t){let e=null;return{promise:new Promise(((n,i)=>{e=setTimeout((()=>{i(new pl("deadline-exceeded","deadline-exceeded"))}),t)})),cancel:()=>{e&&clearTimeout(e)}}}(i.timeout||7e4),c=await Promise.race([wl(e,s,r,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new pl("cancelled","Firebase Functions instance was deleted.");const u=function(t,e){let n,i=function(t){if(t>=200&&t<300)return"ok";switch(t){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(t),s=i;try{const t=e&&e.error;if(t){const e=t.status;if("string"==typeof e){if(!fl[e])return new pl("internal","internal");i=fl[e],s=e}const r=t.message;"string"==typeof r&&(s=r),n=t.details,void 0!==n&&(n=ll(n))}}catch(t){}return"ok"===i?null:new pl(i,s,n)}(c.status,c.json);if(u)throw u;if(!c.json)throw new pl("internal","Response is not valid JSON object.");let h=c.json.data;void 0===h&&(h=c.json.result);if(void 0===h)throw new pl("internal","Response is missing data field.");return{data:ll(h)}}(t,s,n,i)}(t,e,i,n||{})}async function wl(t,e,n,i){let s;n["Content-Type"]="application/json";try{s=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch(t){return{status:0,json:null}}let r=null;try{r=await s.json()}catch(t){}return{status:s.status,json:r}}const bl="@firebase/functions",El="0.8.4";!function(t,e){Y(new g(dl,((e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("messaging-internal"),o=e.getProvider("app-check-internal");return new yl(i,s,r,o,n,t)}),"PUBLIC").setMultipleInstances(!0)),nt(bl,El,e),nt(bl,El,"esm2017")}
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
     */(fetch.bind(self));const Tl=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:H,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw Z.create("bad-app-name",{appName:String(i)});const s=Q.get(i);if(s){if(l(t,s.options)&&l(n,s.config))return s;throw Z.create("duplicate-app",{appName:i})}const r=new v(i);for(const t of W.values())r.addComponent(t);const o=new tt(t,n,r);return Q.set(i,o),o}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(t=et()){const e=J(t=p(t),te);e.isInitialized()?e.getImmediate():function(t,e={}){const n=J(t,te);if(n.isInitialized()){const t=n.getImmediate();if(l(e,n.getOptions()))return t;throw re.create("already-initialized")}n.initialize({options:e})}(t)}(Tl);const Il=function(t=et()){return J(t,"firestore").getImmediate()}(Tl),Sl=function(t=et(),e="us-central1"){return J(p(t),dl).getImmediate({identifier:e})}(Tl,"europe-west2");var Cl,Al;function Dl(){}function kl(t){return t()}function _l(){return Object.create(null)}function Nl(t){t.forEach(kl)}function xl(t){return"function"==typeof t}function Ol(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function Ll(t,e){t.appendChild(e)}function Rl(t,e,n){t.insertBefore(e,n||null)}function Ml(t){t.parentNode.removeChild(t)}function Pl(t){return document.createElement(t)}function Fl(t){return document.createTextNode(t)}function Vl(){return Fl(" ")}function Ul(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bl(t,e){t.value=null==e?"":e}function jl(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e)return void(i.selected=!0)}t.selectedIndex=-1}let ql;function Kl(t){ql=t}function zl(){if(!ql)throw new Error("Function called outside component initialization");return ql}(location.href.includes("localhost")||location.href.includes("127.0.0.1"))&&(function(t,e,i,s={}){var r;const o=(t=Bh(t,qh))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&jr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${i}`,ssl:!1})),s.mockUserToken){let e,i;if("string"==typeof s.mockUserToken)e=s.mockUserToken,i=Pr.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[n(JSON.stringify({alg:"none",type:"JWT"})),n(JSON.stringify(o)),""].join(".")}(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new Qr(Gr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new Pr(o)}t._authCredentials=new Jr(new Xr(e,i))}}(Il,"localhost",8080),Cl="localhost",Al=5001,function(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}(p(Sl),Cl,Al));const Hl=[],Gl=[],Ql=[],Wl=[],Xl=Promise.resolve();let Yl=!1;function Jl(t){Ql.push(t)}const Zl=new Set;let td=0;function ed(){const t=ql;do{for(;td<Hl.length;){const t=Hl[td];td++,Kl(t),nd(t.$$)}for(Kl(null),Hl.length=0,td=0;Gl.length;)Gl.pop()();for(let t=0;t<Ql.length;t+=1){const e=Ql[t];Zl.has(e)||(Zl.add(e),e())}Ql.length=0}while(Hl.length);for(;Wl.length;)Wl.pop()();Yl=!1,Zl.clear(),Kl(t)}function nd(t){if(null!==t.fragment){t.update(),Nl(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Jl)}}const id=new Set;let sd;function rd(){sd={r:0,c:[],p:sd}}function od(){sd.r||Nl(sd.c),sd=sd.p}function ad(t,e){t&&t.i&&(id.delete(t),t.i(e))}function cd(t,e,n,i){if(t&&t.o){if(id.has(t))return;id.add(t),sd.c.push((()=>{id.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}function ud(t,e){const n=e.token={};function i(t,i,s,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==s&&(o=o.slice(),o[s]=r);const a=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==i&&t&&(rd(),cd(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),od())})):e.block.d(1),a.c(),ad(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[i]=a),c&&ed()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=zl();if(t.then((t=>{Kl(n),i(e.then,1,e.value,t),Kl(null)}),(t=>{if(Kl(n),i(e.catch,2,e.error,t),Kl(null),!e.hasCatch)throw t})),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}var s}function hd(t){t&&t.c()}function ld(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||Jl((()=>{const e=r.map(kl).filter(xl);o?o.push(...e):Nl(e),t.$$.on_mount=[]})),a.forEach(Jl)}function dd(t,e){const n=t.$$;null!==n.fragment&&(Nl(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function fd(t,e){-1===t.$$.dirty[0]&&(Hl.push(t),Yl||(Yl=!0,Xl.then(ed)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pd(t,e,n,i,s,r,o,a=[-1]){const c=ql;Kl(t);const u=t.$$={fragment:null,ctx:null,props:r,update:Dl,not_equal:s,bound:_l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:_l(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return u.ctx&&s(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),h&&fd(t,e)),n})):[],u.update(),h=!0,Nl(u.before_update),u.fragment=!!i&&i(u.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);u.fragment&&u.fragment.l(t),t.forEach(Ml)}else u.fragment&&u.fragment.c();e.intro&&ad(t.$$.fragment),ld(t,e.target,e.anchor,e.customElement),ed()}Kl(c)}class gd{$destroy(){dd(this,1),this.$destroy=Dl}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const md=t=>{const e=parseInt(t);if(!isNaN(e))return e;const n=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(t);return-1===n?n+1:NaN},yd=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()],vd=(t,e,n)=>new Date(n,e-1,t),wd=(t,e="/",n=!1)=>{const[i,s,r]=yd(t).map((t=>`${t}`)),o=[i.padStart(2,"0"),s.padStart(2,"0"),r];return(n?o.reverse():o).join(e)},bd=t=>{const e=`${t}`;return e.length<=2?bd("20"+e.padStart(2,"0")):3===e.length?NaN:parseInt(e)},Ed=t=>(t=>{const e=["/","-","."];for(const n of e){const[e,i,s]=t.split(n).map(md),r=vd(null!=e?e:NaN,null!=i?i:NaN,bd(null!=s?s:NaN));if(![e,i,s].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}for(const n of e){const[e,i,s]=t.split(n).map(md),r=vd(null!=s?s:NaN,null!=i?i:NaN,bd(null!=e?e:NaN));if(![s,i,e].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}const n=new Date(t);if("Invalid Date"!=`${n}`)return n})(wd(t)),Td=()=>Ed(new Date),Id={},Sd=new Set,Cd=vd(1,9,2021);async function Ad(t,e,n){try{return console.count("DB reads"),console.count(n),(await al(function(t,e,...n){if(t=p(t),1===arguments.length&&(e=ro.I()),Uh("doc","path",e),t instanceof qh){const i=lo.fromString(e,...n);return $h(i),new Kh(t,null,new go(i))}{if(!(t instanceof Kh||t instanceof Hh))throw new Qr(Gr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(lo.fromString(e,...n));return $h(i),new Kh(t.firestore,t instanceof Hh?t.converter:null,new go(i))}}(t,e,n))).data()}catch(t){console.warn("Your DB emulations are likely not running correctly"),console.error(t)}}const Dd=(t,e)=>{const n=vd(1,e,t),i=Td(),s=yd(i)[2];return Cd<=n&&t<=s},kd=async(t,e,n)=>{var i;if(!Dd(t,e))return null;const s=((t,e)=>`${t}-${`${e}`.padStart(2,"0")}`)(t,e);if(Sd.has(s))return await(r=1,new Promise((t=>setTimeout(t,1e3*r)))),_d(t,e);var r;Sd.add(s);const o=null!==(i=await Ad(n,"memes",s))&&void 0!==i?i:{};return((t,e,n)=>{Id[t]||(Id[t]={}),Id[t][e]=n})(t,e,o),Sd.delete(s),o},_d=(t,e)=>{try{return Id[t][e]}catch(t){console.count("Cache errors")}},Nd=async(t,e,n=0)=>{if(!t)return null;if(n>=12)throw new Error("DB recursion");const[i,s,r]=yd(t);if(!Dd(r,s))return null;try{return Id[r][s][i]}catch(t){console.count("Cache errors")}return await((t,e,n)=>{var i;return null!==(i=_d(t,e))&&void 0!==i?i:kd(t,e,n)})(r,s,e),Nd(t,e,n+1)};async function xd(t,e){return function(t,e,n){return vl(p(t),e,n)}(Sl,t)(e)}function Od(t){let e;return{c(){e=Pl("header"),e.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',$l(e,"class","my-8 flex")},m(t,n){Rl(t,e,n)},p:Dl,i:Dl,o:Dl,d(t){t&&Ml(e)}}}class Ld extends gd{constructor(t){super(),pd(this,t,null,Od,Ol,{})}}function Rd(t){let e;return{c(){e=Pl("p"),e.textContent="It's loading, bro..."},m(t,n){Rl(t,e,n)},p:Dl,i:Dl,o:Dl,d(t){t&&Ml(e)}}}class Md extends gd{constructor(t){super(),pd(this,t,null,Rd,Ol,{})}}function Pd(t,e,n){const i=t.slice();return i[20]=e[n],i}function Fd(t){return{c:Dl,m:Dl,p:Dl,i:Dl,o:Dl,d:Dl}}function Vd(t){let e,n,i,s,r,o,a,c,u,h,l,d,f,p,g,m,y,v,w,b,E,T=t[19],I=[];for(let e=0;e<T.length;e+=1)I[e]=Ud(Pd(t,T,e));const S=[Bd,$d],C=[];function A(t,e){return t[4]?0:1}return p=A(t),g=C[p]=S[p](t),{c(){e=Pl("div"),n=Pl("form"),i=Pl("select");for(let t=0;t<I.length;t+=1)I[t].c();s=Vl(),r=Pl("input"),o=Vl(),a=Pl("input"),c=Vl(),u=Pl("div"),h=Pl("label"),h.textContent="Found:",l=Vl(),d=Pl("input"),f=Vl(),g.c(),m=Vl(),y=Pl("p"),v=Fl(t[5]),$l(i,"class","font-mono"),void 0===t[0]&&Jl((()=>t[9].call(i))),$l(r,"type","text"),$l(r,"placeholder","URL"),$l(a,"type","email"),$l(a,"placeholder","Email"),$l(h,"for","found-box"),$l(d,"type","checkbox"),$l(d,"id","found-box"),$l(n,"class","flex flex-col justify-between h-60"),$l(y,"class","epilogue"),$l(e,"class","max-w-sm")},m(g,T){Rl(g,e,T),Ll(e,n),Ll(n,i);for(let t=0;t<I.length;t+=1)I[t].m(i,null);jl(i,t[0]),Ll(n,s),Ll(n,r),Bl(r,t[1]),Ll(n,o),Ll(n,a),Bl(a,t[2]),Ll(n,c),Ll(n,u),Ll(u,h),Ll(u,l),Ll(u,d),d.checked=t[3],Ll(n,f),C[p].m(n,null),Ll(e,m),Ll(e,y),Ll(y,v),w=!0,b||(E=[Ul(i,"change",t[9]),Ul(r,"input",t[10]),Ul(a,"input",t[11]),Ul(d,"change",t[12])],b=!0)},p(t,e){if(64&e){let n;for(T=t[19],n=0;n<T.length;n+=1){const s=Pd(t,T,n);I[n]?I[n].p(s,e):(I[n]=Ud(s),I[n].c(),I[n].m(i,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=T.length}65&e&&jl(i,t[0]),2&e&&r.value!==t[1]&&Bl(r,t[1]),4&e&&a.value!==t[2]&&Bl(a,t[2]),8&e&&(d.checked=t[3]);let s=p;p=A(t),p===s?C[p].p(t,e):(rd(),cd(C[s],1,1,(()=>{C[s]=null})),od(),g=C[p],g?g.p(t,e):(g=C[p]=S[p](t),g.c()),ad(g,1),g.m(n,null)),(!w||32&e)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(v,t[5])},i(t){w||(ad(g),w=!0)},o(t){cd(g),w=!1},d(t){t&&Ml(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(I,t),C[p].d(),b=!1,Nl(E)}}}function Ud(t){let e,n,i,s,r=t[20].text+"";return{c(){e=Pl("option"),n=Fl(r),e.__value=i=t[20].value,e.value=e.__value,e.disabled=s=!t[20].available},m(t,i){Rl(t,e,i),Ll(e,n)},p:Dl,d(t){t&&Ml(e)}}}function $d(t){let e,n,i;return{c(){e=Pl("button"),e.textContent="Schedule",$l(e,"class","btn px-4 py-2")},m(s,r){Rl(s,e,r),n||(i=Ul(e,"click",t[7]),n=!0)},p:Dl,i:Dl,o:Dl,d(t){t&&Ml(e),n=!1,i()}}}function Bd(t){let e,n;return e=new Md({}),{c(){hd(e.$$.fragment)},m(t,i){ld(e,t,i),n=!0},p:Dl,i(t){n||(ad(e.$$.fragment,t),n=!0)},o(t){cd(e.$$.fragment,t),n=!1},d(t){dd(e,t)}}}function jd(t){let e,n;return e=new Md({}),{c(){hd(e.$$.fragment)},m(t,i){ld(e,t,i),n=!0},p:Dl,i(t){n||(ad(e.$$.fragment,t),n=!0)},o(t){cd(e.$$.fragment,t),n=!1},d(t){dd(e,t)}}}function qd(t){let e,n,i,s,r,o,a,c;e=new Ld({});let u={ctx:t,current:null,token:null,hasCatch:!1,pending:jd,then:Vd,catch:Fd,value:19,blocks:[,,,]};return ud(t[6],u),{c(){hd(e.$$.fragment),n=Vl(),i=Pl("main"),s=Pl("h2"),s.textContent="Schedule a Meme",r=Vl(),u.block.c(),o=Vl(),a=Pl("footer")},m(t,h){ld(e,t,h),Rl(t,n,h),Rl(t,i,h),Ll(i,s),Ll(i,r),u.block.m(i,u.anchor=null),u.mount=()=>i,u.anchor=null,Rl(t,o,h),Rl(t,a,h),c=!0},p(e,[n]){!function(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}(u,t=e,n)},i(t){c||(ad(e.$$.fragment,t),ad(u.block),c=!0)},o(t){cd(e.$$.fragment,t);for(let t=0;t<3;t+=1){cd(u.blocks[t])}c=!1},d(t){dd(e,t),t&&Ml(n),t&&Ml(i),u.block.d(),u.token=null,u=null,t&&Ml(o),t&&Ml(a)}}}function Kd(t,e,n){var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((i=i.apply(t,e||[])).next())}))};let{db:s}=e;const r=Td(),[o,a,c]=yd(r);let u=null,h="",l="",d=!1,f=!1,p="";const g=i(void 0,void 0,void 0,(function*(){var t,e;const h=(yield Promise.all(new Array(11).fill(0).map(((t,e)=>i(void 0,void 0,void 0,(function*(){const t=vd(o+e-2,a,c),n={value:t,text:wd(t),available:!(yield Nd(t,s))};return wd(n.value)===wd(r)?[{value:null,text:"".padStart(10,"-"),available:!1},n]:n})))))).flat();return n(0,u=null!==(e=null===(t=h.filter((t=>t.value>=r&&t.available))[0])||void 0===t?void 0:t.value)&&void 0!==e?e:null),h}));return t.$$set=t=>{"db"in t&&n(8,s=t.db)},[u,h,l,d,f,p,g,t=>{t.preventDefault(),n(4,f=!0),(async(t,e)=>await xd("submitMeme",{date:wd(t),meme:e}))(u,{email:l,url:h,found:d}).then((t=>{n(5,p=t.data.message),n(4,f=!1)})).catch((t=>{if("functions/invalid-argument"!==t.code&&"functions/out-of-range"!==t.code)throw n(4,f=!1),n(5,p="Something went wrong"),t;n(4,f=!1),n(5,p="That date is unavailable"),console.warn(t)})),n(4,f=!0)},s,function(){u=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,u),n(6,g)},function(){h=this.value,n(1,h)},function(){l=this.value,n(2,l)},function(){d=this.checked,n(3,d)}]}return new class extends gd{constructor(t){super(),pd(this,t,Kd,qd,Ol,{db:8})}}({target:document.body,props:{db:Il}})}();
//# sourceMappingURL=schedule.js.map
