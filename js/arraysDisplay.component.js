import { columnEditor } from "./columnEditor.component";
import { html, state, letState, tag } from "taggedjs";
import { arrayTable } from "./arrayTable.component";
import { arrayDisplay } from "./arrayDisplay.tag";
export const arraysDisplay = tag(({ showLevels, showAll, showKids, array, arrayView, formatChange, allowMaximize, everySimpleValue, }) => {
    const allColumnNames = array.length ? Object.keys(array[0]) : [];
    let columnNames = letState(allColumnNames)(x => [columnNames, columnNames = x]);
    let showColumnDialog = letState(false)(x => [showColumnDialog, showColumnDialog = x]);
    let uniqueId = state('columnDialog' + performance.now());
    const toggleColumnDialog = () => {
        showColumnDialog = !showColumnDialog;
        const element = document.getElementById(uniqueId);
        if (showColumnDialog) {
            element.showModal();
        }
        else {
            element.close(); // <- element has onclose event that is called slow
        }
    };
    const arrayTag = arrayView === 'table' ? arrayTable({
        showAll, showKids,
        array, toggleColumnDialog, columnNames,
        formatChange, everySimpleValue,
    }) : arrayDisplay({
        array, showLevels, showAll, showKids,
        formatChange,
        columnNames,
        toggleColumnDialog,
        allowMaximize, everySimpleValue
    });
    return html `
    ${arrayTag}

    <dialog id=${uniqueId} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
      onclose=${() => {
        showColumnDialog = false;
    }}
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${allColumnNames.map(name => {
        const included = columnNames.includes(name);
        return html `
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
          `.key(name);
    })}
        <button style="width:100%" type="button" onclick=${toggleColumnDialog}>🅧 close</button>
      </div>
    </dialog>
  `;
});
//# sourceMappingURL=arraysDisplay.component.js.map