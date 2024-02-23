import { copyText } from "./app.component.utils"
import { html, onInit, state, tag } from "taggedjs"

type DumpProps = {
  value: any
  key: string // dump a key within the provided value
  show: boolean // hide entire results
  showKids: boolean // force children to be shown by true value
  showLevels: number // unfolded shown levels of depth. Default is auto decide

  format: 'json' | 'small' // do not pass in, used to detect when first dump
  formatChange: (format: 'json' | 'small') => unknown
  
  isRootDump: boolean // do not pass in, used to detect when first dump
  
  showChange: (show: boolean) => any
  onHeaderClick: () => any
  // showAll: boolean
}

export const dump = tag(({
  key, value,
  
  show,
  showChange,
  
  showKids = false,
  showLevels = -1,
  // showAll,
  format = 'small',
  formatChange = () => undefined,
  isRootDump = true,
  onHeaderClick = () => undefined
}: DumpProps) => {
  if(!showChange) {
    show = state(false)(x => [show, show=x])
    console.log('first', show)
    showChange = x => {
      show = x
      console.log('showChange', x)
      return show
    }
  }

  const isObject = () => value && value instanceof Object
  const typing = value === null ? 'null' : typeof(value)
  // let showValue = state(show)(x => [showValue, showValue = x])
  
  console.log('showValue 00', {show})
  format = state(format)(x => [format, format = x])

  let showAll = state(false)(x => [showAll, showAll = x])
  let arrayView = state(undefined as undefined | 'table')(x => [arrayView, arrayView = x])

  onInit(() => {
    const levelsDefined = (showLevels>=0 && showLevels)
    // detect auto levels (default) and if object lets only show 2 levels deep
    const autoShowObjectLevels = showLevels === -1 && !key && isObject()
    showLevels = levelsDefined || (autoShowObjectLevels ? 2 : 0)

    if (showLevels > 0) {
      //showValue = true
      // showChange(show = !show)
    }
  })


  /* IF 2: simple value ELSE goto objectTemplate */
  function simpleTemplate() {
    if(['boolean','number','string'].includes(typing)) {
      return dumpSimple({key:key, value:value, onHeaderClick})
    }

    return objectTemplate()
  }

  /* IF 3: object value */
  function objectTemplate() {
    if(value === null) {
      if(!showKids) {
        return ''
      }
      return dumpSimple({key, value: 'null', onHeaderClick})
    }

    const isArray = (!format || format==='small') && (value.push && value.pop)

    console.log('isArray, show', {show})

    return html`  
      ${isRootDump && html`
        <div style="width: 100%;line-height: 90%;">
          <div style="position:relative;">
            <div class="text-xxxs child-margin-1 flex" style="position:absolute;top:-18px;right:-6px">
              ${!format || format==='small' && html`
                <a style="border-radius:5px;color:white;" class=${'flex-valign-center pad-h-xxs hover-bg-balanced ' + (showAll ? 'bg-balanced' : 'bg-dark')}
                  onclick=${() => showAll = !showAll}
                  title="hide/show all sub objects"
                >👁</a>
              `}
              <a style="border-radius:5px;color:white;" class=${'flex-valign-center pad-h-xxs hover-bg-balanced ' + (!format || format==='small' ? 'bg-positive' : 'bg-dark')}
                onclick=${() => formatChange(format='small')}
              >small</a>
              <a style="border-radius:5px;color:white;" class=${"flex-valign-center pad-h-xxs hover-bg-balanced " + (format==='json' ? 'bg-positive' : 'bg-dark')}
                onclick=${() => formatChange(format='json')}
              >json</a>
              <a style="border-radius:5px;color:white;" class=${"flex-valign-center pad-h-xxs hover-bg-balanced active-bg-energized " + (format==='json' ? 'bg-positive' : 'bg-dark')}
                onclick=${() => copyAsJsonText(value)}
              >copy</a>
            </div>
          </div>
          ${format==='json' && html`
            <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px"
            >${ JSON.stringify(value, null, 2) }</textarea>
          `}
        </div>
      `}
      
      ${isArray ? html`
          <!-- array -->
          <div style="border:1px solid black;border-radius:5px" class="bg-danger flex-stacked text-dark">
            
            <div style="border-color:white;color:white;" class="text-xxs pad-xxs bg-assertive flex-1 flex-apart"
              class.border-bottom=${show}
            >
              <a style="flex-grow:1" onclick=${() => {showChange(show = !show);console.log('click 485', show)}}>
                <strong>${key}</strong>
              </a>
              <sup style="opacity:80%;" class="text-xs pad-left-xs">
                <a onclick=${() => (arrayView = arrayView === 'table' ? undefined : 'table')}>table</a>
              </sup>
              <sup style="opacity:80%;" class="text-xs pad-left-xs">[${value.length}]</sup>
            </div>
            
            ${(showAll || show || showKids || (show==undefined && showLevels > 0)) && html`
              <!-- array displays wrap -->
              <div style="display:flex;flex-wrap:wrap" class="child-margin-xxs">
                ${arraysDisplay({showLevels, showAll, showKids, array: value, arrayView})}
              </div>
            `}
          </div>
        ` : dumpObject({
          key,
          show,
          showChange: x => showChange(show = x),
          showKids,
          showLevels,
          value,
          showAll,
          /*
          show,
          showChange: x => {
            console.log('show changed', x)
            show = x
          },
          */
          onHeaderClick,
        })
      }
    `
  }

  /* IF 1: undefined ELSE goto simpleTemplate */
  return [null, undefined].includes(value) ? dumpSimple({key, value: typing, onHeaderClick}) : simpleTemplate()
})

function copyAsJsonText(value: any) {
  const text = JSON.stringify(value, null, 2)
  copyText( text )
}

const arrayTable = tag(({
  array, showLevels, showAll,
  showKids, toggleColumnDialog, columnNames,
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
                    showKids:showAll || showKids,
                    isRootDump:false
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
  showLevels, showAll, showKids, array, arrayView,
}) => {
  const allColumnNames = array.length ? Object.keys(array[0]) : []
  let columnNames = state(allColumnNames)(x => [columnNames, columnNames = x])
  let showColumnDialog = state(false)(x => [showColumnDialog, showColumnDialog = x])
  let uniqueId = state('columnDialog' + performance.now())()

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
  }) : arrayDisplay({array, showLevels, showAll, showKids, columnNames, toggleColumnDialog})

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
            <li style="display:flex;justify-content: space-between" class="hover-bg-warning">
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
    </style>
  `
})

/** recurser */
const arrayDisplay = ({
  array, showLevels,
  showAll, showKids,
  columnNames,
  toggleColumnDialog,
}: {
  array: any[]
  showLevels: boolean
  showAll: boolean
  showKids: boolean
  columnNames: string[]
  toggleColumnDialog: () => any
}) => {
  return array.map((
    item: any,
    index: number
  ) => html`${dump({
    value: filterObjectByKeys(item, columnNames),
    showLevels,
    showKids:showAll || showKids,
    isRootDump:false,
    onHeaderClick: () => {
      console.log('0')
      toggleColumnDialog()
    }
  })}`.key({item: item, index} as any))
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

/*
const arrayDisplay = tag(({array, showLevels, showAll, showKids}) => {
  return html`
    ${
      array.map((
        item: any,
        index: number
      ) => html`${dump({
        value: item,
        showLevels,
        showKids:showAll || showKids,
        isRootDump:false
      })}`.key({item: item, index} as any))
    }
  `
})
*/

const dumpObject = tag(({
  key, showKids,
  show,
  showChange,
  showLevels,
  value,
  showAll,
  onHeaderClick,
  // showChange,
}) => {
  // console.log('show 1',show)
  // let showLower = state(show)(x => [showLower, showLower = x])
  // let showLower = show // state(show)(x => [showLower, showLower = x])
  let showLower = state(show)(x => [showLower, showLower = x])

  // if(show) {
  //   showLower = true
  // }

  const continueDump = !key || showKids || showLower || (showLower==undefined && showLevels > 0)

  if(showLower) {
    console.log(8888, continueDump)
  }

  return html`
    <div style="flex: 1 1 10em;">
      <div style="border:1px solid black;border-radius:5px" class="bg-info flex-stacked text-sm text-dark">
        ${key && html`
          <a style="color:white;border-color:white;flex-grow:1;" class="text-xxs pad-xxs bg-positive flex-apart"
            class.border-bottom=${showLower}
            onclick=${() => {showChange(showLower = !showLower);console.log('click', showLower);/*onHeaderClick()*/}}
          >
            <strong>${key}</strong>
            <sup style="opacity:80%;" class="text-xs pad-left-xs">
              {${Object.keys(value).length}}
            </sup>
          </a>
        `}
        
        ${continueDump && html`
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(value).map(([key, value]) => html`
              <!-- recurse -->
              <div
                class="child-margin-xxs pad-xxs"
                style=${'overflow:auto;display:flex;flex-wrap:wrap;' + (!value || typeof(value) !== 'object' ? 'flex: 1 1 10em;' : 'flex-grow:1;')}
              >
                ${dump({
                  value,
                  key,
                  show: showLower,
                  showChange: x => showChange(showLower = x),
                  showLevels: showLevels - 1,
                  showKids: showAll || showKids,
                  isRootDump: false,
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
  onHeaderClick: () => any
}) {
  function simpleValue() {
    return html`
      <div onclick=${() => copyText(value)}
        style="cursor:pointer;"
        class="hover-bg-warning active-bg-energized"
        class.text-balanced=${value === true}
        class.text-assertive=${value === false}
        title = ${value.constructor?.name === 'Number' && value > 1000000000 ? value > 946702800000 ? 'Milliseconds > Unix epoch:\n' + (new Date(value).toLocaleString()) : 'Seconds > Unix epoch:\n' + (new Date(value*1000).toLocaleString()) : ''}
      >${value === null && 'null' || value === false && 'false' || value === undefined && 'undefined' || value}</div>
    `  
  }
  
  return html`
    <div class="text-xs text-dark" style="flex:1 1 10em">
      ${key && html`
        <div class="text-xxs border-bottom" style="border-color:white;line-height: 95%;font-weight:bold;"
          onclick=${() => onHeaderClick()}
        >${key}</div>
      `}

      ${value.search && (value.slice(0,8)==='https://' || value.slice(0,7)==='http://') ? html`
        <a onclick=${() => copyText(value)} href=${value} target="_blank" class="hover-bg-warning active-bg-energized"
          title="tap to copy"
        >${value}</a>
      ` : simpleValue()}
    </div>
  `
}
