var archive=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,a;function c(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function u(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function g(){return f("")}function m(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function b(t){a=t}function E(){if(!a)throw new Error("Function called outside component initialization");return a}const T=[],I=[],S=[],C=[],A=Promise.resolve();let D=!1;function k(t){S.push(t)}const _=new Set;let N=0;function x(){const t=a;do{for(;N<T.length;){const t=T[N];N++,b(t),L(t.$$)}for(b(null),T.length=0,N=0;I.length;)I.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];_.has(e)||(_.add(e),e())}S.length=0}while(T.length);for(;C.length;)C.pop()();D=!1,_.clear(),b(t)}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const O=new Set;let R;function M(){R={r:0,c:[],p:R}}function F(){R.r||s(R.c),R=R.p}function P(t,e){t&&t.i&&(O.delete(t),t.i(e))}function V(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),R.c.push((()=>{O.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function $(t,e){const n=e.token={};function s(t,s,i,r){if(e.token!==n)return;e.resolved=r;let o=e.ctx;void 0!==i&&(o=o.slice(),o[i]=r);const a=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(M(),V(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),F())})):e.block.d(1),a.c(),P(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[s]=a),c&&x()}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){const n=E();if(t.then((t=>{b(n),s(e.then,1,e.value,t),b(null)}),(t=>{if(b(n),s(e.catch,2,e.error,t),b(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var i}function U(t,e,n){const s=e.slice(),{resolved:i}=t;t.current===t.then&&(s[t.value]=i),t.current===t.catch&&(s[t.error]=i),t.block.p(s,n)}function B(t){t&&t.c()}function j(t,n,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:h}=t.$$;a&&a.m(n,r),o||k((()=>{const n=c.map(e).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]})),h.forEach(k)}function q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(T.push(t),D||(D=!0,A.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,i,r,o,c,u,h,d=[-1]){const f=a;b(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:i.target||f.$$.root};h&&h(p.root);let g=!1;if(p.ctx=r?r(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),g&&K(e,t)),n})):[],p.update(),g=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();i.intro&&P(e.$$.fragment),j(e,i.target,i.anchor,i.customElement),x()}b(f)}class H{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G=t=>{const e=parseInt(t);if(!isNaN(e))return e;const n=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].indexOf(t);return-1===n?n+1:void 0},Q=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()],W=(t,e,n)=>new Date(n,e-1,t),X=(t,e="/",n=!1)=>{const[s,i,r]=Q(t).map((t=>`${t}`)),o=[s.padStart(2,"0"),i.padStart(2,"0"),r];return(n?o.reverse():o).join(e)},Y=t=>{const e=`${t}`;return e.length<=2?Y("20"+e.padStart(2,"0")):3===e.length?null:parseInt(e)},J=t=>{const e=["/","-","."];for(const n of e){const[e,s,i]=t.split(n).map(G),r=W(e,s,Y(i));if(![e,s,i].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}for(const n of e){const[e,s,i]=t.split(n).map(G),r=W(i,s,Y(e));if(![i,s,e].some((t=>!t))&&"Invalid Date"!=`${r}`)return r}const n=new Date(t);if("Invalid Date"!=`${n}`)return n},Z=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},et=function(t){return function(t){const e=Z(t);return tt.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function st(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function it(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function rt(){return"object"==typeof indexedDB}function ot(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class at extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ct.prototype.create)}}class ct{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(ut,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new at(s,o,n)}}const ut=/\{\$([^}]+)}/g;function ht(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(lt(n)&&lt(r)){if(!ht(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function lt(t){return null!==t&&"object"==typeof t}
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
     */function dt(t,e=1e3,n=2){const s=e*Math.pow(n,t),i=Math.round(.5*s*(Math.random()-.5)*2);return Math.min(144e5,s+i)}
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
     */function ft(t){return t&&t._delegate?t._delegate:t}class pt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const gt="[DEFAULT]";
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
     */class mt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new nt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:gt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===gt?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:gt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class yt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new mt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var vt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(vt||(vt={}));const wt={debug:vt.DEBUG,verbose:vt.VERBOSE,info:vt.INFO,warn:vt.WARN,error:vt.ERROR,silent:vt.SILENT},bt=vt.INFO,Et={[vt.DEBUG]:"log",[vt.VERBOSE]:"log",[vt.INFO]:"info",[vt.WARN]:"warn",[vt.ERROR]:"error"},Tt=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Et[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class It{constructor(t){this.name=t,this._logLevel=bt,this._logHandler=Tt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?wt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,vt.DEBUG,...t),this._logHandler(this,vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,vt.VERBOSE,...t),this._logHandler(this,vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,vt.INFO,...t),this._logHandler(this,vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,vt.WARN,...t),this._logHandler(this,vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,vt.ERROR,...t),this._logHandler(this,vt.ERROR,...t)}}let St,Ct;const At=new WeakMap,Dt=new WeakMap,kt=new WeakMap,_t=new WeakMap,Nt=new WeakMap;let xt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Dt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||kt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Lt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ct||(Ct=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Mt(this),e),Rt(At.get(this))}:function(...e){return Rt(t.apply(Mt(this),e))}:function(e,...n){const s=t.call(Mt(this),e,...n);return kt.set(s,e.sort?e.sort():[e]),Rt(s)}}function Ot(t){return"function"==typeof t?Lt(t):(t instanceof IDBTransaction&&function(t){if(Dt.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));Dt.set(t,e)}(t),e=t,(St||(St=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,xt):t);var e}function Rt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(Rt(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&At.set(e,t)})).catch((()=>{})),Nt.set(e,t),e}(t);if(_t.has(t))return _t.get(t);const e=Ot(t);return e!==t&&(_t.set(t,e),Nt.set(e,t)),e}const Mt=t=>Nt.get(t);function Ft(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rt(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(Rt(o.result),t.oldVersion,t.newVersion,Rt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Pt=["get","getKey","getAll","getAllKeys","count"],Vt=["put","add","delete","clear"],$t=new Map;function Ut(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if($t.get(e))return $t.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Vt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!Pt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return $t.set(e,r),r}xt=(t=>({...t,get:(e,n,s)=>Ut(e,n)||t.get(e,n,s),has:(e,n)=>!!Ut(e,n)||t.has(e,n)}))(xt);
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
class Bt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const jt="@firebase/app",qt="0.7.28",Kt=new It("@firebase/app"),zt="[DEFAULT]",Ht={[jt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Gt=new Map,Qt=new Map;function Wt(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(Qt.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const e of Gt.values())Wt(e,t);return!0}function Yt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
     */const Jt=new ct("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Zt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new pt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}
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
     */function te(t="[DEFAULT]"){const e=Gt.get(t);if(!e)throw Jt.create("no-app",{appName:t});return e}function ee(t,e,n){var s;let i=null!==(s=Ht[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Kt.warn(t.join(" "))}Xt(new pt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */const ne="firebase-heartbeat-store";let se=null;function ie(){return se||(se=Ft("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(ne)}}).catch((t=>{throw Jt.create("storage-open",{originalErrorMessage:t.message})}))),se}async function re(t,e){var n;try{const n=(await ie()).transaction(ne,"readwrite"),s=n.objectStore(ne);return await s.put(e,oe(t)),n.done}catch(t){throw Jt.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function oe(t){return`${t.name}!${t.options.appId}`}
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
     */class ae{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ue(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ce(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),he(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),he(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=et(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ce(){return(new Date).toISOString().substring(0,10)}class ue{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!rt()&&ot().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await ie()).transaction(ne).objectStore(ne).get(oe(t))}catch(t){throw Jt.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function he(t){return et(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var le;le="",Xt(new pt("platform-logger",(t=>new Bt(t)),"PRIVATE")),Xt(new pt("heartbeat",(t=>new ae(t)),"PRIVATE")),ee(jt,qt,le),ee(jt,qt,"esm2017"),ee("fire-js","");var de,fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},pe=pe||{},ge=fe||self;function me(){}function ye(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ve(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var we="closure_uid_"+(1e9*Math.random()>>>0),be=0;function Ee(t,e,n){return t.call.apply(t.bind,arguments)}function Te(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ie(t,e,n){return(Ie=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ee:Te).apply(null,arguments)}function Se(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Ae(){this.s=this.s,this.o=this.o}var De={};Ae.prototype.s=!1,Ae.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,we)&&t[we]||(t[we]=++be)}(this);delete De[t]}},Ae.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ke=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_e=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Ne(t){return Array.prototype.concat.apply([],arguments)}function xe(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Le(t){return/^[\s\xa0]*$/.test(t)}var Oe,Re=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Me(t,e){return-1!=t.indexOf(e)}function Fe(t,e){return t<e?-1:t>e?1:0}t:{var Pe=ge.navigator;if(Pe){var Ve=Pe.userAgent;if(Ve){Oe=Ve;break t}}Oe=""}function $e(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ue(t){const e={};for(const n in t)e[n]=t[n];return e}var Be="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function je(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Be.length;e++)n=Be[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qe(t){return qe[" "](t),t}qe[" "]=me;var Ke,ze,He=Me(Oe,"Opera"),Ge=Me(Oe,"Trident")||Me(Oe,"MSIE"),Qe=Me(Oe,"Edge"),We=Qe||Ge,Xe=Me(Oe,"Gecko")&&!(Me(Oe.toLowerCase(),"webkit")&&!Me(Oe,"Edge"))&&!(Me(Oe,"Trident")||Me(Oe,"MSIE"))&&!Me(Oe,"Edge"),Ye=Me(Oe.toLowerCase(),"webkit")&&!Me(Oe,"Edge");function Je(){var t=ge.document;return t?t.documentMode:void 0}t:{var Ze="",tn=(ze=Oe,Xe?/rv:([^\);]+)(\)|;)/.exec(ze):Qe?/Edge\/([\d\.]+)/.exec(ze):Ge?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ze):Ye?/WebKit\/(\S+)/.exec(ze):He?/(?:Version)[ \/]?(\S+)/.exec(ze):void 0);if(tn&&(Ze=tn?tn[1]:""),Ge){var en=Je();if(null!=en&&en>parseFloat(Ze)){Ke=String(en);break t}}Ke=Ze}var nn,sn={};function rn(){return function(t){var e=sn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Re(String(Ke)).split("."),n=Re("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Fe(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Fe(0==i[2].length,0==r[2].length)||Fe(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(ge.document&&Ge){var on=Je();nn=on||(parseInt(Ke,10)||void 0)}else nn=void 0;var an=nn,cn=function(){if(!ge.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ge.addEventListener("test",me,e),ge.removeEventListener("test",me,e)}catch(t){}return t}();function un(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function hn(t,e){if(un.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xe){t:{try{qe(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ln[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hn.Z.h.call(this)}}un.prototype.h=function(){this.defaultPrevented=!0},Ce(hn,un);var ln={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),fn=0;function pn(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++fn,this.ca=this.fa=!1}function gn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function mn(t){this.src=t,this.g={},this.h=0}function yn(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ke(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(gn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function vn(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}mn.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=vn(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new pn(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var wn="closure_lm_"+(1e6*Math.random()|0),bn={};function En(t,e,n,s,i){if(s&&s.once)return In(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)En(t,e[r],n,s,i);return null}return n=Nn(n),t&&t[dn]?t.N(e,n,ve(s)?!!s.capture:!!s,i):Tn(t,e,n,!1,s,i)}function Tn(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ve(i)?!!i.capture:!!i,a=kn(t);if(a||(t[wn]=a=new mn(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Dn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cn||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(An(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function In(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)In(t,e[r],n,s,i);return null}return n=Nn(n),t&&t[dn]?t.O(e,n,ve(s)?!!s.capture:!!s,i):Tn(t,e,n,!0,s,i)}function Sn(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Sn(t,e[r],n,s,i);else s=ve(s)?!!s.capture:!!s,n=Nn(n),t&&t[dn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=vn(r=t.g[e],n,s,i))&&(gn(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=kn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vn(e,n,s,i)),(n=-1<t?e[t]:null)&&Cn(n))}function Cn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[dn])yn(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(An(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=kn(e))?(yn(n,t),0==n.h&&(n.src=null,e[wn]=null)):gn(t)}}}function An(t){return t in bn?bn[t]:bn[t]="on"+t}function Dn(t,e){if(t.ca)t=!0;else{e=new hn(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Cn(t),t=n.call(s,e)}return t}function kn(t){return(t=t[wn])instanceof mn?t:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nn(t){return"function"==typeof t?t:(t[_n]||(t[_n]=function(e){return t.handleEvent(e)}),t[_n])}function xn(){Ae.call(this),this.i=new mn(this),this.P=this,this.I=null}function Ln(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new un(e,t);else if(e instanceof un)e.target=e.target||t;else{var i=e;je(e=new un(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=On(o,s,!0,e)&&i}if(i=On(o=e.g=t,s,!0,e)&&i,i=On(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=On(o=e.g=n[r],s,!1,e)&&i}function On(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&yn(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Ce(xn,Ae),xn.prototype[dn]=!0,xn.prototype.removeEventListener=function(t,e,n,s){Sn(this,t,e,n,s)},xn.prototype.M=function(){if(xn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)gn(n[s]);delete e.g[t],e.h--}}this.I=null},xn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},xn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Rn=ge.JSON.stringify;function Mn(){var t=jn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Fn,Pn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Vn),(t=>t.reset()));class Vn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function $n(t){ge.setTimeout((()=>{throw t}),0)}function Un(t,e){Fn||function(){var t=ge.Promise.resolve(void 0);Fn=function(){t.then(qn)}}(),Bn||(Fn(),Bn=!0),jn.add(t,e)}var Bn=!1,jn=new class{constructor(){this.h=this.g=null}add(t,e){const n=Pn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function qn(){for(var t;t=Mn();){try{t.h.call(t.g)}catch(t){$n(t)}var e=Pn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bn=!1}function Kn(t,e){xn.call(this),this.h=t||1,this.g=e||ge,this.j=Ie(this.kb,this),this.l=Date.now()}function zn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Hn(t,e,n){if("function"==typeof t)n&&(t=Ie(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ie(t.handleEvent,t)}return 2147483647<Number(e)?-1:ge.setTimeout(t,e||0)}function Gn(t){t.g=Hn((()=>{t.g=null,t.i&&(t.i=!1,Gn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ce(Kn,xn),(de=Kn.prototype).da=!1,de.S=null,de.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ln(this,"tick"),this.da&&(zn(this),this.start()))}},de.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},de.M=function(){Kn.Z.M.call(this),zn(this),delete this.g};class Qn extends Ae{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gn(this)}M(){super.M(),this.g&&(ge.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(t){Ae.call(this),this.h=t,this.g={}}Ce(Wn,Ae);var Xn=[];function Yn(t,e,n,s){Array.isArray(n)||(n&&(Xn[0]=n.toString()),n=Xn);for(var i=0;i<n.length;i++){var r=En(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Jn(t){$e(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Cn(t)}),t),t.g={}}function Zn(){this.g=!0}function ts(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Rn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Wn.prototype.M=function(){Wn.Z.M.call(this),Jn(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Zn.prototype.Aa=function(){this.g=!1},Zn.prototype.info=function(){};var es={},ns=null;function ss(){return ns=ns||new xn}function is(t){un.call(this,es.Ma,t)}function rs(t){const e=ss();Ln(e,new is(e,t))}function os(t,e){un.call(this,es.STAT_EVENT,t),this.stat=e}function as(t){const e=ss();Ln(e,new os(e,t))}function cs(t,e){un.call(this,es.Na,t),this.size=e}function us(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ge.setTimeout((function(){t()}),e)}es.Ma="serverreachability",Ce(is,un),es.STAT_EVENT="statevent",Ce(os,un),es.Na="timingevent",Ce(cs,un);var hs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ls={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ds(){}function fs(t){return t.h||(t.h=t.i())}function ps(){}ds.prototype.h=null;var gs,ms={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ys(){un.call(this,"d")}function vs(){un.call(this,"c")}function ws(){}function bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Wn(this),this.P=Ts,t=We?125:void 0,this.W=new Kn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Es}function Es(){this.i=null,this.g="",this.h=!1}Ce(ys,un),Ce(vs,un),Ce(ws,ds),ws.prototype.g=function(){return new XMLHttpRequest},ws.prototype.i=function(){return{}},gs=new ws;var Ts=45e3,Is={},Ss={};function Cs(t,e,n){t.K=1,t.v=Qs(js(e)),t.s=n,t.U=!0,As(t,null)}function As(t,e){t.F=Date.now(),Ns(t),t.A=js(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),ai(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Es,t.g=ar(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Qn(Ie(t.Ia,t,t.g),t.O)),Yn(t.V,t.g,"readystatechange",t.gb),e=t.H?Ue(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),rs(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ds(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ks(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=_s(t,n),s==Ss){4==e&&(t.o=4,as(14),i=!1),ts(t.j,t.m,null,"[Incomplete Response]");break}if(s==Is){t.o=4,as(15),ts(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ts(t.j,t.m,s,null),Ms(t,s)}Ds(t)&&s!=Ss&&s!=Is&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,as(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zi(e),e.L=!0,as(11))):(ts(t.j,t.m,n,"[Invalid Chunked Response]"),Rs(t),Os(t))}function _s(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ss:(n=Number(e.substring(n,s)),isNaN(n)?Is:(s+=1)+n>e.length?Ss:(e=e.substr(s,n),t.C=s+n,e))}function Ns(t){t.Y=Date.now()+t.P,xs(t,t.P)}function xs(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=us(Ie(t.eb,t),e)}function Ls(t){t.B&&(ge.clearTimeout(t.B),t.B=null)}function Os(t){0==t.l.G||t.I||nr(t.l,t)}function Rs(t){Ls(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zn(t.W),Jn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ms(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||fi(n.i,t)))if(n.I=t.N,!t.J&&fi(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;er(n),Ki(n)}Ji(n),as(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=us(Ie(n.ab,n),6e3));if(1>=di(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else ir(n,11)}else if((t.J||n.g==t)&&er(n),!Le(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Me(t,"spdy")||Me(t,"quic")||Me(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(pi(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Gs(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=or(s,s.H?s.la:null,s.W),o.J){gi(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ls(a),Ns(a)),s.g=o}else Yi(s);0<n.l.length&&Gi(n)}else"stop"!=u[0]&&"close"!=u[0]||ir(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ir(n,7):qi(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}rs(4)}catch(t){}}function Fs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ye(t)||"string"==typeof t)_e(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ye(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ye(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Ps(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ps)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Vs(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];$s(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)$s(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function $s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(de=bs.prototype).setTimeout=function(t){this.P=t},de.gb=function(t){t=t.target;const e=this.L;e&&3==Vi(t)?e.l():this.Ia(t)},de.Ia=function(t){try{if(t==this.g)t:{const h=Vi(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||We||this.g&&(this.h.h||this.g.ga()||$i(this.g)))){this.I||4!=h||7==e||rs(8==e||0>=l?3:2),Ls(this);var n=this.g.ba();this.N=n;e:if(Ds(this)){var s=$i(this.g);t="";var i=s.length,r=4==Vi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Rs(this),Os(this);var o="";break e}this.h.i=new ge.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Le(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,as(12),Rs(this),Os(this);break t}ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ms(this,n)}this.U?(ks(this,h,o),We&&this.i&&3==h&&(Yn(this.V,this.W,"tick",this.fb),this.W.start())):(ts(this.j,this.m,o,null),Ms(this,o)),4==h&&Rs(this),this.i&&!this.I&&(4==h?nr(this.l,this):(this.i=!1,Ns(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,as(12)):(this.o=0,as(13)),Rs(this),Os(this)}}}catch(t){}},de.fb=function(){if(this.g){var t=Vi(this.g),e=this.g.ga();this.C<e.length&&(Ls(this),ks(this,t,e),this.i&&4!=t&&Ns(this))}},de.cancel=function(){this.I=!0,Rs(this)},de.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(rs(3),as(17)),Rs(this),this.o=2,Os(this)):xs(this,this.Y-t)},(de=Ps.prototype).R=function(){Vs(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},de.T=function(){return Vs(this),this.g.concat()},de.get=function(t,e){return $s(this.h,t)?this.h[t]:e},de.set=function(t,e){$s(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},de.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Us=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Bs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Bs){this.g=void 0!==e?e:t.g,qs(this,t.j),this.s=t.s,Ks(this,t.i),zs(this,t.m),this.l=t.l,e=t.h;var n=new si;n.i=e.i,e.g&&(n.g=new Ps(e.g),n.h=e.h),Hs(this,n),this.o=t.o}else t&&(n=String(t).match(Us))?(this.g=!!e,qs(this,n[1]||"",!0),this.s=Ws(n[2]||""),Ks(this,n[3]||"",!0),zs(this,n[4]),this.l=Ws(n[5]||"",!0),Hs(this,n[6]||"",!0),this.o=Ws(n[7]||"")):(this.g=!!e,this.h=new si(null,this.g))}function js(t){return new Bs(t)}function qs(t,e,n){t.j=n?Ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ks(t,e,n){t.i=n?Ws(e,!0):e}function zs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hs(t,e,n){e instanceof si?(t.h=e,function(t,e){e&&!t.j&&(ii(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ri(this,e),ai(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Xs(e,ei)),t.h=new si(e,t.g))}function Gs(t,e,n){t.h.set(e,n)}function Qs(t){return Gs(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ys),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ys(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xs(e,Js,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Xs(e,Js,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Xs(n,"/"==n.charAt(0)?ti:Zs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xs(n,ni)),t.join("")};var Js=/[#\/\?@]/g,Zs=/[#\?:]/g,ti=/[#\?]/g,ei=/[#\?@]/g,ni=/#/g;function si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ii(t){t.g||(t.g=new Ps,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ri(t,e){ii(t),e=ci(t,e),$s(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,$s((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Vs(t)))}function oi(t,e){return ii(t),e=ci(t,e),$s(t.g.h,e)}function ai(t,e,n){ri(t,e),0<n.length&&(t.i=null,t.g.set(ci(t,e),xe(n)),t.h+=n.length)}function ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(de=si.prototype).add=function(t,e){ii(this),this.i=null,t=ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},de.forEach=function(t,e){ii(this),this.g.forEach((function(n,s){_e(n,(function(n){t.call(e,n,s,this)}),this)}),this)},de.T=function(){ii(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},de.R=function(t){ii(this);var e=[];if("string"==typeof t)oi(this,t)&&(e=Ne(e,this.g.get(ci(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ne(e,t[n])}return e},de.set=function(t,e){return ii(this),this.i=null,oi(this,t=ci(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},de.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},de.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function ui(t){this.l=t||hi,ge.PerformanceNavigationTiming?t=0<(t=ge.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ge.g&&ge.g.Ea&&ge.g.Ea()&&ge.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hi=10;function li(t){return!!t.h||!!t.g&&t.g.size>=t.j}function di(t){return t.h?1:t.g?t.g.size:0}function fi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function pi(t,e){t.g?t.g.add(e):t.h=e}function gi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xe(t.i)}function yi(){}function vi(){this.g=new yi}function wi(t,e,n){const s=n||"";try{Fs(t,(function(t,n){let i=t;ve(t)&&(i=Rn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function bi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Ei(t){this.l=t.$b||null,this.j=t.ib||!1}function Ti(t,e){xn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ii,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ui.prototype.cancel=function(){if(this.i=mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},yi.prototype.stringify=function(t){return ge.JSON.stringify(t,void 0)},yi.prototype.parse=function(t){return ge.JSON.parse(t,void 0)},Ce(Ei,ds),Ei.prototype.g=function(){return new Ti(this.l,this.j)},Ei.prototype.i=function(t){return function(){return t}}({}),Ce(Ti,xn);var Ii=0;function Si(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ci(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ai(t)}function Ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(de=Ti.prototype).open=function(t,e){if(this.readyState!=Ii)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ai(this)},de.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ge).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},de.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ci(this)),this.readyState=Ii},de.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ge.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Si(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},de.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ci(this):Ai(this),3==this.readyState&&Si(this)}},de.Ua=function(t){this.g&&(this.response=this.responseText=t,Ci(this))},de.Ta=function(t){this.g&&(this.response=t,Ci(this))},de.ha=function(){this.g&&Ci(this)},de.setRequestHeader=function(t,e){this.v.append(t,e)},de.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},de.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Di=ge.JSON.parse;function ki(t){xn.call(this),this.headers=new Ps,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_i,this.K=this.L=!1}Ce(ki,xn);var _i="",Ni=/^https?$/i,xi=["POST","PUT"];function Li(t){return"content-type"==t.toLowerCase()}function Oi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ri(t),Fi(t)}function Ri(t){t.D||(t.D=!0,Ln(t,"complete"),Ln(t,"error"))}function Mi(t){if(t.h&&void 0!==pe&&(!t.C[1]||4!=Vi(t)||2!=t.ba()))if(t.v&&4==Vi(t))Hn(t.Fa,0,t);else if(Ln(t,"readystatechange"),4==Vi(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Us)[1]||null;if(!i&&ge.self&&ge.self.location){var r=ge.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ni.test(i?i.toLowerCase():"")}n=s}if(n)Ln(t,"complete"),Ln(t,"success");else{t.m=6;try{var o=2<Vi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Ri(t)}}finally{Fi(t)}}}function Fi(t,e){if(t.g){Pi(t);const n=t.g,s=t.C[0]?me:null;t.g=null,t.C=null,e||Ln(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Pi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ge.clearTimeout(t.A),t.A=null)}function Vi(t){return t.g?t.g.readyState:0}function $i(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _i:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ui(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return $e(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Gs(t,e,n))}function Bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ji(t){this.za=0,this.l=[],this.h=new Zn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bi("baseRetryDelayMs",5e3,t),this.$a=Bi("retryDelaySeedMs",1e4,t),this.Ya=Bi("forwardChannelMaxRetries",2,t),this.ra=Bi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ui(t&&t.concurrentRequestLimit),this.Ca=new vi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function qi(t){if(zi(t),3==t.G){var e=t.V++,n=js(t.F);Gs(n,"SID",t.J),Gs(n,"RID",e),Gs(n,"TYPE","terminate"),Wi(t,n),(e=new bs(t,t.h,e,void 0)).K=2,e.v=Qs(js(n)),n=!1,ge.navigator&&ge.navigator.sendBeacon&&(n=ge.navigator.sendBeacon(e.v.toString(),"")),!n&&ge.Image&&((new Image).src=e.v,n=!0),n||(e.g=ar(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ns(e)}rr(t)}function Ki(t){t.g&&(Zi(t),t.g.cancel(),t.g=null)}function zi(t){Ki(t),t.u&&(ge.clearTimeout(t.u),t.u=null),er(t),t.i.cancel(),t.m&&("number"==typeof t.m&&ge.clearTimeout(t.m),t.m=null)}function Hi(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Gi(t)}function Gi(t){li(t.i)||t.m||(t.m=!0,Un(t.Ha,t),t.C=0)}function Qi(t,e){var n;n=e?e.m:t.V++;const s=js(t.F);Gs(s,"SID",t.J),Gs(s,"RID",n),Gs(s,"AID",t.U),Wi(t,s),t.o&&t.s&&Ui(s,t.o,t.s),n=new bs(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Xi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),pi(t.i,n),Cs(n,s,e)}function Wi(t,e){t.j&&Fs({},(function(t,n){Gs(e,n,t)}))}function Xi(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ie(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{wi(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Yi(t){t.g||t.u||(t.Y=1,Un(t.Ga,t),t.A=0)}function Ji(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=us(Ie(t.Ga,t),sr(t,t.A)),t.A++,!0)}function Zi(t){null!=t.B&&(ge.clearTimeout(t.B),t.B=null)}function tr(t){t.g=new bs(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=js(t.oa);Gs(e,"RID","rpc"),Gs(e,"SID",t.J),Gs(e,"CI",t.N?"0":"1"),Gs(e,"AID",t.U),Wi(t,e),Gs(e,"TYPE","xmlhttp"),t.o&&t.s&&Ui(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qs(js(e)),n.s=null,n.U=!0,As(n,t)}function er(t){null!=t.v&&(ge.clearTimeout(t.v),t.v=null)}function nr(t,e){var n=null;if(t.g==e){er(t),Zi(t),t.g=null;var s=2}else{if(!fi(t.i,e))return;n=e.D,gi(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Ln(s=ss(),new cs(s,n,e,i)),Gi(t)}else Yi(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(di(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=us(Ie(t.Ha,t,e),sr(t,t.C)),t.C++,0)))}(t,e)||2==s&&Ji(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}function sr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ir(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Ie(t.jb,t);n||(n=new Bs("//www.google.com/images/cleardot.gif"),ge.location&&"http"==ge.location.protocol||qs(n,"https"),Qs(n)),function(t,e){const n=new Zn;if(ge.Image){const s=new Image;s.onload=Se(bi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Se(bi,n,s,"TestLoadImage: error",!1,e),s.onabort=Se(bi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Se(bi,n,s,"TestLoadImage: timeout",!1,e),ge.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else as(2);t.G=0,t.j&&t.j.va(e),rr(t),zi(t)}function rr(t){t.G=0,t.I=-1,t.j&&(0==mi(t.i).length&&0==t.l.length||(t.i.i.length=0,xe(t.l),t.l.length=0),t.j.ua())}function or(t,e,n){let s=function(t){return t instanceof Bs?js(t):new Bs(t,void 0)}(n);if(""!=s.i)e&&Ks(s,e+"."+s.i),zs(s,s.m);else{const t=ge.location;s=function(t,e,n,s){var i=new Bs(null,void 0);return t&&qs(i,t),e&&Ks(i,e),n&&zs(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&$e(t.aa,(function(t,e){Gs(s,e,t)})),e=t.D,n=t.sa,e&&n&&Gs(s,e,n),Gs(s,"VER",t.ma),Wi(t,s),s}function ar(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ki(new Ei({ib:!0})):new ki(t.qa)).L=t.H,e}function cr(){}function ur(){if(Ge&&!(10<=Number(an)))throw Error("Environmental error: no available transport.")}function hr(t,e){xn.call(this),this.g=new ji(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Le(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Le(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new fr(this)}function lr(t){ys.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function dr(){vs.call(this),this.status=1}function fr(t){this.g=t}(de=ki.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gs.g(),this.C=this.u?fs(this.u):fs(gs),this.g.onreadystatechange=Ie(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Oi(this,t)}t=n||"";const i=new Ps(this.headers);s&&Fs(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=Li;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=ge.FormData&&t instanceof ge.FormData,!(0<=ke(xi,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pi(this),0<this.B&&((this.K=function(t){return Ge&&rn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.pa,this)):this.A=Hn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Oi(this,t)}},de.pa=function(){void 0!==pe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ln(this,"timeout"),this.abort(8))},de.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ln(this,"complete"),Ln(this,"abort"),Fi(this))},de.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fi(this,!0)),ki.Z.M.call(this)},de.Fa=function(){this.s||(this.F||this.v||this.l?Mi(this):this.cb())},de.cb=function(){Mi(this)},de.ba=function(){try{return 2<Vi(this)?this.g.status:-1}catch(t){return-1}},de.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},de.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Di(e)}},de.Da=function(){return this.m},de.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(de=ji.prototype).ma=8,de.G=1,de.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},de.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new bs(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Ue(r),je(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xi(this,i,e),Gs(n=js(this.F),"RID",t),Gs(n,"CVER",22),this.D&&Gs(n,"X-HTTP-Session-Id",this.D),Wi(this,n),this.o&&r&&Ui(n,this.o,r),pi(this.i,i),this.Ra&&Gs(n,"TYPE","init"),this.ja?(Gs(n,"$req",e),Gs(n,"SID","null"),i.$=!0,Cs(i,n,null)):Cs(i,n,e),this.G=2}}else 3==this.G&&(t?Qi(this,t):0==this.l.length||li(this.i)||Qi(this))},de.Ga=function(){if(this.u=null,tr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=us(Ie(this.bb,this),t)}},de.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,as(10),Ki(this),tr(this))},de.ab=function(){null!=this.v&&(this.v=null,Ki(this),Ji(this),as(19))},de.jb=function(t){t?(this.h.info("Successfully pinged google.com"),as(2)):(this.h.info("Failed to ping google.com"),as(1))},(de=cr.prototype).xa=function(){},de.wa=function(){},de.va=function(){},de.ua=function(){},de.Oa=function(){},ur.prototype.g=function(t,e){return new hr(t,e)},Ce(hr,xn),hr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Un(Ie(t.hb,t,e))),as(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=or(t,null,t.W),Gi(t)},hr.prototype.close=function(){qi(this.g)},hr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Hi(this.g,e)}else this.v?((e={}).__data__=Rn(t),Hi(this.g,e)):Hi(this.g,t)},hr.prototype.M=function(){this.g.j=null,delete this.j,qi(this.g),delete this.g,hr.Z.M.call(this)},Ce(lr,ys),Ce(dr,vs),Ce(fr,cr),fr.prototype.xa=function(){Ln(this.g,"a")},fr.prototype.wa=function(t){Ln(this.g,new lr(t))},fr.prototype.va=function(t){Ln(this.g,new dr(t))},fr.prototype.ua=function(){Ln(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,hr.prototype.send=hr.prototype.u,hr.prototype.open=hr.prototype.m,hr.prototype.close=hr.prototype.close,hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,ls.COMPLETE="complete",ps.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",xn.prototype.listen=xn.prototype.N,ki.prototype.listenOnce=ki.prototype.O,ki.prototype.getLastError=ki.prototype.La,ki.prototype.getLastErrorCode=ki.prototype.Da,ki.prototype.getStatus=ki.prototype.ba,ki.prototype.getResponseJson=ki.prototype.Qa,ki.prototype.getResponseText=ki.prototype.ga,ki.prototype.send=ki.prototype.ea;var pr=hs,gr=ls,mr=es,yr=10,vr=11,wr=Ei,br=ps,Er=ki;const Tr="@firebase/firestore";
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
     */class Ir{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ir.UNAUTHENTICATED=new Ir(null),Ir.GOOGLE_CREDENTIALS=new Ir("google-credentials-uid"),Ir.FIRST_PARTY=new Ir("first-party-uid"),Ir.MOCK_USER=new Ir("mock-user");
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
let Sr="9.9.0";
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
     */const Cr=new It("@firebase/firestore");function Ar(){return Cr.logLevel}function Dr(t,...e){if(Cr.logLevel<=vt.DEBUG){const n=e.map(Nr);Cr.debug(`Firestore (${Sr}): ${t}`,...n)}}function kr(t,...e){if(Cr.logLevel<=vt.ERROR){const n=e.map(Nr);Cr.error(`Firestore (${Sr}): ${t}`,...n)}}function _r(t,...e){if(Cr.logLevel<=vt.WARN){const n=e.map(Nr);Cr.warn(`Firestore (${Sr}): ${t}`,...n)}}function Nr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function xr(t="Unexpected state"){const e=`FIRESTORE (${Sr}) INTERNAL ASSERTION FAILED: `+t;throw kr(e),new Error(e)}function Lr(t,e){t||xr()}function Or(t,e){return t}
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
     */const Rr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Mr extends at{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Fr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Pr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ir.UNAUTHENTICATED)))}shutdown(){}}class $r{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ur{constructor(t){this.t=t,this.currentUser=Ir.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Lr("string"==typeof e.accessToken),new Pr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Lr(null===t||"string"==typeof t),new Ir(t)}}class Br{constructor(t,e,n){this.type="FirstParty",this.user=Ir.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class jr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Br(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ir.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Lr("string"==typeof t.token),this.p=t.token,new qr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function zr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class Hr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=zr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Gr(t,e){return t<e?-1:t>e?1:0}function Qr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class Wr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Mr(Rr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Mr(Rr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Mr(Rr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Mr(Rr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Wr.fromMillis(Date.now())}static fromDate(t){return Wr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Wr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Gr(this.nanoseconds,t.nanoseconds):Gr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class Xr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Xr(t)}static min(){return new Xr(new Wr(0,0))}static max(){return new Xr(new Wr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class Yr{constructor(t,e,n){void 0===e?e=0:e>t.length&&xr(),void 0===n?n=t.length-e:n>t.length-e&&xr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Yr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Yr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Jr extends Yr{construct(t,e,n){return new Jr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Mr(Rr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Jr(e)}static emptyPath(){return new Jr([])}}const Zr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class to extends Yr{construct(t,e,n){return new to(t,e,n)}static isValidIdentifier(t){return Zr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),to.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new to(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Mr(Rr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Mr(Rr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Mr(Rr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Mr(Rr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new to(e)}static emptyPath(){return new to([])}}
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
     */class eo{constructor(t){this.path=t}static fromPath(t){return new eo(Jr.fromString(t))}static fromName(t){return new eo(Jr.fromString(t).popFirst(5))}static empty(){return new eo(Jr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Jr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Jr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new eo(new Jr(t.slice()))}}function no(t){return new so(t.readTime,t.key,-1)}class so{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new so(Xr.min(),eo.empty(),-1)}static max(){return new so(Xr.max(),eo.empty(),-1)}}function io(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=eo.comparator(t.documentKey,e.documentKey),0!==n?n:Gr(t.largestBatchId,e.largestBatchId))}
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
async function ro(t){if(t.code!==Rr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Dr("LocalStore","Unexpectedly lost primary lease")}
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
     */class oo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&xr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new oo(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof oo?e:oo.resolve(e)}catch(t){return oo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):oo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):oo.reject(e)}static resolve(t){return new oo(((e,n)=>{e(t)}))}static reject(t){return new oo(((e,n)=>{n(t)}))}static waitFor(t){return new oo(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=oo.resolve(!1);for(const n of t)e=e.next((t=>t?oo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new oo(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new oo(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}function ao(t){return"IndexedDbTransactionError"===t.name}
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
     */class co{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
     */function uo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ho(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
co.ot=-1;class lo{constructor(t,e){this.comparator=t,this.root=e||po.EMPTY}insert(t,e){return new lo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,po.BLACK,null,null))}remove(t){return new lo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,po.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fo(this.root,t,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fo(this.root,t,this.comparator,!0)}}class fo{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class po{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:po.RED,this.left=null!=s?s:po.EMPTY,this.right=null!=i?i:po.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new po(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return po.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return po.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,po.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,po.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xr();if(this.right.isRed())throw xr();const t=this.left.check();if(t!==this.right.check())throw xr();return t+(this.isRed()?0:1)}}po.EMPTY=null,po.RED=!0,po.BLACK=!1,po.EMPTY=new class{constructor(){this.size=0}get key(){throw xr()}get value(){throw xr()}get color(){throw xr()}get left(){throw xr()}get right(){throw xr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new po(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class go{constructor(t){this.comparator=t,this.data=new lo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mo(this.data.getIterator())}getIteratorFrom(t){return new mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof go))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new go(this.comparator);return e.data=t,e}}class mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class yo{constructor(t){this.fields=t,t.sort(to.comparator)}static empty(){return new yo([])}unionWith(t){let e=new go(to.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new yo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class vo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new vo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new vo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Gr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vo.EMPTY_BYTE_STRING=new vo("");const wo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bo(t){if(Lr(!!t),"string"==typeof t){let e=0;const n=wo.exec(t);if(Lr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Eo(t.seconds),nanos:Eo(t.nanos)}}function Eo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function To(t){return"string"==typeof t?vo.fromBase64String(t):vo.fromUint8Array(t)}
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
     */function Io(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function So(t){const e=t.mapValue.fields.__previous_value__;return Io(e)?So(e):e}function Co(t){const e=bo(t.mapValue.fields.__local_write_time__.timestampValue);return new Wr(e.seconds,e.nanos)}
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
     */class Ao{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Do{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Do("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Do&&t.projectId===this.projectId&&t.database===this.database}}
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
     */function ko(t){return null==t}function _o(t){return 0===t&&1/t==-1/0}
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
     */const No={fields:{__type__:{stringValue:"__max__"}}};function xo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Io(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:xr()}function Lo(t,e){if(t===e)return!0;const n=xo(t);if(n!==xo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=bo(t.timestampValue),s=bo(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return To(t.bytesValue).isEqual(To(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Eo(t.geoPointValue.latitude)===Eo(e.geoPointValue.latitude)&&Eo(t.geoPointValue.longitude)===Eo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Eo(t.integerValue)===Eo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Eo(t.doubleValue),s=Eo(e.doubleValue);return n===s?_o(n)===_o(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Qr(t.arrayValue.values||[],e.arrayValue.values||[],Lo);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(uo(n)!==uo(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Lo(n[t],s[t])))return!1;return!0}(t,e);default:return xr()}}function Oo(t,e){return void 0!==(t.values||[]).find((t=>Lo(t,e)))}function Ro(t,e){if(t===e)return 0;const n=xo(t),s=xo(e);if(n!==s)return Gr(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Gr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Eo(t.integerValue||t.doubleValue),s=Eo(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Mo(t.timestampValue,e.timestampValue);case 4:return Mo(Co(t),Co(e));case 5:return Gr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=To(t),s=To(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Gr(n[t],s[t]);if(0!==e)return e}return Gr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Gr(Eo(t.latitude),Eo(e.latitude));return 0!==n?n:Gr(Eo(t.longitude),Eo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Ro(n[t],s[t]);if(e)return e}return Gr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===No&&e===No)return 0;if(t===No)return 1;if(e===No)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Gr(s[t],r[t]);if(0!==e)return e;const o=Ro(n[s[t]],i[r[t]]);if(0!==o)return o}return Gr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw xr()}}function Mo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Gr(t,e);const n=bo(t),s=bo(e),i=Gr(n.seconds,s.seconds);return 0!==i?i:Gr(n.nanos,s.nanos)}function Fo(t){return Po(t)}function Po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=bo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?To(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,eo.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Po(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Po(t.fields[i])}`;return n+"}"}(t.mapValue):xr();var e,n}function Vo(t){return!!t&&"integerValue"in t}function $o(t){return!!t&&"arrayValue"in t}function Uo(t){return!!t&&"nullValue"in t}function Bo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jo(t){return!!t&&"mapValue"in t}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ho(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=qo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ko{constructor(t){this.value=t}static empty(){return new Ko({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qo(e)}setAll(t){let e=to.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=qo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());jo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];jo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ho(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ko(qo(this.value))}}
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
     */class zo{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new zo(t,0,Xr.min(),Xr.min(),Ko.empty(),0)}static newFoundDocument(t,e,n){return new zo(t,1,e,Xr.min(),n,0)}static newNoDocument(t,e){return new zo(t,2,e,Xr.min(),Ko.empty(),0)}static newUnknownDocument(t,e){return new zo(t,3,e,Xr.min(),Ko.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ko.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ko.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof zo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new zo(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Ho{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ut=null}}function Go(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ho(t,e,n,s,i,r,o)}function Qo(t){const e=Or(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Fo(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ko(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Fo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Fo(t))).join(",")),e.ut=t}return e.ut}function Wo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ca(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Lo(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ha(t.startAt,e.startAt)&&ha(t.endAt,e.endAt)}function Xo(t){return eo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Yo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Jo(t,e,n):"array-contains"===e?new na(t,n):"in"===e?new sa(t,n):"not-in"===e?new ia(t,n):"array-contains-any"===e?new ra(t,n):new Yo(t,e,n)}static ct(t,e,n){return"in"===e?new Zo(t,n):new ta(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Ro(e,this.value)):null!==e&&xo(this.value)===xo(e)&&this.at(Ro(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return xr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Jo extends Yo{constructor(t,e,n){super(t,e,n),this.key=eo.fromName(n.referenceValue)}matches(t){const e=eo.comparator(t.key,this.key);return this.at(e)}}class Zo extends Yo{constructor(t,e){super(t,"in",e),this.keys=ea("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ta extends Yo{constructor(t,e){super(t,"not-in",e),this.keys=ea("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ea(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>eo.fromName(t.referenceValue)))}class na extends Yo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $o(e)&&Oo(e.arrayValue,this.value)}}class sa extends Yo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Oo(this.value.arrayValue,e)}}class ia extends Yo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Oo(this.value.arrayValue,e)}}class ra extends Yo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$o(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Oo(this.value.arrayValue,t)))}}class oa{constructor(t,e){this.position=t,this.inclusive=e}}class aa{constructor(t,e="asc"){this.field=t,this.dir=e}}function ca(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ua(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?eo.comparator(eo.fromName(o.referenceValue),n.key):Ro(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function ha(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lo(t.position[n],e.position[n]))return!1;return!0}
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
     */class la{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function da(t){return new la(t)}function fa(t){const e=Or(t);if(null===e.lt){e.lt=[];const t=function(t){for(const e of t.filters)if(e.ht())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new aa(t)),e.lt.push(new aa(to.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new aa(to.keyField(),t))}}}return e.lt}function pa(t){const e=Or(t);if(!e.ft)if("F"===e.limitType)e.ft=Go(e.path,e.collectionGroup,fa(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of fa(e)){const e="desc"===n.dir?"asc":"desc";t.push(new aa(n.field,e))}const n=e.endAt?new oa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new oa(e.startAt.position,e.startAt.inclusive):null;e.ft=Go(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.ft}function ga(t,e){return Wo(pa(t),pa(e))&&t.limitType===e.limitType}function ma(t){return`${Qo(pa(t))}|lt:${t.limitType}`}function ya(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Fo(e.value)}`;var e})).join(", ")}]`),ko(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Fo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Fo(t))).join(",")),`Target(${e})`}(pa(t))}; limitType=${t.limitType})`}function va(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):eo.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=ua(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,fa(t),e))&&!(t.endAt&&!function(t,e,n){const s=ua(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,fa(t),e))}(t,e)}function wa(t){return(e,n)=>{let s=!1;for(const i of fa(t)){const t=ba(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function ba(t,e,n){const s=t.field.isKeyField()?eo.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Ro(s,i):xr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return xr()}}
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
     */class Ea{constructor(){this._=void 0}}function Ta(t,e,n){return t instanceof Sa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ca?Aa(t,e):t instanceof Da?ka(t,e):function(t,e){const n=function(t,e){return t instanceof _a?Vo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),s=Na(n)+Na(t._t);return Vo(n)&&Vo(t._t)?function(t){return{integerValue:""+t}}(s):function(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(e)?"-0":e}}(t.wt,s)}(t,e)}function Ia(t,e,n){return t instanceof Ca?Aa(t,e):t instanceof Da?ka(t,e):n}class Sa extends Ea{}class Ca extends Ea{constructor(t){super(),this.elements=t}}function Aa(t,e){const n=xa(e);for(const e of t.elements)n.some((t=>Lo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Da extends Ea{constructor(t){super(),this.elements=t}}function ka(t,e){let n=xa(e);for(const e of t.elements)n=n.filter((t=>!Lo(t,e)));return{arrayValue:{values:n}}}class _a extends Ea{constructor(t,e){super(),this.wt=t,this._t=e}}function Na(t){return Eo(t.integerValue||t.doubleValue)}function xa(t){return $o(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class La{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new La}static exists(t){return new La(void 0,t)}static updateTime(t){return new La(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ra{}function Ma(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ka(t.key,La.none()):new $a(t.key,t.data,La.none());{const n=t.data,s=Ko.empty();let i=new go(to.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Ua(t.key,s,new yo(i.toArray()),La.none())}}function Fa(t,e,n){t instanceof $a?function(t,e,n){const s=t.value.clone(),i=ja(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ua?function(t,e,n){if(!Oa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=ja(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ba(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Pa(t,e,n,s){return t instanceof $a?function(t,e,n,s){if(!Oa(t.precondition,e))return n;const i=t.value.clone(),r=qa(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ua?function(t,e,n,s){if(!Oa(t.precondition,e))return n;const i=qa(t.fieldTransforms,s,e),r=e.data;return r.setAll(Ba(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Oa(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Va(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Qr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ca&&e instanceof Ca||t instanceof Da&&e instanceof Da?Qr(t.elements,e.elements,Lo):t instanceof _a&&e instanceof _a?Lo(t._t,e._t):t instanceof Sa&&e instanceof Sa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends Ra{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ua extends Ra{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ba(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function ja(t,e,n){const s=new Map;Lr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ia(o,a,n[i]))}return s}function qa(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Ta(t,r,e))}return s}class Ka extends Ra{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class za{constructor(t){this.count=t}}
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
     */var Ha,Ga;function Qa(t){if(void 0===t)return kr("GRPC error has no .code"),Rr.UNKNOWN;switch(t){case Ha.OK:return Rr.OK;case Ha.CANCELLED:return Rr.CANCELLED;case Ha.UNKNOWN:return Rr.UNKNOWN;case Ha.DEADLINE_EXCEEDED:return Rr.DEADLINE_EXCEEDED;case Ha.RESOURCE_EXHAUSTED:return Rr.RESOURCE_EXHAUSTED;case Ha.INTERNAL:return Rr.INTERNAL;case Ha.UNAVAILABLE:return Rr.UNAVAILABLE;case Ha.UNAUTHENTICATED:return Rr.UNAUTHENTICATED;case Ha.INVALID_ARGUMENT:return Rr.INVALID_ARGUMENT;case Ha.NOT_FOUND:return Rr.NOT_FOUND;case Ha.ALREADY_EXISTS:return Rr.ALREADY_EXISTS;case Ha.PERMISSION_DENIED:return Rr.PERMISSION_DENIED;case Ha.FAILED_PRECONDITION:return Rr.FAILED_PRECONDITION;case Ha.ABORTED:return Rr.ABORTED;case Ha.OUT_OF_RANGE:return Rr.OUT_OF_RANGE;case Ha.UNIMPLEMENTED:return Rr.UNIMPLEMENTED;case Ha.DATA_LOSS:return Rr.DATA_LOSS;default:return xr()}}(Ga=Ha||(Ha={}))[Ga.OK=0]="OK",Ga[Ga.CANCELLED=1]="CANCELLED",Ga[Ga.UNKNOWN=2]="UNKNOWN",Ga[Ga.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ga[Ga.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ga[Ga.NOT_FOUND=5]="NOT_FOUND",Ga[Ga.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ga[Ga.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ga[Ga.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ga[Ga.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ga[Ga.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ga[Ga.ABORTED=10]="ABORTED",Ga[Ga.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ga[Ga.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ga[Ga.INTERNAL=13]="INTERNAL",Ga[Ga.UNAVAILABLE=14]="UNAVAILABLE",Ga[Ga.DATA_LOSS=15]="DATA_LOSS";
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
class Wa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ho(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}size(){return this.innerSize}}
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
     */const Xa=new lo(eo.comparator);function Ya(){return Xa}const Ja=new lo(eo.comparator);function Za(...t){let e=Ja;for(const n of t)e=e.insert(n.key,n);return e}function tc(t){let e=Ja;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ec(){return sc()}function nc(){return sc()}function sc(){return new Wa((t=>t.toString()),((t,e)=>t.isEqual(e)))}new lo(eo.comparator);const ic=new go(eo.comparator);function rc(...t){let e=ic;for(const n of t)e=e.add(n);return e}const oc=new go(Gr);function ac(){return oc}
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
     */class cc{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,uc.createSynthesizedTargetChangeForCurrentChange(t,e)),new cc(Xr.min(),n,ac(),Ya(),rc())}}class uc{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new uc(vo.EMPTY_BYTE_STRING,e,rc(),rc(),rc())}}
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
     */class hc{constructor(t,e,n,s){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=s}}class lc{constructor(t,e){this.targetId=t,this.It=e}}class dc{constructor(t,e,n=vo.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class fc{constructor(){this.Tt=0,this.Et=mc(),this.At=vo.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=rc(),e=rc(),n=rc();return this.Et.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:xr()}})),new uc(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=mc()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class pc{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Ya(),this.Bt=gc(),this.Lt=new go(Gr)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:xr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,s=this.Ht(e);if(s){const t=s.target;if(Xo(t))if(0===n){const n=new eo(t.path);this.Kt(e,n,zo.newNoDocument(n,Xr.min()))}else Lr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,s)=>{const i=this.Ht(s);if(i){if(n.current&&Xo(i.target)){const e=new eo(i.target.path);null!==this.$t.get(e)||this.Xt(s,e)||this.Kt(s,e,zo.newNoDocument(e,t))}n.vt&&(e.set(s,n.St()),n.Dt())}}));let n=rc();this.Bt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const s=new cc(t,e,this.Lt,this.$t,n);return this.$t=Ya(),this.Bt=gc(),this.Lt=new go(Gr),s}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const s=this.Qt(t);this.Xt(t,e)?s.Ct(e,1):s.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new fc,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new go(Gr),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Dr("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new fc),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function gc(){return new lo(eo.comparator)}function mc(){return new lo(eo.comparator)}
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
     */const yc={asc:"ASCENDING",desc:"DESCENDING"},vc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class wc{constructor(t,e){this.databaseId=t,this.dt=e}}function bc(t){return Lr(!!t),Xr.fromTimestamp(function(t){const e=bo(t);return new Wr(e.seconds,e.nanos)}(t))}function Ec(t){const e=Jr.fromString(t);return Lr(Fc(e)),e}function Tc(t,e){const n=Ec(e);if(n.get(1)!==t.databaseId.projectId)throw new Mr(Rr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Mr(Rr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new eo(Cc(n))}function Ic(t,e){return function(t,e){return function(t){return new Jr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function Sc(t){return new Jr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cc(t){return Lr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ac(t,e){return{documents:[Ic(t,e.path)]}}function Dc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ic(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ic(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Bo(t.value))return{unaryFilter:{field:Lc(t.field),op:"IS_NAN"}};if(Uo(t.value))return{unaryFilter:{field:Lc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Bo(t.value))return{unaryFilter:{field:Lc(t.field),op:"IS_NOT_NAN"}};if(Uo(t.value))return{unaryFilter:{field:Lc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lc(t.field),op:xc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Lc(t.field),direction:Nc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.dt||ko(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function kc(t){let e=function(t){const e=Ec(t);return 4===e.length?Jr.emptyPath():Cc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Lr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=_c(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new aa(Oc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ko(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new oa(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new oa(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new la(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,u)}function _c(t){return t?void 0!==t.unaryFilter?[Mc(t)]:void 0!==t.fieldFilter?[Rc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>_c(t))).reduce(((t,e)=>t.concat(e))):xr():[]}function Nc(t){return yc[t]}function xc(t){return vc[t]}function Lc(t){return{fieldPath:t.canonicalString()}}function Oc(t){return to.fromServerFormat(t.fieldPath)}function Rc(t){return Yo.create(Oc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Mc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Oc(t.unaryFilter.field);return Yo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Oc(t.unaryFilter.field);return Yo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oc(t.unaryFilter.field);return Yo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Oc(t.unaryFilter.field);return Yo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return xr()}}function Fc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */class Pc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Fa(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Pa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Pa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=nc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Ma(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Xr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),rc())}isEqual(t){return this.batchId===t.batchId&&Qr(this.mutations,t.mutations,((t,e)=>Va(t,e)))&&Qr(this.baseMutations,t.baseMutations,((t,e)=>Va(t,e)))}}
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
     */class Vc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */class $c{constructor(t,e,n,s,i=Xr.min(),r=Xr.min(),o=vo.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new $c(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new $c(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new $c(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class Uc{constructor(t){this.ne=t}}function Bc(t){const e=kc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
     */class jc{constructor(){this.ze=new qc}addToCollectionParentIndex(t,e){return this.ze.add(e),oo.resolve()}getCollectionParents(t,e){return oo.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return oo.resolve()}deleteFieldIndex(t,e){return oo.resolve()}getDocumentsMatchingTarget(t,e){return oo.resolve(null)}getIndexType(t,e){return oo.resolve(0)}getFieldIndexes(t,e){return oo.resolve([])}getNextCollectionGroupToUpdate(t){return oo.resolve(null)}getMinOffset(t,e){return oo.resolve(so.min())}getMinOffsetFromCollectionGroup(t,e){return oo.resolve(so.min())}updateCollectionGroup(t,e,n){return oo.resolve()}updateIndexEntries(t,e){return oo.resolve()}}class qc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new go(Jr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new go(Jr.comparator)).toArray()}}
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
     */class Kc{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Kc(0)}static Rn(){return new Kc(-1)}}
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
class zc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class Hc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Pa(n.mutation,t,yo.empty(),Wr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,rc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=rc()){const s=ec();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Za();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ec();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,rc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Ya();const r=sc(),o=sc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ua)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Pa(o.mutation,e,o.mutation.getFieldMask(),Wr.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new zc(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=sc();let s=new lo(((t,e)=>t-e)),i=rc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||yo.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||rc()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=nc();c.forEach((t=>{if(!i.has(t)){const s=Ma(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return oo.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return eo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):oo.resolve(ec());let o=-1,a=i;return r.next((e=>oo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?oo.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,rc()))).next((t=>({batchId:o,changes:tc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new eo(e)).next((t=>{let e=Za();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Za();return this.indexManager.getCollectionParents(t,s).next((r=>oo.forEach(r,(r=>{const o=function(t,e){return new la(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,zo.newInvalidDocument(n)))}));let n=Za();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&Pa(r.mutation,i,yo.empty(),Wr.now()),va(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):oo.resolve(zo.newInvalidDocument(e))}}
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
     */class Gc{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return oo.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:bc(n.createTime)}),oo.resolve()}getNamedQuery(t,e){return oo.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Bc(t.bundledQuery),readTime:bc(t.readTime)}}(e)),oo.resolve()}}
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
     */class Qc{constructor(){this.overlays=new lo(eo.comparator),this.Xn=new Map}getOverlay(t,e){return oo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ec();return oo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ie(t,e,s)})),oo.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),oo.resolve()}getOverlaysForCollection(t,e,n){const s=ec(),i=e.length+1,r=new eo(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return oo.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new lo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ec(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ec(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return oo.resolve(o)}ie(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Vc(e,n));let i=this.Xn.get(e);void 0===i&&(i=rc(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
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
     */class Wc{constructor(){this.Zn=new go(Xc.ts),this.es=new go(Xc.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Xc(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Xc(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new eo(new Jr([])),n=new Xc(e,t),s=new Xc(e,t+1),i=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new eo(new Jr([])),n=new Xc(e,t),s=new Xc(e,t+1);let i=rc();return this.es.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Xc(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Xc{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return eo.comparator(t.key,e.key)||Gr(t.ls,e.ls)}static ns(t,e){return Gr(t.ls,e.ls)||eo.comparator(t.key,e.key)}}
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
     */class Yc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new go(Xc.ts)}checkEmpty(t){return oo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Pc(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.ds=this.ds.add(new Xc(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return oo.resolve(r)}lookupMutationBatch(t,e){return oo.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ws(n),i=s<0?0:s;return oo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return oo.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return oo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Xc(e,0),s=new Xc(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,s],(t=>{const e=this._s(t.ls);i.push(e)})),oo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new go(Gr);return e.forEach((t=>{const e=new Xc(t,0),s=new Xc(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),oo.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;eo.isDocumentKey(i)||(i=i.child(""));const r=new Xc(new eo(i),0);let o=new go(Gr);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),r),oo.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Lr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return oo.forEach(e.mutations,(s=>{const i=new Xc(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Xc(e,0),s=this.ds.firstAfterOrEqual(n);return oo.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,oo.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class Jc{constructor(t){this.ps=t,this.docs=new lo(eo.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return oo.resolve(n?n.document.mutableCopy():zo.newInvalidDocument(e))}getEntries(t,e){let n=Ya();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():zo.newInvalidDocument(t))})),oo.resolve(n)}getAllFromCollection(t,e,n){let s=Ya();const i=new eo(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||io(no(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return oo.resolve(s)}getAllFromCollectionGroup(t,e,n,s){xr()}Is(t,e){return oo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Zc(this)}getSize(t){return oo.resolve(this.size)}}class Zc extends class{constructor(){this.changes=new Wa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,zo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?oo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.zn.addEntry(t,s)):this.zn.removeEntry(n)})),oo.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
     */class tu{constructor(t){this.persistence=t,this.Ts=new Wa((t=>Qo(t)),Wo),this.lastRemoteSnapshotVersion=Xr.min(),this.highestTargetId=0,this.Es=0,this.As=new Wc,this.targetCount=0,this.Rs=Kc.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),oo.resolve()}getLastRemoteSnapshotVersion(t){return oo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return oo.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),oo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),oo.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Kc(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,oo.resolve()}updateTargetData(t,e){return this.vn(e),oo.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,oo.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),oo.waitFor(i).next((()=>s))}getTargetCount(t){return oo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return oo.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),oo.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),oo.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),oo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return oo.resolve(n)}containsKey(t,e){return oo.resolve(this.As.containsKey(e))}}
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
     */class eu{constructor(t,e){this.bs={},this.overlays={},this.Ps=new co(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new tu(this),this.indexManager=new jc,this.remoteDocumentCache=function(t){return new Jc(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Uc(e),this.Ds=new Gc(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Yc(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Dr("MemoryPersistence","Starting transaction:",t);const s=new nu(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((t=>this.referenceDelegate.xs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ns(t,e){return oo.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class nu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class su{constructor(t){this.persistence=t,this.ks=new Wc,this.Os=null}static Ms(t){return new su(t)}get Fs(){if(this.Os)return this.Os;throw xr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),oo.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),oo.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),oo.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oo.forEach(this.Fs,(n=>{const s=eo.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s,Xr.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return oo.or([()=>oo.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
     */class iu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=s}static Vi(t,e){let n=rc(),s=rc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new iu(t,e.fromCache,n,s)}}
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
     */class ru{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ci(t,e).next((i=>i||this.xi(t,e,s,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return oo.resolve(null)}xi(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||s.isEqual(Xr.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const r=this.ki(e,i);return this.Oi(e,r,n,s)?this.Ni(t,e):(Ar()<=vt.DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ya(e)),this.Mi(t,r,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Xr.fromTimestamp(1e9===s?new Wr(n+1,0):new Wr(n,s));return new so(i,eo.empty(),e)}(s,-1)))}))}ki(t,e){let n=new go(wa(t));return e.forEach(((e,s)=>{va(t,s)&&(n=n.add(s))})),n}Oi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(t,e){return Ar()<=vt.DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",ya(e)),this.Di.getDocumentsMatchingQuery(t,e,so.min())}Mi(t,e,n,s){return this.Di.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class ou{constructor(t,e,n,s){this.persistence=t,this.Fi=e,this.wt=s,this.$i=new lo(Gr),this.Bi=new Wa((t=>Qo(t)),Wo),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hc(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}async function au(t,e){const n=Or(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=rc();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function cu(t){const e=Or(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function uu(t,e){const n=Or(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(vo.EMPTY_BYTE_STRING,Xr.min()).withLastLimboFreeSnapshotVersion(Xr.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Vs.updateTargetData(t,u))}));let a=Ya(),c=rc();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=rc(),i=rc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Ya();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Xr.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Gi:s,Qi:i}}))}(t,r,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!s.isEqual(Xr.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return oo.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}async function hu(t,e,n){const s=Or(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ao(t))throw t;Dr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function lu(t,e,n){const s=Or(t);let i=Xr.min(),r=rc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Or(t),i=s.Bi.get(n);return void 0!==i?oo.resolve(s.$i.get(i)):s.Vs.getTargetData(e,n)}(s,t,pa(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Fi.getDocumentsMatchingQuery(t,e,n?i:Xr.min(),n?r:rc()))).next((t=>(function(t,e,n){let s=Xr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Li.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ji:r})))))}class du{constructor(){this.activeTargetIds=ac()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fu{constructor(){this.Fr=new du,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new du,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class pu{Br(t){}shutdown(){}}
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
     */class gu{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const mu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class yu{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
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
     */class vu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,i){const r=this.oo(t,e);Dr("RestConnection","Sending: ",r,n);const o={};return this.uo(o,s,i),this.co(t,r,o,n).then((t=>(Dr("RestConnection","Received: ",t),t)),(e=>{throw _r("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,s,i,r){return this.ro(t,e,n,s,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Sr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=mu[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((i,r)=>{const o=new Er;o.listenOnce(gr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case pr.NO_ERROR:const e=o.getResponseJson();Dr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case pr.TIMEOUT:Dr("Connection",'RPC "'+t+'" timed out'),r(new Mr(Rr.DEADLINE_EXCEEDED,"Request time out"));break;case pr.HTTP_ERROR:const n=o.getStatus();if(Dr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Rr).indexOf(e)>=0?e:Rr.UNKNOWN}(t.status);r(new Mr(e,t.message))}else r(new Mr(Rr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Mr(Rr.UNAVAILABLE,"Connection failed."));break;default:xr()}}finally{Dr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new ur,r=ss(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new wr({})),this.uo(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())||"object"==typeof navigator&&"ReactNative"===navigator.product||st().indexOf("Electron/")>=0||function(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||st().indexOf("MSAppHost/")>=0||it()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");Dr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,h=!1;const l=new yu({jr:t=>{h?Dr("Connection","Not sending because WebChannel is closed:",t):(u||(Dr("Connection","Opening WebChannel transport."),c.open(),u=!0),Dr("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,br.EventType.OPEN,(()=>{h||Dr("Connection","WebChannel transport opened.")})),d(c,br.EventType.CLOSE,(()=>{h||(h=!0,Dr("Connection","WebChannel transport closed"),l.eo())})),d(c,br.EventType.ERROR,(t=>{h||(h=!0,_r("Connection","WebChannel transport errored:",t),l.eo(new Mr(Rr.UNAVAILABLE,"The operation could not be completed")))})),d(c,br.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Lr(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Dr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ha[t];if(void 0!==e)return Qa(e)}(t),n=i.message;void 0===e&&(e=Rr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,l.eo(new Mr(e,n)),c.close()}else Dr("Connection","WebChannel received:",n),l.no(n)}})),d(r,mr.STAT_EVENT,(t=>{t.stat===yr?Dr("Connection","Detected buffering proxy"):t.stat===vr&&Dr("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.Zr()}),0),l}}function wu(){return"undefined"!=typeof document?document:null}
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
     */function bu(t){return new wc(t,!0)}class Eu{constructor(t,e,n=1e3,s=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&Dr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
     */class Tu extends class{constructor(t,e,n,s,i,r,o,a){this.js=t,this.Ao=n,this.Ro=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Eu(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Rr.RESOURCE_EXHAUSTED?(kr(e.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Rr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Mr(Rr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Dr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:xr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.dt?(Lr(void 0===e||"string"==typeof e),vo.fromBase64String(e||"")):(Lr(void 0===e||e instanceof Uint8Array),vo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Rr.UNKNOWN:Qa(t.code);return new Mr(e,t.message||"")}(o);n=new dc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Tc(t,s.document.name),r=bc(s.document.updateTime),o=new Ko({mapValue:{fields:s.document.fields}}),a=zo.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new hc(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Tc(t,s.document),r=s.readTime?bc(s.readTime):Xr.min(),o=zo.newNoDocument(i,r),a=s.removedTargetIds||[];n=new hc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Tc(t,s.document),r=s.removedTargetIds||[];n=new hc([],r,i,null)}else{if(!("filter"in e))return xr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new za(s),r=t.targetId;n=new lc(r,i)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return Xr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Xr.min():e.readTime?bc(e.readTime):Xr.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Sc(this.wt),e.addTarget=function(t,e){let n;const s=e.target;return n=Xo(s)?{documents:Ac(t,s)}:{query:Dc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.dt?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(Xr.min())>0&&(n.readTime=function(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return xr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Sc(this.wt),e.removeTarget=t,this.Mo(e)}}
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
     */class Iu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Mr(Rr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ro(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Rr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Mr(Rr.UNKNOWN,t.toString())}))}ao(t,e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ao(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Rr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Mr(Rr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Su{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(kr(e),this.su=!1):Dr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
     */class Cu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Ru(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Or(t);e.lu.add(4),await Du(e),e._u.set("Unknown"),e.lu.delete(4),await Au(e)}(this))}))})),this._u=new Su(n,s)}}async function Au(t){if(Ru(t))for(const e of t.fu)await e(!0)}async function Du(t){for(const e of t.fu)await e(!1)}function ku(t,e){const n=Or(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ou(n)?Lu(n):Bu(n).Co()&&Nu(n,e))}function _u(t,e){const n=Or(t),s=Bu(n);n.hu.delete(e),s.Co()&&xu(n,e),0===n.hu.size&&(s.Co()?s.ko():Ru(n)&&n._u.set("Unknown"))}function Nu(t,e){t.wu.Nt(e.targetId),Bu(t).Qo(e)}function xu(t,e){t.wu.Nt(e),Bu(t).jo(e)}function Lu(t){t.wu=new pc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Bu(t).start(),t._u.iu()}function Ou(t){return Ru(t)&&!Bu(t).Do()&&t.hu.size>0}function Ru(t){return 0===Or(t).lu.size}function Mu(t){t.wu=void 0}async function Fu(t){t.hu.forEach(((e,n)=>{Nu(t,e)}))}async function Pu(t,e){Mu(t),Ou(t)?(t._u.uu(e),Lu(t)):t._u.set("Unknown")}async function Vu(t,e,n){if(t._u.set("Online"),e instanceof dc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.hu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.hu.delete(s),t.wu.removeTarget(s))}(t,e)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await $u(t,n)}else if(e instanceof hc?t.wu.Ut(e):e instanceof lc?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Xr.min()))try{const e=await cu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(s);i&&t.hu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(vo.EMPTY_BYTE_STRING,n.snapshotVersion)),xu(t,e);const s=new $c(n.target,e,1,n.sequenceNumber);Nu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Dr("RemoteStore","Failed to raise snapshot:",e),await $u(t,e)}}async function $u(t,e,n){if(!ao(e))throw e;t.lu.add(1),await Du(t),t._u.set("Offline"),n||(n=()=>cu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Au(t)}))}async function Uu(t,e){const n=Or(t);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const s=Ru(n);n.lu.add(3),await Du(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Au(n)}function Bu(t){return t.mu||(t.mu=function(t,e,n){const s=Or(t);return s.tu(),new Tu(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)
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
     */}(t.datastore,t.asyncQueue,{zr:Fu.bind(null,t),Jr:Pu.bind(null,t),Go:Vu.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Ou(t)?Lu(t):t._u.set("Unknown")):(await t.mu.stop(),Mu(t))}))),t.mu
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
     */}class ju{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new ju(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Mr(Rr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(t,e){if(kr("AsyncQueue",`${e}: ${t}`),ao(t))return new Mr(Rr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class Ku{constructor(t){this.comparator=t?(e,n)=>t(e,n)||eo.comparator(e.key,n.key):(t,e)=>eo.comparator(t.key,e.key),this.keyedMap=Za(),this.sortedSet=new lo(this.comparator)}static emptySet(t){return new Ku(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ku))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ku;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class zu{constructor(){this.yu=new lo(eo.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):xr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Hu{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Hu(t,e,Ku.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ga(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class Gu{constructor(){this.Iu=void 0,this.listeners=[]}}class Qu{constructor(){this.queries=new Wa((t=>ma(t)),ga),this.onlineState="Unknown",this.Tu=new Set}}function Wu(t,e){const n=Or(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Au(t)&&(s=!0);i.Iu=t}}s&&Yu(n)}function Xu(t,e,n){const s=Or(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Yu(t){t.Tu.forEach((t=>{t.next()}))}class Ju{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Hu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Hu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
     */class Zu{constructor(t){this.key=t}}class th{constructor(t){this.key=t}}class eh{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=rc(),this.mutatedKeys=rc(),this.Lu=wa(t),this.Uu=new Ku(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new zu,s=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=va(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:r,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xr()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Hu(this.query,t.Uu,s,i,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new zu,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=rc(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new th(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Zu(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=rc();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Hu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class nh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class sh{constructor(t){this.key=t,this.Xu=!1}}class ih{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new Wa((t=>ma(t)),ga),this.ec=new Map,this.nc=new Set,this.sc=new lo(eo.comparator),this.ic=new Map,this.rc=new Wc,this.oc={},this.uc=new Map,this.cc=Kc.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function rh(t,e){const n=function(t){const e=Or(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ah.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uh.bind(null,e),e.Zu.Go=Wu.bind(null,e.eventManager),e.Zu.lc=Xu.bind(null,e.eventManager),e}(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const t=await function(t,e){const n=Or(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Vs.getTargetData(t,e).next((i=>i?(s=i,oo.resolve(s)):n.Vs.allocateTargetId(t).next((i=>(s=new $c(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.$i.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}(n.localStore,pa(e));n.isPrimaryClient&&ku(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.hc=(e,n,s)=>async function(t,e,n,s){let i=e.view.Ku(n);i.Oi&&(i=await lu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return dh(t,e.targetId,o.zu),o.snapshot}(t,e,n,s);const i=await lu(t.localStore,e,!0),r=new eh(e,i.ji),o=r.Ku(i.documents),a=uc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);dh(t,n,c.zu);const u=new nh(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}(n,e,s,"current"===r)}return i}async function oh(t,e){const n=Or(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter((t=>!ga(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),_u(n.remoteStore,s.targetId),hh(n,s.targetId)})).catch(ro)):(hh(n,s.targetId),await hu(n.localStore,s.targetId,!0))}async function ah(t,e){const n=Or(t);try{const t=await uu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ic.get(e);s&&(Lr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Xu=!0:t.modifiedDocuments.size>0?Lr(s.Xu):t.removedDocuments.size>0&&(Lr(s.Xu),s.Xu=!1))})),await gh(n,t,e)}catch(t){await ro(t)}}function ch(t,e,n){const s=Or(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.tc.forEach(((n,s)=>{const i=s.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Or(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(s=!0)})),s&&Yu(n)}(s.eventManager,e),t.length&&s.Zu.Go(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uh(t,e,n){const s=Or(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let t=new lo(eo.comparator);t=t.insert(r,zo.newNoDocument(r,Xr.min()));const n=rc().add(r),i=new cc(Xr.min(),new Map,new go(Gr),t,n);await ah(s,i),s.sc=s.sc.remove(r),s.ic.delete(e),ph(s)}else await hu(s.localStore,e,!1).then((()=>hh(s,e,n))).catch(ro)}function hh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||lh(t,e)}))}function lh(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(_u(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),ph(t))}function dh(t,e,n){for(const s of n)s instanceof Zu?(t.rc.addReference(s.key,e),fh(t,s)):s instanceof th?(Dr("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||lh(t,s.key)):xr()}function fh(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(Dr("SyncEngine","New document in limbo: "+n),t.nc.add(s),ph(t))}function ph(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new eo(Jr.fromString(e)),s=t.cc.next();t.ic.set(s,new sh(n)),t.sc=t.sc.insert(n,s),ku(t.remoteStore,new $c(pa(da(n.path)),s,2,co.ot))}}async function gh(t,e,n){const s=Or(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((t,a)=>{o.push(s.hc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=iu.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Zu.Go(i),await async function(t,e){const n=Or(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>oo.forEach(e,(e=>oo.forEach(e.Pi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>oo.forEach(e.vi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!ao(t))throw t;Dr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(e,i)}}}(s.localStore,r))}async function mh(t,e){const n=Or(t);if(!n.currentUser.isEqual(e)){Dr("SyncEngine","User change. New user:",e.toKey());const t=await au(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Mr(Rr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gh(n,t.Ki)}}function yh(t,e){const n=Or(t),s=n.ic.get(e);if(s&&s.Xu)return rc().add(s.key);{let t=rc();const s=n.ec.get(e);if(!s)return t;for(const e of s){const s=n.tc.get(e);t=t.unionWith(s.view.qu)}return t}}class vh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=bu(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return function(t,e,n,s){return new ou(t,e,n,s)}(this.persistence,new ru,t.initialUser,this.wt)}_c(t){return new eu(su.Ms,this.wt)}dc(t){return new fu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ch(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=mh.bind(null,this.syncEngine),await async function(t,e){const n=Or(t);e?(n.lu.delete(2),await Au(n)):e||(n.lu.add(2),await Du(n),n._u.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qu}createDatastore(t){const e=bu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new vu(s));var s;return function(t,e,n,s){return new Iu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>ch(this.syncEngine,t,0),r=gu.V()?new gu:new pu,new Cu(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new ih(t,e,n,s,i,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Or(t);Dr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Du(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
     */class bh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class Eh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ir.UNAUTHENTICATED,this.clientId=Hr.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Dr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Dr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Mr(Rr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Th(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Dr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await au(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new vh)),t.offlineComponents}(t);Dr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Uu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Uu(e.remoteStore,n))),t.onlineComponents=e}async function Ih(t){const e=await async function(t){return t.onlineComponents||(Dr("FirestoreClient","Using default OnlineComponentProvider"),await Th(t,new wh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=rh.bind(null,e.syncEngine),n.onUnlisten=oh.bind(null,e.syncEngine),n}function Sh(t,e,n={}){const s=new Fr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new bh({next:r=>{e.enqueueAndForget((()=>async function(t,e){const n=Or(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new Mr(Rr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new Mr(Rr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new Ju(da(n.path),r,{includeMetadataChanges:!0,Du:!0});return async function(t,e){const n=Or(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Gu),i)try{r.Iu=await n.onListen(s)}catch(t){const n=qu(t,`Initialization of query '${ya(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Yu(n)}(t,o)}(await Ih(t),t.asyncQueue,e,n,s))),s.promise}const Ch=new Map;
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
     */function Ah(t,e,n){if(!n)throw new Mr(Rr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Dh(t){if(!eo.isDocumentKey(t))throw new Mr(Rr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Mr(Rr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":xr()}(t);throw new Mr(Rr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class _h{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Mr(Rr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Mr(Rr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Mr(Rr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class Nh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _h({}),this._settingsFrozen=!1,t instanceof Do?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Mr(Rr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(t.options.projectId)}(t))}get app(){if(!this._app)throw new Mr(Rr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Mr(Rr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _h(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Vr;switch(t.type){case"gapi":const e=t.client;return Lr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new jr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Mr(Rr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ch.get(t);e&&(Dr("ComponentProvider","Removing Datastore"),Ch.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class xh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xh(this.firestore,t,this._key)}}class Lh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Lh(this.firestore,t,this._query)}}class Oh extends Lh{constructor(t,e,n){super(t,e,da(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xh(this.firestore,null,new eo(t))}withConverter(t){return new Oh(this.firestore,t,this._path)}}
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
class Rh{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Eu(this,"async_queue_retry"),this.Kc=()=>{const t=wu();t&&Dr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=wu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=wu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Fr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!ao(t))throw t;Dr("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw kr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const s=ju.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(s),s}Gc(){this.Bc&&xr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Mh extends Nh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Rh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fh(this),this._firestoreClient.terminate()}}function Fh(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Ao(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Eh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
     */class Ph{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Mr(Rr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new to(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Vh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vh(vo.fromBase64String(t))}catch(t){throw new Mr(Rr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Vh(vo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class $h{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Mr(Rr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Mr(Rr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Gr(this._lat,t._lat)||Gr(this._long,t._long)}}const Uh=new RegExp("[~\\*/\\[\\]]");function Bh(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Mr(Rr.INVALID_ARGUMENT,a+t+c)
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
     */}class jh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new qh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Kh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class qh extends jh{data(){return super.data()}}function Kh(t,e){return"string"==typeof e?function(t,e,n){if(e.search(Uh)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ph(...e.split("."))._internalPath}catch(s){throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Ph?e._internalPath:e._delegate._internalPath}
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
     */class zh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hh extends jh{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Kh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Gh extends Hh{data(t={}){return super.data(t)}}
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
function Qh(t){t=kh(t,xh);const e=kh(t.firestore,Mh);return Sh(function(t){return t._firestoreClient||Fh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),t._key).then((n=>function(t,e,n){const s=n.docs.get(e._key),i=new Wh(t);return new Hh(t,i,e._key,s,new zh(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class Wh extends class{convertValue(t,e="none"){switch(xo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Eo(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(To(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw xr()}}convertObject(t,e){const n={};return ho(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new $h(Eo(t.latitude),Eo(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=So(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Co(t));default:return null}}convertTimestamp(t){const e=bo(t);return new Wr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Jr.fromString(t);Lr(Fc(n));const s=new Do(n.get(1),n.get(3)),i=new eo(n.popFirst(5));return s.isEqual(e)||kr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xh(this.firestore,null,e)}}!function(t,e=!0){Sr="9.9.0",Xt(new pt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Mh(s,new Ur(t.getProvider("auth-internal")),new Kr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),ee(Tr,"3.4.12",t),ee(Tr,"3.4.12","esm2017")}();const Xh={},Yh=new Set,Jh=W(1,9,2021),Zh=async(t,e,n)=>{try{return(await Qh(function(t,e,...n){if(t=ft(t),1===arguments.length&&(e=Hr.I()),Ah("doc","path",e),t instanceof Nh){const s=Jr.fromString(e,...n);return Dh(s),new xh(t,null,new eo(s))}{if(!(t instanceof xh||t instanceof Oh))throw new Mr(Rr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Jr.fromString(e,...n));return Dh(s),new xh(t.firestore,t instanceof Oh?t.converter:null,new eo(s))}}(t,e,n))).data()}catch(t){console.warn("Your DB emulations are likely not running correctly"),console.error(t)}},tl=(t,e)=>{const n=W(1,e,t),s=new Date,i=Q(s)[2];return Jh<=n&&t<=i},el=async(t,e,n)=>{var s;if(!tl(t,e))return null;const i=`${t}-${`${e}`.padStart(2,"0")}`;if(Yh.has(i))return await(r=1,new Promise((t=>setTimeout(t,1e3*r)))),nl(t,e);var r;console.count(i),console.count("DB reads"),Yh.add(i),console.log(Yh,Xh);const o=null!==(s=await Zh(n,"memes",i))&&void 0!==s?s:{};return((t,e,n)=>{Xh[t]||(Xh[t]={}),Xh[t][e]=n})(t,e,o),Yh.delete(i),console.log(Yh,Xh),o},nl=(t,e)=>{try{return Xh[t][e]}catch(t){console.count("Cache errors")}},sl=(t,e,n)=>{var s;return null!==(s=nl(t,e))&&void 0!==s?s:el(t,e,n)},il=async(t,e,n=0)=>{if(!t)return null;if(n>=12)throw new Error("DB recursion");const[s,i,r]=Q(t);if(!tl(r,i))return null;try{return Xh[r][i][s]}catch(t){console.count("Cache errors")}return await sl(r,i,e),il(t,e,n+1)};function rl(e){let n;return{c(){n=d("header"),n.innerHTML='<a href="/"><img class="inline-block" style="height: 2.5em;" src="./favicon.png" alt="Logo"/> \n    <h1 class="inline-block ml-4">Physics &amp; Maths Pirate</h1></a>',y(n,"class","my-8 flex")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class ol extends H{constructor(t){super(),z(this,t,null,rl,r,{})}}function al(e){let n;return{c(){n=d("p"),n.textContent="It's loading, bro..."},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class cl extends H{constructor(t){super(),z(this,t,null,al,r,{})}}function ul(t){let e,n;return{c(){e=d("br"),n=f("\n      (Sneak peek)")},m(t,s){h(t,e,s),h(t,n,s)},d(t){t&&l(e),t&&l(n)}}}function hl(e){let n,s,i,r,o,a,g,m,w=X(e[0],"/")+"",b=e[2]&&ul();return{c(){n=d("tr"),s=d("td"),i=f(w),r=p(),b&&b.c(),o=p(),a=d("td"),g=d("img"),y(s,"class","text-center"),y(g,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),c(g.src,m=`memes/${e[1]}`)||y(g,"src",m),y(g,"alt","Meme")},m(t,e){h(t,n,e),u(n,s),u(s,i),u(s,r),b&&b.m(s,null),u(n,o),u(n,a),u(a,g)},p(t,[e]){1&e&&w!==(w=X(t[0],"/")+"")&&v(i,w),t[2]?b||(b=ul(),b.c(),b.m(s,null)):b&&(b.d(1),b=null),2&e&&!c(g.src,m=`memes/${t[1]}`)&&y(g,"src",m)},i:t,o:t,d(t){t&&l(n),b&&b.d()}}}function ll(t,e,n){let{date:s}=e,{src:i}=e,{isTomorrow:r=!1}=e;return t.$$set=t=>{"date"in t&&n(0,s=t.date),"src"in t&&n(1,i=t.src),"isTomorrow"in t&&n(2,r=t.isTomorrow)},[s,i,r]}class dl extends H{constructor(t){super(),z(this,t,ll,hl,r,{date:0,src:1,isTomorrow:2})}}function fl(t,e,n){const s=t.slice();return s[18]=e[n],s}function pl(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function gl(t){let e,n,s,i,r,o,a=!Object.keys(t[16]).length,c=Object.keys(t[16]).map(t[13]).sort(Nl),f=[];for(let e=0;e<c.length;e+=1)f[e]=yl(fl(t,c,e));const m=t=>V(f[t],1,1,(()=>{f[t]=null}));let y={ctx:t,current:null,token:null,hasCatch:!1,pending:El,then:wl,catch:vl,value:17,blocks:[,,,]};$(s=t[6],y);let v=a&&Tl();return{c(){e=d("tbody");for(let t=0;t<f.length;t+=1)f[t].c();n=p(),y.block.c(),i=p(),v&&v.c(),r=g()},m(t,s){h(t,e,s);for(let t=0;t<f.length;t+=1)f[t].m(e,null);u(e,n),y.block.m(e,y.anchor=null),y.mount=()=>e,y.anchor=null,h(t,i,s),v&&v.m(t,s),h(t,r,s),o=!0},p(i,o){if(t=i,387&o){let s;for(c=Object.keys(t[16]).map(t[13]).sort(Nl),s=0;s<c.length;s+=1){const i=fl(t,c,s);f[s]?(f[s].p(i,o),P(f[s],1)):(f[s]=yl(i),f[s].c(),P(f[s],1),f[s].m(e,n))}for(M(),s=c.length;s<f.length;s+=1)m(s);F()}y.ctx=t,64&o&&s!==(s=t[6])&&$(s,y)||U(y,t,o),128&o&&(a=!Object.keys(t[16]).length),a?v||(v=Tl(),v.c(),v.m(r.parentNode,r)):v&&(v.d(1),v=null)},i(t){if(!o){for(let t=0;t<c.length;t+=1)P(f[t]);P(y.block),o=!0}},o(t){f=f.filter(Boolean);for(let t=0;t<f.length;t+=1)V(f[t]);for(let t=0;t<3;t+=1){V(y.blocks[t])}o=!1},d(t){t&&l(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(f,t),y.block.d(),y.token=null,y=null,t&&l(i),v&&v.d(t),t&&l(r)}}}function ml(t){let e,n;return e=new dl({props:{date:W(t[18],t[0],t[1]),src:t[16][t[18]]}}),{c(){B(e.$$.fragment)},m(t,s){j(e,t,s),n=!0},p(t,n){const s={};131&n&&(s.date=W(t[18],t[0],t[1])),128&n&&(s.src=t[16][t[18]]),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function yl(t){let e,n,s=W(t[18],t[0],t[1])<=J(X(t[8])),i=s&&ml(t);return{c(){i&&i.c(),e=g()},m(t,s){i&&i.m(t,s),h(t,e,s),n=!0},p(t,n){131&n&&(s=W(t[18],t[0],t[1])<=J(X(t[8]))),s?i?(i.p(t,n),131&n&&P(i,1)):(i=ml(t),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(M(),V(i,1,1,(()=>{i=null})),F())},i(t){n||(P(i),n=!0)},o(t){V(i),n=!1},d(t){i&&i.d(t),t&&l(e)}}}function vl(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function wl(t){let e,n,s=t[17]&&bl(t);return{c(){s&&s.c(),e=g()},m(t,i){s&&s.m(t,i),h(t,e,i),n=!0},p(t,n){t[17]?s?(s.p(t,n),64&n&&P(s,1)):(s=bl(t),s.c(),P(s,1),s.m(e.parentNode,e)):s&&(M(),V(s,1,1,(()=>{s=null})),F())},i(t){n||(P(s),n=!0)},o(t){V(s),n=!1},d(t){s&&s.d(t),t&&l(e)}}}function bl(t){let e,n;return e=new dl({props:{date:t[9],src:t[17],isTomorrow:!0}}),{c(){B(e.$$.fragment)},m(t,s){j(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.src=t[17]),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function El(e){let n,s;return n=new cl({}),{c(){B(n.$$.fragment)},m(t,e){j(n,t,e),s=!0},p:t,i(t){s||(P(n.$$.fragment,t),s=!0)},o(t){V(n.$$.fragment,t),s=!1},d(t){q(n,t)}}}function Tl(t){let e;return{c(){e=d("tfoot"),e.textContent="No memes that month :("},m(t,n){h(t,e,n)},d(t){t&&l(e)}}}function Il(e){let n,s,i;return s=new cl({}),{c(){n=d("tfoot"),B(s.$$.fragment)},m(t,e){h(t,n,e),j(s,n,null),i=!0},p:t,i(t){i||(P(s.$$.fragment,t),i=!0)},o(t){V(s.$$.fragment,t),i=!1},d(t){t&&l(n),q(s)}}}function Sl(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Cl(e){let n;function s(t,e){return t[15]?Dl:Al}let i=s(e),r=i(e);return{c(){r.c(),n=g()},m(t,e){r.m(t,e),h(t,n,e)},p(t,e){i===(i=s(t))&&r?r.p(t,e):(r.d(1),r=i(t),r&&(r.c(),r.m(n.parentNode,n)))},i:t,o:t,d(t){r.d(t),t&&l(n)}}}function Al(e){let n;return{c(){n=d("p"),n.textContent="No memes that day :(",y(n,"class","w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center")},m(t,e){h(t,n,e)},p:t,d(t){t&&l(n)}}}function Dl(t){let e,n;return{c(){e=d("img"),y(e,"class","max-w-sm mx-auto w-1/2 sm:w-auto"),c(e.src,n=`memes/${t[15]}`)||y(e,"src",n),y(e,"alt","Meme")},m(t,n){h(t,e,n)},p(t,s){32&s&&!c(e.src,n=`memes/${t[15]}`)&&y(e,"src",n)},d(t){t&&l(e)}}}function kl(e){let n,s;return n=new cl({}),{c(){B(n.$$.fragment)},m(t,e){j(n,t,e),s=!0},p:t,i(t){s||(P(n.$$.fragment,t),s=!0)},o(t){V(n.$$.fragment,t),s=!1},d(t){q(n,t)}}}function _l(t){let e,n,i,r,o,a,c,g,b,E,T,I,S,C,A,D,k,_,N,x,L,O,R,M,F,K,z,H,G,Q,W,X,Y,J,Z,tt,et,nt,st,it=`${t[0]}`.padStart(2,"0")+"";e=new ol({});let rt={ctx:t,current:null,token:null,hasCatch:!1,pending:Il,then:gl,catch:pl,value:16,blocks:[,,,]};$(F=t[7],rt);let ot={ctx:t,current:null,token:null,hasCatch:!1,pending:kl,then:Cl,catch:Sl,value:15,blocks:[,,,]};return $(X=t[5],ot),{c(){B(e.$$.fragment),n=p(),i=d("main"),r=d("h2"),r.textContent="Meme archive",o=p(),a=d("div"),c=d("div"),g=d("div"),b=d("span"),b.textContent="<",T=p(),I=d("p"),S=f(it),C=f("/"),A=f(t[1]),D=p(),k=d("div"),_=d("div"),N=d("span"),N.textContent=">",L=p(),O=d("table"),R=d("thead"),R.innerHTML='<tr><th class="border-2">Date</th> \n        <th class="border-2">Meme</th></tr>',M=p(),rt.block.c(),K=p(),z=d("section"),H=d("h2"),H.textContent="Specify a date",G=p(),Q=d("input"),W=p(),ot.block.c(),Y=p(),J=d("p"),J.textContent="DVS-style dates accepted",Z=p(),tt=d("footer"),y(b,"class","-mt-1.5"),y(g,"class","flex-1 btn"),y(g,"disabled",E=!t[4]),y(c,"class","w-1/4"),y(I,"class","flex-1 my-2 text-lg text-center"),y(N,"class","-mt-1.5"),y(_,"class","flex-1 btn"),y(_,"disabled",x=!t[3]),y(k,"class","w-1/4"),y(a,"class","flex sm:w-1/4 mx-auto my-4"),y(O,"class","table-auto w-full max-w-4xl mx-auto border-white border-2"),y(Q,"type","text"),y(J,"class","mt-4"),y(z,"class","mt-48")},m(s,l){j(e,s,l),h(s,n,l),h(s,i,l),u(i,r),u(i,o),u(i,a),u(a,c),u(c,g),u(g,b),u(a,T),u(a,I),u(I,S),u(I,C),u(I,A),u(a,D),u(a,k),u(k,_),u(_,N),u(i,L),u(i,O),u(O,R),u(O,M),rt.block.m(O,rt.anchor=null),rt.mount=()=>O,rt.anchor=null,h(s,K,l),h(s,z,l),u(z,H),u(z,G),u(z,Q),w(Q,t[2]),u(z,W),ot.block.m(z,ot.anchor=null),ot.mount=()=>z,ot.anchor=Y,u(z,Y),u(z,J),h(s,Z,l),h(s,tt,l),et=!0,nt||(st=[m(g,"click",t[11]),m(_,"click",t[12]),m(Q,"input",t[14])],nt=!0)},p(e,[n]){t=e,(!et||16&n&&E!==(E=!t[4]))&&y(g,"disabled",E),(!et||1&n)&&it!==(it=`${t[0]}`.padStart(2,"0")+"")&&v(S,it),(!et||2&n)&&v(A,t[1]),(!et||8&n&&x!==(x=!t[3]))&&y(_,"disabled",x),rt.ctx=t,128&n&&F!==(F=t[7])&&$(F,rt)||U(rt,t,n),4&n&&Q.value!==t[2]&&w(Q,t[2]),ot.ctx=t,32&n&&X!==(X=t[5])&&$(X,ot)||U(ot,t,n)},i(t){et||(P(e.$$.fragment,t),P(rt.block),P(ot.block),et=!0)},o(t){V(e.$$.fragment,t);for(let t=0;t<3;t+=1){V(rt.blocks[t])}for(let t=0;t<3;t+=1){V(ot.blocks[t])}et=!1},d(t){q(e,t),t&&l(n),t&&l(i),rt.block.d(),rt.token=null,rt=null,t&&l(K),t&&l(z),ot.block.d(),ot.token=null,ot=null,t&&l(Z),t&&l(tt),nt=!1,s(st)}}}const Nl=(t,e)=>t-e;function xl(t,e,n){let s,i,r,{db:o}=e;const a=new Date,c=new Date(Number(a)+24*Math.pow(60,2)*Math.pow(10,3));let u=a.getMonth()+1,h=a.getFullYear(),l=X(a),d=!0,f=!0;return t.$$set=t=>{"db"in t&&n(10,o=t.db)},t.$$.update=()=>{3&t.$$.dirty&&(u<1?(n(0,u=12),n(1,h--,h)):u>12&&(n(0,u=1),n(1,h++,h))),3&t.$$.dirty&&n(3,d=!(a.getMonth()+1===u&&a.getFullYear()===h)),3&t.$$.dirty&&n(4,f=Jh<W(1,u,h)),1027&t.$$.dirty&&n(7,s=sl(h,u,o)),1024&t.$$.dirty&&n(6,i=il(c,o)),1028&t.$$.dirty&&n(5,r=il(J(l),o))},[u,h,l,d,f,r,i,s,a,c,o,()=>f&&n(0,u--,u),()=>d&&n(0,u++,u),t=>parseInt(t),function(){l=this.value,n(2,l)}]}const Ll="@firebase/installations",Ol="0.5.12",Rl=1e4,Ml="w:0.5.12",Fl="FIS_v2",Pl=36e5,Vl=new ct("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function $l(t){return t instanceof at&&t.code.includes("request-failed")}
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
     */function Ul({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Bl(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function jl(t,e){const n=(await e.json()).error;return Vl.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ql({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Kl(t,{refreshToken:e}){const n=ql(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
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
     */(e)),n}async function zl(t){const e=await t();return e.status>=500&&e.status<600?t():e}
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
function Hl(t){return new Promise((e=>{setTimeout(e,t)}))}
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
const Gl=/^[cdef][\w-]{21}$/;function Ql(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
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
     */(t);return Gl.test(e)?e:""}catch(t){return""}}function Wl(t){return`${t.appName}!${t.appId}`}
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
     */const Xl=new Map;function Yl(t,e){const n=Wl(t);Jl(n,e),function(t,e){const n=function(){!Zl&&"BroadcastChannel"in self&&(Zl=new BroadcastChannel("[Firebase] FID Change"),Zl.onmessage=t=>{Jl(t.data.key,t.data.fid)});return Zl}();n&&n.postMessage({key:t,fid:e});0===Xl.size&&Zl&&(Zl.close(),Zl=null)}(n,e)}function Jl(t,e){const n=Xl.get(t);if(n)for(const t of n)t(e)}let Zl=null;
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
const td="firebase-installations-store";let ed=null;function nd(){return ed||(ed=Ft("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(td)}})),ed}async function sd(t,e){const n=Wl(t),s=(await nd()).transaction(td,"readwrite"),i=s.objectStore(td),r=await i.get(n);return await i.put(e,n),await s.done,r&&r.fid===e.fid||Yl(t,e.fid),e}async function id(t){const e=Wl(t),n=(await nd()).transaction(td,"readwrite");await n.objectStore(td).delete(e),await n.done}async function rd(t,e){const n=Wl(t),s=(await nd()).transaction(td,"readwrite"),i=s.objectStore(td),r=await i.get(n),o=e(r);return void 0===o?await i.delete(n):await i.put(o,n),await s.done,!o||r&&r.fid===o.fid||Yl(t,o.fid),o}
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
     */async function od(t){let e;const n=await rd(t.appConfig,(n=>{const s=function(t){return ud(t||{fid:Ql(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(Vl.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ul(t),i=ql(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:Fl,appId:t.appId,sdkVersion:Ml},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await zl((()=>fetch(s,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Bl(t.authToken)}}throw await jl("Create Installation",c)}(t,e);return sd(t.appConfig,n)}catch(n){throw $l(n)&&409===n.customData.serverCode?await id(t.appConfig):await sd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:s}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ad(t)}:{installationEntry:e}}(t,s);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function ad(t){let e=await cd(t.appConfig);for(;1===e.registrationStatus;)await Hl(100),e=await cd(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await od(t);return n||e}return e}function cd(t){return rd(t,(t=>{if(!t)throw Vl.create("installation-not-found");return ud(t)}))}function ud(t){return 1===(e=t).registrationStatus&&e.registrationTime+Rl<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
     */}async function hd({appConfig:t,heartbeatServiceProvider:e},n){const s=function(t,{fid:e}){return`${Ul(t)}/${e}/authTokens:generate`}
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
     */(t,n),i=Kl(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:Ml,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await zl((()=>fetch(s,a)));if(c.ok){return Bl(await c.json())}throw await jl("Generate Auth Token",c)}async function ld(t,e=!1){let n;const s=await rd(t.appConfig,(s=>{if(!fd(s))throw Vl.create("not-registered");const i=s.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Pl}(t)}(i))return s;if(1===i.requestStatus)return n=async function(t,e){let n=await dd(t.appConfig);for(;1===n.authToken.requestStatus;)await Hl(100),n=await dd(t.appConfig);const s=n.authToken;return 0===s.requestStatus?ld(t,e):s}(t,e),s;{if(!navigator.onLine)throw Vl.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(s);return n=async function(t,e){try{const n=await hd(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await sd(t.appConfig,s),n}catch(n){if(!$l(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sd(t.appConfig,n)}else await id(t.appConfig);throw n}}(t,e),e}}));return n?await n:s.authToken}function dd(t){return rd(t,(t=>{if(!fd(t))throw Vl.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+Rl<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
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
     */}))}function fd(t){return void 0!==t&&2===t.registrationStatus}
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
async function pd(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await od(t);e&&await e}
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
     */(n);return(await ld(n,e)).token}function gd(t){return Vl.create("missing-app-config-values",{valueName:t})}
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
     */const md="installations",yd=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw gd("App Configuration");if(!t.name)throw gd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Yt(e,"heartbeat"),_delete:()=>Promise.resolve()}},vd=t=>{const e=Yt(t.getProvider("app").getImmediate(),md).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:s}=await od(e);return s?s.catch(console.error):ld(e).catch(console.error),n.fid}(e),getToken:t=>pd(e,t)}};Xt(new pt(md,yd,"PUBLIC")),Xt(new pt("installations-internal",vd,"PRIVATE")),ee(Ll,Ol),ee(Ll,Ol,"esm2017");
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
const wd="analytics",bd="https://www.googletagmanager.com/gtag/js",Ed=new It("@firebase/analytics");
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
function Td(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Id(t,e,n,s){return async function(i,r,o){try{"event"===i?await async function(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const s=await Td(n);for(const n of t){const t=s.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(t){Ed.error(t)}}(t,e,n,r,o):"config"===i?await async function(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const t=(await Td(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(t){Ed.error(t)}t("config",i,r)}(t,e,n,s,r,o):"consent"===i?t("consent","update",o):t("set",r)}catch(t){Ed.error(t)}}}
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
const Sd=new ct("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Cd=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Ad(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Dd(t,e=Cd,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Sd.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Sd.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _d;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),kd({appId:s,apiKey:i,measurementId:r},o,a,e)}async function kd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Cd){var r,o;const{appId:a,measurementId:c}=t;try{await function(t,e){return new Promise(((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(r),s(Sd.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(s,e)}catch(t){if(c)return Ed.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(r=t)||void 0===r?void 0:r.message}]`),{appId:a,measurementId:c};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Ad(s)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Sd.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(a),e}catch(e){const r=e;if(!function(t){if(!(t instanceof at&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r)){if(i.deleteThrottleMetadata(a),c)return Ed.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==r?void 0:r.message}]`),{appId:a,measurementId:c};throw e}const u=503===Number(null===(o=null==r?void 0:r.customData)||void 0===o?void 0:o.httpStatus)?dt(n,i.intervalMillis,30):dt(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,h),Ed.debug(`Calling attemptFetch again in ${u} millis`),kd(t,h,s,i)}}class _d{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function Nd(t,e,n,s,i,r,o){var a;const c=Dd(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Ed.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Ed.error(t))),e.push(c);const u=
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
async function(){var t;if(!rt())return Ed.warn(Sd.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ot()}catch(e){return Ed.warn(Sd.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?s.getId():void 0)),[h,l]=await Promise.all([c,u]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(bd))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${bd}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(r,h.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),i("config",h.measurementId,d),h.measurementId}
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
     */class xd{constructor(t){this.app=t}_delete(){return delete Ld[this.app.options.appId],Promise.resolve()}}let Ld={},Od=[];const Rd={};let Md,Fd,Pd="dataLayer",Vd=!1;function $d(){const t=[];if(it()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Sd.create("invalid-analytics-context",{errorInfo:e});Ed.warn(n.message)}}function Ud(t,e,n){$d();const s=t.options.appId;if(!s)throw Sd.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Sd.create("no-api-key");Ed.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ld[s])throw Sd.create("already-exists",{id:s});if(!Vd){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(Pd);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,s,i){let r=function(...t){window[s].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=Id(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}(Ld,Od,Rd,Pd,"gtag");Fd=t,Md=e,Vd=!0}Ld[s]=Nd(t,Od,Rd,e,Md,Pd,n);return new xd(t)}function Bd(t,e,n,s){t=ft(t),async function(t,e,n,s,i){if(i&&i.global)t("event",n,s);else{const i=await e;t("event",n,Object.assign(Object.assign({},s),{send_to:i}))}}(Fd,Ld[t.app.options.appId],e,n,s).catch((t=>Ed.error(t)))}const jd="@firebase/analytics",qd="0.8.0";Xt(new pt(wd,((t,{options:e})=>Ud(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Xt(new pt("analytics-internal",(function(t){try{const e=t.getProvider(wd).getImmediate();return{logEvent:(t,n,s)=>Bd(e,t,n,s)}}catch(t){throw Sd.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),ee(jd,qd),ee(jd,qd,"esm2017");
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
ee("firebase","9.9.0","app");const Kd=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:zt,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Jt.create("bad-app-name",{appName:String(s)});const i=Gt.get(s);if(i){if(ht(t,i.options)&&ht(n,i.config))return i;throw Jt.create("duplicate-app",{appName:s})}const r=new yt(s);for(const t of Qt.values())r.addComponent(t);const o=new Zt(t,n,r);return Gt.set(s,o),o}({apiKey:"AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",authDomain:"pmpirate.firebaseapp.com",projectId:"pmpirate",storageBucket:"pmpirate.appspot.com",messagingSenderId:"198590478768",appId:"1:198590478768:web:3d10abd6d006c0a0b93e75",measurementId:"G-19MDLJEYQG"});!function(t=te()){const e=Yt(t=ft(t),wd);e.isInitialized()?e.getImmediate():function(t,e={}){const n=Yt(t,wd);if(n.isInitialized()){const t=n.getImmediate();if(ht(e,n.getOptions()))return t;throw Sd.create("already-initialized")}n.initialize({options:e})}(t)}(Kd);const zd=function(t=te()){return Yt(t,"firestore").getImmediate()}(Kd);(location.href.includes("localhost")||location.href.includes("127.0.0.1"))&&function(t,e,n,s={}){var i;const r=(t=kh(t,Nh))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&_r("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ir.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[et(JSON.stringify({alg:"none",type:"JWT"})),et(JSON.stringify(r)),""].join(".")}(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Mr(Rr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ir(r)}t._authCredentials=new $r(new Pr(e,n))}}(zd,"localhost",8080);return new class extends H{constructor(t){super(),z(this,t,xl,_l,r,{db:10})}}({target:document.body,props:{db:zd}})}();
//# sourceMappingURL=archive.js.map
