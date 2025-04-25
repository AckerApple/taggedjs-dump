import { html, onInit, tag, letProp, states } from "taggedjs";
import { dumpArray } from "./dumpArray.tag";
import { dumpSimple } from "./dumpSimple.tag";
import { dumpObject } from "./dumpObject.tag";
import { controlPanel } from "./controlPanel.tag";
export const dump = tag(({ // dump tag
key, value, showKids = false, showLevels = -1, showAll = false, format = 'flex', formatChange = x => format = x, isRootDump = true, onHeaderClick, allowMaximize, everySimpleValue, }) => {
    if (isRootDump && allowMaximize === undefined) {
        allowMaximize = true;
    }
    const isObject = () => value && value instanceof Object;
    const typing = value === null ? 'null' : typeof (value);
    let show = true;
    letProp(get => [format] = get(format));
    letProp(get => [showAll] = get(showAll));
    letProp(get => [showLevels] = get(showLevels));
    let arrayView = undefined;
    states(get => [{ show, arrayView }] = get({ show, arrayView }));
    onInit(() => {
        const levelsDefined = (showLevels >= 0 && showLevels);
        // detect auto levels (default) and if object lets only show 2 levels deep
        const autoShowObjectLevels = showLevels === -1 && !key && isObject();
        showLevels = levelsDefined || (autoShowObjectLevels ? 2 : 0);
        if (showLevels > 0) {
            show = true;
        }
    });
    /* IF 1: undefined ELSE goto simpleTemplate */
    if ([null, undefined].includes(value)) {
        return dumpSimple({
            key: key,
            value: typing,
            onHeaderClick,
            everySimpleValue,
        });
    }
    /* IF 2: simple value ELSE goto objectTemplate */
    if (['boolean', 'number', 'string'].includes(typing)) {
        return dumpSimple({ key: key, value, onHeaderClick, everySimpleValue });
    }
    return getObjectTemplate({
        value,
        showKids,
        key,
        onHeaderClick,
        everySimpleValue,
        format,
        isRootDump,
        showAll,
        showAllChange: (x) => showAll = x,
        formatChange,
        show,
        showLevels,
        allowMaximize,
    });
});
let dumpCount = 0;
const getObjectTemplate = ({ value, showKids, key, onHeaderClick, everySimpleValue, format, isRootDump, showAll, showAllChange, formatChange, show, showLevels, allowMaximize, }) => {
    if (value === null) {
        if (!showKids) {
            return html `no kids`;
        }
        return dumpSimple({
            key: key,
            value: 'null',
            onHeaderClick,
            everySimpleValue,
        });
    }
    const isArray = Array.isArray(value); // (!format || format==='flex') && ((value as any).push && (value as any).pop)
    const getArrayDump = () => {
        return dumpArray({
            key,
            value,
            show,
            // arrayView,
            showAll,
            showKids,
            showLevels,
            formatChange,
            allowMaximize,
            everySimpleValue,
        });
    };
    const getObjectDump = () => dumpObject({
        key,
        show,
        // showChange: x => showChangeValue(show = x),
        showKids,
        showLevels,
        value,
        showAll,
        formatChange,
        onHeaderClick,
        allowMaximize,
        everySimpleValue,
    });
    const getJsonDump = () => html `
    <textarea disabled wrap="off"
      style="width:100%;height:25vh;min-height:400px;color:white;background-color:black;"
    >${JSON.stringify(value, null, 2)}</textarea>
  `;
    // let isShown = true
    // states(get => [isShown] = )
    letProp(get => [show] = get(show));
    letProp(get => [showKids] = get(showKids));
    return html `
    <div class="taggedjs-dump" id=${`taggedjs-dump-${++dumpCount}`}>
      ${isRootDump && controlPanel({
        value,
        format,
        showAll,
        showAllChange,
        formatChange,
    })}

      ${!isRootDump && !isArray && !key && html `
        <div style="position:relative;display:flex;">
          <a title="collapse/expand" onclick=${() => {
        if (show === false && showKids) {
            showKids = false;
        }
        show = !show;
    }}
            style="
              font-size: 0.7em;
              right: 0;
              border: 1px solid black;
              border-radius: 0.25em;
              width: 1em;
              height: 1em;
              line-height: 1em;
              text-align: center;
            "
            style.position = ${show ? 'absolute' : ''}
          >${show ? '-' : '+'}</a>
        </div>
      `}

      ${show && ((format === 'json' && getJsonDump()) || (isArray ? getArrayDump() : getObjectDump()))}
    </div>
  `;
};
//# sourceMappingURL=dump.tag.js.map