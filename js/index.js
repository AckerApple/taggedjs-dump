import { copyText } from "./copyText.function.js";
import { html, onInit, setLet, setProp, tag } from "taggedjs";
import { dumpArray } from "./dumpArray.tag.js";
import { dumpSimple } from "./dumpSimple.tag.js";
import { dumpObject } from "./dumpObject.tag.js";
export const dump = tag(({ // dump tag
key, value, showKids = false, showLevels = -1, showAll, format = 'small', formatChange = () => undefined, isRootDump = true, onHeaderClick, }) => {
    const isObject = () => value && value instanceof Object;
    const typing = value === null ? 'null' : typeof (value);
    let show = setLet(false)(x => [show, show = x]);
    setProp(x => [format, format = x]);
    setProp(x => [showAll, showAll = x]);
    let arrayView = setLet(undefined)(x => [arrayView, arrayView = x]);
    onInit(() => {
        const levelsDefined = (showLevels >= 0 && showLevels);
        // detect auto levels (default) and if object lets only show 2 levels deep
        const autoShowObjectLevels = showLevels === -1 && !key && isObject();
        showLevels = levelsDefined || (autoShowObjectLevels ? 2 : 0);
        if (showLevels > 0) {
            show = true;
        }
    });
    /* IF 3: object value */
    function objectTemplate() {
        if (value === null) {
            if (!showKids) {
                return html ``;
            }
            return dumpSimple({
                key: key,
                value: 'null',
                onHeaderClick
            });
        }
        const isArray = (!format || format === 'small') && (value.push && value.pop);
        return html `
      ${isRootDump && html `
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
      `}
      ${(format === 'json' && html `
        <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
        >${JSON.stringify(value, null, 2)}</textarea>
      `) || ((isArray && dumpArray({
            key,
            value,
            show,
            // arrayView,
            showAll,
            showKids,
            showLevels,
            formatChange,
            // showChangeValue,
        })) ||
            dumpObject({
                key,
                show,
                // showChange: x => showChangeValue(show = x),
                showKids,
                showLevels,
                value,
                showAll,
                formatChange,
                onHeaderClick,
            }))}
    `;
    }
    /* IF 1: undefined ELSE goto simpleTemplate */
    if ([null, undefined].includes(value)) {
        return dumpSimple({
            key: key,
            value: typing,
            onHeaderClick
        });
    }
    /* IF 2: simple value ELSE goto objectTemplate */
    if (['boolean', 'number', 'string'].includes(typing)) {
        return dumpSimple({ key: key, value, onHeaderClick });
    }
    return objectTemplate();
});
function copyAsJsonText(value) {
    const text = JSON.stringify(value, null, 2);
    copyText(text);
}
//# sourceMappingURL=index.js.map