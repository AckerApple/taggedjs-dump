import { copyText } from "./copyText.function"
import { html, onInit, set, setLet, setProp, tag, Tag, watch } from "taggedjs"

type ShowChange = (show: boolean) => any
type OnHeaderClick = () => any
type FormatChange = (format: 'json' | 'small') => unknown

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

export const dump = tag(({
  key, value,
  
  // show,
  // showChange,
  
  showKids = false,
  showLevels = -1,
  showAll,
  format = 'small',
  formatChange = () => undefined,
  isRootDump = true,
  onHeaderClick = () => undefined
}: DumpProps) => {
  const isObject = () => value && value instanceof Object
  const typing = value === null ? 'null' : typeof(value)
  let show = setLet(false)(x => [show, show = x])
  format = setLet(format)(x => [format, format = x])

  let arrayView = setLet(undefined as undefined | 'table')(x => [arrayView, arrayView = x])

  onInit(() => {
    const levelsDefined = (showLevels>=0 && showLevels)
    // detect auto levels (default) and if object lets only show 2 levels deep
    const autoShowObjectLevels = showLevels === -1 && !key && isObject()
    showLevels = levelsDefined || (autoShowObjectLevels ? 2 : 0)

    if (showLevels > 0) {
      show = true
    }

    console.log('showLevels',showLevels)
  })


  /* IF 2: simple value ELSE goto objectTemplate */
  function simpleTemplate() {
    if(['boolean','number','string'].includes(typing)) {
      return dumpSimple({key:key as string, value:value, onHeaderClick})
    }

    return objectTemplate()
  }

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

    // console.log('isArray, show', {show})

    return html`
      ${isRootDump && html`
        <div style="width: 100%;line-height: 90%;">
          <div style="position:relative;">
            <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
              ${!format || format==='small' && html`
                <a
                  style=${
                    "margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
                    (showAll ? 'background-color:#33cd5f;' : 'background-color:#444444')
                  }
                  class="hover-bg-balanced"
                  onclick=${() => showAll = !showAll}
                  title="hide/show all sub objects"
                >👁</a>
              `}
              <a
                style=${
                  "margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
                  (!format || format==='small' ? 'background-color:#33cd5f;' : 'background-color:#444444')
                }
                class="hover-bg-balanced"
                onclick=${() => formatChange(format='small')}
              >small</a>
              <a style=${
                "margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
                (format==='json' ? 'background-color:#33cd5f;' : 'background-color:#444444')
                }
                class="hover-bg-balanced"
                onclick=${() => formatChange(format='json')}
              >json</a>
              <a style=${
                  "margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
                  (format==='json' ? 'background-color:#33cd5f;' : 'background-color:#444444')
                }
                class="hover-bg-balanced active-bg-energized"
                onclick=${() => copyAsJsonText(value)}
              >copy</a>
            </div>
          </div>
          ${format==='json' && html`
            <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
            >${ JSON.stringify(value, null, 2) }</textarea>
          `}
        </div>
      `}
      
      ${isArray ? dumpArray({
        key,
        value,
        show,
        arrayView,
        showAll,
        showKids,
        showLevels,
        formatChange,
        // showChangeValue,
      }) : dumpObject({
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
      }
    `
  }

  /* IF 1: undefined ELSE goto simpleTemplate */
  return [null, undefined].includes(value) ? dumpSimple({
    key: key as string,
    value: typing,
    onHeaderClick
  }) : simpleTemplate()
})

const dumpArray = ({
  key,
  value,
  show,
  showAll,
  showKids,
  arrayView,
  showLevels,
  formatChange,
  // showChangeValue,
}: {
  value: any
  showLevels: number
  key?: string
  show: boolean
  showAll?: boolean
  showKids: boolean
  arrayView?: string
  formatChange: FormatChange
  // showChangeValue: ShowChange
}) => {
  let showValue = setLet(false)(x => [showValue, showValue = x])

  watch([show], ([show])=> showValue = show)

  return html`<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${
        "padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;" +
        (showValue ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;':'')
      }
    >
      <a style="flex-grow:1" onclick=${() => {
        showValue = !showValue
      }}>
        <strong>${key}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a onclick=${() => (arrayView = arrayView === 'table' ? undefined : 'table')}>table</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${value.length}]</sup>
    </div>
    
    ${(showAll || showValue || showKids || (showValue==undefined && showLevels > 0)) && html`
      <!-- array displays wrap -->
      <div style="display:flex;flex-wrap:wrap;margin:0.2em;">
        ${arraysDisplay({
          showLevels, showAll, showKids,
          formatChange,
          array: value, arrayView: arrayView as string
        })}
      </div>
    `}
  </div>
  `
}

function copyAsJsonText(value: any) {
  const text = JSON.stringify(value, null, 2)
  copyText( text )
}

const arrayTable = tag(({
  array, showLevels, showAll,
  showKids, toggleColumnDialog, columnNames,
  formatChange,
}: {
  array: any[]
  showLevels: number
  showAll?: boolean
  showKids: boolean
  toggleColumnDialog: any
  columnNames: string[],
  formatChange: FormatChange
}) => {  
  return html`<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${array.length && html`
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${columnNames.map(key => html`
                <th onclick=${toggleColumnDialog}>${key}</th>
              `.key(key))}
            </tr>
          </thead>
        `}
        <tbody>
          ${array.map(row => html`
            <tr>
              ${columnNames.map(name => html`
                <td>
                  ${dump({
                    value: row[name],
                    showLevels,
                    showAll,
                    showKids:showAll || showKids,
                    isRootDump:false,
                    formatChange,
                  })}
                </td>
              `.key(row[name]))}
            </tr>
          `.key(row))}
        </tbody>
      </table>
    </div>
  `
})

const arraysDisplay = tag(({
  showLevels, showAll, showKids,
  array, arrayView,
  formatChange,
}: {
  formatChange: FormatChange
  array: any[]
  arrayView: string
  showLevels: number
  showAll?: boolean
  showKids: boolean
}) => {
  const allColumnNames = array.length ? Object.keys(array[0]) : []
  let columnNames = setLet(allColumnNames)(x => [columnNames, columnNames = x])
  let showColumnDialog = setLet(false)(x => [showColumnDialog, showColumnDialog = x])
  let uniqueId = set('columnDialog' + performance.now())

  const toggleColumnDialog = () => {
    showColumnDialog = !showColumnDialog
    const element = document.getElementById(uniqueId) as any
    
    if(showColumnDialog) {
      element.showModal()
    } else {
      element.close()
    }
  }

  const arrayTag = arrayView === 'table' ? arrayTable({
    showLevels, showAll, showKids,
    array, toggleColumnDialog, columnNames,
    formatChange,
  }) : arrayDisplay({
    array, showLevels, showAll, showKids,
    formatChange,
    columnNames, toggleColumnDialog
  })

  return html`
    ${arrayTag}

    <dialog id=${uniqueId} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
      onclose=${() => {
        console.log('closing')
        showColumnDialog = false
      }}
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${allColumnNames.map(name => {
          const included = columnNames.includes(name)
          return html`
            <li
              style="display:flex;justify-content: space-between"
              class="hover-bg-warning"
            >
              <a onclick=${() => included ? columnNames=columnNames.filter(n => n !== name) : columnNames.push(name)}
                style="cursor:pointer;"
              >
                <input type="checkbox" ${included && 'checked'} />&nbsp;${name}
              </a>

              ${included && columnNames.length !== allColumnNames.length ? html`
                <a style="color:blue;" onclick=${() => columnNames=[...allColumnNames]}><small>all</small></a>
              ` : html`
                <a style="color:blue;" onclick=${() => columnNames=[name]}><small>only</small></a>
              `}
            </li>
          `.key(name)
        })}
        <button type="button" onclick=${toggleColumnDialog}>🅧 close</button>
      </div>
    </dialog>

    <style>
      dialog.dump-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.7); /* Set a semi-transparent black background */
      }

      .child-margin-xxs {margin:0.2em;}
      
      .hover-bg-warning:hover {background-color:#fcf8e3}
      .hover-bg-balanced:hover {background-color:#33cd5f}
      .active-bg-energized:active {background-color:#ffc900}
    </style>
  `
})

/** recurser */
const arrayDisplay = ({
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
  return array.map((
    item: any,
    index: number
  ) => html`${dump({
    value: filterObjectByKeys(item, columnNames),
    showLevels,
    showAll,
    showKids:showAll || showKids,
    isRootDump:false,
    formatChange,
    onHeaderClick: () => {
      toggleColumnDialog()
    }
  })}`.key({item: item, index} as any))
}

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

const dumpObject = tag(({
  key, showKids,
  show,
  // showChange,
  showLevels,
  value,
  showAll,
  onHeaderClick,
  formatChange,
}:{
  key?: string
  value: any
  showAll?: boolean
  showKids: boolean
  show: boolean
  showLevels: number
  // showChange: ShowChange
  formatChange: FormatChange
  onHeaderClick: OnHeaderClick
}) => {
  let showLower = setLet(false)(x => [showLower, showLower = x])

  watch([show], ([show]) => showLower = show)

  const continueDump = !key || showKids || showLower || (showLower==undefined && showLevels > 0)

  return html`
    <div style="flex: 1 1 10em;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${key && html`
          <a
            style=${
              "padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;" +
              (showLower ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')
            }
            onclick=${() => showLower = !showLower}
          >
            <strong>${key}</strong>
            <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
              {${Object.keys(value).length}}
            </sup>
          </a>
        `}
        
        ${continueDump && html`
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(value).map(([key, value]) => html`
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${
                  'padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;' +
                  (!value || typeof(value) !== 'object' ? 'flex: 1 1 10em;' : 'flex-grow:1;')
                }
              >
                ${dump({
                  value,
                  key,
                  show: showLower,
                  /*
                  showChange: x => {
                    showLower = x
                    // showChange(showLower = x)
                  },
                  */
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
  `
})

function dumpSimple({key, value, onHeaderClick}: {
  key: string
  value: any
  onHeaderClick: OnHeaderClick
}) {
  function simpleValue() {
    return html`
      <div onclick=${() => copyText(value)}
        style=${
          "cursor:pointer;" +
          (value === true ? 'color:#28a54c' : 'color:#e42112')
        }
        class="hover-bg-warning active-bg-energized"
        title = ${value.constructor?.name === 'Number' && value > 1000000000 ? value > 946702800000 ? 'Milliseconds > Unix epoch:\n' + (new Date(value).toLocaleString()) : 'Seconds > Unix epoch:\n' + (new Date(value*1000).toLocaleString()) : ''}
      >${value === null && 'null' || value === false && 'false' || value === undefined && 'undefined' || value}</div>
    `  
  }
  
  return html`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${key && html`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          onclick=${() => onHeaderClick()}
        >${key}</div>
      `}

      ${value.search && (value.slice(0,8)==='https://' || value.slice(0,7)==='http://') ? html`
        <a onclick=${() => copyText(value)} href=${value}
          target="_blank"
          class="hover-bg-warning active-bg-energized"
          title="tap to copy"
        >${value}</a>
      ` : simpleValue()}
    </div>
  `
}
