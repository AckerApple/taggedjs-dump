var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function r(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function n(e){const t={beforeRender:e.beforeRender||(()=>{}),beforeRedraw:e.beforeRedraw||(()=>{}),afterRender:e.afterRender||(()=>{}),beforeDestroy:e.beforeDestroy||(()=>{})};n.tagUse.push(t)}function o(e,t){n.tagUse.forEach((r=>r.beforeRender(e,t)))}function a(e,t){n.tagUse.forEach((r=>r.afterRender(e,t)))}function s(e,t){n.tagUse.forEach((r=>r.beforeRedraw(e,t)))}function i(e){return l(e,new WeakMap)}function l(e,t){if(null===e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));if(t.set(e,r),Array.isArray(e))for(let n=0;n<e.length;n++)r[n]=l(e[n],t);else for(const n in e)e.hasOwnProperty(n)&&(r[n]=l(e[n],t));return r}function c(e,t){return u(e,t,new WeakMap)}function u(e,t,r){if(e===t||(o=t,(n=e)instanceof Function&&o instanceof Function&&n.toString()===o.toString()))return!0;var n,o;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;const a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;if(r.has(e))return!0;r.set(e,0);for(const n of a)if(!s.includes(n)||!u(e[n],t[n],r))return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!u(e[n],t[n],r))return!1}else if(Array.isArray(e)||Array.isArray(t))return!1;return!0}function d(e,t){if(e===t)throw new Error("someting here");const r=e.propsConfig.latest;if(function(e,t,r){if(void 0===e&&e===r)return!1;let n=e,o=t;if("object"==typeof e){if(!t)return!0;if(n={...e},o={...t||{}},!Object.entries(n).every((([e,t])=>{let r=o[e];return!(t instanceof Function)||r instanceof Function&&(r.original&&(r=r.original),t.original&&(t=t.original),t.toString()===r.toString()&&(delete n[e],delete o[e],!0))})))return!0}return!c(t,e)}(t.propsConfig.latest,e.propsConfig.latestCloned,r))return!0;const n=function(e,t){const r=e.propsConfig.lastClonedKidValues,n=t.propsConfig.lastClonedKidValues;return!r.every(((e,t)=>{const r=n[t];return e.every(((e,t)=>e===r[t]))}))}(e,t);return n}function p(e){e.tagSupport.memory.providers.filter((e=>!c(e.instance,e.clone))).forEach((t=>{!function(e,t){g(e,t).forEach((({tag:e,renderCount:t,provider:r})=>{t===e.tagSupport.memory.renderCount&&(r.clone=i(r.instance),e.tagSupport.render())}))}(e.getAppElement(),t),t.clone=i(t.instance)}))}function g(e,t,r=[]){const n=e.tagSupport.memory.providers.find((e=>e.constructMethod===t.constructMethod));return n&&r.push({tag:e,renderCount:e.tagSupport.memory.renderCount,provider:n}),e.children.forEach((e=>g(e,t,r))),r}function f(e){return!0===e?.isTemplater}function h(e){return!0===e?.isTag}function m(e){return!(!0!==e?.isSubject&&!e?.subscribe)}function y(e){return e instanceof Array&&e.every((e=>h(e)))}e.d(t,{B:()=>Ee}),n.tagUse=[],n.memory={};class b{templater;children;propsConfig;memory={context:{},state:{newest:[]},providers:[],renderCount:0};constructor(e,t,r){this.templater=e,this.children=t;const n=S(r,e);this.propsConfig={latest:r,latestCloned:n,clonedProps:n,lastClonedKidValues:t.value.map((e=>v(e.values)))},h(r)||(this.propsConfig.latestCloned=i(n),this.propsConfig.clonedProps=this.propsConfig.latestCloned)}oldest;newest;mutatingRender(){const e='Tag function "render()" was called in sync but can only be called async';throw console.error(e,{tagSupport:this}),new Error(e)}render(){return++this.memory.renderCount,this.mutatingRender()}}function v(e){return e.map((e=>{const t=e;return h(t)?v(t.values):f(t)?i(t.tagSupport.propsConfig.latestCloned):y(t)?v(t):i(e)}))}class w{tagged;wrapper;insertBefore;newest;oldest;tagSupport;constructor(e,t){this.tagSupport=new b(this,t,e)}redraw;isTemplater=!0;renderWithSupport(e,t,r){++e.memory.renderCount;const i=t?.ownerTag||r;t?(e.propsConfig={...t.tagSupport.propsConfig},s(e,t)):(o(e,i),n.memory.providerConfig.ownerTag=i);const l=this.wrapper();return a(e,l),this.newest=l,l.ownerTag=i,e.newest=l,{remit:!0,retag:l}}}function S(e,t){const r=function(e,t){if("object"!=typeof e)return e;const r=e;return Object.entries(r).forEach((([e,n])=>{if(n instanceof Function){const o=r[e].original;return o?(r[e]=(...e)=>t(n,e),void(r[e].original=o)):(r[e]=(...e)=>t(n,e),void(r[e].original=n))}})),r}(h(e)?0:e,(function(e,r){const n=e(...r),o=t.newest?.ownerTag?.tagSupport;return o&&o.render(),n}));return r}class C{value;isSubject=!0;subscribers=[];constructor(e){this.value=e}subscribe(e){this.subscribers.push(e),k.globalSubs.push(e);const t=k.globalSubCount$;k.globalSubCount$.set(t.value+1);const r=()=>{r.unsubscribe()};return r.unsubscribe=()=>{x(this.subscribers,e),x(k.globalSubs,e),k.globalSubCount$.set(t.value-1),r.unsubscribe=()=>{}},r}set(e){this.value=e,this.subscribers.forEach((t=>{t.value=e,t(e)}))}next=this.set}function x(e,t){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}const k=C;k.globalSubs=[],k.globalSubCount$=new C,k.globalSubCount$.set(0);class A extends C{value;constructor(e){super(e),this.value=e}subscribe(e){const t=super.subscribe(e);return e(this.value),t}}function $(e,t){if(e.isChildOverride)return e;const r=(r,n)=>E(e,t,r,n);return r.tagFunction=e,r}function E(e,t,r,n){const o=t.tagSupport,a=(o&&o.memory.renderCount,e.bind(r)(...n));return o.memory.renderCount,o.render(),a instanceof Promise?a.then((()=>(o.render(),"promise-no-data-ever"))):"no-data-ever"}const T=[];let j=0;function V(e){const t=function(t,r){(h(t)||y(t))&&(r=t,t=void 0);const{childSubject:n,madeSubject:o}=function(e){if(m(e))return{childSubject:e,madeSubject:!1};if(y(e))return{childSubject:new A(e),madeSubject:!0};const t=e;return t?(t.arrayValue=0,{childSubject:new A([t]),madeSubject:!0}):{childSubject:new A([]),madeSubject:!0}}(r);n.isChildSubject=!0;const a=new w(t,n);function s(){const e=s.original,t=a.tagSupport,r=a.oldest;let l=t.propsConfig.latest,c=S(l,a);const u=e(c,n);t.mutatingRender===b.prototype.mutatingRender&&(t.oldest=u,t.mutatingRender=()=>{if(function(e,t,r){const n=r.memory.renderCount;if(p(e),n!==r.memory.renderCount)return!0;const o=d(e.tagSupport,t.tagSupport),a=r.templater;return r.newest=a.redraw(),t.newest=r.newest,!o}(u,a,t))return u;if(u.ownerTag){const e=u.ownerTag.tagSupport.render();return u.ownerTag.tagSupport.newest=e,u}return u}),u.tagSupport=new b(a,t.children);const g=i(c);return u.tagSupport.propsConfig={latest:l,latestCloned:g,clonedProps:g,lastClonedKidValues:u.tagSupport.propsConfig.lastClonedKidValues},u.tagSupport.memory=t.memory,u.tagSupport.mutatingRender=t.mutatingRender,t.newest=u,t.propsConfig={...u.tagSupport.propsConfig},r&&(r.tagSupport.propsConfig={...u.tagSupport.propsConfig}),o&&n.value.forEach((e=>{e.values.forEach(((t,r)=>{t instanceof Function&&(e.values[r].isChildOverride||(e.values[r]=function(...e){E(t,u.ownerTag,this,e)},e.values[r].isChildOverride=!0))}))})),u}return s.original=e,a.tagged=!0,a.wrapper=s,a};return function(e,t){e.isTag=!0,e.original=t}(t,e),function(e){e.tags=T,e.setUse=n,e.tagIndex=++j}(e),T.push(e),t}function R(e,t){t.parentNode.insertBefore(e,t)}function O(e,t,r){const n=e.split(".");if("style"===n[0]&&(r.style[n[1]]=t),"class"===n[0])return n.shift(),void(t?n.forEach((e=>r.classList.add(e))):n.forEach((e=>r.classList.remove(e))))}function N(e,t,r){e.setAttribute(t,r)}function F(e,t,r){e[t]=r}function L(e,t,r){const n=e.getAttributeNames();"TEXTAREA"!==e.nodeName||n.includes("value")||P("textVarValue",e.getAttribute("textVarValue"),e,t,r,((t,r)=>e.value=r));let o=N;n.forEach((n=>{"INPUT"===e.nodeName&&"value"===n&&(o=F),P(n,e.getAttribute(n),e,t,r,o),o=N}))}function B(e){return e.search(/^(class|style)(\.)/)>=0}function P(e,t,r,n,o,a){if(z(t))return function(e,t,r,n,o,a){return U(e,X(n,t),r,o,a)}(e,t,r,n,o,a);if(z(e)){let t;const s=X(n,e).subscribe((e=>{!function(e,t,r,n,o){if(t&&t!=e&&("string"==typeof t?r.removeAttribute(t):t instanceof Object&&Object.entries(t).forEach((([e])=>r.removeAttribute(e)))),"string"!=typeof e)e instanceof Object&&Object.entries(e).forEach((([e,t])=>U(e,t,r,n,o)));else{if(!e.length)return;U(e,"",r,n,o)}}(e,t,r,o,a),t=e}));return o.cloneSubs.push(s),void r.removeAttribute(e)}return B(e)?O(e,t,r):void 0}new class{};const K=/^\s*{__tagvar/,D=/}\s*$/;function z(e){return e&&e.search(K)>=0&&e.search(D)>=0}function X(e,t){return e[t.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function U(e,t,r,n,o){const a=B(e);if(t instanceof Function){const n=function(...e){return t(r,e)};r[e].action=n}if(m(t)){r.removeAttribute(e);const s=t=>function(e,t,r,n,o){if(e instanceof Function)return t[r]=function(...r){return e(t,r)},void(t[r].tagFunction=e);if(n)return void O(r,e,t);if(e)return void o(t,r,e);void 0===e||!1===e||null===e?t.removeAttribute(r):o(t,r,e)}(t,r,e,a,o),i=t.subscribe(s);n.cloneSubs.push(i)}else o(r,e,t)}const _=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function H(e,t,r,{counts:n,forceElement:o}){const a=t,s=a.tag;if(s&&!o&&s.isLikeTag(e)){if(t instanceof Function){const e=t(s.tagSupport);return s.updateByTag(e),[]}return s.updateByTag(e),[]}if(!r||!r.parentNode)throw new Error("bad parent already started");const i=e.buildBeforeElement(r,{counts:n,forceElement:o});return a.tag=a.tag||e,i}function M(e,t,r,a,i){if(!0!==e.tagged){let t=e.wrapper.original.name||e.wrapper.original.constructor?.name;"Function"===t&&(t=void 0);const r=t||e.wrapper.original.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const l=e;l.insertBefore=r;const c=e.tagSupport;let u=l.newest;return n.memory.providerConfig.ownerTag=a,u&&!i.forceElement||(u?s(c,l.oldest):o(c,a),u=l.renderWithSupport(c,t.tag,a).retag,l.newest=u),a.children.push(u),c.templater=u.tagSupport.templater,H(u,t,r,i)}class Y extends Error{details;constructor(e,t,r={}){super(e),this.name=Y.name,this.details={...r,errorCode:t}}}class W extends Y{constructor(e,t){super(e,"array-no-key-error",t),this.name=W.name}}class I extends Y{constructor(e,t){super(e,"state-mismatch-error",t),this.name=I.name}}function J(e,t,r,n,o){const a=[];e.lastArray=e.lastArray||[],e.template=r;let s=0;e.lastArray=e.lastArray.filter(((r,n)=>{const a=t.length-1<n-s,i=t[n-s],l=i?.arrayValue;return!(a||!q(l,r.tag.arrayValue))||(e.lastArray[n].tag.destroy({stagger:o.counts.removed,byParent:!1}),++s,++o.counts.removed,!1)}));const i=r||r.clone;return t.forEach(((r,s)=>{const l=e.lastArray[s],c=r.tagSupport||l?.tag.tagSupport;r.tagSupport=c||new b({},new A([])),c?c.newest=r:(r.tagSupport.mutatingRender=()=>(n.tagSupport.render(),r),n.children.push(r)),r.ownerTag=n;const u=r.arrayValue;if(u?.isArrayValueNeverSet){const e={template:r.getTemplate().string,array:t,ownerTagContent:n.lastTemplateString},o="Use html`...`.key(item) instead of html`...` to template an Array";throw console.error(o,e),new W(o,e)}if(e.lastArray.length>s)return q(l.tag.arrayValue,r.arrayValue)?(r.tagSupport=r.tagSupport||l.tag.tagSupport,l.tag.updateByTag(r),[]):[];const d=function(e,t,r,n,o){r.lastArray.push({tag:t,index:n});const a={added:o.counts.added+n,removed:o.counts.removed},s=e;return t.buildBeforeElement(s,{counts:a,forceElement:o.forceElement})}(i,r,e,s,o);a.push(...d)})),a}function q(e,t){return e===t||!!(e instanceof Array&&t instanceof Array&&e.length==t.length)&&e.every(((e,r)=>e==t[r]))}function G(e,t,r){t.template=r;const n=t.clone||r;t.lastValue=e;const o=function(e,t){const r=t.parentNode;void 0!==e&&!1!==e&&null!==e||(e="");const n=document.createTextNode(e);return r.insertBefore(n,t),r.removeChild(t),n}(e,n);return t.clone=o,[]}var Q;function Z(e,t,r,n,o){return e.tagSupport||(e.tagSupport=new b({},new A([])),e.tagSupport.mutatingRender=()=>{n.tagSupport.render()},e.tagSupport.oldest=e.tagSupport.oldest||e,n.children.push(e),e.ownerTag=n),t.template=r,H(e,t,r,o)}function ee(e,t,r,n,o){const a=[];if(!e.hasAttribute("end"))return a;const s=e.getAttribute("id");if(s?.substring(0,ce.length)!==ce)return a;const i=t[s];let l=o.forceElement;const c=i.subscribe((t=>{i.clone&&(e=i.clone);const{clones:o}=function(e,t,r,n,o){const a=function(e){return f(e)?Q.tagComponent:h(e)?Q.tag:y(e)?Q.tagArray:Q.value}(e);switch(a){case Q.tag:return{clones:Z(e,t,r,n,o)};case Q.tagArray:return{clones:J(t,e,r,n,o)};case Q.tagComponent:return{clones:M(e,t,r,n,o)}}return{clones:G(e,t,r)}}(t,i,e,r,{counts:{added:n.added,removed:n.removed},forceElement:l});l&&(l=!1),o.push(...o)}));return r.cloneSubs.push(c),a}function te(e,t){if(!e.getAttribute)return;let r=t.counts.added;t.forceElement||(r=function(e,t){const r=e.oninit;if(!r)return t.added;const n=r.tagFunction;if(!n)return t.added;const o=n.tagFunction;return o?(o({target:e,stagger:t.added}),++t.added):t.added}(e,t.counts)-r),e.children&&(t.counts.added,t.counts.removed,new Array(...e.children).forEach(((e,r)=>te(e,{...t,counts:t.counts}))))}!function(e){e.tag="tag",e.tagArray="tag-array",e.tagComponent="tag-component",e.value="value"}(Q||(Q={}));const re=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function ne(e,t,r,n,o){if(!o||"TEMPLATE"===e.tagName)return[];const a=n.counts,s=[],i=new Array(...o);return"TEXTAREA"===e.tagName&&oe(e),i.forEach((e=>{const o=ee(e,t,r,a,n);"TEXTAREA"===e.tagName&&oe(e),s.push(...o),e.children&&new Array(...e.children).forEach(((e,o)=>{(function(e){return"TEMPLATE"===e.tagName&&void 0!==e.getAttribute("interpolate")&&void 0!==e.getAttribute("end")})(e)&&ee(e,t,r,a,n);const i=ne(e,t,r,n,e.children);s.push(...i)}))})),s}function oe(e){const t=e.value;if(t.search(re)>=0){const r=t.match(/__tagvar(\d{1,4})/),n="{"+(r?r[0]:"")+"}";e.value="",e.setAttribute("textVarValue",n)}}function ae(e,t,r,n,o){const a=[],s=r.interpolation,i=e.children[0].content.children;if(s.keys.length){const r=ne(e,t,n,o,i);a.push(...r)}return L(e,t,n),se(i,t,n),a}function se(e,t,r){new Array(...e).forEach((e=>{L(e,t,r),e.children&&se(e.children,t,r)}))}function ie(e,t,r){e.redraw=()=>{const n=t.tag,o=n?.tagSupport||e.tagSupport,{retag:a}=e.renderWithSupport(o,n,r);return t.set(e),a}}function le(e,t){delete t.tag,delete t.tagSupport,e.destroy()}const ce="__tagvar",ue="--"+ce+"--",de=new RegExp(ce,"g"),pe=new RegExp(ue,"g");class ge{isArrayValueNeverSet=!0}class fe{strings;values;isTag=!0;clones=[];cloneSubs=[];children=[];tagSupport;ownerTag;appElement;arrayValue=new ge;constructor(e,t){this.strings=e,this.values=t}key(e){return this.arrayValue=e,this}async destroy(e={stagger:0,byParent:!1}){!!this.tagSupport&&function(e,t){n.tagUse.forEach((r=>r.beforeDestroy(e,t)))}(this.tagSupport,this),this.destroySubscriptions();const t=this.children.map((t=>t.destroy({...e,byParent:!0})));return this.children.length=0,this.ownerTag&&(this.ownerTag.children=this.ownerTag.children.filter((e=>e!==this))),e.byParent||(e.stagger=await this.destroyClones(e)),await Promise.all(t),e.stagger}destroySubscriptions(){this.cloneSubs.forEach((e=>e.unsubscribe())),this.cloneSubs.length=0}async destroyClones({stagger:e}={stagger:0}){let t=!1;const r=this.clones.reverse().map(((r,n)=>{let o;r.ondestroy&&(o=function(e,t){const r=e.ondestroy;if(!r)return;const n=r.tagFunction;if(!n)return;const o=n.tagFunction;return o?o({target:e,stagger:t}):void 0}(r,e));const a=()=>{r.parentNode?.removeChild(r);const e=this.ownerTag;e&&(e.clones=e.clones.filter((e=>e!==r)))};return o instanceof Promise?(t=!0,o.then(a)):a(),o}));return this.clones.length=0,t&&await Promise.all(r),e}updateByTag(e){this.updateConfig(e.strings,e.values),this.tagSupport.templater=e.tagSupport.templater,this.tagSupport.propsConfig={...e.tagSupport.propsConfig},this.tagSupport.newest=e}lastTemplateString=void 0;updateConfig(e,t){this.strings=e,this.updateValues(t)}getTemplate(){const e=function(e){const t=function(e){const t=[];return{string:e.replace(_,((e,r)=>{if(e.startsWith("<"))return e;const n=r.substring(1,r.length-1);return t.push(n),`<template interpolate end id="${n}"></template>`})),keys:t}}(e);return t.string=t.string.replace(pe,ce),t}(this.strings.map(((e,t)=>(e.replace(de,ue)+(this.values.length>t?`{${ce}${t}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=e.string,{interpolation:e,string:e.string,strings:this.strings,values:this.values,context:this.tagSupport?.memory.context||{}}}isLikeTag(e){const{string:t}=e.getTemplate();if(!this.lastTemplateString)throw new Error("no template here");return t===this.lastTemplateString&&e.values.length===this.values.length&&!!e.values.every(((e,t)=>{const r=this.values[t];return!(e instanceof Function&&r instanceof Function)||!(e.toString()!==r.toString())}))}update(){return this.updateContext(this.tagSupport.memory.context)}updateValues(e){return this.values=e,this.updateContext(this.tagSupport.memory.context)}updateContext(e){return this.strings.map(((t,r)=>{const n=ce+r,o=this.values.length>r,l=this.values[r];if(n in e)return function(e,t,r){const n=e.value,o=e,l=e,c=o.isChildSubject,u=f(t);if(c&&(t=t.value),function(e,t){const r=e.lastArray;if(r&&!y(t))return r.forEach((({tag:e})=>e.destroy())),delete e.lastArray,1;const n=e,o=n.tag;if(o){const r=h(t);return h(e.value)&&r?(s=o,((a=t).strings.length!==s.strings.length||!a.strings.every(((e,t)=>s.strings[t]===e))||a.values.length!==s.values.length)&&(le(o,n),2)):!f(t)&&(le(o,n),3)}var a,s;const i=e,l="lastValue"in i,c=i.lastValue;l&&c!==t&&function(e,t){const r=t.clone,n=r.parentNode;if(r===e)throw"ok";n.insertBefore(e,r),n.removeChild(r),delete t.clone,delete t.lastValue}(i.template,i)}(e,t),u)return function(e,t,r,n){let o=r.tag;if(!o)return ie(t,r,e),void t.redraw();const a=o.tagSupport.templater.wrapper,s=t.wrapper;let l=!1;a&&s&&(l=a.original===s.original);const c=t.tagSupport.propsConfig.latest,u=o.tagSupport;if(u.propsConfig.latest=c,l){const e=n?.tagSupport;let r=e.props;if(h(e.props)||(r=i(e.props)),o&&!d(u,t.tagSupport))return}else le(o,r);ie(t,r,e),u.templater=t;const p=t.redraw();o.isLikeTag(p)||(o.destroy(),r.tagSupport=p.tagSupport,r.tag=p,u.oldest=p),u.newest=p,u.propsConfig={...t.tagSupport.propsConfig}}(r,t,l,n);const p=l.tag;if(p)!function(e,t,r,n){const o=e.tagSupport.templater.wrapper,i=r?.wrapper,l=o&&i&&o?.original===i?.original,c=r&&e.lastTemplateString===r.lastTemplateString,u=r&&r.getTemplate&&e.isLikeTag(r);c||u?Z(r,t,t.template,n,{counts:{added:0,removed:0}}):l?function(e,t,r){const n=t.tagSupport,o=n.oldest;n.newest,s(o.tagSupport,o);const i=e.wrapper();e.newest=i,n.newest=i,a(o.tagSupport,o),t.updateByTag(i),r.set(e)}(r,e,t):G(r,t,t.template)}(p,e,t,r);else if(y(t)){const n=J(e,t,o.template||l.tag?.tagSupport.templater.insertBefore,r,{counts:{added:0,removed:0}});r.clones.push(...n)}else t instanceof Function?l.set($(t,r)):m(t)?l.set(t.value):l.set(t)}(e[n],l,this);!function(e,t,r,n,o){if(f(t))ie(t,r[n]=new A(t),o);else if(t instanceof Function)r[n]=function(e,t){return new A($(e,t))}(t,o);else if(e)h(t)?(t.ownerTag=o,o.children.push(t),r[n]=new A(t)):m(t)?r[n]=t:r[n]=new A(t)}(o,l,e,n,this)})),e}getAppElement(){let e=this;for(;e.ownerTag;)e=e.ownerTag;return e}rebuild(){const e=this.tagSupport.templater.insertBefore;if(!e){const e=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw e.tag=this,e}this.buildBeforeElement(e,{forceElement:!0,counts:{added:0,removed:0}})}buildBeforeElement(e,t={forceElement:!1,counts:{added:0,removed:0}}){this.tagSupport.templater.insertBefore=e;const r=this.update(),n=this.getTemplate(),o=document.createElement("div");o.id="tag-temp-holder",o.innerHTML=`<template id="temp-template-tag-wrap">${n.string}</template>`;const a=ae(o,r,n,this,{forceElement:t.forceElement,counts:t.counts});this.clones.length=0;const s=function(e,t){const r=[];let n=e.children[0].content.firstChild;for(;n;){const e=n.nextSibling;R(n,t),r.push(n),n=e}return r}(o,e);return this.clones.push(...s),a.length&&(this.clones=this.clones.filter((e=>!a.find((t=>t===e))))),this.clones.forEach((e=>te(e,t))),this.clones}}function he(e,...t){return new fe(e,t)}function me(e,t){return r=>(t.callback=r||(t=>[e,e=t]),e)}n.memory.stateConfig={array:[],rearray:[]};const ye=[];function be(e){const t=e.callback;if(!t)return e.defaultValue;const r=t(ve),[n]=r,[o]=t(n);if(o!==ve){const a='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(t?t.toString():JSON.stringify(e))+"\n";throw console.error(a,{state:e,callback:t,oldState:r,oldValue:n,checkValue:o}),new Error(a)}return n}n({beforeRender:e=>we(e),beforeRedraw:e=>we(e),afterRender:e=>{const t=e.memory.state,r=n.memory.stateConfig;if(r.rearray.length&&r.rearray.length!==r.array.length){const t=`States lengths mismatched ${r.rearray.length} !== ${r.array.length}`;throw new I(t,{oldStates:r.array,newStates:r.rearray,component:e.templater?.wrapper.original})}r.rearray=[],t.newest=[...r.array],r.array=[],ye.forEach((e=>e())),ye.length=0}});class ve{}function we(e){const t=e.memory.state,r=n.memory.stateConfig;if(r.rearray.length){const n="last array not cleared";throw console.error(n,{config:r,component:e.templater?.wrapper.original,state:t,expectedClearArray:r.rearray}),new I(n,{config:r,component:e.templater?.wrapper.original,state:t,expectedClearArray:r.rearray})}r.rearray=[],t?.newest.length&&r.rearray.push(...t.newest)}function Se(e){const t=n.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=be(o);r=t=>[e,e=t];const n={callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),me(e,n)}let a=(e instanceof Function?e:()=>e)();r=e=>[a,a=e];const s={callback:r,lastValue:a,defaultValue:a};return t.array.push(s),me(a,s)}function Ce(e,t){let r=Se(void 0)((e=>[r,r=e]));return void 0===r?(t(e,r),r=e,e):(e.every(((e,t)=>e===r[t]))||(t(e,r),r=e),e)}function xe(e,t){const r=n.memory.providerConfig;r.ownerTag=t,e.memory.providers.length&&(r.providers.length=0,r.providers.push(...e.memory.providers))}function ke(e){const t=n.memory.stateConfig,[r]=e(void 0);e(r);const o=t.rearray[t.array.length];if(o){let n=o.watch,a=be(o);const s={callback:e,lastValue:a,watch:o.watch};return r!=n&&(s.watch=r,a=s.lastValue=r),t.array.push(s),e(a),a}const a={callback:e,lastValue:r,watch:r};return t.array.push(a),r}function Ae(e){n.memory.initCurrentSupport=e}let $e;n.memory.providerConfig={providers:[],ownerTag:void 0},n({beforeRender:(e,t)=>{xe(e,t)},beforeRedraw:(e,t)=>{xe(e,t.ownerTag)},afterRender:e=>{const t=n.memory.providerConfig;e.memory.providers=[...t.providers],t.providers.length=0}}),n({beforeRender:e=>Ae(e),beforeRedraw:e=>Ae(e)}),n({beforeRender:e=>$e=e,beforeRedraw:e=>$e=e,beforeDestroy:(e,t)=>{const r=e.memory.destroyCallback;r&&r()}});n({beforeRender:e=>{},beforeRedraw:e=>{}});const Ee=V((({key:e,value:t,showKids:o=!1,showLevels:a=-1,showAll:s,format:i="small",formatChange:l=(()=>{}),isRootDump:c=!0,onHeaderClick:u=(()=>{})})=>{const d=null===t?"null":typeof t;let p=Se(!1)((e=>[p,p=e]));ke((e=>[i,i=e])),ke((e=>[s,s=e]));let g=Se(void 0)((e=>[g,g=e]));var f;return f=()=>{(a=a>=0&&a||(-1===a&&!e&&t&&t instanceof Object?2:0))>0&&(p=!0)},n.memory.initCurrentSupport.memory.init||(n.memory.initCurrentSupport.memory.init=f,f()),[null,void 0].includes(t)?Fe({key:e,value:d,onHeaderClick:u}):["boolean","number","string"].includes(d)?Fe({key:e,value:t,onHeaderClick:u}):function(){if(null===t)return o?Fe({key:e,value:"null",onHeaderClick:u}):he``;const n=(!i||"small"===i)&&t.push&&t.pop;return he`
      ${c&&he`
        <div style="width: 100%;line-height: 90%;">
          <div style="position:relative;">
            <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
              ${!i||"small"===i&&he`
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
      ${"json"===i&&he`
        <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
        >${JSON.stringify(t,null,2)}</textarea>
      `||n&&Te({key:e,value:t,show:p,showAll:s,showKids:o,showLevels:a,formatChange:l})||Ne({key:e,show:p,showKids:o,showLevels:a,value:t,showAll:s,formatChange:l,onHeaderClick:u})}
    `}()})),Te=({key:e,value:t,show:r,showAll:n,showKids:o,showLevels:a,formatChange:s})=>{let i=Se(!1)((e=>[i,i=e])),l=Se(void 0)((e=>[l,l=e]));return Ce([r],(([e])=>i=e)),he`<!-- array -->
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
    
    ${(n||i||o||null==i&&a>0)&&he`
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${Ve({showLevels:a,showAll:n,showKids:o,formatChange:s,array:t,arrayView:l})}
      </div>
    `}
  </div>
  `},je=V((({array:e,showAll:t,showKids:r,toggleColumnDialog:n,columnNames:o,formatChange:a})=>he`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&he`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${o.map((e=>he`
                <th onclick=${n}>${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>he`
            <tr>
              ${o.map((n=>he`
                <td>
                  ${Ee({value:e[n],showLevels:0,showAll:t,showKids:t||r,isRootDump:!1,formatChange:a})}
                </td>
              `.key(e[n])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),Ve=V((({showLevels:e,showAll:t,showKids:r,array:o,arrayView:a,formatChange:s})=>{const i=o.length?Object.keys(o[0]):[];let l=Se(i)((e=>[l,l=e])),c=Se(!1)((e=>[c,c=e])),u=function(e){const t=n.memory.stateConfig;let r;const o=t.rearray[t.array.length];if(o){let e=be(o);r=t=>[e,e=t];const n={callback:r,lastValue:e,defaultValue:o.defaultValue};return t.array.push(n),e}let a=(e instanceof Function?e:()=>e)();r=e=>[a,a=e];const s={callback:r,lastValue:a,defaultValue:a};return t.array.push(s),a}("columnDialog"+performance.now());const d=()=>{c=!c;const e=document.getElementById(u);c?e.showModal():e.close()};return he`
    ${"table"===a?je({showAll:t,showKids:r,array:o,toggleColumnDialog:d,columnNames:l,formatChange:s}):Re({array:o,showLevels:e,showAll:t,showKids:r,formatChange:s,columnNames:l,toggleColumnDialog:d})}

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
        ${i.map((e=>{const t=l.includes(e);return he`
            <li
              style="display:flex;justify-content: space-between"
              class="hover-bg-warning"
            >
              <a onclick=${()=>t?l=l.filter((t=>t!==e)):l.push(e)}
                style="cursor:pointer;"
              >
                <input type="checkbox" ${t&&"checked"} />&nbsp;${e}
              </a>

              ${t&&l.length!==i.length?he`
                <a style="color:blue;" onclick=${()=>l=[...i]}><small>all</small></a>
              `:he`
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
  `})),Re=V((({array:e,showLevels:t,showAll:r,showKids:n,columnNames:o,formatChange:a,toggleColumnDialog:s})=>he`
    ${e.map(((e,i)=>he`${Ee({value:Oe(e,o),showLevels:t,showAll:r,showKids:r||n,isRootDump:!1,formatChange:a,onHeaderClick:s})}`.key({item:e,index:i})))}
  `));function Oe(e,t){const r={};return t.forEach((t=>{e.hasOwnProperty(t)&&(r[t]=e[t])})),r}const Ne=V((({key:e,showKids:t,show:r,showLevels:n,value:o,showAll:a,onHeaderClick:s,formatChange:i})=>{let l=Se(!1)((e=>[l,l=e]));Ce([r],(([e])=>l=e));const c=!e||t||l||null==l&&n>0;return he`
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${e&&he`
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
        
        ${c&&he`
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(o).map((([e,r])=>he`
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${"padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;"+(r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;")}
              >
                ${Ee({value:r,key:e,show:l,showAll:a,showLevels:n-1,showKids:a||t,isRootDump:!1,formatChange:i,onHeaderClick:s})}
            `.key([e,r])))}
          </div>
        `}
      </div>
    </div>
  `}));function Fe({key:e,value:t,onHeaderClick:n}){return he`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&he`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          onclick=${()=>n()}
        >${e}</div>
      `}

      ${!t.search||"https://"!==t.slice(0,8)&&"http://"!==t.slice(0,7)?he`
      <div onclick=${()=>r(t)}
        style=${"cursor:pointer;"+(!0===t?"color:#28a54c":"")+(!1===t?"color:#e42112":"")}
        class="hover-bg-warning active-bg-energized"
        title = ${"Number"===t.constructor?.name&&t>1e9?t>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(t).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*t).toLocaleString():""}
      >${(null===t?"null":!1===t&&"false")||void 0===t&&"undefined"||t}</div>
    `:he`
        <a onclick=${()=>r(t)} href=${t}
          target="_blank"
          class="hover-bg-warning active-bg-energized"
          title="tap to copy"
        >${t}</a>
      `}
    </div>
  `}var Le=t.B;export{Le as dump};