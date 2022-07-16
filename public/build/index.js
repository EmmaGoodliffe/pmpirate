var app=function(){"use strict";
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
     */const t=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,c=s>>2,l=(3&s)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,r||(u=64)),i.push(n[c],n[l],n[u],n[f])}return i.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const h=s<<2|r>>4;if(i.push(h),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},n=function(n){return function(n){const i=t(n);return e.encodeByteArray(i,!0)}(n).replace(/\./g,"")};
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
class i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}function s(){return"object"==typeof indexedDB}function r(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class o extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(h,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",a=`${this.serviceName}: ${r} (${i}).`;return new o(i,a,n)}}const h=/\{\$([^}]+)}/g;function c(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(l(n)&&l(r)){if(!c(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function l(t){return null!==t&&"object"==typeof t}
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
     */function u(t,e=1e3,n=2){const i=e*Math.pow(n,t),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
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
     */function f(t){return t&&t._delegate?t._delegate:t}class p{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const d="[DEFAULT]";
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
     */class g{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:d})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===d?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:d:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class m{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new g(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var y;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(y||(y={}));const v={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},b=y.INFO,w={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},I=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=w[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class E{constructor(t){this.name=t,this._logLevel=b,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?v[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...t),this._logHandler(this,y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...t),this._logHandler(this,y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,y.INFO,...t),this._logHandler(this,y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,y.WARN,...t),this._logHandler(this,y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...t),this._logHandler(this,y.ERROR,...t)}}let T,C;const S=new WeakMap,A=new WeakMap,D=new WeakMap,_=new WeakMap,k=new WeakMap;let $={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return A.get(t);if("objectStoreNames"===e)return t.objectStoreNames||D.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function P(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(C||(C=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(L(this),e),j(S.get(this))}:function(...e){return j(t.apply(L(this),e))}:function(e,...n){const i=t.call(L(this),e,...n);return D.set(i,e.sort?e.sort():[e]),j(i)}}function O(t){return"function"==typeof t?P(t):(t instanceof IDBTransaction&&function(t){if(A.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));A.set(t,e)}(t),e=t,(T||(T=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,$):t);var e}function j(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(j(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&S.set(e,t)})).catch((()=>{})),k.set(e,t),e}(t);if(_.has(t))return _.get(t);const e=O(t);return e!==t&&(_.set(t,e),k.set(e,t)),e}const L=t=>k.get(t);function M(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=j(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(j(o.result),t.oldVersion,t.newVersion,j(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const R=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],N=new Map;function F(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(N.get(e))return N.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=x.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!R.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return N.set(e,r),r}$=(t=>({...t,get:(e,n,i)=>F(e,n)||t.get(e,n,i),has:(e,n)=>!!F(e,n)||t.has(e,n)}))($);
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
class B{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const H="@firebase/app",U="0.7.28",z=new E("@firebase/app"),q="[DEFAULT]",V={[H]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},G=new Map,K=new Map;function X(t,e){try{t.container.addComponent(e)}catch(n){z.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function W(t){const e=t.name;if(K.has(e))return z.debug(`There were multiple attempts to register component ${e}.`),!1;K.set(e,t);for(const e of G.values())X(e,t);return!0}function Y(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
     */const J=new a("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Q{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new p("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}
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
     */function Z(t="[DEFAULT]"){const e=G.get(t);if(!e)throw J.create("no-app",{appName:t});return e}function tt(t,e,n){var i;let s=null!==(i=V[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void z.warn(t.join(" "))}W(new p(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
     */const et="firebase-heartbeat-store";let nt=null;function it(){return nt||(nt=M("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(et)}}).catch((t=>{throw J.create("storage-open",{originalErrorMessage:t.message})}))),nt}async function st(t,e){var n;try{const n=(await it()).transaction(et,"readwrite"),i=n.objectStore(et);return await i.put(e,rt(t)),n.done}catch(t){throw J.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function rt(t){return`${t.name}!${t.options.appId}`}
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
     */class ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ht(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=at(),{heartbeatsToSend:e,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),ct(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ct(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=n(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function at(){return(new Date).toISOString().substring(0,10)}class ht{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!s()&&r().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await it()).transaction(et).objectStore(et).get(rt(t))}catch(t){throw J.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ct(t){return n(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var lt;lt="",W(new p("platform-logger",(t=>new B(t)),"PRIVATE")),W(new p("heartbeat",(t=>new ot(t)),"PRIVATE")),tt(H,U,lt),tt(H,U,"esm2017"),tt("fire-js","");const ut="@firebase/installations",ft="0.5.12",pt=1e4,dt="w:0.5.12",gt="FIS_v2",mt=36e5,yt=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function vt(t){return t instanceof o&&t.code.includes("request-failed")}
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
     */function bt({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function wt(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function It(t,e){const n=(await e.json()).error;return yt.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Et({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Tt(t,{refreshToken:e}){const n=Et(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
     */(e)),n}async function Ct(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
function St(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const At=/^[cdef][\w-]{21}$/;function Dt(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
     */(t);return At.test(e)?e:""}catch(t){return""}}function _t(t){return`${t.appName}!${t.appId}`}
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
     */const kt=new Map;function $t(t,e){const n=_t(t);Pt(n,e),function(t,e){const n=function(){!Ot&&"BroadcastChannel"in self&&(Ot=new BroadcastChannel("[Firebase] FID Change"),Ot.onmessage=t=>{Pt(t.data.key,t.data.fid)});return Ot}();n&&n.postMessage({key:t,fid:e});0===kt.size&&Ot&&(Ot.close(),Ot=null)}(n,e)}function Pt(t,e){const n=kt.get(t);if(n)for(const t of n)t(e)}let Ot=null;
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
const jt="firebase-installations-store";let Lt=null;function Mt(){return Lt||(Lt=M("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(jt)}})),Lt}async function Rt(t,e){const n=_t(t),i=(await Mt()).transaction(jt,"readwrite"),s=i.objectStore(jt),r=await s.get(n);return await s.put(e,n),await i.done,r&&r.fid===e.fid||$t(t,e.fid),e}async function xt(t){const e=_t(t),n=(await Mt()).transaction(jt,"readwrite");await n.objectStore(jt).delete(e),await n.done}async function Nt(t,e){const n=_t(t),i=(await Mt()).transaction(jt,"readwrite"),s=i.objectStore(jt),r=await s.get(n),o=e(r);return void 0===o?await s.delete(n):await s.put(o,n),await i.done,!o||r&&r.fid===o.fid||$t(t,o.fid),o}
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
     */async function Ft(t){let e;const n=await Nt(t.appConfig,(n=>{const i=function(t){return Ut(t||{fid:Dt(),registrationStatus:0})}(n),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(yt.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=bt(t),s=Et(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={fid:n,authVersion:gt,appId:t.appId,sdkVersion:dt},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Ct((()=>fetch(i,a)));if(h.ok){const t=await h.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:wt(t.authToken)}}throw await It("Create Installation",h)}(t,e);return Rt(t.appConfig,n)}catch(n){throw vt(n)&&409===n.customData.serverCode?await xt(t.appConfig):await Rt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Bt(t)}:{installationEntry:e}}(t,i);return e=s.registrationPromise,s.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Bt(t){let e=await Ht(t.appConfig);for(;1===e.registrationStatus;)await St(100),e=await Ht(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Ft(t);return n||e}return e}function Ht(t){return Nt(t,(t=>{if(!t)throw yt.create("installation-not-found");return Ut(t)}))}function Ut(t){return 1===(e=t).registrationStatus&&e.registrationTime+pt<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
     */}async function zt({appConfig:t,heartbeatServiceProvider:e},n){const i=function(t,{fid:e}){return`${bt(t)}/${e}/authTokens:generate`}
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
     */(t,n),s=Tt(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={installation:{sdkVersion:dt,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Ct((()=>fetch(i,a)));if(h.ok){return wt(await h.json())}throw await It("Generate Auth Token",h)}async function qt(t,e=!1){let n;const i=await Nt(t.appConfig,(i=>{if(!Gt(i))throw yt.create("not-registered");const s=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mt}(t)}(s))return i;if(1===s.requestStatus)return n=async function(t,e){let n=await Vt(t.appConfig);for(;1===n.authToken.requestStatus;)await St(100),n=await Vt(t.appConfig);const i=n.authToken;return 0===i.requestStatus?qt(t,e):i}(t,e),i;{if(!navigator.onLine)throw yt.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await zt(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Rt(t.appConfig,i),n}catch(n){if(!vt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rt(t.appConfig,n)}else await xt(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function Vt(t){return Nt(t,(t=>{if(!Gt(t))throw yt.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+pt<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
     */}))}function Gt(t){return void 0!==t&&2===t.registrationStatus}
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
async function Kt(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Ft(t);e&&await e}
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
     */(n);return(await qt(n,e)).token}function Xt(t){return yt.create("missing-app-config-values",{valueName:t})}
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
     */const Wt="installations",Yt=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Xt("App Configuration");if(!t.name)throw Xt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Y(e,"heartbeat"),_delete:()=>Promise.resolve()}},Jt=t=>{const e=Y(t.getProvider("app").getImmediate(),Wt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ft(e);return i?i.catch(console.error):qt(e).catch(console.error),n.fid}(e),getToken:t=>Kt(e,t)}};W(new p(Wt,Yt,"PUBLIC")),W(new p("installations-internal",Jt,"PRIVATE")),tt(ut,ft),tt(ut,ft,"esm2017");
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
const Qt="analytics",Zt="https://www.googletagmanager.com/gtag/js",te=new E("@firebase/analytics");
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
function ee(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function ne(t,e,n,i){return async function(s,r,o){try{"event"===s?await async function(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const i=await ee(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(t){te.error(t)}}(t,e,n,r,o):"config"===s?await async function(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const t=(await ee(n)).find((t=>t.measurementId===s));t&&await e[t.appId]}}catch(t){te.error(t)}t("config",s,r)}(t,e,n,i,r,o):"consent"===s?t("consent","update",o):t("set",r)}catch(t){te.error(t)}}}
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
const ie=new a("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const se=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function re(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function oe(t,e=se,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw ie.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ie.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new he;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),ae({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ae(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=se){var r,a;const{appId:h,measurementId:c}=t;try{await function(t,e){return new Promise(((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener((()=>{clearTimeout(r),i(ie.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(c)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(r=t)||void 0===r?void 0:r.message}]`),{appId:h,measurementId:c};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:re(i)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw ie.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return s.deleteThrottleMetadata(h),e}catch(e){const r=e;if(!function(t){if(!(t instanceof o&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r)){if(s.deleteThrottleMetadata(h),c)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==r?void 0:r.message}]`),{appId:h,measurementId:c};throw e}const l=503===Number(null===(a=null==r?void 0:r.customData)||void 0===a?void 0:a.httpStatus)?u(n,s.intervalMillis,30):u(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(h,f),te.debug(`Calling attemptFetch again in ${l} millis`),ae(t,f,i,s)}}class he{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function ce(t,e,n,i,o,a,h){var c;const l=oe(t);l.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>te.error(t))),e.push(l);const u=
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
async function(){var t;if(!s())return te.warn(ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await r()}catch(e){return te.warn(ie.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[f,p]=await Promise.all([l,u]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Zt))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${Zt}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(a,f.measurementId),o("js",new Date);const d=null!==(c=null==h?void 0:h.config)&&void 0!==c?c:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),o("config",f.measurementId,d),f.measurementId}
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
     */class le{constructor(t){this.app=t}_delete(){return delete ue[this.app.options.appId],Promise.resolve()}}let ue={},fe=[];const pe={};let de,ge,me="dataLayer",ye=!1;function ve(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ie.create("invalid-analytics-context",{errorInfo:e});te.warn(n.message)}}function be(t,e,n){ve();const i=t.options.appId;if(!i)throw ie.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ie.create("no-api-key");te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ue[i])throw ie.create("already-exists",{id:i});if(!ye){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(me);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=ne(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}(ue,fe,pe,me,"gtag");ge=t,de=e,ye=!0}ue[i]=ce(t,fe,pe,e,de,me,n);return new le(t)}function we(t,e,n,i){t=f(t),async function(t,e,n,i,s){if(s&&s.global)t("event",n,i);else{const s=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:s}))}}(ge,ue[t.app.options.appId],e,n,i).catch((t=>te.error(t)))}const Ie="@firebase/analytics",Ee="0.8.0";W(new p(Qt,((t,{options:e})=>be(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),W(new p("analytics-internal",(function(t){try{const e=t.getProvider(Qt).getImmediate();return{logEvent:(t,n,i)=>we(e,t,n,i)}}catch(t){throw ie.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),tt(Ie,Ee),tt(Ie,Ee,"esm2017");
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
tt("firebase","9.9.0","app");var Te,Ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Se=Se||{},Ae=Ce||self;function De(){}function _e(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ke(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var $e="closure_uid_"+(1e9*Math.random()>>>0),Pe=0;function Oe(t,e,n){return t.call.apply(t.bind,arguments)}function je(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return(Le=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Oe:je).apply(null,arguments)}function Me(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function xe(){this.s=this.s,this.o=this.o}var Ne={};xe.prototype.s=!1,xe.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,$e)&&t[$e]||(t[$e]=++Pe)}(this);delete Ne[t]}},xe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fe=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Be=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function He(t){return Array.prototype.concat.apply([],arguments)}function Ue(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ze(t){return/^[\s\xa0]*$/.test(t)}var qe,Ve=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ge(t,e){return-1!=t.indexOf(e)}function Ke(t,e){return t<e?-1:t>e?1:0}t:{var Xe=Ae.navigator;if(Xe){var We=Xe.userAgent;if(We){qe=We;break t}}qe=""}function Ye(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Je(t){const e={};for(const n in t)e[n]=t[n];return e}var Qe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ze(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Qe.length;e++)n=Qe[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function tn(t){return tn[" "](t),t}tn[" "]=De;var en,nn,sn=Ge(qe,"Opera"),rn=Ge(qe,"Trident")||Ge(qe,"MSIE"),on=Ge(qe,"Edge"),an=on||rn,hn=Ge(qe,"Gecko")&&!(Ge(qe.toLowerCase(),"webkit")&&!Ge(qe,"Edge"))&&!(Ge(qe,"Trident")||Ge(qe,"MSIE"))&&!Ge(qe,"Edge"),cn=Ge(qe.toLowerCase(),"webkit")&&!Ge(qe,"Edge");function ln(){var t=Ae.document;return t?t.documentMode:void 0}t:{var un="",fn=(nn=qe,hn?/rv:([^\);]+)(\)|;)/.exec(nn):on?/Edge\/([\d\.]+)/.exec(nn):rn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(nn):cn?/WebKit\/(\S+)/.exec(nn):sn?/(?:Version)[ \/]?(\S+)/.exec(nn):void 0);if(fn&&(un=fn?fn[1]:""),rn){var pn=ln();if(null!=pn&&pn>parseFloat(un)){en=String(pn);break t}}en=un}var dn={};function gn(){return function(t){var e=dn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ve(String(en)).split("."),n=Ve("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Ke(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Ke(0==s[2].length,0==r[2].length)||Ke(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}Ae.document&&rn&&ln();var mn=function(){if(!Ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ae.addEventListener("test",De,e),Ae.removeEventListener("test",De,e)}catch(t){}return t}();function yn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function vn(t,e){if(yn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hn){t:{try{tn(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:bn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vn.Z.h.call(this)}}yn.prototype.h=function(){this.defaultPrevented=!0},Re(vn,yn);var bn={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),In=0;function En(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++In,this.ca=this.fa=!1}function Tn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Cn(t){this.src=t,this.g={},this.h=0}function Sn(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Fe(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Tn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function An(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}Cn.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=An(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new En(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var Dn="closure_lm_"+(1e6*Math.random()|0),_n={};function kn(t,e,n,i,s){if(i&&i.once)return Pn(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)kn(t,e[r],n,i,s);return null}return n=Nn(n),t&&t[wn]?t.N(e,n,ke(i)?!!i.capture:!!i,s):$n(t,e,n,!1,i,s)}function $n(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ke(s)?!!s.capture:!!s,a=Rn(t);if(a||(t[Dn]=a=new Cn(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Mn;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)mn||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ln(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Pn(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pn(t,e[r],n,i,s);return null}return n=Nn(n),t&&t[wn]?t.O(e,n,ke(i)?!!i.capture:!!i,s):$n(t,e,n,!0,i,s)}function On(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)On(t,e[r],n,i,s);else i=ke(i)?!!i.capture:!!i,n=Nn(n),t&&t[wn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=An(r=t.g[e],n,i,s))&&(Tn(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Rn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=An(e,n,i,s)),(n=-1<t?e[t]:null)&&jn(n))}function jn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[wn])Sn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ln(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Rn(e))?(Sn(n,t),0==n.h&&(n.src=null,e[Dn]=null)):Tn(t)}}}function Ln(t){return t in _n?_n[t]:_n[t]="on"+t}function Mn(t,e){if(t.ca)t=!0;else{e=new vn(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&jn(t),t=n.call(i,e)}return t}function Rn(t){return(t=t[Dn])instanceof Cn?t:null}var xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nn(t){return"function"==typeof t?t:(t[xn]||(t[xn]=function(e){return t.handleEvent(e)}),t[xn])}function Fn(){xe.call(this),this.i=new Cn(this),this.P=this,this.I=null}function Bn(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new yn(e,t);else if(e instanceof yn)e.target=e.target||t;else{var s=e;Ze(e=new yn(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Hn(o,i,!0,e)&&s}if(s=Hn(o=e.g=t,i,!0,e)&&s,s=Hn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=Hn(o=e.g=n[r],i,!1,e)&&s}function Hn(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&Sn(t.i,o),s=!1!==a.call(h,i)&&s}}return s&&!i.defaultPrevented}Re(Fn,xe),Fn.prototype[wn]=!0,Fn.prototype.removeEventListener=function(t,e,n,i){On(this,t,e,n,i)},Fn.prototype.M=function(){if(Fn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Tn(n[i]);delete e.g[t],e.h--}}this.I=null},Fn.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Fn.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Un=Ae.JSON.stringify;function zn(){var t=Yn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var qn,Vn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Gn),(t=>t.reset()));class Gn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Kn(t){Ae.setTimeout((()=>{throw t}),0)}function Xn(t,e){qn||function(){var t=Ae.Promise.resolve(void 0);qn=function(){t.then(Jn)}}(),Wn||(qn(),Wn=!0),Yn.add(t,e)}var Wn=!1,Yn=new class{constructor(){this.h=this.g=null}add(t,e){const n=Vn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Jn(){for(var t;t=zn();){try{t.h.call(t.g)}catch(t){Kn(t)}var e=Vn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wn=!1}function Qn(t,e){Fn.call(this),this.h=t||1,this.g=e||Ae,this.j=Le(this.kb,this),this.l=Date.now()}function Zn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ti(t,e,n){if("function"==typeof t)n&&(t=Le(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Le(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ae.setTimeout(t,e||0)}function ei(t){t.g=ti((()=>{t.g=null,t.i&&(t.i=!1,ei(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Re(Qn,Fn),(Te=Qn.prototype).da=!1,Te.S=null,Te.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Bn(this,"tick"),this.da&&(Zn(this),this.start()))}},Te.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Te.M=function(){Qn.Z.M.call(this),Zn(this),delete this.g};class ni extends xe{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ei(this)}M(){super.M(),this.g&&(Ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(t){xe.call(this),this.h=t,this.g={}}Re(ii,xe);var si=[];function ri(t,e,n,i){Array.isArray(n)||(n&&(si[0]=n.toString()),n=si);for(var s=0;s<n.length;s++){var r=kn(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function oi(t){Ye(t.g,(function(t,e){this.g.hasOwnProperty(e)&&jn(t)}),t),t.g={}}function ai(){this.g=!0}function hi(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Un(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}ii.prototype.M=function(){ii.Z.M.call(this),oi(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ai.prototype.Aa=function(){this.g=!1},ai.prototype.info=function(){};var ci={},li=null;function ui(){return li=li||new Fn}function fi(t){yn.call(this,ci.Ma,t)}function pi(t){const e=ui();Bn(e,new fi(e,t))}function di(t,e){yn.call(this,ci.STAT_EVENT,t),this.stat=e}function gi(t){const e=ui();Bn(e,new di(e,t))}function mi(t,e){yn.call(this,ci.Na,t),this.size=e}function yi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ae.setTimeout((function(){t()}),e)}ci.Ma="serverreachability",Re(fi,yn),ci.STAT_EVENT="statevent",Re(di,yn),ci.Na="timingevent",Re(mi,yn);var vi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9};function bi(){}function wi(t){return t.h||(t.h=t.i())}bi.prototype.h=null;var Ii,Ei={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ti(){yn.call(this,"d")}function Ci(){yn.call(this,"c")}function Si(){}function Ai(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new ii(this),this.P=_i,t=an?125:void 0,this.W=new Qn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Di}function Di(){this.i=null,this.g="",this.h=!1}Re(Ti,yn),Re(Ci,yn),Re(Si,bi),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},Ii=new Si;var _i=45e3,ki={},$i={};function Pi(t,e,n){t.K=1,t.v=ts(Xi(e)),t.s=n,t.U=!0,Oi(t,null)}function Oi(t,e){t.F=Date.now(),Ri(t),t.A=Xi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),ps(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Di,t.g=pr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ni(Le(t.Ia,t,t.g),t.O)),ri(t.V,t.g,"readystatechange",t.gb),e=t.H?Je(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),pi(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ji(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Li(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Mi(t,n),i==$i){4==e&&(t.o=4,gi(14),s=!1),hi(t.j,t.m,null,"[Incomplete Response]");break}if(i==ki){t.o=4,gi(15),hi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}hi(t.j,t.m,i,null),Hi(t,i)}ji(t)&&i!=$i&&i!=ki&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,gi(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.L=!0,gi(11))):(hi(t.j,t.m,n,"[Invalid Chunked Response]"),Bi(t),Fi(t))}function Mi(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?$i:(n=Number(e.substring(n,i)),isNaN(n)?ki:(i+=1)+n>e.length?$i:(e=e.substr(i,n),t.C=i+n,e))}function Ri(t){t.Y=Date.now()+t.P,xi(t,t.P)}function xi(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=yi(Le(t.eb,t),e)}function Ni(t){t.B&&(Ae.clearTimeout(t.B),t.B=null)}function Fi(t){0==t.l.G||t.I||hr(t.l,t)}function Bi(t){Ni(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Zn(t.W),oi(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||bs(n.i,t)))if(n.I=t.N,!t.J&&bs(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ar(n),Ys(n)}sr(n),gi(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=yi(Le(n.ab,n),6e3));if(1>=vs(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&ar(n),!ze(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=c[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Ge(t,"spdy")||Ge(t,"quic")||Ge(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ws(r,r.h),r.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Zi(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=fr(i,i.H?i.la:null,i.W),o.J){Is(i.i,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(Ni(a),Ri(a)),i.g=o}else ir(i);0<n.l.length&&Zs(n)}else"stop"!=c[0]&&"close"!=c[0]||lr(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?lr(n,7):Ws(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}pi(4)}catch(t){}}function Ui(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(_e(t)||"string"==typeof t)Be(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(_e(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(_e(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function zi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof zi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function qi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Vi(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)Vi(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function Vi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Te=Ai.prototype).setTimeout=function(t){this.P=t},Te.gb=function(t){t=t.target;const e=this.L;e&&3==qs(t)?e.l():this.Ia(t)},Te.Ia=function(t){try{if(t==this.g)t:{const l=qs(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>l)&&(3!=l||an||this.g&&(this.h.h||this.g.ga()||Vs(this.g)))){this.I||4!=l||7==e||pi(8==e||0>=u?3:2),Ni(this);var n=this.g.ba();this.N=n;e:if(ji(this)){var i=Vs(this.g);t="";var s=i.length,r=4==qs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Bi(this),Fi(this);var o="";break e}this.h.i=new Ae.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,gi(12),Bi(this),Fi(this);break t}hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hi(this,n)}this.U?(Li(this,l,o),an&&this.i&&3==l&&(ri(this.V,this.W,"tick",this.fb),this.W.start())):(hi(this.j,this.m,o,null),Hi(this,o)),4==l&&Bi(this),this.i&&!this.I&&(4==l?hr(this.l,this):(this.i=!1,Ri(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,gi(12)):(this.o=0,gi(13)),Bi(this),Fi(this)}}}catch(t){}},Te.fb=function(){if(this.g){var t=qs(this.g),e=this.g.ga();this.C<e.length&&(Ni(this),Li(this,t,e),this.i&&4!=t&&Ri(this))}},Te.cancel=function(){this.I=!0,Bi(this)},Te.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(pi(3),gi(17)),Bi(this),this.o=2,Fi(this)):xi(this,this.Y-t)},(Te=zi.prototype).R=function(){qi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Te.T=function(){return qi(this),this.g.concat()},Te.get=function(t,e){return Vi(this.h,t)?this.h[t]:e},Te.set=function(t,e){Vi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Te.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var Gi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ki(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ki){this.g=void 0!==e?e:t.g,Wi(this,t.j),this.s=t.s,Yi(this,t.i),Ji(this,t.m),this.l=t.l,e=t.h;var n=new cs;n.i=e.i,e.g&&(n.g=new zi(e.g),n.h=e.h),Qi(this,n),this.o=t.o}else t&&(n=String(t).match(Gi))?(this.g=!!e,Wi(this,n[1]||"",!0),this.s=es(n[2]||""),Yi(this,n[3]||"",!0),Ji(this,n[4]),this.l=es(n[5]||"",!0),Qi(this,n[6]||"",!0),this.o=es(n[7]||"")):(this.g=!!e,this.h=new cs(null,this.g))}function Xi(t){return new Ki(t)}function Wi(t,e,n){t.j=n?es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yi(t,e,n){t.i=n?es(e,!0):e}function Ji(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qi(t,e,n){e instanceof cs?(t.h=e,function(t,e){e&&!t.j&&(ls(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(us(this,e),ps(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=ns(e,as)),t.h=new cs(e,t.g))}function Zi(t,e,n){t.h.set(e,n)}function ts(t){return Zi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,is),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function is(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,ss,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ns(e,ss,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(ns(n,"/"==n.charAt(0)?os:rs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,hs)),t.join("")};var ss=/[#\/\?@]/g,rs=/[#\?:]/g,os=/[#\?]/g,as=/[#\?@]/g,hs=/#/g;function cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ls(t){t.g||(t.g=new zi,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function us(t,e){ls(t),e=ds(t,e),Vi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Vi((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qi(t)))}function fs(t,e){return ls(t),e=ds(t,e),Vi(t.g.h,e)}function ps(t,e,n){us(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),Ue(n)),t.h+=n.length)}function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Te=cs.prototype).add=function(t,e){ls(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Te.forEach=function(t,e){ls(this),this.g.forEach((function(n,i){Be(n,(function(n){t.call(e,n,i,this)}),this)}),this)},Te.T=function(){ls(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},Te.R=function(t){ls(this);var e=[];if("string"==typeof t)fs(this,t)&&(e=He(e,this.g.get(ds(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=He(e,t[n])}return e},Te.set=function(t,e){return ls(this),this.i=null,fs(this,t=ds(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Te.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Te.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function gs(t){this.l=t||ms,Ae.PerformanceNavigationTiming?t=0<(t=Ae.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ae.g&&Ae.g.Ea&&Ae.g.Ea()&&Ae.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ms=10;function ys(t){return!!t.h||!!t.g&&t.g.size>=t.j}function vs(t){return t.h?1:t.g?t.g.size:0}function bs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ws(t,e){t.g?t.g.add(e):t.h=e}function Is(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Es(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ue(t.i)}function Ts(){}function Cs(){this.g=new Ts}function Ss(t,e,n){const i=n||"";try{Ui(t,(function(t,n){let s=t;ke(t)&&(s=Un(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function As(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function Ds(t){this.l=t.$b||null,this.j=t.ib||!1}function _s(t,e){Fn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gs.prototype.cancel=function(){if(this.i=Es(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ts.prototype.stringify=function(t){return Ae.JSON.stringify(t,void 0)},Ts.prototype.parse=function(t){return Ae.JSON.parse(t,void 0)},Re(Ds,bi),Ds.prototype.g=function(){return new _s(this.l,this.j)},Ds.prototype.i=function(t){return function(){return t}}({}),Re(_s,Fn);var ks=0;function $s(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Os(t)}function Os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Te=_s.prototype).open=function(t,e){if(this.readyState!=ks)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Os(this)},Te.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ae).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ps(this)),this.readyState=ks},Te.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Ae.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$s(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Te.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ps(this):Os(this),3==this.readyState&&$s(this)}},Te.Ua=function(t){this.g&&(this.response=this.responseText=t,Ps(this))},Te.Ta=function(t){this.g&&(this.response=t,Ps(this))},Te.ha=function(){this.g&&Ps(this)},Te.setRequestHeader=function(t,e){this.v.append(t,e)},Te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var js=Ae.JSON.parse;function Ls(t){Fn.call(this),this.headers=new zi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ms,this.K=this.L=!1}Re(Ls,Fn);var Ms="",Rs=/^https?$/i,xs=["POST","PUT"];function Ns(t){return"content-type"==t.toLowerCase()}function Fs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bs(t),Us(t)}function Bs(t){t.D||(t.D=!0,Bn(t,"complete"),Bn(t,"error"))}function Hs(t){if(t.h&&void 0!==Se&&(!t.C[1]||4!=qs(t)||2!=t.ba()))if(t.v&&4==qs(t))ti(t.Fa,0,t);else if(Bn(t,"readystatechange"),4==qs(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(Gi)[1]||null;if(!s&&Ae.self&&Ae.self.location){var r=Ae.self.location.protocol;s=r.substr(0,r.length-1)}i=!Rs.test(s?s.toLowerCase():"")}n=i}if(n)Bn(t,"complete"),Bn(t,"success");else{t.m=6;try{var o=2<qs(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Bs(t)}}finally{Us(t)}}}function Us(t,e){if(t.g){zs(t);const n=t.g,i=t.C[0]?De:null;t.g=null,t.C=null,e||Bn(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function zs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ae.clearTimeout(t.A),t.A=null)}function qs(t){return t.g?t.g.readyState:0}function Vs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ms:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Gs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Ye(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Zi(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xs(t){this.za=0,this.l=[],this.h=new ai,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ks("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ks("baseRetryDelayMs",5e3,t),this.$a=Ks("retryDelaySeedMs",1e4,t),this.Ya=Ks("forwardChannelMaxRetries",2,t),this.ra=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new gs(t&&t.concurrentRequestLimit),this.Ca=new Cs,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ws(t){if(Js(t),3==t.G){var e=t.V++,n=Xi(t.F);Zi(n,"SID",t.J),Zi(n,"RID",e),Zi(n,"TYPE","terminate"),er(t,n),(e=new Ai(t,t.h,e,void 0)).K=2,e.v=ts(Xi(n)),n=!1,Ae.navigator&&Ae.navigator.sendBeacon&&(n=Ae.navigator.sendBeacon(e.v.toString(),"")),!n&&Ae.Image&&((new Image).src=e.v,n=!0),n||(e.g=pr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ri(e)}ur(t)}function Ys(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Js(t){Ys(t),t.u&&(Ae.clearTimeout(t.u),t.u=null),ar(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Ae.clearTimeout(t.m),t.m=null)}function Qs(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Zs(t)}function Zs(t){ys(t.i)||t.m||(t.m=!0,Xn(t.Ha,t),t.C=0)}function tr(t,e){var n;n=e?e.m:t.V++;const i=Xi(t.F);Zi(i,"SID",t.J),Zi(i,"RID",n),Zi(i,"AID",t.U),er(t,i),t.o&&t.s&&Gs(i,t.o,t.s),n=new Ai(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=nr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ws(t.i,n),Pi(n,i,e)}function er(t,e){t.j&&Ui({},(function(t,n){Zi(e,n,t)}))}function nr(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Le(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Ss(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function ir(t){t.g||t.u||(t.Y=1,Xn(t.Ga,t),t.A=0)}function sr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=yi(Le(t.Ga,t),cr(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(Ae.clearTimeout(t.B),t.B=null)}function or(t){t.g=new Ai(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xi(t.oa);Zi(e,"RID","rpc"),Zi(e,"SID",t.J),Zi(e,"CI",t.N?"0":"1"),Zi(e,"AID",t.U),er(t,e),Zi(e,"TYPE","xmlhttp"),t.o&&t.s&&Gs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ts(Xi(e)),n.s=null,n.U=!0,Oi(n,t)}function ar(t){null!=t.v&&(Ae.clearTimeout(t.v),t.v=null)}function hr(t,e){var n=null;if(t.g==e){ar(t),rr(t),t.g=null;var i=2}else{if(!bs(t.i,e))return;n=e.D,Is(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Bn(i=ui(),new mi(i,n,e,s)),Zs(t)}else ir(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(vs(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=yi(Le(t.Ha,t,e),cr(t,t.C)),t.C++,0)))}(t,e)||2==i&&sr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}function cr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function lr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Le(t.jb,t);n||(n=new Ki("//www.google.com/images/cleardot.gif"),Ae.location&&"http"==Ae.location.protocol||Wi(n,"https"),ts(n)),function(t,e){const n=new ai;if(Ae.Image){const i=new Image;i.onload=Me(As,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Me(As,n,i,"TestLoadImage: error",!1,e),i.onabort=Me(As,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Me(As,n,i,"TestLoadImage: timeout",!1,e),Ae.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else gi(2);t.G=0,t.j&&t.j.va(e),ur(t),Js(t)}function ur(t){t.G=0,t.I=-1,t.j&&(0==Es(t.i).length&&0==t.l.length||(t.i.i.length=0,Ue(t.l),t.l.length=0),t.j.ua())}function fr(t,e,n){let i=function(t){return t instanceof Ki?Xi(t):new Ki(t,void 0)}(n);if(""!=i.i)e&&Yi(i,e+"."+i.i),Ji(i,i.m);else{const t=Ae.location;i=function(t,e,n,i){var s=new Ki(null,void 0);return t&&Wi(s,t),e&&Yi(s,e),n&&Ji(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Ye(t.aa,(function(t,e){Zi(i,e,t)})),e=t.D,n=t.sa,e&&n&&Zi(i,e,n),Zi(i,"VER",t.ma),er(t,i),i}function pr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Ls(new Ds({ib:!0})):new Ls(t.qa)).L=t.H,e}function dr(){}function gr(t,e){Fn.call(this),this.g=new Xs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ze(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ze(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new vr(this)}function mr(t){Ti.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function yr(){Ci.call(this),this.status=1}function vr(t){this.g=t}(Te=Ls.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ii.g(),this.C=this.u?wi(this.u):wi(Ii),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Fs(this,t)}t=n||"";const s=new zi(this.headers);i&&Ui(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=Ns;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=Ae.FormData&&t instanceof Ae.FormData,!(0<=Fe(xs,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zs(this),0<this.B&&((this.K=function(t){return rn&&gn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=ti(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Fs(this,t)}},Te.pa=function(){void 0!==Se&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bn(this,"timeout"),this.abort(8))},Te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Bn(this,"complete"),Bn(this,"abort"),Us(this))},Te.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Us(this,!0)),Ls.Z.M.call(this)},Te.Fa=function(){this.s||(this.F||this.v||this.l?Hs(this):this.cb())},Te.cb=function(){Hs(this)},Te.ba=function(){try{return 2<qs(this)?this.g.status:-1}catch(t){return-1}},Te.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Te.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),js(e)}},Te.Da=function(){return this.m},Te.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Te=Xs.prototype).ma=8,Te.G=1,Te.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Te.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ai(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Je(r),Ze(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=nr(this,s,e),Zi(n=Xi(this.F),"RID",t),Zi(n,"CVER",22),this.D&&Zi(n,"X-HTTP-Session-Id",this.D),er(this,n),this.o&&r&&Gs(n,this.o,r),ws(this.i,s),this.Ra&&Zi(n,"TYPE","init"),this.ja?(Zi(n,"$req",e),Zi(n,"SID","null"),s.$=!0,Pi(s,n,null)):Pi(s,n,e),this.G=2}}else 3==this.G&&(t?tr(this,t):0==this.l.length||ys(this.i)||tr(this))},Te.Ga=function(){if(this.u=null,or(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=yi(Le(this.bb,this),t)}},Te.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,gi(10),Ys(this),or(this))},Te.ab=function(){null!=this.v&&(this.v=null,Ys(this),sr(this),gi(19))},Te.jb=function(t){t?(this.h.info("Successfully pinged google.com"),gi(2)):(this.h.info("Failed to ping google.com"),gi(1))},(Te=dr.prototype).xa=function(){},Te.wa=function(){},Te.va=function(){},Te.ua=function(){},Te.Oa=function(){},Re(gr,Fn),gr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Xn(Le(t.hb,t,e))),gi(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=fr(t,null,t.W),Zs(t)},gr.prototype.close=function(){Ws(this.g)},gr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Qs(this.g,e)}else this.v?((e={}).__data__=Un(t),Qs(this.g,e)):Qs(this.g,t)},gr.prototype.M=function(){this.g.j=null,delete this.j,Ws(this.g),delete this.g,gr.Z.M.call(this)},Re(mr,Ti),Re(yr,Ci),Re(vr,dr),vr.prototype.xa=function(){Bn(this.g,"a")},vr.prototype.wa=function(t){Bn(this.g,new mr(t))},vr.prototype.va=function(t){Bn(this.g,new yr(t))},vr.prototype.ua=function(){Bn(this.g,"b")},gr.prototype.send=gr.prototype.u,gr.prototype.open=gr.prototype.m,gr.prototype.close=gr.prototype.close,vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",Fn.prototype.listen=Fn.prototype.N,Ls.prototype.listenOnce=Ls.prototype.O,Ls.prototype.getLastError=Ls.prototype.La,Ls.prototype.getLastErrorCode=Ls.prototype.Da,Ls.prototype.getStatus=Ls.prototype.ba,Ls.prototype.getResponseJson=Ls.prototype.Qa,Ls.prototype.getResponseText=Ls.prototype.ga,Ls.prototype.send=Ls.prototype.ea;const br="@firebase/firestore";
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
     */class wr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wr.UNAUTHENTICATED=new wr(null),wr.GOOGLE_CREDENTIALS=new wr("google-credentials-uid"),wr.FIRST_PARTY=new wr("first-party-uid"),wr.MOCK_USER=new wr("mock-user");
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
let Ir="9.9.0";
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
     */const Er=new E("@firebase/firestore");function Tr(t,...e){if(Er.logLevel<=y.DEBUG){const n=e.map(Sr);Er.debug(`Firestore (${Ir}): ${t}`,...n)}}function Cr(t,...e){if(Er.logLevel<=y.ERROR){const n=e.map(Sr);Er.error(`Firestore (${Ir}): ${t}`,...n)}}function Sr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Ar(t="Unexpected state"){const e=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+t;throw Cr(e),new Error(e)}function Dr(t,e){t||Ar()}
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
     */const _r="cancelled",kr="invalid-argument",$r="failed-precondition",Pr="unavailable";class Or extends o{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class jr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Lr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wr.UNAUTHENTICATED)))}shutdown(){}}class Rr{constructor(t){this.t=t,this.currentUser=wr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Tr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Tr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Tr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Dr("string"==typeof e.accessToken),new Lr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Dr(null===t||"string"==typeof t),new wr(t)}}class xr{constructor(t,e,n){this.type="FirstParty",this.user=wr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Nr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new xr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(wr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Br{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Tr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Tr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Tr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Tr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Dr("string"==typeof t.token),this.p=t.token,new Fr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function Hr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */function Ur(t){return"IndexedDbTransactionError"===t.name}
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
     */class zr{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class qr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qr&&t.projectId===this.projectId&&t.database===this.database}}
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
     */var Vr,Gr;function Kr(){return"undefined"!=typeof document?document:null}(Gr=Vr||(Vr={}))[Gr.OK=0]="OK",Gr[Gr.CANCELLED=1]="CANCELLED",Gr[Gr.UNKNOWN=2]="UNKNOWN",Gr[Gr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gr[Gr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gr[Gr.NOT_FOUND=5]="NOT_FOUND",Gr[Gr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gr[Gr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gr[Gr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gr[Gr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gr[Gr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gr[Gr.ABORTED=10]="ABORTED",Gr[Gr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gr[Gr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gr[Gr.INTERNAL=13]="INTERNAL",Gr[Gr.UNAVAILABLE=14]="UNAVAILABLE",Gr[Gr.DATA_LOSS=15]="DATA_LOSS";class Xr{constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&Tr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
     */class Wr{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Wr(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Or(_r,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}
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
class Yr{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=wr.UNAUTHENTICATED,this.clientId=class{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Hr(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Tr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Tr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Or($r,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=function(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),Ur(t))return new Or(Pr,`${e}: ${t}`);throw t}(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}const Jr=new Map;
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
class Qr{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Or(kr,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Or(kr,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Or(kr,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
class Zr{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Xr(this,"async_queue_retry"),this.Kc=()=>{const t=Kr();t&&Tr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Kr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Kr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new jr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Ur(t))throw t;Tr("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Cr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Wr.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&Ar()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class to extends class{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qr({}),this._settingsFrozen=!1,t instanceof qr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Or(kr,'"projectId" not provided in firebase.initializeApp.');return new qr(t.options.projectId)}(t))}get app(){if(!this._app)throw new Or($r,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Or($r,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Mr;switch(t.type){case"gapi":const e=t.client;return Dr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Nr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Or(kr,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Jr.get(t);e&&(Tr("ComponentProvider","Removing Datastore"),Jr.delete(t),e.terminate())}(this),Promise.resolve()}}{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Zr,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||function(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new zr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Yr(t._authCredentials,t._appCheckCredentials,t._queue,i)}(this),this._firestoreClient.terminate()}}!function(t,e=!0){Ir="9.9.0",W(new p("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new to(i,new Rr(t.getProvider("auth-internal")),new Br(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),tt(br,"3.4.12",t),tt(br,"3.4.12","esm2017")}();const eo=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:q,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw J.create("bad-app-name",{appName:String(i)});const s=G.get(i);if(s){if(c(t,s.options)&&c(n,s.config))return s;throw J.create("duplicate-app",{appName:i})}const r=new m(i);for(const t of K.values())r.addComponent(t);const o=new Q(t,n,r);return G.set(i,o),o}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(t=Z()){const e=Y(t=f(t),Qt);e.isInitialized()?e.getImmediate():function(t,e={}){const n=Y(t,Qt);if(n.isInitialized()){const t=n.getImmediate();if(c(e,n.getOptions()))return t;throw ie.create("already-initialized")}n.initialize({options:e})}(t)}(eo);const no=function(t=Z()){return Y(t,"firestore").getImmediate()}(eo);function io(){}function so(t){return t()}function ro(){return Object.create(null)}function oo(t){t.forEach(so)}function ao(t){return"function"==typeof t}function ho(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let co,lo;function uo(t,e){return co||(co=document.createElement("a")),co.href=e,t===co.href}function fo(t,e){t.appendChild(e)}function po(t,e,n){t.insertBefore(e,n||null)}function go(t){t.parentNode.removeChild(t)}function mo(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function yo(t){return document.createElement(t)}function vo(t){return document.createTextNode(t)}function bo(){return vo(" ")}function wo(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Io(t){lo=t}function Eo(){if(!lo)throw new Error("Function called outside component initialization");return lo}const To=[],Co=[],So=[],Ao=[],Do=Promise.resolve();let _o=!1;function ko(t){So.push(t)}const $o=new Set;let Po=0;function Oo(){const t=lo;do{for(;Po<To.length;){const t=To[Po];Po++,Io(t),jo(t.$$)}for(Io(null),To.length=0,Po=0;Co.length;)Co.pop()();for(let t=0;t<So.length;t+=1){const e=So[t];$o.has(e)||($o.add(e),e())}So.length=0}while(To.length);for(;Ao.length;)Ao.pop()();_o=!1,$o.clear(),Io(t)}function jo(t){if(null!==t.fragment){t.update(),oo(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ko)}}const Lo=new Set;let Mo;function Ro(){Mo={r:0,c:[],p:Mo}}function xo(){Mo.r||oo(Mo.c),Mo=Mo.p}function No(t,e){t&&t.i&&(Lo.delete(t),t.i(e))}function Fo(t,e,n,i){if(t&&t.o){if(Lo.has(t))return;Lo.add(t),Mo.c.push((()=>{Lo.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}else i&&i()}function Bo(t,e){const n=e.token={};function i(t,i,s,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==s&&(o=o.slice(),o[s]=r);const a=t&&(e.current=t)(o);let h=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==i&&t&&(Ro(),Fo(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),xo())})):e.block.d(1),a.c(),No(a,1),a.m(e.mount(),e.anchor),h=!0),e.block=a,e.blocks&&(e.blocks[i]=a),h&&Oo()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=Eo();if(t.then((t=>{Io(n),i(e.then,1,e.value,t),Io(null)}),(t=>{if(Io(n),i(e.catch,2,e.error,t),Io(null),!e.hasCatch)throw t})),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}var s}function Ho(t){t&&t.c()}function Uo(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||ko((()=>{const e=r.map(so).filter(ao);o?o.push(...e):oo(e),t.$$.on_mount=[]})),a.forEach(ko)}function zo(t,e){const n=t.$$;null!==n.fragment&&(oo(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qo(t,e){-1===t.$$.dirty[0]&&(To.push(t),_o||(_o=!0,Do.then(Oo)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Vo(t,e,n,i,s,r,o,a=[-1]){const h=lo;Io(t);const c=t.$$={fragment:null,ctx:null,props:r,update:io,not_equal:s,bound:ro(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:ro(),dirty:a,skip_bound:!1,root:e.target||h.$$.root};o&&o(c.root);let l=!1;if(c.ctx=n?n(t,e.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return c.ctx&&s(c.ctx[e],c.ctx[e]=r)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](r),l&&qo(t,e)),n})):[],c.update(),l=!0,oo(c.before_update),c.fragment=!!i&&i(c.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);c.fragment&&c.fragment.l(t),t.forEach(go)}else c.fragment&&c.fragment.c();e.intro&&No(t.$$.fragment),Uo(t,e.target,e.anchor,e.customElement),Oo()}Io(h)}class Go{$destroy(){zo(this,1),this.$destroy=io}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ko=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()],Xo=(t,e,n)=>new Date(n,e-1,t),Wo=(t,e="/",n=!1)=>{const[i,s,r]=Ko(t).map((t=>`${t}`)),o=[i.padStart(2,"0"),s.padStart(2,"0"),r];return(n?o.reverse():o).join(e)};var Yo={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png","2022-03-03":"spin.png","2022-03-08":"physics mark.png","2022-03-16":"core prac..png","2022-03-23":"copper.png","2022-05-04":"A level.png","2022-05-05":"studying.png","2022-05-06":"Newton's III.png","2022-05-26":"physics 1 flashbacks.png","2022-05-27":"capacitors.jpg","2022-05-28":"diodes.jpg","2022-06-07":"cheese.png","2022-06-10":"wrapped.png","2022-06-11":"USB.png","2022-06-14":"Ferris.png","2022-06-16":"chicken.png"}};const Jo={},Qo=new Set,Zo=Xo(1,9,2021),ta=t=>new Promise((e=>setTimeout(e,1e3*t))),ea=(t,e,n)=>{const[,i,s]=Ko(t);return i===e&&s===n},na=(t,e)=>{const n=Xo(1,e,t),i=new Date,s=Ko(i)[2];return Zo<=n&&t<=s},ia=async(t,e)=>{const n=new Array(((t,e)=>new Date(t,e,0).getDate())(t,e)).fill(null).map(((t,e)=>e+1)),i={};for(const s of n){const n=Xo(s,e,t),r=Wo(n,"-",!0),o=Yo.otd[r];ea(n,e,t)&&o&&(i[s]=o)}return await ta(2),i},sa=async(t,e,n)=>{if(!na(t,e))return null;const i=`${t}-${`${e}`.padStart(2,"0")}`;if(Qo.has(i))return await ta(1),ra(t,e);console.count(i),console.count("DB reads"),Qo.add(i),console.log(Qo,Jo);const s=await ia(t,e);return((t,e,n)=>{Jo[t]||(Jo[t]={}),Jo[t][e]=n})(t,e,s),Qo.delete(i),console.log(Qo,Jo),s},ra=(t,e)=>{try{return Jo[t][e]}catch(t){console.count("Cache errors")}},oa=async(t,e,n=0)=>{if(!t)return null;if(n>=12)throw new Error("DB recursion");const[i,s,r]=Ko(t);if(!na(r,s))return null;try{return Jo[r][s][i]}catch(t){console.count("Cache errors")}return await((t,e,n)=>{var i;return null!==(i=ra(t,e))&&void 0!==i?i:sa(t,e)})(r,s),oa(t,e,n+1)};function aa(t){let e,n,i,s;return{c(){e=yo("span"),n=yo("a"),i=vo(t[0]),wo(n,"class","hover:underline"),wo(n,"href",s=`pdf/${t[1]}.pdf`),wo(e,"class","flex-1 basis-1/4 pt-2 pb-8")},m(t,s){po(t,e,s),fo(e,n),fo(n,i)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,t[0]),2&e&&s!==(s=`pdf/${t[1]}.pdf`)&&wo(n,"href",s)},i:io,o:io,d(t){t&&go(e)}}}function ha(t,e,n){let{name:i}=e,{path:s}=e;return t.$$set=t=>{"name"in t&&n(0,i=t.name),"path"in t&&n(1,s=t.path)},[i,s]}class ca extends Go{constructor(t){super(),Vo(this,t,ha,aa,ho,{name:0,path:1})}}function la(t){let e;return{c(){e=yo("header"),e.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',wo(e,"class","my-8 flex")},m(t,n){po(t,e,n)},p:io,i:io,o:io,d(t){t&&go(e)}}}class ua extends Go{constructor(t){super(),Vo(this,t,null,la,ho,{})}}function fa(t){let e;return{c(){e=yo("p"),e.textContent="It's loading, bro..."},m(t,n){po(t,e,n)},p:io,i:io,o:io,d(t){t&&go(e)}}}class pa extends Go{constructor(t){super(),Vo(this,t,null,fa,ho,{})}}function da(t){let e,n;return{c(){e=yo("p"),n=vo("No meme today :( ... Send suggestions"),wo(e,"class",`${ya} text-center`)},m(t,i){po(t,e,i),fo(e,n)},p:io,d(t){t&&go(e)}}}function ga(t){let e,n;return{c(){e=yo("img"),wo(e,"class",ya),uo(e.src,n=`memes/${t[0]}`)||wo(e,"src",n),wo(e,"alt","Meme")},m(t,n){po(t,e,n)},p(t,i){1&i&&!uo(e.src,n=`memes/${t[0]}`)&&wo(e,"src",n)},d(t){t&&go(e)}}}function ma(t){let e;function n(t,e){return t[0]?ga:da}let i=n(t),s=i(t);return{c(){s.c(),e=vo("")},m(t,n){s.m(t,n),po(t,e,n)},p(t,[r]){i===(i=n(t))&&s?s.p(t,r):(s.d(1),s=i(t),s&&(s.c(),s.m(e.parentNode,e)))},i:io,o:io,d(t){s.d(t),t&&go(e)}}}const ya="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";function va(t,e,n){let{src:i}=e;return t.$$set=t=>{"src"in t&&n(0,i=t.src)},[i]}class ba extends Go{constructor(t){super(),Vo(this,t,va,ma,ho,{src:0})}}function wa(t,e,n){const i=t.slice();return i[7]=e[n],i}function Ia(t,e,n){const i=t.slice();return i[10]=e[n],i}function Ea(t,e,n){const i=t.slice();return i[10]=e[n],i}function Ta(t){let e,n;return e=new ca({props:{name:t[10],path:`maths/${t[10]}`}}),{c(){Ho(e.$$.fragment)},m(t,i){Uo(e,t,i),n=!0},p:io,i(t){n||(No(e.$$.fragment,t),n=!0)},o(t){Fo(e.$$.fragment,t),n=!1},d(t){zo(e,t)}}}function Ca(t){let e,n;return e=new ca({props:{name:t[10],path:`maths/${t[10]}`}}),{c(){Ho(e.$$.fragment)},m(t,i){Uo(e,t,i),n=!0},p:io,i(t){n||(No(e.$$.fragment,t),n=!0)},o(t){Fo(e.$$.fragment,t),n=!1},d(t){zo(e,t)}}}function Sa(t){let e,n;return e=new ca({props:{name:t[7],path:`physics/${t[7].toLowerCase().split(" ").join("_")}_GBD`}}),{c(){Ho(e.$$.fragment)},m(t,i){Uo(e,t,i),n=!0},p:io,i(t){n||(No(e.$$.fragment,t),n=!0)},o(t){Fo(e.$$.fragment,t),n=!1},d(t){zo(e,t)}}}function Aa(t){return{c:io,m:io,p:io,i:io,o:io,d:io}}function Da(t){let e,n;return e=new ba({props:{src:t[6]}}),{c(){Ho(e.$$.fragment)},m(t,i){Uo(e,t,i),n=!0},p:io,i(t){n||(No(e.$$.fragment,t),n=!0)},o(t){Fo(e.$$.fragment,t),n=!1},d(t){zo(e,t)}}}function _a(t){let e,n;return e=new pa({}),{c(){Ho(e.$$.fragment)},m(t,i){Uo(e,t,i),n=!0},p:io,i(t){n||(No(e.$$.fragment,t),n=!0)},o(t){Fo(e.$$.fragment,t),n=!1},d(t){zo(e,t)}}}function ka(t){let e,n,i,s,r,o,a,h,c,l,u,f,p,d,g,m,y,v,b,w,I,E,T,C,S,A,D,_,k,$,P,O,j,L,M,R,x,N,F,B;e=new ua({});let H=t[1],U=[];for(let e=0;e<H.length;e+=1)U[e]=Ta(Ea(t,H,e));const z=t=>Fo(U[t],1,1,(()=>{U[t]=null}));let q=t[2],V=[];for(let e=0;e<q.length;e+=1)V[e]=Ca(Ia(t,q,e));const G=t=>Fo(V[t],1,1,(()=>{V[t]=null}));let K=t[3],X=[];for(let e=0;e<K.length;e+=1)X[e]=Sa(wa(t,K,e));const W=t=>Fo(X[t],1,1,(()=>{X[t]=null}));D=new ca({props:{name:"Physics Year 2",path:"physics/Physics Year 2"}}),k=new ca({props:{name:"PiP",path:"physics/PiP"}});let Y={ctx:t,current:null,token:null,hasCatch:!1,pending:_a,then:Da,catch:Aa,value:6,blocks:[,,,]};return Bo(t[0],Y),{c(){Ho(e.$$.fragment),n=bo(),i=yo("main"),s=yo("h2"),s.textContent="Maths",r=bo(),o=yo("div");for(let t=0;t<U.length;t+=1)U[t].c();a=bo(),h=yo("hr"),c=bo(),l=yo("h2"),l.textContent="Further Maths",u=bo(),f=yo("div");for(let t=0;t<V.length;t+=1)V[t].c();p=bo(),d=yo("p"),d.textContent="The year 1 pure and stats are dodgy older versions but I'll fix them soon.",g=bo(),m=yo("hr"),y=bo(),v=yo("h2"),v.textContent="GBD Booklets",b=bo(),w=yo("div");for(let t=0;t<X.length;t+=1)X[t].c();I=bo(),E=yo("hr"),T=bo(),C=yo("h2"),C.textContent="Physics",S=bo(),A=yo("div"),Ho(D.$$.fragment),_=bo(),Ho(k.$$.fragment),$=bo(),P=yo("hr"),O=bo(),j=yo("section"),L=yo("h2"),L.textContent="Meme of the Day",M=bo(),Y.block.c(),R=bo(),x=yo("p"),x.innerHTML='<a class="hover:underline" href="archive.html">Meme Archive</a>',N=bo(),F=yo("footer"),wo(o,"class","book-section"),wo(f,"class","book-section"),wo(d,"class","epilogue"),wo(w,"class","book-section"),wo(A,"class","book-section"),wo(x,"class","epilogue"),wo(j,"id","otd")},m(t,H){Uo(e,t,H),po(t,n,H),po(t,i,H),fo(i,s),fo(i,r),fo(i,o);for(let t=0;t<U.length;t+=1)U[t].m(o,null);fo(i,a),fo(i,h),fo(i,c),fo(i,l),fo(i,u),fo(i,f);for(let t=0;t<V.length;t+=1)V[t].m(f,null);fo(i,p),fo(i,d),fo(i,g),fo(i,m),fo(i,y),fo(i,v),fo(i,b),fo(i,w);for(let t=0;t<X.length;t+=1)X[t].m(w,null);fo(i,I),fo(i,E),fo(i,T),fo(i,C),fo(i,S),fo(i,A),Uo(D,A,null),fo(A,_),Uo(k,A,null),po(t,$,H),po(t,P,H),po(t,O,H),po(t,j,H),fo(j,L),fo(j,M),Y.block.m(j,Y.anchor=null),Y.mount=()=>j,Y.anchor=R,fo(j,R),fo(j,x),po(t,N,H),po(t,F,H),B=!0},p(e,[n]){if(t=e,2&n){let e;for(H=t[1],e=0;e<H.length;e+=1){const i=Ea(t,H,e);U[e]?(U[e].p(i,n),No(U[e],1)):(U[e]=Ta(i),U[e].c(),No(U[e],1),U[e].m(o,null))}for(Ro(),e=H.length;e<U.length;e+=1)z(e);xo()}if(4&n){let e;for(q=t[2],e=0;e<q.length;e+=1){const i=Ia(t,q,e);V[e]?(V[e].p(i,n),No(V[e],1)):(V[e]=Ca(i),V[e].c(),No(V[e],1),V[e].m(f,null))}for(Ro(),e=q.length;e<V.length;e+=1)G(e);xo()}if(8&n){let e;for(K=t[3],e=0;e<K.length;e+=1){const i=wa(t,K,e);X[e]?(X[e].p(i,n),No(X[e],1)):(X[e]=Sa(i),X[e].c(),No(X[e],1),X[e].m(w,null))}for(Ro(),e=K.length;e<X.length;e+=1)W(e);xo()}!function(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}(Y,t,n)},i(t){if(!B){No(e.$$.fragment,t);for(let t=0;t<H.length;t+=1)No(U[t]);for(let t=0;t<q.length;t+=1)No(V[t]);for(let t=0;t<K.length;t+=1)No(X[t]);No(D.$$.fragment,t),No(k.$$.fragment,t),No(Y.block),B=!0}},o(t){Fo(e.$$.fragment,t),U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)Fo(U[t]);V=V.filter(Boolean);for(let t=0;t<V.length;t+=1)Fo(V[t]);X=X.filter(Boolean);for(let t=0;t<X.length;t+=1)Fo(X[t]);Fo(D.$$.fragment,t),Fo(k.$$.fragment,t);for(let t=0;t<3;t+=1){Fo(Y.blocks[t])}B=!1},d(t){zo(e,t),t&&go(n),t&&go(i),mo(U,t),mo(V,t),mo(X,t),zo(D),zo(k),t&&go($),t&&go(P),t&&go(O),t&&go(j),Y.block.d(),Y.token=null,Y=null,t&&go(N),t&&go(F)}}}function $a(t,e,n){let{db:i}=e;const s=new Date,r=oa(s,i);return t.$$set=t=>{"db"in t&&n(4,i=t.db)},[r,["Pure Year 1","Pure Year 2","Applied Year 1","Applied Year 2"],["Further Mech","Further Pure Year 1","Further Pure Year 2","Further Stats"],["Gravitational Fields","Circular Motion","Electric Fields","Simple Harmonic Motion","Capacitors","Thermal Physics","Magnetism","Nuclear Physics","Radioactivity","Astrophysics"],i]}return new class extends Go{constructor(t){super(),Vo(this,t,$a,ka,ho,{db:4})}}({target:document.body,props:{db:no}})}();
//# sourceMappingURL=index.js.map
