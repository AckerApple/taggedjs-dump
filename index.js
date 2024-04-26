var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return r(e,new WeakMap)}function r(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const n=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,n),Array.isArray(e))for(let o=0;o<e.length;o++)n[o]=r(e[o],t);else for(const o in e)e.hasOwnProperty(o)&&(n[o]=r(e[o],t));return n}function o(e,t){return a(e,t,new WeakMap)}function a(e,t,n){return!!(e===t||(r=e,o=t,r instanceof Function&&o instanceof Function&&r.toString()===o.toString()))||!!n.has(e)||"object"==typeof e&&"object"==typeof t&&!(e instanceof Date&&t instanceof Date)&&(n.set(e,0),Array.isArray(e)&&Array.isArray(t)?function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!a(e[r],t[r],n))return!1;return!0}(e,t,n):!Array.isArray(e)&&!Array.isArray(t)&&function(e,t,n){const r=Object.keys(e),o=Object.keys(t);if(0===r.length&&0===o.length)return!0;if(r.length!==o.length)return!1;for(const s of r)if(!o.includes(s)||!a(e[s],t[s],n))return!1;return!0}(e,t,n));var r,o}function s(e){return!0===e?.isTemplater}function l(e){return!0===e?.isTag}function i(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function c(e){return e instanceof Array&&e.every((e=>l(e)))}e.d(t,{B:()=>Ge});class d{templater;subject;isApp=!0;propsConfig;memory={state:{newest:[]}};constructor(e,t){this.templater=e,this.subject=t;const r=this.templater.children,o=this.templater.props,a=n(o);this.propsConfig={latest:o,latestCloned:a,clonedProps:a,lastClonedKidValues:r.value.map((e=>u(e.values)))},l(o)||(this.propsConfig.latestCloned=n(a),this.propsConfig.clonedProps=this.propsConfig.latestCloned)}}function u(e){return e.map((e=>{const t=e;return l(t)?u(t.values):s(t)?n(t.props):c(t)?u(t):n(e)}))}class g extends d{ownerTagSupport;templater;subject;isApp=!1;constructor(e,t,n){super(t,n),this.ownerTagSupport=e,this.templater=t,this.subject=n}}class p extends Error{details;constructor(e,t,n={}){super(e),this.name=p.name,this.details={...n,errorCode:t}}}class f extends p{constructor(e,t){super(e,"array-no-key-error",t),this.name=f.name}}class h extends p{constructor(e,t){super(e,"state-mismatch-error",t),this.name=h.name}}class m extends p{constructor(e,t){super(e,"sync-callback-error",t),this.name=m.name}}function b(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};b.tagUse.push(t)}b.tagUse=[],b.memory={},b.memory.stateConfig={array:[]};const y=e=>function(e){const t=e.memory.state,n=b.memory.stateConfig;if(n.rearray){const r="last state not cleared. Possibly in the middle of rendering one component and another is trying to render";throw console.error(r,{config:n,component:e.templater?.wrapper.original,wasInMiddleOf:n.tagSupport?.templater.wrapper.original,state:t,expectedClearArray:n.rearray}),new h(r,{config:n,component:e.templater?.wrapper.original,state:t,expectedClearArray:n.rearray})}n.rearray=[],t?.newest.length&&(t.newest.map((e=>v(e))),n.rearray.push(...t.newest)),n.tagSupport=e}(e);function v(e){const t=e.callback;if(!t)return e.defaultValue;const n=t(w),[r]=n,[o]=t(r);if(o!==w){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:n,oldValue:r,checkValue:o}),new Error(a)}return r}b({beforeRender:y,beforeRedraw:y,afterRender:e=>{const t=e.memory.state,n=b.memory.stateConfig,r=n.rearray;if(r.length&&r.length!==n.array.length){const t=`States lengths has changed ${r.length} !== ${n.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`,o={oldStates:n.array,newStates:n.rearray,component:e.templater?.wrapper.original},a=new h(t,o);throw console.warn(t,o),a}delete n.rearray,t.newest=n.array,t.newest.forEach((e=>e.lastValue=v(e))),n.array=[]}});class w{}function x(e){const t=b.memory.stateConfig;let n;const r=t.rearray[t.array.length];if(r){let e=v(r);n=t=>[e,e=t];const o={get:()=>v(o),callback:n,lastValue:e,defaultValue:r.defaultValue};return t.array.push(o),C(e,o)}let o=(e instanceof Function?e:()=>e)();n=e=>[o,o=e];const a={get:()=>v(a),callback:n,lastValue:o,defaultValue:o};return t.array.push(a),C(o,a)}function C(e,t){return n=>(t.callback=n||(t=>[e,e=t]),e)}function S(e,t){let n=x(void 0)((e=>[n,n=e]));return void 0===n?(n=e,e):(e.every(((e,t)=>e===n[t]))||(t(e,n),n.length=0,n.push(...e)),e)}function k(e){const t=b.memory.stateConfig;let n;const r=t.rearray[t.array.length];if(r){let e=v(r);n=t=>[e,e=t];const o={get:()=>v(o),callback:n,lastValue:e,defaultValue:r.defaultValue};return t.array.push(o),e}let o=(e instanceof Function?e:()=>e)();n=e=>[o,o=e];const a={get:()=>v(a),callback:n,lastValue:o,defaultValue:o};return t.array.push(a),o}function $(e){const t=b.memory.stateConfig,n=t.rearray,[r]=e(void 0);e(r);const o=n[t.array.length];if(o){let n=o.watch,a=v(o);const s={get:()=>v(s),callback:e,lastValue:a,watch:o.watch};return r!=n&&(s.watch=r,a=s.lastValue=r),t.array.push(s),e(a),a}const a={get:()=>v(a),callback:e,lastValue:r,watch:r};return t.array.push(a),r}function E(e,t){const n=b.memory.providerConfig;n.ownerTag=t,e.templater.global.providers.length&&(n.providers.length=0,n.providers.push(...e.templater.global.providers))}function T(e){e.tagSupport.templater.global.providers.filter((e=>!o(e.instance,e.clone))).forEach((t=>{!function(e,t){A(e,t).forEach((({tag:e,renderCount:t,provider:r})=>{e.tagSupport.templater.global.deleted||t===e.tagSupport.templater.global.renderCount&&(r.clone=n(r.instance),P(e.tagSupport,!1))}))}(e.getAppElement(),t),t.clone=n(t.instance)}))}function A(e,t,n=[]){const r=e.tagSupport.templater.global,o=r.providers.find((e=>e.constructMethod===t.constructMethod));return o&&n.push({tag:e,renderCount:r.renderCount,provider:o}),e.childTags.forEach((e=>A(e,t,n))),n}function j(e,t){return e.strings.length===t.strings.length&&(!!e.strings.every(((e,n)=>t.strings[n]===e))&&(e.values.length===t.values.length&&!!t.values.every(((t,n)=>{const r=e.values[n];return!(t instanceof Function&&r instanceof Function)||!(t.toString()!==r.toString())}))))}function B(e,t){const n=e.tagSupport;delete t.tag,delete n.subject.tag,n.templater.global.oldest.destroy(),N(n),n.templater.global.context={}}function N(e){delete e.templater.global.oldest,delete e.templater.global.newest}b.memory.providerConfig={providers:[],ownerTag:void 0},b({beforeRender:(e,t)=>{E(e,t)},beforeRedraw:(e,t)=>{E(e,t.ownerTag)},afterRender:e=>{const t=b.memory.providerConfig;e.templater.global.providers=[...t.providers],t.providers.length=0}});class R{props;children;isTag=!1;tagged;wrapper;global={newestTemplater:this,context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};tagSupport;constructor(e,t){this.props=e,this.children=t}isTemplater=!0}function V(e,t,n,r){const o=e,a=t?.ownerTag||r;t?(o.memory.state.newest=[...t.tagSupport.memory.state.newest],o.templater.global=t.tagSupport.templater.global,function(e,t){b.tagUse.forEach((n=>n.beforeRedraw(e,t)))}(o,t)):(!function(e,t){b.tagUse.forEach((n=>n.beforeRender(e,t)))}(o,a),b.memory.providerConfig.ownerTag=a);const s=o.templater,l=s.wrapper(o,n);return function(e,t){b.tagUse.forEach((n=>n.afterRender(e,t))),_.next(t)}(o,l),!t||j(t,l)||function(e,t,n){const r=e.tagSupport.templater.global.insertBefore;B(e,n),t.global={...t.global};const o=t.global;o.insertBefore=r,o.deleted=!1,delete o.oldest,delete o.newest,delete n.tag}(t,s,n),l.ownerTag=a,o.templater.global.newest=l,l}function P(e,t){const n=e.templater.global;if(l(e.templater)){const e=n.newest.ownerTag;return++n.renderCount,P(e.tagSupport,!0)}const r=e.subject,a=e.templater,s=r.tag,i=s?.tagSupport.templater.global.newest;let c,d=!1;t&&i&&(c=i.ownerTag,c)&&(d=!o(a.props,i.tagSupport.propsConfig.latestCloned));const u=n.newest?.tagSupport,g=function(e,t,n,r){const o=r.tag;t.global=o.tagSupport.templater.global;const a=n.templater.global.renderCount;T(e);const s=n.templater.global.newest;if(a!==n.templater.global.renderCount)return e.updateByTag(s),s;const l=n.templater||t,i=r.tag||l.global.newest||l.global.oldest,c=V(t.tagSupport,i,r,e.ownerTag),d=n.templater.global.oldest||e;return c.tagSupport.templater.global.oldest=d,j(s,c)&&(r.tag=c,d.updateByTag(c)),c}(a.global.oldest,a,u,r);return c&&d?(P(c.tagSupport,!0),g):g}let X=e=>(e,t,n,r,o,a)=>{throw new m("Callback function was called immediately in sync and must instead be call async")};const z=X;function F(e,t){e.forEach(((e,n)=>{const r=v(e),o=t[n].callback;o&&o(r),t[n].lastValue=r}))}function M(e){const t=b.memory.stateConfig.array;X=n=>(...r)=>function(e,t,n,...r){const o=e.memory.state.newest;F(o,n);const a=t(...r);F(n,o),P(e,!1),a instanceof Promise&&a.finally((()=>{F(n,o),P(e,!1)}))}(e,n,t,...r)}function L(e){b.memory.initCurrentTemplater=e.templater}let O;b({beforeRender:e=>M(e),beforeRedraw:e=>M(e),afterRender:e=>{X=z}}),b({beforeRender:e=>L(e),beforeRedraw:e=>L(e)}),b({beforeRender:e=>O=e,beforeRedraw:e=>O=e,beforeDestroy:(e,t)=>{const n=e.templater.global.destroyCallback;n&&n()}});class D{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(e,t){this.value=e,this.onSubscription=t}subscribe(e){const t=function(e,t){const n=K.globalSubCount$;K.globalSubCount$.set(n.value+1);const r=()=>{r.unsubscribe()};return r.callback=t,r.subscriptions=[],r.unsubscribe=()=>(Y(e.subscribers,t),Y(K.globalSubs,t),K.globalSubCount$.set(n.value-1),r.unsubscribe=()=>r,r.subscriptions.forEach((e=>e.unsubscribe())),r),r.add=e=>(r.subscriptions.push(e),r),r.next=e=>{t(e,r)},r}(this,e),n=this.subscribeWith;if(n){if(this.methods.length){const n=e;e=e=>{H(e,this.methods,(e=>n(e,t)))}}return n(e)}return this.subscribers.push(t),K.globalSubs.push(t),this.onSubscription&&this.onSubscription(t),t}set(e){this.value=e,this.subscribers.forEach((t=>{t.callback(e,t)}))}next=this.set;toPromise(){return new Promise(((e,t)=>{this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}))}toCallback(e){this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}pipe(...e){const t=new D;return t.methods=e,t.subscribeWith=e=>this.subscribe(e),t}}function Y(e,t){const n=e.findIndex((e=>e.callback===t));-1!==n&&e.splice(n,1)}const K=D;function H(e,t,n){const r=[...t],o=r.shift(),a=e=>{if(r.length)return H(e,r,n);n(e)};let s=a;const l=o(e,{setHandler:e=>s=e,next:a});s(l)}K.globalSubs=[],K.globalSubCount$=new D,K.globalSubCount$.set(0);class U extends D{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value,t),t}}const _=new D(void 0,(e=>{b.memory.stateConfig.rearray||e.next()}));function I(e,t){if(e.isChildOverride)return e;const n=(n,r)=>W(e,t,n,r);return n.tagFunction=e,n}function W(e,t,n,r){const o=t.tagSupport,a=o.templater.global.renderCount,s=e.bind(n)(...r);return a!==o.templater.global.renderCount||o.templater.global.deleted?s instanceof Promise?s.then((()=>"promise-no-data-ever")):"no-data-ever":(P(o,!0),s instanceof Promise?s.then((()=>(o.templater.global.deleted||P(o,!0),"promise-no-data-ever"))):"no-data-ever")}function J(e,t){const n=function(e,n){if("object"!=typeof e)return e;const r=e;return Object.entries(r).forEach((([e,n])=>{if(n instanceof Function){if(r[e].original)return;return r[e]=(...t)=>r[e].toCall(...t),r[e].toCall=(...e)=>q(n,e,t),void(r[e].original=n)}})),r}(l(e)?0:e);return n}function q(e,t,n){const r=e(...t);return P(n.templater.global.newest.tagSupport,!0),r}const G=[];let Q=0;function Z(e){const t=function(t,r){(l(t)||c(t))&&(r=t,t=void 0);const{childSubject:o,madeSubject:a}=function(e){if(i(e))return{childSubject:e,madeSubject:!1};if(c(e))return{childSubject:new U(e),madeSubject:!0};const t=e;return t?(t.memory.arrayValue=0,{childSubject:new U([t]),madeSubject:!0}):{childSubject:new U([]),madeSubject:!0}}(r);o.isChildSubject=!0;const s=new R(t,o),d=function(e,t){const r=function(o,a){const s=o.templater.global;s.newestTemplater=e,++s.renderCount,e.global=s;const l=e.children,i=s.oldest?.tagSupport.templater.children.lastArray;i&&(l.lastArray=i);const c=r.original;let d=e.props,u=J(d,o.ownerTagSupport);const p=n(d),f=c(u,l);return f.version=s.renderCount,f.tagSupport=new g(o.ownerTagSupport,e,a),f.tagSupport.propsConfig={latest:d,latestCloned:p,clonedProps:p,lastClonedKidValues:f.tagSupport.propsConfig.lastClonedKidValues},f.tagSupport.memory=o.memory,t&&l.value.forEach((e=>{e.values.forEach(((t,n)=>{if(!(t instanceof Function))return;const r=e.values[n];r.isChildOverride||(e.values[n]=function(...e){const n=f.ownerTag;W(t,n,this,e)},r.isChildOverride=!0)}))})),f};return r}(s,a);return d.original=e,s.tagged=!0,s.wrapper=d,s};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=G,e.setUse=b,e.tagIndex=Q++}(e),G.push(e),t}function ee(e,t){t.parentNode.insertBefore(e,t)}function te(e,t,n){const r=e.split(".");if("style"===r[0]&&(n.style[r[1]]=t),"class"===r[0])return r.shift(),void(t?r.forEach((e=>n.classList.add(e))):r.forEach((e=>n.classList.remove(e))))}const ne=/^\s*{__tagvar/,re=/}\s*$/;function oe(e){return e&&e.search(ne)>=0&&e.search(re)>=0}function ae(e,t,n,r,o,a){if(oe(t))return function(e,t,n,r,o,a){return le(e,se(r,t),n,o,a)}(e,t,n,r,o,a);if(oe(e)){let t;const s=se(r,e).subscribe((e=>{!function(e,t,n,r,o){if(t&&t!=e&&("string"==typeof t?n.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>n.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>le(e,t,n,r,o)));else{if(!e.length)return;le(e,"",n,r,o)}}(e,t,n,o,a),t=e}));return o.tagSupport.templater.global.subscriptions.push(s),void n.removeAttribute(e)}return ie(e)?te(e,t,n):void 0}function se(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function le(e,t,n,r,o){const a=ie(e);if(t instanceof Function){const r=function(...e){return t(n,e)};n[e].action=r}if(i(t)){n.removeAttribute(e);const s=t=>(t instanceof Function&&(t=I(t,r)),function(e,t,n,r,o){if(e instanceof Function){const r=function(...n){return e(t,n)};return r.tagFunction=e,void(t[n]=r)}if(r)return void te(n,e,t);if(e)return void o(t,n,e);[void 0,!1,null].includes(e)?t.removeAttribute(n):o(t,n,e)}(t,n,e,a,o)),l=t.subscribe(s);r.tagSupport.templater.global.subscriptions.push(l)}else o(n,e,t)}function ie(e){return e.search(/^(class|style)(\.)/)>=0}function ce(e,t,n){e.setAttribute(t,n)}function de(e,t,n){e[t]=n}function ue(e,t,n){const r=e.getAttributeNames();let o=ce;r.forEach((r=>{"INPUT"===e.nodeName&&"value"===r&&(o=de),ae(r,e.getAttribute(r),e,t,n,o),o=ce}))}const ge=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function pe(e,t,n,r,o){if(!0!==e.tagged){const t=e.wrapper.original;let n=t.name||t.constructor?.name;"Function"===n&&(n=void 0);const r=n||t.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}e.tagSupport=new g(r.tagSupport,e,t),e.global.insertBefore=n;let a=t.tag;return b.memory.providerConfig.ownerTag=r,(!a||o.forceElement)&&(a=function(e,t,n,r,o){const a=r.clones.map((e=>e));if(n=V(e.tagSupport,t.tag,t,r),e.global.newest=n,r.clones.length>a.length){const e=r.clones.filter((e=>!a.find((t=>t===e))));n.clones.push(...e)}return r.childTags.push(n),n}(e,t,a,r)),function(e,t,n,{counts:r,forceElement:o}){const a=t,s=a.tag,l=s?.tagSupport.templater.global.oldest||void 0;if(l&&l)return function(e,t,n){if(t instanceof Function){const e=t(n.tagSupport);return n.updateByTag(e),void(t.tag=e)}return n.updateByTag(e),void(t.tag=e)}(e,a,l);e.buildBeforeElement(n,{counts:r,forceElement:o})}(a,t,n,o),a}function fe(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function he(e,t){N(e.tagSupport),e.destroy({stagger:t.removed++})}function me(e,t){const n=e.tagSupport.templater.global.placeholder;n&&fe(t,n)}function be(e,t,n,r){e.tagSupport||(ye(e,r,t),r.childTags.push(e)),e.ownerTag=r,e.buildBeforeElement(n,{counts:{added:0,removed:0},forceElement:!0})}function ye(e,t,n){const r={global:{renderCount:0,providers:[],context:{},subscriptions:[],deleted:!1,newestTemplater:{}},children:new U([]),props:{},isTag:!0,isTemplater:!1,tagged:!1,wrapper:()=>{},tagSupport:{}};e.tagSupport=new g(t.tagSupport,r,n),r.global.oldest=e,r.global.newest=e,r.tagSupport=e.tagSupport,e.ownerTag=t}function ve(e,t,n,r,o){const a=r.clones;let s=e.lastArray=e.lastArray||[];e.placeholder||function(e,t){if("TEMPLATE"!==e.nodeName)return void(t.placeholder=e);const n=t.placeholder=document.createTextNode(""),r=e.parentNode;r.insertBefore(n,e),r.removeChild(e)}(n,e);const l=e.placeholder;let i=0;return s=e.lastArray=e.lastArray.filter(((e,n)=>{const r=t.length-1<n-i,a=t[n-i],l=a?.memory.arrayValue,c=e.tag,d=r||(u=l,g=c.memory.arrayValue,!(u===g||u instanceof Array&&g instanceof Array&&u.length==g.length&&u.every(((e,t)=>e==g[t]))));var u,g;if(d){const e=s[n];return he(e.tag,o.counts),e.deleted=!0,++i,++o.counts.removed,!1}return!0})),t.forEach(((e,n)=>{const a=s[n],i=a?.tag.tagSupport,c=new U({});if(ye(e,r,c),i&&(e.tagSupport.templater.global=i.templater.global,i.templater.global.newest=e),!("arrayValue"in e.memory)){const n={template:e.getTemplate().string,array:t,ownerTagContent:r.lastTemplateString},o="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(o,n),new f(o,n)}if(s.length>n){const t=a.tag.tagSupport,n=t.templater.global;return e.tagSupport=e.tagSupport||t,n.oldest.updateByTag(e),[]}!function(e,t,n,r,o){const a={tag:t,index:n};o.push(a);const s={added:r.counts.added+n,removed:r.counts.removed},l=document.createElement("template");e.parentNode.insertBefore(l,e),t.buildBeforeElement(l,{counts:s,forceElement:r.forceElement})}(l,e,n,o,s),r.childTags.push(e)})),a}function we(e,t,n){t.insertBefore=n;const r=t.clone||n;if(t.lastValue===e&&"lastValue"in t)return;t.lastValue=e;const o=function(e,t){const n=t.parentNode;let r=e;[void 0,!1,null].includes(e)&&(r="");const o=document.createTextNode(r);return n.insertBefore(o,t),n.removeChild(t),o}(e,r);t.clone=o}var xe;!function(e){e.tag="tag",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(xe||(xe={}));const Ce=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function Se(e,t,n,r){let a=n.tag;const s=a.tagSupport.templater.wrapper,l=t.wrapper;let i=!1;s&&l&&(i=s.original===l.original);const c=a.tagSupport;if(c.templater.global.placeholder,!i)return B(c.templater.global.oldest,n),pe(t,n,r,e,{forceElement:!1,counts:{added:0,removed:0}});if(!function(e,t,n){const r=function(e,t){let n=e,r=t;if("object"==typeof e){if(!t)return 3;if(n={...e},r={...t||{}},!Object.entries(n).every((([e,t])=>{let o=r[e];return t instanceof Function?o instanceof Function&&(o.original&&(o=o.original),t.original&&(t=t.original),t.toString()===o.toString()&&(delete n[e],delete r[e],5)):4})))return 6}return!o(r,n)&&7}(n.props,e.propsConfig.latestCloned);if(r)return r;const a=function(e,t){const n=e.propsConfig.lastClonedKidValues,r=t.propsConfig.lastClonedKidValues;return!n.every(((e,t)=>{const n=r[t];return e.every(((e,t)=>e===n[t]))}))&&9}(e,t);return a}(c,t.tagSupport,t)){const n=t.props;return n&&"object"==typeof n&&function(e,t,n,r){const o=(t=t.tagSupport.templater.global.newest).tagSupport.propsConfig.latestCloned,a=n.tagSupport.templater.global.newest.tagSupport;Object.entries(o).forEach((([e,t])=>{if(!(t instanceof Function))return;t.original;const n=r[e];n.original||(o[e].toCall=(...e)=>q(n,e,a))}))}(0,a,e,n),a}const d=t.global.oldest,u=t.global.newest,g=P(t.tagSupport,!1);a=n.tag;const p=g.tagSupport.templater.global.oldest;if(!p)return ke(g,r,c,n);p&&t.children.value.length&&p.tagSupport.templater.children.set(t.children.value);const f=i&&u.isLikeTag(g);let h=c.templater.global.oldest;return f?(n.tag=g,d.updateByTag(g),g):(i&&a&&(B(a,n),g.tagSupport.templater.global.context={}),h=void 0,h||ke(g,c.templater.global.insertBefore,c,n),c.templater.global.newest=g,g)}function ke(e,t,n,r){return e.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0}}),e.tagSupport.templater.global.oldest=e,e.tagSupport.templater.global.newest=e,n.templater.global.oldest=e,n.templater.global.newest=e,r.tag=e,e}function $e(e,t,n,r,o){const a=[];if(!e.hasAttribute("end"))return{clones:a};const l=e.getAttribute("id");if(l?.substring(0,Ne.length)!==Ne)return{clones:a};const i=t[l];return s(i.value)||c(i.value)?{clones:a,tagComponent:{variableName:l,ownerTag:n,subject:i,insertBefore:e}}:(Ee(e,i,n,r,{isForceElement:o.forceElement}),{clones:a})}function Ee(e,t,n,r,{isForceElement:o}){let a=!1;const d=t.subscribe((d=>{a?function(e,t,n,r){const o=e,a=s(t);if(function(e,t,n){const r=e,o=r.lastArray;if(o&&!c(t)){const e=r.placeholder;return delete r.lastArray,delete r.placeholder,fe(n,e),o.forEach((({tag:e})=>he(e,{added:0,removed:0}))),"array"}const a=e,i=a.tag;if(i){const r=l(t);return l(e.value)&&r?!j(t,i)&&(me(i,n),B(i,a),2):!s(t)&&(me(i,n),B(i,a),"different-tag")}const d=e,u="lastValue"in d,g=d.lastValue;u&&g!==t&&function(e,t){const n=t.clone,r=n.parentNode;r.insertBefore(e,n),r.removeChild(n),delete t.clone,delete t.lastValue}(n,d)}(e,t,r),a){const e=t;return o.tag?(e.tagSupport=new g(n.tagSupport,e,o),Se(n,e,o,r),o):(pe(e,o,r,n,{forceElement:!0,counts:{added:0,removed:0}}),o)}const d=o.tag;if(d)return function(e,t,n,r){const o=n&&j(e,n),a=n&&n.getTemplate&&e.isLikeTag(n),s=n;if(s.tagSupport||ye(s,r,t),!o)return o||a?be(n,t,e.tagSupport.templater.global.insertBefore,r):void we(n,t,t.insertBefore);e.updateByTag(s)}(d,e,t,n),o;if(c(t))return ve(e,t,r,n,{counts:{added:0,removed:0}}),e;if(t instanceof Function){const r=I(t,n);return e.set(r),e}l(t)?be(t,o,r,n):i(t)||we(t,e,r)}(t,d,n,e):(function(e,t,n,r,o){const a=function(e){return s(e)?xe.tagComponent:l(e)?xe.tag:c(e)?xe.tagArray:xe.value}(e);switch(a){case xe.tag:return void be(e,t,n,r);case xe.tagArray:return ve(t,e,n,r,o);case xe.tagComponent:return void pe(e,t,n,r,o)}we(e,t,n)}(d,t,e,n,{counts:{...r},forceElement:o}),o&&(o=!1),a=!0)}));n.tagSupport.templater.global.subscriptions.push(d)}function Te(e,t,n,r){if(!e.getAttribute)return;"TEXTAREA"===e.nodeName&&function(e,t,n){const r=e.value;if(r.search(Ce)>=0){const o=r.match(/__tagvar(\d{1,4})/),a="{"+(o?o[0]:"")+"}";e.value="",e.setAttribute("text-var-value",a);const s=(t,n,r)=>e.value=r;ae("text-var-value",a,e,t,n,s)}}(e,n,r);let o=t.counts.added;o=function(e,t){const n=e.oninit;if(!n)return t.added;const r=n.tagFunction;if(!r)return t.added;const o=r.tagFunction;return o?(o({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-o,e.children&&new Array(...e.children).forEach(((e,o)=>Te(e,{...t,counts:t.counts},n,r)))}function Ae(e,t,n,r,o){if(!o||"TEMPLATE"===e.tagName)return{clones:[],tagComponents:[]};const a=r.counts,s=[],l=[];return new Array(...o).forEach((e=>{const{clones:o,tagComponent:i}=$e(e,t,n,a,r);s.push(...o),i?l.push(i):e.children&&new Array(...e.children).forEach(((e,o)=>{if(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")}(e)){const{tagComponent:o}=$e(e,t,n,a,r);o&&l.push(o)}const{clones:i,tagComponents:c}=Ae(e,t,n,r,e.children);s.push(...i),l.push(...c)}))})),{clones:s,tagComponents:l}}function je(e,t,n,r,o){const a=[],s=[],l=n.interpolation,i=e.children[0].content.children;if(l.keys.length){const{clones:n,tagComponents:l}=Ae(e,t,r,o,i);a.push(...n),s.push(...l)}return ue(e,t,r),Be(i,t,r),{clones:a,tagComponents:s}}function Be(e,t,n){new Array(...e).forEach((e=>{ue(e,t,n),e.children&&Be(e.children,t,n)}))}const Ne="__tagvar",Re="--"+Ne+"--",Ve=new RegExp(Ne,"g"),Pe=new RegExp(Re,"g");class Xe{strings;values;version=0;isTag=!0;hasLiveElements=!1;clones=[];childTags=[];tagSupport;lastTemplateString=void 0;ownerTag;appElement;memory={};constructor(e,t){this.strings=e,this.values=t}key(e){return this.memory.arrayValue=e,this}destroy(e={stagger:0,byParent:!1}){const t=this.tagSupport,n=t.templater.global,r=t.subject,o=n.insertBefore;"TEMPLATE"===o.nodeName&&n.placeholder&&!("arrayValue"in this.memory)&&(e.byParent||me(this,o)),delete n.placeholder,t&&function(e,t){b.tagUse.forEach((n=>n.beforeDestroy(e,t)))}(t,this);const a=e.byParent?[]:Fe(this.childTags);let s;if(a.forEach((e=>{const t=e.tagSupport.templater.global;delete t.newest,t.deleted=!0})),delete n.oldest,delete n.newest,n.deleted=!0,this.hasLiveElements=!1,delete r.tag,this.destroySubscriptions(),this.ownerTag&&(this.ownerTag.childTags=this.ownerTag.childTags.filter((e=>e!==this))),e.byParent)this.destroyClones();else{const{stagger:t,promise:n}=this.destroyClones(e);e.stagger=t,n&&(s=n)}return s=s?s.then((async()=>{const e=a.map((e=>e.destroy({stagger:0,byParent:!0})));return Promise.all(e)})):Promise.all(a.map((e=>e.destroy({stagger:0,byParent:!0})))),s.then((()=>e.stagger))}destroySubscriptions(){const e=this.tagSupport.templater.global;e.subscriptions.forEach((e=>e.unsubscribe())),e.subscriptions.length=0}destroyClones({stagger:e}={stagger:0}){const t=this.clones.map((t=>this.checkCloneRemoval(t,e))).filter((e=>e));return this.clones.length=0,t.length?{promise:Promise.all(t),stagger:e}:{stagger:e}}checkCloneRemoval(e,t){let n;const r=e;r.ondestroy&&(n=function(e,t){const n=e.ondestroy;if(!n)return;const r=n.tagFunction;if(!r)return;const o=r.tagFunction;return o?o({target:e,stagger:t}):void 0}(r,t));const o=()=>{e.parentNode?.removeChild(e);const t=this.ownerTag;t&&(t.clones=t.clones.filter((t=>t!==e)))};return n instanceof Promise?n.then(o):(o(),n)}getTemplate(){const e=function(e){const t=function(e){const t=[];return{string:e.replace(ge,((e,n)=>{if(e.startsWith("<"))return e;const r=n.substring(1,n.length-1);return t.push(r),`<template interpolate end id="${r}"></template>`})),keys:t}}(e);return t.string=t.string.replace(Pe,Ne),t}(this.strings.map(((e,t)=>(e.replace(Ve,Re)+(this.values.length>t?`{${Ne}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=e.string,{interpolation:e,string:e.string,strings:this.strings,values:this.values,context:this.tagSupport.templater.global.context||{}}}isLikeTag(e){return j(this,e)}updateByTag(e){this.tagSupport.templater.global.newest=e,this.updateConfig(e.strings,e.values)}updateConfig(e,t){this.strings=e,this.updateValues(t)}update(){return this.updateContext(this.tagSupport.templater.global.context)}updateValues(e){return this.values=e,this.updateContext(this.tagSupport.templater.global.context)}updateContext(e){return this.strings.map(((t,n)=>{const r=Ne+n,o=this.values.length>n,a=this.values[n];if(r in e)return function(e,t,n){const r=e[t],o=r.tag;if(o){const e=o.tagSupport.templater;n&&n.global!==e.global&&s(n)&&function(e,t){const n=e.wrapper.original,r=t.wrapper?.original;n===r&&(t.global=e.global)}(e,n)}i(n)||r.set(n)}(e,r,a);o&&(e[r]=function(e,t,n){return s(t)||t instanceof Function?new U(t):e?l(t)?(t.ownerTag=n,new U(t)):i(t)?t:new U(t):void 0}(o,a,this))})),e}getAppElement(){let e=this;for(;e.ownerTag;)e=e.ownerTag;return e}rebuild(){const e=this.tagSupport.templater.global.insertBefore;if(!e){const e=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw e.tag=this,e}this.buildBeforeElement(e,{forceElement:!0,counts:{added:0,removed:0}})}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){const n=this.tagSupport.subject,r=this.tagSupport.templater.global;r.insertBefore=e,r.placeholder||function(e){const t=e.insertBefore,n=e.placeholder=document.createTextNode(""),r=t.parentNode;r.insertBefore(n,t),r.removeChild(t)}(r);const o=r.placeholder;r.oldest=this,r.newest=this,n.tag=this,this.hasLiveElements=!0,this.clones.length&&this.clones.forEach((e=>this.checkCloneRemoval(e,0))),r.insertBefore=e;const a=this.update(),s=this.getTemplate(),l=document.createElement("div");l.id="tag-temp-holder",l.innerHTML=`<template id="temp-template-tag-wrap">${s.string}</template>`;const{tagComponents:i}=je(l,a,s,this,{forceElement:t.forceElement,counts:t.counts});ze(l,o,this,a,t);let c=t.forceElement;i.forEach((e=>{Ee(e.insertBefore,e.subject,e.ownerTag,t.counts,{isForceElement:c}),ze(l,e.insertBefore,e.ownerTag,a,t)}))}}function ze(e,t,n,r,o){const a=function(e,t){const n=[];let r=e.children[0].content.firstChild;for(;r;){const e=r.nextSibling;ee(r,t),n.push(r),r=e}return n}(e,t);return a.length?(a.forEach((e=>Te(e,o,r,n))),n.clones.push(...a),a):a}function Fe(e,t=[]){for(let n=e.length-1;n>=0;--n){const r=e[n];t.push(r),e.splice(n,1),Fe(r.childTags,t)}return t}function Me(e,...t){return new Xe(e,t)}const Le=Z((({name:e,array:t,included:n,columnNames:r,allColumnNames:o})=>{let a=x(!1)((e=>[a,a=e])),s=x(!1)((e=>[s,s=e])),l=x(void 0)((e=>[l,l=e]));const i=k([]);return Me`
    <a onclick=${()=>{if(n)return r.length=0,void r.push(...r.filter((t=>t!==e)));r.push(e)}} style="cursor:pointer;">
      <input type="checkbox" ${n&&"checked"} />&nbsp;${e}
    </a>

    <div
      onmouseover=${()=>a=!0}
      onmouseout=${()=>a=!1}
    >
      <a style.visibility=${s||a?"visible":"hidden"}
        onclick=${()=>s=!s}
      >⚙️&nbsp;</a>
      
      ${n&&r.length!==o.length?Me`
        <a style="color:blue;" onclick=${()=>{r.length=0,r.push(...o)}}><small>all</small></a>
      `:Me`
        <a style="color:blue;" onclick=${()=>{r.length=0,r.push(e)}}><small>only</small></a>
      `}
    </div>

    ${s&&Me`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${l&&Me`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${e=>{return n=l,r=e.target.value,n.stringFormula=r,void(n.value=Oe(r,{array:t}));var n,r}}
            >${l.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${i.map((e=>Me`
                <div>
                  <div>
                    <strong>${e.title}</strong>
                    <a onclick=${()=>l=e}>✏️</a>
                  </div>
                  <div>${e.value}</div>
                </div>
              `.key(e)))}
          </div>
          <button type="button" onclick=${()=>{const n=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;i.push({title:"sum",stringFormula:n,value:Oe(n,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function Oe(e,t={}){return n=e,r={isNaN,Math,Number,Date,...t},n?(r=new Proxy(r,{has:()=>!0}),new Function("with(this) { return ("+n+")}").call(r)):n;var n,r}const De=Z((({array:e,showAll:t,showKids:n,toggleColumnDialog:r,columnNames:o,formatChange:a,allowMaximize:s})=>Me`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&Me`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${o.map((e=>Me`
                <th
                  style.cursor=${r&&"pointer"}
                  onclick=${r}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>Me`
            <tr>
              ${o.map((r=>Me`
                <td>
                  ${Ge({value:e[r],showLevels:0,showAll:t,showKids:t||n,isRootDump:!1,formatChange:a,allowMaximize:s})}
                </td>
              `.key(e[r])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),Ye=Z((({array:e,showLevels:t,showAll:n,showKids:r,columnNames:o,formatChange:a,toggleColumnDialog:s,allowMaximize:l})=>Me`
    ${e.map(((e,i)=>{return Me`${Ge({value:(c=e,d=o,["string","number","boolean"].includes(typeof c)?c:function(e,t){const n={};return t.forEach((t=>{e.hasOwnProperty(t)&&(n[t]=e[t])})),n}(c,d)),showLevels:t,showAll:n,showKids:n||r,isRootDump:!1,formatChange:a,onHeaderClick:s,allowMaximize:l})}`.key({item:e,index:i});var c,d}))}
  `));const Ke=Z((({showLevels:e,showAll:t,showKids:n,array:r,arrayView:o,formatChange:a,allowMaximize:s})=>{const l=r.length?Object.keys(r[0]):[];let i=x(l)((e=>[i,i=e])),c=x(!1)((e=>[c,c=e])),d=k("columnDialog"+performance.now());const u=()=>{c=!c;const e=document.getElementById(d);c?e.showModal():e.close()};return Me`
    ${"table"===o?De({showAll:t,showKids:n,array:r,toggleColumnDialog:u,columnNames:i,formatChange:a}):Ye({array:r,showLevels:e,showAll:t,showKids:n,formatChange:a,columnNames:i,toggleColumnDialog:u,allowMaximize:s})}

    <dialog id=${d} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
      onclose=${()=>{c=!1}}
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${l.map((e=>{const t=i.includes(e);return Me`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${Le({name:e,array:r,included:t,columnNames:i,allColumnNames:l})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${u}>🅧 close</button>
      </div>
    </dialog>
  `})),He=Z((({key:e,value:t,show:n,showAll:r,showKids:o,showLevels:a,formatChange:s,allowMaximize:l})=>{let i=x(!1)((e=>[i,i=e])),c=x(void 0)((e=>[c,c=e]));S([n],(([e])=>i=e));let d=x(!1)((e=>[d,d=e]));const u=k((()=>"maximize-dump-"+performance.now())),g=()=>{d=!d,d&&document.getElementById(u).showModal()},p=n=>Me`
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;"+(i?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a style="flex-grow:1" onclick=${()=>{i=!i}}>
        <strong>${e}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===c?"bold":""}
          onclick=${()=>c="table"===c?void 0:"table"}>${"table"===c?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${t.length}]</sup>
      ${n&&Me`
        &nbsp;<a onclick=${g}>⏹️</a>
      `}
    </div>
  `,f={showLevels:a,showAll:r,showKids:o,formatChange:s,array:t,arrayView:c,allowMaximize:l},h=Me`
    <!-- array displays wrap -->
    <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
      ${Ke(f)}
    </div>
  `;return Me`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    ${p(l)}
    ${(r||i||o||null==i&&a>0)&&h}
  </div>

  <!-- maximize -->
  <dialog id=${u} style="padding:0"
    onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
    ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
    ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
    ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
  >
    <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
      ${d&&p(!1)}
    </div>
    
    ${d&&Me`
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${Ke({...f,allowMaximize:!1})}
      </div>
    `}

    <div style="padding:.25em">
      <button type="button" onclick=${()=>document.getElementById(u).close()}>🅧 close</button>
    </div>
  </dialog>

  `}));function Ue(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function _e({key:e,value:t,onHeaderClick:n}){return Me`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&Me`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${n&&"pointer"}
          onclick=${n}
        >${e}</div>
      `}
      ${!t.search||"https://"!==t.slice(0,8)&&"http://"!==t.slice(0,7)?Ie(t):We(t)}
    </div>
  `}const Ie=Z((e=>{const t=[void 0,null,"null"].includes(e),n=e,r=!isNaN(n)&&n>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(n):"";let o=x(0)((e=>[o,o=e]));return Me`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{o=Date.now()}}
      onmouseup=${t=>{if(Date.now()-o>300)return t.preventDefault(),t.stopPropagation(),!0;Ue(e)}}
      style="cursor:pointer;"
      style.background-color=${t?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||t&&"white"||""}
      title=${r}
    >${(null===e?"null":!1===e&&"false")||void 0===e&&"undefined"||e}</div>
  `})),We=e=>Me`
    <a onclick=${()=>Ue(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,Je=Z((({key:e,showKids:t,show:n,showLevels:r,value:o,showAll:a,onHeaderClick:s,formatChange:l,allowMaximize:i})=>{let c=x(!1)((e=>[c,c=e])),d=x(!1)((e=>[d,d=e]));const u=k((()=>"maximize-dump-"+performance.now()));S([n],(([e])=>c=e));const g=!e||t||c||null==c&&r>0,p=()=>{d=!d,d&&document.getElementById(u).showModal()},f=t=>Me`
    <div style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;"+(c?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a onclick=${()=>c=!c}>
        <strong>${e}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(o).length}}
        </sup>
      </a>
      ${t&&Me`
        &nbsp;<a onclick=${p}>⏹️</a>
      `}
    </div>
  `,h=e=>Me`
    <div style="display:flex;flex-wrap:wrap">
      ${Object.entries(o).map((([n,o])=>Me`
        <!-- recurse -->
        <div class="child-margin-xxs"
          style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(o&&"object"==typeof o?"flex-grow:1;":"flex: 1 1 10em;")}
        >
          ${Ge({value:o,key:n,show:c,showAll:a,showLevels:r-1,showKids:a||t,isRootDump:!1,formatChange:l,onHeaderClick:s,allowMaximize:e})}
      `.key([n,o])))}
    </div>
  `;return Me`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&f(i)}
        ${g&&h(i)}

        <!-- maximize -->
        <dialog id=${u} style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
            ${d&&f(!1)}
          </div>
          
          ${d&&h(!1)}

          <div style="padding:.25em">
            <button type="button" onclick=${()=>document.getElementById(u).close()}>🅧 close</button>
          </div>
        </dialog>
      </div>
    </div>
  `})),qe=Z((({value:e,format:t,showAll:n,formatChange:r,showAllChange:o})=>Me`
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
          ${!t||"flex"===t&&Me`
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
            onclick=${()=>function(e){Ue(JSON.stringify(e,null,2))}(e)}
          >copy</a>
        </div>
      </div>
    </div>
  `)),Ge=Z((({key:e,value:t,showKids:n=!1,showLevels:r=-1,showAll:o=!1,format:a="flex",formatChange:s=(e=>a=e),isRootDump:l=!0,onHeaderClick:i,allowMaximize:c})=>{l&&void 0===c&&(c=!0);const d=null===t?"null":typeof t;let u=x(!1)((e=>[u,u=e]));$((e=>[a,a=e])),$((e=>[o,o=e]));let g=x(void 0)((e=>[g,g=e]));return function(e){const t=b.memory.initCurrentTemplater;t.global.init||(t.global.init=e,e())}((()=>{(r=r>=0&&r||(-1===r&&!e&&t&&t instanceof Object?2:0))>0&&(u=!0)})),[null,void 0].includes(t)?_e({key:e,value:d,onHeaderClick:i}):["boolean","number","string"].includes(d)?_e({key:e,value:t,onHeaderClick:i}):function(){if(null===t)return n?_e({key:e,value:"null",onHeaderClick:i}):Me``;const d=(!a||"flex"===a)&&t.push&&t.pop;return Me`
      <div class="taggedjs-dump">
        ${l&&qe({value:t,format:a,showAll:o,showAllChange:e=>o=e,formatChange:s})}
        ${"json"===a&&Me`
          <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
          >${JSON.stringify(t,null,2)}</textarea>
        `||d&&He({key:e,value:t,show:u,showAll:o,showKids:n,showLevels:r,formatChange:s,allowMaximize:c})||Je({key:e,show:u,showKids:n,showLevels:r,value:t,showAll:o,formatChange:s,onHeaderClick:i,allowMaximize:c})}
      </div>
    `}()}));var Qe=t.B;export{Qe as dump};