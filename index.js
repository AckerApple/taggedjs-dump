var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function r(e){return o(e,new WeakMap)}function o(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,r),Array.isArray(e))for(let n=0;n<e.length;n++)r[n]=o(e[n],t);else for(const n in e)e.hasOwnProperty(n)&&(r[n]=o(e[n],t));return r}function n(e,t){return a(e,t,new WeakMap)}function a(e,t,r){if(e===t||(n=t,(o=e)instanceof Function&&n instanceof Function&&o.toString()===n.toString()))return!0;var o,n;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;const s=Object.keys(e),l=Object.keys(t);if(s.length!==l.length)return!1;if(r.has(e))return!0;r.set(e,0);for(const o of s)if(!l.includes(o)||!a(e[o],t[o],r))return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!a(e[o],t[o],r))return!1}else if(Array.isArray(e)||Array.isArray(t))return!1;return!0}function s(e){return!0===e?.isTemplater}function l(e){return!0===e?.isTag}function i(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function c(e){return e instanceof Array&&e.every((e=>l(e)))}e.d(t,{B:()=>Ge});class u{templater;subject;isApp=!0;propsConfig;memory={state:{newest:[]}};constructor(e,t){this.templater=e,this.subject=t;const o=this.templater.children,n=this.templater.props,a=r(n);this.propsConfig={latest:n,latestCloned:a,clonedProps:a,lastClonedKidValues:o.value.map((e=>d(e.values)))},l(n)||(this.propsConfig.latestCloned=r(a),this.propsConfig.clonedProps=this.propsConfig.latestCloned)}}function d(e){return e.map((e=>{const t=e;return l(t)?d(t.values):s(t)?r(t.props):c(t)?d(t):r(e)}))}class p extends u{ownerTagSupport;templater;subject;isApp=!1;constructor(e,t,r){super(t,r),this.ownerTagSupport=e,this.templater=t,this.subject=r}}function g(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};g.tagUse.push(t)}g.tagUse=[],g.memory={};class f{value;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(e){this.value=e}subscribe(e){const t=this.subscribeWith;if(t){if(this.methods.length){const t=e;e=(e,r)=>{b(e,r,this.methods,(e=>t(e,r)))}}return t(e)}this.subscribers.push(e),m.globalSubs.push(e);const r=function(e,t){const r=m.globalSubCount$;m.globalSubCount$.set(r.value+1);const o=()=>{o.unsubscribe()};return o.subscriptions=[],o.unsubscribe=()=>(h(e.subscribers,t),h(m.globalSubs,t),m.globalSubCount$.set(r.value-1),o.unsubscribe=()=>o,o.subscriptions.forEach((e=>e.unsubscribe())),o),o.add=e=>(o.subscriptions.push(e),o),o}(this,e);return r}set(e){this.value=e,this.subscribers.forEach((t=>{t.value=e,t(e)}))}next=this.set;toPromise(){return new Promise(((e,t)=>{const r=this.subscribe((t=>{r.unsubscribe(),e(t)}))}))}pipe(...e){const t=new f;return t.methods=e,t.subscribeWith=e=>this.subscribe(e),t}}function h(e,t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}const m=f;function b(e,t,r,o){const n=[...r],a=n.shift(),s=e=>{if(n.length)return b(e,t,n,o);o(e)};let l=s;const i=a(e,{setHandler:e=>l=e,next:s});l(i)}m.globalSubs=[],m.globalSubCount$=new f,m.globalSubCount$.set(0);class w extends f{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value,t),t}}function y(e,t){return e.strings.length===t.strings.length&&(!!e.strings.every(((e,r)=>t.strings[r]===e))&&(e.values.length===t.values.length&&!!t.values.every(((t,r)=>{const o=e.values[r];return!(t instanceof Function&&o instanceof Function)||!(t.toString()!==o.toString())}))))}function v(e,t){const r=e.tagSupport;if(t!=r.subject)throw new Error("fff - subjects do not match");delete t.tag,delete r.subject.tag,r.templater.global.oldest.destroy(),E(r),r.templater.global.context={}}function E(e){delete e.templater.global.oldest,delete e.templater.global.newest}class S{props;children;isTag=!1;tagged;wrapper;global={newestTemplater:this,context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};tagSupport;constructor(e,t){this.props=e,this.children=t}isTemplater=!0}function C(e,t,r,o){const n=e,a=t?.ownerTag||o;if(t)n.memory.state.newest=[...t.tagSupport.memory.state.newest],n.templater.global=t.tagSupport.templater.global,function(e,t){g.tagUse.forEach((r=>r.beforeRedraw(e,t)))}(n,t);else{if(!n)throw new Error("63521");!function(e,t){g.tagUse.forEach((r=>r.beforeRender(e,t)))}(n,a),g.memory.providerConfig.ownerTag=a}const s=n.templater,l=s.wrapper(n,r);return function(e,t){g.tagUse.forEach((r=>r.afterRender(e,t)))}(n,l),!t||y(t,l)||function(e,t,r){const o=e.tagSupport.templater.global.insertBefore;v(e,r),t.global={...t.global};const n=t.global;n.insertBefore=o,n.deleted=!1,delete n.oldest,delete n.newest,delete r.tag}(t,s,r),l.ownerTag=a,n.templater.global.newest=l,l}function x(e){e.tagSupport.templater.global.providers.filter((e=>!n(e.instance,e.clone))).forEach((t=>{!function(e,t){T(e,t).forEach((({tag:e,renderCount:t,provider:o})=>{e.tagSupport.templater.global.deleted||t===e.tagSupport.templater.global.renderCount&&(o.clone=r(o.instance),k(e.tagSupport,!1))}))}(e.getAppElement(),t),t.clone=r(t.instance)}))}function T(e,t,r=[]){const o=e.tagSupport.templater.global,n=o.providers.find((e=>e.constructMethod===t.constructMethod));return n&&r.push({tag:e,renderCount:o.renderCount,provider:n}),e.childTags.forEach((e=>T(e,t,r))),r.forEach((({tag:e})=>{if(e.tagSupport.templater.global.deleted)throw new Error("do not get here - 0")})),r}function k(e,t){const r=e.templater.global;if(l(e.templater)){const e=r.newest.ownerTag;return++r.renderCount,k(e.tagSupport,!0)}const o=e.subject,a=e.templater,s=o.tag,i=s?.tagSupport.templater.global.newest;let c,u=!1;t&&i&&(c=i.ownerTag,c)&&(u=!n(a.props,i.tagSupport.propsConfig.latestCloned));const d=r.newest?.tagSupport;if(!a.global.oldest)throw new Error("already causing trouble");const p=function(e,t,r,o){const n=o.tag;if(t.global=n.tagSupport.templater.global,!e.hasLiveElements)throw new Error("1080 - should have live elements");const a=r.templater.global.renderCount;x(e);const s=r.templater.global.newest;if(a!==r.templater.global.renderCount)return e.updateByTag(s),s;const l=r.templater||t,i=o.tag||l.global.newest||l.global.oldest,c=C(t.tagSupport,i,o,e.ownerTag),u=r.templater.global.oldest||e;return c.tagSupport.templater.global.oldest=u,y(s,c)&&(o.tag=c,u.updateByTag(c)),c}(a.global.oldest,a,d,o);return c&&u?(k(c.tagSupport,!0),p):p}function $(e,t){if(e.isChildOverride)return e;if(!t.ownerTag&&!t.tagSupport.templater.global.isApp)throw new Error("no ownerTag issue here");const r=(r,o)=>A(e,t,r,o);return r.tagFunction=e,r}function A(e,t,r,o){const n=t.tagSupport,a=n.templater.global.renderCount,s=e.bind(r)(...o);return a!==n.templater.global.renderCount||n.templater.global.deleted?s instanceof Promise?s.then((()=>"promise-no-data-ever")):"no-data-ever":(k(n,!0),s instanceof Promise?s.then((()=>(n.templater.global.deleted||k(n,!0),"promise-no-data-ever"))):"no-data-ever")}function j(e,t,r){const o=function(e,o){if("object"!=typeof e)return e;const n=e;return Object.entries(n).forEach((([e,o])=>{if(o instanceof Function){if(n[e].original)return;return n[e]=(...t)=>n[e].toCall(...t),n[e].toCall=(...e)=>N(o,e,t,r),void(n[e].original=o)}})),n}(l(e)?0:e);return o}function N(e,t,r,o){const n=r.global.renderCount,a=e(...t);if(r.global.renderCount>n)throw new Error("already rendered");const s=k(o.templater.global.newest.tagSupport,!0);if(s.tagSupport.templater.global.newest!=s)throw new Error("newest assignment issue?");return a}const B=[];let V=0;function P(e){const t=function(t,o){(l(t)||c(t))&&(o=t,t=void 0);const{childSubject:n,madeSubject:a}=function(e){if(i(e))return{childSubject:e,madeSubject:!1};if(c(e))return{childSubject:new w(e),madeSubject:!0};const t=e;return t?(t.memory.arrayValue=0,{childSubject:new w([t]),madeSubject:!0}):{childSubject:new w([]),madeSubject:!0}}(o);n.isChildSubject=!0;const s=new S(t,n),u=function(e,t){const o=function(n,a){const s=n.templater.global;s.newestTemplater=e,++s.renderCount,e.global=s;const l=e.children,i=s.oldest?.tagSupport.templater.children.lastArray;i&&(l.lastArray=i);const c=o.original,u=e.global.oldest;if(u&&!u.hasLiveElements)throw new Error("issue already 22");let d=e.props;const g=n.ownerTagSupport,f=g?.templater,h=f?.global.newest,m=h?.tagSupport.templater;if(h&&!m)throw new Error("what to do here?");let b=j(d,m,n.ownerTagSupport);const w=r(d),y=c(b,l);return y.version=s.renderCount,y.tagSupport=new p(n.ownerTagSupport,e,a),y.tagSupport.propsConfig={latest:d,latestCloned:w,clonedProps:w,lastClonedKidValues:y.tagSupport.propsConfig.lastClonedKidValues},y.tagSupport.memory=n.memory,t&&l.value.forEach((e=>{e.values.forEach(((t,r)=>{if(!(t instanceof Function))return;const o=e.values[r];o.isChildOverride||(e.values[r]=function(...e){const r=y.ownerTag;A(t,r,this,e)},o.isChildOverride=!0)}))})),y};return o}(s,a);return u.original=e,s.tagged=!0,s.wrapper=u,s};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=B,e.setUse=g,e.tagIndex=V++}(e),B.push(e),t}function R(e,t){t.parentNode.insertBefore(e,t)}function L(e,t,r){const o=e.split(".");if("style"===o[0]&&(r.style[o[1]]=t),"class"===o[0])return o.shift(),void(t?o.forEach((e=>r.classList.add(e))):o.forEach((e=>r.classList.remove(e))))}const F=/^\s*{__tagvar/,O=/}\s*$/;function D(e){return e&&e.search(F)>=0&&e.search(O)>=0}function M(e,t,r,o,n,a){if(D(t))return function(e,t,r,o,n,a){return z(e,K(o,t),r,n,a)}(e,t,r,o,n,a);if(D(e)){let t;const s=K(o,e).subscribe((e=>{!function(e,t,r,o,n){if(t&&t!=e&&("string"==typeof t?r.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>r.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>z(e,t,r,o,n)));else{if(!e.length)return;z(e,"",r,o,n)}}(e,t,r,n,a),t=e}));return n.tagSupport.templater.global.subscriptions.push(s),void r.removeAttribute(e)}return X(e)?L(e,t,r):void 0}function K(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function z(e,t,r,o,n){const a=X(e);if(t instanceof Function){const o=function(...e){return t(r,e)};r[e].action=o}if(i(t)){r.removeAttribute(e);const s=t=>(t instanceof Function&&(t=$(t,o)),function(e,t,r,o,n){if(e instanceof Function){const o=function(...r){return e(t,r)};return o.tagFunction=e,void(t[r]=o)}if(o)return void L(r,e,t);if(e)return void n(t,r,e);[void 0,!1,null].includes(e)?t.removeAttribute(r):n(t,r,e)}(t,r,e,a,n)),l=t.subscribe(s);o.tagSupport.templater.global.subscriptions.push(l)}else n(r,e,t)}function X(e){return e.search(/^(class|style)(\.)/)>=0}function H(e,t,r){e.setAttribute(t,r)}function U(e,t,r){e[t]=r}function _(e,t,r){const o=e.getAttributeNames();let n=H;o.forEach((o=>{"INPUT"===e.nodeName&&"value"===o&&(n=U),M(o,e.getAttribute(o),e,t,r,n),n=H}))}const Y=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function W(e,t,r,o,n){if(!0!==e.tagged){const t=e.wrapper.original;let r=t.name||t.constructor?.name;"Function"===r&&(r=void 0);const o=r||t.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${o}\n\n`)}if(e.tagSupport=new p(o.tagSupport,e,t),"TEMPLATE"!=r.nodeName)throw new Error("9");e.global.insertBefore=r;let a=t.tag;return g.memory.providerConfig.ownerTag=o,(!a||n.forceElement)&&(a=function(e,t,r,o,n){const a=o.clones.map((e=>e));if((r=C(e.tagSupport,t.tag,t,o)).tagSupport.templater.global.newest!=r)throw new Error("mismatch result newest");if(e.global.newest=r,o.clones.length>a.length){const e=o.clones.filter((e=>!a.find((t=>t===e))));if(r.clones.push(...e),e.find((e=>e===n)))throw new Error("way back here we add marker")}if(o.childTags.find((e=>e===r)))throw new Error("about to reattach tag already present");return o.childTags.push(r),r}(e,t,a,o,r)),function(e,t,r,{counts:o,forceElement:n}){if(!r.parentNode)throw new Error(`before here processTagResult ${r.nodeName}`);const a=t,s=a.tag,l=s?.tagSupport.templater.global.oldest||void 0;if(l&&l)return function(e,t,r){if(t instanceof Function){const e=t(r.tagSupport);return r.updateByTag(e),void(t.tag=e)}return r.updateByTag(e),void(t.tag=e)}(e,a,l);e.buildBeforeElement(r,{counts:o,forceElement:n})}(a,t,r,n),a}class I extends Error{details;constructor(e,t,r={}){super(e),this.name=I.name,this.details={...r,errorCode:t}}}class J extends I{constructor(e,t){super(e,"array-no-key-error",t),this.name=J.name}}class q extends I{constructor(e,t){super(e,"state-mismatch-error",t),this.name=q.name}}function G(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Q(e,t){E(e.tagSupport),e.destroy({stagger:t.removed++})}function Z(e,t){const r=e.tagSupport.templater.global.placeholder;r&&G(t,r)}function ee(e,t,r,o){if(!e.tagSupport){if(!l(e))throw new Error("issue non-tag here");if(te(e,o,t),o.childTags.find((t=>t===e)))throw new Error("about to reattach tag already present - 5");o.childTags.push(e)}if(e.ownerTag=o,"TEMPLATE"!==r.tagName)throw new Error(`processTag.function.ts - insertBefore is not TEMPLATE ${r.tagName}`);e.buildBeforeElement(r,{counts:{added:0,removed:0},forceElement:!0})}function te(e,t,r){if(!t)throw new Error("no owner error");const o={global:{renderCount:0,providers:[],context:{},subscriptions:[],deleted:!1,newestTemplater:{}},children:new w([]),props:{},isTag:!0,isTemplater:!1,tagged:!1,wrapper:()=>{},tagSupport:{}};e.tagSupport=new p(t.tagSupport,o,r),o.global.oldest=e,o.global.newest=e,o.tagSupport=e.tagSupport,e.ownerTag=t}function re(e,t,r,o,n){const a=o.clones;let s=e.lastArray=e.lastArray||[];e.placeholder||function(e,t){if("TEMPLATE"!==e.nodeName)return void(t.placeholder=e);const r=t.placeholder=document.createTextNode(""),o=e.parentNode;o.insertBefore(r,e),o.removeChild(e)}(r,e);const l=e.placeholder;let i=0;return s=e.lastArray=e.lastArray.filter(((e,r)=>{const o=t.length-1<r-i,a=t[r-i],l=a?.memory.arrayValue,c=e.tag;if(o||!ne(l,c.memory.arrayValue)){const e=s[r];return Q(e.tag,n.counts),e.deleted=!0,++i,++n.counts.removed,!1}return!0})),t.forEach(((e,r)=>{const a=s[r],i=a?.tag.tagSupport,c=new w({});if(te(e,o,c),i&&(e.tagSupport.templater.global=i.templater.global,i.templater.global.newest=e),!("arrayValue"in e.memory)){const r={template:e.getTemplate().string,array:t,ownerTagContent:o.lastTemplateString},n="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(n,r),new J(n,r)}if(s.length>r){const t=a.tag.tagSupport,o=t.templater.global;if(ne(a.tag.memory.arrayValue,e.memory.arrayValue))return e.tagSupport=e.tagSupport||t,o.oldest.updateByTag(e),[];throw oe(l,e,r,n,s),new Error("item should be back")}oe(l,e,r,n,s),o.childTags.push(e)})),a}function oe(e,t,r,o,n){const a={tag:t,index:r};n.push(a);const s={added:o.counts.added+r,removed:o.counts.removed};if(!e.parentNode)throw new Error("issue adding array item");const l=document.createElement("template");e.parentNode.insertBefore(l,e),t.buildBeforeElement(l,{counts:s,forceElement:o.forceElement})}function ne(e,t){return e===t||!!(e instanceof Array&&t instanceof Array&&e.length==t.length)&&e.every(((e,r)=>e==t[r]))}function ae(e,t,r){t.insertBefore=r;const o=t.clone||r;if(t.lastValue===e&&"lastValue"in t)return;t.lastValue=e;const n=function(e,t){const r=t.parentNode;let o=e;[void 0,!1,null].includes(e)&&(o="");const n=document.createTextNode(o);return r.insertBefore(n,t),r.removeChild(t),n}(e,o);t.clone=n}var se;!function(e){e.tag="tag",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(se||(se={}));const le=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function ie(e,t,r,o){let a=r.tag;const s=a.tagSupport.templater.wrapper,l=t.wrapper;let i=!1;s&&l&&(i=s.original===l.original);const c=a.tagSupport,u=c.templater.global,d=(u.insertBefore,u.placeholder);if(d&&!d.parentNode)throw new Error("stop here no subject parent node update existing tag");if(!i)return v(c.templater.global.oldest,r),W(t,r,o,e,{forceElement:!1,counts:{added:0,removed:0}});if(!function(e,t,r){const o=e===t,a=e.propsConfig===t.propsConfig;if(o)throw new Error("sameSupport - 22");if(a)throw new Error("samePropConfig - 22");if(t.templater.isTag||e.templater.isTag||r.isTag)throw new Error("trying to compare a basic tag");const s=function(e,t){let r=e,o=t;if("object"==typeof e){if(!t)return 3;if(r={...e},o={...t||{}},!Object.entries(r).every((([e,t])=>{let n=o[e];return t instanceof Function?n instanceof Function&&(n.original&&(n=n.original),t.original&&(t=t.original),t.toString()===n.toString()&&(delete r[e],delete o[e],5)):4})))return 6}return!n(o,r)&&7}(r.props,e.propsConfig.latestCloned);if(s)return s;const l=function(e,t){const r=e.propsConfig.lastClonedKidValues,o=t.propsConfig.lastClonedKidValues,n=r.every(((e,t)=>{const r=o[t];return e.every(((e,t)=>e===r[t]))}));return!n&&9}(e,t);return l}(c,t.tagSupport,t)){const r=t.props;return r&&"object"==typeof r&&function(e,t,r,o){const n=(t=t.tagSupport.templater.global.newest).tagSupport.propsConfig.latestCloned,a=r.tagSupport.templater.global.newest.tagSupport;Object.entries(n).forEach((([t,r])=>{if(!(r instanceof Function))return;r.original;const s=o[t];s.original||(n[t].toCall=(...t)=>N(s,t,e,a))}))}(t,a,e,r),a}const p=t.global.oldest,g=t.global.newest;if(!g||!p)throw new Error("how no previous or oldest nor newest?");const f=k(t.tagSupport,!1);a=r.tag;const h=f.tagSupport.templater.global.oldest;if(!h)return ce(f,o,c,r);if(h&&t.children.value.length&&h.tagSupport.templater.children.set(t.children.value),g&&!p)throw new Error("bad elders");const m=i&&g.isLikeTag(f);if(g&&!p)throw new Error("bad elders");let b=c.templater.global.oldest;if(m){if(!f.tagSupport.templater.global.oldest)throw new Error("maybe 6");return r.tag=f,p.updateByTag(f),f}return i&&a&&(v(a,r),f.tagSupport.templater.global.context={}),b=void 0,ce(f,c.templater.global.insertBefore,c,r),c.templater.global.newest=f,f}function ce(e,t,r,o){return e.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0}}),e.tagSupport.templater.global.oldest=e,e.tagSupport.templater.global.newest=e,r.templater.global.oldest=e,r.templater.global.newest=e,o.tag=e,e}function ue(e,t,r,o,n){const a=[];if(!e.hasAttribute("end"))return{clones:a};const l=e.getAttribute("id");if(l?.substring(0,me.length)!==me)return{clones:a};const i=t[l];return s(i.value)||c(i.value)?{clones:a,tagComponent:{variableName:l,ownerTag:r,subject:i,insertBefore:e}}:(de(e,i,r,o,{isForceElement:n.forceElement}),{clones:a})}function de(e,t,r,o,{isForceElement:n}){let a=!1;const u=t.subscribe((u=>{if(a)return void function(e,t,r,o){const n=e,a=s(t);if(function(e,t,r){const o=e,n=o.lastArray;if(n&&!c(t)){const e=o.placeholder;return delete o.lastArray,delete o.placeholder,G(r,e),n.forEach((({tag:e})=>Q(e,{added:0,removed:0}))),"array"}const a=e,i=a.tag;if(i){const o=l(t);return l(e.value)&&o?!y(t,i)&&(Z(i,r),v(i,a),2):!s(t)&&(Z(i,r),v(i,a),"different-tag")}const u=e,d="lastValue"in u,p=u.lastValue;d&&p!==t&&function(e,t){const r=t.clone,o=r.parentNode;o.insertBefore(e,r),o.removeChild(r),delete t.clone,delete t.lastValue}(r,u)}(e,t,o),a){const e=t;return n.tag?(e.tagSupport=new p(r.tagSupport,e,n),ie(r,e,n,o),n):(W(e,n,o,r,{forceElement:!0,counts:{added:0,removed:0}}),n)}const u=n.tag;if(u)return function(e,t,r,o){const n=r&&y(e,r),a=r&&r.getTemplate&&e.isLikeTag(r),s=r;if(s.tagSupport||te(s,o,t),!n)return n||a?ee(r,t,e.tagSupport.templater.global.insertBefore,o):void ae(r,t,t.insertBefore);e.updateByTag(s)}(u,e,t,r),n;if(c(t))return re(e,t,o,r,{counts:{added:0,removed:0}}),e;if(t instanceof Function){const o=$(t,r);return e.set(o),e}if(l(t)){if("TEMPLATE"!==o.nodeName)throw new Error(`expected template - ${o.nodeName}`);return ee(t,n,o,r),n}i(t)||ae(t,e,o)}(t,u,r,e);if(!e.parentNode)throw new Error("no insert before parent node - 3");r.tagSupport.templater.global.placeholder,function(e,t,r,o,n){const a=function(e){return s(e)?se.tagComponent:l(e)?se.tag:c(e)?se.tagArray:se.value}(e);switch(a){case se.tag:return void ee(e,t,r,o);case se.tagArray:return re(t,e,r,o,n);case se.tagComponent:return void W(e,t,r,o,n)}ae(e,t,r)}(u,t,e,r,{counts:{...o},forceElement:n}),n&&(n=!1),a=!0}));r.tagSupport.templater.global.subscriptions.push(u)}function pe(e,t,r,o){if(!e.getAttribute)return;"TEXTAREA"===e.nodeName&&function(e,t,r){const o=e.value;if(o.search(le)>=0){const n=o.match(/__tagvar(\d{1,4})/),a="{"+(n?n[0]:"")+"}";e.value="",e.setAttribute("text-var-value",a);const s=(t,r,o)=>e.value=o;M("text-var-value",a,e,t,r,s)}}(e,r,o);let n=t.counts.added;n=function(e,t){const r=e.oninit;if(!r)return t.added;const o=r.tagFunction;if(!o)return t.added;const n=o.tagFunction;return n?(n({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-n,e.children&&new Array(...e.children).forEach(((e,n)=>pe(e,{...t,counts:t.counts},r,o)))}function ge(e,t,r,o,n){if(!n||"TEMPLATE"===e.tagName)return{clones:[],tagComponents:[]};const a=o.counts,s=[],l=[];return new Array(...n).forEach((e=>{const{clones:n,tagComponent:i}=ue(e,t,r,a,o);s.push(...n),i?l.push(i):e.children&&new Array(...e.children).forEach(((e,n)=>{if(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")}(e)){const{tagComponent:n}=ue(e,t,r,a,o);n&&l.push(n)}const{clones:i,tagComponents:c}=ge(e,t,r,o,e.children);s.push(...i),l.push(...c)}))})),{clones:s,tagComponents:l}}function fe(e,t,r,o,n){const a=[],s=[],l=r.interpolation,i=e.children[0].content.children;if(l.keys.length){const{clones:r,tagComponents:l}=ge(e,t,o,n,i);a.push(...r),s.push(...l)}return _(e,t,o),he(i,t,o),{clones:a,tagComponents:s}}function he(e,t,r){new Array(...e).forEach((e=>{_(e,t,r),e.children&&he(e.children,t,r)}))}const me="__tagvar",be="--"+me+"--",we=new RegExp(me,"g"),ye=new RegExp(be,"g");class ve{strings;values;version=0;isTag=!0;hasLiveElements=!1;clones=[];childTags=[];tagSupport;lastTemplateString=void 0;ownerTag;appElement;memory={};constructor(e,t){this.strings=e,this.values=t}key(e){return this.memory.arrayValue=e,this}destroy(e={stagger:0,byParent:!1}){if(!this.hasLiveElements)throw new Error("destroying wrong tag");const t=this.tagSupport,r=t.templater.global,o=t.subject,n=r.insertBefore;"TEMPLATE"===n.nodeName&&r.placeholder&&!("arrayValue"in this.memory)&&(e.byParent||Z(this,n)),delete r.placeholder,t&&function(e,t){g.tagUse.forEach((r=>r.beforeDestroy(e,t)))}(t,this);const a=e.byParent?[]:Se(this.childTags);let s;if(a.forEach((e=>{const t=e.tagSupport.templater.global;delete t.newest,t.deleted=!0})),delete r.oldest,delete r.newest,r.deleted=!0,this.hasLiveElements=!1,delete o.tag,this.destroySubscriptions(),this.ownerTag&&(this.ownerTag.childTags=this.ownerTag.childTags.filter((e=>e!==this))),e.byParent)this.destroyClones();else{const{stagger:t,promise:r}=this.destroyClones(e);e.stagger=t,r&&(s=r)}return s=s?s.then((async()=>{const e=a.map((e=>e.destroy({stagger:0,byParent:!0})));return Promise.all(e)})):Promise.all(a.map((e=>e.destroy({stagger:0,byParent:!0})))),s.then((()=>e.stagger))}destroySubscriptions(){const e=this.tagSupport.templater.global;e.subscriptions.forEach((e=>e.unsubscribe())),e.subscriptions.length=0}destroyClones({stagger:e}={stagger:0}){const t=this.clones.map((t=>this.checkCloneRemoval(t,e))).filter((e=>e));return this.clones.length=0,t.length?{promise:Promise.all(t),stagger:e}:{stagger:e}}checkCloneRemoval(e,t){let r;const o=e;o.ondestroy&&(r=function(e,t){const r=e.ondestroy;if(!r)return;const o=r.tagFunction;if(!o)return;const n=o.tagFunction;return n?n({target:e,stagger:t}):void 0}(o,t));const n=()=>{e.parentNode?.removeChild(e);const t=this.ownerTag;t&&(t.clones=t.clones.filter((t=>t!==e)))};return r instanceof Promise?r.then(n):(n(),r)}getTemplate(){const e=function(e){const t=function(e){const t=[];return{string:e.replace(Y,((r,o)=>{if(r.startsWith("<"))return r;const n=o.substring(1,o.length-1),a="template-"+e.length;return t.push(n),`<template interpolate end id="${n}" name="${a}"></template>`})),keys:t}}(e);return t.string=t.string.replace(ye,me),t}(this.strings.map(((e,t)=>(e.replace(we,be)+(this.values.length>t?`{${me}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=e.string,{interpolation:e,string:e.string,strings:this.strings,values:this.values,context:this.tagSupport.templater.global.context||{}}}isLikeTag(e){return y(this,e)}updateByTag(e){if(!this.tagSupport.templater.global.oldest)throw new Error("no oldest here");if(!this.hasLiveElements)throw new Error("trying to update a tag with no elements on stage");if(this.tagSupport.templater.global.newest=e,!this.tagSupport.templater.global.context)throw new Error("issue back here");this.updateConfig(e.strings,e.values)}updateConfig(e,t){this.strings=e,this.updateValues(t)}update(){return this.updateContext(this.tagSupport.templater.global.context)}updateValues(e){return this.values=e,this.updateContext(this.tagSupport.templater.global.context)}updateContext(e){return this.strings.map(((t,r)=>{const o=me+r,n=this.values.length>r,a=this.values[r];if(o in e)return function(e,t,r){const o=e[t],n=o.tag;if(n){const e=n.tagSupport.templater;r&&r.global!==e.global&&s(r)&&function(e,t){const r=e.wrapper.original,o=t.wrapper?.original;r===o&&(t.global=e.global)}(e,r)}i(r)||o.set(r)}(e,o,a);n&&(e[o]=function(e,t,r){if(s(t))return new w(t);if(t instanceof Function)return new w(t);if(e){if(l(t)){if(t.ownerTag=r,r.childTags.find((e=>e===t)))throw new Error("about to reattach tag already present - 2");return new w(t)}return i(t)?t:new w(t)}}(n,a,this))})),e}getAppElement(){let e=this;for(;e.ownerTag;)e=e.ownerTag;return e}rebuild(){const e=this.tagSupport.templater.global.insertBefore;if(!e){const e=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw e.tag=this,e}this.buildBeforeElement(e,{forceElement:!0,counts:{added:0,removed:0}})}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){const r=this.tagSupport.subject,o=this.tagSupport.templater.global;if(o.insertBefore=e,!o.placeholder){if("TEMPLATE"!==e.nodeName)throw new Error(" no template at insertBefore");!function(e){const t=e.insertBefore,r=e.placeholder=document.createTextNode(""),o=t.parentNode;o.insertBefore(r,t),o.removeChild(t)}(o)}if(!o.placeholder?.parentNode)throw new Error("????");const n=o.placeholder;o.oldest=this,o.newest=this,r.tag=this,this.hasLiveElements=!0,this.clones.length&&this.clones.forEach((e=>this.checkCloneRemoval(e,0))),o.insertBefore=e;const a=this.update(),s=this.getTemplate();if(!n.parentNode)throw new Error("no parent before building tag");const l=document.createElement("div");l.id="tag-temp-holder",l.innerHTML=`<template id="temp-template-tag-wrap">${s.string}</template>`;const{tagComponents:i}=fe(l,a,s,this,{forceElement:t.forceElement,counts:t.counts});if(!n.parentNode)throw new Error("no parent after building tag");if(Ee(l,n,this,a,t),!o.placeholder?.parentNode)throw new Error("???? - 2");let c=t.forceElement;i.forEach((r=>{if(!r.ownerTag.tagSupport.templater.global.placeholder&&!e.parentNode)throw new Error("no parent building tag components");if(!o.placeholder?.parentNode)throw new Error("???? - 3");if(de(r.insertBefore,r.subject,r.ownerTag,t.counts,{isForceElement:c}),!o.placeholder?.parentNode)throw new Error("???? - 4");if(Ee(l,r.insertBefore,r.ownerTag,a,t),!o.placeholder?.parentNode)throw new Error("???? - 5")}))}}function Ee(e,t,r,o,n){const a=function(e,t){const r=[];let o=e.children[0].content.firstChild;for(;o;){const e=o.nextSibling;R(o,t),r.push(o),o=e}return r}(e,t);return a.length?(a.forEach((e=>pe(e,n,o,r))),r.clones.push(...a),a):a}function Se(e,t=[]){for(let r=e.length-1;r>=0;--r){const o=e[r];if(t.find((e=>e===o)))throw new Error("child tag registered twice for delete");t.push(o),e.splice(r,1),Se(o.childTags,t)}return t}function Ce(e,...t){return new ve(e,t)}function xe(e){const t=e.callback;if(!t)return e.defaultValue;const r=t(Te),[o]=r,[n]=t(o);if(n!==Te){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:r,oldValue:o,checkValue:n}),new Error(a)}return o}g.memory.stateConfig={array:[]},g({beforeRender:e=>ke(e),beforeRedraw:e=>ke(e),afterRender:e=>{const t=e.memory.state,r=g.memory.stateConfig,o=r.rearray;if(o.length&&o.length!==r.array.length){const t=`States lengths has changed ${o.length} !== ${r.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`,n={oldStates:r.array,newStates:r.rearray,component:e.templater?.wrapper.original},a=new q(t,n);throw console.warn(t,n),a}delete r.rearray,t.newest=r.array,t.newest.forEach((e=>e.lastValue=xe(e))),r.array=[]}});class Te{}function ke(e){const t=e.memory.state,r=g.memory.stateConfig;if(r.rearray){const o="last state not cleared. Possibly in the middle of rendering one component and another is trying to render";throw console.error(o,{config:r,component:e.templater?.wrapper.original,wasInMiddleOf:r.tagSupport?.templater.wrapper.original,state:t,expectedClearArray:r.rearray}),new q(o,{config:r,component:e.templater?.wrapper.original,state:t,expectedClearArray:r.rearray})}r.rearray=[],t?.newest.length&&(t.newest.map((e=>xe(e))),r.rearray.push(...t.newest)),r.tagSupport=e}function $e(e){const t=g.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=xe(o);r=t=>[e,e=t];const n={get:()=>xe(n),callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),e}let n=(e instanceof Function?e:()=>e)();r=e=>[n,n=e];const a={get:()=>xe(a),callback:r,lastValue:n,defaultValue:n};return t.array.push(a),n}function Ae(e){const t=g.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=xe(o);r=t=>[e,e=t];const n={get:()=>xe(n),callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),je(e,n)}let n=(e instanceof Function?e:()=>e)();r=e=>[n,n=e];const a={get:()=>xe(a),callback:r,lastValue:n,defaultValue:n};return t.array.push(a),je(n,a)}function je(e,t){return r=>(t.callback=r||(t=>[e,e=t]),e)}function Ne(e,t){let r=Ae(void 0)((e=>[r,r=e]));return void 0===r?(t(e,r),r=e,e):(e.every(((e,t)=>e===r[t]))||(t(e,r),r.length=0,r.push(...e)),e)}function Be(e,t){const r=g.memory.providerConfig;r.ownerTag=t,e.templater.global.providers.length&&(r.providers.length=0,r.providers.push(...e.templater.global.providers))}function Ve(e){const t=g.memory.stateConfig,r=t.rearray,[o]=e(void 0);e(o);const n=r[t.array.length];if(n){let r=n.watch,a=xe(n);const s={get:()=>xe(s),callback:e,lastValue:a,watch:n.watch};return o!=r&&(s.watch=o,a=s.lastValue=o),t.array.push(s),e(a),a}const a={get:()=>xe(a),callback:e,lastValue:o,watch:o};return t.array.push(a),o}function Pe(e){g.memory.initCurrentTemplater=e.templater}let Re;g.memory.providerConfig={providers:[],ownerTag:void 0},g({beforeRender:(e,t)=>{Be(e,t)},beforeRedraw:(e,t)=>{Be(e,t.ownerTag)},afterRender:e=>{const t=g.memory.providerConfig;e.templater.global.providers=[...t.providers],t.providers.length=0}}),g({beforeRender:e=>Pe(e),beforeRedraw:e=>Pe(e)}),g({beforeRender:e=>Re=e,beforeRedraw:e=>Re=e,beforeDestroy:(e,t)=>{const r=e.templater.global.destroyCallback;r&&r()}});let Le=e=>()=>{throw new Error("Callback function was called immediately in sync and must instead be call async")};const Fe=Le;function Oe(e,t){e.forEach(((e,r)=>{const o=xe(e),n=t[r].callback;n&&n(o),t[r].lastValue=o}))}function De(e){const t=g.memory.stateConfig.array;Le=r=>(...o)=>function(e,t,r,...o){const n=e.memory.state.newest;Oe(n,r);const a=t(...o);Oe(r,n),k(e,!1),a instanceof Promise&&a.finally((()=>{Oe(r,n),k(e,!1)}))}(e,r,t,...o)}g({beforeRender:e=>De(e),beforeRedraw:e=>De(e),afterRender:e=>{Le=Fe}});const Me=P((({name:e,array:t,included:r,columnNames:o,allColumnNames:n})=>{let a=Ae(!1)((e=>[a,a=e])),s=Ae(!1)((e=>[s,s=e])),l=Ae(void 0)((e=>[l,l=e]));const i=$e([]);return Ce`
    <a onclick=${()=>{if(r)return o.length=0,void o.push(...o.filter((t=>t!==e)));o.push(e)}} style="cursor:pointer;">
      <input type="checkbox" ${r&&"checked"} />&nbsp;${e}
    </a>

    <div
      onmouseover=${()=>a=!0}
      onmouseout=${()=>a=!1}
    >
      <a style.visibility=${s||a?"visible":"hidden"}
        onclick=${()=>s=!s}
      >⚙️&nbsp;</a>
      
      ${r&&o.length!==n.length?Ce`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(...n)}}><small>all</small></a>
      `:Ce`
        <a style="color:blue;" onclick=${()=>{o.length=0,o.push(e)}}><small>only</small></a>
      `}
    </div>

    ${s&&Ce`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${l&&Ce`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${e=>{return r=l,o=e.target.value,r.stringFormula=o,void(r.value=Ke(o,{array:t}));var r,o}}
            >${l.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${i.map((e=>Ce`
                <div>
                  <div>
                    <strong>${e.title}</strong>
                    <a onclick=${()=>l=e}>✏️</a>
                  </div>
                  <div>${e.value}</div>
                </div>
              `.key(e)))}
          </div>
          <button type="button" onclick=${()=>{const r=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;i.push({title:"sum",stringFormula:r,value:Ke(r,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function Ke(e,t={}){return r=e,o={isNaN,Math,Number,Date,...t},r?(o=new Proxy(o,{has:()=>!0}),new Function("with(this) { return ("+r+")}").call(o)):r;var r,o}const ze=P((({array:e,showAll:t,showKids:r,toggleColumnDialog:o,columnNames:n,formatChange:a})=>Ce`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&Ce`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${n.map((e=>Ce`
                <th
                  style.cursor=${o&&"pointer"}
                  onclick=${o}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>Ce`
            <tr>
              ${n.map((o=>Ce`
                <td>
                  ${Ge({value:e[o],showLevels:0,showAll:t,showKids:t||r,isRootDump:!1,formatChange:a})}
                </td>
              `.key(e[o])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),Xe=P((({array:e,showLevels:t,showAll:r,showKids:o,columnNames:n,formatChange:a,toggleColumnDialog:s})=>Ce`
    ${e.map(((e,l)=>{return Ce`${Ge({value:(i=e,c=n,["string","number","boolean"].includes(typeof i)?i:function(e,t){const r={};return t.forEach((t=>{e.hasOwnProperty(t)&&(r[t]=e[t])})),r}(i,c)),showLevels:t,showAll:r,showKids:r||o,isRootDump:!1,formatChange:a,onHeaderClick:s})}`.key({item:e,index:l});var i,c}))}
  `));const He=P((({showLevels:e,showAll:t,showKids:r,array:o,arrayView:n,formatChange:a})=>{const s=o.length?Object.keys(o[0]):[];let l=Ae(s)((e=>[l,l=e])),i=Ae(!1)((e=>[i,i=e])),c=$e("columnDialog"+performance.now());const u=()=>{i=!i;const e=document.getElementById(c);i?e.showModal():e.close()};return Ce`
    ${"table"===n?ze({showAll:t,showKids:r,array:o,toggleColumnDialog:u,columnNames:l,formatChange:a}):Xe({array:o,showLevels:e,showAll:t,showKids:r,formatChange:a,columnNames:l,toggleColumnDialog:u})}

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
        ${s.map((e=>{const t=l.includes(e);return Ce`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${Me({name:e,array:o,included:t,columnNames:l,allColumnNames:s})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${u}>🅧 close</button>
      </div>
    </dialog>
  `})),Ue=P((({key:e,value:t,show:r,showAll:o,showKids:n,showLevels:a,formatChange:s})=>{let l=Ae(!1)((e=>[l,l=e])),i=Ae(void 0)((e=>[i,i=e]));return Ne([r],(([e])=>l=e)),Ce`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;"+(l?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a style="flex-grow:1" onclick=${()=>{l=!l}}>
        <strong>${e}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===i?"bold":""}
          onclick=${()=>i="table"===i?void 0:"table"}>${"table"===i?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${t.length}]</sup>
    </div>
    
    ${(o||l||n||null==l&&a>0)&&Ce`
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${He({showLevels:a,showAll:o,showKids:n,formatChange:s,array:t,arrayView:i})}
      </div>
    `}
  </div>
  `}));function _e(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function Ye({key:e,value:t,onHeaderClick:r}){return Ce`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&Ce`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${r&&"pointer"}
          onclick=${r}
        >${e}</div>
      `}
      ${!t.search||"https://"!==t.slice(0,8)&&"http://"!==t.slice(0,7)?We(t):Ie(t)}
    </div>
  `}const We=P((e=>{const t=[void 0,null,"null"].includes(e),r=e,o=!isNaN(r)&&r>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(r):"";let n=Ae(0)((e=>[n,n=e]));return Ce`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{n=Date.now()}}
      onmouseup=${t=>{if(Date.now()-n>300)return t.preventDefault(),t.stopPropagation(),console.log("xx"),!0;console.log("copied"),_e(e)}}
      style="cursor:pointer;"
      style.background-color=${t?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||t&&"white"||""}
      title=${o}
    >${(null===e?"null":!1===e&&"false")||void 0===e&&"undefined"||e}</div>
  `})),Ie=e=>Ce`
    <a onclick=${()=>_e(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,Je=P((({key:e,showKids:t,show:r,showLevels:o,value:n,showAll:a,onHeaderClick:s,formatChange:l})=>{let i=Ae(!1)((e=>[i,i=e]));Ne([r],(([e])=>i=e));const c=!e||t||i||null==i&&o>0;return Ce`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&Ce`
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
        
        ${c&&Ce`
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(n).map((([e,r])=>Ce`
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;")}
              >
                ${Ge({value:r,key:e,show:i,showAll:a,showLevels:o-1,showKids:a||t,isRootDump:!1,formatChange:l,onHeaderClick:s})}
            `.key([e,r])))}
          </div>
        `}
      </div>
    </div>
  `})),qe=P((({value:e,format:t,showAll:r,formatChange:o,showAllChange:n})=>Ce`
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
          ${!t||"flex"===t&&Ce`
            <a
              style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(r?"background-color:#33cd5f;":"background-color:#444444")}
              class="hover-bg-balanced"
              onclick=${()=>n(r=!r)}
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
            onclick=${()=>function(e){_e(JSON.stringify(e,null,2))}(e)}
          >copy</a>
        </div>
      </div>
    </div>
  `)),Ge=P((({key:e,value:t,showKids:r=!1,showLevels:o=-1,showAll:n=!1,format:a="flex",formatChange:s=(e=>a=e),isRootDump:l=!0,onHeaderClick:i})=>{const c=null===t?"null":typeof t;let u=Ae(!1)((e=>[u,u=e]));Ve((e=>[a,a=e])),Ve((e=>[n,n=e]));let d=Ae(void 0)((e=>[d,d=e]));return function(e){const t=g.memory.initCurrentTemplater;t.global.init||(t.global.init=e,e())}((()=>{(o=o>=0&&o||(-1===o&&!e&&t&&t instanceof Object?2:0))>0&&(u=!0)})),[null,void 0].includes(t)?Ye({key:e,value:c,onHeaderClick:i}):["boolean","number","string"].includes(c)?Ye({key:e,value:t,onHeaderClick:i}):function(){if(null===t)return r?Ye({key:e,value:"null",onHeaderClick:i}):Ce``;const c=(!a||"flex"===a)&&t.push&&t.pop;return Ce`
      <div class="taggedjs-dump">
        ${l&&qe({value:t,format:a,showAll:n,showAllChange:e=>n=e,formatChange:s})}
        ${"json"===a&&Ce`
          <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
          >${JSON.stringify(t,null,2)}</textarea>
        `||c&&Ue({key:e,value:t,show:u,showAll:n,showKids:r,showLevels:o,formatChange:s})||Je({key:e,show:u,showKids:r,showLevels:o,value:t,showAll:n,formatChange:s,onHeaderClick:i})}
      </div>
    `}()}));var Qe=t.B;export{Qe as dump};