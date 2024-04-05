import { copyText } from "./copyText.function"
import { html, onInit, setLet, setProp, tag, Tag } from "taggedjs"
import { dumpArray } from "./dumpArray.tag"
import { dumpSimple } from "./dumpSimple.tag"
import { dumpObject } from "./dumpObject.tag"
import { controlPanel } from "./controlPanel.tag"

type ShowChange = (show: boolean) => any
export type OnHeaderClick = () => any
export type FormatChange = (format: 'json' | 'small') => unknown

type DumpProps = {
  value: any
  key?: string // dump a key within the provided value
  show?: boolean // hide entire results
  showKids?: boolean // force children to be shown by true value
  showLevels?: number // unfolded shown levels of depth. Default is auto decide

  format?: 'json' | 'small' // do not pass in, used to detect when first dump
  formatChange?: FormatChange
  
  isRootDump?: boolean // do not pass in, used to detect when first dump
  
  showChange?: ShowChange
  onHeaderClick?: () => any
  showAll?: boolean
}

export const dump = tag(({// dump tag
  key, value,
  showKids = false,
  showLevels = -1,
  showAll,
  format = 'small',
  formatChange = () => undefined,
  isRootDump = true,
  onHeaderClick,
}: DumpProps) => {
  const isObject = () => value && value instanceof Object
  const typing = value === null ? 'null' : typeof(value)
  let show = setLet(false)(x => [show, show = x])
  setProp(x => [format, format = x])
  setProp(x => [showAll, showAll = x])
  let arrayView = setLet(undefined as undefined | 'table')(x => [arrayView, arrayView = x])

  onInit(() => {
    const levelsDefined = (showLevels>=0 && showLevels)
    // detect auto levels (default) and if object lets only show 2 levels deep
    const autoShowObjectLevels = showLevels === -1 && !key && isObject()
    showLevels = levelsDefined || (autoShowObjectLevels ? 2 : 0)

    if (showLevels > 0) {
      show = true
    }
  })

  /* IF 3: object value */
  function objectTemplate(): Tag {
    if(value === null) {
      if(!showKids) {
        return html``
      }

      return dumpSimple({
        key: key as string,
        value: 'null',
        onHeaderClick
      })
    }

    const isArray = (!format || format==='small') && (value.push && value.pop)

    return html`
      ${isRootDump && controlPanel({value, format, showAll, formatChange,})}
      ${(format==='json' && html`
        <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
        >${ JSON.stringify(value, null, 2) }</textarea>
      `) || (
        (isArray && dumpArray({
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
        })
      )}
    `
  }

  /* IF 1: undefined ELSE goto simpleTemplate */
  if([null, undefined].includes(value)) {
    return dumpSimple({
      key: key as string,
      value: typing,
      onHeaderClick
    })
  }
  
  /* IF 2: simple value ELSE goto objectTemplate */
  if(['boolean','number','string'].includes(typing)) {
    return dumpSimple({key:key as string, value, onHeaderClick})
  }

  return objectTemplate()
})
