import { html, onInit, setLet, setProp, tag } from "taggedjs";
import { dumpArray } from "./dumpArray.tag";
import { dumpSimple } from "./dumpSimple.tag";
import { dumpObject } from "./dumpObject.tag";
import { controlPanel } from "./controlPanel.tag";
export const dump = tag(({ // dump tag
key, value, showKids = false, showLevels = -1, showAll = false, format = 'flex', formatChange = x => format = x, isRootDump = true, onHeaderClick, }) => {
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
        const isArray = (!format || format === 'flex') && (value.push && value.pop);
        return html `
      <div class="taggedjs-dump">
        ${isRootDump && controlPanel({
            value,
            format,
            showAll,
            showAllChange: x => showAll = x,
            formatChange,
        })}
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
      </div>
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
//# sourceMappingURL=index.js.map