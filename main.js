var e,t={698:(e,t,o)=>{o.d(t,{B:()=>h});var a=o(929);const l=(0,a.Tc)((({name:e,array:t,included:o,columnNames:l,allColumnNames:i})=>{let d,n=!1,s=!1;const c=(0,a.wk)([]);(0,a.xP)((e=>[{mouseOverEditShow:n,edit:s,editFormula:d}]=e({mouseOverEditShow:n,edit:s,editFormula:d})));return a.qy`
    <a onclick=${function(){const t=l.indexOf(e);t>=0?l.splice(t,1):l.push(e)}} style="cursor:pointer;">
      <input type="checkbox" ${o&&"checked"} />&nbsp;${e}
    </a>

    <div
      onmouseover=${()=>n=!0}
      onmouseout=${()=>n=!1}
    >
      <a style.visibility=${s||n?"visible":"hidden"}
        onclick=${()=>s=!s}
      >⚙️&nbsp;</a>
      
      ${o&&l.length!==i.length?a.qy`
        <a style="color:blue;" onclick=${()=>{l.length=0,l.push(...i)}}><small>all</small></a>
      `:a.qy`
        <a style="color:blue;" onclick=${()=>{l.length=0,l.push(e)}}><small>only</small></a>
      `}
    </div>

    ${s&&a.qy`
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${d&&a.qy`
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${e=>{return o=d,a=e.target.value,o.stringFormula=a,void(o.value=r(a,{array:t}));var o,a}}
            >${d.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${c.map((e=>a.qy`
                <div>
                  <div>
                    <strong>${e.title}</strong>
                    <a onclick=${()=>d=e}>✏️</a>
                  </div>
                  <div>${e.value}</div>
                </div>
              `.key(e)))}
          </div>
          <button type="button" onclick=${()=>{const o=`\n      array.reduce((all, item) => {\n        const value = item['${e}']\n        return isNaN(value) ? all : (all + value)\n      }, 0)\n    `;c.push({title:"sum",stringFormula:o,value:r(o,{array:t})})}}>sum</button>
        </div>
      </div>
    `}
  `}));function r(e,t={}){return function(e,t){if(!e)return e;return t=new Proxy(t,{has:()=>!0}),new Function("with(this) { return ("+e+")}").call(t)}(e,{isNaN,Math,Number,Date,...t})}const i=(0,a.Tc)((({array:e,showAll:t,showKids:o,toggleColumnDialog:l,columnNames:r,formatChange:i,allowMaximize:d,everySimpleValue:n})=>a.qy`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${e.length&&a.qy`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${r.map((e=>a.qy`
                <th
                  style.cursor=${l&&"pointer"}
                  onclick=${l}
                >${e}</th>
              `.key(e)))}
            </tr>
          </thead>
        `}
        <tbody>
          ${e.map((e=>a.qy`
            <tr>
              ${r.map((l=>a.qy`
                <td>
                  ${h({value:e[l],showLevels:0,showAll:t,showKids:t||o,isRootDump:!1,formatChange:i,allowMaximize:d})}
                </td>
              `.key(e[l])))}
            </tr>
          `.key(e)))}
        </tbody>
      </table>
    </div>
  `)),d=(0,a.Tc)((({array:e,showLevels:t,showAll:o,showKids:l,columnNames:r,formatChange:i,toggleColumnDialog:d,allowMaximize:n,everySimpleValue:s})=>a.qy`
    ${e.map(((e,l)=>{const c=function(e,t){if(["string","number","boolean"].includes(typeof e))return e;if(Array.isArray(e))return e;return function(e,t){if(!t)return e;const o={};return t.forEach((t=>{(e.hasOwnProperty(t)||t in e)&&(o[t]=e[t])})),o}(e,t)}(e,r);return a.qy`${h({value:c,showLevels:t,showAll:o,showKids:!0,isRootDump:!1,formatChange:i,onHeaderClick:d,allowMaximize:n,everySimpleValue:s})}`.key(l)}))}
  `));const n=(0,a.Tc)((({showLevels:e,showAll:t,showKids:o,array:r,arrayView:n,formatChange:s,allowMaximize:c,everySimpleValue:g})=>{const u=(0,a.wB)([r,r.length],(()=>r.length?function(e){return e.reduce(((e,t)=>{if(t&&"object"==typeof t){if(Array.isArray(t))return e;Object.keys(t).forEach((t=>{e.includes(t)||e.push(t)}))}return e}),[])}(r):[]));let p;const m=(0,a.wB)([u],(()=>[...u]));let y=!1;const h=(0,a.wk)((()=>"columnDialog"+performance.now()));(0,a.xP)((e=>[{columnNames:p,showColumnDialog:y}]=e({columnNames:p,showColumnDialog:y}))),a.wB.noInit([m.length],(()=>{p||(p=m)}));const f=()=>{y=!y;const e=document.getElementById(h);y?e.showModal():e.close()},v="table"===n?i({showAll:t,showKids:o,array:r,toggleColumnDialog:f,columnNames:p||u,formatChange:s,everySimpleValue:g}):d({array:r,showLevels:e,showAll:t,showKids:o,formatChange:s,columnNames:p||u,toggleColumnDialog:f,allowMaximize:c,everySimpleValue:g});return a.qy`
    ${v}

    <dialog id=${h} class="dump-dialog" style="padding:0"
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
        ${u.map((e=>{const t=void 0===p||p.includes(e);return a.qy`
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${l({name:e,array:r,included:t,columnNames:p||m,allColumnNames:u})}
            </div>
          `.key(e)}))}
        <button style="width:100%" type="button" onclick=${f}>🅧 close</button>
      </div>
    </dialog>
  `}));const s=(0,a.Tc)((({key:e,value:t,show:o,showAll:l,showKids:r,showLevels:i,formatChange:d,allowMaximize:s,everySimpleValue:c})=>{let g,u,p=!1;(0,a.xP)((e=>[{showLower:g,arrayView:u,maximize:p}]=e({showLower:g,arrayView:u,maximize:p}))),(0,a.z)((e=>[r]=e(r))),(0,a.z)((e=>[l]=e(l))),a.wB.noInit([o],(([e])=>g=e)),a.wB.noInit([l],(([e])=>g=e));const m=(0,a.wk)((()=>"maximize-dump-"+performance.now())),y=()=>{p=!p,p&&document.getElementById(m).showModal()},h=o=>a.qy`
    <div class="taggedjs-array-label"
      style=${g?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":""}
    >
      <a style="flex-grow:1" onclick=${()=>{if(void 0===g)return l=r=g=!(l||r||g);l=r=g=!g}}>
        <strong>${e}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${"table"===u?"bold":""}
          onclick=${()=>u="table"===u?void 0:"table"}>${"table"===u?"flex":"table"}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${t.length}]</sup>
      ${o&&a.qy`
        &nbsp;<a onclick=${y}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `,f={showLevels:i,showAll:l,showKids:r,formatChange:d,array:t,arrayView:u,allowMaximize:s,everySimpleValue:c};return a.qy`<!-- array -->
    <div class="taggedjs-array-wrap">
      ${h(s)}
      ${(l||g||r||null==g&&i>0)&&a.qy`
    <!-- array displays wrap -->
    <div class="taggedjs-array-body">
      ${n(f)}
    </div>
  `}
    </div>

    <!-- maximize -->
    <dialog id=${m} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
    >
      <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
        ${p&&h(!1)}
      </div>
      
      ${p&&a.qy`
        <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
          ${n({...f,allowMaximize:!1})}
        </div>
      `}

      <div style="padding:.25em">
        <button type="button" onclick=${()=>document.getElementById(m).close()} style="width:100%">🅧 close array</button>
      </div>
    </dialog>
  `}));function c(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t)}function g({key:e,value:t,onHeaderClick:o,everySimpleValue:l}){const r=t.search&&("https://"===t.slice(0,8)||"http://"===t.slice(0,7));let i;return i=l?u({value:t,everySimpleValue:l}):r?p(t):u({value:t}),a.qy`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${e&&a.qy`
        <div class="taggedjs-simple-label"
          style.cursor=${o&&"pointer"}
          onclick=${o}
        >${e}</div>
      `}
      ${i}
    </div>
  `}const u=(0,a.Tc)((({value:e,everySimpleValue:t})=>{const o=[void 0,null,"null"].includes(e),l=e,r=!isNaN(l)&&l>1e9?function(e){return e>9467028e5?"Milliseconds > Unix epoch:\n"+new Date(e).toLocaleString():"Seconds > Unix epoch:\n"+new Date(1e3*e).toLocaleString()}(l):"";let i=0;(0,a.xP)((e=>[i]=e(i)));let d=e;return t&&(d=t(e)),d=(null===d?"null":!1===d&&"false")||void 0===d&&"undefined"||d,a.qy`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${()=>{i=Date.now()}}
      onmouseup=${t=>{if(Date.now()-i>300)return t.preventDefault(),t.stopPropagation(),!0;c(e)}}
      style="cursor:pointer;"
      style.background-color=${o?"rgba(0,0,0,.5)":""}
      style.color = ${(!0===e?"#28a54c":!1===e&&"#e42112")||o&&"white"||""}
      title=${r}
    >${d}</div>
  `}));const p=e=>a.qy`
    <a onclick=${()=>c(e)} href=${e}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${e}</a>
  `,m=(0,a.Tc)((({key:e,showKids:t,show:o,showLevels:l,value:r,showAll:i,onHeaderClick:d,formatChange:n,allowMaximize:s,everySimpleValue:c})=>{let g,u=!1;const p=(0,a.wk)((()=>"maximize-dump-"+performance.now()));(0,a.xP)((e=>[{showLower:g,maximize:u}]=e({showLower:g,maximize:u}))),(0,a.z)((e=>[t]=e(t))),a.wB.noInit([o],(([e])=>g=e)),a.wB.noInit([i],(([e])=>g=e));const m=!e||t||g||void 0===g&&l>0,y=()=>{u=!u,u&&document.getElementById(p).showModal()},f=o=>a.qy`
    <div class="taggedjs-object-label" style=${g?"border-bottom-width:1px;border-bottom-style:solid;border-color:black;":""}>
      <a onclick=${()=>{if(void 0===g)return i=t=g=!(i||t||g);t=g=!g}}>
        <strong>${e}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(r).length}}
        </sup>
      </a>
      ${o&&a.qy`
        &nbsp;<a onclick=${y}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `,v=e=>a.qy`
    <div class="taggedjs-object-body-wrap">
      ${Object.entries(r).map((([o,r])=>a.qy`
        <!-- recurse -->
        <div class="taggedjs-object"
          style=${r&&"object"==typeof r?"flex-grow:1;":"flex: 1 1 10em;"}
        >
          ${h({value:r,key:o,show:g,showAll:i,showLevels:l-1,showKids:i||t,isRootDump:!1,formatChange:n,onHeaderClick:d,allowMaximize:e,everySimpleValue:c})}
      `.key(o)))}
    </div>
  `;return a.qy`
    <div style="flex: 1 1 10em;text-align:left;">
      <div class="taggedjs-object-wrap">
        ${e&&f(s)}
        ${m&&v(s)}

        <!-- maximize -->
        <dialog id=${p} class="dump-dialog" style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
            ${u&&f(!1)}
          </div>
          
          ${u&&v(!1)}

          <div style="padding:.25em">
            <button type="button" onclick=${()=>document.getElementById(p).close()} style="width:100%">🅧 close object</button>
          </div>
        </dialog>
      </div>
    </div>
  `})),y=(0,a.Tc)((({value:e,format:t,showAll:o,formatChange:l,showAllChange:r})=>a.qy`
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
          ${!t||"flex"===t&&a.qy`
            <a
              style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(o?"background-color:#33cd5f;":"background-color:#444444")}
              class="hover-bg-balanced"
              onclick=${()=>r(o=!o)}
              title="hide/show all sub objects"
            >👁</a>
          `}
          <a
            style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+(t&&"flex"!==t?"background-color:#444444":"background-color:#33cd5f;")}
            class="hover-bg-balanced"
            onclick=${()=>l(t="flex")}
          >flex</a>
          <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"+("json"===t?"background-color:#33cd5f;":"background-color:#444444")}
            class="hover-bg-balanced"
            onclick=${()=>l(t="json")}
          >json</a>
          <a style="margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"
            class="bg-dark hover-bg-balanced active-bg-energized"
            onclick=${()=>function(e){const t=JSON.stringify(e,null,2);c(t)}(e)}
          >copy</a>
        </div>
      </div>
    </div>
  `));const h=(0,a.Tc)((({key:e,value:t,showKids:o=!1,showLevels:l=-1,showAll:r=!1,format:i="flex",formatChange:d=(e=>i=e),isRootDump:n=!0,onHeaderClick:s,allowMaximize:c,everySimpleValue:u})=>{n&&void 0===c&&(c=!0);const p=null===t?"null":typeof t;let m,y=!1;return(0,a.z)((e=>[i]=e(i))),(0,a.z)((e=>[r]=e(r))),(0,a.z)((e=>[l]=e(l))),(0,a.xP)((e=>[{show:y,arrayView:m}]=e({show:y,arrayView:m}))),(0,a.MG)((()=>{(l=l>=0&&l||(-1===l&&!e&&t&&t instanceof Object?2:0))>0&&(y=!0)})),[null,void 0].includes(t)?g({key:e,value:p,onHeaderClick:s,everySimpleValue:u}):["boolean","number","string"].includes(p)?g({key:e,value:t,onHeaderClick:s,everySimpleValue:u}):v({value:t,showKids:o,key:e,onHeaderClick:s,everySimpleValue:u,format:i,isRootDump:n,showAll:r,showAllChange:e=>r=e,formatChange:d,show:y,showLevels:l,allowMaximize:c})}));let f=0;const v=({value:e,showKids:t,key:o,onHeaderClick:l,everySimpleValue:r,format:i,isRootDump:d,showAll:n,showAllChange:c,formatChange:u,show:p,showLevels:h,allowMaximize:v})=>{if(null===e)return t?g({key:o,value:"null",onHeaderClick:l,everySimpleValue:r}):a.qy`no kids`;const w=(!i||"flex"===i)&&e.push&&e.pop;return a.qy`
    <div id=${"taggedjs-dump-"+ ++f} class="taggedjs-dump">
      ${d&&y({value:e,format:i,showAll:n,showAllChange:c,formatChange:u})}
      ${"json"===i&&a.qy`
    <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
    >${JSON.stringify(e,null,2)}</textarea>
  `||w?s({key:o,value:e,show:p,showAll:n,showKids:t,showLevels:h,formatChange:u,allowMaximize:v,everySimpleValue:r}):m({key:o,show:p,showKids:t,showLevels:h,value:e,showAll:n,formatChange:u,onHeaderClick:l,allowMaximize:v,everySimpleValue:r})}
    </div>
  `}}},o={};function a(e){var l=o[e];if(void 0!==l)return l.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,a),r.exports}e=[],a.O=(t,o,l,r)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,l,r]=e[c],d=!0,n=0;n<o.length;n++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](o[n])))?o.splice(n--,1):(d=!1,r<i&&(i=r));if(d){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l=a.O(void 0,[929],(()=>a(698))),r=(l=a.O(l)).B;export{r as dump};
//# sourceMappingURL=main.js.map