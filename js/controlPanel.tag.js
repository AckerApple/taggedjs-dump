import { html, tag } from "taggedjs";
import { copyText } from "./copyText.function";
export const controlPanel = tag(({ value, format, showAll, formatChange, }) => {
    return html `
  <div style="width: 100%;line-height: 90%;">
    <div style="position:relative;">
      <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
        ${!format || format === 'small' && html `
          <a
            style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (showAll ? 'background-color:#33cd5f;' : 'background-color:#444444')}
            class="hover-bg-balanced"
            onclick=${() => showAll = !showAll}
            title="hide/show all sub objects"
          >👁</a>
        `}
        <a
          style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (!format || format === 'small' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
          class="hover-bg-balanced"
          onclick=${() => formatChange(format = 'small')}
        >small</a>
        <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (format === 'json' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
          class="hover-bg-balanced"
          onclick=${() => formatChange(format = 'json')}
        >json</a>
        <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (format === 'json' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
          class="hover-bg-balanced active-bg-energized"
          onclick=${() => copyAsJsonText(value)}
        >copy</a>
      </div>
    </div>
  </div>
  `;
});
function copyAsJsonText(value) {
    const text = JSON.stringify(value, null, 2);
    copyText(text);
}
//# sourceMappingURL=controlPanel.tag.js.map