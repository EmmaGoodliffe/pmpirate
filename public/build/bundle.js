
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update$1(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update$1($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.43.0' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

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

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

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
    class Deferred {
        constructor() {
            this.reject = () => { };
            this.resolve = () => { };
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        wrapCallback(callback) {
            return (error, value) => {
                if (error) {
                    this.reject(error);
                }
                else {
                    this.resolve(value);
                }
                if (typeof callback === 'function') {
                    // Attaching noop handler just in case developer wasn't expecting
                    // promises
                    this.promise.catch(() => { });
                    // Some of our callbacks don't expect a value and our own tests
                    // assert that the parameter length is 1
                    if (callback.length === 1) {
                        callback(error);
                    }
                    else {
                        callback(error, value);
                    }
                }
            };
        }
    }
    function isBrowserExtension() {
        const runtime = typeof chrome === 'object'
            ? chrome.runtime
            : typeof browser === 'object'
                ? browser.runtime
                : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
    }
    /**
     * This method checks if indexedDB is supported by current browser/service worker context
     * @return true if indexedDB is supported by current browser/service worker context
     */
    function isIndexedDBAvailable() {
        return typeof indexedDB === 'object';
    }
    /**
     * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
     * if errors occur during the database open operation.
     *
     * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
     * private browsing)
     */
    function validateIndexedDBOpenable() {
        return new Promise((resolve, reject) => {
            try {
                let preExist = true;
                const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
                const request = self.indexedDB.open(DB_CHECK_NAME);
                request.onsuccess = () => {
                    request.result.close();
                    // delete database only when it doesn't pre-exist
                    if (!preExist) {
                        self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                    }
                    resolve(true);
                };
                request.onupgradeneeded = () => {
                    preExist = false;
                };
                request.onerror = () => {
                    var _a;
                    reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
                };
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     *
     * This method checks whether cookie is enabled within current browser
     * @return true if cookie is enabled within current browser
     */
    function areCookiesEnabled() {
        if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
            return false;
        }
        return true;
    }

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
     * @fileoverview Standardized Firebase Error.
     *
     * Usage:
     *
     *   // Typescript string literals for type-safe codes
     *   type Err =
     *     'unknown' |
     *     'object-not-found'
     *     ;
     *
     *   // Closure enum for type-safe error codes
     *   // at-enum {string}
     *   var Err = {
     *     UNKNOWN: 'unknown',
     *     OBJECT_NOT_FOUND: 'object-not-found',
     *   }
     *
     *   let errors: Map<Err, string> = {
     *     'generic-error': "Unknown error",
     *     'file-not-found': "Could not find file: {$file}",
     *   };
     *
     *   // Type-safe function - must pass a valid error code as param.
     *   let error = new ErrorFactory<Err>('service', 'Service', errors);
     *
     *   ...
     *   throw error.create(Err.GENERIC);
     *   ...
     *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
     *   ...
     *   // Service: Could not file file: foo.txt (service/file-not-found).
     *
     *   catch (e) {
     *     assert(e.message === "Could not find file: foo.txt.");
     *     if (e.code === 'service/file-not-found') {
     *       console.log("Could not read file: " + e['file']);
     *     }
     *   }
     */
    const ERROR_NAME = 'FirebaseError';
    // Based on code from:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
    class FirebaseError extends Error {
        constructor(code, message, customData) {
            super(message);
            this.code = code;
            this.customData = customData;
            this.name = ERROR_NAME;
            // Fix For ES5
            // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(this, FirebaseError.prototype);
            // Maintains proper stack trace for where our error was thrown.
            // Only available on V8.
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, ErrorFactory.prototype.create);
            }
        }
    }
    class ErrorFactory {
        constructor(service, serviceName, errors) {
            this.service = service;
            this.serviceName = serviceName;
            this.errors = errors;
        }
        create(code, ...data) {
            const customData = data[0] || {};
            const fullCode = `${this.service}/${code}`;
            const template = this.errors[code];
            const message = template ? replaceTemplate(template, customData) : 'Error';
            // Service Name: Error message (service/code).
            const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
            const error = new FirebaseError(fullCode, fullMessage, customData);
            return error;
        }
    }
    function replaceTemplate(template, data) {
        return template.replace(PATTERN, (_, key) => {
            const value = data[key];
            return value != null ? String(value) : `<${key}?>`;
        });
    }
    const PATTERN = /\{\$([^}]+)}/g;
    /**
     * Deep equal two objects. Support Arrays and Objects.
     */
    function deepEqual(a, b) {
        if (a === b) {
            return true;
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        for (const k of aKeys) {
            if (!bKeys.includes(k)) {
                return false;
            }
            const aProp = a[k];
            const bProp = b[k];
            if (isObject(aProp) && isObject(bProp)) {
                if (!deepEqual(aProp, bProp)) {
                    return false;
                }
            }
            else if (aProp !== bProp) {
                return false;
            }
        }
        for (const k of bKeys) {
            if (!aKeys.includes(k)) {
                return false;
            }
        }
        return true;
    }
    function isObject(thing) {
        return thing !== null && typeof thing === 'object';
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * The amount of milliseconds to exponentially increase.
     */
    const DEFAULT_INTERVAL_MILLIS = 1000;
    /**
     * The factor to backoff by.
     * Should be a number greater than 1.
     */
    const DEFAULT_BACKOFF_FACTOR = 2;
    /**
     * The maximum milliseconds to increase to.
     *
     * <p>Visible for testing
     */
    const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
    /**
     * The percentage of backoff time to randomize by.
     * See
     * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
     * for context.
     *
     * <p>Visible for testing
     */
    const RANDOM_FACTOR = 0.5;
    /**
     * Based on the backoff method from
     * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
     * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
     */
    function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
        // Calculates an exponentially increasing value.
        // Deviation: calculates value from count and a constant interval, so we only need to save value
        // and count to restore state.
        const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        // A random "fuzz" to avoid waves of retries.
        // Deviation: randomFactor is required.
        const randomWait = Math.round(
        // A fraction of the backoff value to add/subtract.
        // Deviation: changes multiplication order to improve readability.
        RANDOM_FACTOR *
            currBaseValue *
            // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
            // if we add or subtract.
            (Math.random() - 0.5) *
            2);
        // Limits backoff to max to avoid effectively permanent backoff.
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
    }

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
    function getModularInstance(service) {
        if (service && service._delegate) {
            return service._delegate;
        }
        else {
            return service;
        }
    }

    /**
     * Component for service name T, e.g. `auth`, `auth-internal`
     */
    var Component = /** @class */ (function () {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        function Component(name, instanceFactory, type) {
            this.name = name;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            /**
             * Properties to be added to the service namespace
             */
            this.serviceProps = {};
            this.instantiationMode = "LAZY" /* LAZY */;
            this.onInstanceCreated = null;
        }
        Component.prototype.setInstantiationMode = function (mode) {
            this.instantiationMode = mode;
            return this;
        };
        Component.prototype.setMultipleInstances = function (multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
        };
        Component.prototype.setServiceProps = function (props) {
            this.serviceProps = props;
            return this;
        };
        Component.prototype.setInstanceCreatedCallback = function (callback) {
            this.onInstanceCreated = callback;
            return this;
        };
        return Component;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
     * NameServiceMapping[T] is an alias for the type of the instance
     */
    var Provider = /** @class */ (function () {
        function Provider(name, container) {
            this.name = name;
            this.container = container;
            this.component = null;
            this.instances = new Map();
            this.instancesDeferred = new Map();
            this.instancesOptions = new Map();
            this.onInitCallbacks = new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */
        Provider.prototype.get = function (identifier) {
            // if multipleInstances is not supported, use the default name
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            if (!this.instancesDeferred.has(normalizedIdentifier)) {
                var deferred = new Deferred();
                this.instancesDeferred.set(normalizedIdentifier, deferred);
                if (this.isInitialized(normalizedIdentifier) ||
                    this.shouldAutoInitialize()) {
                    // initialize the service if it can be auto-initialized
                    try {
                        var instance = this.getOrInitializeService({
                            instanceIdentifier: normalizedIdentifier
                        });
                        if (instance) {
                            deferred.resolve(instance);
                        }
                    }
                    catch (e) {
                        // when the instance factory throws an exception during get(), it should not cause
                        // a fatal error. We just return the unresolved promise in this case.
                    }
                }
            }
            return this.instancesDeferred.get(normalizedIdentifier).promise;
        };
        Provider.prototype.getImmediate = function (options) {
            var _a;
            // if multipleInstances is not supported, use the default name
            var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
            var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                try {
                    return this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                }
                catch (e) {
                    if (optional) {
                        return null;
                    }
                    else {
                        throw e;
                    }
                }
            }
            else {
                // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
                if (optional) {
                    return null;
                }
                else {
                    throw Error("Service " + this.name + " is not available");
                }
            }
        };
        Provider.prototype.getComponent = function () {
            return this.component;
        };
        Provider.prototype.setComponent = function (component) {
            var e_1, _a;
            if (component.name !== this.name) {
                throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
            }
            if (this.component) {
                throw Error("Component for " + this.name + " has already been provided");
            }
            this.component = component;
            // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
            if (!this.shouldAutoInitialize()) {
                return;
            }
            // if the service is eager, initialize the default instance
            if (isComponentEager(component)) {
                try {
                    this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
                }
                catch (e) {
                    // when the instance factory for an eager Component throws an exception during the eager
                    // initialization, it should not cause a fatal error.
                    // TODO: Investigate if we need to make it configurable, because some component may want to cause
                    // a fatal error in this case?
                }
            }
            try {
                // Create service instances for the pending promises and resolve them
                // NOTE: if this.multipleInstances is false, only the default instance will be created
                // and all promises with resolve with it regardless of the identifier.
                for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                    var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                    try {
                        // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                        var instance = this.getOrInitializeService({
                            instanceIdentifier: normalizedIdentifier
                        });
                        instanceDeferred.resolve(instance);
                    }
                    catch (e) {
                        // when the instance factory throws an exception, it should not cause
                        // a fatal error. We just leave the promise unresolved.
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        Provider.prototype.clearInstance = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            this.instancesDeferred.delete(identifier);
            this.instancesOptions.delete(identifier);
            this.instances.delete(identifier);
        };
        // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?
        Provider.prototype.delete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var services;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            services = Array.from(this.instances.values());
                            return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], __read(services
                                    .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .map(function (service) { return service.INTERNAL.delete(); }))), __read(services
                                    .filter(function (service) { return '_delete' in service; }) // modularized services
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    .map(function (service) { return service._delete(); }))))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Provider.prototype.isComponentSet = function () {
            return this.component != null;
        };
        Provider.prototype.isInitialized = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            return this.instances.has(identifier);
        };
        Provider.prototype.getOptions = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            return this.instancesOptions.get(identifier) || {};
        };
        Provider.prototype.initialize = function (opts) {
            var e_2, _a;
            if (opts === void 0) { opts = {}; }
            var _b = opts.options, options = _b === void 0 ? {} : _b;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
            if (this.isInitialized(normalizedIdentifier)) {
                throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
            }
            if (!this.isComponentSet()) {
                throw Error("Component " + this.name + " has not been registered yet");
            }
            var instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier,
                options: options
            });
            try {
                // resolve any pending promise waiting for the service instance
                for (var _c = __values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                    var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                    if (normalizedIdentifier === normalizedDeferredIdentifier) {
                        instanceDeferred.resolve(instance);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return instance;
        };
        /**
         *
         * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
         * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
         *
         * @param identifier An optional instance identifier
         * @returns a function to unregister the callback
         */
        Provider.prototype.onInit = function (callback, identifier) {
            var _a;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
            existingCallbacks.add(callback);
            this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
            var existingInstance = this.instances.get(normalizedIdentifier);
            if (existingInstance) {
                callback(existingInstance, normalizedIdentifier);
            }
            return function () {
                existingCallbacks.delete(callback);
            };
        };
        /**
         * Invoke onInit callbacks synchronously
         * @param instance the service instance`
         */
        Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
            var e_3, _a;
            var callbacks = this.onInitCallbacks.get(identifier);
            if (!callbacks) {
                return;
            }
            try {
                for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                    var callback = callbacks_1_1.value;
                    try {
                        callback(instance, identifier);
                    }
                    catch (_b) {
                        // ignore errors in the onInit callback
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        Provider.prototype.getOrInitializeService = function (_a) {
            var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
            var instance = this.instances.get(instanceIdentifier);
            if (!instance && this.component) {
                instance = this.component.instanceFactory(this.container, {
                    instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                    options: options
                });
                this.instances.set(instanceIdentifier, instance);
                this.instancesOptions.set(instanceIdentifier, options);
                /**
                 * Invoke onInit listeners.
                 * Note this.component.onInstanceCreated is different, which is used by the component creator,
                 * while onInit listeners are registered by consumers of the provider.
                 */
                this.invokeOnInitCallbacks(instance, instanceIdentifier);
                /**
                 * Order is important
                 * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
                 * makes `isInitialized()` return true.
                 */
                if (this.component.onInstanceCreated) {
                    try {
                        this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                    }
                    catch (_c) {
                        // ignore errors in the onInstanceCreatedCallback
                    }
                }
            }
            return instance || null;
        };
        Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
            if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME$1; }
            if (this.component) {
                return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
            }
            else {
                return identifier; // assume multiple instances are supported before the component is provided.
            }
        };
        Provider.prototype.shouldAutoInitialize = function () {
            return (!!this.component &&
                this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
        };
        return Provider;
    }());
    // undefined should be passed to the service factory for the default instance
    function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME$1 ? undefined : identifier;
    }
    function isComponentEager(component) {
        return component.instantiationMode === "EAGER" /* EAGER */;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
     */
    var ComponentContainer = /** @class */ (function () {
        function ComponentContainer(name) {
            this.name = name;
            this.providers = new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */
        ComponentContainer.prototype.addComponent = function (component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
                throw new Error("Component " + component.name + " has already been registered with " + this.name);
            }
            provider.setComponent(component);
        };
        ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
                // delete the existing provider from the container, so we can register the new component
                this.providers.delete(component.name);
            }
            this.addComponent(component);
        };
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */
        ComponentContainer.prototype.getProvider = function (name) {
            if (this.providers.has(name)) {
                return this.providers.get(name);
            }
            // create a Provider for a service that hasn't registered with Firebase
            var provider = new Provider(name, this);
            this.providers.set(name, provider);
            return provider;
        };
        ComponentContainer.prototype.getProviders = function () {
            return Array.from(this.providers.values());
        };
        return ComponentContainer;
    }());

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
     * The JS SDK supports 5 log levels and also allows a user the ability to
     * silence the logs altogether.
     *
     * The order is a follows:
     * DEBUG < VERBOSE < INFO < WARN < ERROR
     *
     * All of the log types above the current log level will be captured (i.e. if
     * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
     * `VERBOSE` logs will not)
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    const levelStringToEnum = {
        'debug': LogLevel.DEBUG,
        'verbose': LogLevel.VERBOSE,
        'info': LogLevel.INFO,
        'warn': LogLevel.WARN,
        'error': LogLevel.ERROR,
        'silent': LogLevel.SILENT
    };
    /**
     * The default log level
     */
    const defaultLogLevel = LogLevel.INFO;
    /**
     * By default, `console.debug` is not displayed in the developer console (in
     * chrome). To avoid forcing users to have to opt-in to these logs twice
     * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
     * logs to the `console.log` function.
     */
    const ConsoleMethod = {
        [LogLevel.DEBUG]: 'log',
        [LogLevel.VERBOSE]: 'log',
        [LogLevel.INFO]: 'info',
        [LogLevel.WARN]: 'warn',
        [LogLevel.ERROR]: 'error'
    };
    /**
     * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
     * messages on to their corresponding console counterparts (if the log method
     * is supported by the current log level)
     */
    const defaultLogHandler = (instance, logType, ...args) => {
        if (logType < instance.logLevel) {
            return;
        }
        const now = new Date().toISOString();
        const method = ConsoleMethod[logType];
        if (method) {
            console[method](`[${now}]  ${instance.name}:`, ...args);
        }
        else {
            throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
        }
    };
    class Logger {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        constructor(name) {
            this.name = name;
            /**
             * The log level of the given Logger instance.
             */
            this._logLevel = defaultLogLevel;
            /**
             * The main (internal) log handler for the Logger instance.
             * Can be set to a new function in internal package code but not by user.
             */
            this._logHandler = defaultLogHandler;
            /**
             * The optional, additional, user-defined log handler for the Logger instance.
             */
            this._userLogHandler = null;
        }
        get logLevel() {
            return this._logLevel;
        }
        set logLevel(val) {
            if (!(val in LogLevel)) {
                throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
            }
            this._logLevel = val;
        }
        // Workaround for setter/getter having to be the same type.
        setLogLevel(val) {
            this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
        }
        get logHandler() {
            return this._logHandler;
        }
        set logHandler(val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        }
        get userLogHandler() {
            return this._userLogHandler;
        }
        set userLogHandler(val) {
            this._userLogHandler = val;
        }
        /**
         * The functions below are all based on the `console` interface
         */
        debug(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
            this._logHandler(this, LogLevel.DEBUG, ...args);
        }
        log(...args) {
            this._userLogHandler &&
                this._userLogHandler(this, LogLevel.VERBOSE, ...args);
            this._logHandler(this, LogLevel.VERBOSE, ...args);
        }
        info(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
            this._logHandler(this, LogLevel.INFO, ...args);
        }
        warn(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
            this._logHandler(this, LogLevel.WARN, ...args);
        }
        error(...args) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
            this._logHandler(this, LogLevel.ERROR, ...args);
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    class PlatformLoggerServiceImpl {
        constructor(container) {
            this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        getPlatformInfoString() {
            const providers = this.container.getProviders();
            // Loop through providers and get library/version pairs from any that are
            // version components.
            return providers
                .map(provider => {
                if (isVersionServiceProvider(provider)) {
                    const service = provider.getImmediate();
                    return `${service.library}/${service.version}`;
                }
                else {
                    return null;
                }
            })
                .filter(logString => logString)
                .join(' ');
        }
    }
    /**
     *
     * @param provider check if this provider provides a VersionService
     *
     * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
     * provides VersionService. The provider is not necessarily a 'app-version'
     * provider.
     */
    function isVersionServiceProvider(provider) {
        const component = provider.getComponent();
        return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
    }

    const name$o = "@firebase/app";
    const version$1$1 = "0.7.1";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const logger$1 = new Logger('@firebase/app');

    const name$n = "@firebase/app-compat";

    const name$m = "@firebase/analytics-compat";

    const name$l = "@firebase/analytics";

    const name$k = "@firebase/app-check-compat";

    const name$j = "@firebase/app-check";

    const name$i = "@firebase/auth";

    const name$h = "@firebase/auth-compat";

    const name$g = "@firebase/database";

    const name$f = "@firebase/database-compat";

    const name$e = "@firebase/functions";

    const name$d = "@firebase/functions-compat";

    const name$c = "@firebase/installations";

    const name$b = "@firebase/installations-compat";

    const name$a = "@firebase/messaging";

    const name$9 = "@firebase/messaging-compat";

    const name$8 = "@firebase/performance";

    const name$7 = "@firebase/performance-compat";

    const name$6 = "@firebase/remote-config";

    const name$5 = "@firebase/remote-config-compat";

    const name$4 = "@firebase/storage";

    const name$3 = "@firebase/storage-compat";

    const name$2$1 = "@firebase/firestore";

    const name$1$1 = "@firebase/firestore-compat";

    const name$p = "firebase";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * The default app name
     *
     * @internal
     */
    const DEFAULT_ENTRY_NAME = '[DEFAULT]';
    const PLATFORM_LOG_STRING = {
        [name$o]: 'fire-core',
        [name$n]: 'fire-core-compat',
        [name$l]: 'fire-analytics',
        [name$m]: 'fire-analytics-compat',
        [name$j]: 'fire-app-check',
        [name$k]: 'fire-app-check-compat',
        [name$i]: 'fire-auth',
        [name$h]: 'fire-auth-compat',
        [name$g]: 'fire-rtdb',
        [name$f]: 'fire-rtdb-compat',
        [name$e]: 'fire-fn',
        [name$d]: 'fire-fn-compat',
        [name$c]: 'fire-iid',
        [name$b]: 'fire-iid-compat',
        [name$a]: 'fire-fcm',
        [name$9]: 'fire-fcm-compat',
        [name$8]: 'fire-perf',
        [name$7]: 'fire-perf-compat',
        [name$6]: 'fire-rc',
        [name$5]: 'fire-rc-compat',
        [name$4]: 'fire-gcs',
        [name$3]: 'fire-gcs-compat',
        [name$2$1]: 'fire-fst',
        [name$1$1]: 'fire-fst-compat',
        'fire-js': 'fire-js',
        [name$p]: 'fire-js-all'
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * @internal
     */
    const _apps = new Map();
    /**
     * Registered components.
     *
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _components = new Map();
    /**
     * @param component - the component being added to this app's container
     *
     * @internal
     */
    function _addComponent(app, component) {
        try {
            app.container.addComponent(component);
        }
        catch (e) {
            logger$1.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
        }
    }
    /**
     *
     * @param component - the component to register
     * @returns whether or not the component is registered successfully
     *
     * @internal
     */
    function _registerComponent(component) {
        const componentName = component.name;
        if (_components.has(componentName)) {
            logger$1.debug(`There were multiple attempts to register component ${componentName}.`);
            return false;
        }
        _components.set(componentName, component);
        // add the component to existing app instances
        for (const app of _apps.values()) {
            _addComponent(app, component);
        }
        return true;
    }
    /**
     *
     * @param app - FirebaseApp instance
     * @param name - service name
     *
     * @returns the provider for the service with the matching name
     *
     * @internal
     */
    function _getProvider(app, name) {
        return app.container.getProvider(name);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const ERRORS$1 = {
        ["no-app" /* NO_APP */]: "No Firebase App '{$appName}' has been created - " +
            'call Firebase App.initializeApp()',
        ["bad-app-name" /* BAD_APP_NAME */]: "Illegal App name: '{$appName}",
        ["duplicate-app" /* DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted" /* APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
        ["invalid-app-argument" /* INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
            'Firebase App instance.',
        ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.'
    };
    const ERROR_FACTORY$2 = new ErrorFactory('app', 'Firebase', ERRORS$1);

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    class FirebaseAppImpl {
        constructor(options, config, container) {
            this._isDeleted = false;
            this._options = Object.assign({}, options);
            this._config = Object.assign({}, config);
            this._name = config.name;
            this._automaticDataCollectionEnabled =
                config.automaticDataCollectionEnabled;
            this._container = container;
            this.container.addComponent(new Component('app', () => this, "PUBLIC" /* PUBLIC */));
        }
        get automaticDataCollectionEnabled() {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
        }
        get name() {
            this.checkDestroyed();
            return this._name;
        }
        get options() {
            this.checkDestroyed();
            return this._options;
        }
        get config() {
            this.checkDestroyed();
            return this._config;
        }
        get container() {
            return this._container;
        }
        get isDeleted() {
            return this._isDeleted;
        }
        set isDeleted(val) {
            this._isDeleted = val;
        }
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */
        checkDestroyed() {
            if (this.isDeleted) {
                throw ERROR_FACTORY$2.create("app-deleted" /* APP_DELETED */, { appName: this._name });
            }
        }
    }
    function initializeApp(options, rawConfig = {}) {
        if (typeof rawConfig !== 'object') {
            const name = rawConfig;
            rawConfig = { name };
        }
        const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
        const name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY$2.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        const existingApp = _apps.get(name);
        if (existingApp) {
            // return the existing app if options and config deep equal the ones in the existing app.
            if (deepEqual(options, existingApp.options) &&
                deepEqual(config, existingApp.config)) {
                return existingApp;
            }
            else {
                throw ERROR_FACTORY$2.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
            }
        }
        const container = new ComponentContainer(name);
        for (const component of _components.values()) {
            container.addComponent(component);
        }
        const newApp = new FirebaseAppImpl(options, config, container);
        _apps.set(name, newApp);
        return newApp;
    }
    /**
     * Retrieves a {@link @firebase/app#FirebaseApp} instance.
     *
     * When called with no arguments, the default app is returned. When an app name
     * is provided, the app corresponding to that name is returned.
     *
     * An exception is thrown if the app being retrieved has not yet been
     * initialized.
     *
     * @example
     * ```javascript
     * // Return the default app
     * const app = getApp();
     * ```
     *
     * @example
     * ```javascript
     * // Return a named app
     * const otherApp = getApp("otherApp");
     * ```
     *
     * @param name - Optional name of the app to return. If no name is
     *   provided, the default is `"[DEFAULT]"`.
     *
     * @returns The app corresponding to the provided app name.
     *   If no app name is provided, the default app is returned.
     *
     * @public
     */
    function getApp(name = DEFAULT_ENTRY_NAME) {
        const app = _apps.get(name);
        if (!app) {
            throw ERROR_FACTORY$2.create("no-app" /* NO_APP */, { appName: name });
        }
        return app;
    }
    /**
     * Registers a library's name and version for platform logging purposes.
     * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
     * @param version - Current version of that library.
     * @param variant - Bundle variant, e.g., node, rn, etc.
     *
     * @public
     */
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += `-${variant}`;
        }
        const libraryMismatch = library.match(/\s|\//);
        const versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            const warning = [
                `Unable to register library "${library}" with version "${version}":`
            ];
            if (libraryMismatch) {
                warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
            }
            logger$1.warn(warning.join(' '));
            return;
        }
        _registerComponent(new Component(`${library}-version`, () => ({ library, version }), "VERSION" /* VERSION */));
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    function registerCoreComponents(variant) {
        _registerComponent(new Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* PRIVATE */));
        // Register `app` package.
        registerVersion(name$o, version$1$1, variant);
        // Register platform SDK identifier (no version).
        registerVersion('fire-js', '');
    }

    /**
     * Firebase App
     *
     * @remarks This package coordinates the communication between the different Firebase components
     * @packageDocumentation
     */
    registerCoreComponents();

    var name$2 = "firebase";
    var version$2 = "9.1.0";

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
    registerVersion(name$2, version$2, 'app');

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    		path: basedir,
    		exports: {},
    		require: function (path, base) {
    			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    		}
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var idb = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      factory(exports) ;
    }(commonjsGlobal, function (exports) {
      function toArray(arr) {
        return Array.prototype.slice.call(arr);
      }

      function promisifyRequest(request) {
        return new Promise(function(resolve, reject) {
          request.onsuccess = function() {
            resolve(request.result);
          };

          request.onerror = function() {
            reject(request.error);
          };
        });
      }

      function promisifyRequestCall(obj, method, args) {
        var request;
        var p = new Promise(function(resolve, reject) {
          request = obj[method].apply(obj, args);
          promisifyRequest(request).then(resolve, reject);
        });

        p.request = request;
        return p;
      }

      function promisifyCursorRequestCall(obj, method, args) {
        var p = promisifyRequestCall(obj, method, args);
        return p.then(function(value) {
          if (!value) return;
          return new Cursor(value, p.request);
        });
      }

      function proxyProperties(ProxyClass, targetProp, properties) {
        properties.forEach(function(prop) {
          Object.defineProperty(ProxyClass.prototype, prop, {
            get: function() {
              return this[targetProp][prop];
            },
            set: function(val) {
              this[targetProp][prop] = val;
            }
          });
        });
      }

      function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
          if (!(prop in Constructor.prototype)) return;
          ProxyClass.prototype[prop] = function() {
            return promisifyRequestCall(this[targetProp], prop, arguments);
          };
        });
      }

      function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
          if (!(prop in Constructor.prototype)) return;
          ProxyClass.prototype[prop] = function() {
            return this[targetProp][prop].apply(this[targetProp], arguments);
          };
        });
      }

      function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function(prop) {
          if (!(prop in Constructor.prototype)) return;
          ProxyClass.prototype[prop] = function() {
            return promisifyCursorRequestCall(this[targetProp], prop, arguments);
          };
        });
      }

      function Index(index) {
        this._index = index;
      }

      proxyProperties(Index, '_index', [
        'name',
        'keyPath',
        'multiEntry',
        'unique'
      ]);

      proxyRequestMethods(Index, '_index', IDBIndex, [
        'get',
        'getKey',
        'getAll',
        'getAllKeys',
        'count'
      ]);

      proxyCursorRequestMethods(Index, '_index', IDBIndex, [
        'openCursor',
        'openKeyCursor'
      ]);

      function Cursor(cursor, request) {
        this._cursor = cursor;
        this._request = request;
      }

      proxyProperties(Cursor, '_cursor', [
        'direction',
        'key',
        'primaryKey',
        'value'
      ]);

      proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
        'update',
        'delete'
      ]);

      // proxy 'next' methods
      ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
        if (!(methodName in IDBCursor.prototype)) return;
        Cursor.prototype[methodName] = function() {
          var cursor = this;
          var args = arguments;
          return Promise.resolve().then(function() {
            cursor._cursor[methodName].apply(cursor._cursor, args);
            return promisifyRequest(cursor._request).then(function(value) {
              if (!value) return;
              return new Cursor(value, cursor._request);
            });
          });
        };
      });

      function ObjectStore(store) {
        this._store = store;
      }

      ObjectStore.prototype.createIndex = function() {
        return new Index(this._store.createIndex.apply(this._store, arguments));
      };

      ObjectStore.prototype.index = function() {
        return new Index(this._store.index.apply(this._store, arguments));
      };

      proxyProperties(ObjectStore, '_store', [
        'name',
        'keyPath',
        'indexNames',
        'autoIncrement'
      ]);

      proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
        'put',
        'add',
        'delete',
        'clear',
        'get',
        'getAll',
        'getKey',
        'getAllKeys',
        'count'
      ]);

      proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
        'openCursor',
        'openKeyCursor'
      ]);

      proxyMethods(ObjectStore, '_store', IDBObjectStore, [
        'deleteIndex'
      ]);

      function Transaction(idbTransaction) {
        this._tx = idbTransaction;
        this.complete = new Promise(function(resolve, reject) {
          idbTransaction.oncomplete = function() {
            resolve();
          };
          idbTransaction.onerror = function() {
            reject(idbTransaction.error);
          };
          idbTransaction.onabort = function() {
            reject(idbTransaction.error);
          };
        });
      }

      Transaction.prototype.objectStore = function() {
        return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
      };

      proxyProperties(Transaction, '_tx', [
        'objectStoreNames',
        'mode'
      ]);

      proxyMethods(Transaction, '_tx', IDBTransaction, [
        'abort'
      ]);

      function UpgradeDB(db, oldVersion, transaction) {
        this._db = db;
        this.oldVersion = oldVersion;
        this.transaction = new Transaction(transaction);
      }

      UpgradeDB.prototype.createObjectStore = function() {
        return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
      };

      proxyProperties(UpgradeDB, '_db', [
        'name',
        'version',
        'objectStoreNames'
      ]);

      proxyMethods(UpgradeDB, '_db', IDBDatabase, [
        'deleteObjectStore',
        'close'
      ]);

      function DB(db) {
        this._db = db;
      }

      DB.prototype.transaction = function() {
        return new Transaction(this._db.transaction.apply(this._db, arguments));
      };

      proxyProperties(DB, '_db', [
        'name',
        'version',
        'objectStoreNames'
      ]);

      proxyMethods(DB, '_db', IDBDatabase, [
        'close'
      ]);

      // Add cursor iterators
      // TODO: remove this once browsers do the right thing with promises
      ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
        [ObjectStore, Index].forEach(function(Constructor) {
          // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
          if (!(funcName in Constructor.prototype)) return;

          Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
            var args = toArray(arguments);
            var callback = args[args.length - 1];
            var nativeObject = this._store || this._index;
            var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
            request.onsuccess = function() {
              callback(request.result);
            };
          };
        });
      });

      // polyfill getAll
      [Index, ObjectStore].forEach(function(Constructor) {
        if (Constructor.prototype.getAll) return;
        Constructor.prototype.getAll = function(query, count) {
          var instance = this;
          var items = [];

          return new Promise(function(resolve) {
            instance.iterateCursor(query, function(cursor) {
              if (!cursor) {
                resolve(items);
                return;
              }
              items.push(cursor.value);

              if (count !== undefined && items.length == count) {
                resolve(items);
                return;
              }
              cursor.continue();
            });
          });
        };
      });

      function openDb(name, version, upgradeCallback) {
        var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
        var request = p.request;

        if (request) {
          request.onupgradeneeded = function(event) {
            if (upgradeCallback) {
              upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
            }
          };
        }

        return p.then(function(db) {
          return new DB(db);
        });
      }

      function deleteDb(name) {
        return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
      }

      exports.openDb = openDb;
      exports.deleteDb = deleteDb;

      Object.defineProperty(exports, '__esModule', { value: true });

    }));
    });

    const name$1 = "@firebase/installations";
    const version$1 = "0.5.1";

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const PENDING_TIMEOUT_MS = 10000;
    const PACKAGE_VERSION = `w:${version$1}`;
    const INTERNAL_AUTH_VERSION = 'FIS_v2';
    const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
    const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
    const SERVICE = 'installations';
    const SERVICE_NAME = 'Installations';

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const ERROR_DESCRIPTION_MAP = {
        ["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
        ["not-registered" /* NOT_REGISTERED */]: 'Firebase Installation is not registered.',
        ["installation-not-found" /* INSTALLATION_NOT_FOUND */]: 'Firebase Installation not found.',
        ["request-failed" /* REQUEST_FAILED */]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        ["app-offline" /* APP_OFFLINE */]: 'Could not process request. Application offline.',
        ["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */]: "Can't delete installation while there is a pending registration request."
    };
    const ERROR_FACTORY$1 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
    /** Returns true if error is a FirebaseError that is based on an error from the server. */
    function isServerError(error) {
        return (error instanceof FirebaseError &&
            error.code.includes("request-failed" /* REQUEST_FAILED */));
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    function getInstallationsEndpoint({ projectId }) {
        return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
    }
    function extractAuthTokenInfoFromResponse(response) {
        return {
            token: response.token,
            requestStatus: 2 /* COMPLETED */,
            expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
            creationTime: Date.now()
        };
    }
    async function getErrorFromResponse(requestName, response) {
        const responseJson = await response.json();
        const errorData = responseJson.error;
        return ERROR_FACTORY$1.create("request-failed" /* REQUEST_FAILED */, {
            requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
        });
    }
    function getHeaders$1({ apiKey }) {
        return new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-goog-api-key': apiKey
        });
    }
    function getHeadersWithAuth(appConfig, { refreshToken }) {
        const headers = getHeaders$1(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
    }
    /**
     * Calls the passed in fetch wrapper and returns the response.
     * If the returned response has a status of 5xx, re-runs the function once and
     * returns the response.
     */
    async function retryIfServerError(fn) {
        const result = await fn();
        if (result.status >= 500 && result.status < 600) {
            // Internal Server Error. Retry request.
            return fn();
        }
        return result;
    }
    function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
    }
    function getAuthorizationHeader(refreshToken) {
        return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    async function createInstallationRequest(appConfig, { fid }) {
        const endpoint = getInstallationsEndpoint(appConfig);
        const headers = getHeaders$1(appConfig);
        const body = {
            fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
        };
        const request = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        };
        const response = await retryIfServerError(() => fetch(endpoint, request));
        if (response.ok) {
            const responseValue = await response.json();
            const registeredInstallationEntry = {
                fid: responseValue.fid || fid,
                registrationStatus: 2 /* COMPLETED */,
                refreshToken: responseValue.refreshToken,
                authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
            };
            return registeredInstallationEntry;
        }
        else {
            throw await getErrorFromResponse('Create Installation', response);
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    /** Returns a promise that resolves after given time passes. */
    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    function bufferToBase64UrlSafe(array) {
        const b64 = btoa(String.fromCharCode(...array));
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
    const INVALID_FID = '';
    /**
     * Generates a new FID using random values from Web Crypto API.
     * Returns an empty string if FID generation fails for any reason.
     */
    function generateFid() {
        try {
            // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
            // bytes. our implementation generates a 17 byte array instead.
            const fidByteArray = new Uint8Array(17);
            const crypto = self.crypto || self.msCrypto;
            crypto.getRandomValues(fidByteArray);
            // Replace the first 4 random bits with the constant FID header of 0b0111.
            fidByteArray[0] = 0b01110000 + (fidByteArray[0] % 0b00010000);
            const fid = encode(fidByteArray);
            return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        }
        catch (_a) {
            // FID generation errored
            return INVALID_FID;
        }
    }
    /** Converts a FID Uint8Array to a base64 string representation. */
    function encode(fidByteArray) {
        const b64String = bufferToBase64UrlSafe(fidByteArray);
        // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.
        return b64String.substr(0, 22);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    /** Returns a string key that can be used to identify the app. */
    function getKey(appConfig) {
        return `${appConfig.appName}!${appConfig.appId}`;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const fidChangeCallbacks = new Map();
    /**
     * Calls the onIdChange callbacks with the new FID value, and broadcasts the
     * change to other tabs.
     */
    function fidChanged(appConfig, fid) {
        const key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
    }
    function callFidChangeCallbacks(key, fid) {
        const callbacks = fidChangeCallbacks.get(key);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            callback(fid);
        }
    }
    function broadcastFidChange(key, fid) {
        const channel = getBroadcastChannel();
        if (channel) {
            channel.postMessage({ key, fid });
        }
        closeBroadcastChannel();
    }
    let broadcastChannel = null;
    /** Opens and returns a BroadcastChannel if it is supported by the browser. */
    function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
            broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
            broadcastChannel.onmessage = e => {
                callFidChangeCallbacks(e.data.key, e.data.fid);
            };
        }
        return broadcastChannel;
    }
    function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
            broadcastChannel.close();
            broadcastChannel = null;
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const DATABASE_NAME = 'firebase-installations-database';
    const DATABASE_VERSION = 1;
    const OBJECT_STORE_NAME = 'firebase-installations-store';
    let dbPromise = null;
    function getDbPromise() {
        if (!dbPromise) {
            dbPromise = idb.openDb(DATABASE_NAME, DATABASE_VERSION, upgradeDB => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (upgradeDB.oldVersion) {
                    case 0:
                        upgradeDB.createObjectStore(OBJECT_STORE_NAME);
                }
            });
        }
        return dbPromise;
    }
    /** Assigns or overwrites the record for the given key with the given value. */
    async function set(appConfig, value) {
        const key = getKey(appConfig);
        const db = await getDbPromise();
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(OBJECT_STORE_NAME);
        const oldValue = await objectStore.get(key);
        await objectStore.put(value, key);
        await tx.complete;
        if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
        }
        return value;
    }
    /** Removes record(s) from the objectStore that match the given key. */
    async function remove(appConfig) {
        const key = getKey(appConfig);
        const db = await getDbPromise();
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        await tx.objectStore(OBJECT_STORE_NAME).delete(key);
        await tx.complete;
    }
    /**
     * Atomically updates a record with the result of updateFn, which gets
     * called with the current value. If newValue is undefined, the record is
     * deleted instead.
     * @return Updated value
     */
    async function update(appConfig, updateFn) {
        const key = getKey(appConfig);
        const db = await getDbPromise();
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const store = tx.objectStore(OBJECT_STORE_NAME);
        const oldValue = await store.get(key);
        const newValue = updateFn(oldValue);
        if (newValue === undefined) {
            await store.delete(key);
        }
        else {
            await store.put(newValue, key);
        }
        await tx.complete;
        if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
        }
        return newValue;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Updates and returns the InstallationEntry from the database.
     * Also triggers a registration request if it is necessary and possible.
     */
    async function getInstallationEntry(appConfig) {
        let registrationPromise;
        const installationEntry = await update(appConfig, oldEntry => {
            const installationEntry = updateOrCreateInstallationEntry(oldEntry);
            const entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
        });
        if (installationEntry.fid === INVALID_FID) {
            // FID generation failed. Waiting for the FID from the server.
            return { installationEntry: await registrationPromise };
        }
        return {
            installationEntry,
            registrationPromise
        };
    }
    /**
     * Creates a new Installation Entry if one does not exist.
     * Also clears timed out pending requests.
     */
    function updateOrCreateInstallationEntry(oldEntry) {
        const entry = oldEntry || {
            fid: generateFid(),
            registrationStatus: 0 /* NOT_STARTED */
        };
        return clearTimedOutRequest(entry);
    }
    /**
     * If the Firebase Installation is not registered yet, this will trigger the
     * registration and return an InProgressInstallationEntry.
     *
     * If registrationPromise does not exist, the installationEntry is guaranteed
     * to be registered.
     */
    function triggerRegistrationIfNecessary(appConfig, installationEntry) {
        if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
            if (!navigator.onLine) {
                // Registration required but app is offline.
                const registrationPromiseWithError = Promise.reject(ERROR_FACTORY$1.create("app-offline" /* APP_OFFLINE */));
                return {
                    installationEntry,
                    registrationPromise: registrationPromiseWithError
                };
            }
            // Try registering. Change status to IN_PROGRESS.
            const inProgressEntry = {
                fid: installationEntry.fid,
                registrationStatus: 1 /* IN_PROGRESS */,
                registrationTime: Date.now()
            };
            const registrationPromise = registerInstallation(appConfig, inProgressEntry);
            return { installationEntry: inProgressEntry, registrationPromise };
        }
        else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
            return {
                installationEntry,
                registrationPromise: waitUntilFidRegistration(appConfig)
            };
        }
        else {
            return { installationEntry };
        }
    }
    /** This will be executed only once for each new Firebase Installation. */
    async function registerInstallation(appConfig, installationEntry) {
        try {
            const registeredInstallationEntry = await createInstallationRequest(appConfig, installationEntry);
            return set(appConfig, registeredInstallationEntry);
        }
        catch (e) {
            if (isServerError(e) && e.customData.serverCode === 409) {
                // Server returned a "FID can not be used" error.
                // Generate a new ID next time.
                await remove(appConfig);
            }
            else {
                // Registration failed. Set FID as not registered.
                await set(appConfig, {
                    fid: installationEntry.fid,
                    registrationStatus: 0 /* NOT_STARTED */
                });
            }
            throw e;
        }
    }
    /** Call if FID registration is pending in another request. */
    async function waitUntilFidRegistration(appConfig) {
        // Unfortunately, there is no way of reliably observing when a value in
        // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
        // so we need to poll.
        let entry = await updateInstallationRequest(appConfig);
        while (entry.registrationStatus === 1 /* IN_PROGRESS */) {
            // createInstallation request still in progress.
            await sleep(100);
            entry = await updateInstallationRequest(appConfig);
        }
        if (entry.registrationStatus === 0 /* NOT_STARTED */) {
            // The request timed out or failed in a different call. Try again.
            const { installationEntry, registrationPromise } = await getInstallationEntry(appConfig);
            if (registrationPromise) {
                return registrationPromise;
            }
            else {
                // if there is no registrationPromise, entry is registered.
                return installationEntry;
            }
        }
        return entry;
    }
    /**
     * Called only if there is a CreateInstallation request in progress.
     *
     * Updates the InstallationEntry in the DB based on the status of the
     * CreateInstallation request.
     *
     * Returns the updated InstallationEntry.
     */
    function updateInstallationRequest(appConfig) {
        return update(appConfig, oldEntry => {
            if (!oldEntry) {
                throw ERROR_FACTORY$1.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
            }
            return clearTimedOutRequest(oldEntry);
        });
    }
    function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
            return {
                fid: entry.fid,
                registrationStatus: 0 /* NOT_STARTED */
            };
        }
        return entry;
    }
    function hasInstallationRequestTimedOut(installationEntry) {
        return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
            installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    async function generateAuthTokenRequest({ appConfig, platformLoggerProvider }, installationEntry) {
        const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
        const headers = getHeadersWithAuth(appConfig, installationEntry);
        // If platform logger exists, add the platform info string to the header.
        const platformLogger = platformLoggerProvider.getImmediate({
            optional: true
        });
        if (platformLogger) {
            headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
        }
        const body = {
            installation: {
                sdkVersion: PACKAGE_VERSION
            }
        };
        const request = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        };
        const response = await retryIfServerError(() => fetch(endpoint, request));
        if (response.ok) {
            const responseValue = await response.json();
            const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
            return completedAuthToken;
        }
        else {
            throw await getErrorFromResponse('Generate Auth Token', response);
        }
    }
    function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
        return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Returns a valid authentication token for the installation. Generates a new
     * token if one doesn't exist, is expired or about to expire.
     *
     * Should only be called if the Firebase Installation is registered.
     */
    async function refreshAuthToken(installations, forceRefresh = false) {
        let tokenPromise;
        const entry = await update(installations.appConfig, oldEntry => {
            if (!isEntryRegistered(oldEntry)) {
                throw ERROR_FACTORY$1.create("not-registered" /* NOT_REGISTERED */);
            }
            const oldAuthToken = oldEntry.authToken;
            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                // There is a valid token in the DB.
                return oldEntry;
            }
            else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                // There already is a token request in progress.
                tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
                return oldEntry;
            }
            else {
                // No token or token expired.
                if (!navigator.onLine) {
                    throw ERROR_FACTORY$1.create("app-offline" /* APP_OFFLINE */);
                }
                const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
                return inProgressEntry;
            }
        });
        const authToken = tokenPromise
            ? await tokenPromise
            : entry.authToken;
        return authToken;
    }
    /**
     * Call only if FID is registered and Auth Token request is in progress.
     *
     * Waits until the current pending request finishes. If the request times out,
     * tries once in this thread as well.
     */
    async function waitUntilAuthTokenRequest(installations, forceRefresh) {
        // Unfortunately, there is no way of reliably observing when a value in
        // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
        // so we need to poll.
        let entry = await updateAuthTokenRequest(installations.appConfig);
        while (entry.authToken.requestStatus === 1 /* IN_PROGRESS */) {
            // generateAuthToken still in progress.
            await sleep(100);
            entry = await updateAuthTokenRequest(installations.appConfig);
        }
        const authToken = entry.authToken;
        if (authToken.requestStatus === 0 /* NOT_STARTED */) {
            // The request timed out or failed in a different call. Try again.
            return refreshAuthToken(installations, forceRefresh);
        }
        else {
            return authToken;
        }
    }
    /**
     * Called only if there is a GenerateAuthToken request in progress.
     *
     * Updates the InstallationEntry in the DB based on the status of the
     * GenerateAuthToken request.
     *
     * Returns the updated InstallationEntry.
     */
    function updateAuthTokenRequest(appConfig) {
        return update(appConfig, oldEntry => {
            if (!isEntryRegistered(oldEntry)) {
                throw ERROR_FACTORY$1.create("not-registered" /* NOT_REGISTERED */);
            }
            const oldAuthToken = oldEntry.authToken;
            if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
                return Object.assign(Object.assign({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
            }
            return oldEntry;
        });
    }
    async function fetchAuthTokenFromServer(installations, installationEntry) {
        try {
            const authToken = await generateAuthTokenRequest(installations, installationEntry);
            const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
            await set(installations.appConfig, updatedInstallationEntry);
            return authToken;
        }
        catch (e) {
            if (isServerError(e) &&
                (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
                // Server returned a "FID not found" or a "Invalid authentication" error.
                // Generate a new ID next time.
                await remove(installations.appConfig);
            }
            else {
                const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
                await set(installations.appConfig, updatedInstallationEntry);
            }
            throw e;
        }
    }
    function isEntryRegistered(installationEntry) {
        return (installationEntry !== undefined &&
            installationEntry.registrationStatus === 2 /* COMPLETED */);
    }
    function isAuthTokenValid(authToken) {
        return (authToken.requestStatus === 2 /* COMPLETED */ &&
            !isAuthTokenExpired(authToken));
    }
    function isAuthTokenExpired(authToken) {
        const now = Date.now();
        return (now < authToken.creationTime ||
            authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
    }
    /** Returns an updated InstallationEntry with an InProgressAuthToken. */
    function makeAuthTokenRequestInProgressEntry(oldEntry) {
        const inProgressAuthToken = {
            requestStatus: 1 /* IN_PROGRESS */,
            requestTime: Date.now()
        };
        return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
    }
    function hasAuthTokenRequestTimedOut(authToken) {
        return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
            authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Creates a Firebase Installation if there isn't one for the app and
     * returns the Installation ID.
     * @param installations - The `Installations` instance.
     *
     * @public
     */
    async function getId(installations) {
        const installationsImpl = installations;
        const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl.appConfig);
        if (registrationPromise) {
            registrationPromise.catch(console.error);
        }
        else {
            // If the installation is already registered, update the authentication
            // token if needed.
            refreshAuthToken(installationsImpl).catch(console.error);
        }
        return installationEntry.fid;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Returns a Firebase Installations auth token, identifying the current
     * Firebase Installation.
     * @param installations - The `Installations` instance.
     * @param forceRefresh - Force refresh regardless of token expiration.
     *
     * @public
     */
    async function getToken(installations, forceRefresh = false) {
        const installationsImpl = installations;
        await completeInstallationRegistration(installationsImpl.appConfig);
        // At this point we either have a Registered Installation in the DB, or we've
        // already thrown an error.
        const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
        return authToken.token;
    }
    async function completeInstallationRegistration(appConfig) {
        const { registrationPromise } = await getInstallationEntry(appConfig);
        if (registrationPromise) {
            // A createInstallation request is in progress. Wait until it finishes.
            await registrationPromise;
        }
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    function extractAppConfig(app) {
        if (!app || !app.options) {
            throw getMissingValueError('App Configuration');
        }
        if (!app.name) {
            throw getMissingValueError('App Name');
        }
        // Required app config keys
        const configKeys = [
            'projectId',
            'apiKey',
            'appId'
        ];
        for (const keyName of configKeys) {
            if (!app.options[keyName]) {
                throw getMissingValueError(keyName);
            }
        }
        return {
            appName: app.name,
            projectId: app.options.projectId,
            apiKey: app.options.apiKey,
            appId: app.options.appId
        };
    }
    function getMissingValueError(valueName) {
        return ERROR_FACTORY$1.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
            valueName
        });
    }

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
    const INSTALLATIONS_NAME = 'installations';
    const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
    const publicFactory = (container) => {
        const app = container.getProvider('app').getImmediate();
        // Throws if app isn't configured properly.
        const appConfig = extractAppConfig(app);
        const platformLoggerProvider = _getProvider(app, 'platform-logger');
        const installationsImpl = {
            app,
            appConfig,
            platformLoggerProvider,
            _delete: () => Promise.resolve()
        };
        return installationsImpl;
    };
    const internalFactory = (container) => {
        const app = container.getProvider('app').getImmediate();
        // Internal FIS instance relies on public FIS instance.
        const installations = _getProvider(app, INSTALLATIONS_NAME).getImmediate();
        const installationsInternal = {
            getId: () => getId(installations),
            getToken: (forceRefresh) => getToken(installations, forceRefresh)
        };
        return installationsInternal;
    };
    function registerInstallations() {
        _registerComponent(new Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* PUBLIC */));
        _registerComponent(new Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* PRIVATE */));
    }

    /**
     * Firebase Installations
     *
     * @packageDocumentation
     */
    registerInstallations();
    registerVersion(name$1, version$1);

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Type constant for Firebase Analytics.
     */
    const ANALYTICS_TYPE = 'analytics';
    // Key to attach FID to in gtag params.
    const GA_FID_KEY = 'firebase_id';
    const ORIGIN_KEY = 'origin';
    const FETCH_TIMEOUT_MILLIS = 60 * 1000;
    const DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
    const GTAG_URL = 'https://www.googletagmanager.com/gtag/js';

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const logger = new Logger('@firebase/analytics');

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
     * have either resolved or rejected.
     *
     * @param promises Array of promises to wait for.
     */
    function promiseAllSettled(promises) {
        return Promise.all(promises.map(promise => promise.catch(e => e)));
    }
    /**
     * Inserts gtag script tag into the page to asynchronously download gtag.
     * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
     */
    function insertScriptTag(dataLayerName, measurementId) {
        const script = document.createElement('script');
        // We are not providing an analyticsId in the URL because it would trigger a `page_view`
        // without fid. We will initialize ga-id using gtag (config) command together with fid.
        script.src = `${GTAG_URL}?l=${dataLayerName}&id=${measurementId}`;
        script.async = true;
        document.head.appendChild(script);
    }
    /**
     * Get reference to, or create, global datalayer.
     * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
     */
    function getOrCreateDataLayer(dataLayerName) {
        // Check for existing dataLayer and create if needed.
        let dataLayer = [];
        if (Array.isArray(window[dataLayerName])) {
            dataLayer = window[dataLayerName];
        }
        else {
            window[dataLayerName] = dataLayer;
        }
        return dataLayer;
    }
    /**
     * Wrapped gtag logic when gtag is called with 'config' command.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer.
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
     * @param measurementId GA Measurement ID to set config for.
     * @param gtagParams Gtag config params to set.
     */
    async function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
        // If config is already fetched, we know the appId and can use it to look up what FID promise we
        /// are waiting for, and wait only on that one.
        const correspondingAppId = measurementIdToAppId[measurementId];
        try {
            if (correspondingAppId) {
                await initializationPromisesMap[correspondingAppId];
            }
            else {
                // If config is not fetched yet, wait for all configs (we don't know which one we need) and
                // find the appId (if any) corresponding to this measurementId. If there is one, wait on
                // that appId's initialization promise. If there is none, promise resolves and gtag
                // call goes through.
                const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
                const foundConfig = dynamicConfigResults.find(config => config.measurementId === measurementId);
                if (foundConfig) {
                    await initializationPromisesMap[foundConfig.appId];
                }
            }
        }
        catch (e) {
            logger.error(e);
        }
        gtagCore("config" /* CONFIG */, measurementId, gtagParams);
    }
    /**
     * Wrapped gtag logic when gtag is called with 'event' command.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer.
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementId GA Measurement ID to log event to.
     * @param gtagParams Params to log with this event.
     */
    async function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
        try {
            let initializationPromisesToWaitFor = [];
            // If there's a 'send_to' param, check if any ID specified matches
            // an initializeIds() promise we are waiting for.
            if (gtagParams && gtagParams['send_to']) {
                let gaSendToList = gtagParams['send_to'];
                // Make it an array if is isn't, so it can be dealt with the same way.
                if (!Array.isArray(gaSendToList)) {
                    gaSendToList = [gaSendToList];
                }
                // Checking 'send_to' fields requires having all measurement ID results back from
                // the dynamic config fetch.
                const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
                for (const sendToId of gaSendToList) {
                    // Any fetched dynamic measurement ID that matches this 'send_to' ID
                    const foundConfig = dynamicConfigResults.find(config => config.measurementId === sendToId);
                    const initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
                    if (initializationPromise) {
                        initializationPromisesToWaitFor.push(initializationPromise);
                    }
                    else {
                        // Found an item in 'send_to' that is not associated
                        // directly with an FID, possibly a group.  Empty this array,
                        // exit the loop early, and let it get populated below.
                        initializationPromisesToWaitFor = [];
                        break;
                    }
                }
            }
            // This will be unpopulated if there was no 'send_to' field , or
            // if not all entries in the 'send_to' field could be mapped to
            // a FID. In these cases, wait on all pending initialization promises.
            if (initializationPromisesToWaitFor.length === 0) {
                initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
            }
            // Run core gtag function with args after all relevant initialization
            // promises have been resolved.
            await Promise.all(initializationPromisesToWaitFor);
            // Workaround for http://b/141370449 - third argument cannot be undefined.
            gtagCore("event" /* EVENT */, measurementId, gtagParams || {});
        }
        catch (e) {
            logger.error(e);
        }
    }
    /**
     * Wraps a standard gtag function with extra code to wait for completion of
     * relevant initialization promises before sending requests.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer.
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
     */
    function wrapGtag(gtagCore, 
    /**
     * Allows wrapped gtag calls to wait on whichever intialization promises are required,
     * depending on the contents of the gtag params' `send_to` field, if any.
     */
    initializationPromisesMap, 
    /**
     * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
     * before determining what initialization promises (which include FIDs) to wait for.
     */
    dynamicConfigPromisesList, 
    /**
     * Wrapped gtag config calls can narrow down which initialization promise (with FID)
     * to wait for if the measurementId is already fetched, by getting the corresponding appId,
     * which is the key for the initialization promises map.
     */
    measurementIdToAppId) {
        /**
         * Wrapper around gtag that ensures FID is sent with gtag calls.
         * @param command Gtag command type.
         * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
         * @param gtagParams Params if event is EVENT/CONFIG.
         */
        async function gtagWrapper(command, idOrNameOrParams, gtagParams) {
            try {
                // If event, check that relevant initialization promises have completed.
                if (command === "event" /* EVENT */) {
                    // If EVENT, second arg must be measurementId.
                    await gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams);
                }
                else if (command === "config" /* CONFIG */) {
                    // If CONFIG, second arg must be measurementId.
                    await gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams);
                }
                else {
                    // If SET, second arg must be params.
                    gtagCore("set" /* SET */, idOrNameOrParams);
                }
            }
            catch (e) {
                logger.error(e);
            }
        }
        return gtagWrapper;
    }
    /**
     * Creates global gtag function or wraps existing one if found.
     * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
     * 'event' calls that belong to the GAID associated with this Firebase instance.
     *
     * @param initializationPromisesMap Map of appIds to their initialization promises.
     * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
     * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
     * @param dataLayerName Name of global GA datalayer array.
     * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
     */
    function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
        // Create a basic core gtag function
        let gtagCore = function (..._args) {
            // Must push IArguments object, not an array.
            window[dataLayerName].push(arguments);
        };
        // Replace it with existing one if found
        if (window[gtagFunctionName] &&
            typeof window[gtagFunctionName] === 'function') {
            // @ts-ignore
            gtagCore = window[gtagFunctionName];
        }
        window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
        return {
            gtagCore,
            wrappedGtag: window[gtagFunctionName]
        };
    }
    /**
     * Returns first script tag in DOM matching our gtag url pattern.
     */
    function findGtagScriptOnPage() {
        const scriptTags = window.document.getElementsByTagName('script');
        for (const tag of Object.values(scriptTags)) {
            if (tag.src && tag.src.includes(GTAG_URL)) {
                return tag;
            }
        }
        return null;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
    const ERRORS = {
        ["already-exists" /* ALREADY_EXISTS */]: 'A Firebase Analytics instance with the appId {$id} ' +
            ' already exists. ' +
            'Only one Firebase Analytics instance can be created for each appId.',
        ["already-initialized" /* ALREADY_INITIALIZED */]: 'initializeAnalytics() cannot be called again with different options than those ' +
            'it was initially called with. It can be called again with the same options to ' +
            'return the existing instance, or getAnalytics() can be used ' +
            'to get a reference to the already-intialized instance.',
        ["already-initialized-settings" /* ALREADY_INITIALIZED_SETTINGS */]: 'Firebase Analytics has already been initialized.' +
            'settings() must be called before initializing any Analytics instance' +
            'or it will have no effect.',
        ["interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */]: 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
        ["invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */]: 'Firebase Analytics is not supported in this environment. ' +
            'Wrap initialization of analytics in analytics.isSupported() ' +
            'to prevent initialization in unsupported environments. Details: {$errorInfo}',
        ["indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */]: 'IndexedDB unavailable or restricted in this environment. ' +
            'Wrap initialization of analytics in analytics.isSupported() ' +
            'to prevent initialization in unsupported environments. Details: {$errorInfo}',
        ["fetch-throttle" /* FETCH_THROTTLE */]: 'The config fetch request timed out while in an exponential backoff state.' +
            ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
        ["config-fetch-failed" /* CONFIG_FETCH_FAILED */]: 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
        ["no-api-key" /* NO_API_KEY */]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
            'contain a valid API key.',
        ["no-app-id" /* NO_APP_ID */]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
            'contain a valid app ID.'
    };
    const ERROR_FACTORY = new ErrorFactory('analytics', 'Analytics', ERRORS);

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
     * Backoff factor for 503 errors, which we want to be conservative about
     * to avoid overloading servers. Each retry interval will be
     * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
     * will be ~30 seconds (with fuzzing).
     */
    const LONG_RETRY_FACTOR = 30;
    /**
     * Base wait interval to multiplied by backoffFactor^backoffCount.
     */
    const BASE_INTERVAL_MILLIS = 1000;
    /**
     * Stubbable retry data storage class.
     */
    class RetryData {
        constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
            this.throttleMetadata = throttleMetadata;
            this.intervalMillis = intervalMillis;
        }
        getThrottleMetadata(appId) {
            return this.throttleMetadata[appId];
        }
        setThrottleMetadata(appId, metadata) {
            this.throttleMetadata[appId] = metadata;
        }
        deleteThrottleMetadata(appId) {
            delete this.throttleMetadata[appId];
        }
    }
    const defaultRetryData = new RetryData();
    /**
     * Set GET request headers.
     * @param apiKey App API key.
     */
    function getHeaders(apiKey) {
        return new Headers({
            Accept: 'application/json',
            'x-goog-api-key': apiKey
        });
    }
    /**
     * Fetches dynamic config from backend.
     * @param app Firebase app to fetch config for.
     */
    async function fetchDynamicConfig(appFields) {
        var _a;
        const { appId, apiKey } = appFields;
        const request = {
            method: 'GET',
            headers: getHeaders(apiKey)
        };
        const appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
        const response = await fetch(appUrl, request);
        if (response.status !== 200 && response.status !== 304) {
            let errorMessage = '';
            try {
                // Try to get any error message text from server response.
                const jsonResponse = (await response.json());
                if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
                    errorMessage = jsonResponse.error.message;
                }
            }
            catch (_ignored) { }
            throw ERROR_FACTORY.create("config-fetch-failed" /* CONFIG_FETCH_FAILED */, {
                httpStatus: response.status,
                responseMessage: errorMessage
            });
        }
        return response.json();
    }
    /**
     * Fetches dynamic config from backend, retrying if failed.
     * @param app Firebase app to fetch config for.
     */
    async function fetchDynamicConfigWithRetry(app, 
    // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
    retryData = defaultRetryData, timeoutMillis) {
        const { appId, apiKey, measurementId } = app.options;
        if (!appId) {
            throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */);
        }
        if (!apiKey) {
            if (measurementId) {
                return {
                    measurementId,
                    appId
                };
            }
            throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */);
        }
        const throttleMetadata = retryData.getThrottleMetadata(appId) || {
            backoffCount: 0,
            throttleEndTimeMillis: Date.now()
        };
        const signal = new AnalyticsAbortSignal();
        setTimeout(async () => {
            // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
            signal.abort();
        }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
        return attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData);
    }
    /**
     * Runs one retry attempt.
     * @param appFields Necessary app config fields.
     * @param throttleMetadata Ongoing metadata to determine throttling times.
     * @param signal Abort signal.
     */
    async function attemptFetchDynamicConfigWithRetry(appFields, { throttleEndTimeMillis, backoffCount }, signal, retryData = defaultRetryData // for testing
    ) {
        const { appId, measurementId } = appFields;
        // Starts with a (potentially zero) timeout to support resumption from stored state.
        // Ensures the throttle end time is honored if the last attempt timed out.
        // Note the SDK will never make a request if the fetch timeout expires at this point.
        try {
            await setAbortableTimeout(signal, throttleEndTimeMillis);
        }
        catch (e) {
            if (measurementId) {
                logger.warn(`Timed out fetching this Firebase app's measurement ID from the server.` +
                    ` Falling back to the measurement ID ${measurementId}` +
                    ` provided in the "measurementId" field in the local Firebase config. [${e.message}]`);
                return { appId, measurementId };
            }
            throw e;
        }
        try {
            const response = await fetchDynamicConfig(appFields);
            // Note the SDK only clears throttle state if response is success or non-retriable.
            retryData.deleteThrottleMetadata(appId);
            return response;
        }
        catch (e) {
            if (!isRetriableError(e)) {
                retryData.deleteThrottleMetadata(appId);
                if (measurementId) {
                    logger.warn(`Failed to fetch this Firebase app's measurement ID from the server.` +
                        ` Falling back to the measurement ID ${measurementId}` +
                        ` provided in the "measurementId" field in the local Firebase config. [${e.message}]`);
                    return { appId, measurementId };
                }
                else {
                    throw e;
                }
            }
            const backoffMillis = Number(e.customData.httpStatus) === 503
                ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR)
                : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
            // Increments backoff state.
            const throttleMetadata = {
                throttleEndTimeMillis: Date.now() + backoffMillis,
                backoffCount: backoffCount + 1
            };
            // Persists state.
            retryData.setThrottleMetadata(appId, throttleMetadata);
            logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
            return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
        }
    }
    /**
     * Supports waiting on a backoff by:
     *
     * <ul>
     *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
     *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
     *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
     *       request appear the same.</li>
     * </ul>
     *
     * <p>Visible for testing.
     */
    function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise((resolve, reject) => {
            // Derives backoff from given end time, normalizing negative numbers to zero.
            const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
            const timeout = setTimeout(resolve, backoffMillis);
            // Adds listener, rather than sets onabort, because signal is a shared object.
            signal.addEventListener(() => {
                clearTimeout(timeout);
                // If the request completes before this timeout, the rejection has no effect.
                reject(ERROR_FACTORY.create("fetch-throttle" /* FETCH_THROTTLE */, {
                    throttleEndTimeMillis
                }));
            });
        });
    }
    /**
     * Returns true if the {@link Error} indicates a fetch request may succeed later.
     */
    function isRetriableError(e) {
        if (!(e instanceof FirebaseError) || !e.customData) {
            return false;
        }
        // Uses string index defined by ErrorData, which FirebaseError implements.
        const httpStatus = Number(e.customData['httpStatus']);
        return (httpStatus === 429 ||
            httpStatus === 500 ||
            httpStatus === 503 ||
            httpStatus === 504);
    }
    /**
     * Shims a minimal AbortSignal (copied from Remote Config).
     *
     * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
     * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
     * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
     * swapped out if/when we do.
     */
    class AnalyticsAbortSignal {
        constructor() {
            this.listeners = [];
        }
        addEventListener(listener) {
            this.listeners.push(listener);
        }
        abort() {
            this.listeners.forEach(listener => listener());
        }
    }

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
    async function validateIndexedDB() {
        if (!isIndexedDBAvailable()) {
            logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, {
                errorInfo: 'IndexedDB is not available in this environment.'
            }).message);
            return false;
        }
        else {
            try {
                await validateIndexedDBOpenable();
            }
            catch (e) {
                logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, {
                    errorInfo: e
                }).message);
                return false;
            }
        }
        return true;
    }
    /**
     * Initialize the analytics instance in gtag.js by calling config command with fid.
     *
     * NOTE: We combine analytics initialization and setting fid together because we want fid to be
     * part of the `page_view` event that's sent during the initialization
     * @param app Firebase app
     * @param gtagCore The gtag function that's not wrapped.
     * @param dynamicConfigPromisesList Array of all dynamic config promises.
     * @param measurementIdToAppId Maps measurementID to appID.
     * @param installations _FirebaseInstallationsInternal instance.
     *
     * @returns Measurement ID.
     */
    async function _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
        var _a;
        const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
        // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
        dynamicConfigPromise
            .then(config => {
            measurementIdToAppId[config.measurementId] = config.appId;
            if (app.options.measurementId &&
                config.measurementId !== app.options.measurementId) {
                logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId})` +
                    ` does not match the measurement ID fetched from the server (${config.measurementId}).` +
                    ` To ensure analytics events are always sent to the correct Analytics property,` +
                    ` update the` +
                    ` measurement ID field in the local config or remove it from the local config.`);
            }
        })
            .catch(e => logger.error(e));
        // Add to list to track state of all dynamic config promises.
        dynamicConfigPromisesList.push(dynamicConfigPromise);
        const fidPromise = validateIndexedDB().then(envIsValid => {
            if (envIsValid) {
                return installations.getId();
            }
            else {
                return undefined;
            }
        });
        const [dynamicConfig, fid] = await Promise.all([
            dynamicConfigPromise,
            fidPromise
        ]);
        // Detect if user has already put the gtag <script> tag on this page.
        if (!findGtagScriptOnPage()) {
            insertScriptTag(dataLayerName, dynamicConfig.measurementId);
        }
        // This command initializes gtag.js and only needs to be called once for the entire web app,
        // but since it is idempotent, we can call it multiple times.
        // We keep it together with other initialization logic for better code structure.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtagCore('js', new Date());
        // User config added first. We don't want users to accidentally overwrite
        // base Firebase config properties.
        const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
        // guard against developers accidentally setting properties with prefix `firebase_`
        configProperties[ORIGIN_KEY] = 'firebase';
        configProperties.update = true;
        if (fid != null) {
            configProperties[GA_FID_KEY] = fid;
        }
        // It should be the first config command called on this GA-ID
        // Initialize this GA-ID and set FID on it using the gtag config API.
        // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
        // `configProperties`.
        gtagCore("config" /* CONFIG */, dynamicConfig.measurementId, configProperties);
        return dynamicConfig.measurementId;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Analytics Service class.
     */
    class AnalyticsService {
        constructor(app) {
            this.app = app;
        }
        _delete() {
            delete initializationPromisesMap[this.app.options.appId];
            return Promise.resolve();
        }
    }
    /**
     * Maps appId to full initialization promise. Wrapped gtag calls must wait on
     * all or some of these, depending on the call's `send_to` param and the status
     * of the dynamic config fetches (see below).
     */
    let initializationPromisesMap = {};
    /**
     * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
     * wait on all these to be complete in order to determine if it can selectively
     * wait for only certain initialization (FID) promises or if it must wait for all.
     */
    let dynamicConfigPromisesList = [];
    /**
     * Maps fetched measurementIds to appId. Populated when the app's dynamic config
     * fetch completes. If already populated, gtag config calls can use this to
     * selectively wait for only this app's initialization promise (FID) instead of all
     * initialization promises.
     */
    const measurementIdToAppId = {};
    /**
     * Name for window global data layer array used by GA: defaults to 'dataLayer'.
     */
    let dataLayerName = 'dataLayer';
    /**
     * Name for window global gtag function used by GA: defaults to 'gtag'.
     */
    let gtagName = 'gtag';
    /**
     * Reproduction of standard gtag function or reference to existing
     * gtag function on window object.
     */
    let gtagCoreFunction;
    /**
     * Wrapper around gtag function that ensures FID is sent with all
     * relevant event and config calls.
     */
    let wrappedGtagFunction;
    /**
     * Flag to ensure page initialization steps (creation or wrapping of
     * dataLayer and gtag script) are only run once per page load.
     */
    let globalInitDone = false;
    /**
     * Returns true if no environment mismatch is found.
     * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
     * error that also lists details for each mismatch found.
     */
    function warnOnBrowserContextMismatch() {
        const mismatchedEnvMessages = [];
        if (isBrowserExtension()) {
            mismatchedEnvMessages.push('This is a browser extension environment.');
        }
        if (!areCookiesEnabled()) {
            mismatchedEnvMessages.push('Cookies are not available.');
        }
        if (mismatchedEnvMessages.length > 0) {
            const details = mismatchedEnvMessages
                .map((message, index) => `(${index + 1}) ${message}`)
                .join(' ');
            const err = ERROR_FACTORY.create("invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */, {
                errorInfo: details
            });
            logger.warn(err.message);
        }
    }
    /**
     * Analytics instance factory.
     * @internal
     */
    function factory(app, installations, options) {
        warnOnBrowserContextMismatch();
        const appId = app.options.appId;
        if (!appId) {
            throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */);
        }
        if (!app.options.apiKey) {
            if (app.options.measurementId) {
                logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest` +
                    ` measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId}` +
                    ` provided in the "measurementId" field in the local Firebase config.`);
            }
            else {
                throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */);
            }
        }
        if (initializationPromisesMap[appId] != null) {
            throw ERROR_FACTORY.create("already-exists" /* ALREADY_EXISTS */, {
                id: appId
            });
        }
        if (!globalInitDone) {
            // Steps here should only be done once per page: creation or wrapping
            // of dataLayer and global gtag function.
            getOrCreateDataLayer(dataLayerName);
            const { wrappedGtag, gtagCore } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
            wrappedGtagFunction = wrappedGtag;
            gtagCoreFunction = gtagCore;
            globalInitDone = true;
        }
        // Async but non-blocking.
        // This map reflects the completion state of all promises for each appId.
        initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
        const analyticsInstance = new AnalyticsService(app);
        return analyticsInstance;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     * Logs an analytics event through the Firebase SDK.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param eventName Google Analytics event name, choose from standard list or use a custom string.
     * @param eventParams Analytics event parameters.
     */
    async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
        if (options && options.global) {
            gtagFunction("event" /* EVENT */, eventName, eventParams);
            return;
        }
        else {
            const measurementId = await initializationPromise;
            const params = Object.assign(Object.assign({}, eventParams), { 'send_to': measurementId });
            gtagFunction("event" /* EVENT */, eventName, params);
        }
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /**
     * Returns an {@link Analytics} instance for the given app.
     *
     * @public
     *
     * @param app - The {@link @firebase/app#FirebaseApp} to use.
     */
    function getAnalytics(app = getApp()) {
        app = getModularInstance(app);
        // Dependencies
        const analyticsProvider = _getProvider(app, ANALYTICS_TYPE);
        if (analyticsProvider.isInitialized()) {
            return analyticsProvider.getImmediate();
        }
        return initializeAnalytics(app);
    }
    /**
     * Returns an {@link Analytics} instance for the given app.
     *
     * @public
     *
     * @param app - The {@link @firebase/app#FirebaseApp} to use.
     */
    function initializeAnalytics(app, options = {}) {
        // Dependencies
        const analyticsProvider = _getProvider(app, ANALYTICS_TYPE);
        if (analyticsProvider.isInitialized()) {
            const existingInstance = analyticsProvider.getImmediate();
            if (deepEqual(options, analyticsProvider.getOptions())) {
                return existingInstance;
            }
            else {
                throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */);
            }
        }
        const analyticsInstance = analyticsProvider.initialize({ options });
        return analyticsInstance;
    }
    /**
     * Sends a Google Analytics event with given `eventParams`. This method
     * automatically associates this logged event with this Firebase web
     * app instance on this device.
     * List of official event parameters can be found in the gtag.js
     * reference documentation:
     * {@link https://developers.google.com/gtagjs/reference/ga4-events
     * | the GA4 reference documentation}.
     *
     * @public
     */
    function logEvent(analyticsInstance, eventName, eventParams, options) {
        analyticsInstance = getModularInstance(analyticsInstance);
        logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch(e => logger.error(e));
    }

    const name = "@firebase/analytics";
    const version = "0.7.1";

    /**
     * Firebase Analytics
     *
     * @packageDocumentation
     */
    function registerAnalytics() {
        _registerComponent(new Component(ANALYTICS_TYPE, (container, { options: analyticsOptions }) => {
            // getImmediate for FirebaseApp will always succeed
            const app = container.getProvider('app').getImmediate();
            const installations = container
                .getProvider('installations-internal')
                .getImmediate();
            return factory(app, installations, analyticsOptions);
        }, "PUBLIC" /* PUBLIC */));
        _registerComponent(new Component('analytics-internal', internalFactory, "PRIVATE" /* PRIVATE */));
        registerVersion(name, version);
        function internalFactory(container) {
            try {
                const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
                return {
                    logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
                };
            }
            catch (e) {
                throw ERROR_FACTORY.create("interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */, {
                    reason: e
                });
            }
        }
    }
    registerAnalytics();

    /* src/App.svelte generated by Svelte v3.43.0 */
    const file = "src/App.svelte";

    function create_fragment(ctx) {
    	let h1;
    	let t1;
    	let div;
    	let span0;
    	let a0;
    	let t3;
    	let span1;
    	let a1;
    	let t5;
    	let span2;
    	let a2;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "PM Pirate";
    			t1 = space();
    			div = element("div");
    			span0 = element("span");
    			a0 = element("a");
    			a0.textContent = "Further Mech";
    			t3 = space();
    			span1 = element("span");
    			a1 = element("a");
    			a1.textContent = "Further Pure Year 1";
    			t5 = space();
    			span2 = element("span");
    			a2 = element("a");
    			a2.textContent = "Further Stats";
    			add_location(h1, file, 0, 0, 0);
    			attr_dev(a0, "href", "./pdf/Further Mech.pdf");
    			add_location(a0, file, 2, 28, 87);
    			attr_dev(span0, "class", "flex-1 py-2");
    			add_location(span0, file, 2, 2, 61);
    			attr_dev(a1, "href", "./pdf/Further Pure Year 1.pdf");
    			add_location(a1, file, 3, 28, 172);
    			attr_dev(span1, "class", "flex-1 py-2");
    			add_location(span1, file, 3, 2, 146);
    			attr_dev(a2, "href", "./pdf/Further Stats.pdf");
    			add_location(a2, file, 4, 28, 271);
    			attr_dev(span2, "class", "flex-1 py-2");
    			add_location(span2, file, 4, 2, 245);
    			attr_dev(div, "class", "flex flex-col sm:flex-row");
    			add_location(div, file, 1, 0, 19);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			append_dev(div, span0);
    			append_dev(span0, a0);
    			append_dev(div, t3);
    			append_dev(div, span1);
    			append_dev(span1, a1);
    			append_dev(div, t5);
    			append_dev(div, span2);
    			append_dev(span2, a2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);

    	const firebaseConfig = {
    		apiKey: "AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",
    		authDomain: "pmpirate.firebaseapp.com",
    		projectId: "pmpirate",
    		storageBucket: "pmpirate.appspot.com",
    		messagingSenderId: "198590478768",
    		appId: "1:198590478768:web:3d10abd6d006c0a0b93e75",
    		measurementId: "G-19MDLJEYQG"
    	};

    	const app = initializeApp(firebaseConfig);
    	const analytics = getAnalytics(app);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		initializeApp,
    		getAnalytics,
    		firebaseConfig,
    		app,
    		analytics
    	});

    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {},
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
