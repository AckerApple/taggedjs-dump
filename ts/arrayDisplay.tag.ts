import { html, tag } from "taggedjs"
import { FormatChange, dump } from "./index.js"

export const arrayDisplay = tag(({
  array, showLevels,
  showAll, showKids,
  columnNames,
  formatChange,
  toggleColumnDialog,
}: {
  array: any[]
  showLevels: number
  showAll?: boolean
  showKids: boolean
  columnNames: string[]
  formatChange: FormatChange
  toggleColumnDialog: () => any
}) => {
  return html`
    ${array.map((
      item: any,
      index: number
    ) => html`${dump({
      value: filterObjectByKeys(item, columnNames),
      showLevels,
      showAll,
      showKids:showAll || showKids,
      isRootDump:false,
      formatChange,
      onHeaderClick: toggleColumnDialog
    })}`.key({item: item, index} as any))}
  `
})

function filterObjectByKeys(
  inputObject: Record<string, any>,
  keysArray: string[]
) {
  const filteredObject: Record<string, any> = {};

  keysArray.forEach(key => {
    if (inputObject.hasOwnProperty(key)) {
      filteredObject[key] = inputObject[key];
    }
  });

  return filteredObject;
}
