import { columnEditor } from "./columnEditor.component"
import { html, set, setLet, tag } from "taggedjs"
import { FormatChange } from "./index"
import { arrayTable } from "./arrayTable.component"
import { arrayDisplay } from "./arrayDisplay.tag"

export const arraysDisplay = tag(({
  showLevels,
  showAll,
  showKids,
  array,
  arrayView,
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
      element.close() // <- element has onclose event that is called slow
    }
  }

  const arrayTag = arrayView === 'table' ? arrayTable({
    showAll, showKids,
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
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${columnEditor({
                name,
                array,
                included,
                columnNames,
                allColumnNames,
              })}
            </div>
          `.key(name)
        })}
        <button style="width:100%" type="button" onclick=${toggleColumnDialog}>🅧 close</button>
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
