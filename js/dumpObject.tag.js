import { html, letState, tag, watch } from "taggedjs";
import { dump } from "./index";
export const dumpObject = tag(({ // dumpObject
key, showKids, show, showLevels, value, showAll, onHeaderClick, formatChange, }) => {
    let showLower = letState(false)(x => [showLower, showLower = x]);
    watch([show], ([show]) => showLower = show);
    const continueDump = !key || showKids || showLower || (showLower == undefined && showLevels > 0);
    return html `
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${key && html `
          <a
            style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;" +
        (showLower ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
            onclick=${() => {
        showLower = !showLower;
    }}
          >
            <strong>${key}</strong>
            <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
              {${Object.keys(value).length}}
            </sup>
          </a>
        `}
        
        ${continueDump && html `
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(value).map(([key, value]) => html `
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${'padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;' +
        (!value || typeof (value) !== 'object' ? 'flex: 1 1 10em;' : 'flex-grow:1;')}
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
    })}
            `.key([key, value]))}
          </div>
        `}
      </div>
    </div>
  `;
});
//# sourceMappingURL=dumpObject.tag.js.map