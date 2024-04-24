var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return o(e,new WeakMap)}function o(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const n=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,n),Array.isArray(e))for(let r=0;r<e.length;r++)n[r]=o(e[r],t);else for(const r in e)e.hasOwnProperty(r)&&(n[r]=o(e[r],t));return n}function r(e,t){return a(e,t,new WeakMap)}function a(e,t,n){return!!(e===t||(o=e,r=t,o instanceof Function&&r instanceof Function&&o.toString()===r.toString()))||!!n.has(e)||"object"==typeof e&&"object"==typeof t&&!(e instanceof Date&&t instanceof Date)&&(n.set(e,0),Array.isArray(e)&&Array.isArray(t)?function(e,t,n){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!a(e[o],t[o],n))return!1;return!0}(e,t,n):!Array.isArray(e)&&!Array.isArray(t)&&function(e,t,n){const o=Object.keys(e),r=Object.keys(t);if(0===o.length&&0===r.length)return!0;if(o.length!==r.length)return!1;for(const s of o)if(!r.includes(s)||!a(e[s],t[s],n))return!1;return!0}(e,t,n));var o,r}function s(e){return!0===e?.isTemplater}function l(e){return!0===e?.isTag}function i(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function c(e){return e instanceof Array&&e.every((e=>l(e)))}e.d(t,{B:()=>Ge});class u{templater;subject;isApp=!0;propsConfig;memory={state:{newest:[]}};constructor(e,t){this.templater=e,this.subject=t;const o=this.templater.children,r=this.templater.props,a=n(r);this.propsConfig={latest:r,latestCloned:a,clonedProps:a,lastClonedKidValues:o.value.map((e=>d(e.values)))},l(r)||(this.propsConfig.latestCloned=n(a),this.propsConfig.clonedProps=this.propsConfig.latestCloned)}}function d(e){return e.map((e=>{const t=e;return l(t)?d(t.values):s(t)?n(t.props):c(t)?d(t):n(e)}))}class g extends u{ownerTagSupport;templater;subject;isApp=!1;constructor(e,t,n){super(t,n),this.ownerTagSupport=e,this.templater=t,this.subject=n}}class p extends Error{details;constructor(e,t,n={}){super(e),this.name=p.name,this.details={...n,errorCode:t}}}class f extends p{constructor(e,t){super(e,"array-no-key-error",t),this.name=f.name}}class h extends p{constructor(e,t){super(e,"state-mismatch-error",t),this.name=h.name}}class m extends p{constructor(e,t){super(e,"sync-callback-error",t),this.name=m.name}}function b(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};b.tagUse.push(t)}b.tagUse=[],b.memory={},b.memory.stateConfig={array:[]};const y=e=>function(e){const t=e.memory.state,n=b.memory.stateConfig;if(n.rearray){const o="last state not cleared. Possibly in the middle of rendering one component and another is trying to render";throw console.error(o,{config:n,component:e.templater?.wrapper.original,wasInMiddleOf:n.tagSupport?.templater.wrapper.original,state:t,expectedClearArray:n.rearray}),new h(o,{config:n,component:e.templater?.wrapper.original,state:t,expectedClearArray:n.rearray})}n.rearray=[],t?.newest.length&&(t.newest.map((e=>v(e))),n.rearray.push(...t.newest)),n.tagSupport=e}(e);function v(e){const t=e.callback;if(!t)return e.defaultValue;const n=t(w),[o]=n,[r]=t(o);if(r!==w){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:n,oldValue:o,checkValue:r}),new Error(a)}return o}b({beforeRender:y,beforeRedraw:y,afterRender:e=>{const t=e.memory.state,n=b.memory.stateConfig,o=n.rearray;if(o.length&&o.length!==n.array.length){const t=`States lengths has changed ${o.length} !== ${n.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`,r={oldStates:n.array,newStates:n.rearray,component:e.templater?.wrapper.original},a=new h(t,r);throw console.warn(t,r),a}delete n.rearray,t.newest=n.array,t.newest.forEach((e=>e.lastValue=v(e))),n.array=[]}});class w{}function x(e){const t=b.memory.stateConfig;let n;const o=t.rearray[t.array.length];if(o){let e=v(o);n=t=>[e,e=t];const r={get:()=>v(r),callback:n,lastValue:e,defaultValue:o.defaultValue};return t.array.push(r),C(e,r)}let r=(e instanceof Function?e:()=>e)();n=e=>[r,r=e];const a={get:()=>v(a),callback:n,lastValue:r,defaultValue:r};return t.array.push(a),C(r,a)}function C(e,t){return n=>(t.callback=n||(t=>[e,e=t]),e)}function S(e,t){let n=x(void 0)((e=>[n,n=e]));return void 0===n?(n=e,e):(e.every(((e,t)=>e===n[t]))||(t(e,n),n.length=0,n.push(...e)),e)}function k(e){const t=b.memory.stateConfig;let n;const o=t.rearray[t.array.length];if(o){let e=v(o);n=t=>[e,e=t];const r={get:()=>v(r),callback:n,lastValue:e,defaultValue:o.defaultValue};return t.array.push(r),e}let r=(e instanceof Function?e:()=>e)();n=e=>[r,r=e];const a={get:()=>v(a),callback:n,lastValue:r,defaultValue:r};return t.array.push(a),r}function $(e){const t=b.memory.stateConfig,n=t.rearray,[o]=e(void 0);e(o);const r=n[t.array.length];if(r){let n=r.watch,a=v(r);const s={get:()=>v(s),callback:e,lastValue:a,watch:r.watch};return o!=n&&(s.watch=o,a=s.lastValue=o),t.array.push(s),e(a),a}const a={get:()=>v(a),callback:e,lastValue:o,watch:o};return t.array.push(a),o}function T(e,t){const n=b.memory.providerConfig;n.ownerTag=t,e.templater.global.providers.length&&(n.providers.length=0,n.providers.push(...e.templater.global.providers))}function E(e){e.tagSupport.templater.global.providers.filter((e=>!r(e.instance,e.clone))).forEach((t=>{!function(e,t){A(e,t).forEach((({tag:e,renderCount:t,provider:o})=>{e.tagSupport.templater.global.deleted||t===e.tagSupport.templater.global.renderCount&&(o.clone=n(o.instance),P(e.tagSupport,!1))}))}(e.getAppElement(),t),t.clone=n(t.instance)}))}function A(e,t,n=[]){const o=e.tagSupport.templater.global,r=o.providers.find((e=>e.constructMethod===t.constructMethod));return r&&n.push({tag:e,renderCount:o.renderCount,provider:r}),e.childTags.forEach((e=>A(e,t,n))),n}function j(e,t){return e.strings.length===t.strings.length&&(!!e.strings.every(((e,n)=>t.strings[n]===e))&&(e.values.length===t.values.length&&!!t.values.every(((t,n)=>{const o=e.values[n];return!(t instanceof Function&&o instanceof Function)||!(t.toString()!==o.toString())}))))}function N(e,t){const n=e.tagSupport;delete t.tag,delete n.subject.tag,n.templater.global.oldest.destroy(),B(n),n.templater.global.context={}}function B(e){delete e.templater.global.oldest,delete e.templater.global.newest}b.memory.providerConfig={providers:[],ownerTag:void 0},b({beforeRender:(e,t)=>{T(e,t)},beforeRedraw:(e,t)=>{T(e,t.ownerTag)},afterRender:e=>{const t=b.memory.providerConfig;e.templater.global.providers=[...t.providers],t.providers.length=0}});class V{props;children;isTag=!1;tagged;wrapper;global={newestTemplater:this,context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};tagSupport;constructor(e,t){this.props=e,this.children=t}isTemplater=!0}function R(e,t,n,o){const r=e,a=t?.ownerTag||o;t?(r.memory.state.newest=[...t.tagSupport.memory.state.newest],r.templater.global=t.tagSupport.templater.global,function(e,t){b.tagUse.forEach((n=>n.beforeRedraw(e,t)))}(r,t)):(!function(e,t){b.tagUse.forEach((n=>n.beforeRender(e,t)))}(r,a),b.memory.providerConfig.ownerTag=a);const s=r.templater,l=s.wrapper(r,n);return function(e,t){b.tagUse.forEach((n=>n.afterRender(e,t))),_.next(t)}(r,l),!t||j(t,l)||function(e,t,n){const o=e.tagSupport.templater.global.insertBefore;N(e,n),t.global={...t.global};const r=t.global;r.insertBefore=o,r.deleted=!1,delete r.oldest,delete r.newest,delete n.tag}(t,s,n),l.ownerTag=a,r.templater.global.newest=l,l}function P(e,t){const n=e.templater.global;if(l(e.templater)){const e=n.newest.ownerTag;return++n.renderCount,P(e.tagSupport,!0)}const o=e.subject,a=e.templater,s=o.tag,i=s?.tagSupport.templater.global.newest;let c,u=!1;t&&i&&(c=i.ownerTag,c)&&(u=!r(a.props,i.tagSupport.propsConfig.latestCloned));const d=n.newest?.tagSupport,g=function(e,t,n,o){const r=o.tag;t.global=r.tagSupport.templater.global;const a=n.templater.global.renderCount;E(e);const s=n.templater.global.newest;if(a!==n.templater.global.renderCount)return e.updateByTag(s),s;const l=n.templater||t,i=o.tag||l.global.newest||l.global.oldest,c=R(t.tagSupport,i,o,e.ownerTag),u=n.templater.global.oldest||e;return c.tagSupport.templater.global.oldest=u,j(s,c)&&(o.tag=c,u.updateByTag(c)),c}(a.global.oldest,a,d,o);return c&&u?(P(c.tagSupport,!0),g):g}let F=e=>(e,t,n,o,r,a)=>{throw new m("Callback function was called immediately in sync and must instead be call async")};const z=F;function L(e,t){e.forEach(((e,n)=>{const o=v(e),r=t[n].callback;r&&r(o),t[n].lastValue=o}))}function M(e){const t=b.memory.stateConfig.array;F=n=>(...o)=>function(e,t,n,...o){const r=e.memory.state.newest;L(r,n);const a=t(...o);L(n,r),P(e,!1),a instanceof Promise&&a.finally((()=>{L(n,r),P(e,!1)}))}(e,n,t,...o)}function O(e){b.memory.initCurrentTemplater=e.templater}let D;b({beforeRender:e=>M(e),beforeRedraw:e=>M(e),afterRender:e=>{F=z}}),b({beforeRender:e=>O(e),beforeRedraw:e=>O(e)}),b({beforeRender:e=>D=e,beforeRedraw:e=>D=e,beforeDestroy:(e,t)=>{const n=e.templater.global.destroyCallback;n&&n()}});class X{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(e,t){this.value=e,this.onSubscription=t}subscribe(e){const t=function(e,t){const n=Y.globalSubCount$;Y.globalSubCount$.set(n.value+1);const o=()=>{o.unsubscribe()};return o.callback=t,o.subscriptions=[],o.unsubscribe=()=>(K(e.subscribers,t),K(Y.globalSubs,t),Y.globalSubCount$.set(n.value-1),o.unsubscribe=()=>o,o.subscriptions.forEach((e=>e.unsubscribe())),o),o.add=e=>(o.subscriptions.push(e),o),o.next=e=>{t(e,o)},o}(this,e),n=this.subscribeWith;if(n){if(this.methods.length){const n=e;e=e=>{H(e,this.methods,(e=>n(e,t)))}}return n(e)}return this.subscribers.push(t),Y.globalSubs.push(t),this.onSubscription&&this.onSubscription(t),t}set(e){this.value=e,this.subscribers.forEach((t=>{t.callback(e,t)}))}next=this.set;toPromise(){return new Promise(((e,t)=>{this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}))}toCallback(e){this.subscribe(((t,n)=>{n.unsubscribe(),e(t)}))}pipe(...e){const t=new X;return t.methods=e,t.subscribeWith=e=>this.subscribe(e),t}}function K(e,t){const n=e.findIndex((e=>e.callback===t));-1!==n&&e.splice(n,1)}const Y=X;function H(e,t,n){const o=[...t],r=o.shift(),a=e=>{if(o.length)return H(e,o,n);n(e)};let s=a;const l=r(e,{setHandler:e=>s=e,next:a});s(l)}Y.globalSubs=[],Y.globalSubCount$=new X,Y.globalSubCount$.set(0);class U extends X{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value,t),t}}const _=new X(void 0,(e=>{b.memory.stateConfig.rearray||e.next()}));function I(e,t){if(e.isChildOverride)return e;const n=(n,o)=>W(e,t,n,o);return n.tagFunction=e,n}function W(e,t,n,o){const r=t.tagSupport,a=r.templater.global.renderCount,s=e.bind(n)(...o);return a!==r.templater.global.renderCount||r.templater.global.deleted?s instanceof Promise?s.then((()=>"promise-no-data-ever")):"no-data-ever":(P(r,!0),s instanceof Promise?s.then((()=>(r.templater.global.deleted||P(r,!0),"promise-no-data-ever"))):"no-data-ever")}function J(e,t){const n=function(e,n){if("object"!=typeof e)return e;const o=e;return Object.entries(o).forEach((([e,n])=>{if(n instanceof Function){if(o[e].original)return;return o[e]=(...t)=>o[e].toCall(...t),o[e].toCall=(...e)=>q(n,e,t),void(o[e].original=n)}})),o}(l(e)?0:e);return n}function q(e,t,n){const o=e(...t);return P(n.templater.global.newest.tagSupport,!0),o}const G=[];let Q=0;function Z(e){const t=function(t,o){(l(t)||c(t))&&(o=t,t=void 0);const{childSubject:r,madeSubject:a}=function(e){if(i(e))return{childSubject:e,madeSubject:!1};if(c(e))return{childSubject:new U(e),madeSubject:!0};const t=e;return t?(t.memory.arrayValue=0,{childSubject:new U([t]),madeSubject:!0}):{childSubject:new U([]),madeSubject:!0}}(o);r.isChildSubject=!0;const s=new V(t,r),u=function(e,t){const o=function(r,a){const s=r.templater.global;s.newestTemplater=e,++s.renderCount,e.global=s;const l=e.children,i=s.oldest?.tagSupport.templater.children.lastArray;i&&(l.lastArray=i);const c=o.original;let u=e.props,d=J(u,r.ownerTagSupport);const p=n(u),f=c(d,l);return f.version=s.renderCount,f.tagSupport=new g(r.ownerTagSupport,e,a),f.tagSupport.propsConfig={latest:u,latestCloned:p,clonedProps:p,lastClonedKidValues:f.tagSupport.propsConfig.lastClonedKidValues},f.tagSupport.memory=r.memory,t&&l.value.forEach((e=>{e.values.forEach(((t,n)=>{if(!(t instanceof Function))return;const o=e.values[n];o.isChildOverride||(e.values[n]=function(...e){const n=f.ownerTag;W(t,n,this,e)},o.isChildOverride=!0)}))})),f};return o}(s,a);return u.original=e,s.tagged=!0,s.wrapper=u,s};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=G,e.setUse=b,e.tagIndex=Q++}(e),G.push(e),t}function ee(e,t){t.parentNode.insertBefore(e,t)}function te(e,t,n){const o=e.split(".");if("style"===o[0]&&(n.style[o[1]]=t),"class"===o[0])return o.shift(),void(t?o.forEach((e=>n.classList.add(e))):o.forEach((e=>n.classList.remove(e))))}const ne=/^\s*{__tagvar/,oe=/}\s*$/;function re(e){return e&&e.search(ne)>=0&&e.search(oe)>=0}function ae(e,t,n,o,r,a){if(re(t))return function(e,t,n,o,r,a){return le(e,se(o,t),n,r,a)}(e,t,n,o,r,a);if(re(e)){let t;const s=se(o,e).subscribe((e=>{!function(e,t,n,o,r){if(t&&t!=e&&("string"==typeof t?n.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>n.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>le(e,t,n,o,r)));else{if(!e.length)return;le(e,"",n,o,r)}}(e,t,n,r,a),t=e}));return r.tagSupport.templater.global.subscriptions.push(s),void n.removeAttribute(e)}return ie(e)?te(e,t,n):void 0}function se(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function le(e,t,n,o,r){const a=ie(e);if(t instanceof Function){const o=function(...e){return t(n,e)};n[e].action=o}if(i(t)){n.removeAttribute(e);const s=t=>(t instanceof Function&&(t=I(t,o)),function(e,t,n,o,r){if(e instanceof Function){const o=function(...n){return e(t,n)};return o.tagFunction=e,void(t[n]=o)}if(o)return void te(n,e,t);if(e)return void r(t,n,e);[void 0,!1,null].includes(e)?t.removeAttribute(n):r(t,n,e)}(t,n,e,a,r)),l=t.subscribe(s);o.tagSupport.templater.global.subscriptions.push(l)}else r(n,e,t)}function ie(e){return e.search(/^(class|style)(\.)/)>=0}function ce(e,t,n){e.setAttribute(t,n)}function ue(e,t,n){e[t]=n}function de(e,t,n){const o=e.getAttributeNames();let r=ce;o.forEach((o=>{"INPUT"===e.nodeName&&"value"===o&&(r=ue),ae(o,e.getAttribute(o),e,t,n,r),r=ce}))}const ge=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function pe(e,t,n,o,r){if(!0!==e.tagged){const t=e.wrapper.original;let n=t.name||t.constructor?.name;"Function"===n&&(n=void 0);const o=n||t.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${o}\n\n`)}e.tagSupport=new g(o.tagSupport,e,t),e.global.insertBefore=n;let a=t.tag;return b.memory.providerConfig.ownerTag=o,(!a||r.forceElement)&&(a=function(e,t,n,o,r){const a=o.clones.map((e=>e));if(n=R(e.tagSupport,t.tag,t,o),e.global.newest=n,o.clones.length>a.length){const e=o.clones.filter((e=>!a.find((t=>t===e))));n.clones.push(...e)}return o.childTags.push(n),n}(e,t,a,o)),function(e,t,n,{counts:o,forceElement:r}){const a=t,s=a.tag,l=s?.tagSupport.templater.global.oldest||void 0;if(l&&l)return function(e,t,n){if(t instanceof Function){const e=t(n.tagSupport);return n.updateByTag(e),void(t.tag=e)}return n.updateByTag(e),void(t.tag=e)}(e,a,l);e.buildBeforeElement(n,{counts:o,forceElement:r})}(a,t,n,r),a}function fe(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function he(e,t){B(e.tagSupport),e.destroy({stagger:t.removed++})}function me(e,t){const n=e.tagSupport.templater.global.placeholder;n&&fe(t,n)}function be(e,t,n,o){e.tagSupport||(ye(e,o,t),o.childTags.push(e)),e.ownerTag=o,e.buildBeforeElement(n,{counts:{added:0,removed:0},forceElement:!0})}function ye(e,t,n){const o={global:{renderCount:0,providers:[],context:{},subscriptions:[],deleted:!1,newestTemplater:{}},children:new U([]),props:{},isTag:!0,isTemplater:!1,tagged:!1,wrapper:()=>{},tagSupport:{}};e.tagSupport=new g(t.tagSupport,o,n),o.global.oldest=e,o.global.newest=e,o.tagSupport=e.tagSupport,e.ownerTag=t}function ve(e,t,n,o,r){const a=o.clones;let s=e.lastArray=e.lastArray||[];e.placeholder||function(e,t){if("TEMPLATE"!==e.nodeName)return void(t.placeholder=e);const n=t.placeholder=document.createTextNode(""),o=e.parentNode;o.insertBefore(n,e),o.removeChild(e)}(n,e);const l=e.placeholder;let i=0;return s=e.lastArray=e.lastArray.filter(((e,n)=>{const o=t.length-1<n-i,a=t[n-i],l=a?.memory.arrayValue,c=e.tag,u=o||(d=l,g=c.memory.arrayValue,!(d===g||d instanceof Array&&g instanceof Array&&d.length==g.length&&d.every(((e,t)=>e==g[t]))));var d,g;if(u){const e=s[n];return he(e.tag,r.counts),e.deleted=!0,++i,++r.counts.removed,!1}return!0})),t.forEach(((e,n)=>{const a=s[n],i=a?.tag.tagSupport,c=new U({});if(ye(e,o,c),i&&(e.tagSupport.templater.global=i.templater.global,i.templater.global.newest=e),!("arrayValue"in e.memory)){const n={template:e.getTemplate().string,array:t,ownerTagContent:o.lastTemplateString},r="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(r,n),new f(r,n)}if(s.length>n){const t=a.tag.tagSupport,n=t.templater.global;return e.tagSupport=e.tagSupport||t,n.oldest.updateByTag(e),[]}!function(e,t,n,o,r){const a={tag:t,index:n};r.push(a);const s={added:o.counts.added+n,removed:o.counts.removed},l=document.createElement("template");e.parentNode.insertBefore(l,e),t.buildBeforeElement(l,{counts:s,forceElement:o.forceElement})}(l,e,n,r,s),o.childTags.push(e)})),a}function we(e,t,n){t.insertBefore=n;const o=t.clone||n;if(t.lastValue===e&&"lastValue"in t)return;t.lastValue=e;const r=function(e,t){const n=t.parentNode;let o=e;[void 0,!1,null].includes(e)&&(o="");const r=document.createTextNode(o);return n.insertBefore(r,t),n.removeChild(t),r}(e,o);t.clone=r}var xe;!function(e){e.tag="tag",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(xe||(xe={}));const Ce=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function Se(e,t,n,o){let a=n.tag;const s=a.tagSupport.templater.wrapper,l=t.wrapper;let i=!1;s&&l&&(i=s.original===l.original);const c=a.tagSupport;if(c.templater.global.placeholder,!i)return N(c.templater.global.oldest,n),pe(t,n,o,e,{forceElement:!1,counts:{added:0,removed:0}});if(!function(e,t,n){const o=function(e,t){let n=e,o=t;if("object"==typeof e){if(!t)return 3;if(n={...e},o={...t||{}},!Object.entries(n).every((([e,t])=>{let r=o[e];return t instanceof Function?r instanceof Function&&(r.original&&(r=r.original),t.original&&(t=t.original),t.toString()===r.toString()&&(delete n[e],delete o[e],5)):4})))return 6}return!r(o,n)&&7}(n.props,e.propsConfig.latestCloned);if(o)return o;const a=function(e,t){const n=e.propsConfig.lastClonedKidValues,o=t.propsConfig.lastClonedKidValues;return!n.every(((e,t)=>{const n=o[t];return e.every(((e,t)=>e===n[t]))}))&&9}(e,t);return a}(c,t.tagSupport,t)){const n=t.props;return n&&"object"==typeof n&&function(e,t,n,o){const r=(t=t.tagSupport.templater.global.newest).tagSupport.propsConfig.latestCloned,a=n.tagSupport.templater.global.newest.tagSupport;Object.entries(r).forEach((([e,t])=>{if(!(t instanceof Function))return;t.original;const n=o[e];n.original||(r[e].toCall=(...e)=>q(n,e,a))}))}(0,a,e,n),a}const u=t.global.oldest,d=t.global.newest,g=P(t.tagSupport,!1);a=n.tag;const p=g.tagSupport.templater.global.oldest;if(!p)return ke(g,o,c,n);p&&t.children.value.length&&p.tagSupport.templater.children.set(t.children.value);const f=i&&d.isLikeTag(g);let h=c.templater.global.oldest;return f?(n.tag=g,u.updateByTag(g),g):(i&&a&&(N(a,n),g.tagSupport.templater.global.context={}),h=void 0,h||ke(g,c.templater.global.insertBefore,c,n),c.templater.global.newest=g,g)}function ke(e,t,n,o){return e.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0}}),e.tagSupport.templater.global.oldest=e,e.tagSupport.templater.global.newest=e,n.templater.global.oldest=e,n.templater.global.newest=e,o.tag=e,e}function $e(e,t,n,o,r){const a=[];if(!e.hasAttribute("end"))return{clones:a};const l=e.getAttribute("id");if(l?.substring(0,Be.length)!==Be)return{clones:a};const i=t[l];return s(i.value)||c(i.value)?{clones:a,tagComponent:{variableName:l,ownerTag:n,subject:i,insertBefore:e}}:(Te(e,i,n,o,{isForceElement:r.forceElement}),{clones:a})}function Te(e,t,n,o,{isForceElement:r}){let a=!1;const u=t.subscribe((u=>{a?function(e,t,n,o){const r=e,a=s(t);if(function(e,t,n){const o=e,r=o.lastArray;if(r&&!c(t)){const e=o.placeholder;return delete o.lastArray,delete o.placeholder,fe(n,e),r.forEach((({tag:e})=>he(e,{added:0,removed:0}))),"array"}const a=e,i=a.tag;if(i){const o=l(t);return l(e.value)&&o?!j(t,i)&&(me(i,n),N(i,a),2):!s(t)&&(me(i,n),N(i,a),"different-tag")}const u=e,d="lastValue"in u,g=u.lastValue;d&&g!==t&&function(e,t){const n=t.clone,o=n.parentNode;o.insertBefore(e,n),o.removeChild(n),delete t.clone,delete t.lastValue}(n,u)}(e,t,o),a){const e=t;return r.tag?(e.tagSupport=new g(n.tagSupport,e,r),Se(n,e,r,o),r):(pe(e,r,o,n,{forceElement:!0,counts:{added:0,removed:0}}),r)}const u=r.tag;if(u)return function(e,t,n,o){const r=n&&j(e,n),a=n&&n.getTemplate&&e.isLikeTag(n),s=n;if(s.tagSupport||ye(s,o,t),!r)return r||a?be(n,t,e.tagSupport.templater.global.insertBefore,o):void we(n,t,t.insertBefore);e.updateByTag(s)}(u,e,t,n),r;if(c(t))return ve(e,t,o,n,{counts:{added:0,removed:0}}),e;if(t instanceof Function){const o=I(t,n);return e.set(o),e}l(t)?be(t,r,o,n):i(t)||we(t,e,o)}(t,u,n,e):(function(e,t,n,o,r){const a=function(e){return s(e)?xe.tagComponent:l(e)?xe.tag:c(e)?xe.tagArray:xe.value}(e);switch(a){case xe.tag:return void be(e,t,n,o);case xe.tagArray:return ve(t,e,n,o,r);case xe.tagComponent:return void pe(e,t,n,o,r)}we(e,t,n)}(u,t,e,n,{counts:{...o},forceElement:r}),r&&(r=!1),a=!0)}));n.tagSupport.templater.global.subscriptions.push(u)}function Ee(e,t,n,o){if(!e.getAttribute)return;"TEXTAREA"===e.nodeName&&function(e,t,n){const o=e.value;if(o.search(Ce)>=0){const r=o.match(/__tagvar(\d{1,4})/),a="{"+(r?r[0]:"")+"}";e.value="",e.setAttribute("text-var-value",a);const s=(t,n,o)=>e.value=o;ae("text-var-value",a,e,t,n,s)}}(e,n,o);let r=t.counts.added;r=function(e,t){const n=e.oninit;if(!n)return t.added;const o=n.tagFunction;if(!o)return t.added;const r=o.tagFunction;return r?(r({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-r,e.children&&new Array(...e.children).forEach(((e,r)=>Ee(e,{...t,counts:t.counts},n,o)))}function Ae(e,t,n,o,r){if(!r||"TEMPLATE"===e.tagName)return{clones:[],tagComponents:[]};const a=o.counts,s=[],l=[];return new Array(...r).forEach((e=>{const{clones:r,tagComponent:i}=$e(e,t,n,a,o);s.push(...r),i?l.push(i):e.children&&new Array(...e.children).forEach(((e,r)=>{if(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")}(e)){const{tagComponent:r}=$e(e,t,n,a,o);r&&l.push(r)}const{clones:i,tagComponents:c}=Ae(e,t,n,o,e.children);s.push(...i),l.push(...c)}))})),{clones:s,tagComponents:l}}function je(e,t,n,o,r){const a=[],s=[],l=n.interpolation,i=e.children[0].content.children;if(l.keys.length){const{clones:n,tagComponents:l}=Ae(e,t,o,r,i);a.push(...n),s.push(...l)}return de(e,t,o),Ne(i,t,o),{clones:a,tagComponents:s}}function Ne(e,t,n){new Array(...e).forEach((e=>{de(e,t,n),e.children&&Ne(e.children,t,n)}))}const Be="__tagvar",Ve="--"+Be+"--",Re=new RegExp(Be,"g"),Pe=new RegExp(Ve,"g");class Fe{strings;values;version=0;isTag=!0;hasLiveElements=!1;clones=[];childTags=[];tagSupport;lastTemplateString=void 0;ownerTag;appElement;memory={};constructor(e,t){this.strings=e,this.values=t}key(e){return this.memory.arrayValue=e,this}destroy(e={stagger:0,byParent:!1}){const t=this.tagSupport,n=t.templater.global,o=t.subject,r=n.insertBefore;"TEMPLATE"===r.nodeName&&n.placeholder&&!("arrayValue"in this.memory)&&(e.byParent||me(this,r)),delete n.placeholder,t&&function(e,t){b.tagUse.forEach((n=>n.beforeDestroy(e,t)))}(t,this);const a=e.byParent?[]:Le(this.childTags);let s;if(a.forEach((e=>{const t=e.tagSupport.templater.global;delete t.newest,t.deleted=!0})),delete n.oldest,delete n.newest,n.deleted=!0,this.hasLiveElements=!1,delete o.tag,this.destroySubscriptions(),this.ownerTag&&(this.ownerTag.childTags=this.ownerTag.childTags.filter((e=>e!==this))),e.byParent)this.destroyClones();else{const{stagger:t,promise:n}=this.destroyClones(e);e.stagger=t,n&&(s=n)}return s=s?s.then((async()=>{const e=a.map((e=>e.destroy({stagger:0,byParent:!0})));return Promise.all(e)})):Promise.all(a.map((e=>e.destroy({stagger:0,byParent:!0})))),s.then((()=>e.stagger))}destroySubscriptions(){const e=this.tagSupport.templater.global;e.subscriptions.forEach((e=>e.unsubscribe())),e.subscriptions.length=0}destroyClones({stagger:e}={stagger:0}){const t=this.clones.map((t=>this.checkCloneRemoval(t,e))).filter((e=>e));return this.clones.length=0,t.length?{promise:Promise.all(t),stagger:e}:{stagger:e}}checkCloneRemoval(e,t){let n;const o=e;o.ondestroy&&(n=function(e,t){const n=e.ondestroy;if(!n)return;const o=n.tagFunction;if(!o)return;const r=o.tagFunction;return r?r({target:e,stagger:t}):void 0}(o,t));const r=()=>{e.parentNode?.removeChild(e);const t=this.ownerTag;t&&(t.clones=t.clones.filter((t=>t!==e)))};return n instanceof Promise?n.then(r):(r(),n)}getTemplate(){const e=function(e){const t=function(e){const t=[];return{string:e.replace(ge,((e,n)=>{if(e.startsWith("<"))return e;const o=n.substring(1,n.length-1);return t.push(o),`<template interpolate end id="${o}"></template>`})),keys:t}}(e);return t.string=t.string.replace(Pe,Be),t}(this.strings.map(((e,t)=>(e.replace(Re,Ve)+(this.values.length>t?`{${Be}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=e.string,{interpolation:e,string:e.string,strings:this.strings,values:this.values,context:this.tagSupport.templater.global.context||{}}}isLikeTag(e){return j(this,e)}updateByTag(e){this.tagSupport.templater.global.newest=e,this.updateConfig(e.strings,e.values)}updateConfig(e,t){this.strings=e,this.updateValues(t)}update(){return this.updateContext(this.tagSupport.templater.global.context)}updateValues(e){return this.values=e,this.updateContext(this.tagSupport.templater.global.context)}updateContext(e){return this.strings.map(((t,n)=>{const o=Be+n,r=this.values.length>n,a=this.values[n];if(o in e)return function(e,t,n){const o=e[t],r=o.tag;if(r){const e=r.tagSupport.templater;n&&n.global!==e.global&&s(n)&&function(e,t){const n=e.wrapper.original,o=t.wrapper?.original;n===o&&(t.global=e.global)}(e,n)}i(n)||o.set(n)}(e,o,a);r&&(e[o]=function(e,t,n){return s(t)||t instanceof Function?new U(t):e?l(t)?(t.ownerTag=n,new U(t)):i(t)?t:new U(t):void 0}(r,a,this))})),e}getAppElement(){let e=this;for(;e.ownerTag;)e=e.ownerTag;return e}rebuild(){const e=this.tagSupport.templater.global.insertBefore;if(!e){const e=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw e.tag=this,e}this.buildBeforeElement(e,{forceElement:!0,counts:{added:0,removed:0}})}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){const n=this.tagSupport.subject,o=this.tagSupport.templater.global;o.insertBefore=e,o.placeholder||function(e){const t=e.insertBefore,n=e.placeholder=document.createTextNode(""),o=t.parentNode;o.insertBefore(n,t),o.removeChild(t)}(o);const r=o.placeholder;o.oldest=this,o.newest=this,n.tag=this,this.hasLiveElements=!0,this.clones.length&&this.clones.forEach((e=>this.checkCloneRemoval(e,0))),o.insertBefore=e;const a=this.update(),s=this.getTemplate(),l=document.createElement("div");l.id="tag-temp-holder",l.innerHTML=`<template id="temp-template-tag-wrap">${s.string}</template>`;const{tagComponents:i}=je(l,a,s,this,{forceElement:t.forceElement,counts:t.counts});ze(l,r,this,a,t);let c=t.forceElement;i.forEach((e=>{Te(e.insertBefore,e.subject,e.ownerTag,t.counts,{isForceElement:c}),ze(l,e.insertBefore,e.ownerTag,a,t)}))}}function ze(e,t,n,o,r){const a=function(e,t){const n=[];let o=e.children[0].content.firstChild;for(;o;){const e=o.nextSibling;ee(o,t),n.push(o),o=e}return n}(e,t);return a.length?(a.forEach((e=>Ee(e,r,o,n))),n.clones.push(...a),a):a}function Le(e,t=[]){for(let n=e.length-1;n>=0;--n){const o=e[n];t.push(o),e.splice(n,1),Le(o.childTags,t)}return t}function Me(e,...t){return new Fe(e,t)}const Oe=Z((({name:e,array:t,included:n,columnNames:o,allColumnNames:r})=>{let a=x(!1)((e=>[a,a=e])),s=x(!1)((e=>[s,s=e])),l=x(void 0)((e=>[l,l=e]));const i=k([]);return Me`
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
      
      ${n&&o.length!==r.length?Me`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(...r)}}><small>all</small></a>
      `:Me`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(e)}}><small>only</small></a>
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
              onchange=${e=>{return n=l,o=e.target.value,n.stringFormula=o,void(n.value=De(o,{array:t}));var n,o}}
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
          <button type="button" onclick=${()=>{const n=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;i.push({title:"sum",stringFormula:n,value:De(n,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function De(e,t={}){return n=e,o={isNaN,Math,Number,Date,...t},n?(o=new Proxy(o,{has:()=>!0}),new Function("with(this) { return ("+n+")}").call(o)):n;var n,o}const Xe=Z((({array:e,showAll:t,showKids:n,toggleColumnDialog:o,columnNames:r,formatChange:a,allowMaximize:s})=>Me`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&Me`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${r.map((e=>Me`
                <th
                  style.cursor=${o&&"pointer"}
                  onclick=${o}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>Me`
            <tr>
              ${r.map((o=>Me`
                <td>
                  ${Ge({value:e[o],showLevels:0,showAll:t,showKids:t||n,isRootDump:!1,formatChange:a,allowMaximize:s})}
                </td>
              `.key(e[o])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),Ke=Z((({array:e,showLevels:t,showAll:n,showKids:o,columnNames:r,formatChange:a,toggleColumnDialog:s,allowMaximize:l})=>Me`
    ${e.map(((e,i)=>{return Me`${Ge({value:(c=e,u=r,["string","number","boolean"].includes(typeof c)?c:function(e,t){const n={};return t.forEach((t=>{e.hasOwnProperty(t)&&(n[t]=e[t])})),n}(c,u)),showLevels:t,showAll:n,showKids:n||o,isRootDump:!1,formatChange:a,onHeaderClick:s,allowMaximize:l})}`.key({item:e,index:i});var c,u}))}
  `));const Ye=Z((({showLevels:e,showAll:t,showKids:n,array:o,arrayView:r,formatChange:a,allowMaximize:s})=>{const l=o.length?Object.keys(o[0]):[];let i=x(l)((e=>[i,i=e])),c=x(!1)((e=>[c,c=e])),u=k("columnDialog"+performance.now());const d=()=>{c=!c;const e=document.getElementById(u);c?e.showModal():e.close()};return Me`
    ${"table"===r?Xe({showAll:t,showKids:n,array:o,toggleColumnDialog:d,columnNames:i,formatChange:a}):Ke({array:o,showLevels:e,showAll:t,showKids:n,formatChange:a,columnNames:i,toggleColumnDialog:d,allowMaximize:s})}

    <dialog id=${u} class="dump-dialog" style="padding:0"
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
              ${Oe({name:e,array:o,included:t,columnNames:i,allColumnNames:l})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${d}>🅧 close</button>
      </div>
    </dialog>
  `})),He=Z((({key:e,value:t,show:n,showAll:o,showKids:r,showLevels:a,formatChange:s,allowMaximize:l})=>{let i=x(!1)((e=>[i,i=e])),c=x(void 0)((e=>[c,c=e]));S([n],(([e])=>i=e));const u=Me`
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
      ${!1}
    </div>
  `,d=Me`
    <!-- array displays wrap -->
    <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
      ${Ye({showLevels:a,showAll:o,showKids:r,formatChange:s,array:t,arrayView:c,allowMaximize:l})}
    </div>
  `;return Me`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    ${u}
    ${(o||i||r||null==i&&a>0)&&d}
  </div>
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
  `}const Ie=Z((e=>{const t=[void 0,null,"null"].includes(e),n=e,o=!isNaN(n)&&n>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(n):"";let r=x(0)((e=>[r,r=e]));return Me`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{r=Date.now()}}
      onmouseup=${t=>{if(Date.now()-r>300)return t.preventDefault(),t.stopPropagation(),console.log("xx"),!0;console.log("copied"),Ue(e)}}
      style="cursor:pointer;"
      style.background-color=${t?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||t&&"white"||""}
      title=${o}
    >${(null===e?"null":!1===e&&"false")||void 0===e&&"undefined"||e}</div>
  `})),We=e=>Me`
    <a onclick=${()=>Ue(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,Je=Z((({key:e,showKids:t,show:n,showLevels:o,value:r,showAll:a,onHeaderClick:s,formatChange:l,allowMaximize:i})=>{let c=x(!1)((e=>[c,c=e])),u=x(!1)((e=>[u,u=e]));const d=k((()=>"maximize-dump-"+performance.now()));S([n],(([e])=>c=e));const g=!e||t||c||null==c&&o>0,p=Me`
    <div style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;"+(c?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a onclick=${()=>c=!c}>
        <strong>${e}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(r).length}}
        </sup>
      </a>
      ${!1}
    </div>
  `,f=Me`
    <div style="display:flex;flex-wrap:wrap">
      ${Object.entries(r).map((([e,n])=>Me`
        <!-- recurse -->
        <div class="child-margin-xxs"
          style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(n&&"object"==typeof n?"flex-grow:1;":"flex: 1 1 10em;")}
        >
          ${Ge({value:n,key:e,show:c,showAll:a,showLevels:o-1,showKids:a||t,isRootDump:!1,formatChange:l,onHeaderClick:s,allowMaximize:i})}
      `.key([e,n])))}
    </div>
  `;return Me`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&p}
        ${g&&f}

        <!-- maximize -->
        <dialog id=${d} style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true"
          >dialog title</div>
          
          ${u&&Me`
            ${p}
            ${f}
          `}

          <div style="padding:.25em">
            <button type="button" onclick=${()=>document.getElementById(d).close()}>🅧 close</button>
          </div>
        </dialog>
      </div>
    </div>
  `})),qe=Z((({value:e,format:t,showAll:n,formatChange:o,showAllChange:r})=>Me`
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
            onclick=${()=>function(e){Ue(JSON.stringify(e,null,2))}(e)}
          >copy</a>
        </div>
      </div>
    </div>
  `)),Ge=Z((({key:e,value:t,showKids:n=!1,showLevels:o=-1,showAll:r=!1,format:a="flex",formatChange:s=(e=>a=e),isRootDump:l=!0,onHeaderClick:i,allowMaximize:c})=>{l&&null==c&&(c=!0),console.log("allowMaximize",c);const u=null===t?"null":typeof t;let d=x(!1)((e=>[d,d=e]));$((e=>[a,a=e])),$((e=>[r,r=e]));let g=x(void 0)((e=>[g,g=e]));return function(e){const t=b.memory.initCurrentTemplater;t.global.init||(t.global.init=e,e())}((()=>{(o=o>=0&&o||(-1===o&&!e&&t&&t instanceof Object?2:0))>0&&(d=!0)})),[null,void 0].includes(t)?_e({key:e,value:u,onHeaderClick:i}):["boolean","number","string"].includes(u)?_e({key:e,value:t,onHeaderClick:i}):function(){if(null===t)return n?_e({key:e,value:"null",onHeaderClick:i}):Me``;const u=(!a||"flex"===a)&&t.push&&t.pop;return Me`
      <div class="taggedjs-dump">
        ${l&&qe({value:t,format:a,showAll:r,showAllChange:e=>r=e,formatChange:s})}
        ${"json"===a&&Me`
          <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
          >${JSON.stringify(t,null,2)}</textarea>
        `||u&&He({key:e,value:t,show:d,showAll:r,showKids:n,showLevels:o,formatChange:s,allowMaximize:c})||Je({key:e,show:d,showKids:n,showLevels:o,value:t,showAll:r,formatChange:s,onHeaderClick:i,allowMaximize:c})}
      </div>
    `}()}));var Qe=t.B;export{Qe as dump};