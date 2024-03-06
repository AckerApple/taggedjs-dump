var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function r(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function n(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};n.tagUse.push(t)}function o(e,t){n.tagUse.forEach((r=>r.beforeRender(e,t)))}function a(e,t){n.tagUse.forEach((r=>r.afterRender(e,t)))}function s(e,t){n.tagUse.forEach((r=>r.beforeRedraw(e,t)))}function i(e){return l(e,new WeakMap)}function l(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,r),Array.isArray(e))for(let n=0;n<e.length;n++)r[n]=l(e[n],t);else for(const n in e)e.hasOwnProperty(n)&&(r[n]=l(e[n],t));return r}function c(e,t){return u(e,t,new WeakMap)}function u(e,t,r){if(e===t||(o=t,(n=e)instanceof Function&&o instanceof Function&&n.toString()===o.toString()))return!0;var n,o;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;const a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;if(r.has(e))return!0;r.set(e,0);for(const n of a)if(!s.includes(n)||!u(e[n],t[n],r))return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!u(e[n],t[n],r))return!1}else if(Array.isArray(e)||Array.isArray(t))return!1;return!0}function d(e){e.tagSupport.memory.providers.filter((e=>!c(e.instance,e.clone))).forEach((t=>{!function(e,t){p(e,t).forEach((({tag:e,renderCount:t,provider:r})=>{t===e.tagSupport.memory.renderCount&&(r.clone=i(r.instance),e.tagSupport.render())}))}(e.getAppElement(),t),t.clone=i(t.instance)}))}function p(e,t,r=[]){const n=e.tagSupport.memory.providers.find((e=>e.constructMethod===t.constructMethod));return n&&r.push({tag:e,renderCount:e.tagSupport.memory.renderCount,provider:n}),e.children.forEach((e=>p(e,t,r))),r}function g(e){return!0===e?.isTemplater}function f(e){return!0===e?.isTag}function h(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function m(e){return e instanceof Array&&e.every((e=>f(e)))}function y(e,t){if(e===t)throw new Error("someting here");const r=e.propsConfig.latest;if(function(e,t,r){if(void 0===e&&e===r)return!1;let n=e,o=t;if("object"==typeof e){if(!t)return!0;if(n={...e},o={...t||{}},!Object.entries(n).every((([e,t])=>{let r=o[e];return!(t instanceof Function)||r instanceof Function&&(r.original&&(r=r.original),t.original&&(t=t.original),t.toString()===r.toString()&&(delete n[e],delete o[e],!0))})))return!0}return!c(t,e)}(t.propsConfig.latest,e.propsConfig.latestCloned,r))return!0;const n=function(e,t){const r=e.propsConfig.lastClonedKidValues,n=t.propsConfig.lastClonedKidValues;return!r.every(((e,t)=>{const r=n[t];return e.every(((e,t)=>e===r[t]))}))}(e,t);return n}e.d(t,{B:()=>Re}),n.tagUse=[],n.memory={};class b{templater;children;propsConfig;memory={context:{},state:{newest:[]},providers:[],renderCount:0};constructor(e,t,r){this.templater=e,this.children=t;const n=S(r,e);this.propsConfig={latest:r,latestCloned:n,clonedProps:n,lastClonedKidValues:t.value.map((e=>v(e.values)))},f(r)||(this.propsConfig.latestCloned=i(n),this.propsConfig.clonedProps=this.propsConfig.latestCloned)}oldest;newest;mutatingRender(){const e='Tag function "render()" was called in sync but can only be called async';throw console.error(e,{tagSupport:this}),new Error(e)}render(){return++this.memory.renderCount,this.mutatingRender()}renderExistingTag(e,t){const r=this.memory.renderCount;if(d(e),r!==this.memory.renderCount)return!0;const n=y(e.tagSupport,t.tagSupport);return this.newest=this.templater.redraw(),!n}}function v(e){return e.map((e=>{const t=e;return f(t)?v(t.values):g(t)?i(t.tagSupport.propsConfig.latestCloned):m(t)?v(t):i(e)}))}class w{tagged;wrapper;newest;oldest;tagSupport;constructor(e,t){this.tagSupport=new b(this,t,e)}redraw;isTemplater=!0;forceRenderTemplate(e,t){const r=this.wrapper();return a(e,r),this.oldest=r,e.oldest=r,this.oldest=r,this.newest=r,r.ownerTag=t,r}renderWithSupport(e,t,r){++e.memory.renderCount;const i=t?.ownerTag||r;t?(e.propsConfig={...t.tagSupport.propsConfig},s(e,t)):(o(e,i),n.memory.providerConfig.ownerTag=i);const l=this,c=l.wrapper();a(e,c),l.newest=c,c.ownerTag=i;const u=e.oldest=e.oldest||c;return e.newest=c,u.tagSupport.templater=l,u.tagSupport.memory=c.tagSupport.memory,t&&t.isLikeTag(c)?(t.updateByTag(c),{remit:!1,retag:c}):{remit:!0,retag:c}}}function S(e,t){const r=function(e,t){if("object"!=typeof e)return e;const r=e;return Object.entries(r).forEach((([e,n])=>{if(n instanceof Function){const o=r[e].original;return o?(r[e]=(...e)=>t(n,e),void(r[e].original=o)):(r[e]=(...e)=>t(n,e),void(r[e].original=n))}})),r}(f(e)?0:e,(function(e,r){const n=e(...r),o=t.newest?.ownerTag?.tagSupport;return o&&o.render(),n}));return r}class C{value;isSubject=!0;subscribers=[];constructor(e){this.value=e}subscribe(e){this.subscribers.push(e),k.globalSubs.push(e);const t=k.globalSubCount$;k.globalSubCount$.set(t.value+1);const r=()=>{r.unsubscribe()};return r.unsubscribe=()=>{x(this.subscribers,e),x(k.globalSubs,e),k.globalSubCount$.set(t.value-1),r.unsubscribe=()=>{}},r}set(e){this.value=e,this.subscribers.forEach((t=>{t.value=e,t(e)}))}next=this.set}function x(e,t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}const k={globalSubCount$:new C(0),globalSubs:[]};class A extends C{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value),t}}function E(e,t){if(e.isChildOverride)return e;const r=(r,n)=>T(e,t,r,n);return r.tagFunction=e,r}function T(e,t,r,n){const o=t.tagSupport,a=(o&&o.memory.renderCount,e.bind(r)(...n));return o.memory.renderCount,o.render(),a instanceof Promise?a.then((()=>(o.render(),"no-data-ever"))):"no-data-ever"}const $=[];let j=0;function R(e){const t=function(t,r){(f(t)||m(t))&&(r=t,t=void 0);const{childSubject:n,madeSubject:o}=function(e){if(h(e))return{childSubject:e,madeSubject:!1};if(m(e))return{childSubject:new A(e),madeSubject:!0};const t=e;return t?(t.arrayValue=0,{childSubject:new A([t]),madeSubject:!0}):{childSubject:new A([]),madeSubject:!0}}(r);n.isChildSubject=!0;const a=new w(t,n);function s(){const e=s.original,t=a.tagSupport,r=a.oldest;let l=t.propsConfig.latest,c=S(l,a);const u=e(c,n);t.mutatingRender===b.prototype.mutatingRender&&(t.oldest=u,t.mutatingRender=()=>{if(t.renderExistingTag(u,a))return u;if(u.ownerTag){const e=u.ownerTag.tagSupport.render();return u.ownerTag.tagSupport.newest=e,u}return u}),u.tagSupport=new b(a,t.children);const d=i(c);return u.tagSupport.propsConfig={latest:l,latestCloned:d,clonedProps:d,lastClonedKidValues:u.tagSupport.propsConfig.lastClonedKidValues},u.tagSupport.memory=t.memory,u.tagSupport.mutatingRender=t.mutatingRender,t.newest=u,t.propsConfig={...u.tagSupport.propsConfig},r&&(r.tagSupport.propsConfig={...u.tagSupport.propsConfig}),o&&n.value.forEach((e=>{e.values.forEach(((t,r)=>{t instanceof Function&&(e.values[r].isChildOverride||(e.values[r]=function(...e){T(t,u.ownerTag,this,e)},e.values[r].isChildOverride=!0))}))})),u}return s.original=e,a.tagged=!0,a.wrapper=s,a};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=$,e.setUse=n,e.tagIndex=++j}(e),$.push(e),t}function V(e,t){t.parentNode.insertBefore(e,t)}function O(e,t,r){const n=e.split(".");if("style"===n[0]&&(r.style[n[1]]=t),"class"===n[0])return n.shift(),void(t?n.forEach((e=>r.classList.add(e))):n.forEach((e=>r.classList.remove(e))))}function N(e,t,r){e.setAttribute(t,r)}function L(e,t,r){e[t]=r}function F(e,t,r){const n=e.getAttributeNames();"TEXTAREA"!==e.nodeName||n.includes("value")||P("textVarValue",e.getAttribute("textVarValue"),e,t,r,((t,r)=>e.value=r));let o=N;n.forEach((n=>{"INPUT"===e.nodeName&&"value"===n&&(o=L),P(n,e.getAttribute(n),e,t,r,o),o=N}))}function B(e){return e.search(/^(class|style)(\.)/)>=0}function P(e,t,r,n,o,a){if(z(t))return function(e,t,r,n,o,a){return H(e,X(n,t),r,o,a)}(e,t,r,n,o,a);if(z(e)){let t;const s=X(n,e).subscribe((e=>{!function(e,t,r,n,o){if(t&&t!=e&&("string"==typeof t?r.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>r.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>H(e,t,r,n,o)));else{if(!e.length)return;H(e,"",r,n,o)}}(e,t,r,o,a),t=e}));return o.cloneSubs.push(s),void r.removeAttribute(e)}return B(e)?O(e,t,r):void 0}new class{};const K=/^\s*{__tagvar/,D=/}\s*$/;function z(e){return e&&e.search(K)>=0&&e.search(D)>=0}function X(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function H(e,t,r,n,o){const a=B(e);if(t instanceof Function){const n=function(...e){return t(r,e)};r[e].action=n}if(h(t)){r.removeAttribute(e);const s=t=>function(e,t,r,n,o){if(e instanceof Function)return t[r]=function(...r){return e(t,r)},void(t[r].tagFunction=e);if(n)return void O(r,e,t);if(e)return void o(t,r,e);void 0===e||!1===e||null===e?t.removeAttribute(r):o(t,r,e)}(t,r,e,a,o),i=t.subscribe(s);n.cloneSubs.push(i)}else o(r,e,t)}const M=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function U(e,t,r,{counts:n,forceElement:o}){const a=t,s=a.tag;if(s&&!o&&s.isLikeTag(e)){if(t instanceof Function){const e=t(s.tagSupport);return s.updateByTag(e),[]}return s.updateByTag(e),[]}const i=e.buildBeforeElement(r,{counts:n,forceElement:o});return a.tag=e,i}function _(e,t,r,a,i){if(!0!==e.tagged){let t=e.wrapper.original.name||e.wrapper.original.constructor?.name;"Function"===t&&(t=void 0);const r=t||e.wrapper.original.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const l=e,c=e.tagSupport;let u=l.newest;return n.memory.providerConfig.ownerTag=a,(!u||i.forceElement)&&(u?s(c,u):o(c,a),u=l.forceRenderTemplate(c,a),l.newest=u),a.children.push(u),c.templater=u.tagSupport.templater,U(u,t,r,i)}class Y extends Error{details;constructor(e,t,r={}){super(e),this.name=Y.name,this.details={...r,errorCode:t}}}class W extends Y{constructor(e,t){super(e,"array-no-key-error",t),this.name=W.name}}class I extends Y{constructor(e,t){super(e,"state-mismatch-error",t),this.name=I.name}}function J(e,t,r,n,o){const a=[];e.lastArray=e.lastArray||[],e.template=r;let s=0;e.lastArray=e.lastArray.filter(((r,n)=>{const a=t.length-1<n-s,i=t[n-s],l=i?.arrayValue;return!(a||!q(l,r.tag.arrayValue))||(e.lastArray[n].tag.destroy({stagger:o.counts.removed,byParent:!1}),++s,++o.counts.removed,!1)}));const i=r||r.clone;return t.forEach(((r,s)=>{const l=e.lastArray[s],c=r.tagSupport||l?.tag.tagSupport;r.tagSupport=c||new b({},new A([])),c?c.newest=r:(r.tagSupport.mutatingRender=()=>(n.tagSupport.render(),r),n.children.push(r)),r.ownerTag=n;const u=r.arrayValue;if(u?.isArrayValueNeverSet){const e={template:r.getTemplate().string,array:t,ownerTagContent:n.lastTemplateString},o="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(o,e),new W(o,e)}if(e.lastArray.length>s)return q(l.tag.arrayValue,r.arrayValue)?(r.tagSupport=r.tagSupport||l.tag.tagSupport,l.tag.updateByTag(r),[]):[];const d=function(e,t,r,n,o){r.lastArray.push({tag:t,index:n});const a={added:o.counts.added+n,removed:o.counts.removed},s=e;return t.buildBeforeElement(s,{counts:a,forceElement:o.forceElement})}(i,r,e,s,o);a.push(...d)})),a}function q(e,t){return e===t||!!(e instanceof Array&&t instanceof Array&&e.length==t.length)&&e.every(((e,r)=>e==t[r]))}function G(e,t,r,n){const o=t.clone||r;t.template=r;const a=ne(e,o);t.clone=a;const s=[],i=n.clones.indexOf(o);return i>=0&&!n.clones.includes(a)&&!o.parentNode&&(n.clones.splice(i,1),n.clones.push(a),s.push(a)),s}var Q;function Z(e,t,r,n,o){return e.tagSupport||(e.tagSupport=new b({},new A([])),e.tagSupport.mutatingRender=()=>{n.tagSupport.render()},e.tagSupport.oldest=e.tagSupport.oldest||e,n.children.push(e),e.ownerTag=n),t.template=r,U(e,t,r,o)}function ee(e,t,r,n){const o=t.tag,a=t.clone||r;a.parentNode.insertBefore(r,a);const s=ne(e,a);t.clone=s,delete t.tag;const i=n.counts.removed;return o.destroy({stagger:i}).then((e=>n.counts.removed=i+e))}function te(e,t){const r=t.clone,n=r.parentNode;n.insertBefore(e,r),n.removeChild(r),delete t.clone}function re(e,t,r,n,o){const a=[];if(!e.hasAttribute("end"))return a;const s=e.getAttribute("id");if(s?.substring(0,pe.length)!==pe)return a;const i=t[s];let l=o.forceElement;const c=i.subscribe((t=>{const{clones:o}=function(e,t,r,n,o){const a=function(e){return g(e)?Q.tagComponent:f(e)?Q.tag:m(e)?Q.tagArray:Q.value}(e),s=t,i=s.clone;switch(a!==Q.value&&i&&te(r,s),a){case Q.tag:return{clones:Z(e,t,r,n,o)};case Q.tagArray:return{clones:J(t,e,r,n,o)};case Q.tagComponent:return{clones:_(e,t,r,n,o)}}return t.tag?{clones:[],promise:ee(e,t,r,o)}:{clones:G(e,t,r,n)}}(t,i,e,r,{counts:{added:n.added,removed:n.removed},forceElement:l});l&&(l=!1),o.push(...o)}));return r.cloneSubs.push(c),a}function ne(e,t){const r=t.parentNode;void 0!==e&&!1!==e&&null!==e||(e="");const n=document.createTextNode(e);return r.insertBefore(n,t),r.removeChild(t),n}function oe(e,t){if(!e.getAttribute)return;let r=t.counts.added;t.forceElement||(r=function(e,t){const r=e.oninit;if(!r)return t.added;const n=r.tagFunction;if(!n)return t.added;const o=n.tagFunction;return o?(o({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-r),e.children&&(t.counts.added,t.counts.removed,new Array(...e.children).forEach(((e,r)=>oe(e,{...t,counts:t.counts}))))}!function(e){e.tag="tag",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(Q||(Q={}));const ae=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function se(e,t,r,n,o){if(!o||"TEMPLATE"===e.tagName)return[];const a=n.counts,s=[],i=new Array(...o);return"TEXTAREA"===e.tagName&&ie(e),i.forEach(((e,o)=>{const i=re(e,t,r,a,n);"TEXTAREA"===e.tagName&&ie(e),s.push(...i),e.children&&new Array(...e.children).forEach(((e,o)=>{(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")})(e)&&re(e,t,r,a,n);const i=se(e,t,r,n,e.children);s.push(...i)}))})),s}function ie(e){const t=e.value;if(t.search(ae)>=0){const r=t.match(/__tagvar(\d{1,4})/),n="{"+(r?r[0]:"")+"}";e.value="",e.setAttribute("textVarValue",n)}}function le(e,t,r,n,o){const a=[],s=r.interpolation,i=e.children[0].content.children;if(s.keys.length){const r=se(e,t,n,o,i);a.push(...r)}return F(e,t,n),ce(i,t,n),a}function ce(e,t,r){new Array(...e).forEach((e=>{F(e,t,r),e.children&&ce(e.children,t,r)}))}function ue(e,t,r){e.redraw=()=>{const n=t.tag,o=e.tagSupport.newest,a=n?.tagSupport||e.tagSupport,{remit:s,retag:i}=function(e,t,r,n){return t.renderWithSupport(e,r,n)}(a,e,o,r);if(s)return t.set(e),i}}function de(e,t){delete t.tag,delete t.tagSupport,e.destroy()}const pe="__tagvar",ge="--"+pe+"--",fe=new RegExp(pe,"g"),he=new RegExp(ge,"g");class me{isArrayValueNeverSet=!0}class ye{strings;values;isTag=!0;clones=[];cloneSubs=[];children=[];tagSupport;ownerTag;insertBefore;appElement;arrayValue=new me;constructor(e,t){this.strings=e,this.values=t}key(e){return this.arrayValue=e,this}async destroy(e={stagger:0,byParent:!1}){!!this.tagSupport&&function(e,t){n.tagUse.forEach((r=>r.beforeDestroy(e,t)))}(this.tagSupport,this),this.destroySubscriptions();const t=this.children.map((t=>t.destroy({...e,byParent:!0})));return this.ownerTag&&(this.ownerTag.children=this.ownerTag.children.filter((e=>e!==this))),e.byParent||(e.stagger=await this.destroyClones(e)),await Promise.all(t),e.stagger}destroySubscriptions(){this.cloneSubs.forEach((e=>e.unsubscribe())),this.cloneSubs.length=0}async destroyClones({stagger:e}={stagger:0}){let t=!1;const r=this.clones.reverse().map(((r,n)=>{let o;r.ondestroy&&(o=function(e,t){const r=e.ondestroy;if(!r)return;const n=r.tagFunction;if(!n)return;const o=n.tagFunction;return o?o({target:e,stagger:t}):void 0}(r,e));const a=()=>{r.parentNode?.removeChild(r);const e=this.ownerTag;e&&(e.clones=e.clones.filter((e=>e!==r)))};return o instanceof Promise?(t=!0,o.then(a)):a(),o}));return t&&await Promise.all(r),e}updateByTag(e){this.updateConfig(e.strings,e.values),this.tagSupport.templater=e.tagSupport.templater,this.tagSupport.propsConfig={...e.tagSupport.propsConfig},this.tagSupport.newest=e}lastTemplateString=void 0;updateConfig(e,t){this.strings=e,this.updateValues(t)}getTemplate(){const e=function(e){const t=function(e){const t=[];return{string:e.replace(M,((e,r)=>{if(e.startsWith("<"))return e;const n=r.substring(1,r.length-1);return t.push(n),`<template interpolate end id="${n}"></template>`})),keys:t}}(e);return t.string=t.string.replace(he,pe),t}(this.strings.map(((e,t)=>(e.replace(fe,ge)+(this.values.length>t?`{${pe}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=e.string,{interpolation:e,string:e.string,strings:this.strings,values:this.values,context:this.tagSupport?.memory.context||{}}}isLikeTag(e){const{string:t}=e.getTemplate();if(!this.lastTemplateString)throw new Error("no template here");return t===this.lastTemplateString&&e.values.length===this.values.length&&!!e.values.every(((e,t)=>{const r=this.values[t];return!(e instanceof Function&&r instanceof Function)||!(e.toString()!==r.toString())}))}update(){return this.updateContext(this.tagSupport.memory.context)}updateValues(e){return this.values=e,this.updateContext(this.tagSupport.memory.context)}updateContext(e){return this.strings.map(((t,r)=>{const n=pe+r,o=this.values.length>r,l=this.values[r];if(n in e)return function(e,t,r){const n=e.value,o=t,l=e,c=e;!function(e,t){const r=e.lastArray;if(r&&!m(t))return r.forEach((({tag:e})=>e.destroy())),void delete e.lastArray;const n=e,o=n.tag,a=g(t),s=!(a||m(t)||f(t));if(o)return g(o)&&!a?void de(o,n):f(t)?void 0:void de(o,n);const i=e;i.clone&&!s&&te(i.template,i)}(e,t),l.isChildSubject&&(t=t.value);const u=c.tag;if(u)!function(e,t,r,n){const o=e.tagSupport.templater.wrapper,i=r?.wrapper,l=o&&i&&o?.original===i?.original,c=r&&e.lastTemplateString===r.lastTemplateString,u=r&&r.getTemplate&&e.isLikeTag(r);c||u?Z(r,t,t.template,n,{counts:{added:0,removed:0}}):l?function(e,t,r){const n=t.tagSupport,o=n.oldest,i=n.newest;s(o.tagSupport,i||o);const l=e.wrapper();e.newest=l,n.newest=l,a(o.tagSupport,o),t.updateByTag(l),r.set(e)}(r,e,t):G(r,t,t.template,n)}(u,e,t,r);else if(m(t))J(e,t,l.template||c.tag?.insertBefore,r,{counts:{added:0,removed:0}});else{if(g(o))return function(e,t,r,n){let o=r.tag;if(!o)return ue(t,r,e),void t.redraw();const a=o.tagSupport.templater.wrapper,s=t.wrapper;let l=!1;a&&s&&(l=a.original===s.original);const c=t.tagSupport.propsConfig.latest,u=o.tagSupport;if(u.propsConfig.latest=c,l){const e=n?.tagSupport;let r=e.props;if(f(e.props)||(r=i(e.props)),o&&!y(u,t.tagSupport))return}else de(o,r);ue(t,r,e),u.templater=t,t.redraw(),u.propsConfig={...t.tagSupport.propsConfig}}(r,o,c,n);t instanceof Function?c.set(E(t,r)):h(t)?c.set(t.value):c.set(t)}}(e[n],l,this);!function(e,t,r,n,o){if(g(t))ue(t,r[n]=new A(t),o);else if(t instanceof Function)r[n]=function(e,t){return new A(E(e,t))}(t,o);else if(e)f(t)?(t.ownerTag=o,o.children.push(t),r[n]=new A(t)):h(t)?r[n]=t:r[n]=new A(t)}(o,l,e,n,this)})),e}getAppElement(){let e=this;for(;e.ownerTag;)e=e.ownerTag;return e}rebuild(){const e=this.insertBefore;if(!e){const e=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw e.tag=this,e}this.buildBeforeElement(e,{forceElement:!0,counts:{added:0,removed:0}})}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){this.insertBefore=e;const r=this.update(),n=this.getTemplate(),o=document.createElement("div");o.id="tag-temp-holder",o.innerHTML=`<template tag-wrap="22">${n.string}</template>`;const a=le(o,r,n,this,{forceElement:t.forceElement,counts:t.counts});this.clones.length=0;const s=function(e,t){const r=[];let n=e.children[0].content.firstChild;for(;n;){const e=n.nextSibling;V(n,t),r.push(n),n=e}return r}(o,e);return this.clones.push(...s),a.length&&(this.clones=this.clones.filter((e=>!a.find((t=>t===e))))),this.clones.forEach((e=>oe(e,t))),this.clones}}function be(e,...t){return new ye(e,t)}function ve(e,t){return r=>(t.callback=r||(t=>[e,e=t]),e)}n.memory.stateConfig={array:[],rearray:[]};const we=[];function Se(e){const t=e.callback;if(!t)return e.defaultValue;const r=t(Ce),[n]=r,[o]=t(n);if(o!==Ce){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:r,oldValue:n,checkValue:o}),new Error(a)}return n}n({beforeRender:e=>xe(e),beforeRedraw:e=>xe(e),afterRender:e=>{const t=e.memory.state,r=n.memory.stateConfig;if(r.rearray.length&&r.rearray.length!==r.array.length){const t=`States lengths mismatched ${r.rearray.length} !== ${r.array.length}`;throw new I(t,{oldStates:r.array,newStates:r.rearray,component:e.templater?.wrapper.original})}r.rearray=[],t.newest=[...r.array],r.array=[],we.forEach((e=>e())),we.length=0}});class Ce{}function xe(e){const t=e.memory.state,r=n.memory.stateConfig;if(r.rearray.length){const n="last array not cleared";throw console.error(n,{config:r,component:e.templater?.wrapper.original,state:t,expectedClearArray:r.rearray}),new I(n,{config:r,component:e.templater?.wrapper.original,state:t,expectedClearArray:r.rearray})}r.rearray=[],t?.newest.length&&r.rearray.push(...t.newest)}function ke(e){const t=n.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=Se(o);r=t=>[e,e=t];const n={callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),ve(e,n)}let a=(e instanceof Function?e:()=>e)();r=e=>[a,a=e];const s={callback:r,lastValue:a,defaultValue:a};return t.array.push(s),ve(a,s)}function Ae(e,t){let r=ke(void 0)((e=>[r,r=e]));return void 0===r?(t(e,r),r=e,e):(e.every(((e,t)=>e===r[t]))||(t(e,r),r=e),e)}function Ee(e,t){const r=n.memory.providerConfig;r.ownerTag=t,e.memory.providers.length&&(r.providers.length=0,r.providers.push(...e.memory.providers))}function Te(e){const t=n.memory.stateConfig,[r]=e(void 0);e(r);const o=t.rearray[t.array.length];if(o){let n=o.watch,a=Se(o);const s={callback:e,lastValue:a,watch:o.watch};return r!=n&&(s.watch=r,a=s.lastValue=r),t.array.push(s),e(a),a}const a={callback:e,lastValue:r,watch:r};return t.array.push(a),r}function $e(e){n.memory.initCurrentSupport=e}let je;HTMLElement,n.memory.providerConfig={providers:[],ownerTag:void 0},n({beforeRender:(e,t)=>{Ee(e,t)},beforeRedraw:(e,t)=>{Ee(e,t.ownerTag)},afterRender:e=>{const t=n.memory.providerConfig;e.memory.providers=[...t.providers],t.providers.length=0}}),n({beforeRender:e=>$e(e),beforeRedraw:e=>$e(e)}),n({beforeRender:e=>je=e,beforeRedraw:e=>je=e,beforeDestroy:(e,t)=>{const r=e.memory.destroyCallback;r&&r()}});n({beforeRender:e=>{},beforeRedraw:e=>{}});const Re=R((({key:e,value:t,showKids:o=!1,showLevels:a=-1,showAll:s,format:i="small",formatChange:l=(()=>{}),isRootDump:c=!0,onHeaderClick:u=(()=>{})})=>{const d=null===t?"null":typeof t;let p=ke(!1)((e=>[p,p=e]));Te((e=>[i,i=e])),Te((e=>[s,s=e]));let g=ke(void 0)((e=>[g,g=e]));var f;return f=()=>{(a=a>=0&&a||(-1===a&&!e&&t&&t instanceof Object?2:0))>0&&(p=!0)},n.memory.initCurrentSupport.memory.init||(n.memory.initCurrentSupport.memory.init=f,f()),[null,void 0].includes(t)?Pe({key:e,value:d,onHeaderClick:u}):["boolean","number","string"].includes(d)?Pe({key:e,value:t,onHeaderClick:u}):function(){if(null===t)return o?Pe({key:e,value:"null",onHeaderClick:u}):be``;const n=(!i||"small"===i)&&t.push&&t.pop;return be`
      ${c&&be`
        <div style="width: 100%;line-height: 90%;">
          <div style="position:relative;">
            <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
              ${!i||"small"===i&&be`
                <a
                  style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(s?"background-color:#33cd5f;":"background-color:#444444")}
                  class="hover-bg-balanced"
                  onclick=${()=>s=!s}
                  title="hide/show all sub objects"
                >👁</a>
              `}
              <a
                style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(i&&"small"!==i?"background-color:#444444":"background-color:#33cd5f;")}
                class="hover-bg-balanced"
                onclick=${()=>l(i="small")}
              >small</a>
              <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===i?"background-color:#33cd5f;":"background-color:#444444")}
                class="hover-bg-balanced"
                onclick=${()=>l(i="json")}
              >json</a>
              <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===i?"background-color:#33cd5f;":"background-color:#444444")}
                class="hover-bg-balanced active-bg-energized"
                onclick=${()=>function(e){r(JSON.stringify(e,null,2))}(t)}
              >copy</a>
            </div>
          </div>
        </div>
      `}
      ${"json"===i&&be`
        <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
        >${JSON.stringify(t,null,2)}</textarea>
      `||n&&Ve({key:e,value:t,show:p,showAll:s,showKids:o,showLevels:a,formatChange:l})||Be({key:e,show:p,showKids:o,showLevels:a,value:t,showAll:s,formatChange:l,onHeaderClick:u})}
    `}()})),Ve=({key:e,value:t,show:r,showAll:n,showKids:o,showLevels:a,formatChange:s})=>{let i=ke(!1)((e=>[i,i=e])),l=ke(void 0)((e=>[l,l=e]));return Ae([r],(([e])=>i=e)),be`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;"+(i?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
    >
      <a style="flex-grow:1" onclick=${()=>{i=!i}}>
        <strong>${e}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===l?"bold":""}
          onclick=${()=>l="table"===l?void 0:"table"}>${"table"===l?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${t.length}]</sup>
    </div>
    
    ${(n||i||o||null==i&&a>0)&&be`
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${Ne({showLevels:a,showAll:n,showKids:o,formatChange:s,array:t,arrayView:l})}
      </div>
    `}
  </div>
  `},Oe=R((({array:e,showAll:t,showKids:r,toggleColumnDialog:n,columnNames:o,formatChange:a})=>(console.log("🍴 array table executed"),be`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&be`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${o.map((e=>be`
                <th onclick=${n}>${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>be`
            <tr>
              ${o.map((n=>be`
                <td>
                  ${Re({value:e[n],showLevels:0,showAll:t,showKids:t||r,isRootDump:!1,formatChange:a})}
                </td>
              `.key(e[n])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `))),Ne=R((({showLevels:e,showAll:t,showKids:r,array:o,arrayView:a,formatChange:s})=>{const i=o.length?Object.keys(o[0]):[];let l=ke(i)((e=>[l,l=e])),c=ke(!1)((e=>[c,c=e])),u=function(e){const t=n.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=Se(o);r=t=>[e,e=t];const n={callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),e}let a=(e instanceof Function?e:()=>e)();r=e=>[a,a=e];const s={callback:r,lastValue:a,defaultValue:a};return t.array.push(s),a}("columnDialog"+performance.now());const d=()=>{c=!c;const e=document.getElementById(u);c?e.showModal():e.close()};return be`
    ${"table"===a?Oe({showAll:t,showKids:r,array:o,toggleColumnDialog:d,columnNames:l,formatChange:s}):Le({array:o,showLevels:e,showAll:t,showKids:r,formatChange:s,columnNames:l,toggleColumnDialog:d})}

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
        ${i.map((e=>{const t=l.includes(e);return be`
            <li
              style="display:flex;justify-content: space-between"
              class="hover-bg-warning"
            >
              <a onclick=${()=>t?l=l.filter((t=>t!==e)):l.push(e)}
                style="cursor:pointer;"
              >
                <input type="checkbox" ${t&&"checked"} />&nbsp;${e}
              </a>

              ${t&&l.length!==i.length?be`
                <a style="color:blue;" onclick=${()=>l=[...i]}><small>all</small></a>
              `:be`
                <a style="color:blue;" onclick=${()=>l=[e]}><small>only</small></a>
              `}
            </li>
          `.key(e)}))}
        <button type="button" onclick=${d}>🅧 close</button>
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
  `})),Le=({array:e,showLevels:t,showAll:r,showKids:n,columnNames:o,formatChange:a,toggleColumnDialog:s})=>(console.log("🟥 array display executed"),e.map(((e,i)=>be`${Re({value:Fe(e,o),showLevels:t,showAll:r,showKids:r||n,isRootDump:!1,formatChange:a,onHeaderClick:s})}`.key({item:e,index:i}))));function Fe(e,t){const r={};return t.forEach((t=>{e.hasOwnProperty(t)&&(r[t]=e[t])})),r}const Be=R((({key:e,showKids:t,show:r,showLevels:n,value:o,showAll:a,onHeaderClick:s,formatChange:i})=>{let l=ke(!1)((e=>[l,l=e]));Ae([r],(([e])=>l=e));const c=!e||t||l||null==l&&n>0;return be`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&be`
          <a
            style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;"+(l?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":"")}
            onclick=${()=>{l=!l}}
          >
            <strong>${e}</strong>
            <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
              {${Object.keys(o).length}}
            </sup>
          </a>
        `}
        
        ${c&&be`
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(o).map((([e,r])=>be`
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;")}
              >
                ${Re({value:r,key:e,show:l,showAll:a,showLevels:n-1,showKids:a||t,isRootDump:!1,formatChange:i,onHeaderClick:s})}
            `.key([e,r])))}
          </div>
        `}
      </div>
    </div>
  `}));function Pe({key:e,value:t,onHeaderClick:n}){return be`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&be`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          onclick=${()=>n()}
        >${e}</div>
      `}

      ${!t.search||"https://"!==t.slice(0,8)&&"http://"!==t.slice(0,7)?be`
      <div onclick=${()=>r(t)}
        style=${"cursor:pointer;"+(!0===t?"color:#28a54c":"")+(!1===t?"color:#e42112":"")}
        class="hover-bg-warning active-bg-energized"
        title = ${"Number"===t.constructor?.name&&t>1e9?t>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(t).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*t).toLocaleString():""}
      >${(null===t?"null":!1===t&&"false")||void 0===t&&"undefined"||t}</div>
    `:be`
        <a onclick=${()=>r(t)} href=${t}
          target="_blank"
          class="hover-bg-warning active-bg-energized"
          title="tap to copy"
        >${t}</a>
      `}
    </div>
  `}var Ke=t.B;export{Ke as dump};