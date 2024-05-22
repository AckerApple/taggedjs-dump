var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return e?.wrapper?.parentWrap.original instanceof Function}function r(e){return o(e)||a(e)}function o(e){const t=e;return!0===t?.isTemplater&&void 0===t.wrapper}function a(e){const t=e;return!0===t?.isTagClass}function s(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function l(e){return e instanceof Array&&e.every((e=>a(e)||o(e)))}function i(e,t,n){const r=[...t],o=r.shift(),a=e=>{if(r.length)return i(e,r,n);n(e)};let s=a;const l=o(e,{setHandler:e=>s=e,next:a});s(l)}e.d(t,{B:()=>it});class c{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(e,t){this.value=e,this.onSubscription=t}subscribe(e){const t=function(e,t){const n=c.globalSubCount$;c.globalSubCount$.set(n.value+1);const r=()=>{r.unsubscribe()};return r.callback=t,r.subscriptions=[],r.unsubscribe=()=>(function(e,t){const n=e.findIndex((e=>e.callback===t));-1!==n&&e.splice(n,1)}(e.subscribers,t),c.globalSubCount$.set(n.value-1),r.unsubscribe=()=>r,r.subscriptions.forEach((e=>e.unsubscribe())),r),r.add=e=>(r.subscriptions.push(e),r),r.next=e=>{t(e,r)},r}(this,e),n=this.subscribeWith;if(n){if(this.methods.length){const n=e;e=e=>{i(e,this.methods,(e=>n(e,t)))}}return n(e)}this.subscribers.push(t);const r=c.globalSubCount$.value;return c.globalSubCount$.set(r+1),this.onSubscription&&this.onSubscription(t),t}set(e){this.value=e,this.subscribers.forEach((t=>{t.callback(e,t)}))}next=this.set;toPromise(){return new Promise(((e,t)=>{this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}))}toCallback(e){return this.subscribe(((t,n)=>{n.unsubscribe(),e(t)})),this}pipe(...e){const t=new c;return t.methods=e,t.subscribeWith=e=>this.subscribe(e),t}static all(e){return function(e){const t=new c;return t.subscribeWith=t=>{const n=[],r=[],o=(o,a)=>{if(n[a]=!0,r[a]=o,n.length===e.length){for(let e=n.length-1;e>=0;--e)if(!n[e])return;t(r,s)}},a=[...e],s=a.shift().subscribe((e=>o(e,0))),l=a.map(((e,t)=>e.subscribe((e=>o(e,t+1)))));return s.subscriptions=l,s},t}(e.map((e=>s(e)?e:new c(e,(t=>(t.next(e),t))))))}static globalSubCount$=new c(0)}class u extends c{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value,t),t}}function d(){return p.memory.stateConfig.tagSupport}function p(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};p.tagUse.push(t)}p.tagUse=[],p.memory={};class g extends Error{details;constructor(e,t,n={}){super(e),this.name=g.name,this.details={...n,errorCode:t}}}class f extends g{constructor(e,t){super(e,"array-no-key-error",t),this.name=f.name}}class h extends g{constructor(e,t){super(e,"state-mismatch-error",t),this.name=h.name}}class m extends g{constructor(e,t){super(e,"sync-callback-error",t),this.name=m.name}}p.memory.stateConfig={array:[]};const b=e=>function(e){const t=e.memory.state,n=p.memory.stateConfig;n.rearray=[],t?.length&&(t.forEach((e=>y(e))),n.rearray.push(...t)),n.tagSupport=e}(e);function y(e){const t=e.callback;if(!t)return e.defaultValue;const[n,r]=function(e){const t=e(v),[n]=t,[r]=e(n);return[n,r]}(t);if(r!==v){const o='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(o,{state:e,callback:t,value:n,checkValue:r}),new Error(o)}return n}p({beforeRender:b,beforeRedraw:b,afterRender:e=>{const t=e.memory,n=p.memory.stateConfig,r=n.rearray;if(r.length&&r.length!==n.array.length){const t=`States lengths have changed ${r.length} !== ${n.array.length}. State tracking requires the same amount of function calls every render. Typically this errors is thrown when a state like function call occurs only for certain conditions or when a function is intended to be wrapped with a tag() call`,o=e.templater?.wrapper,a={oldStates:n.array,newStates:n.rearray,tagFunction:o.parentWrap.original},s=new h(t,a);throw console.warn(t,a),s}n.tagSupport,delete n.rearray,delete n.tagSupport,t.state.length=0,t.state.push(...n.array),t.state.forEach((e=>e.lastValue=y(e))),n.array=[]}});class v{}function w(e,t){e.forEach(((e,n)=>{const r=e.get(),o=t[n].callback;o&&o(r),t[n].lastValue=r}))}function x(e){const t=p.memory.stateConfig;let n;const r=t.rearray[t.array.length];if(r){let e=y(r);n=t=>[e,e=t];const o={get:()=>y(o),callback:n,lastValue:e,defaultValue:r.defaultValue};return t.array.push(o),e}let o=(e instanceof Function?e:()=>e)();if(o instanceof Function){const e=t.array,n=t.tagSupport,r=o;o=(...t)=>{const o=n.global.newest.memory.state;w(o,e);const a=r(...t);return w(e,o),a},o.original=r}n=e=>[o,o=e];const a={get:()=>y(a),callback:n,lastValue:o,defaultValue:o};return t.array.push(a),o}const C=(e,t)=>k(e,t),S=e=>e,k=(e,t,{init:n,before:r=(()=>!0),final:o=S}={})=>{let a=x({pastResult:void 0,values:void 0});const s=a.values;if(void 0===s){if(!r(e))return a.values=e,a.pastResult;const l=(n||t)(e,s);return a.pastResult=o(l),a.values=e,a.pastResult}if(e.every(((e,t)=>e===s[t])))return a.pastResult;if(!r(e))return a.values=e,a.pastResult;const l=t(e,s);return a.pastResult=o(l),s.length=0,s.push(...e),a.pastResult};function $(e,t){return Object.defineProperty(t,"noInit",{get(){const t=e();return t.setup.init=()=>{},t}}),Object.defineProperty(t,"asSubject",{get(){const t=e(),n=(e,n)=>{const r=x((()=>d().memory.state)),o=x((()=>new u(void 0)));return k(e,((e,t)=>{const a=n(e,t);r.length&&w(p.memory.stateConfig.array,r),o.set(a)}),t.setup),o};return n.setup=t.setup,$((()=>n),n),n}}),Object.defineProperty(t,"truthy",{get(){const t=e();return t.setup.before=e=>e.every((e=>e)),t}}),t}function E(e){const t=p.memory.stateConfig;let n;const r=t.rearray[t.array.length];if(r){let e=y(r);n=t=>[e,e=t];const o={get:()=>y(o),callback:n,lastValue:e,defaultValue:r.defaultValue};return t.array.push(o),T(e,o)}let o=(e instanceof Function?e:()=>e)();n=e=>[o,o=e];const a={get:()=>y(a),callback:n,lastValue:o,defaultValue:o};return t.array.push(a),T(o,a)}function T(e,t){return n=>(t.callback=n||(t=>[e,e=t]),e)}function A(e){return t=>{let n=E(e)(t);return C([e],(()=>t(n=e))),t(n),n}}function j(e){return V(e,new WeakMap)}function V(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const n=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,n),Array.isArray(e))for(let r=0;r<e.length;r++)n[r]=V(e[r],t);else for(const r in e)e.hasOwnProperty(r)&&(n[r]=V(e[r],t));return n}function N(e,t){return B(e,t,new WeakMap)}function B(e,t,n){return!!(e===t||(r=e,o=t,r instanceof Function&&o instanceof Function&&r.toString()===o.toString()))||!!n.has(e)||"object"==typeof e&&"object"==typeof t&&(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():(n.set(e,0),Array.isArray(e)&&Array.isArray(t)?function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!B(e[r],t[r],n))return!1;return!0}(e,t,n):!Array.isArray(e)&&!Array.isArray(t)&&function(e,t,n){const r=Object.keys(e),o=Object.keys(t);if(0===r.length&&0===o.length)return!0;if(r.length!==o.length)return!1;for(const a of r)if(!o.includes(a)||!B(e[a],t[a],n))return!1;return!0}(e,t,n)));var r,o}function R(e,t){const n=p.memory.providerConfig;n.ownerSupport=t,e.global.providers.length&&(n.providers.length=0,n.providers.push(...e.global.providers))}function F(e){e.global.providers.filter((e=>!N(e.instance,e.clone))).forEach((t=>{!function(e,t){X(e,t).forEach((({tagSupport:e,renderCount:t,provider:n})=>{if(!e.global.deleted)return t===e.global.renderCount?(n.clone=j(n.instance),Y(e,!1)):void 0}))}(e.getAppTagSupport(),t),t.clone=j(t.instance)}))}function X(e,t,n=[]){const r=e.global,o=r.providers.find((e=>e.constructMethod.compareTo===t.constructMethod.compareTo));return o&&n.push({tagSupport:e,renderCount:r.renderCount,provider:o}),e.childTags.forEach((e=>X(e,t,n))),n}function z(e,t){const n=e.templater,r=t.templater,o=n?.tag||e,a=r.tag,s=o.strings,l=t.strings||a.strings;return s.length===l.length&&(!!s.every(((e,t)=>l[t]===e))&&function(e,t){if(!(e.length===t.length))return!1;return!!t.every(((t,n)=>{const r=e[n];return!(t instanceof Function&&r instanceof Function)||!(t.toString()!==r.toString())}))}(e.values||o.values,t.values||a.values))}function M(e){e.global.oldest.destroy(),O(e),e.global.context={}}function O(e){delete e.global.oldest,delete e.global.newest}function P(e,t){p.tagUse.forEach((n=>n.beforeDestroy(e,t)))}function D(e,t,n,r){const o=e.global.renderCount;!function(e,t,n){const r=n?.ownerTagSupport,o=r||t;if(n){const t=n.memory.state;e.memory.state=[...t],e.global=n.global,function(e,t){p.tagUse.forEach((n=>n.beforeRedraw(e,t)))}(e,n)}else!function(e,t){p.tagUse.forEach((n=>n.beforeRender(e,t)))}(e,o),p.memory.providerConfig.ownerSupport=o}(e,r,t);let a=(0,e.templater.wrapper)(e,n);return s=e,l=r,p.tagUse.forEach((e=>e.afterRender(s,l))),p.memory.tagClosed$.next(l),a.global.renderCount>o+1?e.global.newest:(e.global.newest=a,a);var s,l}function L(e,t,n,r){const o=D(e,t,n,r);!t||z(t,o)||function(e,t,n){const r=e.global,o=r.insertBefore;M(e),t.global={...r};const a=t.global;a.insertBefore=o,a.deleted=!1,delete a.oldest,delete a.newest,delete n.tagSupport}(t,o,n);const a=t?.ownerTagSupport;return o.ownerTagSupport=r||a,o}function Y(e,t){const n=e.global,r=e.templater;if(!r.wrapper){const t=e.ownerTagSupport;return++n.renderCount,Y(t,!0)}const o=e.subject;let a,s=!1;if(t&&e&&(a=e.ownerTagSupport,a)){const t=r.props,n=e.propsConfig.latestCloned;s=!t.every(((e,t)=>N(e,n[t])))}const l=function(e,t,n,r){const o=r.tagSupport,a=o.global;t.global=a;const s=a.renderCount;F(e);const l=a.newest;if(s!==a.renderCount)return e.updateBy(l),l;const i=L(t,l||o||a.oldest,r,n),c=a.oldest||e;return i.global.oldest=c,z(l,i)&&(r.tagSupport=i,c.updateBy(i)),i}(e.global.oldest,e,a,o);return a&&s?(Y(a,!0),l):l}$((()=>function(e){const t=(t,n)=>k(t,n,e);return t.setup=e,$((()=>t),t),t}({})),C),p.memory.providerConfig={providers:[],ownerSupport:void 0},p({beforeRender:(e,t)=>{R(e,t)},beforeRedraw:(e,t)=>{R(e,t.ownerTagSupport)},afterRender:e=>{const t=p.memory.providerConfig;e.global.providers=[...t.providers],t.providers.length=0}}),p.memory.tagClosed$=new c(void 0,(e=>{d()||e.next()}));let K=e=>(e,t,n,r,o,a)=>{throw new m("Callback function was called immediately in sync and must instead be call async")};const W=K;function I(e){const t=p.memory.stateConfig.array;K=n=>(...r)=>e.global.callbackMaker?function(e,t,n,...r){const o=e.memory.state;w(o,n);const a=t(...r);return w(n,o),Y(e,!1),a instanceof Promise&&a.finally((()=>{w(n,o),Y(e,!1)})),a}(e,n,t,...r):n(...r)}function H(e){p.memory.currentSupport=e}function U(e){p.memory.destroyCurrentSupport=e}function _(e){p.memory.childrenCurrentSupport=e}p({beforeRender:e=>I(e),beforeRedraw:e=>I(e),afterRender:e=>{e.global.callbackMaker=!0,K=W}}),p({beforeRender:e=>H(e),beforeRedraw:e=>H(e)}),p({beforeRender:e=>U(e),beforeRedraw:e=>U(e),beforeDestroy:e=>{const t=e.global.destroyCallback;t&&t()}}),p({beforeRender:e=>_(e),beforeRedraw:e=>_(e)});const J="__tagvar",q="--"+J+"--",G=new RegExp(q,"g");class Q{strings;values;isTagClass=!0;memory={};templater;constructor(e,t){this.strings=e,this.values=t}key(e){return this.memory.arrayValue=e,this}children;html(e,...t){return this.children={strings:e,values:t},this}}class Z{props;isTemplater=!0;tagged;wrapper;madeChildIntoSubject=!1;tag;children=new u([]);constructor(e){this.props=e}html(e,...t){const n=new Q(e,t),{childSubject:r,madeSubject:o}=function(e){if(s(e))return{childSubject:e,madeSubject:!1};if(l(e))return{childSubject:new u(e),madeSubject:!0};const t=e;return t?(t.memory.arrayValue=0,{childSubject:new u([t]),madeSubject:!0}):{childSubject:new u([]),madeSubject:!0}}(n);return this.children=r,this.madeChildIntoSubject=o,this}}function ee(e,t){if(e.isChildOverride)return e;const n=(n,r)=>te(e,t,n,r);return n.tagFunction=e,n}function te(e,t,n,r){const o=t.global,a=o.renderCount,s=e.bind(n)(...r);if(a!==o.renderCount||o.deleted)return s instanceof Promise?s.then((()=>"promise-no-data-ever")):"no-data-ever";const l=Y(o.newest,!0);return o.newest=l,s instanceof Promise?s.then((()=>{if(o.deleted)return"promise-no-data-ever";const e=Y(o.newest,!0);return o.newest=e,"promise-no-data-ever"})):"no-data-ever"}function ne(e){return e.map((e=>{const t=e;return n(e)?j(e.props):a(t)||o(t)?ne(t.values):l(t)?ne(t):j(e)}))}function re(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function oe(e,t){O(e),e.destroy({stagger:t.removed++});const n=e.global.insertBefore;n.parentNode.removeChild(n)}function ae(e){const t=e.global.insertBefore,n=e.global,r=n.placeholder;r&&(re(t,r),delete n.placeholder)}function se(e,t=[]){for(let n=e.length-1;n>=0;--n){const r=e[n];t.push(r),e.splice(n,1),se(r.childTags,t)}return t}function le(e,t){const n=e;let r=n.templater;r||(r=new Z([]),r.tag=n,n.templater=r);const o=new u(r);return o.tagSupport=new We(r,t,o),o}function ie(e){const t=document.createTextNode(""),n=e.parentNode;return n.insertBefore(t,e),n.removeChild(e),t}function ce(e,t,n){const r=e.split(".");if("style"===r[0]&&(n.style[r[1]]=t),"class"===r[0])return r.shift(),void(t?r.forEach((e=>n.classList.add(e))):r.forEach((e=>n.classList.remove(e))))}const ue=/^\s*{__tagvar/,de=/}\s*$/;function pe(e){return e&&e.search(ue)>=0&&e.search(de)>=0}function ge(e,t,n,r,o,a){if(pe(t))return function(e,t,n,r,o,a){return he(e,fe(r,t),n,o,a)}(e,t,n,r,o,a);if(pe(e)){let t;const s=fe(r,e).subscribe((e=>{!function(e,t,n,r,o){if(t&&t!=e&&("string"==typeof t?n.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>n.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>he(e,t,n,r,o)));else{if(!e.length)return;he(e,"",n,r,o)}}(e,t,n,o,a),t=e}));return o.global.subscriptions.push(s),void n.removeAttribute(e)}return me(e)?ce(e,t,n):void 0}function fe(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function he(e,t,n,r,o){const a=me(e);if(t instanceof Function){const r=function(...e){return t(n,e)};n[e].action=r}if(s(t)){n.removeAttribute(e);const s=t=>(t instanceof Function&&(t=ee(t,r)),function(e,t,n,r,o){if(e instanceof Function){const r=function(...n){return e(t,n)};return r.tagFunction=e,void(t[n]=r)}if(r)return void ce(n,e,t);if(e)return void o(t,n,e);[void 0,!1,null].includes(e)?t.removeAttribute(n):o(t,n,e)}(t,n,e,a,o)),l=t.subscribe(s);r.global.subscriptions.push(l)}else o(n,e,t)}function me(e){return e.search(/^(class|style)(\.)/)>=0}function be(e,t,n){e.setAttribute(t,n)}function ye(e,t,n){e[t]=n}function ve(e,t,n){const r=e.getAttributeNames();let o=be;r.forEach((r=>{"INPUT"===e.nodeName&&"value"===r&&(o=ye),ge(r,e.getAttribute(r),e,t,n,o),o=be}))}const we=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function xe(e,t,n){const r=n.clones.map((e=>e));if((t=L(t,e.tagSupport,e,n)).global.newest=t,n.clones.length>r.length){const e=n.clones.filter((e=>!r.find((t=>t===e))));t.clones.push(...e)}return n.childTags.push(t),t}function Ce(e,t,n,r,o){if(!0!==e.tagged){const t=e.wrapper.parentWrap.original;let n=t.name||t.constructor?.name;"Function"===n&&(n=void 0);const r=n||t.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const a=new We(e,r,t);let s=t.tagSupport;return(a.global=s?.global||a.global).insertBefore=n,p.memory.providerConfig.ownerSupport=r,s&&!o.forceElement||(s=xe(t,s||a,r)),function(e,t,n,{counts:r,forceElement:o}){const a=t,s=a.tagSupport,l=s?.global.oldest||void 0;if(l&&l)return function(e,t,n){if(t instanceof Function){const e=t(n);return n.updateBy(e),void(t.tagSupport=e)}return n.updateBy(e),void(t.tagSupport=e)}(e,a,l);e.buildBeforeElement(n,{counts:r,forceElement:o})}(s,t,n,o),s}function Se(e,t,n,r){let o=r.tagSupport;o||(o=new We(e,n,r),ke(o,n,r),n.childTags.push(o)),r.tagSupport=o,o.ownerTagSupport=n,o.buildBeforeElement(t,{counts:{added:0,removed:0},forceElement:!0})}function ke(e,t,n){e.global.oldest=e,e.global.newest=e,e.ownerTagSupport=t,n.tagSupport=e}function $e(e){const t=Ee();return t.tag=e,e.templater=t,t}function Ee(){const e={children:new u([]),props:[],isTag:!0,isTemplater:!1,tagged:!1,madeChildIntoSubject:!1,html:()=>e};return e}function Te(e,t,n,r,o){const s=r.clones;let l=e.lastArray=e.lastArray||[];e.placeholder||function(e,t){if("TEMPLATE"!==e.nodeName)return void(t.placeholder=e);const n=t.placeholder=document.createTextNode(""),r=e.parentNode;r.insertBefore(n,e),r.removeChild(e)}(n,e);const i=e.placeholder;let c=0;return l=e.lastArray=e.lastArray.filter(((e,n)=>{const r=t.length-1<n-c,a=t[n-c],s=e.tagSupport.templater.tag,i=a?.memory.arrayValue,u=s.memory.arrayValue,d=r||!((p=i)===(g=u)||p instanceof Array&&g instanceof Array&&p.length==g.length&&p.every(((e,t)=>e==g[t])));var p,g;if(d){const e=l[n];return oe(e.tagSupport,o.counts),e.deleted=!0,++c,++o.counts.removed,!1}return!0})),t.forEach(((e,n)=>{const s=l[n],c=s?.tagSupport,d=e;a(d)&&!d.templater&&$e(d);const p=new We(d.templater,r,new u(void 0));if(c){ke(p,r,c.subject);const e=c.global;p.global=e,e.newest=p}if(!("arrayValue"in d.memory)){const e={template:p.getTemplate().string,array:t,ownerTagContent:r.lastTemplateString},n="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(n,e),new f(n,e)}if(l.length>n)return s.tagSupport.global.oldest.updateBy(p),[];!function(e,t,n,r,o){const a={tagSupport:t,index:n};o.push(a);const s={added:r.counts.added+n,removed:r.counts.removed},l=document.createDocumentFragment(),i=document.createElement("template");l.appendChild(i),t.buildBeforeElement(i,{counts:s,forceElement:r.forceElement}),e.parentNode.insertBefore(l,e)}(i,p,n,o,l),r.childTags.push(p)})),s}function Ae(e,t,n){t.insertBefore=n;const r=t.clone||n;if(t.lastValue===e&&"lastValue"in t)return;t.lastValue=e;const o=function(e,t){const n=t.parentNode;let r=e;[void 0,!1,null].includes(e)&&(r="");const o=document.createTextNode(r);return n.insertBefore(o,t),n.removeChild(t),o}(e,r);t.clone=o}var je;!function(e){e.tag="tag",e.templater="templater",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(je||(je={}));const Ve=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function Ne(e,t,n){if(!(e instanceof Function))return!!N(e,t)&&4;if(!(t instanceof Function))return!1;const r=t?.original;return r&&(t=r),e.original&&(e=e.original),e.toString()===t.toString()?(n(),3):(n(),5)}function Be(e,t,n){const r=d(),o=e(...t),a=()=>{const e=n.global.newest;if(r){const t=e.memory.state.every((e=>{const t=e.lastValue,n=e.get();return N(j(t),n)}));if(t)return o}const t=Y(e,!0);return e.global.newest=t,o};return r?(p.memory.tagClosed$.toCallback(a),o):a()}function Re(e,t,n,r){let o=n.tagSupport?.global.newest,a=o.global.oldest;const s=o.templater.wrapper,l=t.templater.wrapper;let i=!1;s&&l&&(i=s.parentWrap.original===l.parentWrap.original);const c=t.templater;if(!i)return M(o.global.oldest),Ce(c,n,r,e,{forceElement:!1,counts:{added:0,removed:0}});if(!function(e,t,n){const r=function(e,t){let n=e,r=t;if("object"==typeof e){if(!t)return 3;if(n=[...e],r=[...t||[]],!n.every(((e,t)=>{let o=r[t];if(e&&"object"==typeof e){const t={...e},n={...o||{}},r=Object.entries(t).every((([e,r])=>Ne(r,n[e],(()=>{delete t[e],delete n[e]}))));return r}return Ne(e,o,(()=>{n.splice(t,1),r.splice(t,1)}))})))return 6}return!1}(n.props,e.propsConfig.latestCloned);if(r)return r;return function(e,t){const n=e.propsConfig.lastClonedKidValues,r=t.propsConfig.lastClonedKidValues;return!n.every(((e,t)=>{const n=r[t];return e.every(((e,t)=>e===n[t]))}))&&9}(e,t)}(o,t,c))return function(e,t,n){const r=(e=e.global.newest||e).propsConfig.latestCloned,o=t.global.newest;n.forEach(((e,t)=>{if("object"!=typeof e)return;const n=r[t];"object"==typeof n&&Object.entries(e).forEach((([t,r])=>{if(!(r instanceof Function))return;const a=e[t];a instanceof Function&&a.toCall||(n[t].toCall=(...e)=>Be(a,e,o))}))}))}(o,e,c.props),o;const u=o.global.newest,d=Y(t,!1);o=n.tagSupport;const p=d.global.oldest;return p?(p&&c.children.value.length&&p.templater.children.set(c.children.value),i&&z(u,d)?(n.tagSupport=d,a.updateBy(d),d):(i&&o&&(M(o),d.global.context={}),a=void 0,a||(o=d,Fe(d,o.global.insertBefore,o,n)),o.global.newest=d,d)):Fe(d,r,o,n)}function Fe(e,t,n,r){return e.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0}}),e.global.oldest=e,e.global.newest=e,n.global.oldest=e,n.global.newest=e,r.tagSupport=e,e}function Xe(e,t,r,o,a){const s=[];if(!e.hasAttribute("end"))return{clones:s};const i=e.getAttribute("id");if(i?.substring(0,J.length)!==J)return{clones:s};const c=t[i];return n(c.value)||l(c.value)?{clones:s,tagComponent:{variableName:i,ownerSupport:r,subject:c,insertBefore:e}}:(ze(e,c,r,o,{isForceElement:a.forceElement}),{clones:s})}function ze(e,t,i,c,{isForceElement:u}){let d=!1;const p=p=>{d?function(e,t,i,c){const u=e,d=n(t);if(function(e,t,o){const a=e,s=a.lastArray;if(s&&!l(t)){const e=a.placeholder;return delete a.lastArray,delete a.placeholder,re(o,e),s.forEach((({tagSupport:e})=>oe(e,{added:0,removed:0}))),"array"}const i=e.tagSupport;if(i){const o=r(t);return r(e.value)&&o?!z(t,i)&&(ae(i),M(i),2):!n(t)&&(ae(i),M(i),"different-tag")}const c=e,u="lastValue"in c,d=c.lastValue;u&&d!==t&&function(e,t){const n=t.clone,r=n.parentNode;r.insertBefore(e,n),r.removeChild(n),delete t.clone,delete t.lastValue}(o,c)}(e,t,c),d)return function(e,t,n,r){if(!t.tagSupport)return Ce(e,t,n,r,{forceElement:!0,counts:{added:0,removed:0}}),t;const o=new We(e,r,t),a=t.tagSupport,s=a.global.newest;if(!s)return ae(a),Ce(e,t,n,r,{forceElement:!0,counts:{added:0,removed:0}}),t;{const e=s.memory.state;o.memory.state.length=0,o.memory.state.push(...e)}return o.global=a.global,t.tagSupport=o,Re(r,o,t,n),t}(t,u,c,i);if(u.tagSupport)return function(e,t,n){const r=e.tagSupport;let s=t;const l=a(t);if(l){const e=t;s=e.templater,s||(s=new Z([]),s.tag=e,e.templater=s)}const i=new We(s,n,e);l&&(i.global=r.global);const c=t&&z(r,i);if(o(t)&&ke(i,n,e),!c)return c?Se(s,r.global.insertBefore,n,e):void Ae(t,e,e.insertBefore);r.updateBy(i)}(e,t,i),u;if(l(t))return Te(e,t,c,i,{counts:{added:0,removed:0}}),e;if(o(t))return Se(t,c,i,u),u;if(a(t)){const e=t;let n=e.templater;return n||(n=Ee(),e.templater=n,n.tag=e),Se(n,c,i,u),u}if(s(t))return t;if(t instanceof Function){const n=ee(t,i);return e.set(n),e}Ae(t,e,c)}(t,p,i,e):(function(e,t,r,s,i){const c=function(e){return n(e)?je.tagComponent:o(e)?je.templater:a(e)?je.tag:l(e)?je.tagArray:je.value}(e);switch(c){case je.templater:return void Se(e,r,s,t);case je.tag:const n=e;let o=n.templater;return o||(o=$e(n)),void Se(o,r,s,t);case je.tagArray:return Te(t,e,r,s,i);case je.tagComponent:return void Ce(e,t,r,s,i)}Ae(e,t,r)}(p,t,e,i,{counts:{...c},forceElement:u}),u&&(u=!1),d=!0)};let g=p;const f=t.subscribe((e=>g(e)));if(e.parentNode){const n=t.clone=ie(e);g=r=>{const o=n.parentNode;o.insertBefore(e,n),o.removeChild(n),delete t.clone,g=p,p(r)}}i.global.subscriptions.push(f)}function Me(e,t,n,r){if(!e.getAttribute)return;"TEXTAREA"===e.nodeName&&function(e,t,n){const r=e.value;if(r.search(Ve)>=0){const o=r.match(/__tagvar(\d{1,4})/),a="{"+(o?o[0]:"")+"}";e.value="",e.setAttribute("text-var-value",a);const s=(t,n,r)=>e.value=r;ge("text-var-value",a,e,t,n,s)}}(e,n,r);let o=t.counts.added;o=function(e,t){const n=e.oninit;if(!n)return t.added;const r=n.tagFunction;if(!r)return t.added;const o=r.tagFunction;return o?(o({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-o,e.children&&new Array(...e.children).forEach(((e,o)=>Me(e,{...t,counts:t.counts},n,r)))}function Oe(e,t,n,r,o){if(!o||"TEMPLATE"===e.tagName)return{clones:[],tagComponents:[]};const a=r.counts,s=[],l=[];return new Array(...o).forEach((e=>{const{clones:o,tagComponent:i}=Xe(e,t,n,a,r);s.push(...o),i?l.push(i):e.children&&new Array(...e.children).forEach(((e,o)=>{if(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")}(e)){const{tagComponent:o}=Xe(e,t,n,a,r);o&&l.push(o)}const{clones:i,tagComponents:c}=Oe(e,t,n,r,e.children);s.push(...i),l.push(...c)}))})),{clones:s,tagComponents:l}}function Pe(e,t,n,r,o){const a=[],s=[],l=n.interpolation,i=e.children[0].content.children;if(l.keys.length){const{clones:n,tagComponents:l}=Oe(e,t,r,o,i);a.push(...n),s.push(...l)}return ve(e,t,r),De(i,t,r),{clones:a,tagComponents:s}}function De(e,t,n){new Array(...e).forEach((e=>{ve(e,t,n),e.children&&De(e.children,t,n)}))}function Le(e,t,n,r,o){const a=function(e,t){const n=[];let r=e.children[0].content.firstChild;const o=document.createDocumentFragment();for(;r;){const e=r.nextSibling;n.push(r),o.appendChild(r),r=e}return t.parentNode&&t.parentNode.insertBefore(o,t),n}(e,t);return a.length?(a.forEach((e=>Me(e,o,r,n))),n.clones.push(...a),a):a}const Ye=new RegExp(J,"g");class Ke{templater;subject;isApp=!0;appElement;strings;values;lastTemplateString=void 0;propsConfig;memory={state:[]};clones=[];global={context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};hasLiveElements=!1;constructor(e,t){this.templater=e,this.subject=t;const n=e.children.value,r=e.props,o=r.map((e=>j(e)));this.propsConfig={latest:r,latestCloned:o,lastClonedKidValues:n.map((e=>ne(e.values)))}}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){const n=this.subject,r=this.global;r.insertBefore=e,r.placeholder||function(e){const t=e.insertBefore;e.placeholder=ie(t)}(r);const o=r.placeholder;r.oldest=this,r.newest=this,n.tagSupport=this,this.hasLiveElements=!0;const a=this.update(),s=this.getTemplate(),l=t.forceElement,i=document.createElement("div");i.id="tag-temp-holder",i.innerHTML=`<template id="temp-template-tag-wrap">${s.string}</template>`;const{tagComponents:c}=Pe(i,a,s,this,{forceElement:t.forceElement,counts:t.counts});Le(i,o,this,a,t),c.forEach((e=>{ze(e.insertBefore,e.subject,e.ownerSupport,t.counts,{isForceElement:l}),Le(i,e.insertBefore,e.ownerSupport,a,t)}))}getTemplate(){const e=this.templater.tag,t=this.strings||e.strings,n=this.values||e.values,r=function(e){const t=function(e){const t=[];return{string:e.replace(we,((e,n)=>{if(e.startsWith("<"))return e;const r=n.substring(1,n.length-1);return t.push(r),`<template interpolate end id="${r}"></template>`})),keys:t}}(e);return t.string=t.string.replace(G,J),t}(t.map(((e,t)=>(e.replace(Ye,q)+(n.length>t?`{${J}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=r.string,{interpolation:r,string:r.string,strings:t,values:n,context:this.global.context||{}}}update(){return this.updateContext(this.global.context)}updateContext(e){const t=this.templater.tag,r=this.strings||t.strings,l=this.values||t.values;return r.map(((t,r)=>{const i=J+r,c=l.length>r,d=l[r];if(i in e)return function(e,t,r){const o=e[t],a=o.tagSupport;if(a&&r&&n(r)){let e=new We(r,a.ownerTagSupport,o);n(a)&&function(e,t){const n=e.templater.wrapper.parentWrap.original,r=t.templater.wrapper,o=r?.parentWrap.original;if(n===o){t.global=e.global;const n=e.global.newest;if(n){const e=n.memory.state;t.memory.state.length=0,t.memory.state.push(...e)}}}(a,e)}s(r)||o.set(r)}(e,i,d);c&&(e[i]=function(e,t,r){return n(t)||t instanceof Function?new u(t):e?o(t)?le(t.tag,r):a(t)?le(t,r):s(t)?t:new u(t):new u(void 0)}(c,d,this))})),e}}class We extends Ke{templater;ownerTagSupport;subject;version;isApp=!1;childTags=[];constructor(e,t,n,r=0){super(e,n),this.templater=e,this.ownerTagSupport=t,this.subject=n,this.version=r}destroy(e={stagger:0,byParent:!1}){const t=!e.byParent,r=this.global,o=this.subject,a=e.byParent?[]:se(this.childTags);let s;if(t&&n(this.templater)&&P(this,this),a.forEach((e=>{const t=e.global;delete t.newest,t.deleted=!0,n(e.templater)&&P(e,e)})),"TEMPLATE"===r.insertBefore.nodeName&&r.placeholder&&!("arrayValue"in this.memory)&&(e.byParent||ae(this)),this.destroySubscriptions(),this.ownerTagSupport&&(this.ownerTagSupport.childTags=this.ownerTagSupport.childTags.filter((e=>e!==this))),t){const{stagger:t,promise:n}=this.destroyClones(e);e.stagger=t,n&&(s=n)}else this.destroyClones();return delete r.placeholder,r.context={},delete r.oldest,delete r.newest,r.deleted=!0,this.childTags.length=0,this.hasLiveElements=!1,delete o.tagSupport,s=s?s.then((async()=>{const e=a.map((e=>e.destroy({stagger:0,byParent:!0})));return Promise.all(e)})):Promise.all(a.map((e=>e.destroy({stagger:0,byParent:!0})))),s.then((()=>e.stagger))}destroySubscriptions(){const e=this.global;e.subscriptions.forEach((e=>e.unsubscribe())),e.subscriptions.length=0}destroyClones({stagger:e}={stagger:0}){const t=[...this.clones];this.clones.length=0;const n=t.map((t=>this.checkCloneRemoval(t,e))).filter((e=>e)),r=this.global.context;return Object.values(r).forEach((e=>{const t=e.clone;t&&t.parentNode&&t.parentNode.removeChild(t)})),n.length?{promise:Promise.all(n),stagger:e}:{stagger:e}}checkCloneRemoval(e,t){let n;const r=e;r.ondestroy&&(n=function(e,t){const n=e.ondestroy;if(!n)return;const r=n.tagFunction;if(!r)return;const o=r.tagFunction;return o?o({target:e,stagger:t}):void 0}(r,t));const o=()=>{const t=e.parentNode;t&&t.removeChild(e);const n=this.ownerTagSupport;n&&(n.clones=n.clones.filter((t=>t!==e)))};return n instanceof Promise?n.then(o):(o(),n)}updateBy(e){const t=e.templater.tag;this.updateConfig(t.strings,t.values)}updateConfig(e,t){this.strings=e,this.updateValues(t)}updateValues(e){return this.values=e,this.updateContext(this.global.context)}async rebuild(){delete this.strings,delete this.values,Ie(this);const e=xe(this.subject,this,this.ownerTagSupport);return await this.destroy(),e.buildBeforeElement(this.global.insertBefore,{forceElement:!0,counts:{added:0,removed:0}}),e}getAppTagSupport(){let e=this;for(;e.ownerTagSupport;)e=e.ownerTagSupport;return e}}function Ie(e){ae(e),e.childTags.forEach((e=>Ie(e.global.oldest)))}const He=[];let Ue=0;function _e(e){const t=function(...e){const n=new Z(e),o=function(e,t){return function(n,o){const a=n.global;++a.renderCount;const s=e.children,l=a.oldest?.templater.children.lastArray;l&&(s.lastArray=l);const i=t.original;let c=e.props,u=c.map((e=>function(e,t){const n=function(e,t){return"object"==typeof e&&t?(Object.entries(e).forEach((([n,r])=>{if(r instanceof Function){if(e[n].toCall)return;return e[n]=(...t)=>e[n].toCall(...t),e[n].toCall=(...e)=>Be(r,e,t),void(e[n].original=r)}})),e):e}(r(e)?0:e,t);return n}(e,n.ownerTagSupport)));const d=c.map((e=>j(e)));let p=i(...u);p instanceof Function&&(p=p()),p.templater=e,e.tag=p;const g=new We(e,n.ownerTagSupport,o,a.renderCount);return g.global=a,g.propsConfig={latest:c,latestCloned:d,lastClonedKidValues:g.propsConfig.lastClonedKidValues},g.memory=n.memory,e.madeChildIntoSubject&&s.value.forEach((e=>{e.values.forEach(((t,n)=>{if(!(t instanceof Function))return;const r=e.values[n];r.isChildOverride||(e.values[n]=function(...e){const n=g.ownerTagSupport;return te(t,n,this,e)},r.isChildOverride=!0)}))})),g}}(n,t);return o.parentWrap||(o.parentWrap=t),n.tagged=!0,n.wrapper=o,n};return t.original=e,t.compareTo=e.toString(),function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=He,e.setUse=p,e.tagIndex=Ue++}(e),He.push(t),t}function Je(e,...t){return new Q(e,t)}const qe=_e((({name:e,array:t,included:n,columnNames:r,allColumnNames:o})=>{let a=E(!1)((e=>[a,a=e])),s=E(!1)((e=>[s,s=e])),l=E(void 0)((e=>[l,l=e]));const i=x([]);return Je`
    <a onclick=${function(){const t=r.indexOf(e);t>=0?r.splice(t,1):r.push(e)}} style="cursor:pointer;">
      <input type="checkbox" ${n&&"checked"} />&nbsp;${e}
    </a>

    <div
      onmouseover=${()=>a=!0}
      onmouseout=${()=>a=!1}
    >
      <a style.visibility=${s||a?"visible":"hidden"}
        onclick=${()=>s=!s}
      >⚙️&nbsp;</a>
      
      ${n&&r.length!==o.length?Je`
        <a style="color:blue;" onclick=${()=>{r.length=0,r.push(...o)}}><small>all</small></a>
      `:Je`
        <a style="color:blue;" onclick=${()=>{r.length=0,r.push(e)}}><small>only</small></a>
      `}
    </div>

    ${s&&Je`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${l&&Je`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${e=>{return n=l,r=e.target.value,n.stringFormula=r,void(n.value=Ge(r,{array:t}));var n,r}}
            >${l.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${i.map((e=>Je`
                <div>
                  <div>
                    <strong>${e.title}</strong>
                    <a onclick=${()=>l=e}>✏️</a>
                  </div>
                  <div>${e.value}</div>
                </div>
              `.key(e)))}
          </div>
          <button type="button" onclick=${()=>{const n=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;i.push({title:"sum",stringFormula:n,value:Ge(n,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function Ge(e,t={}){return n=e,r={isNaN,Math,Number,Date,...t},n?(r=new Proxy(r,{has:()=>!0}),new Function("with(this) { return ("+n+")}").call(r)):n;var n,r}const Qe=_e((({array:e,showAll:t,showKids:n,toggleColumnDialog:r,columnNames:o,formatChange:a,allowMaximize:s,everySimpleValue:l})=>Je`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&Je`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${o.map((e=>Je`
                <th
                  style.cursor=${r&&"pointer"}
                  onclick=${r}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>Je`
            <tr>
              ${o.map((r=>Je`
                <td>
                  ${it({value:e[r],showLevels:0,showAll:t,showKids:t||n,isRootDump:!1,formatChange:a,allowMaximize:s})}
                </td>
              `.key(e[r])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),Ze=_e((({array:e,showLevels:t,showAll:n,showKids:r,columnNames:o,formatChange:a,toggleColumnDialog:s,allowMaximize:l,everySimpleValue:i})=>Je`
    ${e.map(((e,c)=>{return Je`${it({value:(u=e,d=o,["string","number","boolean"].includes(typeof u)?u:function(e,t){const n={};return t.forEach((t=>{e.hasOwnProperty(t)&&(n[t]=e[t])})),n}(u,d)),showLevels:t,showAll:n,showKids:n||r,isRootDump:!1,formatChange:a,onHeaderClick:s,allowMaximize:l,everySimpleValue:i})}`.key({item:e,index:c});var u,d}))}
  `));const et=_e((({showLevels:e,showAll:t,showKids:n,array:r,arrayView:o,formatChange:a,allowMaximize:s,everySimpleValue:l})=>{const i=r.length?Object.keys(r[0]):[];let c=E(i)((e=>[c,c=e])),u=E(!1)((e=>[u,u=e])),d=x("columnDialog"+performance.now());const p=()=>{u=!u;const e=document.getElementById(d);u?e.showModal():e.close()};return Je`
    ${"table"===o?Qe({showAll:t,showKids:n,array:r,toggleColumnDialog:p,columnNames:c,formatChange:a,everySimpleValue:l}):Ze({array:r,showLevels:e,showAll:t,showKids:n,formatChange:a,columnNames:c,toggleColumnDialog:p,allowMaximize:s,everySimpleValue:l})}

    <dialog id=${d} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
      onclose=${()=>{u=!1}}
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${i.map((e=>{const t=c.includes(e);return Je`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${qe({name:e,array:r,included:t,columnNames:c,allColumnNames:i})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${p}>🅧 close</button>
      </div>
    </dialog>
  `})),tt=_e((({key:e,value:t,show:n,showAll:r,showKids:o,showLevels:a,formatChange:s,allowMaximize:l,everySimpleValue:i})=>{let c=E(void 0)((e=>[c,c=e])),u=E(void 0)((e=>[u,u=e]));C.noInit([n],(([e])=>c=e));let d=E(!1)((e=>[d,d=e]));const p=x((()=>"maximize-dump-"+performance.now())),g=()=>{d=!d,d&&document.getElementById(p).showModal()},f=n=>Je`
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;"+(c?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a style="flex-grow:1" onclick=${()=>{c=!c}}>
        <strong>${e}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===u?"bold":""}
          onclick=${()=>u="table"===u?void 0:"table"}>${"table"===u?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${t.length}]</sup>
      ${n&&Je`
        &nbsp;<a onclick=${g}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `,h={showLevels:a,showAll:r,showKids:o,formatChange:s,array:t,arrayView:u,allowMaximize:l,everySimpleValue:i},m=Je`
    <!-- array displays wrap -->
    <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
      ${et(h)}
    </div>
  `;return Je`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    ${f(l)}
    ${(r||c||o||null==c&&a>0)&&m}
  </div>

  <!-- maximize -->
  <dialog id=${p} class="dump-dialog" style="padding:0"
    onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
    ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
    ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
    ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
  >
    <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
      ${d&&f(!1)}
    </div>
    
    ${d&&Je`
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${et({...h,allowMaximize:!1})}
      </div>
    `}

    <div style="padding:.25em">
      <button type="button" onclick=${()=>document.getElementById(p).close()} style="width:100%">🅧 close</button>
    </div>
  </dialog>

  `}));function nt(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function rt({key:e,value:t,onHeaderClick:n,everySimpleValue:r}){const o=t.search&&("https://"===t.slice(0,8)||"http://"===t.slice(0,7));let a;return a=r?ot({value:t,everySimpleValue:r}):o?at(t):ot({value:t}),Je`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&Je`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${n&&"pointer"}
          onclick=${n}
        >${e}</div>
      `}
      ${a}
    </div>
  `}const ot=_e((({value:e,everySimpleValue:t})=>{const n=[void 0,null,"null"].includes(e),r=e,o=!isNaN(r)&&r>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(r):"";let a=E(0)((e=>[a,a=e])),s=e;return t&&(s=t(e)),s=(null===s?"null":!1===s&&"false")||void 0===s&&"undefined"||s,Je`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{a=Date.now()}}
      onmouseup=${t=>{if(Date.now()-a>300)return t.preventDefault(),t.stopPropagation(),!0;nt(e)}}
      style="cursor:pointer;"
      style.background-color=${n?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||n&&"white"||""}
      title=${o}
    >${s}</div>
  `})),at=e=>Je`
    <a onclick=${()=>nt(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,st=_e((({key:e,showKids:t,show:n,showLevels:r,value:o,showAll:a,onHeaderClick:s,formatChange:l,allowMaximize:i,everySimpleValue:c})=>{let u=E(!1)((e=>[u,u=e])),d=E(!1)((e=>[d,d=e]));const p=x((()=>"maximize-dump-"+performance.now()));C.noInit([n],(([e])=>u=e));const g=!e||t||u||null==u&&r>0,f=()=>{d=!d,d&&document.getElementById(p).showModal()},h=t=>Je`
    <div style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;"+(u?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a onclick=${()=>u=!u}>
        <strong>${e}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(o).length}}
        </sup>
      </a>
      ${t&&Je`
        &nbsp;<a onclick=${f}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `,m=e=>Je`
    <div style="display:flex;flex-wrap:wrap">
      ${Object.entries(o).map((([n,o])=>Je`
        <!-- recurse -->
        <div class="child-margin-xxs"
          style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(o&&"object"==typeof o?"flex-grow:1;":"flex: 1 1 10em;")}
        >
          ${it({value:o,key:n,show:u,showAll:a,showLevels:r-1,showKids:a||t,isRootDump:!1,formatChange:l,onHeaderClick:s,allowMaximize:e,everySimpleValue:c})}
      `.key([n,o])))}
    </div>
  `;return Je`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&h(i)}
        ${g&&m(i)}

        <!-- maximize -->
        <dialog id=${p} class="dump-dialog" style="padding:0"
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
            <button type="button" onclick=${()=>document.getElementById(p).close()} style="width:100%">🅧 close</button>
          </div>
        </dialog>
      </div>
    </div>
  `})),lt=_e((({value:e,format:t,showAll:n,formatChange:r,showAllChange:o})=>Je`
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
    </style>
    <div style="width: 100%;line-height: 90%;">
      <div style="position:relative;">
        <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
          ${!t||"flex"===t&&Je`
            <a
              style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(n?"background-color:#33cd5f;":"background-color:#444444")}
              class="hover-bg-balanced"
              onclick=${()=>o(n=!n)}
              title="hide/show all sub objects"
            >👁</a>
          `}
          <a
            style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(t&&"flex"!==t?"background-color:#444444":"background-color:#33cd5f;")}
            class="hover-bg-balanced"
            onclick=${()=>r(t="flex")}
          >flex</a>
          <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===t?"background-color:#33cd5f;":"background-color:#444444")}
            class="hover-bg-balanced"
            onclick=${()=>r(t="json")}
          >json</a>
          <a style="margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"
            class="bg-dark hover-bg-balanced active-bg-energized"
            onclick=${()=>function(e){nt(JSON.stringify(e,null,2))}(e)}
          >copy</a>
        </div>
      </div>
    </div>
  `)),it=_e((({key:e,value:t,showKids:n=!1,showLevels:r=-1,showAll:o=!1,format:a="flex",formatChange:s=(e=>a=e),isRootDump:l=!0,onHeaderClick:i,allowMaximize:c,everySimpleValue:u})=>{l&&void 0===c&&(c=!0);const d=null===t?"null":typeof t;let g=E(!1)((e=>[g,g=e]));A(a)((e=>[a,a=e])),A(o)((e=>[o,o=e]));let f=E(void 0)((e=>[f,f=e]));return function(e){const t=p.memory.currentSupport;t.global.init||(t.global.init=e,e())}((()=>{(r=r>=0&&r||(-1===r&&!e&&t&&t instanceof Object?2:0))>0&&(g=!0)})),[null,void 0].includes(t)?rt({key:e,value:d,onHeaderClick:i,everySimpleValue:u}):["boolean","number","string"].includes(d)?rt({key:e,value:t,onHeaderClick:i,everySimpleValue:u}):function(){if(null===t)return n?rt({key:e,value:"null",onHeaderClick:i,everySimpleValue:u}):Je``;const d=(!a||"flex"===a)&&t.push&&t.pop;return Je`
      <div class="taggedjs-dump">
        ${l&&lt({value:t,format:a,showAll:o,showAllChange:e=>o=e,formatChange:s})}
        ${"json"===a&&Je`
          <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
          >${JSON.stringify(t,null,2)}</textarea>
        `||d&&tt({key:e,value:t,show:g,showAll:o,showKids:n,showLevels:r,formatChange:s,allowMaximize:c,everySimpleValue:u})||st({key:e,show:g,showKids:n,showLevels:r,value:t,showAll:o,formatChange:s,onHeaderClick:i,allowMaximize:c,everySimpleValue:u})}
      </div>
    `}()}));var ct=t.B;export{ct as dump};