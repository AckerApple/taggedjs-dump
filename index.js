var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return e?.wrapper?.original instanceof Function}function o(e){return r(e)||a(e)}function r(e){const t=e;return!0===t?.isTemplater&&void 0===t.wrapper}function a(e){const t=e;return!0===t?.isTagClass}function s(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function l(e){return e instanceof Array&&e.every((e=>a(e)||r(e)))}e.d(t,{B:()=>rt});class i extends Error{details;constructor(e,t,n={}){super(e),this.name=i.name,this.details={...n,errorCode:t}}}class c extends i{constructor(e,t){super(e,"array-no-key-error",t),this.name=c.name}}class u extends i{constructor(e,t){super(e,"state-mismatch-error",t),this.name=u.name}}class d extends i{constructor(e,t){super(e,"sync-callback-error",t),this.name=d.name}}function g(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};g.tagUse.push(t)}g.tagUse=[],g.memory={},g.memory.stateConfig={array:[]};const p=e=>function(e){const t=e.memory.state,n=g.memory.stateConfig;n.rearray&&function(e,t,n){const o=e.templater?.wrapper,r=t.tagSupport?.templater.wrapper,a="last state not cleared. Possibly in the middle of rendering one component and another is trying to render";if(r)throw console.error(a,{config:t,tagFunction:o.original,wasInMiddleOf:r.original,state:n,expectedClearArray:t.rearray}),new u(a,{config:t,tagFunction:o.original,state:n,expectedClearArray:t.rearray})}(e,n,t),n.rearray=[],t?.length&&(t.forEach((e=>f(e))),n.rearray.push(...t)),n.tagSupport=e}(e);function f(e){const t=e.callback;if(!t)return e.defaultValue;const n=t(h),[o]=n,[r]=t(o);if(r!==h){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:n,oldValue:o,checkValue:r}),new Error(a)}return o}g({beforeRender:p,beforeRedraw:p,afterRender:e=>{const t=e.memory,n=g.memory.stateConfig,o=n.rearray;if(o.length&&o.length!==n.array.length){const t=`States lengths has changed ${o.length} !== ${n.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`,r=e.templater?.wrapper,a={oldStates:n.array,newStates:n.rearray,tagFunction:r.original},s=new u(t,a);throw console.warn(t,a),s}delete n.rearray,t.state=n.array,t.state.forEach((e=>e.lastValue=f(e))),n.array=[]}});class h{}function m(e){const t=g.memory.stateConfig;let n;const o=t.rearray[t.array.length];if(o){let e=f(o);n=t=>[e,e=t];const r={get:()=>f(r),callback:n,lastValue:e,defaultValue:o.defaultValue};return t.array.push(r),b(e,r)}let r=(e instanceof Function?e:()=>e)();n=e=>[r,r=e];const a={get:()=>f(a),callback:n,lastValue:r,defaultValue:r};return t.array.push(a),b(r,a)}function b(e,t){return n=>(t.callback=n||(t=>[e,e=t]),e)}function y(e,t){let n=m(void 0)((e=>[n,n=e]));return void 0===n?(n=e,e):(e.every(((e,t)=>e===n[t]))||(t(e,n),n.length=0,n.push(...e)),e)}function v(e){const t=g.memory.stateConfig;let n;const o=t.rearray[t.array.length];if(o){let e=f(o);n=t=>[e,e=t];const r={get:()=>f(r),callback:n,lastValue:e,defaultValue:o.defaultValue};return t.array.push(r),e}let r=(e instanceof Function?e:()=>e)();n=e=>[r,r=e];const a={get:()=>f(a),callback:n,lastValue:r,defaultValue:r};return t.array.push(a),r}function w(e){const t=g.memory.stateConfig,n=t.rearray,[o]=e(void 0);e(o);const r=n[t.array.length];if(r){let n=r.watch,a=f(r);const s={get:()=>f(s),callback:e,lastValue:a,watch:r.watch};return o!=n&&(s.watch=o,a=s.lastValue=o),t.array.push(s),e(a),a}const a={get:()=>f(a),callback:e,lastValue:o,watch:o};return t.array.push(a),o}function x(e){return C(e,new WeakMap)}function C(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const n=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,n),Array.isArray(e))for(let o=0;o<e.length;o++)n[o]=C(e[o],t);else for(const o in e)e.hasOwnProperty(o)&&(n[o]=C(e[o],t));return n}function S(e,t){return k(e,t,new WeakMap)}function k(e,t,n){return!!(e===t||(o=e,r=t,o instanceof Function&&r instanceof Function&&o.toString()===r.toString()))||!!n.has(e)||"object"==typeof e&&"object"==typeof t&&!(e instanceof Date&&t instanceof Date)&&(n.set(e,0),Array.isArray(e)&&Array.isArray(t)?function(e,t,n){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!k(e[o],t[o],n))return!1;return!0}(e,t,n):!Array.isArray(e)&&!Array.isArray(t)&&function(e,t,n){const o=Object.keys(e),r=Object.keys(t);if(0===o.length&&0===r.length)return!0;if(o.length!==r.length)return!1;for(const a of o)if(!r.includes(a)||!k(e[a],t[a],n))return!1;return!0}(e,t,n));var o,r}function $(e,t){const n=g.memory.providerConfig;n.ownerSupport=t,e.global.providers.length&&(n.providers.length=0,n.providers.push(...e.global.providers))}function E(e){e.global.providers.filter((e=>!S(e.instance,e.clone))).forEach((t=>{!function(e,t){A(e,t).forEach((({tagSupport:e,renderCount:t,provider:n})=>{e.global.deleted||t===e.global.renderCount&&(n.clone=x(n.instance),O(e,!1))}))}(e.getAppElement(),t),t.clone=x(t.instance)}))}function A(e,t,n=[]){const o=e.global,r=o.providers.find((e=>e.constructMethod===t.constructMethod));return r&&n.push({tagSupport:e,renderCount:o.renderCount,provider:r}),e.childTags.forEach((e=>A(e,t,n))),n}function T(e,t){const n=e.templater,o=t.templater,r=n?.tag||e,a=o.tag,s=r.strings,l=t.strings||a.strings;if(s.length!==l.length)return!1;if(!s.every(((e,t)=>l[t]===e)))return!1;const i=e.values||r.values,c=t.values||a.values;return i.length===c.length&&!!c.every(((e,t)=>{const n=i[t];return!(e instanceof Function&&n instanceof Function)||!(e.toString()!==n.toString())}))}g.memory.providerConfig={providers:[],ownerSupport:void 0},g({beforeRender:(e,t)=>{$(e,t)},beforeRedraw:(e,t)=>{$(e,t.ownerTagSupport)},afterRender:e=>{const t=g.memory.providerConfig;e.global.providers=[...t.providers],t.providers.length=0}});class j{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(e,t){this.value=e,this.onSubscription=t}subscribe(e){const t=function(e,t){const n=B.globalSubCount$;B.globalSubCount$.set(n.value+1);const o=()=>{o.unsubscribe()};return o.callback=t,o.subscriptions=[],o.unsubscribe=()=>(V(e.subscribers,t),V(B.globalSubs,t),B.globalSubCount$.set(n.value-1),o.unsubscribe=()=>o,o.subscriptions.forEach((e=>e.unsubscribe())),o),o.add=e=>(o.subscriptions.push(e),o),o.next=e=>{t(e,o)},o}(this,e),n=this.subscribeWith;if(n){if(this.methods.length){const n=e;e=e=>{N(e,this.methods,(e=>n(e,t)))}}return n(e)}return this.subscribers.push(t),B.globalSubs.push(t),this.onSubscription&&this.onSubscription(t),t}set(e){this.value=e,this.subscribers.forEach((t=>{t.callback(e,t)}))}next=this.set;toPromise(){return new Promise(((e,t)=>{this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}))}toCallback(e){this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}pipe(...e){const t=new j;return t.methods=e,t.subscribeWith=e=>this.subscribe(e),t}}function V(e,t){const n=e.findIndex((e=>e.callback===t));-1!==n&&e.splice(n,1)}const B=j;function N(e,t,n){const o=[...t],r=o.shift(),a=e=>{if(o.length)return N(e,o,n);n(e)};let s=a;const l=r(e,{setHandler:e=>s=e,next:a});s(l)}B.globalSubs=[],B.globalSubCount$=new j,B.globalSubCount$.set(0);class R extends j{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value,t),t}}const F=new j(void 0,(e=>{X()||e.next()}));function X(){return g.memory.stateConfig.rearray}function z(e,t){e.global.oldest.destroy(),M(e),e.global.context={}}function M(e){delete e.global.oldest,delete e.global.newest}function P(e,t,n,o){const r=e.global.renderCount;!function(e,t,n){const o=n?.ownerTagSupport,r=o||t;if(n){const t=n.memory.state;e.memory.state=[...t],e.global=n.global,function(e,t){g.tagUse.forEach((n=>n.beforeRedraw(e,t)))}(e,n)}else!function(e,t){g.tagUse.forEach((n=>n.beforeRender(e,t)))}(e,r),g.memory.providerConfig.ownerSupport=r}(e,o,t);const a=(0,e.templater.wrapper)(e,n);if(function(e,t){g.tagUse.forEach((n=>n.afterRender(e,t))),F.next(t)}(e,a),a.global.renderCount>r+1)return e.global.newest;e.global.newest=a,!t||T(t,a)||function(e,t,n){const o=e.global,r=o.insertBefore;z(e),t.global={...o};const a=t.global;a.insertBefore=r,a.deleted=!1,delete a.oldest,delete a.newest,delete n.tagSupport}(t,a,n);const s=t?.ownerTagSupport;return a.ownerTagSupport=o||s,a}function O(e,t){const n=e.global,o=e.templater;if(!o.wrapper){const t=e.ownerTagSupport;return++n.renderCount,O(t,!0)}const r=e.subject;let a,s=!1;t&&e&&(a=e.ownerTagSupport,a)&&(s=!S(o.props,e.propsConfig.latestCloned));const l=function(e,t,n,o){const r=o.tagSupport,a=r.global;t.global=a;const s=a.renderCount;E(e);const l=a.newest;if(s!==a.renderCount)return e.updateBy(l),l;const i=P(t,l||r||a.oldest,o,n),c=a.oldest||e;return i.global.oldest=c,T(l,i)&&(o.tagSupport=i,c.updateBy(i)),i}(e.global.oldest,e,a,r);return a&&s?(O(a,!0),l):l}let D=e=>(e,t,n,o,r,a)=>{throw new d("Callback function was called immediately in sync and must instead be call async")};const L=D;function Y(e,t){e.forEach(((e,n)=>{const o=f(e),r=t[n].callback;r&&r(o),t[n].lastValue=o}))}function K(e){const t=g.memory.stateConfig.array;D=n=>(...o)=>function(e,t,n,...o){const r=e.memory.state;Y(r,n);const a=t(...o);Y(n,r),O(e,!1),a instanceof Promise&&a.finally((()=>{Y(n,r),O(e,!1)}))}(e,n,t,...o)}function H(e){g.memory.initCurrentSupport=e}function U(e){g.memory.destroyCurrentSupport=e}g({beforeRender:e=>K(e),beforeRedraw:e=>K(e),afterRender:e=>{D=L}}),g({beforeRender:e=>H(e),beforeRedraw:e=>H(e)}),g({beforeRender:e=>U(e),beforeRedraw:e=>U(e),beforeDestroy:e=>{const t=e.global.destroyCallback;t&&t()}});class _{props;children;isTemplater=!0;tagged;wrapper;tag;constructor(e,t){this.props=e,this.children=t}}function I(e,t){if(e.isChildOverride)return e;const n=(n,o)=>W(e,t,n,o);return n.tagFunction=e,n}function W(e,t,n,o){const r=t.global.renderCount,a=e.bind(n)(...o);return r!==t.global.renderCount||t.global.deleted?a instanceof Promise?a.then((()=>"promise-no-data-ever")):"no-data-ever":(O(t,!0),a instanceof Promise?a.then((()=>{if(t.global.deleted)return"promise-no-data-ever";const e=O(t,!0);return t.global.newest=e,"promise-no-data-ever"})):"no-data-ever")}const J="__tagvar",q="--"+J+"--",G=new RegExp(q,"g");class Q{strings;values;isTagClass=!0;memory={};templater;constructor(e,t){this.strings=e,this.values=t}key(e){return this.memory.arrayValue=e,this}}function Z(e){return e.map((e=>{const t=e;return n(e)?x(e.props):a(t)||r(t)?Z(t.values):l(t)?Z(t):x(e)}))}function ee(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function te(e,t){M(e),e.destroy({stagger:t.removed++});const n=e.global.insertBefore;n.parentNode.removeChild(n)}function ne(e){const t=e.global.insertBefore,n=e.global,o=n.placeholder;o&&(ee(t,o),delete n.placeholder)}function oe(e,t=[]){for(let n=e.length-1;n>=0;--n){const o=e[n];t.push(o),e.splice(n,1),oe(o.childTags,t)}return t}function re(e,t){const n=e;let o=n.templater;if(!o){const e=new R([]);o=new _(void 0,e),o.tag=n,n.templater=o}const r=new R(o);return r.tagSupport=new De(o,t,r),r}function ae(e,t,n){const o=e.split(".");if("style"===o[0]&&(n.style[o[1]]=t),"class"===o[0])return o.shift(),void(t?o.forEach((e=>n.classList.add(e))):o.forEach((e=>n.classList.remove(e))))}const se=/^\s*{__tagvar/,le=/}\s*$/;function ie(e){return e&&e.search(se)>=0&&e.search(le)>=0}function ce(e,t,n,o,r,a){if(ie(t))return function(e,t,n,o,r,a){return de(e,ue(o,t),n,r,a)}(e,t,n,o,r,a);if(ie(e)){let t;const s=ue(o,e).subscribe((e=>{!function(e,t,n,o,r){if(t&&t!=e&&("string"==typeof t?n.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>n.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>de(e,t,n,o,r)));else{if(!e.length)return;de(e,"",n,o,r)}}(e,t,n,r,a),t=e}));return r.global.subscriptions.push(s),void n.removeAttribute(e)}return ge(e)?ae(e,t,n):void 0}function ue(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function de(e,t,n,o,r){const a=ge(e);if(t instanceof Function){const o=function(...e){return t(n,e)};n[e].action=o}if(s(t)){n.removeAttribute(e);const s=t=>(t instanceof Function&&(t=I(t,o)),function(e,t,n,o,r){if(e instanceof Function){const o=function(...n){return e(t,n)};return o.tagFunction=e,void(t[n]=o)}if(o)return void ae(n,e,t);if(e)return void r(t,n,e);[void 0,!1,null].includes(e)?t.removeAttribute(n):r(t,n,e)}(t,n,e,a,r)),l=t.subscribe(s);o.global.subscriptions.push(l)}else r(n,e,t)}function ge(e){return e.search(/^(class|style)(\.)/)>=0}function pe(e,t,n){e.setAttribute(t,n)}function fe(e,t,n){e[t]=n}function he(e,t,n){const o=e.getAttributeNames();let r=pe;o.forEach((o=>{"INPUT"===e.nodeName&&"value"===o&&(r=fe),ce(o,e.getAttribute(o),e,t,n,r),r=pe}))}const me=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function be(e,t,n){const o=n.clones.map((e=>e));if((t=P(t,e.tagSupport,e,n)).global.newest=t,n.clones.length>o.length){const e=n.clones.filter((e=>!o.find((t=>t===e))));t.clones.push(...e)}return n.childTags.push(t),t}function ye(e,t,n,o,r){if(!0!==e.tagged){const t=e.wrapper.original;let n=t.name||t.constructor?.name;"Function"===n&&(n=void 0);const o=n||t.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${o}\n\n`)}const a=new De(e,o,t);let s=t.tagSupport;return(a.global=s?.global||a.global).insertBefore=n,g.memory.providerConfig.ownerSupport=o,s&&!r.forceElement||(s=be(t,s||a,o)),function(e,t,n,{counts:o,forceElement:r}){const a=t,s=a.tagSupport,l=s?.global.oldest||void 0;if(l&&l)return function(e,t,n){if(t instanceof Function){const e=t(n);return n.updateBy(e),void(t.tagSupport=e)}return n.updateBy(e),void(t.tagSupport=e)}(e,a,l);e.buildBeforeElement(n,{counts:o,forceElement:r})}(s,t,n,r),s}function ve(e,t,n,o){let r=o.tagSupport;r||(r=new De(e,n,o),we(r,n,o),n.childTags.push(r)),o.tagSupport=r,r.ownerTagSupport=n,r.buildBeforeElement(t,{counts:{added:0,removed:0},forceElement:!0})}function we(e,t,n){e.global.oldest=e,e.global.newest=e,e.ownerTagSupport=t,n.tagSupport=e}function xe(e){const t=Ce();return t.tag=e,e.templater=t,t}function Ce(){return{children:new R([]),props:{},isTag:!0,isTemplater:!1,tagged:!1}}function Se(e,t,n,o,r){const s=o.clones;let l=e.lastArray=e.lastArray||[];e.placeholder||function(e,t){if("TEMPLATE"!==e.nodeName)return void(t.placeholder=e);const n=t.placeholder=document.createTextNode(""),o=e.parentNode;o.insertBefore(n,e),o.removeChild(e)}(n,e);const i=e.placeholder;let u=0;return l=e.lastArray=e.lastArray.filter(((e,n)=>{const o=t.length-1<n-u,a=t[n-u],s=e.tagSupport.templater.tag,i=a?.memory.arrayValue,c=s.memory.arrayValue,d=o||!((g=i)===(p=c)||g instanceof Array&&p instanceof Array&&g.length==p.length&&g.every(((e,t)=>e==p[t])));var g,p;if(d){const e=l[n];return te(e.tagSupport,r.counts),e.deleted=!0,++u,++r.counts.removed,!1}return!0})),t.forEach(((e,n)=>{const s=l[n],u=s?.tagSupport,d=e;a(d)&&!d.templater&&xe(d);const g=new De(d.templater,o,new R(void 0));if(u){we(g,o,u.subject);const e=u.global;g.global=e,e.newest=g}if(!("arrayValue"in d.memory)){const e={template:g.getTemplate().string,array:t,ownerTagContent:o.lastTemplateString},n="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(n,e),new c(n,e)}if(l.length>n)return s.tagSupport.global.oldest.updateBy(g),[];!function(e,t,n,o,r){const a={tagSupport:t,index:n};r.push(a);const s={added:o.counts.added+n,removed:o.counts.removed},l=document.createElement("template");e.parentNode.insertBefore(l,e),t.buildBeforeElement(l,{counts:s,forceElement:o.forceElement})}(i,g,n,r,l),o.childTags.push(g)})),s}function ke(e,t,n){t.insertBefore=n;const o=t.clone||n;if(t.lastValue===e&&"lastValue"in t)return;t.lastValue=e;const r=function(e,t){const n=t.parentNode;let o=e;[void 0,!1,null].includes(e)&&(o="");const r=document.createTextNode(o);return n.insertBefore(r,t),n.removeChild(t),r}(e,o);t.clone=r}var $e;!function(e){e.tag="tag",e.templater="templater",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}($e||($e={}));const Ee=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function Ae(e,t,n){const o=()=>{const o=e(...t);return O(n.global.newest,!0),o};return X()?F.toCallback(o):o()}function Te(e,t,n,o){let r=n.tagSupport?.global.newest,a=r.global.oldest;const s=r.templater.wrapper,l=t.templater.wrapper;let i=!1;s&&l&&(i=s.original===l.original);const c=t.templater;if(!i)return z(r.global.oldest),ye(c,n,o,e,{forceElement:!1,counts:{added:0,removed:0}});if(!function(e,t,n){const o=function(e,t){let n=e,o=t;if("object"==typeof e){if(!t)return 3;if(n={...e},o={...t||{}},!Object.entries(n).every((([e,t])=>{let r=o[e];return t instanceof Function?r instanceof Function&&(r.original&&(r=r.original),t.original&&(t=t.original),t.toString()===r.toString()&&(delete n[e],delete o[e],5)):4})))return 6}return!S(o,n)&&7}(n.props,e.propsConfig.latestCloned);if(o)return o;return function(e,t){const n=e.propsConfig.lastClonedKidValues,o=t.propsConfig.lastClonedKidValues;return!n.every(((e,t)=>{const n=o[t];return e.every(((e,t)=>e===n[t]))}))&&9}(e,t)}(r,t,c)){const t=c.props;return t&&"object"==typeof t&&function(e,t,n){const o=(e=e.global.newest||e).propsConfig.latestCloned,r=t.global.newest;Object.entries(o).forEach((([e,t])=>{if(!(t instanceof Function))return;const a=n[e];a.original||(o[e].toCall=(...e)=>Ae(a,e,r))}))}(r,e,t),r}const u=r.global.newest,d=O(t,!1);r=n.tagSupport;const g=d.global.oldest;if(!g)return je(d,o,r,n);if(g&&c.children.value.length&&g.templater.children.set(c.children.value),i&&T(u,d))return n.tagSupport=d,a.updateBy(d),d;if(i&&r&&(z(r),d.global.context={}),a=void 0,a||(r=d,je(d,r.global.insertBefore,r,n)),r.global.newest=d,!r.global.oldest)throw new Error("333333");return d}function je(e,t,n,o){return e.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0}}),e.global.oldest=e,e.global.newest=e,n.global.oldest=e,n.global.newest=e,o.tagSupport=e,e}function Ve(e,t,o,r,a){const s=[];if(!e.hasAttribute("end"))return{clones:s};const i=e.getAttribute("id");if(i?.substring(0,J.length)!==J)return{clones:s};const c=t[i];return n(c.value)||l(c.value)?{clones:s,tagComponent:{variableName:i,ownerSupport:o,subject:c,insertBefore:e}}:(Be(e,c,o,r,{isForceElement:a.forceElement}),{clones:s})}function Be(e,t,i,c,{isForceElement:u}){let d=!1;const g=t.subscribe((g=>{d?function(e,t,i,c){const u=e,d=n(t);if(function(e,t,r){const a=e,s=a.lastArray;if(s&&!l(t)){const e=a.placeholder;return delete a.lastArray,delete a.placeholder,ee(r,e),s.forEach((({tagSupport:e})=>te(e,{added:0,removed:0}))),"array"}const i=e.tagSupport;if(i){const r=o(t);return o(e.value)&&r?!T(t,i)&&(ne(i),z(i),2):!n(t)&&(ne(i),z(i),"different-tag")}const c=e,u="lastValue"in c,d=c.lastValue;u&&d!==t&&function(e,t){const n=t.clone,o=n.parentNode;o.insertBefore(e,n),o.removeChild(n),delete t.clone,delete t.lastValue}(r,c)}(e,t,c),d)return function(e,t,n,o){if(!t.tagSupport)return ye(e,t,n,o,{forceElement:!0,counts:{added:0,removed:0}}),t;const r=new De(e,o,t),a=t.tagSupport,s=a.global.newest;if(!s){const r=a.global.placeholder;return r&&!n.parentNode&&(ee(n,r),delete a.global.placeholder),ye(e,t,n,o,{forceElement:!0,counts:{added:0,removed:0}}),t}{const e=s.memory.state;r.memory.state=[...e]}return r.global=a.global,t.tagSupport=r,Te(o,r,t,n),t}(t,u,c,i);if(u.tagSupport)return function(e,t,n){const o=e.tagSupport;let s=t;const l=a(t);if(l){const e=t;if(s=e.templater,!s){const t=new R([]);s=new _(void 0,t),s.tag=e,e.templater=s}}const i=new De(s,n,e);l&&(i.global=o.global);const c=t&&T(o,i);if(r(t)&&we(i,n,e),!c)return c?ve(s,o.global.insertBefore,n,e):void ke(t,e,e.insertBefore);o.updateBy(i)}(e,t,i),u;if(l(t))return Se(e,t,c,i,{counts:{added:0,removed:0}}),e;if(r(t))return ve(t,c,i,u),u;if(a(t)){const e=t;let n=e.templater;return n||(n=Ce(),e.templater=n,n.tag=e),ve(n,c,i,u),u}if(s(t))return t;if(t instanceof Function){const n=I(t,i);return e.set(n),e}ke(t,e,c)}(t,g,i,e):(function(e,t,o,s,i){const c=function(e){return n(e)?$e.tagComponent:r(e)?$e.templater:a(e)?$e.tag:l(e)?$e.tagArray:$e.value}(e);switch(c){case $e.templater:return void ve(e,o,s,t);case $e.tag:const n=e;let r=n.templater;return r||(r=xe(n)),void ve(r,o,s,t);case $e.tagArray:return Se(t,e,o,s,i);case $e.tagComponent:return void ye(e,t,o,s,i)}ke(e,t,o)}(g,t,e,i,{counts:{...c},forceElement:u}),u&&(u=!1),d=!0)}));i.global.subscriptions.push(g)}function Ne(e,t,n,o){if(!e.getAttribute)return;"TEXTAREA"===e.nodeName&&function(e,t,n){const o=e.value;if(o.search(Ee)>=0){const r=o.match(/__tagvar(\d{1,4})/),a="{"+(r?r[0]:"")+"}";e.value="",e.setAttribute("text-var-value",a);const s=(t,n,o)=>e.value=o;ce("text-var-value",a,e,t,n,s)}}(e,n,o);let r=t.counts.added;r=function(e,t){const n=e.oninit;if(!n)return t.added;const o=n.tagFunction;if(!o)return t.added;const r=o.tagFunction;return r?(r({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-r,e.children&&new Array(...e.children).forEach(((e,r)=>Ne(e,{...t,counts:t.counts},n,o)))}function Re(e,t,n,o,r){if(!r||"TEMPLATE"===e.tagName)return{clones:[],tagComponents:[]};const a=o.counts,s=[],l=[];return new Array(...r).forEach((e=>{const{clones:r,tagComponent:i}=Ve(e,t,n,a,o);s.push(...r),i?l.push(i):e.children&&new Array(...e.children).forEach(((e,r)=>{if(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")}(e)){const{tagComponent:r}=Ve(e,t,n,a,o);r&&l.push(r)}const{clones:i,tagComponents:c}=Re(e,t,n,o,e.children);s.push(...i),l.push(...c)}))})),{clones:s,tagComponents:l}}function Fe(e,t,n,o,r){const a=[],s=[],l=n.interpolation,i=e.children[0].content.children;if(l.keys.length){const{clones:n,tagComponents:l}=Re(e,t,o,r,i);a.push(...n),s.push(...l)}return he(e,t,o),Xe(i,t,o),{clones:a,tagComponents:s}}function Xe(e,t,n){new Array(...e).forEach((e=>{he(e,t,n),e.children&&Xe(e.children,t,n)}))}function ze(e,t){t.parentNode.insertBefore(e,t)}function Me(e,t,n,o,r){const a=function(e,t){const n=[];let o=e.children[0].content.firstChild;for(;o;){const e=o.nextSibling;ze(o,t),n.push(o),o=e}return n}(e,t);return a.length?(a.forEach((e=>Ne(e,r,o,n))),n.clones.push(...a),a):a}const Pe=new RegExp(J,"g");class Oe{templater;subject;isApp=!0;appElement;propsConfig;memory={state:[]};global={context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};constructor(e,t){this.templater=e,this.subject=t;const n=e.children.value,o=e.props,s=x(o);this.propsConfig={latest:o,latestCloned:s,lastClonedKidValues:n.map((e=>Z(e.values)))},r(o)||a(o)||(this.propsConfig.latestCloned=x(s))}}class De extends Oe{templater;ownerTagSupport;subject;version;isApp=!1;hasLiveElements=!1;childTags=[];clones=[];strings;values;lastTemplateString=void 0;constructor(e,t,n,o=0){super(e,n),this.templater=e,this.ownerTagSupport=t,this.subject=n,this.version=o}destroy(e={stagger:0,byParent:!1}){const t=this.global,o=this.subject;var r,a;"TEMPLATE"===t.insertBefore.nodeName&&t.placeholder&&!("arrayValue"in this.memory)&&(e.byParent||ne(this)),n(this.templater)&&(r=this,a=this,g.tagUse.forEach((e=>e.beforeDestroy(r,a))));const s=e.byParent?[]:oe(this.childTags);let l;if(s.forEach((e=>{const t=e.global;delete t.newest,t.deleted=!0})),delete t.placeholder,delete o.tagSupport,t.context={},delete t.oldest,delete t.newest,t.deleted=!0,this.childTags.length=0,this.hasLiveElements=!1,delete o.tagSupport,this.destroySubscriptions(),this.ownerTagSupport&&(this.ownerTagSupport.childTags=this.ownerTagSupport.childTags.filter((e=>e!==this))),e.byParent)this.destroyClones();else{const{stagger:t,promise:n}=this.destroyClones(e);e.stagger=t,n&&(l=n)}return l=l?l.then((async()=>{const e=s.map((e=>e.destroy({stagger:0,byParent:!0})));return Promise.all(e)})):Promise.all(s.map((e=>e.destroy({stagger:0,byParent:!0})))),l.then((()=>e.stagger))}destroySubscriptions(){const e=this.global;e.subscriptions.forEach((e=>e.unsubscribe())),e.subscriptions.length=0}destroyClones({stagger:e}={stagger:0}){const t=this.clones.map((t=>this.checkCloneRemoval(t,e))).filter((e=>e));return this.clones.length=0,t.length?{promise:Promise.all(t),stagger:e}:{stagger:e}}checkCloneRemoval(e,t){let n;const o=e;o.ondestroy&&(n=function(e,t){const n=e.ondestroy;if(!n)return;const o=n.tagFunction;if(!o)return;const r=o.tagFunction;return r?r({target:e,stagger:t}):void 0}(o,t));const r=()=>{e.parentNode?.removeChild(e);const t=this.ownerTagSupport;t&&(t.clones=t.clones.filter((t=>t!==e)))};return n instanceof Promise?n.then(r):(r(),n)}update(){return this.updateContext(this.global.context)}updateBy(e){const t=e.templater.tag;this.updateConfig(t.strings,t.values)}updateConfig(e,t){this.strings=e,this.updateValues(t)}updateValues(e){return this.values=e,this.updateContext(this.global.context)}updateContext(e){const t=this.templater.tag,o=this.strings||t.strings,l=this.values||t.values;return o.map(((t,o)=>{const i=J+o,c=l.length>o,u=l[o];if(i in e)return function(e,t,o){const r=e[t],a=r.tagSupport;if(a&&o&&n(o)){let e=new De(o,a.ownerTagSupport,r);n(a)&&function(e,t){const n=e.templater.wrapper.original,o=t.templater.wrapper,r=o?.original;if(n===r){t.global=e.global;const n=e.global.newest;if(n){const e=n.memory.state;t.memory.state=[...e]}}}(a,e)}s(o)||r.set(o)}(e,i,u);c&&(e[i]=function(e,t,o){return n(t)||t instanceof Function?new R(t):e?r(t)?re(t.tag,o):a(t)?re(t,o):s(t)?t:new R(t):new R(void 0)}(c,u,this))})),e}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){const n=this.subject,o=this.global;o.insertBefore=e,o.placeholder||function(e){const t=e.insertBefore,n=e.placeholder=document.createTextNode(""),o=t.parentNode;o.insertBefore(n,t),o.removeChild(t)}(o);const r=o.placeholder;o.oldest=this,o.newest=this,n.tagSupport=this,this.hasLiveElements=!0,this.clones.length,o.insertBefore=e;const a=this.update(),s=this.getTemplate(),l=t.forceElement,i=document.createElement("div");i.id="tag-temp-holder",i.innerHTML=`<template id="temp-template-tag-wrap">${s.string}</template>`;const{tagComponents:c}=Fe(i,a,s,this,{forceElement:t.forceElement,counts:t.counts});Me(i,r,this,a,t),c.forEach((e=>{Be(e.insertBefore,e.subject,e.ownerSupport,t.counts,{isForceElement:l}),Me(i,e.insertBefore,e.ownerSupport,a,t)}))}getTemplate(){const e=this.templater.tag,t=this.strings||e.strings,n=this.values||e.values,o=function(e){const t=function(e){const t=[];return{string:e.replace(me,((e,n)=>{if(e.startsWith("<"))return e;const o=n.substring(1,n.length-1);return t.push(o),`<template interpolate end id="${o}"></template>`})),keys:t}}(e);return t.string=t.string.replace(G,J),t}(t.map(((e,t)=>(e.replace(Pe,q)+(n.length>t?`{${J}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=o.string,{interpolation:o,string:o.string,strings:t,values:n,context:this.global.context||{}}}async rebuild(){delete this.strings,delete this.values,Le(this);const e=be(this.subject,this,this.ownerTagSupport);return await this.destroy(),e.buildBeforeElement(this.global.insertBefore,{forceElement:!0,counts:{added:0,removed:0}}),e}getAppElement(){let e=this;for(;e.ownerTagSupport;)e=e.ownerTagSupport;return e}}function Le(e){ne(e),e.childTags.forEach((e=>Le(e.global.oldest)))}const Ye=[];let Ke=0;function He(e){const t=function(t,n){(a(t)||r(t)||l(t))&&(n=t,t=void 0);const{childSubject:i,madeSubject:c}=function(e){if(s(e))return{childSubject:e,madeSubject:!1};if(l(e))return{childSubject:new R(e),madeSubject:!0};const t=e;return t?(t.memory.arrayValue=0,{childSubject:new R([t]),madeSubject:!0}):{childSubject:new R([]),madeSubject:!0}}(n);i.isChildSubject=!0;const u=new _(t,i),d=function(e,t){const n=function(r,a){const s=r.global;++s.renderCount;const l=e.children,i=s.oldest?.templater.children.lastArray;i&&(l.lastArray=i);const c=n.original;let u=e.props,d=function(e,t){const n=function(e,t){if("object"!=typeof e)return e;const n=e;return Object.entries(n).forEach((([e,o])=>{if(o instanceof Function){if(n[e].original)return;return n[e]=(...t)=>n[e].toCall(...t),n[e].toCall=(...e)=>Ae(o,e,t),void(n[e].original=o)}})),n}(o(e)?0:e,t);return n}(u,r.ownerTagSupport);const g=x(u),p=c(d,l);p.templater=e,e.tag=p;const f=new De(e,r.ownerTagSupport,a,s.renderCount);return f.global=s,f.propsConfig={latest:u,latestCloned:g,lastClonedKidValues:f.propsConfig.lastClonedKidValues},f.memory=r.memory,t&&l.value.forEach((e=>{e.values.forEach(((t,n)=>{if(!(t instanceof Function))return;const o=e.values[n];o.isChildOverride||(e.values[n]=function(...e){const n=f.ownerTagSupport;W(t,n,this,e)},o.isChildOverride=!0)}))})),f};return n}(u,c);return d.original=e.lastResult?.original||e,u.tagged=!0,u.wrapper=d,u};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=Ye,e.setUse=g,e.tagIndex=Ke++,e.lastResult=e}(e),Ye.push(e),t}function Ue(e,...t){return new Q(e,t)}const _e=He((({name:e,array:t,included:n,columnNames:o,allColumnNames:r})=>{let a=m(!1)((e=>[a,a=e])),s=m(!1)((e=>[s,s=e])),l=m(void 0)((e=>[l,l=e]));const i=v([]);return Ue`
    <a onclick=${()=>{if(n)return o.length=0,void o.push(...o.filter((t=>t!==e)));o.push(e)}} style="cursor:pointer;">
      <input type="checkbox" ${n&&"checked"} />&nbsp;${e}
    </a>

    <div
      onmouseover=${()=>a=!0}
      onmouseout=${()=>a=!1}
    >
      <a style.visibility=${s||a?"visible":"hidden"}
        onclick=${()=>s=!s}
      >⚙️&nbsp;</a>
      
      ${n&&o.length!==r.length?Ue`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(...r)}}><small>all</small></a>
      `:Ue`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(e)}}><small>only</small></a>
      `}
    </div>

    ${s&&Ue`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${l&&Ue`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${e=>{return n=l,o=e.target.value,n.stringFormula=o,void(n.value=Ie(o,{array:t}));var n,o}}
            >${l.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${i.map((e=>Ue`
                <div>
                  <div>
                    <strong>${e.title}</strong>
                    <a onclick=${()=>l=e}>✏️</a>
                  </div>
                  <div>${e.value}</div>
                </div>
              `.key(e)))}
          </div>
          <button type="button" onclick=${()=>{const n=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;i.push({title:"sum",stringFormula:n,value:Ie(n,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function Ie(e,t={}){return n=e,o={isNaN,Math,Number,Date,...t},n?(o=new Proxy(o,{has:()=>!0}),new Function("with(this) { return ("+n+")}").call(o)):n;var n,o}const We=He((({array:e,showAll:t,showKids:n,toggleColumnDialog:o,columnNames:r,formatChange:a,allowMaximize:s,everySimpleValue:l})=>Ue`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&Ue`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${r.map((e=>Ue`
                <th
                  style.cursor=${o&&"pointer"}
                  onclick=${o}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>Ue`
            <tr>
              ${r.map((o=>Ue`
                <td>
                  ${rt({value:e[o],showLevels:0,showAll:t,showKids:t||n,isRootDump:!1,formatChange:a,allowMaximize:s})}
                </td>
              `.key(e[o])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),Je=He((({array:e,showLevels:t,showAll:n,showKids:o,columnNames:r,formatChange:a,toggleColumnDialog:s,allowMaximize:l,everySimpleValue:i})=>Ue`
    ${e.map(((e,c)=>{return Ue`${rt({value:(u=e,d=r,["string","number","boolean"].includes(typeof u)?u:function(e,t){const n={};return t.forEach((t=>{e.hasOwnProperty(t)&&(n[t]=e[t])})),n}(u,d)),showLevels:t,showAll:n,showKids:n||o,isRootDump:!1,formatChange:a,onHeaderClick:s,allowMaximize:l,everySimpleValue:i})}`.key({item:e,index:c});var u,d}))}
  `));const qe=He((({showLevels:e,showAll:t,showKids:n,array:o,arrayView:r,formatChange:a,allowMaximize:s,everySimpleValue:l})=>{const i=o.length?Object.keys(o[0]):[];let c=m(i)((e=>[c,c=e])),u=m(!1)((e=>[u,u=e])),d=v("columnDialog"+performance.now());const g=()=>{u=!u;const e=document.getElementById(d);u?e.showModal():e.close()};return Ue`
    ${"table"===r?We({showAll:t,showKids:n,array:o,toggleColumnDialog:g,columnNames:c,formatChange:a,everySimpleValue:l}):Je({array:o,showLevels:e,showAll:t,showKids:n,formatChange:a,columnNames:c,toggleColumnDialog:g,allowMaximize:s,everySimpleValue:l})}

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
        ${i.map((e=>{const t=c.includes(e);return Ue`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${_e({name:e,array:o,included:t,columnNames:c,allColumnNames:i})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${g}>🅧 close</button>
      </div>
    </dialog>
  `})),Ge=He((({key:e,value:t,show:n,showAll:o,showKids:r,showLevels:a,formatChange:s,allowMaximize:l,everySimpleValue:i})=>{let c=m(void 0)((e=>[c,c=e])),u=m(void 0)((e=>[u,u=e]));y([n],(([e])=>c=e));let d=m(!1)((e=>[d,d=e]));const g=v((()=>"maximize-dump-"+performance.now())),p=()=>{d=!d,d&&document.getElementById(g).showModal()},f=n=>Ue`
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
      ${n&&Ue`
        &nbsp;<a onclick=${p}>⏹️</a>
      `}
    </div>
  `,h={showLevels:a,showAll:o,showKids:r,formatChange:s,array:t,arrayView:u,allowMaximize:l,everySimpleValue:i},b=Ue`
    <!-- array displays wrap -->
    <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
      ${qe(h)}
    </div>
  `;return Ue`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    ${f(l)}
    ${(o||c||r||null==c&&a>0)&&b}
  </div>

  <!-- maximize -->
  <dialog id=${g} style="padding:0"
    onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
    ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
    ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
    ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
  >
    <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
      ${d&&f(!1)}
    </div>
    
    ${d&&Ue`
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${qe({...h,allowMaximize:!1})}
      </div>
    `}

    <div style="padding:.25em">
      <button type="button" onclick=${()=>document.getElementById(g).close()}>🅧 close</button>
    </div>
  </dialog>

  `}));function Qe(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function Ze({key:e,value:t,onHeaderClick:n,everySimpleValue:o}){const r=t.search&&("https://"===t.slice(0,8)||"http://"===t.slice(0,7));let a;return a=o?et({value:t,everySimpleValue:o}):r?tt(t):et({value:t}),Ue`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&Ue`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${n&&"pointer"}
          onclick=${n}
        >${e}</div>
      `}
      ${a}
    </div>
  `}const et=He((({value:e,everySimpleValue:t})=>{const n=[void 0,null,"null"].includes(e),o=e,r=!isNaN(o)&&o>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(o):"";let a=m(0)((e=>[a,a=e])),s=e;return t&&(s=t(e)),s=(null===s?"null":!1===s&&"false")||void 0===s&&"undefined"||s,Ue`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{a=Date.now()}}
      onmouseup=${t=>{if(Date.now()-a>300)return t.preventDefault(),t.stopPropagation(),!0;Qe(e)}}
      style="cursor:pointer;"
      style.background-color=${n?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||n&&"white"||""}
      title=${r}
    >${s}</div>
  `})),tt=e=>Ue`
    <a onclick=${()=>Qe(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,nt=He((({key:e,showKids:t,show:n,showLevels:o,value:r,showAll:a,onHeaderClick:s,formatChange:l,allowMaximize:i,everySimpleValue:c})=>{let u=m(!1)((e=>[u,u=e])),d=m(!1)((e=>[d,d=e]));const g=v((()=>"maximize-dump-"+performance.now()));y([n],(([e])=>u=e));const p=!e||t||u||null==u&&o>0,f=()=>{d=!d,d&&document.getElementById(g).showModal()},h=t=>Ue`
    <div style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;"+(u?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a onclick=${()=>u=!u}>
        <strong>${e}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(r).length}}
        </sup>
      </a>
      ${t&&Ue`
        &nbsp;<a onclick=${f}>⏹️</a>
      `}
    </div>
  `,b=e=>Ue`
    <div style="display:flex;flex-wrap:wrap">
      ${Object.entries(r).map((([n,r])=>Ue`
        <!-- recurse -->
        <div class="child-margin-xxs"
          style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;")}
        >
          ${rt({value:r,key:n,show:u,showAll:a,showLevels:o-1,showKids:a||t,isRootDump:!1,formatChange:l,onHeaderClick:s,allowMaximize:e,everySimpleValue:c})}
      `.key([n,r])))}
    </div>
  `;return Ue`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&h(i)}
        ${p&&b(i)}

        <!-- maximize -->
        <dialog id=${g} style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
            ${d&&h(!1)}
          </div>
          
          ${d&&b(!1)}

          <div style="padding:.25em">
            <button type="button" onclick=${()=>document.getElementById(g).close()}>🅧 close</button>
          </div>
        </dialog>
      </div>
    </div>
  `})),ot=He((({value:e,format:t,showAll:n,formatChange:o,showAllChange:r})=>Ue`
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
          ${!t||"flex"===t&&Ue`
            <a
              style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(n?"background-color:#33cd5f;":"background-color:#444444")}
              class="hover-bg-balanced"
              onclick=${()=>r(n=!n)}
              title="hide/show all sub objects"
            >👁</a>
          `}
          <a
            style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(t&&"flex"!==t?"background-color:#444444":"background-color:#33cd5f;")}
            class="hover-bg-balanced"
            onclick=${()=>o(t="flex")}
          >flex</a>
          <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===t?"background-color:#33cd5f;":"background-color:#444444")}
            class="hover-bg-balanced"
            onclick=${()=>o(t="json")}
          >json</a>
          <a style="margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"
            class="bg-dark hover-bg-balanced active-bg-energized"
            onclick=${()=>function(e){Qe(JSON.stringify(e,null,2))}(e)}
          >copy</a>
        </div>
      </div>
    </div>
  `)),rt=He((({key:e,value:t,showKids:n=!1,showLevels:o=-1,showAll:r=!1,format:a="flex",formatChange:s=(e=>a=e),isRootDump:l=!0,onHeaderClick:i,allowMaximize:c,everySimpleValue:u})=>{l&&void 0===c&&(c=!0);const d=null===t?"null":typeof t;let p=m(!1)((e=>[p,p=e]));w((e=>[a,a=e])),w((e=>[r,r=e]));let f=m(void 0)((e=>[f,f=e]));return function(e){const t=g.memory.initCurrentSupport;t.global.init||(t.global.init=e,e())}((()=>{(o=o>=0&&o||(-1===o&&!e&&t&&t instanceof Object?2:0))>0&&(p=!0)})),[null,void 0].includes(t)?Ze({key:e,value:d,onHeaderClick:i,everySimpleValue:u}):["boolean","number","string"].includes(d)?Ze({key:e,value:t,onHeaderClick:i,everySimpleValue:u}):function(){if(null===t)return n?Ze({key:e,value:"null",onHeaderClick:i,everySimpleValue:u}):Ue``;const d=(!a||"flex"===a)&&t.push&&t.pop;return Ue`
      <div class="taggedjs-dump">
        ${l&&ot({value:t,format:a,showAll:r,showAllChange:e=>r=e,formatChange:s})}
        ${"json"===a&&Ue`
          <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
          >${JSON.stringify(t,null,2)}</textarea>
        `||d&&Ge({key:e,value:t,show:p,showAll:r,showKids:n,showLevels:o,formatChange:s,allowMaximize:c,everySimpleValue:u})||nt({key:e,show:p,showKids:n,showLevels:o,value:t,showAll:r,formatChange:s,onHeaderClick:i,allowMaximize:c,everySimpleValue:u})}
      </div>
    `}()}));var at=t.B;export{at as dump};