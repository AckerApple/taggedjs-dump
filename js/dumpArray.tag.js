import { arraysDisplay } from "./arraysDisplay.component.js";
import { html, setLet, tag, watch } from "taggedjs";
export const dumpArray = tag(({ // dumpArray
key, value, show, showAll, showKids, 
// arrayView,
showLevels, formatChange,
// showChangeValue,
 }) => {
    let showValue = setLet(false)(x => [showValue, showValue = x]);
    let arrayView = setLet(undefined)(x => [arrayView, arrayView = x]);
    watch([show], ([show]) => showValue = show);
    return html `<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;" +
        (showValue ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
    >
      <a style="flex-grow:1" onclick=${() => {
        showValue = !showValue;
    }}>
        <strong>${key}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${arrayView === 'table' ? 'bold' : ''}
          onclick=${() => arrayView = arrayView === 'table' ? undefined : 'table'}>${arrayView === 'table' ? 'flex' : 'table'}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${value.length}]</sup>
    </div>
    
    ${(showAll || showValue || showKids || (showValue == undefined && showLevels > 0)) && html `
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${arraysDisplay({
        showLevels, showAll, showKids,
        formatChange,
        array: value,
        arrayView: arrayView
    })}
      </div>
    `}
  </div>
  `;
});
//# sourceMappingURL=dumpArray.tag.js.map