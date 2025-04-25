import { html, letProp, state, states, tag, watch } from "taggedjs";
import { dump } from "./index";
export const dumpObject = tag(({ // dumpObject
key, showKids, show, showLevels, value, showAll, onHeaderClick, formatChange, allowMaximize, everySimpleValue, }) => {
    let showLower = undefined;
    let maximize = false;
    const maximizeId = state(() => 'maximize-dump-' + performance.now());
    states(get => [{ showLower, maximize }] = get({ showLower, maximize }));
    letProp(get => [showKids] = get(showKids));
    watch.noInit([show], ([show]) => showLower = show);
    watch.noInit([showAll], ([showAll]) => showLower = showAll);
    const continueDump = !key || showKids || showLower || (showLower === undefined && showLevels > 0);
    const toggleMaximize = () => {
        maximize = !maximize;
        if (maximize) {
            document.getElementById(maximizeId).showModal();
        }
    };
    const minimize = () => document.getElementById(maximizeId).close();
    const getHead = (allowMaximize) => html `
    <div class="taggedjs-object-label" style=${showLower ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : ''}>
      <a onclick=${() => {
        if (showLower === undefined) {
            return showAll = showKids = showLower = !(showAll || showKids || showLower);
        }
        showKids = showLower = !showLower;
    }}>
        <strong>${key}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(value).length}}
        </sup>
      </a>
      ${allowMaximize && html `
        &nbsp;
        <a onclick=${toggleMaximize}>
          <span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span>
        </a>
      `}
    </div>
  `;
    const getDumpBody = (allowMaximize) => html `
    <div class="taggedjs-object-body-wrap">
      ${Object.entries(value).map(([key, value]) => html `
        <!-- recurse -->
        <div class="taggedjs-object"
          style=${!value || typeof (value) !== 'object' ? 'flex: 1 1 10em;' : 'flex-grow:1;'}
        >
          ${dump({
        value,
        key,
        show: showLower,
        showAll,
        showLevels: showLevels - 1,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
        onHeaderClick,
        allowMaximize,
        everySimpleValue,
    })}
        </div>
      `.key(key))}
    </div>
  `;
    return html `
    <div style="flex: 1 1 10em;text-align:left;">
      <div class="taggedjs-object-wrap">
        ${key && getHead(allowMaximize)}
        ${continueDump && getDumpBody(allowMaximize)}

        <!-- maximize -->
        <dialog id=${maximizeId} class="dump-dialog" style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
            ${maximize && getHead(false)}
          </div>
          
          ${maximize && getDumpBody(false)}

          <div style="padding:.25em">
            <button type="button" onclick=${minimize} style="width:100%">🅧 close object</button>
          </div>
        </dialog>
      </div>
    </div>
  `;
});
//# sourceMappingURL=dumpObject.tag.js.map