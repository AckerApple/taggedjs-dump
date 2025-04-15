var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{B:()=>Jn});const n="";var o,r;!function(t){t.string="string",t.number="number",t.boolean="boolean",t[void 0]="undefined"}(o||(o={})),function(t){t.function="function",t.date="date",t.unknown="unknown",t.object="object"}(r||(r={}));const s={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",subject:"subject",tagJsSubject:"tagJsSubject",renderOnce:"renderOnce",stateRender:"stateRender",version:Date.now()};function a(t){return Ze()?v((()=>i(t))):i(t)}function i(t){let e=t;const n=new Set;return{get value(){return e},set value(t){e!==t&&(e=t,n.forEach((e=>e(t))))},subscribe(t){t(e),n.add(t);const o=()=>n.delete(t);return o.unsubscribe=o,o}}}function l(t){if(!t)return!1;switch(t.tagJsType){case s.dom:case s.tag:case s.templater:return!0}return!1}function c(t){const e=t?.tagJsType;return e===s.tagComponent||e===s.stateRender}function u(t){return f(t)&&typeof t.subscribe===r.function}function d(t){return typeof t===r.function}function f(t){return typeof t===r.object&&null!==t}function p(t){return Array.isArray(t)}function g(t,e,n){const o=m.globalSubCount$;m.globalSubCount$.next(o.value+1);const r=function(){r.unsubscribe()};return r.callback=e,r.subscriptions=[],r.unsubscribe=function(){return function(t,e,n){!function(t,e){const n=t.findIndex((t=>t.callback===e));-1!==n&&t.splice(n,1)}(e,n);const o=m.globalSubCount$;m.globalSubCount$.next(o.value-1),t.unsubscribe=()=>t;const r=t.subscriptions;for(const t of r)t.unsubscribe();return t}(r,n,e)},r.add=t=>(r.subscriptions.push(t),r),r.next=t=>{e(t,r)},r}function h(t,e,n){const o=[...e],r=o.shift(),s=t=>{if(o.length)return h(t,o,n);n(t)};let a=s;const i=r(t,{setHandler:t=>a=t,next:s});a(i)}class m{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(t,e){this.value=t,this.onSubscription=e}subscribe(t){const e=g(0,t,this.subscribers),n=this.subscribeWith;if(n){if(this.methods.length){const n=t;t=t=>{h(t,this.methods,(t=>n(t,e)))}}return n(t)}return this.subscribers.push(e),this.onSubscription&&this.onSubscription(e),e}next(t){this.value=t,this.emit()}set=this.next.bind(this);emit(){const t=this.value,e=this.subscribers;for(const n of e)n.callback(t,n)}toPromise(){return new Promise((t=>{this.subscribe(((e,n)=>{n.unsubscribe(),t(e)}))}))}toCallback(t){const e=this.subscribe(((n,o)=>{const r=o?.unsubscribe;r?r():setTimeout((()=>e.unsubscribe()),0),t(n)}));return this}pipe(...t){const e=new m(this.value);return e.setMethods(t),e.subscribeWith=t=>this.subscribe(t),e.next=t=>this.next(t),e}setMethods(t){this.methods=t}static all(t){return function(t){const e=new m;return e.subscribeWith=e=>{const n=[],o=[],r=(r,s)=>{if(n[s]=!0,o[s]=r,n.length===t.length){for(const t of n)if(!t)return;e(o,a)}},s=[...t],a=s.shift().subscribe((t=>r(t,0))),i=s.map(((t,e)=>t.subscribe((t=>r(t,e+1)))));return a.subscriptions=i,a},e}(t.map((t=>{if(u(t))return t;return new m(t,(e=>(e.next(t),e)))})))}static globalSubCount$=new m(0)}class b extends m{value;constructor(t){super(t),this.value=t}subscribe(t){const e=super.subscribe(t);return t(this.value,e),e}}function v(t){return A.stateConfig.handlers.handler(t)}function y(t){const e=A.stateConfig;e.states[e.statesIndex]=t;return e.support.states[e.statesIndex]=t,++e.statesIndex,t(((...t)=>(v(t),t)))}function w(t){const e=A.stateConfig,n=e.support,o=e.statesIndex,r=e.prevSupport,s=r?.states[o],a=[];s(((...t)=>(a.push(t),t)));let i=0;return n.states[e.statesIndex]=t,++e.statesIndex,t(((...t)=>{e.stateArray.push({get:()=>t,defaultValue:t});const n=a[i];return++i,n}))}function x(t,e){e.handlers.handler=S,e.handlers.statesHandler=y,e.rearray=[],e.stateArray=[],e.states=[],e.statesIndex=0,e.support=t}function k(t,e,n,o){e.rearray=n,e.stateArray=[],e.states=o,e.statesIndex=0,e.handlers.handler=$,e.handlers.statesHandler=w,e.support=t}class j{}function C(t){const e=t.callback;if(!e)return t.defaultValue;const[n]=function(t){const e=t(j),[n]=e,[o]=t(n);return[n,o]}(e);return n}function $(){const t=A.stateConfig,e=t.rearray[t.stateArray.length];return t.stateArray.push(e),e.defaultValue}function S(t){const e=A.stateConfig;let n=t;if(typeof t===r.function&&(n=t()),typeof n===r.function){const t=n;n=function(...e){return t(...e)},n.original=t}const o={get:function(){return C(o)},defaultValue:n};return e.stateArray.push(o),n}const A={stateConfig:{stateArray:[],version:Date.now(),handlers:{handler:S,statesHandler:y}}};function E(t,e,n,o){for(let n=t.length-1;n>=0;--n){const o=t[n].get(),r=e[n].callback;r&&r(o)}for(let t=o.length-1;t>=0;--t){const e=[],r=(...t)=>(e.push(t),t);o[t](r);let s=0;const a=t=>e[s++];n[t](a)}}const T=(t,e)=>O(t,e),V=t=>t;const O=(t,e,{init:n,before:o,final:r=V}={})=>{const s=v({pastResult:void 0,values:void 0}),a=s.values;if(void 0===a){if(o&&!o(t))return s.values=t,s.pastResult;const i=(n||e)(t,a);return s.pastResult=r(i),s.values=t,s.pastResult}if(t.every(((t,e)=>t===a[e])))return s.pastResult;if(o&&!o(t))return s.values=t,s.pastResult;const i=e(t,a);return s.pastResult=r(i),a.length=0,a.push(...t),s.pastResult};function N(t,e){return Object.defineProperty(e,"noInit",{get(){const e=t();return e.setup.init=()=>{},e}}),Object.defineProperty(e,"asSubject",{get(){const e=t(),n=v((()=>Ze())),o=v((()=>new b(void 0))),r=v((()=>({stateArray:A.stateConfig.stateArray,states:A.stateConfig.states}))),s=(t,s)=>(O(t,((t,e)=>{const a=Ze(),i=s(t,e);if(a!==n){const t=r.stateArray,e=n.subject.global.oldest;E(t,e.state,r.states,e.states)}o.next(i)}),e.setup),o);return s.setup=e.setup,N((()=>s),s),s}}),Object.defineProperty(e,"truthy",{get(){const e=t();return e.setup.before=t=>t.every((t=>t)),e}}),e}function P(t){return Ze()?v((()=>new m(t))):new m(t)}function J(t){return A.stateConfig.handlers.statesHandler(t)}function L(t){const e=a([]),n=a(0),o=a(0);let r=[],s=0;return o.value=n.value,t(((...t)=>(r=t,t))),T(r,(()=>{++s,e.value=r,t((()=>r))})),J((()=>{if(s)return t(((...t)=>(e.value=t,n!=o?e.value:t))),o.value=n.value,void++n.value;t((()=>e.value))})),++s,e.value}N((()=>function(t){const e=(e,n)=>O(e,n,t);return e.setup=t,N((()=>e),e),e}({})),T),P._value=t=>{const e=v((function(){return{stateArray:A.stateConfig.stateArray,states:A.stateConfig.states}})),n=Ze();return v((function(){return new b(t).pipe((t=>(E(n.state,e.stateArray,n.states,e.states),t)))}))},P.all=function(t){const e=v((()=>({stateArray:A.stateConfig.stateArray,states:A.stateConfig.states}))),n=Ze();return m.all(t).pipe((t=>(E(n.state,e.stateArray,n.states,e.states),t)))};class M extends Error{details;constructor(t,e,n={}){super(t),this.name=M.name,this.details={...n,errorCode:e}}}class z extends M{constructor(t,e){super(t,"state-mismatch-error",e),this.name=z.name}}class D extends M{constructor(t,e){super(t,"sync-callback-error",e),this.name=D.name}}function R(t,e){return I(t,e)}function I(t,e){if(null===t||typeof t!==r.object)return t;if(e<0)return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=p(t)?[]:Object.create(Object.getPrototypeOf(t));if(p(t))for(let o=0;o<t.length;o++)n[o]=I(t[o],e-1);else for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=I(t[o],e-1));return n}function X(t,e,n){return W(t,e,n)}function W(t,e,n){return!(t!==e&&(o=t,s=e,!d(o)||!d(s)||o.toString()!==s.toString()))||(n<0||typeof t===r.object&&typeof e===r.object&&(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():p(t)&&p(e)?function(t,e,n){if(t.length!==e.length)return!1;for(let o=0;o<t.length;o++)if(!W(t[o],e[o],n-1))return!1;return!0}(t,e,n-1):!p(t)&&!p(e)&&function(t,e,n){const o=Object.keys(t),r=Object.keys(e);if(0===o.length&&0===r.length)return!0;if(o.length!==r.length)return!1;for(const s of o){if(!r.includes(s)||!W(t[s],e[s],n-1))return!1}return!0}(t,e,n-1)));var o,s}function Y(t,e){const n={propWatch:t,props:e,tagJsType:s.templater,key:function(t){return n.arrayValue=t,n}};return n}const H=[];function K(t,e,n){return t.map((t=>function(t,e,n,o){if(l(t)||!t)return t;if(!e)return t;return B(t,e,n,o)}(t,e.ownerSupport,e,n)))}function B(t,e,n,o){if(!t)return t;if(t.tagJsType)return t;if(typeof t===r.function)return function(t,e){const n=t.mem;if(n)return t;const o=function(...t){return o.toCall(...t)};return o.original=t,o.mem=t,o.toCall=function(...t){return function(t,e,n){const o=n.subject.global,r=o?.newest||n,s=void 0===Ze(),a=t(...e),i=function(){const t=r.subject.global;if(!1===s){if(!0===t.locked)return a}return function(t,e){const n=t.subject,o=Be(t.templater);if(o){return Ue(e,t)}const r=n.global;r.locked=!0,Ke(r.newest,t,e,n),delete r.locked}(r,n),a};if(s)return i();return A.tagClosed$.toCallback(i),a}(o.mem,t,e)},Object.assign(o,t),o}(t,e);if(o===ut)return t;return U(t)?t:p(t)?function(t,e,n,o){for(let s=t.length-1;s>=0;--s){const a=t[s];if(t[s]=B(a,n,e,o+1),typeof a===r.function){if(a.mem)continue;F(o+1,s,a,t,e)}}return t}(t,n,e,o):function(t,e,n,o){const s=Object.keys(t);for(const a of s){const s=t[a],i=B(s,n,e,o+1);if(t[a]===i)continue;const l=Object.getOwnPropertyDescriptor(t,a);if(!(l?.get||l?.set)&&(t[a]=i,typeof i===r.function)){if(s.mem)continue;F(o+1,a,s,t,e)}}return t}(t,n,e,o)}function F(t,e,n,o,r){if(t>0){const t=r.subject.global;o[e].subscription=t.destroy$.toCallback((function(){o[e]=n}))}}function U(t){return typeof t!==r.object||!t||t.tagJsType}function _(t,e,n,o){const a=e.original;let i;t.tagJsType===s.stateRender?i=t():(i=a(...o),typeof i===r.function&&(i=i())),i.templater=t,t.tag=i;const l=A.stateConfig;return n.state=l.stateArray,n.states=l.states,n}function Z(t){return t.map(q)}function q(t,e){const n=t,o=t?.tagJsType;if(o)switch(o){case s.stateRender:return;case s.dom:case s.tag:case s.templater:return Z(n.values)}return p(t)?Z(n):R(t,e)}function G(t,e,n){const o={templater:t,subject:e,castedProps:n,appSupport:void 0},r=e.global;return r.blocked=[],r.destroy$=new m,o}function Q(t,e,n,o){e.state=[],e.states=[],e.appSupport=n;const r=t.props;return r&&(e.propsConfig=function(t,e,n){const o=t.templater;if(o.tagJsType!==s.stateRender){switch(o.propWatch){case ot.IMMUTABLE:return t.propsConfig={latest:e,castProps:n};case ot.SHALLOW:return t.propsConfig={latest:e.map((t=>q(t,ct))),castProps:n}}return t.propsConfig={latest:e.map((t=>q(t,ut))),castProps:n}}}(e,r,o)),e}function tt(t,e,n,o,r){const s=G(t,o,r);return s.ownerSupport=e,Q(t,s,n,r)}function et(t,e,n){const o=t.propWatch===ot.DEEP?ut:ct,r=t.props,s=e.propsConfig;let a=s.castProps;const i=n?.propsConfig,l=i?.castProps;l&&(s.castProps=l,a=Re(e,n,n.ownerSupport,r,o));return a||K(r,e,0)}let nt=0;var ot;function rt(t,e=ot.SHALLOW){const n=function(...o){const r=Y(e,o);r.tagJsType=s.tagComponent;const a=function(t,e){return function(n,o,r){const s=et(t,n,r),a=n.ownerSupport,i=tt(t,a,n.appSupport,o,s);return _(t,e,i,s)}}(r,n);return a.original=t,r.wrapper=a,r},o=t;return n.original=t,o.tags=H,o.setUse=A,o.ValueTypes=s,o.tagIndex=nt++,H.push(n),n}function st(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}function at(t,e){const n=function(t,e,n){const o=_e(t,e);if(o)return 11;switch(n){case ot.NONE:return 1;case ot.SHALLOW:return lt(t,e);case ot.IMMUTABLE:return it(t,e)}return function(t,e){let n=t,o=e;n=[...t],o=[...e||[]];if(!n.every(((t,e)=>function(t,e,n,o){const s=o[e];if(typeof t===r.object){const e={...t},n={...s||{}},o=Object.entries(e).every((([t,o])=>dt(o,n[t],(()=>{delete e[t],delete n[t]}))));return o}return dt(t,s,(()=>{n.splice(e,1),o.splice(e,1)}))}(t,e,n,o))))return 7;return!1}(t,e)}(e.props,t.propsConfig.latest,t.templater.propWatch);return n}function it(t,e){const n=t.length;for(let o=0;o<n;++o){if(t[o]!==e[o])return 2}return!1}function lt(t,e){const n=t.length;for(let o=0;o<n;++o){const n=t[o],s=e[o];if(p(n)&&p(s)){if(n===s)continue;return 3}if(typeof n!==r.function||typeof s!==r.function)if(typeof n!==r.object){if(n!==s)return 3.3}else if(typeof e===r.object){const t=Object.entries(n);for(const e of t){if(!ft(e,s))return 3.1}}}return!1}!function(t){t.DEEP="deep",t.SHALLOW="shallow",t.NONE="none",t.IMMUTABLE="immutable"}(ot||(ot={})),rt.renderOnce=function(){throw new Error("Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `")},rt.state=st,rt.use=st,rt.route=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},rt.app=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},rt.deepPropWatch=rt,rt.immutableProps=function(t){return rt(t,ot.IMMUTABLE)},rt.watchProps=function(t){return rt(t,ot.SHALLOW)},Object.defineProperty(rt,"renderOnce",{set(t){t.tagJsType=s.renderOnce}}),Object.defineProperty(rt,"state",{set(t){t.original={setUse:A,tags:H},t.tagJsType=s.stateRender}}),Object.defineProperty(rt,"use",{set(t){t.original={setUse:A,tags:H},t.tagJsType=s.stateRender}});const ct=3,ut=10;function dt(t,e,n){if(typeof t!==r.function)return!!X(t,e,ut)&&4;if(typeof e!==r.function)return!1;const o=e?.original;o&&(e=o);t.original&&(t=t.original);return t.toString()===e.toString()?(n(),5):(n(),6)}function ft([t,e],n){const o=n[t];return typeof e===r.function&&typeof o===r.function||o===e}let pt=[],gt=[],ht=[],mt=[],bt=[],vt=[];const yt={locks:0};function wt(){if(!(yt.locks>0)){for(let t=pt.length-1;t>=0;--t){const e=pt[t];e.parentNode.removeChild(e)}for(const t of gt)t();for(const[t,e]of ht)e.textContent=t;for(const t of mt)t.relative.appendChild(t.element);for(const{element:t,relative:e}of bt)e.parentNode.insertBefore(t,e);pt=[],gt=[],mt=[],bt=[],ht=[];for(const t of vt)t();vt=[]}}function xt(t,e){const n=document.createTextNode(t);return bt.push({element:n,relative:e}),n}function kt(t){switch(t){case void 0:case!1:case null:return n}return t}function jt(t){const e=t.subject.global,n=e.providers;if(n)for(const t of n)for(let n=t.children.length-1;n>=0;--n){t.children[n].subject.global===e&&t.children.splice(n,1)}e.destroy$&&e.destroy$.next(),t.subject.renderCount=0}function Ct(t){for(const e of t){const t=e.lastArray;if(t){Ct(t);continue}const n=e.global;if(!n)continue;const o=n.newest,r=n.subscriptions;r&&r.forEach((t=>t.unsubscribe())),c(o.templater)&&jt(o);Ct(n.context)}}function $t(t,e=[],n=[]){for(const o of t){const t=o.global;if(!t)continue;const r=t.newest;if(r){e.push(r);const o=t.subscriptions;o&&n.push(...o)}const s=t.context;s&&$t(s,e,n)}return{tags:e,subs:n}}function St(t,e){const n=t.subject,o=n.global,r=o.context,s=o.destroys;if(s)return function(t,e,n){const o=n.global,r=[];if(t.forEach((t=>{const e=t();e instanceof Promise&&r.push(e)})),r.length){const t=Promise.all(r).then((()=>{++yt.locks,At(o.context,e),Et(o),--yt.locks,wt()}));return void e.push(t)}++yt.locks,At(o.context,e),Et(o),--yt.locks,wt()}(s,e,n);At(r,e),Et(o)}function At(t,e){for(const n of t){if(n.withinOwnerElement)continue;const t=n.lastArray;if(t){Jt(n,t);continue}const o=n.simpleValueElm;if(o){delete n.simpleValueElm,pt.push(o);continue}const r=n.global;if(void 0===r)continue;if(!0===r.deleted)continue;r.deleted=!0;const s=r.oldest;s&&St(s,e)}}function Et(t){t.htmlDomMeta.forEach((t=>{const e=t.marker;e&&pt.push(e);const n=t.domElement;n&&pt.push(n)}))}function Tt(t){const e=t.subject.global;e.deleted=!0,t.subject.renderCount=0;const n=[];return Ct(e.context),e.destroy$&&jt(t),St(t,n),n}function Vt(t,e,n,o,r,s){const a=e.length-1,i=n-r,l=i<0||a<i,c=o[n];if(l)return Ot(c,s),1;return function(t,e,n,o,r,s){const a=e&&t!==e.arrayValue;if(a){if(0===n.renderCount){const o=e.arrayValue;return console.warn("Possible array issue. Array is attempting to create/delete same items. Either html``.key is not unique or array changes with every render",{oldKey:t,newKey:o}),vt.push((()=>{Nt(n.global,n),vt.shift(),wt()})),1}return Ot(n,o),r.splice(s,1),2}return 0}(o[n].value.arrayValue,e[n],c,s,o,n)}function Ot(t,e){Nt(t.global,t),++e.removed}function Nt(t,e){if(t){Tt(t.oldest)}else{const t=e.simpleValueElm;delete e.simpleValueElm,pt.push(t)}}function Pt(t,e){if(!p(t)){return Jt(e,e.lastArray),9}return!1}function Jt(t,e){const n={added:0,removed:0};for(let t=0;t<e.length;++t)Ot(e[t],n);delete t.lastArray}function Lt(t,e){if(null==t||typeof t!==r.object)return function(t,e){const n=kt(t),o=e.simpleValueElm;ht.push([n,o])}(t,e),-1;const n=e.simpleValueElm;return delete e.simpleValueElm,pt.push(n),6}function Mt(t){return t.renderCount=0,t.global={}}function zt(t,e){const n=t.templater,o=e.templater,a=n?.tag||t,i=o.tag;if(n?.tagJsType===s.stateRender)return n.dom===o.dom;switch(a.tagJsType){case s.dom:return i?.tagJsType===s.dom&&function(t,e){const n=t.dom,o=e.dom;return n===o}(a,i);case s.tag:{const n=function(t,e,n,o){const s=t.strings,a=e.strings;if(s.length!==a.length)return!1;if(!s.every(((t,e)=>a[e].length===t.length)))return!1;const i=n.templater.values||t.values,l=o.templater.values||e.values;return function(t,e){const n=t.length===e.length;if(!n)return!1;const o=e.every(((e,n)=>{const o=t[n];if(typeof e===r.function&&typeof o===r.function){return!!(e.toString()===o.toString())}return!0}));if(o)return!0;return!1}(i,l)}(a,i,t,e);return n}}throw new Error(`unknown tagJsType of ${a.tagJsType}`)}function Dt(t,e,n){void 0!==n&&!1!==n&&null!==n?t.setAttribute(e,n):t.removeAttribute(e)}function Rt(t,e,n,o,r,s){switch(o){case"init":{const t=s.added;return void vt.push((()=>{e({target:n,stagger:t})}))}case"destroy":{const t=++s.removed,o=r.subject.global;return o.destroys=o.destroys||[],void o.destroys.push((()=>e({target:n,stagger:t})))}case"autofocus":return void vt.push((()=>n.focus()));case"autoselect":return void vt.push((()=>n.select()));case"style":{const o=t.split(".");return void gt.push((()=>n.style[o[1]]=e))}case"class":return void function(t,e,n){const o=t.split(".");if(o.shift(),e){for(const t of o)gt.push((()=>n.classList.add(t)));return}for(const t of o)gt.push((()=>n.classList.remove(t)))}(t,e,n)}throw new Error(`Invalid special attribute of ${o}. ${t}`)}function It(t,e){const n=function(t,e,n=[]){const o=t.subject;n.push({support:t,renderCount:o.renderCount,provider:e});const r=e.children;for(let t=r.length-1;t>=0;--t){const o=r[t],s=o.subject;n.push({support:o,renderCount:s.renderCount,provider:e})}return n}(t,e);return n}function Xt(t,e=[]){const n=t.subject.global,o=Be(t.templater),r=t.ownerSupport;if(n.locked)return e.push(t),e;if(o)return Xt(r,e);const a=t,i=c(a.templater),l=t.templater.tagJsType,u=r&&l!==s.stateRender&&(!i||function(t,e,n){const o=function(t,e){const n=t.props,o=e.propsConfig,r=o.latest;if(_e(n,r))return!0;switch(t.propWatch){case ot.IMMUTABLE:return it(n,r);case ot.SHALLOW:return lt(n,r)}return!X(n,r,ut)}(e,n);if(t&&o)return!0;return!1}(r,a.templater,a)),d=function(t){const e=t.subject.global.providers;if(!e)return[];const n=[];for(const t of e){const e=It(t.owner,t);n.push(...e.map((t=>t.support)))}return n}(a);return e.push(...d),u?(Xt(r,e),i&&e.push(a),e):(e.push(a),e)}function Wt(t){++yt.locks,t.forEach(Yt),--yt.locks,wt()}function Yt(t){const e=t.subject.global;e&&Fe(e.newest)}A.tagClosed$=new m(void 0,(function(t){Ze()||t.next()}));const Ht="no-data-ever",Kt="promise-no-data-ever";function Bt(t,e){const n=e.subject.global,o=function(t,e){if(!0!==n.deleted)return function(t,e,n,o){let r=e;for(;r.ownerSupport&&!c(r.templater);)r=r.ownerSupport;const s=r.subject,a=s.global;a.locked=!0;const i=t.apply(n,o);delete a.locked;return function(t,e){const n=e.subject.global;return function(t,e,n){return Wt(Xt(t)),function(t,e,n){if(function(t){return t&&d(t.then)}(t)){return e.subject.global.locked=!0,t.then((()=>{if(!0===n.deleted)return Kt;delete e.subject.global.locked;return Wt(Xt(e)),Kt}))}return Ht}(e,t,n)}(e,t,n)}(i,r)}(o.tagFunction,o.support,t,e)};return o.tagFunction=t,o.support=e,o}const Ft=["init","destroy"];function Ut(t,e,n,o,r,s,a){if(a)return Rt(t,e,n,a,s,r);o(n,t,e)}function _t(t,e,n,o){const r=t.appElement;"blur"===e&&(e="focusout");const s="_"+e,a=t.subject.global.events;if(!a[e]){const t=function(t){t.originalStopPropagation=t.stopPropagation,Zt(t,s,t.target)};a[e]=t,r.addEventListener(e,t)}n[s]=o,n[e]=o}function Zt(t,e,n){const o=n[e];if(o){let e=!1;if(t.stopPropagation=function(){e=!0,t.originalStopPropagation.call(t)},o(t),t.defaultPrevented||e)return}const r=n.parentNode;r&&Zt(t,e,r)}function qt(t,e,n,o){const r=function(...e){return r.tagFunction(t,e)};r.tagFunction=e,r.support=n,_t(n.appSupport,o,t,r)}function Gt(t){if(t.startsWith("class."))return"class";const e=function(t){switch(t){case"autoselect":return"autoselect";case"autofocus":return"autofocus";case"oninit":case"init":return"oninit";case"ondestroy":case"destroy":return"destroy"}return!1}(t);return!1!==e||!!t.startsWith("style.")&&"style"}const Qt={added:0,removed:0};function te(t,e,n,o){if(n.isNameOnly)return function(t,e,n,o,s,a,i,l){if(n){if(ie(e))return void o.removeAttribute(n);if(typeof n===r.object)if(typeof e===r.object)for(const t in n)t in e||gt.push((function(){o.removeAttribute(t)}));else for(const t in n)gt.push((function(){o.removeAttribute(t)}))}ne(t,e,o,s,a,i,l)}(t,e,n.value,n.element,o,n.howToSet,[],Qt),void(n.value=e);const s=n.element;oe(e,n.attrName,n,s,o,n.howToSet,n.isSpecial,Qt),n.value=e}function ee(t,e,n,o,s,a,i,l,c){const d=ae(e);if(d>=0){const e=t[d],r=he(e,a,!0);return r.isAttr=!0,r.element=n,r.howToSet=s,r.isNameOnly=!0,r.handler=(t,e)=>te(e,t,r,o),void ne(t,e,n,o,s,a,l)}const f=ae(c);if(f>=0){const c=t[f],d={isAttr:!0,element:n,attrName:e,checkValueChange:Lt,withinOwnerElement:!0};a.push(d);return u(d.value)?function(t,e,n,o,r,s,a){s&&gt.push((function(){n.removeAttribute(t)}));const i=e.value;if(u(i)){e.handler=le;const l=function(i){oe(i,t,e,n,o,r,s,a)},c=i.subscribe(l),u=e.global;(u.subscriptions=u.subscriptions||[]).push(c)}return void oe(e.value,t,e,n,o,r,s,a)}(e,d,n,o,s,i,l):(d.handler=(t,e)=>te(e,t,d,o),function(t,e,n,o,s,a,i,l){n.attrName=t,n.element=o,n.howToSet=s,typeof e===r.function?l&&Ft.includes(t)?Rt(t,e,o,t,a,i):se(n,e,a,t,o):(n.attrName=t,n.element=o,n.howToSet=s,n.isSpecial=l,Ut(t,e,o,s,i,a,l))}(e,c,d,n,s,o,l,i),void(d.value=c))}return Ut(e,c,n,s,l,o,i)}function ne(t,e,o,s,a,i,l){if(!ie(e))if(typeof e!==r.object)0!==e.length&&a(o,e,n);else for(const n in e){const r=e[n];ee(t,n,o,s,a,i,Gt(n),l,r)}}function oe(t,e,n,o,r,a,i,l){return d(t)?function(t,e,n,o,r,a,i,l){const c=t.templater.wrapper;if((c?.tagJsType||c?.original?.tagJsType)!==s.renderOnce)return se(i,e,t,o,n);return re(e,n,o,r,a,t,l)}(r,t,o,e,i,a,n,l):re(t,o,e,i,a,r,l)}function re(t,e,n,o,r,s,a){if(!1===o){switch(t){case void 0:case!1:case null:return void gt.push((function(){e.removeAttribute(n)}))}if(d(t))return qt(e,t,s,n);r(e,n,t)}else Rt(n,t,e,o,s,a)}function se(t,e,n,o,r){const s=t.value;return s&&s.tagFunction&&s.support?(s.tagFunction=e,s.support=n,s):qt(r,e=Bt(e,n),n,o)}function ae(t){return f(t)&&"tagJsVar"in t?t.tagJsVar:-1}function ie(t){return null==t||!1===t}const le=()=>{},ce="object"==typeof document&&document.createElement("div");function ue(t,e,o,r,s,a,i,l,c=[]){const u=[];i&&void 0===l&&(l=document.createTextNode(n),mt.push({element:l,relative:i}),i=void 0);for(let n=0;n<t.length;++n){const d=t[n],f=d.v;if(!isNaN(f)){const t=s.length;pe(e[t],t,s,o,c,r,a,i,l);continue}const p={};if(u.push(p),"text"===d.nn){fe(p,d,i,l);continue}const g=de(p,d,e,o,s,r,i,l);d.ch&&(p.ch=ue(d.ch,e,o,r,s,a+1,g,l,c).dom)}return{subs:c,dom:u,context:s}}function de(t,e,n,o,r,s,a,i){const l=t.domElement=document.createElement(e.nn);return e.at&&e.at.forEach((t=>{const e=t[0],a=t[1],i=t[2]||!1;ee(n,e,l,o,Dt,r,i,s,a)})),a?mt.push({element:l,relative:a}):bt.push({element:l,relative:i}),l}function fe(t,e,n,o){const r=t,s=r.tc=e.tc;ce.innerHTML=s;const a=r.domElement=document.createTextNode(ce.innerText);n?mt.push({element:a,relative:n}):bt.push({element:a,relative:o})}function pe(t,e,o,r,s,a,i,l,c){const d=document.createTextNode(n),f=he(t,o,i>0);if(f.placeholder=d,l?mt.push({relative:l,element:d}):bt.push({relative:c,element:d}),u(t))return s.push({insertBefore:d,appendTo:l,subject:t,support:r,counts:a,contextItem:f}),void(f.handler=le);f.handler=(t,e,n,o)=>Se(o,t,n);r.subject.global.locked=!0,Me(t,f,r,a,l,c);delete r.subject.global.locked,f.value=t}function ge(t,e,n,o){const r=t.subject.global;r.oldest=t,r.newest=t,++yt.locks;const a=function(t,e,n,o){const r=function(t){const e=t.templater,n=e.tag;if(n.tagJsType===s.dom)return n.dom;const o=n.strings;return function(t,e){const n=function(t){const e=t.map((t=>t.length));return e.push(t.length),Number(e.join(""))}(t),o=wn[n],r=o&&function(t,e,n){if(n&&n.strings.length===t.length){if(n.strings.every(((e,n)=>e===t[n]))&&n.values.length===e.length)return!0}return!1}(t,e,o);if(r)return o.domMetaMap;const s=function(t,e){sn(t,e);const n=sn(t,e).join(""),o=function(t){const e=[],n=[],o=[];let r=null,s=-1,a=0;const i=new RegExp(rn,"g");t=function(t){return t.replace(cn,(function(t){return t.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")}))}(t);for(;a<t.length;){const l=i.exec(t);if(!l)break;const[c,u,d]=l,f=c.startsWith("</"),p=c.endsWith("/>");if(a<l.index){const e=t.slice(a,l.index);if(e.trim()){an(e).forEach((t=>{t.startsWith(qe)&&(t=qe+ ++s+Ge),ln(r,n,t)}))}}if(a=l.index+c.length,f){r=o.pop()||null;continue}const g=[];let h;for(;null!==(h=on.exec(d));){const t=h[1]||h[3]||h[5];let n=h[2]||h[4]||h[6];if(void 0===t)continue;const o=""!==h[2],r=void 0===n&&o,a=t.toLowerCase(),i=a.startsWith("on")?dn(a):a;if(r){if(t.slice(0,qe.length)===qe){const t=qe+ ++s+Ge;e.push(["at",t]),g.push([t]);continue}if(h[0].startsWith(t)&&h[0].slice(t.length,h[0].length).search(/\s+$/)>=0){g.push([i]);continue}n=qe+ ++s+Ge}o||(n=h[2]);const l=[i,n],c=Gt(a);c&&l.push(c),g.push(l)}const m={nn:u};g.length&&(m.at=g),r?(r.ch||(r.ch=[]),r.ch.push(m)):n.push(m),p||(o.push(r),r=m)}if(a<t.length){const e=t.slice(a);if(e.trim()){an(e).forEach((t=>(t.startsWith(qe)&&++s,ln(r,n,t))))}}return n}(n);return o}(t,e),a=gn(s,e.length);i=a,i.forEach(yn);var i;const l={interpolation:void 0,string:void 0,strings:t,values:e,domMetaMap:a};return wn[n]=l,a}(o,n.values)}(t),a=t.templater.tag,i=a.values,l=[],c=t.subject.global;c.context=l;const u=ue(r,i,t,e,l,0,n,o);return u}(t,e,n,o);return r.htmlDomMeta=a.dom,--yt.locks,a}function he(t,e,n){const o={value:t,checkValueChange:Lt,withinOwnerElement:n};return e.push(o),o}function me(t,e,n){const o=e.global.newest;o.ownerSupport=t,e.checkValueChange=Ve;const r=ge(o,n,void 0,e.placeholder);for(const t of r.subs)ze(t);return o}function be(){return{tagJsType:s.templater}}function ve(t,e,n){const o=function(t,e,n,o,r){const s={templater:t,subject:o,castedProps:r,appSupport:void 0};return s.ownerSupport=e,s.appSupport=n,s}(t,e,e.appSupport,n);return n.global.context=[],o}function ye(t,e,n,o){const r=t[e],s=n[e];if(r===s.value)return;(0,s.handler)(r,t,o,s),s.value=r}function we(t,e){const n=t.subject.global.context;!function(t,e){const n=e.templater.tag||e.templater,o=e.templater.values||n.values,r=t.templater.tag;r.values=o}(t,e),++yt.locks,function(t,e){const n=t.templater.tag.values;let o=0;const r=n.length;for(;o<r;)ye(n,o,e,t),++o}(t,n),--yt.locks,wt()}function xe(t,e,n){n.checkValueChange=Ve;const o=t;let r=o.templater;r||(r=Y(ot.DEEP),r.tag=o,o.templater=r);const s=n.global=Mt(n),a=s.newest=tt(r,e,e.appSupport,n);return s.oldest=a,n}function ke(t,e,n,o,r){t.lastArray||(t.lastArray=[]);const s=t.lastArray;let a=t.placeholder,i=0;const l=[];for(let t=0;t<s.length;++t){const n=s[t],r=Vt(0,e,t,s,i,o);0!==r?(i+=r,2===r&&(t-=1)):l.push(n)}t.lastArray=l;const c=r,u=e.length;for(let t=0;t<u;++t){a=je(e,t,l,n,a,o,c).placeholder}}function je(t,e,n,o,r,s,a){const i=t[e],l=n[e];return l?function(t,e,n,o,r,s,a,i){const l=n.length>r;if(l)return Se(e,t,o),e;const c=Ce(t,s,o,a,n,i);return c}(i,l,n,o,e,r,s,a):Ce(i,r,o,s,n,a)}function Ce(t,e,n,o,r,a){const i={value:t,checkValueChange:Lt,withinOwnerElement:!1};o.added=o.added+1;const l=document.createTextNode("");return i.placeholder=l,a||bt.push({element:l,relative:e}),function(t,e,n){const o=t.tagJsType;if(o)switch(o){case s.templater:xe(t.tag,e,n);break;case s.tag:case s.dom:xe(t,e,n)}}(t,n,i),Me(t,i,n,o,a),i.value=t,r.push(i),a&&mt.push({element:l,relative:a}),i}const $e={added:0,removed:0};function Se(t,e,n){if(e===t.value)return;const o=t.checkValueChange(e,t);if(-1===o)return;const a=e&&e.tagJsType;if(a){if(a===s.renderOnce)return;Te(t,e,n)}else p(e)?ke(t,e,n,{added:0,removed:0}):typeof e!==r.function?o&&function(t,e){e.checkValueChange=Lt;const n=e.placeholder,o=kt(t);e.simpleValueElm=xt(o,n)}(e,t):t.value=e}function Ae(t,e,n){if(!e.global.newest)return void De(t,e,n,{added:0,removed:0});!function(t,e,n){const o=n.global,r=o.newest,a=r.templater.wrapper,i=e.templater.wrapper;let l=!1;const c=e.templater.tagJsType,u=s.stateRender===c||s.renderOnce===c;if(u)l=e.templater.tagJsType===s.renderOnce||zt(r,e);else if(a&&i){l=a.original===i.original}const d=e.templater;if(!l)return void function(t,e,n){const o=t.global,r=o.oldest;Tt(r),Mt(t);const s=De(e,t,n,{added:0,removed:0})}(n,d,t);const f=u||at(r,d);if(!f){return void function(t,e,n,o,r){const s=t.props,a=Re(e,n,o,s,r),i=e.propsConfig;i.castProps=a;const l=n.propsConfig;l.latest=i.latest}(d,e,r,t,d.propWatch===ot.DEEP?ut:ct)}if(o.locked)return void o.blocked.push(e);Fe(e)}(n,tt(t,n,n.appSupport,e),e)}function Ee(t,e,n,o){typeof n!==r.function&&function(t,e,n,o){const r=tt(n.templater||n,o,o.appSupport,e);we(t.subject.global.oldest,r)}(t,e,n,o)}function Te(t,e,n){const o=e.tagJsType;if(c(e))return void 0===t.global&&Mt(t),Ae(e,t,n),!0;const r=t.global;if(r){const o=r.newest;if(o)return Ee(o,t,e,n),!0}switch(o){case s.templater:return me(n,t,$e),!0;case s.tag:case s.dom:return function(t,e,n){const o=t;let r=o.templater;r||(r=be(),o.templater=r,r.tag=o),(e.global?e.global:Mt(e)).newest=ve(r,n,e),me(n,e,$e)}(e,t,n),!0}return!1}function Ve(t,e){const n=e.global,o=n?.newest;if(l(t)){return!zt(t,o)&&(Tt(o),Mt(e),7)}const r=t?.tagJsType;if(r){return!0===Te(e,t,n.newest.ownerSupport)&&-1}return Tt(o),delete e.global,e.renderCount=0,8}function Oe(t,e){const n=t.rearray;n.length&&n.length!==t.stateArray.length&&function(t,e,n){const o=`Saved states between renders are inconsistent. Expected ${t.length} states got ${n.stateArray.length}.`,r=e.templater?.wrapper;let s=r;(r?.original||r?.original)&&(s=r.original);const a={oldStates:n.stateArray,newStates:n.rearray,tagFunction:s,templater:e.templater},i=new z(o,a);throw console.error(Ne,a),i}(n,e,t)}const Ne="State tracking requires same number of state calls on every render. This error typically occurs when a state call is only reachable behind a condition. Also, wrapping tags that have state, with tag(), often helps when tag is only reachable by a condition.";function Pe(t,e){const n=t.subject;++n.renderCount;const o=A.stateConfig;delete o.support,t.state=o.stateArray,A.tagClosed$.next(e),Oe(o,t),n.global.newest=t}function Je(t,e,n,o){const r=n.global,a=n.renderCount,i=e?.state,l=A.stateConfig;if(i){const n=e.states;l.prevSupport=e,k(t,A.stateConfig,i,n)}else x(t,l);const c=t.templater;let u;if(c.tagJsType===s.stateRender){u=_(c,c,tt(c,o,t.appSupport,n)),u.states=t.states}else{u=(0,c.wrapper)(t,n,e),u.states=t.states}return Pe(u,o),n.renderCount>a+1?r.newest:u}function Le(t,e,n,o,r,s){n.checkValueChange=Ve;const a=ve(t,e,n);a.ownerSupport=e;const i=ge(a,o,r,r?void 0:s);for(const t of i.dom)t.marker&&(r?mt.push({element:t.marker,relative:r}):bt.push({element:t.marker,relative:s})),t.domElement&&(r?mt.push({element:t.domElement,relative:r}):bt.push({element:t.domElement,relative:s}));let l=-1;const c=i.subs.length-1;for(;l++<c;){ze(i.subs[l])}return a}function Me(t,e,n,o,r,a){const i=t?.tagJsType;return i?function(t,e,n,o,r,a,i){switch(t){case s.templater:return e.checkValueChange=Ve,a?Le(n,o,e,r,a,i):me(o,e,r);case s.dom:case s.tag:{e.checkValueChange=Ve;const t=n;let s=t.templater;s||(s=function(t){const e=be();return e.tag=t,t.templater=e,e}(t));const l=Mt(e);return a?Le(s,o,e,r,a,i):(l.newest=ve(s,o,e),e.checkValueChange=Ve,me(o,e,r))}case s.stateRender:case s.tagComponent:if(Mt(e),e.checkValueChange=Ve,a){const t=function(t,e,n,o,r){const a=tt(t,n,n.appSupport,e),i=a.propsConfig;if(i){const e=t.tagJsType!==s.tagComponent?[]:et(t,a);i.castProps=e}const l=e.global,{support:c}=Ye(a,l.newest,e,n);return function(t,e,n){let o=mt.length;const r=ge(t,e,n,void 0);for(const t of r.dom)t.domElement&&mt.splice(o++,0,{element:t.domElement,relative:n}),t.marker&&mt.splice(o++,0,{element:t.marker,relative:n});const s=r.subs;for(const t of s)ze(t)}(c,o,r),c}(n,e,o,r,a);return t}return De(n,e,o,r);case s.renderOnce:{Mt(e);const t=function(t,e,n){const o=Y(ot.DEEP);o.tagJsType=t.tagJsType;const r=ve(o,n,e);function s(){return o.tag=t(),r}return o.wrapper=s,s.tagJsType=t.tagJsType,s.original=t.original||t,r}(n,e,o);Je(t,void 0,e,o);const s=Le(t.templater,o,e,r,a,i);return e.checkValueChange=Ve,s}}}(i,e,t,n,o,r,a):p(t)?(ke(e,t,n,o,r),void(e.checkValueChange=Pt)):void(u(t)||function(t,e,n){const o=kt(t),r=xt(o,n);e.simpleValueElm=r,e.checkValueChange=Lt}(t,e,e.placeholder))}function ze({subject:t,support:e,counts:n,contextItem:o,appendTo:r}){let s=function(t){Me(t,o,e,{...n},a?r:void 0),a||A.stateConfig.support||wt(),s=function(t){!function(t,e,n){t!==e.value&&(Se(e,t,n),A.stateConfig.support||wt())}(t,o,e)}};let a=!0;const i=t.subscribe((function(t){s(t)}));o.subject=t,a=!1;const l=e.subject.global;(l.subscriptions=l.subscriptions||[]).push(i)}function De(t,e,n,o){const r=tt(t,n,n.appSupport,e),a=r.propsConfig;if(a){const e=t.tagJsType!==s.tagComponent?[]:et(t,r);a.castProps=e}const i=e.global,{support:l}=Ye(r,i.newest,e,n);return function(t,e,n){n.checkValueChange=Ve;const o=ge(t,e,void 0,n.placeholder).subs;for(const t of o)ze(t)}(l,o,e),l}function Re(t,e,n,o,r,s=-1){const a=e.subject.global.newest;if(!a){const e=K(o,t,s);o.push(...e);return t.propsConfig.castProps=e,o}const i=(e=a||e).propsConfig.castProps,l=[];for(let e=0;e<o.length;++e){const a=o[e],c=Ie(i[e],a,t,n,s+1,r);l.push(c)}return t.propsConfig.castProps=l,l}function Ie(t,e,n,o,s,a){return void 0===t?e:typeof t===r.function?e.mem?(t.mem=e.mem,e):(t.mem=e,t):a===s||U(e)?e:p(e)?function(t,e,n,o,r){for(let s=t.length-1;s>=0;--s){const a=t[s],i=e[s];t[s]=Ie(i,a,n,o,r+1,s)}return t}(e,t,n,o,a):function(t,e,n,o,r,s){const a=Object.keys(t);for(const i of a){const a=t[i],l=Ie(e[i],a,n,o,s,r+1);if(a===l)continue;const c=Object.getOwnPropertyDescriptor(t,i)?.set;c||(t[i]=l)}return t}(e,t,n,o,a,s)}function Xe(t){const e=t.subject.global,{subs:n,tags:o}=$t(e.context);We(t);for(const t of o)We(t);e.subscriptions&&n.forEach((t=>t.unsubscribe())),Mt(t.subject)}function We(t){const e=t.subject,n=e.global;!0!==n.deleted&&(n.deleted=!0,e.renderCount=0,St(t,[]))}function Ye(t,e,n,o){const r=e?.templater,a=r?.tag,i=Je(t,e,n,o),l=!e||zt(e,i);if(l){if(e){const t=e.templater.tag;t&&n.renderCount>0&&function(t,e,n){if(t.tagJsType===s.dom){const o=n?.dom;return void(o!==t.dom&&Xe(e))}if(n){const o=n.strings;if(o){const n=o?.length;n!==t.strings.length&&Xe(e)}}}(t,e,a)}}else{!function(t,e){const n=t.subject.global;let o=-1;const r=n.providers=n.providers||[],s=r.length-1;for(;o++<s;){const t=r[o];let s=-1;const a=t.children.length-1;for(;s++<a;)if(n===t.children[s].subject.global)return t.children.splice(s,1),void t.children.push(e)}}(e,i),Xe(e);const t=i.subject.global;t.oldest=i,t.newest=i}const c=e?.ownerSupport;return i.ownerSupport=o||c,{support:i,wasLikeTags:l}}const He={added:0,removed:0};function Ke(t,e,n,o){const r=o.global,{support:s,wasLikeTags:a}=Ye(e,t,o,n);return a?(we(r.oldest,s),s):(me(n,o,He),s)}function Be(t){return s.templater===t.tagJsType}function Fe(t){const e=t.subject.global,n=Be(t.templater),o=t.ownerSupport;if(e.locked)return e.blocked.push(t),t;if(n){return Ue(o,t)}e.locked=!0;const r=t.subject;e.blocked.length&&(t=e.blocked.pop(),e.blocked=[]);const s=Ke(e.newest,t,o,r);return delete e.locked,s}function Ue(t,e){const n=t.subject.global;if(!n||!0===n.deleted)return e;return Fe(n.newest||t)}function _e(t,e){return t.length!==e.length}new D("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");function Ze(){return A.stateConfig.support}const qe=":tagvar",Ge=":";const Qe="ondoubleclick",tn=/(:tagvar\d+:)/,en=/(^:tagvar\d+:|:tagvar\d+:$)/g,nn="__safeTagVar",on=/([:_a-zA-Z0-9\-.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,rn=/<\/?([a-zA-Z0-9-]+)((?:\s+[a-zA-Z_:][\w:.-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function sn(t,e){return function(t,e){const n=t.map(((t,n)=>n<e.length?t+qe+n+Ge:t));return function(t,e,n){const o=n.length-e.length;if(o>0)for(let n=o;n>0;--n)t.push(qe+(e.length+n-1)+Ge)}(n,t,e),n}(t.map((t=>t.replace(en,((t,e)=>nn+e)))),e)}function an(t){return t.split(tn).filter((t=>""!==t))}function ln(t,e,n){!function(t,e,n){t?(t.ch||(t.ch=[]),t.ch.push(n)):e.push(n)}(t,e,{nn:"text",tc:un(n)})}const cn=new RegExp("(\x3c!--[\\s\\S]*?--\x3e)","g");function un(t){return t.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,(function(t){return t.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")}))}function dn(t){if(t.startsWith("on")){return t.length===Qe.length&&t===Qe?"dblclick":t.slice(2,t.length)}return t}const fn=new RegExp(qe+"(\\d+)"+Ge,"g"),pn="ch";function gn(t,e,n=[],o=[]){const r=t;for(let t=0;t<r.length;t++){const s=[...o,t],a=r[t];if(a.at){const t=a.at;a.at=mn(t,e)}if(a.ch){const t=a.ch,o=[...s,pn];a.ch=gn(t,e,n,o)}t=hn(a,e,r,t)}return r}function hn(t,e,n,r){if("text"!==t.nn)return r;const s=t;let a,i=s.tc;if(typeof i!==o.string)return r;for(;null!==(a=fn.exec(i));){const t=a[1],o=parseInt(t,10);if(!isNaN(o)&&o<e){const t=qe+o+Ge,e=i.slice(a.index+t.length);n.splice(r,1,{nn:"text",v:o}),i=e,fn.lastIndex=0}}return s.tc=i,r}function mn(t,e){return t.map((t=>{const[n,r,s]=t;if(n.startsWith(qe)){const t=parseInt(n.replace(qe,""),10);if(!isNaN(t)&&t<e)return[{tagJsVar:t}]}if(typeof r===o.string&&r.startsWith(qe)){const t=parseInt(r.replace(qe,""),10);if(!isNaN(t)&&t<e)return[n,{tagJsVar:t},s]}return t}))}const bn="__safeTagVar";const vn=/__safeTagVar(\d+)/g;function yn(t){if(t.at&&(t.at=t.at?t.at.map((t=>{if(1===t.length)return t;const[,e]=t;if(typeof e===o.string&&e.startsWith(bn)){const n=parseInt(e.replace(bn,""),10);t[1]=qe+n+Ge}return t})):[]),t.ch){const e=t.ch;for(let t=0;t<e.length;t++){const n=e[t];if("text"===n.nn){if(typeof n.tc!==o.string)return;n.tc=n.tc.replace(vn,((t,e)=>qe+e+Ge))}yn(n)}0===e.length&&delete t.ch}}const wn={};function xn(t,...e){const n=function(t,e){const n={values:e,ownerSupport:Ze(),tagJsType:s.tag,strings:t,key:t=>(n.arrayValue=t,n),html:function(t,e){return n.children={strings:t,values:e},n}};return n}(t,e),o=Y(ot.NONE);return o.tag=n,n.templater=o,n}xn.dom=function(t,...e){return function(t,e){const n={values:e,ownerSupport:Ze(),dom:t,tagJsType:s.dom,key:function(t){return n.arrayValue=t,n},html:{dom:function(t,e){return n.children={dom:t,values:e},n}}};return n}(t,e)};const kn=rt((({name:t,array:e,included:n,columnNames:o,allColumnNames:r})=>{let s,a=!1,i=!1;const l=v([]);J((t=>[{mouseOverEditShow:a,edit:i,editFormula:s}]=t({mouseOverEditShow:a,edit:i,editFormula:s})));return xn`
    <a onclick=${function(){const e=o.indexOf(t);e>=0?o.splice(e,1):o.push(t)}} style="cursor:pointer;">
      <input type="checkbox" ${n&&"checked"} />&nbsp;${t}
    </a>

    <div
      onmouseover=${()=>a=!0}
      onmouseout=${()=>a=!1}
    >
      <a style.visibility=${i||a?"visible":"hidden"}
        onclick=${()=>i=!i}
      >⚙️&nbsp;</a>
      
      ${n&&o.length!==r.length?xn`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(...r)}}><small>all</small></a>
      `:xn`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(t)}}><small>only</small></a>
      `}
    </div>

    ${i&&xn`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${s&&xn`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${t=>{return n=s,o=t.target.value,n.stringFormula=o,void(n.value=jn(o,{array:e}));var n,o}}
            >${s.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${l.map((t=>xn`
                <div>
                  <div>
                    <strong>${t.title}</strong>
                    <a onclick=${()=>s=t}>✏️</a>
                  </div>
                  <div>${t.value}</div>
                </div>
              `.key(t)))}
          </div>
          <button type="button" onclick=${()=>{const n=`\n      array.reduce((all, item) => {\n        const value = item['${t}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;l.push({title:"sum",stringFormula:n,value:jn(n,{array:e})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function jn(t,e={}){return function(t,e){if(!t)return t;return e=new Proxy(e,{has:()=>!0}),new Function("with(this) { return ("+t+")}").call(e)}(t,{isNaN,Math,Number,Date,...e})}const Cn=rt((({array:t,showAll:e,showKids:n,toggleColumnDialog:o,columnNames:r,formatChange:s,allowMaximize:a,everySimpleValue:i})=>xn`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${t.length&&xn`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${r.map((t=>xn`
                <th
                  style.cursor=${o&&"pointer"}
                  onclick=${o}
                >${t}</th>
              `.key(t)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${t.map((t=>xn`
            <tr>
              ${r.map((o=>xn`
                <td>
                  ${Jn({value:t[o],showLevels:0,showAll:e,showKids:e||n,isRootDump:!1,formatChange:s,allowMaximize:a})}
                </td>
              `.key(t[o])))}
            </tr>
          `.key(t)))}
        </tbody>
      </table>
    </div>
  `)),$n=rt((({array:t,showLevels:e,showAll:n,showKids:o,columnNames:r,formatChange:s,toggleColumnDialog:a,allowMaximize:i,everySimpleValue:l})=>xn`
    ${t.map(((t,o)=>{const c=function(t,e){if(["string","number","boolean"].includes(typeof t))return t;if(Array.isArray(t))return t;return function(t,e){if(!e)return t;const n={};return e.forEach((e=>{(t.hasOwnProperty(e)||e in t)&&(n[e]=t[e])})),n}(t,e)}(t,r);return xn`${Jn({value:c,showLevels:e,showAll:n,showKids:!0,isRootDump:!1,formatChange:s,onHeaderClick:a,allowMaximize:i,everySimpleValue:l})}`.key(o)}))}
  `));const Sn=rt((({showLevels:t,showAll:e,showKids:n,array:o,arrayView:r,formatChange:s,allowMaximize:a,everySimpleValue:i})=>{const l=T([o,o.length],(()=>o.length?function(t){return t.reduce(((t,e)=>{if(e&&"object"==typeof e){if(Array.isArray(e))return t;Object.keys(e).forEach((e=>{t.includes(e)||t.push(e)}))}return t}),[])}(o):[]));let c;const u=T([l],(()=>[...l]));let d=!1;const f=v((()=>"columnDialog"+performance.now()));J((t=>[{columnNames:c,showColumnDialog:d}]=t({columnNames:c,showColumnDialog:d}))),T.noInit([u.length],(()=>{c||(c=u)}));const p=()=>{d=!d;const t=document.getElementById(f);d?t.showModal():t.close()};return xn`
    ${"table"===r?Cn({showAll:e,showKids:n,array:o,toggleColumnDialog:p,columnNames:c||l,formatChange:s,everySimpleValue:i}):$n({array:o,showLevels:t,showAll:e,showKids:n,formatChange:s,columnNames:c||l,toggleColumnDialog:p,allowMaximize:a,everySimpleValue:i})}

    <dialog id=${f} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${l.map((t=>{const e=void 0===c||c.includes(t);return xn`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${kn({name:t,array:o,included:e,columnNames:c||u,allColumnNames:l})}
            </div>
          `.key(t)}))}
        <button style="width:100%" type="button" onclick=${p}>🅧 close</button>
      </div>
    </dialog>
  `}));const An=rt((({key:t,value:e,show:n,showAll:o,showKids:r,showLevels:s,formatChange:a,allowMaximize:i,everySimpleValue:l})=>{let c,u,d=!1;J((t=>[{showLower:c,arrayView:u,maximize:d}]=t({showLower:c,arrayView:u,maximize:d}))),L((t=>[r]=t(r))),L((t=>[o]=t(o))),T.noInit([n],(([t])=>c=t)),T.noInit([o],(([t])=>c=t));const f=v((()=>"maximize-dump-"+performance.now())),p=()=>{d=!d,d&&document.getElementById(f).showModal()},g=o||c||r||null==c&&s>0,h=n=>xn`
    <div class="taggedjs-array-label">
      <a style="flex-grow:1" onclick=${()=>{if(void 0===c)return o=r=c=!g;o=r=c=!c}}>
        <strong>${t}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===u?"bold":""}
          onclick=${()=>u="table"===u?void 0:"table"}>${"table"===u?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${e.length}]</sup>
      ${n&&xn`
        &nbsp;<a onclick=${p}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `,m={showLevels:s,showAll:o,showKids:r,formatChange:a,array:e,arrayView:u,allowMaximize:i,everySimpleValue:l};return xn`<!-- array -->
    <div class="taggedjs-array-wrap">
      ${h(i)}
      ${g&&xn`
    <!-- array displays wrap -->
    <div class="taggedjs-array-body">
      ${Sn(m)}
    </div>
  `}
    </div>

    <!-- maximize -->
    <dialog id=${f} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
    >
      <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
        ${d&&h(!1)}
      </div>
      
      ${d&&xn`
        <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
          ${Sn({...m,allowMaximize:!1})}
        </div>
      `}

      <div style="padding:.25em">
        <button type="button" onclick=${()=>document.getElementById(f).close()} style="width:100%">🅧 close array</button>
      </div>
    </dialog>
  `}));function En(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}function Tn({key:t,value:e,onHeaderClick:n,everySimpleValue:o}){const r=e.search&&("https://"===e.slice(0,8)||"http://"===e.slice(0,7));let s;return s=o?Vn({value:e,everySimpleValue:o}):r?On(e):Vn({value:e}),xn`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${t&&xn`
        <div class="taggedjs-simple-label"
          style.cursor=${n&&"pointer"}
          onclick=${n}
        >${t}</div>
      `}
      ${s}
    </div>
  `}const Vn=rt((({value:t,everySimpleValue:e})=>{const n=[void 0,null,"null"].includes(t),o=t,r=!isNaN(o)&&o>1e9?function(t){return t>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(t).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*t).toLocaleString()}(o):"";let s=0;J((t=>[s]=t(s)));let a=t;return e&&(a=e(t)),a=(null===a?"null":!1===a&&"false")||void 0===a&&"undefined"||a,xn`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{s=Date.now()}}
      onmouseup=${e=>{if(Date.now()-s>300)return e.preventDefault(),e.stopPropagation(),!0;En(t)}}
      style="cursor:pointer;"
      style.background-color=${n?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===t?"#28a54c":!1===t&&"#e42112")||n&&"white"||""}
      title=${r}
    >${a}</div>
  `}));const On=t=>xn`
    <a onclick=${()=>En(t)} href=${t}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${t}</a>
  `,Nn=rt((({key:t,showKids:e,show:n,showLevels:o,value:r,showAll:s,onHeaderClick:a,formatChange:i,allowMaximize:l,everySimpleValue:c})=>{let u,d=!1;const f=v((()=>"maximize-dump-"+performance.now()));J((t=>[{showLower:u,maximize:d}]=t({showLower:u,maximize:d}))),L((t=>[e]=t(e))),T.noInit([n],(([t])=>u=t)),T.noInit([s],(([t])=>u=t));const p=!t||e||u||void 0===u&&o>0,g=()=>{d=!d,d&&document.getElementById(f).showModal()},h=n=>xn`
    <div class="taggedjs-object-label">
      <a onclick=${()=>{if(void 0===u)return s=e=u=!p;e=u=!u}}>
        <strong>${t}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(r).length}}
        </sup>
      </a>
      ${n&&xn`
        &nbsp;<a onclick=${g}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `,m=t=>xn`
    <div class="taggedjs-object-body-wrap">
      ${Object.entries(r).map((([n,r])=>xn`
        <!-- recurse -->
        <div class="taggedjs-object"
          style=${r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;"}
        >
          ${Jn({value:r,key:n,show:u,showAll:s,showLevels:o-1,showKids:s||e,isRootDump:!1,formatChange:i,onHeaderClick:a,allowMaximize:t,everySimpleValue:c})}
      `.key(n)))}
    </div>
  `;return xn`
    <div style="flex: 1 1 10em;text-align:left;">
      <div class="taggedjs-object-wrap">
        ${t&&h(l)}
        ${p&&m(l)}

        <!-- maximize -->
        <dialog id=${f} class="dump-dialog" style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
            ${d&&h(!1)}
          </div>
          
          ${d&&m(!1)}

          <div style="padding:.25em">
            <button type="button" onclick=${()=>document.getElementById(f).close()} style="width:100%">🅧 close object</button>
          </div>
        </dialog>
      </div>
    </div>
  `})),Pn=rt((({value:t,format:e,showAll:n,formatChange:o,showAllChange:r})=>xn`
    <style>
      dialog.dump-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.7); /* Set a semi-transparent black background */
      }

      .child-margin-xxs {margin:0.2em;}
      
      .taggedjs-dump .hover-bg-warning:hover {background-color:#fcf8e3}
      .taggedjs-dump .hover-bg-balanced:hover {background-color:#33cd5f}
      .taggedjs-dump .active-bg-energized:active {background-color:#ffc900}
      .taggedjs-dump .bg-dark {background-color:#444444}
      .taggedjs-dump .bg-balanced {background-color:#33cd5f}
      
      .taggedjs-dump .taggedjs-object {margin:0.2em;padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;}
      .taggedjs-dump .taggedjs-object-label {
        padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;
        border-color:white;flex-grow:1;
        background-color:#387ef5;
      }

      .taggedjs-dump .taggedjs-simple-label {
        border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;
      }

      .taggedjs-dump .taggedjs-object-body-wrap {
        display:flex;flex-wrap:wrap
      }

      .taggedjs-dump .taggedjs-object-wrap {
        font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;
      }
      
      .taggedjs-dump .taggedjs-array-label {
        padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;
      }

      .taggedjs-dump .taggedjs-array-body {
        text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em
      }
      
      .taggedjs-dump .taggedjs-array-wrap {
        color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex
      }
    </style>
    <div style="width: 100%;line-height: 90%;">
      <div style="position:relative;">
        <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
          ${!e||"flex"===e&&xn`
            <a
              style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(n?"background-color:#33cd5f;":"background-color:#444444")}
              class="hover-bg-balanced"
              onclick=${()=>r(n=!n)}
              title="hide/show all sub objects"
            >👁</a>
          `}
          <a
            style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(e&&"flex"!==e?"background-color:#444444":"background-color:#33cd5f;")}
            class="hover-bg-balanced"
            onclick=${()=>o(e="flex")}
          >flex</a>
          <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===e?"background-color:#33cd5f;":"background-color:#444444")}
            class="hover-bg-balanced"
            onclick=${()=>o(e="json")}
          >json</a>
          <a style="margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"
            class="bg-dark hover-bg-balanced active-bg-energized"
            onclick=${()=>function(t){const e=JSON.stringify(t,null,2);En(e)}(t)}
          >copy</a>
        </div>
      </div>
    </div>
  `));const Jn=rt((({key:t,value:e,showKids:n=!1,showLevels:o=-1,showAll:r=!1,format:s="flex",formatChange:a=(t=>s=t),isRootDump:i=!0,onHeaderClick:l,allowMaximize:c,everySimpleValue:u})=>{i&&void 0===c&&(c=!0);const d=null===e?"null":typeof e;let f,p=!1;return L((t=>[s]=t(s))),L((t=>[r]=t(r))),L((t=>[o]=t(o))),J((t=>[{show:p,arrayView:f}]=t({show:p,arrayView:f}))),function(t){v(t)}((()=>{(o=o>=0&&o||(-1===o&&!t&&e&&e instanceof Object?2:0))>0&&(p=!0)})),[null,void 0].includes(e)?Tn({key:t,value:d,onHeaderClick:l,everySimpleValue:u}):["boolean","number","string"].includes(d)?Tn({key:t,value:e,onHeaderClick:l,everySimpleValue:u}):Mn({value:e,showKids:n,key:t,onHeaderClick:l,everySimpleValue:u,format:s,isRootDump:i,showAll:r,showAllChange:t=>r=t,formatChange:a,show:p,showLevels:o,allowMaximize:c})}));let Ln=0;const Mn=({value:t,showKids:e,key:n,onHeaderClick:o,everySimpleValue:r,format:s,isRootDump:a,showAll:i,showAllChange:l,formatChange:c,show:u,showLevels:d,allowMaximize:f})=>{if(null===t)return e?Tn({key:n,value:"null",onHeaderClick:o,everySimpleValue:r}):xn`no kids`;const p=(!s||"flex"===s)&&t.push&&t.pop;return xn`
    <div id=${"taggedjs-dump-"+ ++Ln} class="taggedjs-dump">
      ${a&&Pn({value:t,format:s,showAll:i,showAllChange:l,formatChange:c})}
      ${"json"===s&&xn`
    <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
    >${JSON.stringify(t,null,2)}</textarea>
  `||p?An({key:n,value:t,show:u,showAll:i,showKids:e,showLevels:d,formatChange:c,allowMaximize:f,everySimpleValue:r}):Nn({key:n,show:u,showKids:e,showLevels:d,value:t,showAll:i,formatChange:c,onHeaderClick:o,allowMaximize:f,everySimpleValue:r})}
    </div>
  `};var zn=e.B;export{zn as dump};
//# sourceMappingURL=bundle.js.map