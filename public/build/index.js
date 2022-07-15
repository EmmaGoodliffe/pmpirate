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
     */const e=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=a>>2,u=(3&a)<<4|o>>4;let h=(15&o)<<2|c>>6,p=63&c;s||(p=64,i||(h=64)),r.push(n[l],n[u],n[h],n[p])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==o||null==s)throw Error();const c=a<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},n=function(n){return function(n){const r=e(n);return t.encodeByteArray(r,!0)}(n).replace(/\./g,"")};
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
class r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function a(){return"object"==typeof indexedDB}function i(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,s.prototype.create)}}class s{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(c,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(a,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new o(r,s,n)}}const c=/\{\$([^}]+)}/g;function l(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(u(n)&&u(i)){if(!l(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function u(e){return null!==e&&"object"==typeof e}
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
     */function h(e,t=1e3,n=2){const r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+a)}
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
     */function p(e){return e&&e._delegate?e._delegate:e}class d{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const f="[DEFAULT]";
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
     */class g{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:f})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===f?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:f:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class m{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new g(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var b;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(b||(b={}));const w={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},y=b.INFO,v={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},I=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=v[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class ${constructor(e){this.name=e,this._logLevel=y,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}let E,C;const D=new WeakMap,S=new WeakMap,_=new WeakMap,A=new WeakMap,T=new WeakMap;let k={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return S.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function M(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(C||(C=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(P(this),t),j(D.get(this))}:function(...t){return j(e.apply(P(this),t))}:function(t,...n){const r=e.call(P(this),t,...n);return _.set(r,t.sort?t.sort():[t]),j(r)}}function O(e){return"function"==typeof e?M(e):(e instanceof IDBTransaction&&function(e){if(S.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));S.set(e,t)}(e),t=e,(E||(E=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,k):e);var t}function j(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(j(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&D.set(t,e)})).catch((()=>{})),T.set(t,e),t}(e);if(A.has(e))return A.get(e);const t=O(e);return t!==e&&(A.set(e,t),T.set(t,e)),t}const P=e=>T.get(e);function B(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=j(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(j(o.result),e.oldVersion,e.newVersion,j(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}const L=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],N=new Map;function F(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(N.get(t))return N.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!L.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return N.set(t,i),i}k=(e=>({...e,get:(t,n,r)=>F(t,n)||e.get(t,n,r),has:(t,n)=>!!F(t,n)||e.has(t,n)}))(k);
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
class H{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const R="@firebase/app",z="0.7.28",V=new $("@firebase/app"),U="[DEFAULT]",q={[R]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},W=new Map,G=new Map;function K(e,t){try{e.container.addComponent(t)}catch(n){V.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Y(e){const t=e.name;if(G.has(t))return V.debug(`There were multiple attempts to register component ${t}.`),!1;G.set(t,e);for(const t of W.values())K(t,e);return!0}function X(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
     */const J=new s("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Q{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new d("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}function Z(e,t,n){var r;let a=null!==(r=q[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void V.warn(e.join(" "))}Y(new d(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}
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
     */const ee="firebase-heartbeat-store";let te=null;function ne(){return te||(te=B("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ee)}}).catch((e=>{throw J.create("storage-open",{originalErrorMessage:e.message})}))),te}async function re(e,t){var n;try{const n=(await ne()).transaction(ee,"readwrite"),r=n.objectStore(ee);return await r.put(t,ae(e)),n.done}catch(e){throw J.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function ae(e){return`${e.name}!${e.options.appId}`}
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
     */class ie{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new se(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=oe(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),ce(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ce(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),a=n(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function oe(){return(new Date).toISOString().substring(0,10)}class se{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!a()&&i().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await ne()).transaction(ee).objectStore(ee).get(ae(e))}catch(e){throw J.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ce(e){return n(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var le;le="",Y(new d("platform-logger",(e=>new H(e)),"PRIVATE")),Y(new d("heartbeat",(e=>new ie(e)),"PRIVATE")),Z(R,z,le),Z(R,z,"esm2017"),Z("fire-js","");const ue="@firebase/installations",he="0.5.12",pe=1e4,de="w:0.5.12",fe="FIS_v2",ge=36e5,me=new s("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function be(e){return e instanceof o&&e.code.includes("request-failed")}
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
     */function we({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ye(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function ve(e,t){const n=(await t.json()).error;return me.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ie({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $e(e,{refreshToken:t}){const n=Ie(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function Ee(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function Ce(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const De=/^[cdef][\w-]{21}$/;function Se(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return De.test(t)?t:""}catch(e){return""}}function _e(e){return`${e.appName}!${e.appId}`}
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
     */const Ae=new Map;function Te(e,t){const n=_e(e);ke(n,t),function(e,t){const n=function(){!Me&&"BroadcastChannel"in self&&(Me=new BroadcastChannel("[Firebase] FID Change"),Me.onmessage=e=>{ke(e.data.key,e.data.fid)});return Me}();n&&n.postMessage({key:e,fid:t});0===Ae.size&&Me&&(Me.close(),Me=null)}(n,t)}function ke(e,t){const n=Ae.get(e);if(n)for(const e of n)e(t)}let Me=null;
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
const Oe="firebase-installations-store";let je=null;function Pe(){return je||(je=B("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Oe)}})),je}async function Be(e,t){const n=_e(e),r=(await Pe()).transaction(Oe,"readwrite"),a=r.objectStore(Oe),i=await a.get(n);return await a.put(t,n),await r.done,i&&i.fid===t.fid||Te(e,t.fid),t}async function Le(e){const t=_e(e),n=(await Pe()).transaction(Oe,"readwrite");await n.objectStore(Oe).delete(t),await n.done}async function xe(e,t){const n=_e(e),r=(await Pe()).transaction(Oe,"readwrite"),a=r.objectStore(Oe),i=await a.get(n),o=t(i);return void 0===o?await a.delete(n):await a.put(o,n),await r.done,!o||i&&i.fid===o.fid||Te(e,o.fid),o}
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
     */async function Ne(e){let t;const n=await xe(e.appConfig,(n=>{const r=function(e){return Re(e||{fid:Se(),registrationStatus:0})}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(me.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=we(e),a=Ie(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={fid:n,authVersion:fe,appId:e.appId,sdkVersion:de},s={method:"POST",headers:a,body:JSON.stringify(o)},c=await Ee((()=>fetch(r,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:ye(e.authToken)}}throw await ve("Create Installation",c)}(e,t);return Be(e.appConfig,n)}catch(n){throw be(n)&&409===n.customData.serverCode?await Le(e.appConfig):await Be(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Fe(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Fe(e){let t=await He(e.appConfig);for(;1===t.registrationStatus;)await Ce(100),t=await He(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ne(e);return n||t}return t}function He(e){return xe(e,(e=>{if(!e)throw me.create("installation-not-found");return Re(e)}))}function Re(e){return 1===(t=e).registrationStatus&&t.registrationTime+pe<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function ze({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${we(e)}/${t}/authTokens:generate`}
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
     */(e,n),a=$e(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={installation:{sdkVersion:de,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},c=await Ee((()=>fetch(r,s)));if(c.ok){return ye(await c.json())}throw await ve("Generate Auth Token",c)}async function Ve(e,t=!1){let n;const r=await xe(e.appConfig,(r=>{if(!qe(r))throw me.create("not-registered");const a=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ge}(e)}(a))return r;if(1===a.requestStatus)return n=async function(e,t){let n=await Ue(e.appConfig);for(;1===n.authToken.requestStatus;)await Ce(100),n=await Ue(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Ve(e,t):r}(e,t),r;{if(!navigator.onLine)throw me.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await ze(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Be(e.appConfig,r),n}catch(n){if(!be(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Be(e.appConfig,n)}else await Le(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Ue(e){return xe(e,(e=>{if(!qe(e))throw me.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+pe<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function qe(e){return void 0!==e&&2===e.registrationStatus}
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
async function We(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Ne(e);t&&await t}
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
     */(n);return(await Ve(n,t)).token}function Ge(e){return me.create("missing-app-config-values",{valueName:e})}
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
     */const Ke="installations",Ye=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Ge("App Configuration");if(!e.name)throw Ge("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ge(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:X(t,"heartbeat"),_delete:()=>Promise.resolve()}},Xe=e=>{const t=X(e.getProvider("app").getImmediate(),Ke).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ne(t);return r?r.catch(console.error):Ve(t).catch(console.error),n.fid}(t),getToken:e=>We(t,e)}};Y(new d(Ke,Ye,"PUBLIC")),Y(new d("installations-internal",Xe,"PRIVATE")),Z(ue,he),Z(ue,he,"esm2017");
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
const Je="analytics",Qe="https://www.googletagmanager.com/gtag/js",Ze=new $("@firebase/analytics");
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
function et(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function tt(e,t,n,r){return async function(a,i,o){try{"event"===a?await async function(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let e=a.send_to;Array.isArray(e)||(e=[e]);const r=await et(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),a=e&&t[e.appId];if(!a){i=[];break}i.push(a)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(e){Ze.error(e)}}(e,t,n,i,o):"config"===a?await async function(e,t,n,r,a,i){const o=r[a];try{if(o)await t[o];else{const e=(await et(n)).find((e=>e.measurementId===a));e&&await t[e.appId]}}catch(e){Ze.error(e)}e("config",a,i)}(e,t,n,r,i,o):"consent"===a?e("consent","update",o):e("set",i)}catch(e){Ze.error(e)}}}
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
const nt=new s("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const rt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function at(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function it(e,t=rt,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw nt.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw nt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new st;return setTimeout((async()=>{s.abort()}),void 0!==n?n:6e4),ot({appId:r,apiKey:a,measurementId:i},o,s,t)}async function ot(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=rt){var i,s;const{appId:c,measurementId:l}=e;try{await function(e,t){return new Promise(((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((()=>{clearTimeout(i),r(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===(i=e)||void 0===i?void 0:i.message}]`),{appId:c,measurementId:l};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:at(r)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(i,a);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return a.deleteThrottleMetadata(c),t}catch(t){const i=t;if(!function(e){if(!(e instanceof o&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(i)){if(a.deleteThrottleMetadata(c),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null==i?void 0:i.message}]`),{appId:c,measurementId:l};throw t}const u=503===Number(null===(s=null==i?void 0:i.customData)||void 0===s?void 0:s.httpStatus)?h(n,a.intervalMillis,30):h(n,a.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return a.setThrottleMetadata(c,p),Ze.debug(`Calling attemptFetch again in ${u} millis`),ot(e,p,r,a)}}class st{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function ct(e,t,n,r,o,s,c){var l;const u=it(e);u.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ze.error(e))),t.push(u);const h=
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
async function(){var e;if(!a())return Ze.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await i()}catch(t){return Ze.warn(nt.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[p,d]=await Promise.all([u,h]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Qe))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Qe}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,p.measurementId),o("js",new Date);const f=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{};return f.origin="firebase",f.update=!0,null!=d&&(f.firebase_id=d),o("config",p.measurementId,f),p.measurementId}
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
     */class lt{constructor(e){this.app=e}_delete(){return delete ut[this.app.options.appId],Promise.resolve()}}let ut={},ht=[];const pt={};let dt,ft,gt="dataLayer",mt=!1;function bt(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:t});Ze.warn(n.message)}}function wt(e,t,n){bt();const r=e.options.appId;if(!r)throw nt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw nt.create("no-api-key");Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ut[r])throw nt.create("already-exists",{id:r});if(!mt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(gt);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,a){let i=function(...e){window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(i=window[a]),window[a]=tt(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}(ut,ht,pt,gt,"gtag");ft=e,dt=t,mt=!0}ut[r]=ct(e,ht,pt,t,dt,gt,n);return new lt(e)}function yt(e,t,n,r){e=p(e),async function(e,t,n,r,a){if(a&&a.global)e("event",n,r);else{const a=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:a}))}}(ft,ut[e.app.options.appId],t,n,r).catch((e=>Ze.error(e)))}const vt="@firebase/analytics",It="0.8.0";Y(new d(Je,((e,{options:t})=>wt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Y(new d("analytics-internal",(function(e){try{const t=e.getProvider(Je).getImmediate();return{logEvent:(e,n,r)=>yt(t,e,n,r)}}catch(e){throw nt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Z(vt,It),Z(vt,It,"esm2017");
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
Z("firebase","9.9.0","app");const $t=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:U,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw J.create("bad-app-name",{appName:String(r)});const a=W.get(r);if(a){if(l(e,a.options)&&l(n,a.config))return a;throw J.create("duplicate-app",{appName:r})}const i=new m(r);for(const e of G.values())i.addComponent(e);const o=new Q(e,n,i);return W.set(r,o),o}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});function Et(){}function Ct(e){return e()}function Dt(){return Object.create(null)}function St(e){e.forEach(Ct)}function _t(e){return"function"==typeof e}function At(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let Tt,kt;function Mt(e,t){return Tt||(Tt=document.createElement("a")),Tt.href=t,e===Tt.href}function Ot(e,t){e.appendChild(t)}function jt(e,t,n){e.insertBefore(t,n||null)}function Pt(e){e.parentNode.removeChild(e)}function Bt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Lt(e){return document.createElement(e)}function xt(e){return document.createTextNode(e)}function Nt(){return xt(" ")}function Ft(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ht(e){kt=e}!function(e=function(e="[DEFAULT]"){const t=W.get(e);if(!t)throw J.create("no-app",{appName:e});return t}()){const t=X(e=p(e),Je);t.isInitialized()?t.getImmediate():function(e,t={}){const n=X(e,Je);if(n.isInitialized()){const e=n.getImmediate();if(l(t,n.getOptions()))return e;throw nt.create("already-initialized")}n.initialize({options:t})}(e)}($t);const Rt=[],zt=[],Vt=[],Ut=[],qt=Promise.resolve();let Wt=!1;function Gt(e){Vt.push(e)}let Kt=!1;const Yt=new Set;function Xt(){if(!Kt){Kt=!0;do{for(let e=0;e<Rt.length;e+=1){const t=Rt[e];Ht(t),Jt(t.$$)}for(Ht(null),Rt.length=0;zt.length;)zt.pop()();for(let e=0;e<Vt.length;e+=1){const t=Vt[e];Yt.has(t)||(Yt.add(t),t())}Vt.length=0}while(Rt.length);for(;Ut.length;)Ut.pop()();Wt=!1,Kt=!1,Yt.clear()}}function Jt(e){if(null!==e.fragment){e.update(),St(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Gt)}}const Qt=new Set;let Zt;function en(){Zt={r:0,c:[],p:Zt}}function tn(){Zt.r||St(Zt.c),Zt=Zt.p}function nn(e,t){e&&e.i&&(Qt.delete(e),e.i(t))}function rn(e,t,n,r){if(e&&e.o){if(Qt.has(e))return;Qt.add(e),Zt.c.push((()=>{Qt.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function an(e){e&&e.c()}function on(e,t,n,r){const{fragment:a,on_mount:i,on_destroy:o,after_update:s}=e.$$;a&&a.m(t,n),r||Gt((()=>{const t=i.map(Ct).filter(_t);o?o.push(...t):St(t),e.$$.on_mount=[]})),s.forEach(Gt)}function sn(e,t){const n=e.$$;null!==n.fragment&&(St(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function cn(e,t){-1===e.$$.dirty[0]&&(Rt.push(e),Wt||(Wt=!0,qt.then(Xt)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ln(e,t,n,r,a,i,o,s=[-1]){const c=kt;Ht(e);const l=e.$$={fragment:null,ctx:null,props:i,update:Et,not_equal:a,bound:Dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Dt(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return l.ctx&&a(l.ctx[t],l.ctx[t]=i)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](i),u&&cn(e,t)),n})):[],l.update(),u=!0,St(l.before_update),l.fragment=!!r&&r(l.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);l.fragment&&l.fragment.l(e),e.forEach(Pt)}else l.fragment&&l.fragment.c();t.intro&&nn(e.$$.fragment),on(e,t.target,t.anchor,t.customElement),Xt()}Ht(c)}class un{$destroy(){sn(this,1),this.$destroy=Et}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hn=e=>{const t=parseInt(e);if(!isNaN(t))return t;return["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(e)+1},pn=e=>[e.getDate(),e.getMonth()+1,e.getFullYear()],dn=(e,t,n)=>new Date(n,t-1,e),fn=e=>{const t=`${e}`;return t.length<=2?fn("20"+t.padStart(2,"0")):3===t.length?null:parseInt(t)};var gn={otd:{"2021-10-12":"mugs.png","2021-10-13":"you three.jpg","2021-10-14":"Gebreamlak.png","2021-10-15":"integration.png","2021-10-16":"slaps.png","2021-10-17":"trains.jpg","2021-10-18":"engineers.jpg","2021-10-19":"uncertainty.jpg","2021-10-20":"LHC.jpg","2021-10-21":"xi.jpg","2021-10-22":"crossover.jpg","2021-10-23":"HDMI.jpg","2021-11-05":"drink.png","2021-11-06":"boxes.png","2021-11-09":"F1.png","2021-11-10":"dates.png","2021-11-11":"interviews.png","2021-11-15":"planes.jpg","2021-11-16":"1i.jpg","2021-11-17":"pure 2.png","2021-11-24":"air resistance.jpg","2021-11-25":"obvious.jpg","2021-12-25":"xmas.jpg","2022-01-09":"Coulomb.png","2022-01-13":"bon appetit.png","2022-01-14":"Friday.png","2022-01-17":"speed.png","2022-01-25":"stability.png","2022-02-01":"ethane.png","2022-02-02":"birthday.png","2022-02-03":"k.jpg","2022-02-04":"Le Chatelier.png","2022-02-05":"2nd order ODE.png","2022-02-07":"expansion.png","2022-02-08":"cuts.png","2022-03-03":"spin.png","2022-03-08":"physics mark.png","2022-03-16":"core prac..png","2022-03-23":"copper.png","2022-05-04":"A level.png","2022-05-05":"studying.png","2022-05-06":"Newton's III.png","2022-05-26":"physics 1 flashbacks.png","2022-05-27":"capacitors.jpg","2022-05-28":"diodes.jpg","2022-06-07":"cheese.png","2022-06-10":"wrapped.png","2022-06-11":"USB.png","2022-06-14":"Ferris.png","2022-06-16":"chicken.png"}};const mn={},bn=dn(1,9,2021),wn=(e,t,n)=>{const r=(e=>{const t=new Date,n=["/","-","."];for(const t of n){const[n,r,a]=e.split(t).map(hn),i=dn(n,r,fn(a));if(n<=31&&"Invalid Date"!=`${i}`)return i}for(const t of n){const[n,r,a]=e.split(t).map(hn),i=dn(a,r,fn(n));if("Invalid Date"!=`${i}`)return i}const r=new Date(e);return"Invalid Date"!=`${r}`?r:t})(e),a=r<=new Date,[,i,o]=pn(r);return a&&i===t&&o===n},yn=(e,t)=>{const n=dn(1,t,e),r=pn(new Date)[2];return bn<=n&&e<=r},vn=(e,t)=>{if(!yn(e,t))return null;console.count(`${e}-${t}`),console.count("DB reads");const n=new Array(((e,t)=>new Date(e,t,0).getDate())(e,t)).fill(null).map(((n,r)=>{const a=dn(r+1,t,e),i=((e,t="/",n=!1)=>{const[r,a,i]=pn(e).map((e=>`${e}`)),o=[r.padStart(2,"0"),a.padStart(2,"0"),i];return(n?o.reverse():o).join(t)})(a,"-",!0),o=gn.otd[i]&&`memes/${gn.otd[i]}`;return{date:a,meme:wn(i,t,e)&&o?o:null}}));return(e=>{const[,t,n]=pn(e[0].date);mn[n]||(mn[n]={});const r=e.map((e=>{const[r,a,i]=pn(e.date);if(a!==t||i!==n)throw new Error(`Expected ${a} and ${t} to be equal, as well as ${i} and ${n}`);return r})),a=e.map((e=>e.meme)),i={};for(let e=0;e<r.length;e++){const t=r[e],n=a[e];i[t]=n}mn[n][t]=i})(n),n},In=(e,t)=>{var n;return null!==(n=((e,t)=>{try{const n=mn[e][t];if(n)return Object.keys(n).map((r=>{const a=parseInt(r),i=n[a];return{date:dn(a,t,e),meme:i}}))}catch(e){console.log("Quelled cache error")}})(e,t))&&void 0!==n?n:vn(e,t)},$n=e=>{const[t,n,r]=pn(e);if(!yn(r,n))return null;try{const e=mn[r][n][t];if(void 0!==e)return e}catch(e){console.log("Quelled cache error")}return In(r,n),$n(e)};function En(e){let t,n,r,a;return{c(){t=Lt("span"),n=Lt("a"),r=xt(e[0]),Ft(n,"class","hover:underline"),Ft(n,"href",a=`pdf/${e[1]}.pdf`),Ft(t,"class","flex-1 basis-1/4 pt-2 pb-8")},m(e,a){jt(e,t,a),Ot(t,n),Ot(n,r)},p(e,[t]){1&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(r,e[0]),2&t&&a!==(a=`pdf/${e[1]}.pdf`)&&Ft(n,"href",a)},i:Et,o:Et,d(e){e&&Pt(t)}}}function Cn(e,t,n){let{name:r}=t,{path:a}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"path"in e&&n(1,a=e.path)},[r,a]}class Dn extends un{constructor(e){super(),ln(this,e,Cn,En,At,{name:0,path:1})}}function Sn(e){let t;return{c(){t=Lt("header"),t.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',Ft(t,"class","my-8 flex")},m(e,n){jt(e,t,n)},p:Et,i:Et,o:Et,d(e){e&&Pt(t)}}}class _n extends un{constructor(e){super(),ln(this,e,null,Sn,At,{})}}function An(e){let t,n;return{c(){t=Lt("p"),n=xt("No meme today :( ... Send suggestions"),Ft(t,"class",`${Mn} text-center`)},m(e,r){jt(e,t,r),Ot(t,n)},p:Et,d(e){e&&Pt(t)}}}function Tn(e){let t,n;return{c(){t=Lt("img"),Ft(t,"class",Mn),Mt(t.src,n=e[0])||Ft(t,"src",n),Ft(t,"alt","Meme")},m(e,n){jt(e,t,n)},p(e,r){1&r&&!Mt(t.src,n=e[0])&&Ft(t,"src",n)},d(e){e&&Pt(t)}}}function kn(e){let t,n,r;function a(e,t){return e[0]?Tn:An}let i=a(e),o=i(e);return{c(){t=Lt("h2"),t.textContent="Meme of the Day",n=Nt(),o.c(),r=xt("")},m(e,a){jt(e,t,a),jt(e,n,a),o.m(e,a),jt(e,r,a)},p(e,[t]){i===(i=a(e))&&o?o.p(e,t):(o.d(1),o=i(e),o&&(o.c(),o.m(r.parentNode,r)))},i:Et,o:Et,d(e){e&&Pt(t),e&&Pt(n),o.d(e),e&&Pt(r)}}}const Mn="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";function On(e,t,n){let{src:r}=t;return e.$$set=e=>{"src"in e&&n(0,r=e.src)},[r]}class jn extends un{constructor(e){super(),ln(this,e,On,kn,At,{src:0})}}function Pn(e,t,n){const r=e.slice();return r[5]=t[n],r}function Bn(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ln(e,t,n){const r=e.slice();return r[8]=t[n],r}function xn(e){let t,n;return t=new Dn({props:{name:e[8],path:`maths/${e[8]}`}}),{c(){an(t.$$.fragment)},m(e,r){on(t,e,r),n=!0},p:Et,i(e){n||(nn(t.$$.fragment,e),n=!0)},o(e){rn(t.$$.fragment,e),n=!1},d(e){sn(t,e)}}}function Nn(e){let t,n;return t=new Dn({props:{name:e[8],path:`maths/${e[8]}`}}),{c(){an(t.$$.fragment)},m(e,r){on(t,e,r),n=!0},p:Et,i(e){n||(nn(t.$$.fragment,e),n=!0)},o(e){rn(t.$$.fragment,e),n=!1},d(e){sn(t,e)}}}function Fn(e){let t,n;return t=new Dn({props:{name:e[5],path:`physics/${e[5].toLowerCase().split(" ").join("_")}_GBD`}}),{c(){an(t.$$.fragment)},m(e,r){on(t,e,r),n=!0},p:Et,i(e){n||(nn(t.$$.fragment,e),n=!0)},o(e){rn(t.$$.fragment,e),n=!1},d(e){sn(t,e)}}}function Hn(e){let t,n,r,a,i,o,s,c,l,u,h,p,d,f,g,m,b,w,y,v,I,$,E,C,D,S,_,A,T,k,M,O,j,P,B,L,x,N,F;t=new _n({});let H=e[1],R=[];for(let t=0;t<H.length;t+=1)R[t]=xn(Ln(e,H,t));const z=e=>rn(R[e],1,1,(()=>{R[e]=null}));let V=e[2],U=[];for(let t=0;t<V.length;t+=1)U[t]=Nn(Bn(e,V,t));const q=e=>rn(U[e],1,1,(()=>{U[e]=null}));let W=e[3],G=[];for(let t=0;t<W.length;t+=1)G[t]=Fn(Pn(e,W,t));const K=e=>rn(G[e],1,1,(()=>{G[e]=null}));return _=new Dn({props:{name:"Physics Year 2",path:"physics/Physics Year 2"}}),T=new Dn({props:{name:"PiP",path:"physics/PiP"}}),P=new jn({props:{src:e[0]}}),{c(){an(t.$$.fragment),n=Nt(),r=Lt("main"),a=Lt("h2"),a.textContent="Maths",i=Nt(),o=Lt("div");for(let e=0;e<R.length;e+=1)R[e].c();s=Nt(),c=Lt("hr"),l=Nt(),u=Lt("h2"),u.textContent="Further Maths",h=Nt(),p=Lt("div");for(let e=0;e<U.length;e+=1)U[e].c();d=Nt(),f=Lt("p"),f.textContent="The year 1 pure and stats are dodgy older versions but I'll fix them soon.",g=Nt(),m=Lt("hr"),b=Nt(),w=Lt("h2"),w.textContent="GBD Booklets",y=Nt(),v=Lt("div");for(let e=0;e<G.length;e+=1)G[e].c();I=Nt(),$=Lt("hr"),E=Nt(),C=Lt("h2"),C.textContent="Physics",D=Nt(),S=Lt("div"),an(_.$$.fragment),A=Nt(),an(T.$$.fragment),k=Nt(),M=Lt("hr"),O=Nt(),j=Lt("section"),an(P.$$.fragment),B=Nt(),L=Lt("p"),L.innerHTML='<a class="hover:underline" href="archive.html">Meme Archive</a>',x=Nt(),N=Lt("footer"),Ft(o,"class","book-section"),Ft(p,"class","book-section"),Ft(f,"class","epilogue"),Ft(v,"class","book-section"),Ft(S,"class","book-section"),Ft(L,"class","epilogue"),Ft(j,"id","otd")},m(e,H){on(t,e,H),jt(e,n,H),jt(e,r,H),Ot(r,a),Ot(r,i),Ot(r,o);for(let e=0;e<R.length;e+=1)R[e].m(o,null);Ot(r,s),Ot(r,c),Ot(r,l),Ot(r,u),Ot(r,h),Ot(r,p);for(let e=0;e<U.length;e+=1)U[e].m(p,null);Ot(r,d),Ot(r,f),Ot(r,g),Ot(r,m),Ot(r,b),Ot(r,w),Ot(r,y),Ot(r,v);for(let e=0;e<G.length;e+=1)G[e].m(v,null);Ot(r,I),Ot(r,$),Ot(r,E),Ot(r,C),Ot(r,D),Ot(r,S),on(_,S,null),Ot(S,A),on(T,S,null),jt(e,k,H),jt(e,M,H),jt(e,O,H),jt(e,j,H),on(P,j,null),Ot(j,B),Ot(j,L),jt(e,x,H),jt(e,N,H),F=!0},p(e,[t]){if(2&t){let n;for(H=e[1],n=0;n<H.length;n+=1){const r=Ln(e,H,n);R[n]?(R[n].p(r,t),nn(R[n],1)):(R[n]=xn(r),R[n].c(),nn(R[n],1),R[n].m(o,null))}for(en(),n=H.length;n<R.length;n+=1)z(n);tn()}if(4&t){let n;for(V=e[2],n=0;n<V.length;n+=1){const r=Bn(e,V,n);U[n]?(U[n].p(r,t),nn(U[n],1)):(U[n]=Nn(r),U[n].c(),nn(U[n],1),U[n].m(p,null))}for(en(),n=V.length;n<U.length;n+=1)q(n);tn()}if(8&t){let n;for(W=e[3],n=0;n<W.length;n+=1){const r=Pn(e,W,n);G[n]?(G[n].p(r,t),nn(G[n],1)):(G[n]=Fn(r),G[n].c(),nn(G[n],1),G[n].m(v,null))}for(en(),n=W.length;n<G.length;n+=1)K(n);tn()}},i(e){if(!F){nn(t.$$.fragment,e);for(let e=0;e<H.length;e+=1)nn(R[e]);for(let e=0;e<V.length;e+=1)nn(U[e]);for(let e=0;e<W.length;e+=1)nn(G[e]);nn(_.$$.fragment,e),nn(T.$$.fragment,e),nn(P.$$.fragment,e),F=!0}},o(e){rn(t.$$.fragment,e),R=R.filter(Boolean);for(let e=0;e<R.length;e+=1)rn(R[e]);U=U.filter(Boolean);for(let e=0;e<U.length;e+=1)rn(U[e]);G=G.filter(Boolean);for(let e=0;e<G.length;e+=1)rn(G[e]);rn(_.$$.fragment,e),rn(T.$$.fragment,e),rn(P.$$.fragment,e),F=!1},d(e){sn(t,e),e&&Pt(n),e&&Pt(r),Bt(R,e),Bt(U,e),Bt(G,e),sn(_),sn(T),e&&Pt(k),e&&Pt(M),e&&Pt(O),e&&Pt(j),sn(P),e&&Pt(x),e&&Pt(N)}}}function Rn(e){const t=new Date;return[$n(t),["Pure Year 1","Pure Year 2","Applied Year 1","Applied Year 2"],["Further Mech","Further Pure Year 1","Further Pure Year 2","Further Stats"],["Gravitational Fields","Circular Motion","Electric Fields","Simple Harmonic Motion","Capacitors","Thermal Physics","Magnetism","Nuclear Physics","Radioactivity","Astrophysics"]]}return new class extends un{constructor(e){super(),ln(this,e,Rn,Hn,At,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=index.js.map
