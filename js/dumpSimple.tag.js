import { html } from "taggedjs";
import { copyText } from "./copyText.function.js";
export function dumpSimple({ key, value, onHeaderClick }) {
    const isLinkValue = value.search && (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
    return html `
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${key && html `
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${onHeaderClick && "pointer"}
          onclick=${onHeaderClick}
        >${key}</div>
      `}

      ${isLinkValue ? linkValue(value) : simpleValue(value)}
    </div>
  `;
}
const simpleValue = (value) => {
    const isLikeNull = [undefined, null, 'null'].includes(value);
    const number = value;
    const isLargeNumber = !isNaN(number) && number > 1000000000;
    const title = !isLargeNumber ? '' : getLargeNumberTitle(number);
    return html `
    <div class="hover-bg-warning active-bg-energized"
      onclick=${() => copyText(value)}
      style="cursor:pointer;"
      style.background-color=${isLikeNull ? 'rgba(0,0,0,.5)' : ''}
      style.color = ${(value === true && '#28a54c') ||
        (value === false && '#e42112') ||
        isLikeNull && 'white' || ''}
      title = ${title}
    >${value === null && 'null' || value === false && 'false' || value === undefined && 'undefined' || value}</div>
  `;
};
function getLargeNumberTitle(number) {
    return number > 946702800000 ?
        'Milliseconds > Unix epoch:\n' + (new Date(number).toLocaleString()) :
        'Seconds > Unix epoch:\n' + (new Date(number * 1000).toLocaleString());
}
const linkValue = (value) => {
    return html `
    <a onclick=${() => copyText(value)} href=${value}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${value}</a>
  `;
};
//# sourceMappingURL=dumpSimple.tag.js.map