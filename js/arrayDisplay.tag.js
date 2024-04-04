import { html, tag } from "taggedjs";
import { dump } from "./index";
export const arrayDisplay = tag(({ array, showLevels, showAll, showKids, columnNames, formatChange, toggleColumnDialog, }) => {
    return html `
    ${array.map((item, index) => html `${dump({
        value: paramValueKeys(item, columnNames),
        showLevels,
        showAll,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
        onHeaderClick: toggleColumnDialog
    })}`.key({ item: item, index }))}
  `;
});
function paramValueKeys(inputObject, keysArray) {
    if (['string', 'number', 'boolean'].includes(typeof (inputObject))) {
        return inputObject;
    }
    return filterObjectByKeys(inputObject, keysArray);
}
function filterObjectByKeys(inputObject, keysArray) {
    const filteredObject = {};
    keysArray.forEach(key => {
        if (inputObject.hasOwnProperty(key)) {
            filteredObject[key] = inputObject[key];
        }
    });
    return filteredObject;
}
//# sourceMappingURL=arrayDisplay.tag.js.map