var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function r(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function o(e){return n(e,new WeakMap)}function n(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,r),Array.isArray(e))for(let o=0;o<e.length;o++)r[o]=n(e[o],t);else for(const o in e)e.hasOwnProperty(o)&&(r[o]=n(e[o],t));return r}function a(e,t){return l(e,t,new WeakMap)}function l(e,t,r){if(e===t||(n=t,(o=e)instanceof Function&&n instanceof Function&&o.toString()===n.toString()))return!0;var o,n;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;const a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;if(r.has(e))return!0;r.set(e,0);for(const o of a)if(!s.includes(o)||!l(e[o],t[o],r))return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!l(e[o],t[o],r))return!1}else if(Array.isArray(e)||Array.isArray(t))return!1;return!0}function s(e){return!0===e?.isTemplater}function i(e){return!0===e?.isTag}function c(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function u(e){return e instanceof Array&&e.every((e=>i(e)))}e.d(t,{B:()=>Ie});class d{templater;subject;isApp=!0;propsConfig;memory={state:{newest:[]}};constructor(e,t){this.templater=e,this.subject=t;const r=this.templater.children,n=this.templater.props,a=o(n);this.propsConfig={latest:n,latestCloned:a,clonedProps:a,lastClonedKidValues:r.value.map((e=>g(e.values)))},i(n)||(this.propsConfig.latestCloned=o(a),this.propsConfig.clonedProps=this.propsConfig.latestCloned)}}function g(e){return e.map((e=>{const t=e;return i(t)?g(t.values):s(t)?o(t.props):u(t)?g(t):o(e)}))}class p extends d{ownerTagSupport;templater;subject;isApp=!1;constructor(e,t,r){super(t,r),this.ownerTagSupport=e,this.templater=t,this.subject=r}}function f(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};f.tagUse.push(t)}f.tagUse=[],f.memory={};class h{value;isSubject=!0;subscribers=[];constructor(e){this.value=e}subscribe(e){this.subscribers.push(e),b.globalSubs.push(e);const t=b.globalSubCount$;b.globalSubCount$.set(t.value+1);const r=()=>{r.unsubscribe()};return r.unsubscribe=()=>{m(this.subscribers,e),m(b.globalSubs,e),b.globalSubCount$.set(t.value-1),r.unsubscribe=()=>{}},r}set(e){this.value=e,this.subscribers.forEach((t=>{t.value=e,t(e)}))}next=this.set}function m(e,t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}const b=h;b.globalSubs=[],b.globalSubCount$=new h,b.globalSubCount$.set(0);class w extends h{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value),t}}function y(e,t){return e.strings.length===t.strings.length&&(!!e.strings.every(((e,r)=>t.strings[r]===e))&&(e.values.length===t.values.length&&!!t.values.every(((t,r)=>{const o=e.values[r];return!(t instanceof Function&&o instanceof Function)||!(t.toString()!==o.toString())}))))}function v(e,t){const r=e.tagSupport;if(t!=e.tagSupport.subject)throw new Error("fff - subjects do not match");delete t.tag,delete e.tagSupport.subject.tag,e.tagSupport.templater.global.oldest.destroy(),S(r),e.tagSupport.templater.global.context={}}function S(e){delete e.templater.global.oldest,delete e.templater.global.newest}class E{props;children;isTag=!1;tagged;wrapper;global={newestTemplater:this,context:{},providers:[],renderCount:0,deleted:!1};tagSupport;constructor(e,t){this.props=e,this.children=t}isTemplater=!0}function C(e,t,r,o){const n=e,a=t?.ownerTag||o;if(t)n.memory.state.newest=[...t.tagSupport.memory.state.newest],n.templater.global=t.tagSupport.templater.global,function(e,t){f.tagUse.forEach((r=>r.beforeRedraw(e,t)))}(n,t);else{if(!n)throw new Error("63521");!function(e,t){f.tagUse.forEach((r=>r.beforeRender(e,t)))}(n,a),f.memory.providerConfig.ownerTag=a}const l=n.templater,s=l.wrapper(n,r);if(function(e,t){f.tagUse.forEach((r=>r.afterRender(e,t)))}(n,s),!t||y(t,s)||(v(t,r),delete l.global.oldest,delete l.global.newest,delete r.tag,l.global.insertBefore=t.tagSupport.templater.global.insertBefore),s.ownerTag=a,n.templater.global.newest=s,n.templater.global.oldest&&!n.templater.global.oldest.hasLiveElements)throw new Error("56513540");if(n.templater.global.oldest&&!n.templater.global.oldest.hasLiveElements)throw new Error("5555 - 10");return s}function x(e){e.tagSupport.templater.global.providers.filter((e=>!a(e.instance,e.clone))).forEach((t=>{!function(e,t){k(e,t).forEach((({tag:e,renderCount:t,provider:r})=>{e.tagSupport.templater.global.deleted||t===e.tagSupport.templater.global.renderCount&&(r.clone=o(r.instance),$(e.tagSupport,!1))}))}(e.getAppElement(),t),t.clone=o(t.instance)}))}function k(e,t,r=[]){const o=e.tagSupport.templater.global,n=o.providers.find((e=>e.constructMethod===t.constructMethod));return n&&r.push({tag:e,renderCount:o.renderCount,provider:n}),e.childTags.forEach((e=>k(e,t,r))),r.forEach((({tag:e})=>{if(e.tagSupport.templater.global.deleted)throw new Error("do not get here - 0")})),r}function $(e,t){const r=e.templater.global;if(i(e.templater)){const e=r.newest.ownerTag;return++r.renderCount,$(e.tagSupport,!0)}const o=e.subject,n=e.templater,l=o.tag,s=l?.tagSupport.templater.global.newest;let c,u=!1;t&&s&&(c=s.ownerTag,c)&&(u=!a(n.props,s.tagSupport.propsConfig.latestCloned));const d=r.newest?.tagSupport;if(!n.global.oldest)throw new Error("already causing trouble");const g=function(e,t,r,o){if(o.tag&&(t.global=o.tag.tagSupport.templater.global),!e.hasLiveElements)throw new Error("1080");const n=r.templater.global.renderCount;x(e);const a=r.templater.global.newest;if(n!==r.templater.global.renderCount)return e.updateByTag(a),a;const l=r.templater||t,s=function(e,t,r){const o=e.tag||t.global.newest||t.global.oldest;if(!t.global.oldest)throw new Error("issue before event redraw");const n=t.tagSupport;if(!t.tagSupport)throw new Error("need tag support");if(!n.templater.global.oldest)throw new Error("33333");return C(n,o,e,r)}(o,t,e.ownerTag),i=r.templater.global.oldest||e;if(s.tagSupport.templater.global.oldest=i,s!=s.tagSupport.templater.global.newest)throw new Error("newest mismatched 22");if(!s.tagSupport.templater.global.oldest)throw new Error("8888888 - 0");if(!l.global.oldest)throw new Error("8888888");return y(a,s)&&i.updateByTag(s),s}(n.global.oldest,n,d,o);return c&&u?($(c.tagSupport,!0),g):g}function T(e,t){if(e.isChildOverride)return e;if(!t.ownerTag&&!t.tagSupport.templater.global.isApp)throw new Error("no ownerTag issue here");const r=(r,o)=>A(e,t,r,o);return r.tagFunction=e,r}function A(e,t,r,o){const n=t.tagSupport,a=n.templater.global.renderCount,l=e.bind(r)(...o);return a!==n.templater.global.renderCount||n.templater.global.deleted?l instanceof Promise?l.then((()=>"promise-no-data-ever")):"no-data-ever":($(n,!0),l instanceof Promise?l.then((()=>(n.templater.global.deleted||$(n,!0),"promise-no-data-ever"))):"no-data-ever")}function j(e,t,r){const o=function(e,o){if("object"!=typeof e)return e;const n=e;return Object.entries(n).forEach((([e,o])=>{if(o instanceof Function){if(n[e].original)return;return n[e]=(...e)=>function(e,o){const n=t.global.renderCount,a=e(...o);if(t.global.renderCount>n)throw new Error("already rendered");const l=$(r.templater.global.newest.tagSupport,!0);if(l.tagSupport.templater.global.newest!=l)throw new Error("newest assignment issue?");return a}(o,e),void(n[e].original=o)}})),n}(i(e)?0:e);return o}const N=[];let V=0;function R(e){const t=function(t,r){(i(t)||u(t))&&(r=t,t=void 0);const{childSubject:n,madeSubject:a}=function(e){if(c(e))return{childSubject:e,madeSubject:!1};if(u(e))return{childSubject:new w(e),madeSubject:!0};const t=e;return t?(t.arrayValue=0,{childSubject:new w([t]),madeSubject:!0}):{childSubject:new w([]),madeSubject:!0}}(r);n.isChildSubject=!0;const l=new E(t,n),s=function(e,t){const r=function(n,a){const l=n.templater.global;l.newestTemplater=e,++l.renderCount,e.global=l;const s=e.children,i=l.oldest?.tagSupport.templater.children.lastArray;i&&(s.lastArray=i);const c=r.original,u=e.global.oldest;if(u&&!u.hasLiveElements)throw new Error("issue already 22");let d=e.props;const g=n.ownerTagSupport,f=g?.templater,h=f?.global.newest,m=h?.tagSupport.templater;if(h&&!m)throw new Error("what to do here?");let b=j(d,m,n.ownerTagSupport);const w=o(d),y=c(b,s);return y.tagSupport=new p(n.ownerTagSupport,e,a),y.tagSupport.propsConfig={latest:d,latestCloned:w,clonedProps:w,lastClonedKidValues:y.tagSupport.propsConfig.lastClonedKidValues},y.tagSupport.memory=n.memory,t&&s.value.forEach((e=>{e.values.forEach(((t,r)=>{if(!(t instanceof Function))return;const o=e.values[r];o.isChildOverride||(e.values[r]=function(...e){const r=y.ownerTag;A(t,r,this,e)},o.isChildOverride=!0)}))})),y};return r}(l,a);return s.original=e,l.tagged=!0,l.wrapper=s,l};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=N,e.setUse=f,e.tagIndex=V++}(e),N.push(e),t}function L(e,t){t.parentNode.insertBefore(e,t)}function B(e,t,r){const o=e.split(".");if("style"===o[0]&&(r.style[o[1]]=t),"class"===o[0])return o.shift(),void(t?o.forEach((e=>r.classList.add(e))):o.forEach((e=>r.classList.remove(e))))}const F=/^\s*{__tagvar/,P=/}\s*$/;function O(e){return e&&e.search(F)>=0&&e.search(P)>=0}function D(e,t,r,o,n,a){if(O(t))return function(e,t,r,o,n,a){return z(e,K(o,t),r,n,a)}(e,t,r,o,n,a);if(O(e)){let t;const l=K(o,e).subscribe((e=>{!function(e,t,r,o,n){if(t&&t!=e&&("string"==typeof t?r.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>r.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>z(e,t,r,o,n)));else{if(!e.length)return;z(e,"",r,o,n)}}(e,t,r,n,a),t=e}));return n.cloneSubs.push(l),void r.removeAttribute(e)}return M(e)?B(e,t,r):void 0}function K(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function z(e,t,r,o,n){const a=M(e);if(t instanceof Function){const o=function(...e){return t(r,e)};r[e].action=o}if(c(t)){r.removeAttribute(e);const l=t=>(t instanceof Function&&(t=T(t,o)),function(e,t,r,o,n){if(e instanceof Function){const o=function(...r){return e(t,r)};return o.tagFunction=e,void(t[r]=o)}if(o)return void B(r,e,t);if(e)return void n(t,r,e);void 0===e||!1===e||null===e?t.removeAttribute(r):n(t,r,e)}(t,r,e,a,n)),s=t.subscribe(l);o.cloneSubs.push(s)}else n(r,e,t)}function M(e){return e.search(/^(class|style)(\.)/)>=0}function X(e,t,r){e.setAttribute(t,r)}function U(e,t,r){e[t]=r}function _(e,t,r){const o=e.getAttributeNames();let n=X;o.forEach((o=>{"INPUT"===e.nodeName&&"value"===o&&(n=U),D(o,e.getAttribute(o),e,t,r,n),n=X}))}const H=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function Y(e,t,r,o,n){if(!0!==e.tagged){let t=e.wrapper.original.name||e.wrapper.original.constructor?.name;"Function"===t&&(t=void 0);const r=t||e.wrapper.original.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}e.tagSupport||(e.tagSupport=new p(o.tagSupport,e,t)),e.global.insertBefore=r;let a=t.tag;if(f.memory.providerConfig.ownerTag=o,!a||n.forceElement){const r=o.clones.map((e=>e));if(a=C(e.tagSupport,t.tag,t,o),a.tagSupport.templater.global.newest!=a)throw new Error("mismatch result newest");if(e.global.newest=a,o.clones.length>r.length){const e=o.clones.filter((e=>!r.find((t=>t===e))));a.clones.push(...e)}if(o.childTags.find((e=>e===a)))throw new Error("about to reattach tag already present");o.childTags.push(a)}!function(e,t,r,{counts:o,forceElement:n}){if(!r.parentNode)throw new Error("before here processTagResult");const a=t,l=a.tag,s=l?.tagSupport.templater.global.oldest||void 0;if(s&&s){if(s.isLikeTag(e)){if(t instanceof Function){const e=t(s.tagSupport);if(s.updateByTag(e),!e.tagSupport.templater.global.oldest)throw new Error("maybe 0");if(a.tag=e,!e.hasLiveElements)throw new Error("44444 - 2");return}if(s.updateByTag(e),!e.tagSupport.templater.global.oldest)throw new Error("maybe 1");if(a.tag=e,!e.hasLiveElements)throw new Error("44444 - 3");return}throw v(s,t),new Error("585 - think we never get here")}e.buildBeforeElement(r,{counts:o,forceElement:n,test:!1})}(a,t,r,n)}class I extends Error{details;constructor(e,t,r={}){super(e),this.name=I.name,this.details={...r,errorCode:t}}}class W extends I{constructor(e,t){super(e,"array-no-key-error",t),this.name=W.name}}class J extends I{constructor(e,t){super(e,"state-mismatch-error",t),this.name=J.name}}function q(e,t){S(e.tagSupport),e.destroy({stagger:t.removed++})}function G(e,t,r,o,n){const a=o.clones;let l=e.lastArray=e.lastArray||[];e.template=r;let s=0;l=e.lastArray=e.lastArray.filter(((e,r)=>{const o=t.length-1<r-s,a=t[r-s],i=a?.arrayValue;if(o||!Z(i,e.tag.arrayValue)){const e=l[r];return q(e.tag,n.counts),e.deleted=!0,++s,++n.counts.removed,!1}return!0}));const i=r||e.value.insertBefore||r.clone;return t.forEach(((e,r)=>{const a=l[r],s=a?.tag.tagSupport,c=new w({});oe(e,o,c),s&&(e.tagSupport.templater.global=s.templater.global,s.templater.global.newest=e);const u=e.arrayValue;if(u?.isArrayValueNeverSet){const r={template:e.getTemplate().string,array:t,ownerTagContent:o.lastTemplateString},n="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(n,r),new W(n,r)}if(l.length>r){if(Z(a.tag.arrayValue,e.arrayValue))return e.tagSupport=e.tagSupport||a.tag.tagSupport,a.tag.tagSupport.templater.global.oldest.updateByTag(e),[];throw Q(i,e,r,n,l,!0),new Error("item should be back")}Q(i,e,r,n,l,!0),o.childTags.push(e)})),a}function Q(e,t,r,o,n,a){const l={tag:t,index:r};n.push(l);const s={added:o.counts.added+r,removed:o.counts.removed},i=e;if(!i.parentNode)throw new Error("issue adding array item");t.buildBeforeElement(i,{counts:s,forceElement:o.forceElement,test:a})}function Z(e,t){return e===t||!!(e instanceof Array&&t instanceof Array&&e.length==t.length)&&e.every(((e,r)=>e==t[r]))}function ee(e,t,r){t.template=r;const o=t.clone||r;if(t.lastValue===e)return;t.lastValue=e;const n=function(e,t){const r=t.parentNode;void 0!==e&&!1!==e&&null!==e||(e="");const o=document.createTextNode(e);return r.insertBefore(o,t),r.removeChild(t),o}(e,o);t.clone=n}var te;function re(e,t,r,o){if(!e.tagSupport){if(!i(e))throw new Error("issue non-tag here");if(oe(e,o,t),o.childTags.find((t=>t===e)))throw new Error("about to reattach tag already present - 5");o.childTags.push(e)}e.ownerTag=o,t.template=r,e.buildBeforeElement(r,{counts:{added:0,removed:0},forceElement:!0,test:!1})}function oe(e,t,r){if(!t)throw new Error("no owner error");const o={global:{renderCount:0,providers:[],context:{}},children:new w([]),props:{},isTag:!0};e.tagSupport=new p(t.tagSupport,o,r),o.global.oldest=e,o.global.newest=e,o.tagSupport=e.tagSupport,e.ownerTag=t}!function(e){e.tag="tag",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(te||(te={}));const ne=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function ae(e,t,r,o){if(e.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0},test:!1}),e.tagSupport.templater.global.oldest=e,e.tagSupport.templater.global.newest=e,r.templater.global.oldest=e,r.templater.global.newest=e,!e.tagSupport.templater.global.oldest)throw new Error("maybe 5");if(o.tag=e,!e.hasLiveElements)throw new Error("44444 - 5")}function le(e,t,r,o){const n=e,l=s(t),d=e.template||n.tag?.tagSupport.templater.global.insertBefore||e.clone;if(function(e,t){const r=e.lastArray;if(r&&!u(t))return r.forEach((({tag:e})=>q(e,{added:0,removed:0}))),delete e.lastArray,1;const o=e,n=o.tag;if(n){const r=i(t);return i(e.value)&&r?!y(t,n)&&(v(n,o),2):!s(t)&&(v(n,o),3)}const a=e,l="lastValue"in a,c=a.lastValue;l&&c!==t&&function(e,t){const r=t.clone,o=r.parentNode;o.insertBefore(e,r),o.removeChild(r),delete t.clone,delete t.lastValue}(a.template,a)}(e,t),l){const l=t;return n.tag?(function(e,t,r,o){let n=r.tag;const l=n.tagSupport.templater.wrapper,s=t.wrapper;let i=!1;if(t.global.oldest&&!t.global.oldest.hasLiveElements)throw new Error("88893434");l&&s&&(i=l.original===s.original);const c=n.tagSupport,u=c.templater.global.insertBefore,d=u?.parentNode?u:o;if(!d.parentNode)throw new Error("stop here no parent node update existing tag");if(!i)return v(c.templater.global.oldest,r),void Y(t,r,d,e,{forceElement:!1,counts:{added:0,removed:0}});if(t.tagSupport||(t.tagSupport=new p(c.ownerTagSupport,t,r)),!function(e,t,r){const o=e===t,n=e.propsConfig===t.propsConfig;if(o)throw new Error("sameSupport - 22");if(n)throw new Error("samePropConfig - 22");if(t.templater.isTag||e.templater.isTag||r.isTag)throw new Error("trying to compare a basic tag");const l=function(e,t){let r=e,o=t;if("object"==typeof e){if(!t)return 3;if(r={...e},o={...t||{}},!Object.entries(r).every((([e,t])=>{let n=o[e];return t instanceof Function?n instanceof Function&&(n.original&&(n=n.original),t.original&&(t=t.original),t.toString()===n.toString()&&(delete r[e],delete o[e],5)):4})))return 6}return!a(o,r)&&7}(r.props,e.propsConfig.latestCloned);if(l)return l;const s=function(e,t){const r=e.propsConfig.lastClonedKidValues,o=t.propsConfig.lastClonedKidValues,n=r.every(((e,t)=>{const r=o[t];return e.every(((e,t)=>e===r[t]))}));return!n&&9}(e,t);return s}(c,t.tagSupport,t))return;const g=t.global.oldest,f=t.global.newest;if(!f||!g)throw new Error("how no previous or oldest nor newest?");const h=$(t.tagSupport,!1);n=r.tag;const m=h.tagSupport.templater.global.oldest;if(!m)return ae(h,d,c,r);if(m&&t.children.value.length&&m.tagSupport.templater.children.set(t.children.value),f&&!g)throw new Error("bad elders");const b=i&&f.isLikeTag(h);if(f&&!g)throw new Error("bad elders");let w=c.templater.global.oldest;if(b){if(!h.tagSupport.templater.global.oldest)throw new Error("maybe 6");r.tag=h,g.updateByTag(h)}else i&&n&&(v(n,r),h.tagSupport.templater.global.context={}),w=void 0;w||ae(h,c.templater.global.insertBefore,c,r),c.templater.global.newest=h}(r,l,n,o),n):(Y(l,e,d,r,{forceElement:!0,counts:{added:0,removed:0}}),n)}const g=n.tag;if(g)return function(e,t,r,o){const n=r&&y(e,r),a=r&&r.getTemplate&&e.isLikeTag(r),l=r;if(l.tagSupport||oe(l,o,t),!n)return n||a?re(r,t,t.template,o):void ee(r,t,t.template);e.updateByTag(l)}(g,e,t,r),n;if(u(t))return G(e,t,d,r,{counts:{added:0,removed:0}}),e;if(t instanceof Function){const o=T(t,r);return e.set(o),e}return i(t)?(n.template=d,re(t,n,n.template,r),n):c(t)?t:(ee(t,e,d),n)}function se(e,t,r,o,n){const a=[];if(!e.hasAttribute("end"))return{clones:a};const l=e.getAttribute("id");if(l?.substring(0,pe.length)!==pe)return{clones:a};const i=t[l];return s(i.value)||u(i.value)?{clones:a,tagComponent:{variableName:l,ownerTag:r,subject:i,insertBefore:e}}:(ie(e,i,r,o,{isForceElement:n.forceElement}),{clones:a})}function ie(e,t,r,o,{isForceElement:n}){let a=!1;const l=t.subscribe((l=>{const c=t.clone;c&&c.parentNode&&(e=c),a?le(t,l,r,e):(function(e,t,r,o,n){const a=function(e){return s(e)?te.tagComponent:i(e)?te.tag:u(e)?te.tagArray:te.value}(e);switch(a){case te.tag:return void re(e,t,r,o);case te.tagArray:return G(t,e,r,o,n);case te.tagComponent:return void Y(e,t,r,o,n)}ee(e,t,r)}(l,t,e,r,{counts:{...o},forceElement:n}),n&&(n=!1),a=!0)}));r.cloneSubs.push(l)}function ce(e,t,r,o){if(!e.getAttribute)return;"TEXTAREA"===e.nodeName&&function(e,t,r){const o=e.value;if(o.search(ne)>=0){const n=o.match(/__tagvar(\d{1,4})/),a="{"+(n?n[0]:"")+"}";e.value="",e.setAttribute("text-var-value",a);const l=(t,r,o)=>e.value=o;D("text-var-value",a,e,t,r,l)}}(e,r,o);let n=t.counts.added;n=function(e,t){const r=e.oninit;if(!r)return t.added;const o=r.tagFunction;if(!o)return t.added;const n=o.tagFunction;return n?(n({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-n,e.children&&new Array(...e.children).forEach(((e,n)=>ce(e,{...t,counts:t.counts},r,o)))}function ue(e,t,r,o,n){if(!n||"TEMPLATE"===e.tagName)return{clones:[],tagComponents:[]};const a=o.counts,l=[],s=[];return new Array(...n).forEach((e=>{const{clones:n,tagComponent:i}=se(e,t,r,a,o);l.push(...n),i?s.push(i):e.children&&new Array(...e.children).forEach(((e,n)=>{if(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")}(e)){const{tagComponent:n}=se(e,t,r,a,o);n&&s.push(n)}const{clones:i,tagComponents:c}=ue(e,t,r,o,e.children);l.push(...i),s.push(...c)}))})),{clones:l,tagComponents:s}}function de(e,t,r,o,n,a=!1){const l=[],s=[],i=r.interpolation,c=e.children[0].content.children;if(i.keys.length){const{clones:r,tagComponents:a}=ue(e,t,o,n,c);l.push(...r),s.push(...a)}return _(e,t,o),ge(c,t,o),{clones:l,tagComponents:s}}function ge(e,t,r){new Array(...e).forEach((e=>{_(e,t,r),e.children&&ge(e.children,t,r)}))}const pe="__tagvar",fe="--"+pe+"--",he=new RegExp(pe,"g"),me=new RegExp(fe,"g");class be{isArrayValueNeverSet=!0}class we{strings;values;isTag=!0;hasLiveElements=!1;clones=[];cloneSubs=[];childTags=[];tagSupport;lastTemplateString=void 0;ownerTag;appElement;arrayValue=new be;constructor(e,t){this.strings=e,this.values=t}key(e){return this.arrayValue=e,this}destroy(e={stagger:0,byParent:!1}){if(!this.hasLiveElements)throw new Error("destroying wrong tag");const t=this.tagSupport,r=t.templater.global;t&&function(e,t){f.tagUse.forEach((r=>r.beforeDestroy(e,t)))}(t,this);const o=e.byParent?[]:ve(this.childTags);let n;if(o.forEach((e=>{const t=e.tagSupport.templater.global;delete t.newest,t.deleted=!0})),delete r.oldest,delete r.newest,r.deleted=!0,this.hasLiveElements=!1,delete t.subject.tag,this.destroySubscriptions(),this.ownerTag&&(this.ownerTag.childTags=this.ownerTag.childTags.filter((e=>e!==this))),e.byParent)this.destroyClones();else{const{stagger:t,promise:r}=this.destroyClones(e);e.stagger=t,r&&(n=r)}return n=n?n.then((async()=>{const e=o.map((e=>e.destroy({stagger:0,byParent:!0})));return Promise.all(e)})):Promise.all(o.map((e=>e.destroy({stagger:0,byParent:!0})))),n.then((()=>e.stagger))}destroySubscriptions(){this.cloneSubs.forEach((e=>e.unsubscribe())),this.cloneSubs.length=0}destroyClones({stagger:e}={stagger:0}){const t=this.clones.map((t=>this.checkCloneRemoval(t,e))).filter((e=>e));return this.clones.length=0,t.length?{promise:Promise.all(t),stagger:e}:{stagger:e}}checkCloneRemoval(e,t){let r;const o=e;o.ondestroy&&(r=function(e,t){const r=e.ondestroy;if(!r)return;const o=r.tagFunction;if(!o)return;const n=o.tagFunction;return n?n({target:e,stagger:t}):void 0}(o,t));const n=()=>{e.parentNode?.removeChild(e);const t=this.ownerTag;t&&(t.clones=t.clones.filter((t=>t!==e)))};return r instanceof Promise?r.then(n):(n(),r)}getTemplate(){const e=function(e){const t=function(e){const t=[];return{string:e.replace(H,((e,r)=>{if(e.startsWith("<"))return e;const o=r.substring(1,r.length-1);return t.push(o),`<template interpolate end id="${o}"></template>`})),keys:t}}(e);return t.string=t.string.replace(me,pe),t}(this.strings.map(((e,t)=>(e.replace(he,fe)+(this.values.length>t?`{${pe}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=e.string,{interpolation:e,string:e.string,strings:this.strings,values:this.values,context:this.tagSupport.templater.global.context||{}}}isLikeTag(e){return y(this,e)}updateByTag(e){if(!this.tagSupport.templater.global.oldest)throw new Error("no oldest here");if(!this.hasLiveElements)throw new Error("trying to update a tag with no elements on stage");if(this.tagSupport.templater.global.newest=e,!this.tagSupport.templater.global.context)throw new Error("issue back here");this.updateConfig(e.strings,e.values)}updateConfig(e,t){this.strings=e,this.updateValues(t)}update(){return this.updateContext(this.tagSupport.templater.global.context)}updateValues(e){return this.values=e,this.updateContext(this.tagSupport.templater.global.context)}updateContext(e){return this.strings.map(((t,r)=>{const o=pe+r,n=this.values.length>r,a=this.values[r];if(o in e)return function(e,t,r){const o=e[t],n=o.tag;if(n){const e=n.tagSupport.templater.wrapper;if(e&&s(r)){const t=e.original,o=r.wrapper?.original;t===o&&(r.global=n.tagSupport.templater.global)}}c(r)||o.set(r)}(e,o,a);n&&(e[o]=function(e,t,r){if(s(t))return new w(t);if(t instanceof Function)return new w(t);if(e){if(i(t)){if(t.ownerTag=r,r.childTags.find((e=>e===t)))throw new Error("about to reattach tag already present - 2");return new w(t)}return c(t)?t:new w(t)}}(n,a,this))})),e}getAppElement(){let e=this;for(;e.ownerTag;)e=e.ownerTag;return e}rebuild(){const e=this.tagSupport.templater.global.insertBefore;if(!e){const e=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw e.tag=this,e}this.buildBeforeElement(e,{forceElement:!0,counts:{added:0,removed:0},test:!1})}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0},test:!1}){if(!e.parentNode)throw new Error("no parent before removing clones");this.tagSupport.templater.global.oldest=this,this.tagSupport.templater.global.newest=this,this.tagSupport.subject.tag=this,this.hasLiveElements=!0,this.clones.length&&this.clones.forEach((e=>this.checkCloneRemoval(e,0))),this.tagSupport.templater.global.insertBefore=e;const r=this.update(),o=this.getTemplate();if(!e.parentNode)throw new Error("no parent before building tag");const n=document.createElement("div");n.id="tag-temp-holder",n.innerHTML=`<template id="temp-template-tag-wrap">${o.string}</template>`;const{tagComponents:a}=de(n,r,o,this,{forceElement:t.forceElement,counts:t.counts},t.test);if(!e.parentNode)throw new Error("no parent building tag");ye(n,e,this,r,t);let l=t.forceElement;a.forEach((o=>{if(ie(o.insertBefore,o.subject,o.ownerTag,t.counts,{isForceElement:l}),!e.parentNode)throw new Error("no parent building tag components");ye(n,e,this,r,t)}))}}function ye(e,t,r,o,n){const a=function(e,t){const r=[];let o=e.children[0].content.firstChild;for(;o;){const e=o.nextSibling;L(o,t),r.push(o),o=e}return r}(e,t);return r.clones.push(...a),a.forEach((e=>ce(e,n,o,r))),a}function ve(e,t=[]){for(let r=e.length-1;r>=0;--r){const o=e[r];if(t.find((e=>e===o)))throw new Error("child tag registered twice for delete");t.push(o),e.splice(r,1),ve(o.childTags,t)}return t}function Se(e,...t){return new we(e,t)}function Ee(e){const t=e.callback;if(!t)return e.defaultValue;const r=t(Ce),[o]=r,[n]=t(o);if(n!==Ce){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:r,oldValue:o,checkValue:n}),new Error(a)}return o}f.memory.stateConfig={array:[]},f({beforeRender:e=>xe(e),beforeRedraw:e=>xe(e),afterRender:e=>{const t=e.memory.state,r=f.memory.stateConfig,o=r.rearray;if(o.length&&o.length!==r.array.length){const t=`States lengths has changed ${o.length} !== ${r.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`,n={oldStates:r.array,newStates:r.rearray,component:e.templater?.wrapper.original},a=new J(t,n);throw console.warn(t,n),a}delete r.rearray,t.newest=r.array,t.newest.forEach((e=>e.lastValue=Ee(e))),r.array=[]}});class Ce{}function xe(e){const t=e.memory.state,r=f.memory.stateConfig;if(r.rearray){const o="last state not cleared. Possibly in the middle of rendering one component and another is trying to render";throw console.error(o,{config:r,component:e.templater?.wrapper.original,wasInMiddleOf:r.tagSupport?.templater.wrapper.original,state:t,expectedClearArray:r.rearray}),new J(o,{config:r,component:e.templater?.wrapper.original,state:t,expectedClearArray:r.rearray})}r.rearray=[],t?.newest.length&&(t.newest.map((e=>Ee(e))),r.rearray.push(...t.newest)),r.tagSupport=e}function ke(e){const t=f.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=Ee(o);r=t=>[e,e=t];const n={get:()=>Ee(n),callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),e}let n=(e instanceof Function?e:()=>e)();r=e=>[n,n=e];const a={get:()=>Ee(a),callback:r,lastValue:n,defaultValue:n};return t.array.push(a),n}function $e(e){const t=f.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=Ee(o);r=t=>[e,e=t];const n={get:()=>Ee(n),callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),Te(e,n)}let n=(e instanceof Function?e:()=>e)();r=e=>[n,n=e];const a={get:()=>Ee(a),callback:r,lastValue:n,defaultValue:n};return t.array.push(a),Te(n,a)}function Te(e,t){return r=>(t.callback=r||(t=>[e,e=t]),e)}function Ae(e,t){let r=$e(void 0)((e=>[r,r=e]));return void 0===r?(t(e,r),r=e,e):(e.every(((e,t)=>e===r[t]))||(t(e,r),r.length=0,r.push(...e)),e)}function je(e,t){const r=f.memory.providerConfig;r.ownerTag=t,e.templater.global.providers.length&&(r.providers.length=0,r.providers.push(...e.templater.global.providers))}function Ne(e){const t=f.memory.stateConfig,r=t.rearray,[o]=e(void 0);e(o);const n=r[t.array.length];if(n){let r=n.watch,a=Ee(n);const l={get:()=>Ee(l),callback:e,lastValue:a,watch:n.watch};return o!=r&&(l.watch=o,a=l.lastValue=o),t.array.push(l),e(a),a}const a={get:()=>Ee(a),callback:e,lastValue:o,watch:o};return t.array.push(a),o}function Ve(e){f.memory.initCurrentSupport=e}let Re;f.memory.providerConfig={providers:[],ownerTag:void 0},f({beforeRender:(e,t)=>{je(e,t)},beforeRedraw:(e,t)=>{je(e,t.ownerTag)},afterRender:e=>{const t=f.memory.providerConfig;e.templater.global.providers=[...t.providers],t.providers.length=0}}),f({beforeRender:e=>Ve(e),beforeRedraw:e=>Ve(e)}),f({beforeRender:e=>Re=e,beforeRedraw:e=>Re=e,beforeDestroy:(e,t)=>{const r=e.templater.global.destroyCallback;r&&r()}});let Le=e=>()=>{throw new Error("The real callback function was called and that should never occur")};const Be=Le;function Fe(e,t){e.forEach(((e,r)=>{const o=Ee(e),n=t[r].callback;n&&n(o),t[r].lastValue=o}))}function Pe(e){const t=f.memory.stateConfig.array;Le=r=>(...o)=>function(e,t,r,...o){const n=e.memory.state.newest;Fe(n,r);const a=t(...o);Fe(r,n),$(e,!1),a instanceof Promise&&a.finally((()=>{Fe(r,n),$(e,!1)}))}(e,r,t,...o)}f({beforeRender:e=>Pe(e),beforeRedraw:e=>Pe(e),afterRender:e=>{Le=Be}});const Oe=R((({name:e,array:t,included:r,columnNames:o,allColumnNames:n})=>{let a=$e(!1)((e=>[a,a=e])),l=$e(!1)((e=>[l,l=e])),s=$e(void 0)((e=>[s,s=e]));const i=ke([]);return Se`
    <a onclick=${()=>{if(r)return o.length=0,void o.push(...o.filter((t=>t!==e)));o.push(e)}} style="cursor:pointer;">
      <input type="checkbox" ${r&&"checked"} />&nbsp;${e}
    </a>

    <div
      onmouseover=${()=>a=!0}
      onmouseout=${()=>a=!1}
    >
      <a style.visibility=${l||a?"visible":"hidden"}
        onclick=${()=>l=!l}
      >⚙️&nbsp;</a>
      
      ${r&&o.length!==n.length?Se`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(...n)}}><small>all</small></a>
      `:Se`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(e)}}><small>only</small></a>
      `}
    </div>

    ${l&&Se`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${s&&Se`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${e=>{return r=s,o=e.target.value,r.stringFormula=o,void(r.value=De(o,{array:t}));var r,o}}
            >${s.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${i.map((e=>Se`
                <div>
                  <div>
                    <strong>${e.title}</strong>
                    <a onclick=${()=>s=e}>✏️</a>
                  </div>
                  <div>${e.value}</div>
                </div>
              `.key(e)))}
          </div>
          <button type="button" onclick=${()=>{const r=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;i.push({title:"sum",stringFormula:r,value:De(r,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function De(e,t={}){return r=e,o={isNaN,Math,Number,Date,...t},o=new Proxy(o,{has:()=>!0}),new Function("with(this) { return ("+r+")}").call(o);var r,o}const Ke=R((({array:e,showAll:t,showKids:r,toggleColumnDialog:o,columnNames:n,formatChange:a})=>Se`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&Se`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${n.map((e=>Se`
                <th
                  style.cursor=${o&&"pointer"}
                  onclick=${o}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>Se`
            <tr>
              ${n.map((o=>Se`
                <td>
                  ${Ie({value:e[o],showLevels:0,showAll:t,showKids:t||r,isRootDump:!1,formatChange:a})}
                </td>
              `.key(e[o])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),ze=R((({array:e,showLevels:t,showAll:r,showKids:o,columnNames:n,formatChange:a,toggleColumnDialog:l})=>Se`
    ${e.map(((e,s)=>{return Se`${Ie({value:(i=e,c=n,["string","number","boolean"].includes(typeof i)?i:function(e,t){const r={};return t.forEach((t=>{e.hasOwnProperty(t)&&(r[t]=e[t])})),r}(i,c)),showLevels:t,showAll:r,showKids:r||o,isRootDump:!1,formatChange:a,onHeaderClick:l})}`.key({item:e,index:s});var i,c}))}
  `));const Me=R((({showLevels:e,showAll:t,showKids:r,array:o,arrayView:n,formatChange:a})=>{const l=o.length?Object.keys(o[0]):[];let s=$e(l)((e=>[s,s=e])),i=$e(!1)((e=>[i,i=e])),c=ke("columnDialog"+performance.now());const u=()=>{i=!i;const e=document.getElementById(c);i?e.showModal():e.close()};return Se`
    ${"table"===n?Ke({showAll:t,showKids:r,array:o,toggleColumnDialog:u,columnNames:s,formatChange:a}):ze({array:o,showLevels:e,showAll:t,showKids:r,formatChange:a,columnNames:s,toggleColumnDialog:u})}

    <dialog id=${c} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
      onclose=${()=>{i=!1}}
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${l.map((e=>{const t=s.includes(e);return Se`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${Oe({name:e,array:o,included:t,columnNames:s,allColumnNames:l})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${u}>🅧 close</button>
      </div>
    </dialog>

    <style>
      dialog.dump-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.7); /* Set a semi-transparent black background */
      }

      .child-margin-xxs {margin:0.2em;}
      
      .hover-bg-warning:hover {background-color:#fcf8e3}
      .hover-bg-balanced:hover {background-color:#33cd5f}
      .active-bg-energized:active {background-color:#ffc900}
    </style>
  `})),Xe=R((({key:e,value:t,show:r,showAll:o,showKids:n,showLevels:a,formatChange:l})=>{let s=$e(!1)((e=>[s,s=e])),i=$e(void 0)((e=>[i,i=e]));return Ae([r],(([e])=>s=e)),Se`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;"+(s?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a style="flex-grow:1" onclick=${()=>{s=!s}}>
        <strong>${e}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===i?"bold":""}
          onclick=${()=>i="table"===i?void 0:"table"}>${"table"===i?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${t.length}]</sup>
    </div>
    
    ${(o||s||n||null==s&&a>0)&&Se`
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${Me({showLevels:a,showAll:o,showKids:n,formatChange:l,array:t,arrayView:i})}
      </div>
    `}
  </div>
  `}));function Ue({key:e,value:t,onHeaderClick:r}){return Se`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&Se`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${r&&"pointer"}
          onclick=${r}
        >${e}</div>
      `}
      ${!t.search||"https://"!==t.slice(0,8)&&"http://"!==t.slice(0,7)?_e(t):He(t)}
    </div>
  `}const _e=R((e=>{const t=[void 0,null,"null"].includes(e),o=e,n=!isNaN(o)&&o>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(o):"";let a=$e(0)((e=>[a,a=e]));return Se`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{a=Date.now()}}
      onmouseup=${t=>{if(Date.now()-a>300)return t.preventDefault(),t.stopPropagation(),console.log("xx"),!0;console.log("copied"),r(e)}}
      style="cursor:pointer;"
      style.background-color=${t?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||t&&"white"||""}
      title=${n}
    >${(null===e?"null":!1===e&&"false")||void 0===e&&"undefined"||e}</div>
  `})),He=e=>Se`
    <a onclick=${()=>r(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,Ye=R((({key:e,showKids:t,show:r,showLevels:o,value:n,showAll:a,onHeaderClick:l,formatChange:s})=>{let i=$e(!1)((e=>[i,i=e]));Ae([r],(([e])=>i=e));const c=!e||t||i||null==i&&o>0;return Se`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&Se`
          <a
            style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;"+(i?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
            onclick=${()=>{i=!i}}
          >
            <strong>${e}</strong>
            <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
              {${Object.keys(n).length}}
            </sup>
          </a>
        `}
        
        ${c&&Se`
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(n).map((([e,r])=>Se`
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;")}
              >
                ${Ie({value:r,key:e,show:i,showAll:a,showLevels:o-1,showKids:a||t,isRootDump:!1,formatChange:s,onHeaderClick:l})}
            `.key([e,r])))}
          </div>
        `}
      </div>
    </div>
  `})),Ie=R((({key:e,value:t,showKids:o=!1,showLevels:n=-1,showAll:a=!1,format:l="small",formatChange:s=(()=>{}),isRootDump:i=!0,onHeaderClick:c})=>{const u=null===t?"null":typeof t;let d=$e(!1)((e=>[d,d=e]));Ne((e=>[l,l=e])),Ne((e=>[a,a=e]));let g=$e(void 0)((e=>[g,g=e]));var p;return p=()=>{(n=n>=0&&n||(-1===n&&!e&&t&&t instanceof Object?2:0))>0&&(d=!0)},f.memory.initCurrentSupport.memory.init||(f.memory.initCurrentSupport.memory.init=p,p()),[null,void 0].includes(t)?Ue({key:e,value:u,onHeaderClick:c}):["boolean","number","string"].includes(u)?Ue({key:e,value:t,onHeaderClick:c}):function(){if(null===t)return o?Ue({key:e,value:"null",onHeaderClick:c}):Se``;const u=(!l||"small"===l)&&t.push&&t.pop;return Se`
      ${i&&Se`
        <div style="width: 100%;line-height: 90%;">
          <div style="position:relative;">
            <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
              ${!l||"small"===l&&Se`
                <a
                  style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(a?"background-color:#33cd5f;":"background-color:#444444")}
                  class="hover-bg-balanced"
                  onclick=${()=>a=!a}
                  title="hide/show all sub objects"
                >👁</a>
              `}
              <a
                style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(l&&"small"!==l?"background-color:#444444":"background-color:#33cd5f;")}
                class="hover-bg-balanced"
                onclick=${()=>s(l="small")}
              >small</a>
              <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===l?"background-color:#33cd5f;":"background-color:#444444")}
                class="hover-bg-balanced"
                onclick=${()=>s(l="json")}
              >json</a>
              <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===l?"background-color:#33cd5f;":"background-color:#444444")}
                class="hover-bg-balanced active-bg-energized"
                onclick=${()=>function(e){r(JSON.stringify(e,null,2))}(t)}
              >copy</a>
            </div>
          </div>
        </div>
      `}
      ${"json"===l&&Se`
        <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
        >${JSON.stringify(t,null,2)}</textarea>
      `||u&&Xe({key:e,value:t,show:d,showAll:a,showKids:o,showLevels:n,formatChange:s})||Ye({key:e,show:d,showKids:o,showLevels:n,value:t,showAll:a,formatChange:s,onHeaderClick:c})}
    `}()}));var We=t.B;export{We as dump};