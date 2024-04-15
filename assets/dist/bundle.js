/******/ var __webpack_modules__ = ({

/***/ "./node_modules/taggedjs-dump/js/arrayDisplay.tag.js":
/*!***********************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/arrayDisplay.tag.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayDisplay: () => (/* binding */ arrayDisplay)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/taggedjs-dump/js/index.js");


const arrayDisplay = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ array, showLevels, showAll, showKids, columnNames, formatChange, toggleColumnDialog, }) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    ${array.map((item, index) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${(0,_index__WEBPACK_IMPORTED_MODULE_1__.dump)({
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

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/arrayTable.component.js":
/*!***************************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/arrayTable.component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayTable: () => (/* binding */ arrayTable)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/taggedjs-dump/js/index.js");


const arrayTable = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ array, 
// showLevels,
showAll, showKids, toggleColumnDialog, columnNames, formatChange, }) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${array.length && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${columnNames.map(key => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
                <th
                  style.cursor=${toggleColumnDialog && 'pointer'}
                  onclick=${toggleColumnDialog}
                >${key}</th>
              `.key(key))}
            </tr>
          </thead>
        `}
        <tbody>
          ${array.map(row => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
            <tr>
              ${columnNames.map(name => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
                <td>
                  ${(0,_index__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: row[name],
        showLevels: 0,
        showAll,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
    })}
                </td>
              `.key(row[name]))}
            </tr>
          `.key(row))}
        </tbody>
      </table>
    </div>
  `;
});
//# sourceMappingURL=arrayTable.component.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/arraysDisplay.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/arraysDisplay.component.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arraysDisplay: () => (/* binding */ arraysDisplay)
/* harmony export */ });
/* harmony import */ var _columnEditor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnEditor.component */ "./node_modules/taggedjs-dump/js/columnEditor.component.js");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _arrayTable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayTable.component */ "./node_modules/taggedjs-dump/js/arrayTable.component.js");
/* harmony import */ var _arrayDisplay_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrayDisplay.tag */ "./node_modules/taggedjs-dump/js/arrayDisplay.tag.js");




const arraysDisplay = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ showLevels, showAll, showKids, array, arrayView, formatChange, }) => {
    const allColumnNames = array.length ? Object.keys(array[0]) : [];
    let columnNames = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(allColumnNames)(x => [columnNames, columnNames = x]);
    let showColumnDialog = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(false)(x => [showColumnDialog, showColumnDialog = x]);
    let uniqueId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.set)('columnDialog' + performance.now());
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
    const arrayTag = arrayView === 'table' ? (0,_arrayTable_component__WEBPACK_IMPORTED_MODULE_2__.arrayTable)({
        showAll, showKids,
        array, toggleColumnDialog, columnNames,
        formatChange,
    }) : (0,_arrayDisplay_tag__WEBPACK_IMPORTED_MODULE_3__.arrayDisplay)({
        array, showLevels, showAll, showKids,
        formatChange,
        columnNames, toggleColumnDialog
    });
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
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
        return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
            <div
              style="display:flex;justify-content: space-between;flex-wrap:wrap"
              class="hover-bg-warning"
            >
              ${(0,_columnEditor_component__WEBPACK_IMPORTED_MODULE_0__.columnEditor)({
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

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/columnEditor.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/columnEditor.component.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   columnEditor: () => (/* binding */ columnEditor)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");

const columnEditor = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ name, array, included, columnNames, allColumnNames }) => {
    let mouseOverEditShow = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(false)(x => [mouseOverEditShow, mouseOverEditShow = x]);
    let edit = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(false)(x => [edit, edit = x]);
    let editFormula = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [editFormula, editFormula = x]);
    const formulas = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.set)([]);
    const filterNames = () => {
        if (included) {
            columnNames.length = 0;
            columnNames.push(...columnNames.filter(n => n !== name));
            return;
        }
        columnNames.push(name);
    };
    const goAll = () => {
        columnNames.length = 0;
        columnNames.push(...allColumnNames);
    };
    const goOnly = () => {
        columnNames.length = 0;
        columnNames.push(name);
    };
    const addSumFormula = () => {
        const stringFormula = `
      array.reduce((all, item) => {
        const value = item['${name}']
        return isNaN(value) ? all : (all + value)
      }, 0)
    `;
        formulas.push({
            title: 'sum',
            stringFormula,
            value: sandboxRunEval(stringFormula, { array })
        });
        // console.log('formulas', formulas.length)
    };
    const updateFormula = (formula, newFormula) => {
        formula.stringFormula = newFormula;
        formula.value = sandboxRunEval(newFormula, { array });
    };
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <a onclick=${filterNames} style="cursor:pointer;">
      <input type="checkbox" ${included && 'checked'} />&nbsp;${name}
    </a>

    <div
      onmouseover=${() => mouseOverEditShow = true}
      onmouseout=${() => mouseOverEditShow = false}
    >
      <a style.visibility=${(edit || mouseOverEditShow) ? 'visible' : 'hidden'}
        onclick=${() => edit = !edit}
      >⚙️&nbsp;</a>
      
      ${included && columnNames.length !== allColumnNames.length ? (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <a style="color:blue;" onclick=${goAll}><small>all</small></a>
      ` : (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <a style="color:blue;" onclick=${goOnly}><small>only</small></a>
      `}
    </div>

    ${edit && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${editFormula && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${(evt) => updateFormula(editFormula, evt.target.value)}
            >${editFormula.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${formulas.map(formula => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
                <div>
                  <div>
                    <strong>${formula.title}</strong>
                    <a onclick=${() => editFormula = formula}>✏️</a>
                  </div>
                  <div>${formula.value}</div>
                </div>
              `.key(formula))}
          </div>
          <button type="button" onclick=${addSumFormula}>sum</button>
        </div>
      </div>
    `}
  `;
});
function sandboxRunEval(stringFormula, context = {}) {
    return sandboxEval(stringFormula, { isNaN, Math, Number, Date, ...context });
}
// execute script in private context
function sandboxEval(src, ctx) {
    if (!src) {
        return src;
    }
    ctx = new Proxy(ctx, { has: () => true });
    let func = (new Function("with(this) { return (" + src + ")}"));
    return func.call(ctx);
}
//# sourceMappingURL=columnEditor.component.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/controlPanel.tag.js":
/*!***********************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/controlPanel.tag.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlPanel: () => (/* binding */ controlPanel)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _copyText_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copyText.function */ "./node_modules/taggedjs-dump/js/copyText.function.js");


const controlPanel = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ value, format, showAll, formatChange, showAllChange, }) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <style>
      dialog.dump-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.7); /* Set a semi-transparent black background */
      }

      .child-margin-xxs {margin:0.2em;}
      
      .taggedjs-dump .hover-bg-warning:hover {background-color:#fcf8e3}
      .taggedjs-dump .hover-bg-balanced:hover {background-color:#33cd5f}
      .taggedjs-dump .active-bg-energized:active {background-color:#ffc900}
      .taggedjs-dump .bg-dark {background-color:#444444}
      .taggedjs-dump .bg-balanced {background-color:#33cd5f}
    </style>
    <div style="width: 100%;line-height: 90%;">
      <div style="position:relative;">
        <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
          ${!format || format === 'flex' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
            <a
              style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (showAll ? 'background-color:#33cd5f;' : 'background-color:#444444')}
              class="hover-bg-balanced"
              onclick=${() => showAllChange(showAll = !showAll)}
              title="hide/show all sub objects"
            >👁</a>
          `}
          <a
            style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (!format || format === 'flex' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
            class="hover-bg-balanced"
            onclick=${() => formatChange(format = 'flex')}
          >flex</a>
          <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
        (format === 'json' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
            class="hover-bg-balanced"
            onclick=${() => formatChange(format = 'json')}
          >json</a>
          <a style="margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;"
            class="bg-dark hover-bg-balanced active-bg-energized"
            onclick=${() => copyAsJsonText(value)}
          >copy</a>
        </div>
      </div>
    </div>
  `;
});
function copyAsJsonText(value) {
    const text = JSON.stringify(value, null, 2);
    (0,_copyText_function__WEBPACK_IMPORTED_MODULE_1__.copyText)(text);
}
//# sourceMappingURL=controlPanel.tag.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/copyText.function.js":
/*!************************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/copyText.function.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyText: () => (/* binding */ copyText)
/* harmony export */ });
function copyText(text) {
    var copyText = document.createElement('textarea');
    copyText.value = text;
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(copyText);
}
//# sourceMappingURL=copyText.function.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/dumpArray.tag.js":
/*!********************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/dumpArray.tag.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpArray: () => (/* binding */ dumpArray)
/* harmony export */ });
/* harmony import */ var _arraysDisplay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arraysDisplay.component */ "./node_modules/taggedjs-dump/js/arraysDisplay.component.js");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");


const dumpArray = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ // dumpArray
key, value, show, showAll, showKids, 
// arrayView,
showLevels, formatChange,
// showChangeValue,
 }) => {
    let showValue = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(false)(x => [showValue, showValue = x]);
    let arrayView = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(undefined)(x => [arrayView, arrayView = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.watch)([show], ([show]) => showValue = show);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;" +
        (showValue ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
    >
      <a style="flex-grow:1" onclick=${() => {
        showValue = !showValue;
    }}>
        <strong>${key}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${arrayView === 'table' ? 'bold' : ''}
          onclick=${() => arrayView = arrayView === 'table' ? undefined : 'table'}>${arrayView === 'table' ? 'flex' : 'table'}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${value.length}]</sup>
    </div>
    
    ${(showAll || showValue || showKids || (showValue == undefined && showLevels > 0)) && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${(0,_arraysDisplay_component__WEBPACK_IMPORTED_MODULE_0__.arraysDisplay)({
        showLevels, showAll, showKids,
        formatChange,
        array: value,
        arrayView: arrayView
    })}
      </div>
    `}
  </div>
  `;
});
//# sourceMappingURL=dumpArray.tag.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/dumpObject.tag.js":
/*!*********************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/dumpObject.tag.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpObject: () => (/* binding */ dumpObject)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/taggedjs-dump/js/index.js");


const dumpObject = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ // dumpObject
key, showKids, show, showLevels, value, showAll, onHeaderClick, formatChange, }) => {
    let showLower = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(false)(x => [showLower, showLower = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.watch)([show], ([show]) => showLower = show);
    const continueDump = !key || showKids || showLower || (showLower == undefined && showLevels > 0);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${key && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
          <a
            style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;" +
        (showLower ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
            onclick=${() => {
        showLower = !showLower;
    }}
          >
            <strong>${key}</strong>
            <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
              {${Object.keys(value).length}}
            </sup>
          </a>
        `}
        
        ${continueDump && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(value).map(([key, value]) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${'padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;' +
        (!value || typeof (value) !== 'object' ? 'flex: 1 1 10em;' : 'flex-grow:1;')}
              >
                ${(0,_index__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value,
        key,
        show: showLower,
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
  `;
});
//# sourceMappingURL=dumpObject.tag.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/dumpSimple.tag.js":
/*!*********************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/dumpSimple.tag.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dumpSimple: () => (/* binding */ dumpSimple)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _copyText_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copyText.function */ "./node_modules/taggedjs-dump/js/copyText.function.js");


function dumpSimple({ key, value, onHeaderClick }) {
    const isLinkValue = value.search && (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${key && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${onHeaderClick && "pointer"}
          onclick=${onHeaderClick}
        >${key}</div>
      `}
      ${isLinkValue ? linkValue(value) : simpleValue(value)}
    </div>
  `;
}
const simpleValue = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)((value) => {
    const isLikeNull = [undefined, null, 'null'].includes(value);
    const number = value;
    const isLargeNumber = !isNaN(number) && number > 1000000000;
    const title = !isLargeNumber ? '' : getLargeNumberTitle(number);
    let downTime = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [downTime, downTime = x]);
    const startMouseDown = () => {
        downTime = Date.now();
    };
    const markMouseUp = (event) => {
        if (Date.now() - downTime > 300) {
            event.preventDefault();
            event.stopPropagation();
            console.log('xx');
            return true; // a manual drag copy is taking place
        }
        console.log('copied');
        (0,_copyText_function__WEBPACK_IMPORTED_MODULE_1__.copyText)(value); // a regular click took place
    };
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${startMouseDown}
      onmouseup=${markMouseUp}
      style="cursor:pointer;"
      style.background-color=${isLikeNull ? 'rgba(0,0,0,.5)' : ''}
      style.color = ${(value === true && '#28a54c') ||
        (value === false && '#e42112') ||
        isLikeNull && 'white' || ''}
      title=${title}
    >${value === null && 'null' || value === false && 'false' || value === undefined && 'undefined' || value}</div>
  `;
});
function getLargeNumberTitle(number) {
    return number > 946702800000 ?
        'Milliseconds > Unix epoch:\n' + (new Date(number).toLocaleString()) :
        'Seconds > Unix epoch:\n' + (new Date(number * 1000).toLocaleString());
}
const linkValue = (value) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <a onclick=${() => (0,_copyText_function__WEBPACK_IMPORTED_MODULE_1__.copyText)(value)} href=${value}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${value}</a>
  `;
};
//# sourceMappingURL=dumpSimple.tag.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/index.js":
/*!************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dump: () => (/* binding */ dump)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var _dumpArray_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dumpArray.tag */ "./node_modules/taggedjs-dump/js/dumpArray.tag.js");
/* harmony import */ var _dumpSimple_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dumpSimple.tag */ "./node_modules/taggedjs-dump/js/dumpSimple.tag.js");
/* harmony import */ var _dumpObject_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dumpObject.tag */ "./node_modules/taggedjs-dump/js/dumpObject.tag.js");
/* harmony import */ var _controlPanel_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controlPanel.tag */ "./node_modules/taggedjs-dump/js/controlPanel.tag.js");





const dump = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ // dump tag
key, value, showKids = false, showLevels = -1, showAll = false, format = 'flex', formatChange = x => format = x, isRootDump = true, onHeaderClick, }) => {
    const isObject = () => value && value instanceof Object;
    const typing = value === null ? 'null' : typeof (value);
    let show = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(false)(x => [show, show = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setProp)(x => [format, format = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setProp)(x => [showAll, showAll = x]);
    let arrayView = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [arrayView, arrayView = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.onInit)(() => {
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
                return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) ``;
            }
            return (0,_dumpSimple_tag__WEBPACK_IMPORTED_MODULE_2__.dumpSimple)({
                key: key,
                value: 'null',
                onHeaderClick
            });
        }
        const isArray = (!format || format === 'flex') && (value.push && value.pop);
        return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div class="taggedjs-dump">
        ${isRootDump && (0,_controlPanel_tag__WEBPACK_IMPORTED_MODULE_4__.controlPanel)({
            value,
            format,
            showAll,
            showAllChange: x => showAll = x,
            formatChange,
        })}
        ${(format === 'json' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
          <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
          >${JSON.stringify(value, null, 2)}</textarea>
        `) || ((isArray && (0,_dumpArray_tag__WEBPACK_IMPORTED_MODULE_1__.dumpArray)({
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
            (0,_dumpObject_tag__WEBPACK_IMPORTED_MODULE_3__.dumpObject)({
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
        return (0,_dumpSimple_tag__WEBPACK_IMPORTED_MODULE_2__.dumpSimple)({
            key: key,
            value: typing,
            onHeaderClick
        });
    }
    /* IF 2: simple value ELSE goto objectTemplate */
    if (['boolean', 'number', 'string'].includes(typing)) {
        return (0,_dumpSimple_tag__WEBPACK_IMPORTED_MODULE_2__.dumpSimple)({ key: key, value, onHeaderClick });
    }
    return objectTemplate();
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/sampleData.ts":
/*!***************************!*\
  !*** ./src/sampleData.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stripeList: () => (/* binding */ stripeList)
/* harmony export */ });
const stripeList = {
    "object": "list",
    "data": [
        {
            "id": "pi_2On6sU7HNYdnrRlv08gdQmRW",
            "object": "payment_intent",
            "amount": 210023,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": null,
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "automatic",
            "charges": {
                "object": "list",
                "data": [
                    {
                        "id": "py_2On6sU7ENs46345345",
                        "object": "charge",
                        "amount": 210023,
                        "amount_captured": 210023,
                        "amount_refunded": 0,
                        "application": null,
                        "application_fee": null,
                        "application_fee_amount": null,
                        "balance_transaction": null,
                        "billing_details": {
                            "address": {
                                "city": null,
                                "country": null,
                                "line1": null,
                                "line2": null,
                                "postal_code": null,
                                "state": null
                            },
                            "email": "nothing@yahoo.com",
                            "name": "Super One force",
                            "phone": null
                        },
                        "calculated_statement_descriptor": null,
                        "captured": true,
                        "created": 1708725963,
                        "currency": "usd",
                        "customer": "cus_",
                        "description": "stock package pack198",
                        "destination": null,
                        "dispute": null,
                        "disputed": false,
                        "failure_balance_transaction": null,
                        "failure_code": null,
                        "failure_message": null,
                        "fraud_details": {},
                        "invoice": null,
                        "livemode": true,
                        "metadata": {},
                        "on_behalf_of": null,
                        "order": null,
                        "outcome": null,
                        "paid": false,
                        "payment_intent": "pi_2On6sU234234234",
                        "payment_method": "pm_1OjSol23423423442",
                        "payment_method_details": {
                            "type": "us_bank_account",
                            "us_bank_account": {
                                "account_holder_type": "individual",
                                "account_type": "checking",
                                "bank_name": "JPMORGAN CHASE BANK, NA",
                                "fingerprint": "asdfsfsfsd",
                                "last4": "3072",
                                "routing_number": "sfsdfsdfs"
                            }
                        },
                        "radar_options": {},
                        "receipt_email": "nothing@yahoo.com",
                        "receipt_number": null,
                        "receipt_url": null,
                        "refunded": false,
                        "refunds": {
                            "object": "list",
                            "data": [],
                            "has_more": false,
                            "total_count": 0,
                            "url": "/v1/charges/py_2On6sU7ENYdn23423423423423/refunds"
                        },
                        "review": null,
                        "shipping": null,
                        "source": null,
                        "source_transfer": null,
                        "statement_descriptor": null,
                        "statement_descriptor_suffix": null,
                        "status": "pending",
                        "transfer_data": null,
                        "transfer_group": null
                    }
                ],
                "has_more": false,
                "total_count": 1,
                "url": "/v1/charges?payment_intent=pi_2On6sU7HNYdnrRlv08gdQmRW"
            },
            "client_secret": "pi_2On6sU7HNYdnrRlv08gdQmRW_secret_mi91s3ThhlbiFNYtJZkw7aeuj",
            "confirmation_method": "automatic",
            "created": 1708725958,
            "currency": "usd",
            "customer": "cus_",
            "description": "stock package pack198",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": "py_2On6sU7ENYdn23423423423423",
            "livemode": true,
            "metadata": {},
            "next_action": null,
            "on_behalf_of": null,
            "payment_method": "pm_0OjSol7ENYdnrElvxSEFqCs3",
            "payment_method_configuration_details": null,
            "payment_method_options": {
                "us_bank_account": {
                    "mandate_options": {},
                    "verification_method": "automatic"
                }
            },
            "payment_method_types": [
                "us_bank_account"
            ],
            "processing": null,
            "receipt_email": "nothing@yahoo.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "processing",
            "transfer_data": null,
            "transfer_group": null
        },
        {
            "id": "pi_2On6rP7ENY234234234223",
            "object": "pa345345345",
            "amount": 459142,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": null,
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "automatic",
            "charges": {
                "object": "list",
                "data": [
                    {
                        "id": "py_2On6rP7ENYdnrElv34534534534",
                        "object": "charge",
                        "amount": 459142,
                        "amount_captured": 459142,
                        "amount_refunded": 0,
                        "application": null,
                        "application_fee": null,
                        "application_fee_amount": null,
                        "balance_transaction": null,
                        "billing_details": {
                            "address": {
                                "city": null,
                                "country": null,
                                "line1": null,
                                "line2": null,
                                "postal_code": null,
                                "state": null
                            },
                            "email": "nothing@nothing.com",
                            "name": "high times life",
                            "phone": null
                        },
                        "calculated_statement_descriptor": null,
                        "captured": true,
                        "created": 1708725908,
                        "currency": "usd",
                        "customer": "cus_OfpNBU2342342342",
                        "description": "stock package CST422199",
                        "destination": null,
                        "dispute": null,
                        "disputed": false,
                        "failure_balance_transaction": null,
                        "failure_code": null,
                        "failure_message": null,
                        "fraud_details": {},
                        "invoice": null,
                        "livemode": true,
                        "metadata": {},
                        "on_behalf_of": null,
                        "order": null,
                        "outcome": null,
                        "paid": false,
                        "payment_intent": "pi_2On6rP7ENY234234234223",
                        "payment_method": "pm_0NsTld7E345345345",
                        "payment_method_details": {
                            "type": "us_bank_account",
                            "us_bank_account": {
                                "account_holder_type": "individual",
                                "account_type": "checking",
                                "bank_name": "LEFT RIGHT CREDIT UNION INC",
                                "fingerprint": "sdfsdfsdfsd",
                                "last4": "7164",
                                "routing_number": "24427435345634"
                            }
                        },
                        "radar_options": {},
                        "receipt_email": "nothing@nothing.com",
                        "receipt_number": null,
                        "receipt_url": null,
                        "refunded": false,
                        "refunds": {
                            "object": "list",
                            "data": [],
                            "has_more": false,
                            "total_count": 0,
                            "url": "/v1/charges/py_2On6rP7ENYdnrElv34534534534/refunds"
                        },
                        "review": null,
                        "shipping": null,
                        "source": null,
                        "source_transfer": null,
                        "statement_descriptor": null,
                        "statement_descriptor_suffix": null,
                        "status": "pending",
                        "transfer_data": null,
                        "transfer_group": null
                    }
                ],
                "has_more": false,
                "total_count": 1,
                "url": "/v1/charges?payment_intent=pi_2On6rP7ENY23423345345345",
                "client_secret": "pi_2On6rP7ENY234234234223_secret_coB4G9HHl1eq5B17Q2C8CSvIr"
            },
            "confirmation_method": 345345345,
            "created": 1708725891,
            "currency": "usd",
            "customer": "cus_OfpNBU2342342342",
            "description": "stock package CST422199",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": "py_2On6rP7ENYdnrElv34534534534",
            "livemode": true,
            "metadata": {},
            "next_action": null,
            "on_behalf_of": null,
            "payment_method": "pm_0NsTld7ENYdnrElvZnMTXy4p",
            "payment_method_configuration_details": null,
            "payment_method_options": {
                "us_bank_account": {
                    "mandate_options": {},
                    "verification_method": "automatic"
                }
            },
            "payment_method_types": [
                "us_bank_account"
            ],
            "processing": null,
            "receipt_email": "nothing@nothing.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "processing",
            "transfer_data": null,
            "transfer_group": null
        },
        {
            "id": "pi_2On6qz7ENYdnrElv0iAjkQXG",
            "object": "payment_intent",
            "amount": 353001,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": null,
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "automatic",
            "charges": {
                "object": "list",
                "data": [
                    {
                        "id": "py_2On6qz7ENYdnrElv03EQXijt",
                        "object": "charge",
                        "amount": 353001,
                        "amount_captured": 353001,
                        "amount_refunded": 0,
                        "application": null,
                        "application_fee": null,
                        "application_fee_amount": null,
                        "balance_transaction": null,
                        "billing_details": {
                            "address": {
                                "city": null,
                                "country": null,
                                "line1": null,
                                "line2": null,
                                "postal_code": null,
                                "state": null
                            },
                            "email": "goonta1621@gmail.com",
                            "name": "Imodern LLC",
                            "phone": null
                        },
                        "calculated_statement_descriptor": null,
                        "captured": true,
                        "created": 1708725871,
                        "currency": "usd",
                        "customer": "cus_OPju332LNrDqWj",
                        "description": "stock package CST422875",
                        "destination": null,
                        "dispute": null,
                        "disputed": false,
                        "failure_balance_transaction": null,
                        "failure_code": null,
                        "failure_message": null,
                        "fraud_details": {},
                        "invoice": null,
                        "livemode": true,
                        "metadata": {
                            "fullOrderId": "CST422875",
                            "orderId": "422875"
                        },
                        "on_behalf_of": null,
                        "order": null,
                        "outcome": null,
                        "paid": false,
                        "payment_intent": "pi_2On6qz7ENYdnrElv0iAjkQXG",
                        "payment_method": "pm_0Ojnzp7ENYdnrElvehXEBmJk",
                        "payment_method_details": {
                            "type": "us_bank_account",
                            "us_bank_account": {
                                "account_holder_type": "individual",
                                "account_type": "checking",
                                "bank_name": "BANK OF AMERICA, N.A.",
                                "fingerprint": "NLhg8mD0tp0uM97N",
                                "last4": "2606",
                                "routing_number": "011200365"
                            }
                        },
                        "radar_options": {},
                        "receipt_email": "goonta1621@gmail.com",
                        "receipt_number": null,
                        "receipt_url": null,
                        "refunded": false,
                        "refunds": {
                            "object": "list",
                            "data": [],
                            "has_more": false,
                            "total_count": 0,
                            "url": "/v1/charges/py_2On6qz7ENYdnrElv03EQXijt/refunds"
                        },
                        "review": null,
                        "shipping": null,
                        "source": null,
                        "source_transfer": null,
                        "statement_descriptor": null,
                        "statement_descriptor_suffix": null,
                        "status": "pending",
                        "transfer_data": null,
                        "transfer_group": null
                    }
                ],
                "has_more": false,
                "total_count": 1,
                "url": "/v1/charges?payment_intent=pi_2On6qz7ENYdnrElv0iAjkQXG"
            },
            "client_secret": "pi_2On6qz7ENYdnrElv0iAjkQXG_secret_HJlGWDupUqDO2L0BrjfHuRLC2",
            "confirmation_method": "automatic",
            "created": 1708725865,
            "currency": "usd",
            "customer": "cus_OPju332LNrDqWj",
            "description": "stock package CST422875",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": "py_2On6qz7ENYdnrElv03EQXijt",
            "livemode": true,
            "metadata": {
                "fullOrderId": "CST422875",
                "orderId": "422875"
            },
            "next_action": null,
            "on_behalf_of": null,
            "payment_method": "pm_0Ojnzp7ENYdnrElvehXEBmJk",
            "payment_method_configuration_details": null,
            "payment_method_options": {
                "us_bank_account": {
                    "mandate_options": {},
                    "verification_method": "automatic"
                }
            },
            "payment_method_types": [
                "us_bank_account"
            ],
            "processing": null,
            "receipt_email": "goonta1621@gmail.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "processing",
            "transfer_data": null,
            "transfer_group": null
        }
    ],
    "has_more": true,
    "url": "/v1/payment_intents"
};


/***/ }),

/***/ "../../taggedjs/main/ts/ElementTargetEvent.interface.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/ElementTargetEvent.interface.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../taggedjs/main/ts/Tag.class.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/Tag.class.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   escapeSearch: () => (/* binding */ escapeSearch),
/* harmony export */   escapeVariable: () => (/* binding */ escapeVariable),
/* harmony export */   variablePrefix: () => (/* binding */ variablePrefix)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "../../taggedjs/main/ts/render.ts");
/* harmony import */ var _interpolateElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolateElement */ "../../taggedjs/main/ts/interpolateElement.ts");
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolateTemplate */ "../../taggedjs/main/ts/interpolateTemplate.ts");
/* harmony import */ var _elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementDestroyCheck.function */ "../../taggedjs/main/ts/elementDestroyCheck.function.ts");
/* harmony import */ var _processNewValue_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processNewValue.function */ "../../taggedjs/main/ts/processNewValue.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");









const variablePrefix = '__tagvar';
const escapeVariable = '--' + variablePrefix + '--';
const prefixSearch = new RegExp(variablePrefix, 'g');
const escapeSearch = new RegExp(escapeVariable, 'g');
class Tag {
    strings;
    values;
    version = 0;
    isTag = true;
    hasLiveElements = false;
    clones = []; // elements on document. Needed at destroy process to know what to destroy
    childTags = []; // tags on me
    tagSupport;
    lastTemplateString = undefined; // used to compare templates for updates
    // only present when a child of a tag
    ownerTag;
    // insertBefore?: Element
    appElement; // only seen on this.getAppElement().appElement
    // present only when an array. Populated by Tag.key()
    memory = {};
    constructor(strings, values) {
        this.strings = strings;
        this.values = values;
    }
    /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
    key(arrayValue) {
        this.memory.arrayValue = arrayValue;
        return this;
    }
    destroy(options = {
        stagger: 0,
        byParent: false, // Only destroy clones of direct children
    }) {
        if (!this.hasLiveElements) {
            throw new Error('destroying wrong tag');
        }
        const tagSupport = this.tagSupport;
        const global = tagSupport.templater.global;
        // removing is considered rendering. Prevents after event processing of this tag even tho possibly deleted
        // ++this.tagSupport.templater.global.renderCount
        const subject = tagSupport.subject;
        // put back down the template tag
        const insertBefore = global.insertBefore;
        if (insertBefore.nodeName === 'TEMPLATE') {
            const placeholder = global.placeholder;
            if (placeholder && !('arrayValue' in this.memory)) {
                if (!options.byParent) {
                    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_8__.restoreTagMarker)(this, insertBefore);
                }
            }
        }
        delete global.placeholder;
        // the isComponent check maybe able to be removed
        const isComponent = tagSupport ? true : false;
        if (isComponent) {
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeDestroy)(tagSupport, this);
        }
        const childTags = options.byParent ? [] : getChildTagsToDestroy(this.childTags);
        // signify that no further event rendering should take place by making logic think a render occurred during event
        // signify immediately child has been deleted (looked for during event processing)
        childTags.forEach(child => {
            const subGlobal = child.tagSupport.templater.global;
            delete subGlobal.newest;
            subGlobal.deleted = true;
        });
        delete global.oldest;
        delete global.newest;
        global.deleted = true;
        this.hasLiveElements = false;
        delete subject.tag;
        this.destroySubscriptions();
        let mainPromise;
        if (this.ownerTag) {
            this.ownerTag.childTags = this.ownerTag.childTags.filter(child => child !== this);
        }
        if (!options.byParent) {
            const { stagger, promise } = this.destroyClones(options);
            options.stagger = stagger;
            if (promise) {
                mainPromise = promise;
            }
        }
        else {
            this.destroyClones();
        }
        if (mainPromise) {
            mainPromise = mainPromise.then(async () => {
                const promises = childTags.map(kid => kid.destroy({ stagger: 0, byParent: true }));
                return Promise.all(promises);
            });
        }
        else {
            mainPromise = Promise.all(childTags.map(kid => kid.destroy({ stagger: 0, byParent: true })));
        }
        return mainPromise.then(() => options.stagger);
    }
    destroySubscriptions() {
        const global = this.tagSupport.templater.global;
        global.subscriptions.forEach(cloneSub => cloneSub.unsubscribe());
        global.subscriptions.length = 0;
    }
    destroyClones({ stagger } = {
        stagger: 0,
    }) {
        //const promises = this.clones.reverse().map(
        const promises = this.clones.map(clone => this.checkCloneRemoval(clone, stagger)).filter(x => x); // only return promises
        this.clones.length = 0; // tag maybe used for something else
        if (promises.length) {
            return { promise: Promise.all(promises), stagger };
        }
        return { stagger };
    }
    /** Reviews elements for the presences of ondestroy */
    checkCloneRemoval(clone, stagger) {
        let promise;
        const customElm = clone;
        if (customElm.ondestroy) {
            promise = (0,_elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_4__.elementDestroyCheck)(customElm, stagger);
        }
        const next = () => {
            clone.parentNode?.removeChild(clone);
            const ownerTag = this.ownerTag;
            if (ownerTag) {
                // Sometimes my clones were first registered to my owner, remove them from owner
                ownerTag.clones = ownerTag.clones.filter(compareClone => compareClone !== clone);
            }
        };
        if (promise instanceof Promise) {
            return promise.then(next);
        }
        else {
            next();
        }
        return promise;
    }
    getTemplate() {
        const string = this.strings.map((string, index) => {
            const safeString = string.replace(prefixSearch, escapeVariable);
            const endString = safeString + (this.values.length > index ? `{${variablePrefix}${index}}` : '');
            // const trimString = index === 0 || index === this.strings.length-1 ? endString.trim() : endString
            const trimString = endString.replace(/>\s*/g, '>').replace(/\s*</g, '<');
            return trimString;
        }).join('');
        const interpolation = (0,_interpolateElement__WEBPACK_IMPORTED_MODULE_2__.interpolateString)(string);
        this.lastTemplateString = interpolation.string;
        return {
            interpolation,
            // string,
            string: interpolation.string,
            strings: this.strings,
            values: this.values,
            context: this.tagSupport.templater.global.context || {},
        };
    }
    isLikeTag(tag) {
        return (0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_7__.isLikeTags)(this, tag);
    }
    updateByTag(tag) {
        if (!this.tagSupport.templater.global.oldest) {
            throw new Error('no oldest here');
        }
        if (!this.hasLiveElements) {
            throw new Error('trying to update a tag with no elements on stage');
        }
        this.tagSupport.templater.global.newest = tag;
        if (!this.tagSupport.templater.global.context) {
            throw new Error('issue back here');
        }
        this.updateConfig(tag.strings, tag.values);
    }
    updateConfig(strings, values) {
        this.strings = strings;
        this.updateValues(values);
    }
    update() {
        return this.updateContext(this.tagSupport.templater.global.context);
    }
    updateValues(values) {
        this.values = values;
        return this.updateContext(this.tagSupport.templater.global.context);
    }
    updateContext(context) {
        this.strings.map((_string, index) => {
            const variableName = variablePrefix + index;
            const hasValue = this.values.length > index;
            const value = this.values[index];
            // is something already there?
            const exists = variableName in context;
            if (exists) {
                return updateContextItem(context, variableName, value);
            }
            if (!hasValue) {
                return;
            }
            // 🆕 First time values below
            context[variableName] = (0,_processNewValue_function__WEBPACK_IMPORTED_MODULE_5__.processNewValue)(hasValue, value, this);
        });
        return context;
    }
    getAppElement() {
        let tag = this;
        while (tag.ownerTag) {
            tag = tag.ownerTag;
        }
        return tag;
    }
    /** Used during HMR only where static content itself could have been edited */
    rebuild() {
        // const insertBefore = this.insertBefore
        const insertBefore = this.tagSupport.templater.global.insertBefore;
        if (!insertBefore) {
            const err = new Error('Cannot rebuild. Previous insertBefore element is not defined on tag');
            err.tag = this;
            throw err;
        }
        this.buildBeforeElement(insertBefore, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
    }
    buildBeforeElement(insertBefore, options = {
        forceElement: false,
        counts: { added: 0, removed: 0 },
    }) {
        const subject = this.tagSupport.subject;
        const thisTemplater = this.tagSupport.templater;
        const global = thisTemplater.global;
        global.insertBefore = insertBefore;
        if (!global.placeholder) {
            if (insertBefore.nodeName !== 'TEMPLATE') {
                throw new Error(' no template at insertBefore');
                global.placeholder = insertBefore;
            }
            else {
                setTagPlaceholder(global);
            }
        }
        if (!global.placeholder?.parentNode) {
            throw new Error('????');
        }
        const placeholderElm = global.placeholder;
        global.oldest = this;
        global.newest = this;
        subject.tag = this;
        this.hasLiveElements = true;
        // remove old clones
        if (this.clones.length) {
            this.clones.forEach(clone => this.checkCloneRemoval(clone, 0));
        }
        global.insertBefore = insertBefore;
        // const context = this.tagSupport.memory.context // this.update()
        const context = this.update();
        const template = this.getTemplate();
        if (!placeholderElm.parentNode) {
            throw new Error('no parent before building tag');
        }
        const elementContainer = document.createElement('div');
        elementContainer.id = 'tag-temp-holder';
        // render content with a first child that we can know is our first element
        elementContainer.innerHTML = `<template id="temp-template-tag-wrap">${template.string}</template>`;
        // Search/replace innerHTML variables but don't interpolate tag components just yet
        const { tagComponents } = (0,_interpolateElement__WEBPACK_IMPORTED_MODULE_2__.interpolateElement)(elementContainer, context, template, this, // ownerTag,
        {
            forceElement: options.forceElement,
            counts: options.counts
        });
        if (!placeholderElm.parentNode) {
            throw new Error('no parent after building tag');
        }
        afterInterpolateElement(elementContainer, placeholderElm, this, // ownerTag
        context, options);
        if (!global.placeholder?.parentNode) {
            throw new Error('???? - 2');
        }
        // Any tag components that were found should be processed AFTER the owner processes its elements. Avoid double processing of elements attributes like (oninit)=${}
        let isForceElement = options.forceElement;
        tagComponents.forEach(tagComponent => {
            const tagSupport = tagComponent.ownerTag.tagSupport;
            const tagGlobal = tagSupport.templater.global;
            const placeholderElm = tagGlobal.placeholder; // global.placeholderElm
            if (!placeholderElm && !insertBefore.parentNode) {
                throw new Error('no parent building tag components');
            }
            if (!global.placeholder?.parentNode) {
                throw new Error('???? - 3');
            }
            (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__.subscribeToTemplate)(tagComponent.insertBefore, tagComponent.subject, tagComponent.ownerTag, options.counts, { isForceElement });
            if (!global.placeholder?.parentNode) {
                throw new Error('???? - 4');
            }
            afterInterpolateElement(elementContainer, tagComponent.insertBefore, tagComponent.ownerTag, // this, // ownerTag
            context, options);
            if (!global.placeholder?.parentNode) {
                throw new Error('???? - 5');
            }
        });
    }
}
function setTagPlaceholder(global) {
    const insertBefore = global.insertBefore;
    const placeholder = global.placeholder = document.createTextNode('');
    const parentNode = insertBefore.parentNode;
    parentNode.insertBefore(placeholder, insertBefore);
    parentNode.removeChild(insertBefore);
}
function afterInterpolateElement(container, insertBefore, tag, 
// preClones: Clones,
context, options) {
    const clones = (0,_render__WEBPACK_IMPORTED_MODULE_1__.buildClones)(container, insertBefore);
    if (!clones.length) {
        return clones;
    }
    clones.forEach(clone => (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__.afterElmBuild)(clone, options, context, tag));
    tag.clones.push(...clones);
    return clones;
}
function getChildTagsToDestroy(childTags, allTags = []) {
    for (let index = childTags.length - 1; index >= 0; --index) {
        const cTag = childTags[index];
        if (allTags.find(x => x === cTag)) {
            // TODO: Lets find why a child tag is attached twice to owner
            throw new Error('child tag registered twice for delete');
        }
        allTags.push(cTag);
        childTags.splice(index, 1);
        getChildTagsToDestroy(cTag.childTags, allTags);
    }
    return allTags;
}
function updateContextItem(context, variableName, value) {
    const subject = context[variableName];
    const tag = subject.tag;
    if (tag) {
        const oldTemp = tag.tagSupport.templater;
        if (value && value.global !== oldTemp.global) {
            if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_6__.isTagComponent)(value)) {
                shareTemplaterGlobal(oldTemp, value);
            }
        }
    }
    // return updateExistingValue(subject, value, this)
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_6__.isSubjectInstance)(value)) {
        return;
    }
    subject.set(value); // listeners will evaluate updated values to possibly update display(s)
    return;
}
function shareTemplaterGlobal(oldTemp, value) {
    const oldWrap = oldTemp.wrapper; // tag versus component
    const oldValueFn = oldWrap.original;
    const newValueFn = value.wrapper?.original;
    const fnMatched = oldValueFn === newValueFn;
    if (fnMatched) {
        value.global = oldTemp.global;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/TagSupport.class.ts":
/*!**************************************************!*\
  !*** ../../taggedjs/main/ts/TagSupport.class.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTagSupport: () => (/* binding */ BaseTagSupport),
/* harmony export */   TagSupport: () => (/* binding */ TagSupport)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");


class BaseTagSupport {
    templater;
    subject;
    isApp = true;
    propsConfig;
    memory = {
        // context: {}, // populated after reading interpolated.values array converted to an object {variable0, variable:1}
        state: {
            newest: [],
        },
    };
    constructor(templater, subject) {
        this.templater = templater;
        this.subject = subject;
        const children = this.templater.children; // children tags passed in as arguments
        const props = this.templater.props; // natural props
        const latestCloned = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(props); // alterProps(props, templater)
        this.propsConfig = {
            latest: props,
            latestCloned, // assume its HTML children and then detect
            clonedProps: latestCloned, // maybe duplicate
            lastClonedKidValues: children.value.map(kid => {
                const cloneValues = cloneValueArray(kid.values);
                return cloneValues;
            })
        };
        // if the latest props are not HTML children, then clone the props for later render cycles to compare
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(props)) {
            this.propsConfig.latestCloned = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(latestCloned);
            this.propsConfig.clonedProps = this.propsConfig.latestCloned;
        }
    }
}
function cloneValueArray(values) {
    return values.map((value) => {
        const tag = value;
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(tag)) {
            return cloneValueArray(tag.values);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(tag)) {
            const tagComponent = tag;
            return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(tagComponent.props);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(tag)) {
            return cloneValueArray(tag);
        }
        return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(value);
    });
}
class TagSupport extends BaseTagSupport {
    ownerTagSupport;
    templater;
    subject;
    isApp = false;
    constructor(ownerTagSupport, templater, subject) {
        super(templater, subject);
        this.ownerTagSupport = ownerTagSupport;
        this.templater = templater;
        this.subject = subject;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/TemplaterResult.class.ts":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/ts/TemplaterResult.class.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplaterResult: () => (/* binding */ TemplaterResult),
/* harmony export */   renderWithSupport: () => (/* binding */ renderWithSupport)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _destroyTag_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destroyTag.function */ "../../taggedjs/main/ts/destroyTag.function.ts");




class TemplaterResult {
    props;
    children;
    isTag = false; // when true, is basic tag non-component
    tagged;
    wrapper;
    global = {
        newestTemplater: this,
        context: {}, // populated after reading interpolated.values array converted to an object {variable0, variable:1}
        providers: [],
        /** Indicator of re-rending. Saves from double rending something already rendered */
        renderCount: 0,
        deleted: false,
        subscriptions: []
    };
    tagSupport;
    constructor(props, children) {
        this.props = props;
        this.children = children;
    }
    /*
    redraw?: (
      force?: boolean, // force children to redraw
    ) => Tag
    */
    isTemplater = true;
}
function renderWithSupport(tagSupport, existingTag, subject, ownerTag) {
    const wrapTagSupport = tagSupport; // this.tagSupport
    /* BEFORE RENDER */
    const runtimeOwnerTag = existingTag?.ownerTag || ownerTag;
    if (existingTag) {
        wrapTagSupport.memory.state.newest = [...existingTag.tagSupport.memory.state.newest];
        wrapTagSupport.templater.global = existingTag.tagSupport.templater.global;
        (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRedraw)(wrapTagSupport, existingTag);
    }
    else {
        if (!wrapTagSupport) {
            throw new Error('63521');
        }
        // first time render
        (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRender)(wrapTagSupport, runtimeOwnerTag);
        // TODO: Logic below most likely could live within providers.ts inside the runBeforeRender function
        const providers = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        providers.ownerTag = runtimeOwnerTag;
    }
    /* END: BEFORE RENDER */
    const templater = wrapTagSupport.templater;
    // NEW TAG CREATED HERE
    const retag = templater.wrapper(wrapTagSupport, subject);
    /* AFTER */
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runAfterRender)(wrapTagSupport, retag);
    const isLikeTag = !existingTag || (0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_2__.isLikeTags)(existingTag, retag);
    if (!isLikeTag) {
        destroyUnlikeTags(existingTag, templater, subject);
    }
    retag.ownerTag = runtimeOwnerTag;
    wrapTagSupport.templater.global.newest = retag;
    return retag;
}
function destroyUnlikeTags(existingTag, // old
templater, // new
subject) {
    const oldGlobal = existingTag.tagSupport.templater.global;
    const insertBefore = oldGlobal.insertBefore;
    (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_3__.destroyTagMemory)(existingTag, subject);
    // ??? - new so that when a tag is destroy the unlike does not carry the destroy signifier
    templater.global = { ...templater.global }; // break memory references
    const global = templater.global;
    global.insertBefore = insertBefore;
    global.deleted = false;
    delete global.oldest;
    delete global.newest;
    delete subject.tag;
}


/***/ }),

/***/ "../../taggedjs/main/ts/alterProps.function.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/alterProps.function.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alterProps: () => (/* binding */ alterProps),
/* harmony export */   callbackPropOwner: () => (/* binding */ callbackPropOwner)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");


/* Used to rewrite props that are functions. When they are called it should cause parent rendering */
function alterProps(props, templater, ownerSupport) {
    function callback(toCall, callWith) {
        return callbackPropOwner(toCall, callWith, templater, ownerSupport);
    }
    const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(props);
    const watchProps = isPropTag ? 0 : props;
    const newProps = resetFunctionProps(watchProps, callback);
    return newProps;
}
function resetFunctionProps(props, callback) {
    if (typeof (props) !== 'object') {
        return props;
    }
    const newProps = props;
    // BELOW: Do not clone because if first argument is object, the memory ref back is lost
    // const newProps = {...props} 
    Object.entries(newProps).forEach(([name, value]) => {
        if (value instanceof Function) {
            const original = newProps[name].original;
            if (original) {
                return; // already previously converted
            }
            newProps[name] = (...args) => {
                return newProps[name].toCall(...args); // what gets called can switch over parent state changes
            };
            // Currently, call self but over parent state changes, I may need to call a newer parent tag owner
            newProps[name].toCall = (...args) => callback(value, args);
            newProps[name].original = value;
            return;
        }
    });
    return newProps;
}
function callbackPropOwner(toCall, callWith, templater, // only used to prevent rendering double
ownerSupport) {
    const renderCount = templater.global.renderCount;
    const callbackResult = toCall(...callWith);
    if (templater.global.renderCount > renderCount) {
        throw new Error('already rendered');
    }
    const lastestOwner = ownerSupport.templater.global.newest;
    const newOwner = (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_1__.renderTagSupport)(lastestOwner.tagSupport, true);
    if (newOwner.tagSupport.templater.global.newest != newOwner) {
        throw new Error('newest assignment issue?');
    }
    return callbackResult;
}


/***/ }),

/***/ "../../taggedjs/main/ts/bindSubjectCallback.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/bindSubjectCallback.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindSubjectCallback: () => (/* binding */ bindSubjectCallback),
/* harmony export */   runTagCallback: () => (/* binding */ runTagCallback)
/* harmony export */ });
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");
/** File largely responsible for reacting to element events, such as onclick */

function bindSubjectCallback(value, tag) {
    // Is this children? No override needed
    if (value.isChildOverride) {
        return value;
    }
    if (!tag.ownerTag && !tag.tagSupport.templater.global.isApp) {
        throw new Error('no ownerTag issue here');
    }
    const subjectFunction = (element, args) => runTagCallback(value, tag, element, args);
    // link back to original. Mostly used for <div oninit ondestroy> animations
    subjectFunction.tagFunction = value;
    return subjectFunction;
}
function runTagCallback(value, tag, bindTo, args) {
    const tagSupport = tag.tagSupport;
    const renderCount = tagSupport.templater.global.renderCount;
    const method = value.bind(bindTo);
    const callbackResult = method(...args);
    const sameRenderCount = renderCount === tagSupport.templater.global.renderCount;
    // already rendered OR tag was deleted before event processing
    if (!sameRenderCount || tagSupport.templater.global.deleted) {
        if (callbackResult instanceof Promise) {
            return callbackResult.then(() => {
                return 'promise-no-data-ever'; // tag was deleted during event processing
            });
        }
        return 'no-data-ever'; // already rendered
    }
    (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_0__.renderTagSupport)(tagSupport, true);
    if (callbackResult instanceof Promise) {
        return callbackResult.then(() => {
            if (tagSupport.templater.global.deleted) {
                return 'promise-no-data-ever'; // tag was deleted during event processing
            }
            (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_0__.renderTagSupport)(tagSupport, true);
            return 'promise-no-data-ever';
        });
    }
    // Caller always expects a Promise
    return 'no-data-ever';
}


/***/ }),

/***/ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/checkDestroyPrevious.function.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDestroyPrevious: () => (/* binding */ checkDestroyPrevious),
/* harmony export */   destroyArrayTag: () => (/* binding */ destroyArrayTag),
/* harmony export */   restoreTagMarker: () => (/* binding */ restoreTagMarker)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _destroyTag_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destroyTag.function */ "../../taggedjs/main/ts/destroyTag.function.ts");
/* harmony import */ var _insertAfter_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertAfter.function */ "../../taggedjs/main/ts/insertAfter.function.ts");




function checkDestroyPrevious(subject, // existing.value is the old value
newValue, insertBefore) {
    const arraySubject = subject;
    const wasArray = arraySubject.lastArray;
    // no longer an array
    if (wasArray && !(0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(newValue)) {
        const placeholderElm = arraySubject.placeholder;
        delete arraySubject.lastArray;
        delete arraySubject.placeholder;
        (0,_insertAfter_function__WEBPACK_IMPORTED_MODULE_3__.insertAfter)(insertBefore, placeholderElm);
        wasArray.forEach(({ tag }) => destroyArrayTag(tag, { added: 0, removed: 0 }));
        return 'array';
    }
    const tagSubject = subject;
    const existingTag = tagSubject.tag;
    // no longer tag or component?
    if (existingTag) {
        const isValueTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(newValue);
        const isSubjectTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(subject.value);
        if (isSubjectTag && isValueTag) {
            const newTag = newValue;
            // its a different tag now
            if (!(0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__.isLikeTags)(newTag, existingTag)) {
                // put template back down
                restoreTagMarker(existingTag, insertBefore);
                (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(existingTag, tagSubject);
                return 2;
            }
            return false;
        }
        const isValueTagComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(newValue);
        if (isValueTagComponent) {
            return false; // its still a tag component
        }
        // put template back down
        restoreTagMarker(existingTag, insertBefore);
        // destroy old component, value is not a component
        (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(existingTag, tagSubject);
        return 'different-tag';
    }
    const displaySubject = subject;
    const hasLastValue = 'lastValue' in displaySubject;
    const lastValue = displaySubject.lastValue; // TODO: we maybe able to use displaySubject.value and remove concept of lastValue
    // was simple value but now something bigger
    if (hasLastValue && lastValue !== newValue) {
        destroySimpleValue(insertBefore, displaySubject);
        return 4;
    }
    return false;
}
function destroyArrayTag(tag, counts) {
    (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagSupportPast)(tag.tagSupport);
    tag.destroy({
        stagger: counts.removed++,
    });
}
function destroySimpleValue(insertBefore, // always a template tag
subject) {
    const clone = subject.clone;
    const parent = clone.parentNode;
    // 1 put the template back down
    parent.insertBefore(insertBefore, clone);
    parent.removeChild(clone);
    delete subject.clone;
    delete subject.lastValue;
}
function restoreTagMarker(existingTag, insertBefore) {
    const global = existingTag.tagSupport.templater.global;
    const placeholderElm = global.placeholder;
    if (placeholderElm) {
        (0,_insertAfter_function__WEBPACK_IMPORTED_MODULE_3__.insertAfter)(insertBefore, placeholderElm);
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/deepFunctions.ts":
/*!***********************************************!*\
  !*** ../../taggedjs/main/ts/deepFunctions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepClone: () => (/* binding */ deepClone),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual)
/* harmony export */ });
function deepClone(obj) {
    return makeDeepClone(obj, new WeakMap());
}
function makeDeepClone(obj, visited) {
    // If obj is a primitive type or null, return it directly
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    // Handle special cases like Date and RegExp
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // Create an empty object or array with the same prototype
    const clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    // Register the cloned object to avoid cyclic references
    visited.set(obj, clone);
    // Clone each property or element of the object or array
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            clone[i] = makeDeepClone(obj[i], visited);
        }
    }
    else {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = makeDeepClone(obj[key], visited);
            }
        }
    }
    return clone;
}
function deepEqual(obj1, obj2) {
    return isDeepEqual(obj1, obj2, new WeakMap());
}
function isDeepEqual(obj1, obj2, visited) {
    if (obj1 === obj2 || isSameFunctions(obj1, obj2)) {
        return true;
    }
    if (typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 === null ||
        obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj1)) {
        return true;
    }
    // Register the cloned object to avoid cyclic references
    visited.set(obj1, 0);
    for (const key of keys1) {
        const keyFound = keys2.includes(key);
        if (!keyFound || !isDeepEqual(obj1[key], obj2[key], visited)) {
            /*
            if(isSameFunctions(obj1[key], obj2[key])) {
              continue
            }
            */
            return false;
        }
    }
    // Check if obj1 and obj2 are both arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!isDeepEqual(obj1[i], obj2[i], visited)) {
                return false;
            }
        }
    }
    else if (Array.isArray(obj1) || Array.isArray(obj2)) {
        // One is an array, and the other is not
        return false;
    }
    return true;
}
function isSameFunctions(fn0, fn1) {
    const bothFunction = fn0 instanceof Function && fn1 instanceof Function;
    return bothFunction && fn0.toString() === fn1.toString();
}


/***/ }),

/***/ "../../taggedjs/main/ts/destroyTag.function.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/destroyTag.function.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyTagMemory: () => (/* binding */ destroyTagMemory),
/* harmony export */   destroyTagSupportPast: () => (/* binding */ destroyTagSupportPast)
/* harmony export */ });
function destroyTagMemory(tag, subject) {
    const oldTagSupport = tag.tagSupport;
    if (subject != oldTagSupport.subject) {
        throw new Error('fff - subjects do not match');
    }
    delete subject.tag;
    delete oldTagSupport.subject.tag; // TODO: this line maybe not needed
    // must destroy oldest which is tag with elements on stage
    const oldest = oldTagSupport.templater.global.oldest;
    oldest.destroy();
    destroyTagSupportPast(oldTagSupport);
    oldTagSupport.templater.global.context = {};
}
function destroyTagSupportPast(oldTagSupport) {
    delete oldTagSupport.templater.global.oldest;
    delete oldTagSupport.templater.global.newest;
}


/***/ }),

/***/ "../../taggedjs/main/ts/elementDestroyCheck.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/elementDestroyCheck.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementDestroyCheck: () => (/* binding */ elementDestroyCheck)
/* harmony export */ });
function elementDestroyCheck(nextSibling, stagger) {
    const onDestroyDoubleWrap = nextSibling.ondestroy;
    if (!onDestroyDoubleWrap) {
        return;
    }
    const onDestroyWrap = onDestroyDoubleWrap.tagFunction;
    if (!onDestroyWrap) {
        return;
    }
    const onDestroy = onDestroyWrap.tagFunction;
    if (!onDestroy) {
        return;
    }
    const event = { target: nextSibling, stagger };
    return onDestroy(event);
}


/***/ }),

/***/ "../../taggedjs/main/ts/elementInitCheck.ts":
/*!**************************************************!*\
  !*** ../../taggedjs/main/ts/elementInitCheck.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementInitCheck: () => (/* binding */ elementInitCheck)
/* harmony export */ });
function elementInitCheck(nextSibling, counts) {
    const onInitDoubleWrap = nextSibling.oninit;
    if (!onInitDoubleWrap) {
        return counts.added;
    }
    const onInitWrap = onInitDoubleWrap.tagFunction;
    if (!onInitWrap) {
        return counts.added;
    }
    const onInit = onInitWrap.tagFunction;
    if (!onInit) {
        return counts.added;
    }
    const event = { target: nextSibling, stagger: counts.added };
    onInit(event);
    return ++counts.added;
}


/***/ }),

/***/ "../../taggedjs/main/ts/errors.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/errors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* binding */ ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* binding */ StateMismatchError),
/* harmony export */   TagError: () => (/* binding */ TagError)
/* harmony export */ });
class TagError extends Error {
    details;
    constructor(message, errorCode, details = {}) {
        super(message);
        this.name = TagError.name;
        this.details = { ...details, errorCode };
    }
}
class ArrayNoKeyError extends TagError {
    constructor(message, details) {
        super(message, 'array-no-key-error', details);
        this.name = ArrayNoKeyError.name;
    }
}
class StateMismatchError extends TagError {
    constructor(message, details) {
        super(message, 'state-mismatch-error', details);
        this.name = StateMismatchError.name;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/getCallback.ts":
/*!*********************************************!*\
  !*** ../../taggedjs/main/ts/getCallback.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCallback: () => (/* binding */ getCallback)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");



let innerCallback = (callback) => () => {
    throw new Error('Callback function was called immediately in sync and must instead be call async');
};
const getCallback = () => innerCallback;
const originalGetter = innerCallback; // getCallback
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: (tagSupport) => initMemory(tagSupport),
    beforeRedraw: (tagSupport) => initMemory(tagSupport),
    afterRender: (_tagSupport) => {
        innerCallback = originalGetter; // prevent crossing callbacks with another tag
    },
});
function updateState(stateFrom, stateTo) {
    stateFrom.forEach((state, index) => {
        const fromValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(state);
        const callback = stateTo[index].callback;
        if (callback) {
            callback(fromValue); // set the value
        }
        stateTo[index].lastValue = fromValue; // record the value
    });
}
function initMemory(tagSupport) {
    const oldState = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.stateConfig.array;
    innerCallback = (callback) => {
        const trigger = (...args) => triggerStateUpdate(tagSupport, callback, oldState, ...args);
        return trigger;
    };
}
function triggerStateUpdate(tagSupport, callback, oldState, ...args) {
    const state = tagSupport.memory.state;
    const newest = state.newest;
    // ensure that the oldest has the latest values first
    updateState(newest, oldState);
    // run the callback
    const promise = callback(...args);
    // send the oldest state changes into the newest
    updateState(oldState, newest);
    (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__.renderTagSupport)(tagSupport, false);
    if (promise instanceof Promise) {
        promise.finally(() => {
            // send the oldest state changes into the newest
            updateState(oldState, newest);
            (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__.renderTagSupport)(tagSupport, false);
        });
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/hasTagSupportChanged.function.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/hasTagSupportChanged.function.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasKidsChanged: () => (/* binding */ hasKidsChanged),
/* harmony export */   hasPropChanges: () => (/* binding */ hasPropChanges),
/* harmony export */   hasTagSupportChanged: () => (/* binding */ hasTagSupportChanged)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");

function hasTagSupportChanged(oldTagSupport, newTagSupport, newTemplater) {
    const sameSupport = oldTagSupport === newTagSupport;
    const samePropConfig = oldTagSupport.propsConfig === newTagSupport.propsConfig;
    // const sameProps = oldTagSupport.propsConfig.latest === newTagSupport.propsConfig.latest
    if (sameSupport) {
        throw new Error('sameSupport - 22');
    }
    if (samePropConfig) {
        throw new Error('samePropConfig - 22');
    }
    if (newTagSupport.templater.isTag || oldTagSupport.templater.isTag || newTemplater.isTag) {
        throw new Error('trying to compare a basic tag');
    }
    const latestProps = newTemplater.props; // newTagSupport.propsConfig.latest
    const pastCloneProps = oldTagSupport.propsConfig.latestCloned;
    const propsChanged = hasPropChanges(latestProps, pastCloneProps);
    // if no changes detected, no need to continue to rendering further tags
    if (propsChanged) {
        return propsChanged;
    }
    const kidsChanged = hasKidsChanged(oldTagSupport, newTagSupport);
    // we already know props didn't change and if kids didn't either, than don't render
    return kidsChanged;
}
function hasPropChanges(props, // natural props
pastCloneProps) {
    /*
    const isCommonEqual = props === undefined && props === compareToProps
    if(isCommonEqual) {
      return false
    }
    */
    let castedProps = props;
    let castedPastProps = pastCloneProps;
    // check all prop functions match
    if (typeof (props) === 'object') {
        if (!pastCloneProps) {
            return 3;
        }
        castedProps = { ...props };
        castedPastProps = { ...(pastCloneProps || {}) };
        const allFunctionsMatch = Object.entries(castedProps).every(([key, value]) => {
            let compare = castedPastProps[key];
            if (!(value instanceof Function)) {
                return 4; // this will be checked in deepEqual
            }
            if (!(compare instanceof Function)) {
                return false; // its a function now but was not before
            }
            // ensure we are comparing apples to apples as function get wrapped
            if (compare.original) {
                compare = compare.original;
            }
            const original = value.original;
            if (original) {
                value = value.original;
            }
            if (value.toString() !== compare.toString()) {
                return false; // both are function but not the same
            }
            delete castedProps[key]; // its a function and not needed to be compared
            delete castedPastProps[key]; // its a function and not needed to be compared
            return 5;
        });
        if (!allFunctionsMatch) {
            return 6; // a change has been detected by function comparisons
        }
    }
    const isEqual = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(castedPastProps, castedProps);
    return isEqual ? false : 7; // if equal then no changes
}
function hasKidsChanged(oldTagSupport, newTagSupport) {
    const oldCloneKidValues = oldTagSupport.propsConfig.lastClonedKidValues;
    const newClonedKidValues = newTagSupport.propsConfig.lastClonedKidValues;
    const everySame = oldCloneKidValues.every((set, index) => {
        const x = newClonedKidValues[index];
        return set.every((item, index) => item === x[index]);
    });
    return everySame ? false : 9;
}


/***/ }),

/***/ "../../taggedjs/main/ts/html.ts":
/*!**************************************!*\
  !*** ../../taggedjs/main/ts/html.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");

function html(strings, ...values) {
    return new _Tag_class__WEBPACK_IMPORTED_MODULE_0__.Tag(strings, values);
}


/***/ }),

/***/ "../../taggedjs/main/ts/index.ts":
/*!***************************************!*\
  !*** ../../taggedjs/main/ts/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_4__.ArrayNoKeyError),
/* harmony export */   BaseTagSupport: () => (/* reexport safe */ _TagSupport_class__WEBPACK_IMPORTED_MODULE_8__.BaseTagSupport),
/* harmony export */   StateMismatchError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_4__.StateMismatchError),
/* harmony export */   Subject: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.Subject),
/* harmony export */   Tag: () => (/* reexport safe */ _Tag_class__WEBPACK_IMPORTED_MODULE_10__.Tag),
/* harmony export */   TagError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_4__.TagError),
/* harmony export */   TagSupport: () => (/* reexport safe */ _TagSupport_class__WEBPACK_IMPORTED_MODULE_8__.TagSupport),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.ValueSubject),
/* harmony export */   combineLatest: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.combineLatest),
/* harmony export */   getCallback: () => (/* reexport safe */ _getCallback__WEBPACK_IMPORTED_MODULE_19__.getCallback),
/* harmony export */   hmr: () => (/* binding */ hmr),
/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_3__.html),
/* harmony export */   interpolateElement: () => (/* reexport safe */ _interpolateElement__WEBPACK_IMPORTED_MODULE_9__.interpolateElement),
/* harmony export */   interpolateString: () => (/* reexport safe */ _interpolateElement__WEBPACK_IMPORTED_MODULE_9__.interpolateString),
/* harmony export */   isSubjectInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_6__.isSubjectInstance),
/* harmony export */   isTagArray: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_6__.isTagArray),
/* harmony export */   isTagComponent: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_6__.isTagComponent),
/* harmony export */   isTagInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_6__.isTagInstance),
/* harmony export */   onDestroy: () => (/* reexport safe */ _onDestroy__WEBPACK_IMPORTED_MODULE_18__.onDestroy),
/* harmony export */   onInit: () => (/* reexport safe */ _onInit__WEBPACK_IMPORTED_MODULE_17__.onInit),
/* harmony export */   providers: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_13__.providers),
/* harmony export */   runBeforeRender: () => (/* reexport safe */ _tagRunner__WEBPACK_IMPORTED_MODULE_11__.runBeforeRender),
/* harmony export */   set: () => (/* reexport safe */ _set_function__WEBPACK_IMPORTED_MODULE_14__.set),
/* harmony export */   setLet: () => (/* reexport safe */ _setLet_function__WEBPACK_IMPORTED_MODULE_15__.setLet),
/* harmony export */   setProp: () => (/* reexport safe */ _setProp_function__WEBPACK_IMPORTED_MODULE_16__.setProp),
/* harmony export */   setUse: () => (/* reexport safe */ _setUse_function__WEBPACK_IMPORTED_MODULE_12__.setUse),
/* harmony export */   tag: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_2__.tag),
/* harmony export */   tagElement: () => (/* reexport safe */ _tagElement__WEBPACK_IMPORTED_MODULE_0__.tagElement),
/* harmony export */   tags: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_2__.tags),
/* harmony export */   watch: () => (/* reexport safe */ _watch_function__WEBPACK_IMPORTED_MODULE_7__.watch),
/* harmony export */   willCallback: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.willCallback),
/* harmony export */   willPromise: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.willPromise),
/* harmony export */   willSubscribe: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.willSubscribe)
/* harmony export */ });
/* harmony import */ var _tagElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagElement */ "../../taggedjs/main/ts/tagElement.ts");
/* harmony import */ var _ElementTargetEvent_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementTargetEvent.interface */ "../../taggedjs/main/ts/ElementTargetEvent.interface.ts");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag */ "../../taggedjs/main/ts/tag.ts");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../taggedjs/main/ts/html.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _subject_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject/index */ "../../taggedjs/main/ts/subject/index.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _watch_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watch.function */ "../../taggedjs/main/ts/watch.function.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _interpolateElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interpolateElement */ "../../taggedjs/main/ts/interpolateElement.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers */ "../../taggedjs/main/ts/providers.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _setLet_function__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setLet.function */ "../../taggedjs/main/ts/setLet.function.ts");
/* harmony import */ var _setProp_function__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./setProp.function */ "../../taggedjs/main/ts/setProp.function.ts");
/* harmony import */ var _onInit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./onInit */ "../../taggedjs/main/ts/onInit.ts");
/* harmony import */ var _onDestroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./onDestroy */ "../../taggedjs/main/ts/onDestroy.ts");
/* harmony import */ var _getCallback__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./getCallback */ "../../taggedjs/main/ts/getCallback.ts");
// import { redrawTag } from "./redrawTag.function"









// export * from "./redrawTag.function"

// TODO: export *




/* hooks */
// TODO: export *







/* end: hooks */
const hmr = {
    tagElement: _tagElement__WEBPACK_IMPORTED_MODULE_0__.tagElement,
    // redrawTag
};


/***/ }),

/***/ "../../taggedjs/main/ts/inputAttribute.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/inputAttribute.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputAttribute: () => (/* binding */ inputAttribute)
/* harmony export */ });
function inputAttribute(name, value, element) {
    const names = name.split('.');
    // style.position = "absolute"
    if (names[0] === 'style') {
        element.style[names[1]] = value;
    }
    // Example: class.width-full = "true"
    if (names[0] === 'class') {
        names.shift();
        if (value) {
            names.forEach(name => element.classList.add(name));
        }
        else {
            names.forEach(name => element.classList.remove(name));
        }
        return;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/insertAfter.function.ts":
/*!******************************************************!*\
  !*** ../../taggedjs/main/ts/insertAfter.function.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertAfter: () => (/* binding */ insertAfter)
/* harmony export */ });
// Function to insert element after reference element
function insertAfter(newNode, referenceNode) {
    const parentNode = referenceNode.parentNode;
    parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateAttributes.ts":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateAttributes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateAttributes: () => (/* binding */ interpolateAttributes)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function */ "../../taggedjs/main/ts/processAttribute.function.ts");

function howToSetAttribute(element, name, value) {
    element.setAttribute(name, value);
}
function howToSetInputValue(element, name, value) {
    element[name] = value;
}
function interpolateAttributes(child, scope, ownerTag) {
    const attrNames = child.getAttributeNames();
    let howToSet = howToSetAttribute;
    attrNames.forEach(attrName => {
        if (child.nodeName === 'INPUT' && attrName === 'value') {
            howToSet = howToSetInputValue;
        }
        const value = child.getAttribute(attrName);
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)(attrName, value, child, scope, ownerTag, howToSet);
        howToSet = howToSetAttribute; // put back
    });
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateContentTemplates.ts":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateContentTemplates.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateContentTemplates: () => (/* binding */ interpolateContentTemplates)
/* harmony export */ });
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateTemplate */ "../../taggedjs/main/ts/interpolateTemplate.ts");

function interpolateContentTemplates(element, context, tag, options, children) {
    if (!children || element.tagName === 'TEMPLATE') {
        return { clones: [], tagComponents: [] }; // done
    }
    // counting for animation stagger computing
    const counts = options.counts;
    const clones = [];
    const tagComponents = [];
    const childArray = new Array(...children);
    childArray.forEach(child => {
        const { clones: nextClones, tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(child, context, tag, counts, options);
        clones.push(...nextClones);
        if (tagComponent) {
            tagComponents.push(tagComponent);
            return;
        }
        if (child.children) {
            const nextKids = new Array(...child.children);
            nextKids.forEach((subChild, index) => {
                // IF <template end /> its a variable to be processed
                if (isRenderEndTemplate(subChild)) {
                    const { tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(subChild, context, tag, counts, options);
                    if (tagComponent) {
                        tagComponents.push(tagComponent);
                    }
                }
                const { clones: nextClones, tagComponents: nextTagComponent } = interpolateContentTemplates(subChild, context, tag, options, subChild.children);
                clones.push(...nextClones);
                tagComponents.push(...nextTagComponent);
            });
        }
    });
    return { clones, tagComponents };
}
function isRenderEndTemplate(child) {
    const isTemplate = child.tagName === 'TEMPLATE';
    return isTemplate &&
        child.getAttribute('interpolate') !== undefined &&
        child.getAttribute('end') !== undefined;
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateElement.ts":
/*!****************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateElement.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateElement: () => (/* binding */ interpolateElement),
/* harmony export */   interpolateString: () => (/* binding */ interpolateString)
/* harmony export */ });
/* harmony import */ var _interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateAttributes */ "../../taggedjs/main/ts/interpolateAttributes.ts");
/* harmony import */ var _interpolations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolations */ "../../taggedjs/main/ts/interpolations.ts");
/* harmony import */ var _interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolateContentTemplates */ "../../taggedjs/main/ts/interpolateContentTemplates.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");




/** Review elements within an element */
function interpolateElement(container, // element containing innerHTML to review interpolations
context, // variables used to evaluate
interpolatedTemplates, tagOwner, options) {
    const clones = [];
    const tagComponents = [];
    const result = interpolatedTemplates.interpolation;
    const template = container.children[0];
    const children = template.content.children;
    if (result.keys.length) {
        const { clones: nextClones, tagComponents: nextTagComponents } = (0,_interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__.interpolateContentTemplates)(container, context, tagOwner, options, children);
        clones.push(...nextClones);
        tagComponents.push(...nextTagComponents);
    }
    (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(container, context, tagOwner);
    processChildrenAttributes(children, context, tagOwner);
    return { clones, tagComponents };
}
function processChildrenAttributes(children, context, ownerTag) {
    new Array(...children).forEach(child => {
        (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(child, context, ownerTag);
        if (child.children) {
            processChildrenAttributes(child.children, context, ownerTag);
        }
    });
}
function interpolateString(string) {
    const result = (0,_interpolations__WEBPACK_IMPORTED_MODULE_1__.interpolateToTemplates)(string);
    result.string = result.string.replace(_Tag_class__WEBPACK_IMPORTED_MODULE_3__.escapeSearch, _Tag_class__WEBPACK_IMPORTED_MODULE_3__.variablePrefix);
    return result;
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateTemplate.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateTemplate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterElmBuild: () => (/* binding */ afterElmBuild),
/* harmony export */   interpolateTemplate: () => (/* binding */ interpolateTemplate),
/* harmony export */   subscribeToTemplate: () => (/* binding */ subscribeToTemplate)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _elementInitCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementInitCheck */ "../../taggedjs/main/ts/elementInitCheck.ts");
/* harmony import */ var _processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processSubjectValue.function */ "../../taggedjs/main/ts/processSubjectValue.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scanTextAreaValue.function */ "../../taggedjs/main/ts/scanTextAreaValue.function.ts");
/* harmony import */ var _updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateExistingValue.function */ "../../taggedjs/main/ts/updateExistingValue.function.ts");






function interpolateTemplate(insertBefore, // <template end interpolate /> (will be removed)
context, // variable scope of {`__tagvar${index}`:'x'}
ownerTag, // Tag class
counts, // used for animation stagger computing
options) {
    // TODO: THe clones array is useless here
    const clones = [];
    if (!insertBefore.hasAttribute('end')) {
        return { clones }; // only care about <template end>
    }
    const variableName = insertBefore.getAttribute('id');
    if (variableName?.substring(0, _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix.length) !== _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix) {
        return { clones }; // ignore, not a tagVar
    }
    const existingSubject = context[variableName];
    const isDynamic = (0,_isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagComponent)(existingSubject.value) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagArray)(existingSubject.value);
    // process dynamics later
    if (isDynamic) {
        return {
            clones,
            tagComponent: {
                variableName,
                ownerTag,
                subject: existingSubject,
                insertBefore
            }
        };
    }
    let isForceElement = options.forceElement;
    subscribeToTemplate(insertBefore, existingSubject, ownerTag, counts, { isForceElement });
    return { clones };
}
function subscribeToTemplate(insertBefore, subject, ownerTag, counts, // used for animation stagger computing
{ isForceElement }) {
    let called = false;
    const callback = (value) => {
        // const orgInsert = insertBefore
        /*
        const clone = (subject as DisplaySubject).clone
        if(clone && clone.parentNode) {
          insertBefore = clone
        }
        */
        if (called) {
            (0,_updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__.updateExistingValue)(subject, value, ownerTag, insertBefore);
            return;
        }
        if (!insertBefore.parentNode) {
            throw new Error('no insert before parent node - 3');
        }
        const global = ownerTag.tagSupport.templater.global;
        const pre = global.placeholder?.parentNode;
        (0,_processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__.processSubjectValue)(value, subject, insertBefore, ownerTag, {
            counts: { ...counts },
            forceElement: isForceElement,
        });
        if (isForceElement) {
            isForceElement = false; // only can happen once
        }
        // ownerTag.clones.push(...clones)
        // ownerTag.clones.push(...nextClones)
        // clones.push(...nextClones)
        called = true;
    };
    const sub = subject.subscribe(callback);
    ownerTag.tagSupport.templater.global.subscriptions.push(sub);
}
function afterElmBuild(elm, options, context, ownerTag) {
    if (!elm.getAttribute) {
        return;
    }
    const tagName = elm.nodeName; // elm.tagName
    if (tagName === 'TEXTAREA') {
        (0,_scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__.scanTextAreaValue)(elm, context, ownerTag);
    }
    let diff = options.counts.added;
    diff = (0,_elementInitCheck__WEBPACK_IMPORTED_MODULE_1__.elementInitCheck)(elm, options.counts) - diff;
    if (elm.children) {
        new Array(...elm.children).forEach((child, index) => {
            const subOptions = {
                ...options,
                counts: options.counts,
            };
            return afterElmBuild(child, subOptions, context, ownerTag);
        });
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateReplace: () => (/* binding */ interpolateReplace),
/* harmony export */   interpolateToTemplates: () => (/* binding */ interpolateToTemplates)
/* harmony export */ });
// support arrow functions in attributes
const interpolateReplace = /(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;
/** replaces ${x} with <template id="x-start"></template><template id="x-end"></template> */
function interpolateToTemplates(template) {
    const keys = [];
    const string = template.replace(interpolateReplace, (match, expression) => {
        if (match.startsWith('<')) {
            // If the match is an HTML tag, don't replace
            return match;
        }
        const noBraces = expression.substring(1, expression.length - 1);
        const id = noBraces;
        const name = 'template-' + template.length;
        keys.push(id);
        return `<template interpolate end id="${id}" name="${name}"></template>`;
    });
    return { string, keys };
}


/***/ }),

/***/ "../../taggedjs/main/ts/isInstance.ts":
/*!********************************************!*\
  !*** ../../taggedjs/main/ts/isInstance.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSubjectInstance: () => (/* binding */ isSubjectInstance),
/* harmony export */   isTagArray: () => (/* binding */ isTagArray),
/* harmony export */   isTagComponent: () => (/* binding */ isTagComponent),
/* harmony export */   isTagInstance: () => (/* binding */ isTagInstance)
/* harmony export */ });
function isTagComponent(value) {
    return value?.isTemplater === true;
}
function isTagInstance(tag) {
    return tag?.isTag === true;
}
function isSubjectInstance(subject) {
    return (subject?.isSubject === true || subject?.subscribe) ? true : false; // subject?.isSubject === true || 
}
function isTagArray(value) {
    return value instanceof Array && value.every(x => isTagInstance(x));
}


/***/ }),

/***/ "../../taggedjs/main/ts/isLikeTags.function.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/isLikeTags.function.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLikeTags: () => (/* binding */ isLikeTags)
/* harmony export */ });
function isLikeTags(tag0, tag1) {
    if (tag0.strings.length !== tag1.strings.length) {
        return false;
    }
    const everyStringMatched = tag0.strings.every((string, index) => tag1.strings[index] === string);
    if (!everyStringMatched) {
        return false;
    }
    const valuesLengthsMatch = tag0.values.length === tag1.values.length;
    if (!valuesLengthsMatch) {
        return false;
    }
    const allVarsMatch = tag1.values.every((value, index) => {
        const compareTo = tag0.values[index];
        const isFunctions = value instanceof Function && compareTo instanceof Function;
        if (isFunctions) {
            const stringMatch = value.toString() === compareTo.toString();
            if (stringMatch) {
                return true;
            }
            return false;
        }
        return true; // deepEqual(value, compareTo)
    });
    if (allVarsMatch) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "../../taggedjs/main/ts/onDestroy.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/onDestroy.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDestroy: () => (/* binding */ onDestroy)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");

/** When undefined, it means a tag is being built for the first time so do run destroy(s) */
let destroyCurrentTagSupport;
function onDestroy(callback) {
    destroyCurrentTagSupport.templater.global.destroyCallback = callback;
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => destroyCurrentTagSupport = tagSupport,
    beforeRedraw: tagSupport => destroyCurrentTagSupport = tagSupport,
    beforeDestroy: (tagSupport, tag) => {
        const callback = tagSupport.templater.global.destroyCallback;
        if (callback) {
            callback();
        }
    }
});


/***/ }),

/***/ "../../taggedjs/main/ts/onInit.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/onInit.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onInit: () => (/* binding */ onInit)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");

function setCurrentTagSupport(support) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentTemplater = support.templater;
}
function onInit(callback) {
    const templater = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentTemplater;
    if (!templater.global.init) {
        ;
        templater.global.init = callback;
        callback(); // fire init
    }
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
    beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
});


/***/ }),

/***/ "../../taggedjs/main/ts/processAttribute.function.ts":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/ts/processAttribute.function.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processAttribute: () => (/* binding */ processAttribute)
/* harmony export */ });
/* harmony import */ var _inputAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputAttribute */ "../../taggedjs/main/ts/inputAttribute.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/bindSubjectCallback.function.ts");



const startRegX = /^\s*{__tagvar/;
const endRegX = /}\s*$/;
function isTagVar(value) {
    return value && value.search(startRegX) >= 0 && value.search(endRegX) >= 0;
}
function processAttribute(attrName, value, child, scope, ownerTag, howToSet) {
    if (isTagVar(value)) {
        return processScopedNameValueAttr(attrName, value, child, scope, ownerTag, howToSet);
    }
    if (isTagVar(attrName)) {
        const contextValueSubject = getContextValueByVarString(scope, attrName);
        let lastValue;
        // the above callback gets called immediately since its a ValueSubject()
        const sub = contextValueSubject.subscribe((value) => {
            processNameOnlyAttr(value, lastValue, child, ownerTag, howToSet);
            lastValue = value;
        });
        ownerTag.tagSupport.templater.global.subscriptions.push(sub); // this is where unsubscribe is picked up
        child.removeAttribute(attrName);
        return;
    }
    // Non dynamic
    const isSpecial = isSpecialAttr(attrName);
    if (isSpecial) {
        return (0,_inputAttribute__WEBPACK_IMPORTED_MODULE_0__.inputAttribute)(attrName, value, child);
    }
}
function processScopedNameValueAttr(attrName, value, // {__tagVarN}
child, scope, ownerTag, howToSet) {
    // get the code inside the brackets like "variable0" or "{variable0}"
    const result = getContextValueByVarString(scope, value);
    return processNameValueAttr(attrName, result, child, ownerTag, howToSet);
}
function getContextValueByVarString(scope, value) {
    const code = value.replace('{', '').split('').reverse().join('').replace('}', '').split('').reverse().join('');
    return scope[code];
}
function processNameOnlyAttr(attrValue, lastValue, child, ownerTag, howToSet) {
    if (lastValue && lastValue != attrValue) {
        if (typeof (lastValue) === 'string') {
            child.removeAttribute(lastValue);
        }
        else if (lastValue instanceof Object) {
            Object.entries(lastValue).forEach(([name]) => child.removeAttribute(name));
        }
    }
    if (typeof (attrValue) === 'string') {
        if (!attrValue.length) {
            return;
        }
        processNameValueAttr(attrValue, '', child, ownerTag, howToSet);
        return;
    }
    if (attrValue instanceof Object) {
        Object.entries(attrValue).forEach(([name, value]) => processNameValueAttr(name, value, child, ownerTag, howToSet));
        return;
    }
}
function processNameValueAttr(attrName, result, child, ownerTag, howToSet) {
    const isSpecial = isSpecialAttr(attrName);
    // attach as callback?
    if (result instanceof Function) {
        const action = function (...args) {
            const result2 = result(child, args);
            return result2;
        };
        child[attrName].action = action;
        // child.addEventListener(attrName, action)
    }
    // Most every variable comes in here since everything is made a ValueSubject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isSubjectInstance)(result)) {
        child.removeAttribute(attrName);
        const callback = (newAttrValue) => {
            if (newAttrValue instanceof Function) {
                newAttrValue = (0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_2__.bindSubjectCallback)(newAttrValue, ownerTag);
            }
            return processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet);
        };
        // 🗞️ Subscribe. Above callback called immediately since its a ValueSubject()
        const sub = result.subscribe(callback);
        // Record subscription for later unsubscribe when element destroyed
        ownerTag.tagSupport.templater.global.subscriptions.push(sub);
        return;
    }
    howToSet(child, attrName, result);
    // child.setAttribute(attrName, result.value)
    return;
}
function processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet) {
    if (newAttrValue instanceof Function) {
        const fun = function (...args) {
            return newAttrValue(child, args);
        };
        // access to original function
        fun.tagFunction = newAttrValue;
        child[attrName] = fun;
        return;
    }
    if (isSpecial) {
        (0,_inputAttribute__WEBPACK_IMPORTED_MODULE_0__.inputAttribute)(attrName, newAttrValue, child);
        return;
    }
    if (newAttrValue) {
        howToSet(child, attrName, newAttrValue);
        return;
    }
    const isDeadValue = [undefined, false, null].includes(newAttrValue);
    if (isDeadValue) {
        child.removeAttribute(attrName);
        return;
    }
    // value is 0
    howToSet(child, attrName, newAttrValue);
}
/** Looking for (class | style) followed by a period */
function isSpecialAttr(attrName) {
    return attrName.search(/^(class|style)(\.)/) >= 0;
}


/***/ }),

/***/ "../../taggedjs/main/ts/processNewValue.function.ts":
/*!**********************************************************!*\
  !*** ../../taggedjs/main/ts/processNewValue.function.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processNewValue: () => (/* binding */ processNewValue)
/* harmony export */ });
/* harmony import */ var _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject/ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");


function processNewValue(hasValue, value, ownerTag) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(value)) {
        const tagSubject = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
        return tagSubject;
    }
    if (value instanceof Function) {
        // return getSubjectFunction(value, ownerTag)
        return new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
    }
    if (!hasValue) {
        return; // more strings than values, stop here
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(value)) {
        value.ownerTag = ownerTag;
        if (ownerTag.childTags.find(x => x === value)) {
            throw new Error('about to reattach tag already present - 2');
        }
        return new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isSubjectInstance)(value)) {
        return value; // its already a value subject
    }
    return new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
}


/***/ }),

/***/ "../../taggedjs/main/ts/processRegularValue.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/processRegularValue.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processRegularValue: () => (/* binding */ processRegularValue)
/* harmony export */ });
/* harmony import */ var _updateBeforeTemplate_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBeforeTemplate.function */ "../../taggedjs/main/ts/updateBeforeTemplate.function.ts");

function processRegularValue(value, subject, // could be tag via subject.tag
insertBefore) {
    subject.insertBefore = insertBefore;
    const before = subject.clone || insertBefore; // Either the template is on the doc OR its the first element we last put on doc
    // matches but also was defined at some point
    if (subject.lastValue === value && 'lastValue' in subject) {
        return; // no need to update display, its the same
    }
    subject.lastValue = value;
    // Processing of regular values
    const clone = (0,_updateBeforeTemplate_function__WEBPACK_IMPORTED_MODULE_0__.updateBeforeTemplate)(value, before);
    subject.clone = clone; // remember single element put down, for future updates
}


/***/ }),

/***/ "../../taggedjs/main/ts/processSubjectComponent.function.ts":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/ts/processSubjectComponent.function.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processSubjectComponent: () => (/* binding */ processSubjectComponent)
/* harmony export */ });
/* harmony import */ var _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplaterResult.class */ "../../taggedjs/main/ts/TemplaterResult.class.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _processTagResult_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processTagResult.function */ "../../taggedjs/main/ts/processTagResult.function.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");




function processSubjectComponent(templater, subject, insertBefore, ownerTag, options) {
    // Check if function component is wrapped in a tag() call
    // TODO: This below check not needed in production mode
    if (templater.tagged !== true) {
        const original = templater.wrapper.original;
        let name = original.name || original.constructor?.name;
        if (name === 'Function') {
            name = undefined;
        }
        const label = name || original.toString().substring(0, 120);
        const error = new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${label}\n\n`);
        throw error;
    }
    templater.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_3__.TagSupport(ownerTag.tagSupport, templater, subject);
    // templater.oldest = subject.tag?.tagSupport.oldest || templater.oldest
    if (insertBefore.nodeName != 'TEMPLATE') {
        throw new Error('9');
    }
    templater.global.insertBefore = insertBefore;
    let retag = subject.tag;
    const providers = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    providers.ownerTag = ownerTag;
    const isRedraw = !retag || options.forceElement;
    if (isRedraw) {
        retag = redrawSubjectComponent(templater, subject, retag, ownerTag, insertBefore);
    }
    (0,_processTagResult_function__WEBPACK_IMPORTED_MODULE_2__.processTagResult)(retag, subject, // The element set here will be removed from document. Also result.tag will be added in here
    insertBefore, // <template end interpolate /> (will be removed)
    options);
    return retag;
}
function redrawSubjectComponent(templater, subject, retag, ownerTag, insertBefore) {
    const preClones = ownerTag.clones.map(clone => clone);
    retag = (0,_TemplaterResult_class__WEBPACK_IMPORTED_MODULE_0__.renderWithSupport)(templater.tagSupport, subject.tag, // existing tag
    subject, ownerTag);
    if (retag.tagSupport.templater.global.newest != retag) {
        throw new Error('mismatch result newest');
    }
    templater.global.newest = retag;
    if (ownerTag.clones.length > preClones.length) {
        const myClones = ownerTag.clones.filter(fClone => !preClones.find(clone => clone === fClone));
        retag.clones.push(...myClones);
        if (myClones.find(x => x === insertBefore)) {
            throw new Error('way back here we add marker');
        }
    }
    if (ownerTag.childTags.find(x => x === retag)) {
        throw new Error('about to reattach tag already present');
    }
    ownerTag.childTags.push(retag);
    return retag;
}


/***/ }),

/***/ "../../taggedjs/main/ts/processSubjectValue.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/processSubjectValue.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processSubjectValue: () => (/* binding */ processSubjectValue)
/* harmony export */ });
/* harmony import */ var _processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processSubjectComponent.function */ "../../taggedjs/main/ts/processSubjectComponent.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processTagArray */ "../../taggedjs/main/ts/processTagArray.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processRegularValue.function */ "../../taggedjs/main/ts/processRegularValue.function.ts");
/* harmony import */ var _processTag_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processTag.function */ "../../taggedjs/main/ts/processTag.function.ts");





var ValueTypes;
(function (ValueTypes) {
    ValueTypes["tag"] = "tag";
    ValueTypes["tagArray"] = "tag-array";
    ValueTypes["tagComponent"] = "tag-component";
    ValueTypes["value"] = "value";
})(ValueTypes || (ValueTypes = {}));
function getValueType(value) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(value)) {
        return ValueTypes.tagComponent;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(value)) {
        return ValueTypes.tag;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(value)) {
        return ValueTypes.tagArray;
    }
    return ValueTypes.value;
}
function processSubjectValue(value, subject, // could be tag via result.tag
insertBefore, // <template end interpolate /> (will be removed)
ownerTag, // owner
options) {
    const valueType = getValueType(value);
    switch (valueType) {
        case ValueTypes.tag:
            (0,_processTag_function__WEBPACK_IMPORTED_MODULE_4__.processTag)(value, subject, insertBefore, ownerTag);
            return;
        case ValueTypes.tagArray:
            return (0,_processTagArray__WEBPACK_IMPORTED_MODULE_2__.processTagArray)(subject, value, insertBefore, ownerTag, options);
        case ValueTypes.tagComponent:
            (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__.processSubjectComponent)(value, subject, insertBefore, ownerTag, options);
            return;
    }
    (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_3__.processRegularValue)(value, subject, insertBefore);
}


/***/ }),

/***/ "../../taggedjs/main/ts/processTag.function.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/processTag.function.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFakeTemplater: () => (/* binding */ applyFakeTemplater),
/* harmony export */   processTag: () => (/* binding */ processTag)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject */ "../../taggedjs/main/ts/subject/index.ts");



/** Could be a regular tag or a component. Both are Tag.class */
function processTag(tag, subject, // could be tag via result.tag
insertBefore, ownerTag) {
    // first time seeing this tag?
    if (!tag.tagSupport) {
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(tag)) {
            throw new Error('issue non-tag here');
        }
        applyFakeTemplater(tag, ownerTag, subject);
        if (ownerTag.childTags.find(x => x === tag)) {
            throw new Error('about to reattach tag already present - 5');
        }
        ownerTag.childTags.push(tag);
    }
    tag.ownerTag = ownerTag;
    if (insertBefore.tagName !== 'TEMPLATE') {
        throw new Error(`processTag.function.ts - insertBefore is not TEMPLATE ${insertBefore.tagName}`);
    }
    tag.buildBeforeElement(insertBefore, {
        counts: { added: 0, removed: 0 },
        forceElement: true,
    });
}
function applyFakeTemplater(tag, ownerTag, subject) {
    if (!ownerTag) {
        throw new Error('no owner error');
    }
    const fakeTemplater = getFakeTemplater();
    tag.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__.TagSupport(ownerTag.tagSupport, fakeTemplater, // the template is provided via html`` call
    subject);
    fakeTemplater.global.oldest = tag;
    fakeTemplater.global.newest = tag;
    fakeTemplater.tagSupport = tag.tagSupport;
    // asking me to render will cause my parent to render
    tag.ownerTag = ownerTag;
}
function getFakeTemplater() {
    return {
        global: {
            renderCount: 0,
            providers: [],
            context: {},
            subscriptions: [],
            deleted: false,
            newestTemplater: {},
        },
        children: new _subject__WEBPACK_IMPORTED_MODULE_2__.ValueSubject([]), // no children
        props: {},
        isTag: true,
        isTemplater: false,
        tagged: false,
        wrapper: (() => undefined),
        tagSupport: {},
    };
}


/***/ }),

/***/ "../../taggedjs/main/ts/processTagArray.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/processTagArray.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagArray: () => (/* binding */ processTagArray)
/* harmony export */ });
/* harmony import */ var _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject/ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");
/* harmony import */ var _processTag_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processTag.function */ "../../taggedjs/main/ts/processTag.function.ts");




function processTagArray(subject, value, // arry of Tag classes
insertBefore, // <template end interpolate />
ownerTag, options) {
    const clones = ownerTag.clones; // []
    let lastArray = subject.lastArray = subject.lastArray || [];
    if (!subject.placeholder) {
        setPlaceholderElm(insertBefore, subject);
    }
    const runtimeInsertBefore = subject.placeholder; // || insertBefore
    let removed = 0;
    /** 🗑️ remove previous items first */
    lastArray = subject.lastArray = subject.lastArray.filter((item, index) => {
        const newLength = value.length - 1;
        const at = index - removed;
        const lessLength = newLength < at;
        const subTag = value[index - removed];
        const subArrayValue = subTag?.memory.arrayValue;
        const tag = item.tag;
        const destroyItem = lessLength || !areLikeValues(subArrayValue, tag.memory.arrayValue);
        if (destroyItem) {
            const last = lastArray[index];
            const tag = last.tag;
            (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_2__.destroyArrayTag)(tag, options.counts);
            last.deleted = true;
            ++removed;
            ++options.counts.removed;
            return false;
        }
        return true;
    });
    value.forEach((subTag, index) => {
        const previous = lastArray[index];
        const previousSupport = previous?.tag.tagSupport;
        const fakeSubject = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject({});
        (0,_processTag_function__WEBPACK_IMPORTED_MODULE_3__.applyFakeTemplater)(subTag, ownerTag, fakeSubject);
        if (previousSupport) {
            subTag.tagSupport.templater.global = previousSupport.templater.global;
            previousSupport.templater.global.newest = subTag;
        }
        // check for html``.key()
        const keySet = 'arrayValue' in subTag.memory;
        if (!keySet) {
            const details = {
                template: subTag.getTemplate().string,
                array: value,
                ownerTagContent: ownerTag.lastTemplateString,
            };
            const message = 'Use html`...`.key(item) instead of html`...` to template an Array';
            console.error(message, details);
            const err = new _errors__WEBPACK_IMPORTED_MODULE_1__.ArrayNoKeyError(message, details);
            throw err;
        }
        const couldBeSame = lastArray.length > index;
        if (couldBeSame) {
            const prevSupport = previous.tag.tagSupport;
            const prevGlobal = prevSupport.templater.global;
            const isSame = areLikeValues(previous.tag.memory.arrayValue, subTag.memory.arrayValue);
            if (isSame) {
                subTag.tagSupport = subTag.tagSupport || prevSupport;
                const oldest = prevGlobal.oldest;
                oldest.updateByTag(subTag);
                return [];
            }
            // TODO: should not get here?
            processAddTagArrayItem(runtimeInsertBefore, subTag, index, options, lastArray);
            throw new Error('item should be back');
            // return [] // removed: item should have been previously deleted and will be added back
        }
        processAddTagArrayItem(runtimeInsertBefore, subTag, index, options, lastArray);
        ownerTag.childTags.push(subTag);
    });
    return clones;
}
function setPlaceholderElm(insertBefore, subject) {
    if (insertBefore.nodeName !== 'TEMPLATE') {
        subject.placeholder = insertBefore;
        return;
    }
    const placeholder = subject.placeholder = document.createTextNode('');
    const parentNode = insertBefore.parentNode;
    parentNode.insertBefore(placeholder, insertBefore);
    parentNode.removeChild(insertBefore);
}
function processAddTagArrayItem(before, subTag, index, options, lastArray) {
    const lastValue = {
        tag: subTag, index
    };
    // Added to previous array
    lastArray.push(lastValue);
    const counts = {
        added: options.counts.added + index,
        removed: options.counts.removed,
    };
    if (!before.parentNode) {
        throw new Error('issue adding array item');
    }
    const newTempElm = document.createElement('template');
    before.parentNode.insertBefore(newTempElm, before);
    subTag.buildBeforeElement(newTempElm, // before,
    { counts, forceElement: options.forceElement });
}
/** compare two values. If both values are arrays then the items will be compared */
function areLikeValues(valueA, valueB) {
    if (valueA === valueB) {
        return true;
    }
    const bothArrays = valueA instanceof Array && valueB instanceof Array;
    const matchLengths = bothArrays && valueA.length == valueB.length;
    if (matchLengths) {
        return valueA.every((item, index) => item == valueB[index]);
    }
    return false;
}


/***/ }),

/***/ "../../taggedjs/main/ts/processTagResult.function.ts":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/ts/processTagResult.function.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagResult: () => (/* binding */ processTagResult)
/* harmony export */ });
function processTagResult(tag, subject, // used for recording past and current value
insertBefore, // <template end interpolate />
{ counts, forceElement, }) {
    if (!insertBefore.parentNode) {
        throw new Error(`before here processTagResult ${insertBefore.nodeName}`);
    }
    // *if appears we already have seen
    const subjectTag = subject;
    const existingTag = subjectTag.tag;
    const previousTag = existingTag?.tagSupport.templater.global.oldest || undefined; // || tag.tagSupport.oldest // subjectTag.tag
    const justUpdate = previousTag; // && !forceElement
    if (previousTag && justUpdate) {
        /*
        const areLike = previousTag.isLikeTag(tag)
    
        // are we just updating an if we already had?
        if(areLike) {
          return processTagResultUpdate(tag, subjectTag, previousTag)
        }
        */
        return processTagResultUpdate(tag, subjectTag, previousTag);
    }
    /*
    if(insertBefore.nodeName !== 'TEMPLATE') {
      throw new Error(`processTagResult.function.ts insertBefore is not template ${insertBefore.nodeName}`)
    }
    */
    tag.buildBeforeElement(insertBefore, {
        counts,
        forceElement,
    });
}
function processTagResultUpdate(tag, subject, // used for recording past and current value
previousTag) {
    // components
    if (subject instanceof Function) {
        const newTag = subject(previousTag.tagSupport);
        previousTag.updateByTag(newTag);
        subject.tag = newTag;
        return;
    }
    previousTag.updateByTag(tag);
    subject.tag = tag;
    return;
}


/***/ }),

/***/ "../../taggedjs/main/ts/provider.utils.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/provider.utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providersChangeCheck: () => (/* binding */ providersChangeCheck)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");


function providersChangeCheck(tag) {
    const global = tag.tagSupport.templater.global;
    const providersWithChanges = global.providers.filter(provider => !(0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(provider.instance, provider.clone));
    // reset clones
    providersWithChanges.forEach(provider => {
        const appElement = tag.getAppElement();
        handleProviderChanges(appElement, provider);
        provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
    });
}
function handleProviderChanges(appElement, provider) {
    const tagsWithProvider = getTagsWithProvider(appElement, provider);
    tagsWithProvider.forEach(({ tag, renderCount, provider }) => {
        if (tag.tagSupport.templater.global.deleted) {
            return; // i was deleted after another tag processed
        }
        const notRendered = renderCount === tag.tagSupport.templater.global.renderCount;
        if (notRendered) {
            provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
            (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_1__.renderTagSupport)(tag.tagSupport, false);
        }
    });
}
function getTagsWithProvider(tag, provider, memory = []) {
    const global = tag.tagSupport.templater.global;
    const compare = global.providers;
    const hasProvider = compare.find(xProvider => xProvider.constructMethod === provider.constructMethod);
    if (hasProvider) {
        memory.push({
            tag,
            renderCount: global.renderCount,
            provider: hasProvider,
        });
    }
    tag.childTags.forEach(child => getTagsWithProvider(child, provider, memory));
    memory.forEach(({ tag }) => {
        if (tag.tagSupport.templater.global.deleted) {
            throw new Error('do not get here - 0');
        }
    });
    return memory;
}


/***/ }),

/***/ "../../taggedjs/main/ts/providers.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/providers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providers: () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


// TODO: rename
_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig = {
    providers: [],
    //currentTagSupport: undefined as TagSupport | undefined,
    ownerTag: undefined,
};
function get(constructMethod) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    const providers = config.providers;
    return providers.find(provider => provider.constructMethod === constructMethod);
}
const providers = {
    create: (constructMethod) => {
        const existing = get(constructMethod);
        if (existing) {
            existing.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(existing.instance);
            return existing.instance;
        }
        // Providers with provider requirements just need to use providers.create() and providers.inject()
        const instance = constructMethod.constructor ? new constructMethod() : constructMethod();
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        config.providers.push({
            constructMethod,
            instance,
            clone: (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(instance)
        });
        return instance;
    },
    /**
     * @template T
     * @param {(new (...args: any[]) => T) | () => T} constructor
     * @returns {T}
     */
    inject: (constructor) => {
        const oldValue = get(constructor);
        if (oldValue) {
            return oldValue.instance;
        }
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        let owner = {
            ownerTag: config.ownerTag
        };
        while (owner.ownerTag) {
            const ownerProviders = owner.ownerTag.tagSupport.templater.global.providers;
            const provider = ownerProviders.find(provider => {
                if (provider.constructMethod === constructor) {
                    return true;
                }
            });
            if (provider) {
                provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance); // keep a copy of the latest before any change occur
                config.providers.push(provider);
                return provider.instance;
            }
            owner = owner.ownerTag; // cause reloop
        }
        const msg = `Could not inject provider: ${constructor.name} ${constructor}`;
        console.warn(`${msg}. Available providers`, config.providers);
        throw new Error(msg);
    }
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport, ownerTag) => {
        run(tagSupport, ownerTag);
    },
    beforeRedraw: (tagSupport, tag) => {
        run(tagSupport, tag.ownerTag);
    },
    afterRender: (tagSupport) => {
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        tagSupport.templater.global.providers = [...config.providers];
        config.providers.length = 0;
    }
});
function run(tagSupport, ownerTag) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    // config.currentTagSupport = tagSupport
    config.ownerTag = ownerTag;
    if (tagSupport.templater.global.providers.length) {
        config.providers.length = 0;
        config.providers.push(...tagSupport.templater.global.providers);
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/render.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/render.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildClones: () => (/* binding */ buildClones)
/* harmony export */ });
function buildClones(temporary, insertBefore) {
    const clones = [];
    const template = temporary.children[0];
    let nextSibling = template.content.firstChild;
    while (nextSibling) {
        const nextNextSibling = nextSibling.nextSibling;
        buildSibling(nextSibling, insertBefore);
        clones.push(nextSibling);
        nextSibling = nextNextSibling;
    }
    return clones;
}
function buildSibling(nextSibling, insertBefore) {
    const parentNode = insertBefore.parentNode;
    parentNode.insertBefore(nextSibling, insertBefore);
}


/***/ }),

/***/ "../../taggedjs/main/ts/renderExistingTag.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/renderExistingTag.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderExistingTag: () => (/* binding */ renderExistingTag)
/* harmony export */ });
/* harmony import */ var _provider_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider.utils */ "../../taggedjs/main/ts/provider.utils.ts");
/* harmony import */ var _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplaterResult.class */ "../../taggedjs/main/ts/TemplaterResult.class.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");



/** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
function renderExistingTag(oldestTag, // existing tag already there
newTemplater, tagSupport, subject) {
    const tag = subject.tag;
    newTemplater.global = tag.tagSupport.templater.global;
    if (!oldestTag.hasLiveElements) {
        throw new Error('1080 - should have live elements');
    }
    const preRenderCount = tagSupport.templater.global.renderCount;
    (0,_provider_utils__WEBPACK_IMPORTED_MODULE_0__.providersChangeCheck)(oldestTag);
    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    const latestTag = tagSupport.templater.global.newest;
    if (preRenderCount !== tagSupport.templater.global.renderCount) {
        oldestTag.updateByTag(latestTag);
        return latestTag;
    }
    const oldTemplater = tagSupport.templater || newTemplater;
    const toRedrawTag = subject.tag || oldTemplater.global.newest || oldTemplater.global.oldest; // hmmmmmm, why not newest?
    const redraw = (0,_TemplaterResult_class__WEBPACK_IMPORTED_MODULE_1__.renderWithSupport)(newTemplater.tagSupport, toRedrawTag, subject, oldestTag.ownerTag);
    const oldest = tagSupport.templater.global.oldest || oldestTag;
    redraw.tagSupport.templater.global.oldest = oldest;
    if ((0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_2__.isLikeTags)(latestTag, redraw)) {
        subject.tag = redraw;
        oldest.updateByTag(redraw);
    }
    return redraw;
}


/***/ }),

/***/ "../../taggedjs/main/ts/renderTagSupport.function.ts":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/ts/renderTagSupport.function.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTagSupport: () => (/* binding */ renderTagSupport)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _renderExistingTag_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderExistingTag.function */ "../../taggedjs/main/ts/renderExistingTag.function.ts");



/** Main function used by all other callers to render/update display of a tag component */
function renderTagSupport(tagSupport, renderUp) {
    const global = tagSupport.templater.global;
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(tagSupport.templater)) {
        const newTag = global.newest;
        const ownerTag = newTag.ownerTag;
        ++global.renderCount;
        return renderTagSupport(ownerTag.tagSupport, true);
    }
    // const oldTagSetup = this
    const subject = tagSupport.subject;
    const templater = tagSupport.templater; // oldTagSetup.templater // templater
    const subjectTag = subject.tag;
    const newest = subjectTag?.tagSupport.templater.global.newest;
    let ownerTag;
    let selfPropChange = false;
    const shouldRenderUp = renderUp && newest;
    if (shouldRenderUp) {
        ownerTag = newest.ownerTag;
        if (ownerTag) {
            const nowProps = templater.props;
            const latestProps = newest.tagSupport.propsConfig.latestCloned;
            selfPropChange = !(0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(nowProps, latestProps);
        }
    }
    const useTagSupport = global.newest?.tagSupport; // oldTagSetup
    if (!templater.global.oldest) {
        throw new Error('already causing trouble');
    }
    const tag = (0,_renderExistingTag_function__WEBPACK_IMPORTED_MODULE_2__.renderExistingTag)(templater.global.oldest, templater, useTagSupport, subject);
    const renderOwner = ownerTag && selfPropChange;
    if (renderOwner) {
        const ownerTagSupport = ownerTag.tagSupport;
        renderTagSupport(ownerTagSupport, true);
        return tag;
    }
    return tag;
}


/***/ }),

/***/ "../../taggedjs/main/ts/scanTextAreaValue.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/scanTextAreaValue.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scanTextAreaValue: () => (/* binding */ scanTextAreaValue)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function */ "../../taggedjs/main/ts/processAttribute.function.ts");

const search = new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');
function scanTextAreaValue(textarea, context, ownerTag) {
    const value = textarea.value;
    if (value.search(search) >= 0) {
        const match = value.match(/__tagvar(\d{1,4})/);
        const token = match ? match[0] : '';
        const dynamic = '{' + token + '}';
        textarea.value = '';
        textarea.setAttribute('text-var-value', dynamic);
        const howToSet = (_elm, _name, value) => textarea.value = value;
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)('text-var-value', dynamic, // realValue, // context[token].value,
        textarea, context, ownerTag, howToSet);
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/set.function.ts":
/*!**********************************************!*\
  !*** ../../taggedjs/main/ts/set.function.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateEchoBack: () => (/* binding */ StateEchoBack),
/* harmony export */   getStateValue: () => (/* binding */ getStateValue),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


// TODO: rename
_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig = {
    array: [], // state memory on the first render
    // rearray: [] as StateConfigArray, // state memory to be used before the next render
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport) => initState(tagSupport),
    beforeRedraw: (tagSupport) => initState(tagSupport),
    afterRender: (tagSupport) => {
        const state = tagSupport.memory.state;
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
        const rearray = config.rearray;
        if (rearray.length) {
            if (rearray.length !== config.array.length) {
                const message = `States lengths has changed ${rearray.length} !== ${config.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`;
                const details = {
                    oldStates: config.array,
                    newStates: config.rearray,
                    component: tagSupport.templater?.wrapper.original,
                };
                const error = new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, details);
                console.warn(message, details);
                throw error;
            }
        }
        delete config.rearray; // clean up any previous runs
        state.newest = config.array; // [...config.array]
        state.newest.forEach(item => item.lastValue = getStateValue(item)); // set last values
        config.array = [];
    }
});
function getStateValue(
// state: StateConfig,
state) {
    const callback = state.callback;
    if (!callback) {
        return state.defaultValue;
    }
    const oldState = callback(StateEchoBack); // get value and set to undefined
    const [oldValue] = oldState;
    const [checkValue] = callback(oldValue); // set back to original value
    if (checkValue !== StateEchoBack) {
        const message = 'State property not used correctly. Second item in array is not setting value as expected.\n\n' +
            'For "let" state use `let name = state(default)(x => [name, name = x])`\n\n' +
            'For "const" state use `const name = state(default)()`\n\n' +
            'Problem state:\n' + (callback ? callback.toString() : JSON.stringify(state)) + '\n';
        console.error(message, { state, callback, oldState, oldValue, checkValue });
        throw new Error(message);
    }
    // state.lastValue = oldValue
    return oldValue;
}
class StateEchoBack {
}
function initState(tagSupport) {
    const state = tagSupport.memory.state;
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    // TODO: This guard may no longer be needed
    if (config.rearray) {
        const message = 'last state not cleared. Possibly in the middle of rendering one component and another is trying to render';
        console.error(message, {
            config,
            component: tagSupport.templater?.wrapper.original,
            wasInMiddleOf: config.tagSupport?.templater.wrapper.original,
            state,
            expectedClearArray: config.rearray,
        });
        throw new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, {
            config,
            component: tagSupport.templater?.wrapper.original,
            state,
            expectedClearArray: config.rearray,
        });
    }
    // TODO: this maybe redundant and not needed
    config.rearray = []; // .length = 0
    if (state?.newest.length) {
        state.newest.map(state => getStateValue(state));
        config.rearray.push(...state.newest);
    }
    config.tagSupport = tagSupport;
}
/** Used for variables that need to remain the same variable during render passes */
function set(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    let getSetMethod;
    const rearray = config.rearray;
    const restate = rearray[config.array.length];
    if (restate) {
        let oldValue = getStateValue(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            get: () => getStateValue(push),
            callback: getSetMethod,
            lastValue: oldValue,
            defaultValue: restate.defaultValue,
        };
        config.array.push(push);
        return oldValue;
    }
    // State first time run
    const defaultFn = defaultValue instanceof Function ? defaultValue : () => defaultValue;
    let initValue = defaultFn();
    getSetMethod = ((x) => [initValue, initValue = x]);
    const push = {
        get: () => getStateValue(push),
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return initValue;
}


/***/ }),

/***/ "../../taggedjs/main/ts/setLet.function.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/setLet.function.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLet: () => (/* binding */ setLet)
/* harmony export */ });
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setLet(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    const rearray = config.rearray;
    let getSetMethod;
    const restate = rearray[config.array.length];
    if (restate) {
        let oldValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            get: () => (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
            callback: getSetMethod,
            lastValue: oldValue,
            defaultValue: restate.defaultValue,
        };
        config.array.push(push);
        return makeStateResult(oldValue, push);
    }
    // State first time run
    const defaultFn = defaultValue instanceof Function ? defaultValue : () => defaultValue;
    let initValue = defaultFn();
    getSetMethod = ((x) => [initValue, initValue = x]);
    const push = {
        get: () => (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return makeStateResult(initValue, push);
}
function makeStateResult(initValue, push) {
    // return initValue
    const result = (y) => {
        push.callback = y || (x => [initValue, initValue = x]);
        return initValue;
    };
    return result;
}


/***/ }),

/***/ "../../taggedjs/main/ts/setProp.function.ts":
/*!**************************************************!*\
  !*** ../../taggedjs/main/ts/setProp.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setProp: () => (/* binding */ setProp)
/* harmony export */ });
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setProp(getSet) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    const rearray = config.rearray;
    const [propValue] = getSet(undefined);
    getSet(propValue); // restore original value instead of undefined
    const restate = rearray[config.array.length];
    if (restate) {
        let watchValue = restate.watch;
        let oldValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        const push = {
            get: () => (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
            callback: getSet,
            lastValue: oldValue,
            watch: restate.watch,
        };
        // has the prop value changed?
        if (propValue != watchValue) {
            push.watch = propValue;
            oldValue = push.lastValue = propValue;
        }
        config.array.push(push);
        getSet(oldValue);
        return oldValue;
    }
    const push = {
        get: () => (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
        callback: getSet,
        lastValue: propValue,
        watch: propValue,
    };
    config.array.push(push);
    return propValue;
}


/***/ }),

/***/ "../../taggedjs/main/ts/setUse.function.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/setUse.function.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setUse: () => (/* binding */ setUse)
/* harmony export */ });
const tagUse = [];
function setUse(use) {
    // must provide defaults
    const useMe = {
        beforeRender: use.beforeRender || (() => undefined),
        beforeRedraw: use.beforeRedraw || (() => undefined),
        afterRender: use.afterRender || (() => undefined),
        beforeDestroy: use.beforeDestroy || (() => undefined),
    };
    setUse.tagUse.push(useMe);
}
setUse.tagUse = tagUse;
setUse.memory = {};


/***/ }),

/***/ "../../taggedjs/main/ts/subject/Subject.class.ts":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/ts/subject/Subject.class.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
class Subject {
    value;
    methods = [];
    isSubject = true;
    subscribers = [];
    subscribeWith;
    // unsubcount = 0 // 🔬 testing
    constructor(value) {
        this.value = value;
    }
    subscribe(callback) {
        // are we within a pipe?
        const subscribeWith = this.subscribeWith;
        if (subscribeWith) {
            // are we in a pipe?
            if (this.methods.length) {
                const orgCallback = callback;
                callback = (value, subscription) => {
                    runPipedMethods(value, subscription, this.methods, lastValue => orgCallback(lastValue, subscription));
                };
            }
            return subscribeWith(callback);
        }
        this.subscribers.push(callback);
        SubjectClass.globalSubs.push(callback); // 🔬 testing
        const subscription = getSubscription(this, callback);
        return subscription;
    }
    set(value) {
        this.value = value;
        // Notify all subscribers with the new value
        this.subscribers.forEach((callback) => {
            callback.value = value;
            callback(value);
        });
    }
    next = this.set;
    toPromise() {
        return new Promise((res, rej) => {
            const subscription = this.subscribe(x => {
                subscription.unsubscribe();
                res(x);
            });
        });
    }
    pipe(...operations) {
        const subject = new Subject();
        subject.methods = operations;
        subject.subscribeWith = (x) => this.subscribe(x);
        return subject;
    }
}
function removeSubFromArray(subscribers, callback) {
    const index = subscribers.indexOf(callback);
    if (index !== -1) {
        subscribers.splice(index, 1);
    }
}
const SubjectClass = Subject;
SubjectClass.globalSubs = []; // 🔬 for testing
SubjectClass.globalSubCount$ = new Subject(); // for ease of debugging
SubjectClass.globalSubCount$.set(0);
function getSubscription(subject, callback) {
    const countSubject = SubjectClass.globalSubCount$;
    SubjectClass.globalSubCount$.set(countSubject.value + 1);
    const subscription = () => {
        subscription.unsubscribe();
    };
    subscription.subscriptions = [];
    // Return a function to unsubscribe from the BehaviorSubject
    subscription.unsubscribe = () => {
        removeSubFromArray(subject.subscribers, callback); // each will be called when update comes in
        removeSubFromArray(SubjectClass.globalSubs, callback); // 🔬 testing
        SubjectClass.globalSubCount$.set(countSubject.value - 1);
        // any double unsubscribes will be ignored
        subscription.unsubscribe = () => subscription;
        // unsubscribe from any combined subjects
        subscription.subscriptions.forEach(subscription => subscription.unsubscribe());
        return subscription;
    };
    subscription.add = (sub) => {
        subscription.subscriptions.push(sub);
        return subscription;
    };
    return subscription;
}
function runPipedMethods(value, subscription, methods, onComplete) {
    const cloneMethods = [...methods];
    const firstMethod = cloneMethods.shift();
    const next = (newValue) => {
        if (cloneMethods.length) {
            return runPipedMethods(newValue, subscription, cloneMethods, onComplete);
        }
        onComplete(newValue);
        // return newValue = next
    };
    let handler = next;
    const setHandler = (x) => handler = x;
    const pipeUtils = { setHandler, next };
    const methodResponse = firstMethod(value, pipeUtils);
    handler(methodResponse);
}


/***/ }),

/***/ "../../taggedjs/main/ts/subject/ValueSubject.ts":
/*!******************************************************!*\
  !*** ../../taggedjs/main/ts/subject/ValueSubject.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueSubject: () => (/* binding */ ValueSubject)
/* harmony export */ });
/* harmony import */ var _Subject_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject.class */ "../../taggedjs/main/ts/subject/Subject.class.ts");

class ValueSubject extends _Subject_class__WEBPACK_IMPORTED_MODULE_0__.Subject {
    value;
    constructor(value) {
        super(value);
        this.value = value;
    }
    subscribe(callback) {
        const subscription = super.subscribe(callback);
        // Call the callback immediately with the current value
        callback(this.value, subscription);
        return subscription;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/subject/combineLatest.function.ts":
/*!****************************************************************!*\
  !*** ../../taggedjs/main/ts/subject/combineLatest.function.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _Subject_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject.class */ "../../taggedjs/main/ts/subject/Subject.class.ts");

function combineLatest(subjects) {
    const output = new _Subject_class__WEBPACK_IMPORTED_MODULE_0__.Subject();
    const subscribe = (callback) => {
        const valuesSeen = [];
        const values = [];
        const setValue = (x, index) => {
            valuesSeen[index] = true;
            values[index] = x;
            if (valuesSeen.length === subjects.length && valuesSeen.every(x => x)) {
                callback(values, subscription);
            }
        };
        const clones = [...subjects];
        const firstSub = clones.shift();
        const subscription = firstSub.subscribe(x => setValue(x, 0));
        const subscriptions = clones.map((subject, index) => subject.subscribe(x => setValue(x, index + 1)));
        subscription.subscriptions = subscriptions;
        return subscription;
    };
    output.subscribeWith = subscribe;
    return output;
}


/***/ }),

/***/ "../../taggedjs/main/ts/subject/index.ts":
/*!***********************************************!*\
  !*** ../../taggedjs/main/ts/subject/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* reexport safe */ _Subject_class__WEBPACK_IMPORTED_MODULE_0__.Subject),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject),
/* harmony export */   combineLatest: () => (/* reexport safe */ _combineLatest_function__WEBPACK_IMPORTED_MODULE_2__.combineLatest),
/* harmony export */   willCallback: () => (/* reexport safe */ _will_functions__WEBPACK_IMPORTED_MODULE_3__.willCallback),
/* harmony export */   willPromise: () => (/* reexport safe */ _will_functions__WEBPACK_IMPORTED_MODULE_3__.willPromise),
/* harmony export */   willSubscribe: () => (/* reexport safe */ _will_functions__WEBPACK_IMPORTED_MODULE_3__.willSubscribe)
/* harmony export */ });
/* harmony import */ var _Subject_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject.class */ "../../taggedjs/main/ts/subject/Subject.class.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");
/* harmony import */ var _combineLatest_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combineLatest.function */ "../../taggedjs/main/ts/subject/combineLatest.function.ts");
/* harmony import */ var _will_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./will.functions */ "../../taggedjs/main/ts/subject/will.functions.ts");






/***/ }),

/***/ "../../taggedjs/main/ts/subject/will.functions.ts":
/*!********************************************************!*\
  !*** ../../taggedjs/main/ts/subject/will.functions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   willCallback: () => (/* binding */ willCallback),
/* harmony export */   willPromise: () => (/* binding */ willPromise),
/* harmony export */   willSubscribe: () => (/* binding */ willSubscribe)
/* harmony export */ });
function willCallback(callback) {
    return ((lastValue, utils) => {
        utils.setHandler(() => {
            return undefined;
        });
        callback(lastValue, utils.next);
    });
}
/** .pipe( promise((x) => Promise.resolve(44)) ) */
function willPromise(callback) {
    return ((lastValue, utils) => {
        utils.setHandler(() => {
            return undefined;
        }); // do nothing on initial return
        const result = callback(lastValue);
        result.then(x => utils.next(x));
    });
}
/** .pipe( willSubscribe((x) => new ValueSubject(44)) ) */
const willSubscribe = (callback) => {
    return ((lastValue, utils) => {
        utils.setHandler(() => {
            return undefined;
        }); // do nothing on initial return
        const result = callback(lastValue);
        const subscription = result.subscribe(x => {
            subscription.unsubscribe();
            utils.next(x);
        });
    });
};


/***/ }),

/***/ "../../taggedjs/main/ts/tag.ts":
/*!*************************************!*\
  !*** ../../taggedjs/main/ts/tag.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tag: () => (/* binding */ tag),
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplaterResult.class */ "../../taggedjs/main/ts/TemplaterResult.class.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/bindSubjectCallback.function.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _alterProps_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alterProps.function */ "../../taggedjs/main/ts/alterProps.function.ts");
/* harmony import */ var _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject/ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");








const tags = [];
let tagCount = 0;
/** Wraps a tag component in a state manager and always push children to last argument as an array */
// export function tag<T>(a: T): T;
function tag(tagComponent) {
    const result = (function tagWrapper(props, children) {
        const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(props) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(props);
        if (isPropTag) {
            children = props;
            props = undefined;
        }
        const { childSubject, madeSubject } = kidsToTagArraySubject(children);
        childSubject.isChildSubject = true;
        const templater = new _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_2__.TemplaterResult(props, childSubject);
        const innerTagWrap = getTagWrap(templater, madeSubject);
        innerTagWrap.original = tagComponent;
        templater.tagged = true;
        templater.wrapper = innerTagWrap;
        return templater;
    }); // we override the function provided and pretend original is what's returned
    updateResult(result, tagComponent);
    // group tags together and have hmr pickup
    updateComponent(tagComponent);
    tags.push(tagComponent);
    return result;
}
function kidsToTagArraySubject(children) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(children)) {
        return { childSubject: children, madeSubject: false };
    }
    const kidArray = children;
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(kidArray)) {
        return { childSubject: new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__.ValueSubject(children), madeSubject: true };
    }
    const kid = children;
    if (kid) {
        kid.memory.arrayValue = 0;
        return { childSubject: new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__.ValueSubject([kid]), madeSubject: true };
    }
    return {
        childSubject: new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__.ValueSubject([]),
        madeSubject: true
    };
}
function updateResult(result, tagComponent) {
    result.isTag = true;
    result.original = tagComponent;
}
function updateComponent(tagComponent) {
    tagComponent.tags = tags;
    tagComponent.setUse = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse;
    tagComponent.tagIndex = tagCount++; // needed for things like HMR
}
/** creates/returns a function that when called then calls the original component function */
function getTagWrap(templater, madeSubject) {
    const innerTagWrap = function (oldTagSetup, subject) {
        const global = oldTagSetup.templater.global;
        global.newestTemplater = templater;
        ++global.renderCount;
        templater.global = global;
        const childSubject = templater.children;
        const lastArray = global.oldest?.tagSupport.templater.children.lastArray;
        if (lastArray) {
            childSubject.lastArray = lastArray;
        }
        const originalFunction = innerTagWrap.original;
        // const oldTagSetup = templater.tagSupport
        const oldest = templater.global.oldest;
        if (oldest && !oldest.hasLiveElements) {
            throw new Error('issue already 22');
        }
        let props = templater.props;
        const ownerTagSupport = oldTagSetup.ownerTagSupport;
        const oldTemplater = ownerTagSupport?.templater;
        const oldLatest = oldTemplater?.global.newest;
        const newestOwnerTemplater = oldLatest?.tagSupport.templater;
        if (oldLatest && !newestOwnerTemplater) {
            throw new Error('what to do here?');
        }
        let castedProps = (0,_alterProps_function__WEBPACK_IMPORTED_MODULE_6__.alterProps)(props, newestOwnerTemplater, oldTagSetup.ownerTagSupport);
        const clonedProps = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_4__.deepClone)(props); // castedProps
        // CALL ORIGINAL COMPONENT FUNCTION
        const tag = originalFunction(castedProps, childSubject);
        tag.version = global.renderCount;
        tag.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_5__.TagSupport(oldTagSetup.ownerTagSupport, templater, subject);
        tag.tagSupport.propsConfig = {
            latest: props, // castedProps
            latestCloned: clonedProps,
            clonedProps: clonedProps,
            lastClonedKidValues: tag.tagSupport.propsConfig.lastClonedKidValues,
        };
        tag.tagSupport.memory = oldTagSetup.memory; // state handover
        if (madeSubject) {
            childSubject.value.forEach(kid => {
                kid.values.forEach((value, index) => {
                    if (!(value instanceof Function)) {
                        return;
                    }
                    const valuesValue = kid.values[index];
                    if (valuesValue.isChildOverride) {
                        return; // already overwritten
                    }
                    // all functions need to report to me
                    kid.values[index] = function (...args) {
                        const ownerTag = tag.ownerTag;
                        (0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_3__.runTagCallback)(value, // callback
                        ownerTag, this, // bindTo
                        args);
                    };
                    valuesValue.isChildOverride = true;
                });
            });
        }
        return tag;
    };
    return innerTagWrap;
}


/***/ }),

/***/ "../../taggedjs/main/ts/tagElement.ts":
/*!********************************************!*\
  !*** ../../taggedjs/main/ts/tagElement.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTagUpdater: () => (/* binding */ applyTagUpdater),
/* harmony export */   tagElement: () => (/* binding */ tagElement)
/* harmony export */ });
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject/ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");



const appElements = [];
function tagElement(app, // (...args: unknown[]) => TemplaterResult,
element, props) {
    const appElmIndex = appElements.findIndex(appElm => appElm.element === element);
    if (appElmIndex >= 0) {
        appElements[appElmIndex].tag.destroy();
        appElements.splice(appElmIndex, 1);
        // an element already had an app on it
        console.warn('Found and destroyed app element already rendered to element', { element });
    }
    // Create the app which returns [props, runOneTimeFunction]
    const wrapper = app(props);
    // have a function setup and call the tagWrapper with (props, {update, async, on})
    const result = applyTagUpdater(wrapper);
    const { tag } = result;
    // TODO: is the below needed?
    tag.appElement = element;
    tag.tagSupport.templater.global.isApp = true;
    const templateElm = document.createElement('template');
    templateElm.setAttribute('id', 'app-tag-' + appElements.length);
    templateElm.setAttribute('app-tag-detail', appElements.length.toString());
    element.appendChild(templateElm);
    tag.buildBeforeElement(templateElm);
    wrapper.global.oldest = tag;
    wrapper.global.newest = tag;
    if (!tag.hasLiveElements) {
        throw new Error('x');
    }
    ;
    element.setUse = app.original.setUse;
    appElements.push({ element, tag });
    return { tag, tags: app.original.tags };
}
function applyTagUpdater(wrapper) {
    const subject = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_2__.ValueSubject({});
    const tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.BaseTagSupport(wrapper, subject);
    wrapper.tagSupport = tagSupport;
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_1__.runBeforeRender)(tagSupport, undefined);
    // Call the apps function for our tag templater
    const tag = wrapper.wrapper(tagSupport, subject);
    // wrapper.global.oldest = tag
    // wrapper.global.newest = tag
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_1__.runAfterRender)(tagSupport, tag);
    return { tag, tagSupport };
}


/***/ }),

/***/ "../../taggedjs/main/ts/tagRunner.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/tagRunner.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runAfterRender: () => (/* binding */ runAfterRender),
/* harmony export */   runBeforeDestroy: () => (/* binding */ runBeforeDestroy),
/* harmony export */   runBeforeRedraw: () => (/* binding */ runBeforeRedraw),
/* harmony export */   runBeforeRender: () => (/* binding */ runBeforeRender)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
// TODO: This should be more like `new TaggedJs().use({})`

// Life cycle 1
function runBeforeRender(tagSupport, tagOwner) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRender(tagSupport, tagOwner));
}
// Life cycle 2
function runAfterRender(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.afterRender(tagSupport, tag));
}
// Life cycle 3
function runBeforeRedraw(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRedraw(tagSupport, tag));
}
// Life cycle 4 - end of life
function runBeforeDestroy(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeDestroy(tagSupport, tag));
}


/***/ }),

/***/ "../../taggedjs/main/ts/updateBeforeTemplate.function.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/updateBeforeTemplate.function.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateBeforeTemplate: () => (/* binding */ updateBeforeTemplate)
/* harmony export */ });
// Function to update the value of x
function updateBeforeTemplate(value, lastFirstChild) {
    const parent = lastFirstChild.parentNode;
    let castedValue = value;
    // mimic React skipping to display EXCEPT for true does display on page
    if ([undefined, false, null].includes(value)) { // || value === true
        castedValue = '';
    }
    // Insert the new value (never use innerHTML here)
    const textNode = document.createTextNode(castedValue); // never innerHTML
    parent.insertBefore(textNode, lastFirstChild);
    /* remove existing nodes */
    parent.removeChild(lastFirstChild);
    return textNode;
}


/***/ }),

/***/ "../../taggedjs/main/ts/updateExistingTagComponent.function.ts":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/ts/updateExistingTagComponent.function.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingTagComponent: () => (/* binding */ updateExistingTagComponent)
/* harmony export */ });
/* harmony import */ var _hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasTagSupportChanged.function */ "../../taggedjs/main/ts/hasTagSupportChanged.function.ts");
/* harmony import */ var _processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processSubjectComponent.function */ "../../taggedjs/main/ts/processSubjectComponent.function.ts");
/* harmony import */ var _destroyTag_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destroyTag.function */ "../../taggedjs/main/ts/destroyTag.function.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");
/* harmony import */ var _alterProps_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alterProps.function */ "../../taggedjs/main/ts/alterProps.function.ts");





function updateExistingTagComponent(ownerTag, templater, subject, insertBefore) {
    let existingTag = subject.tag;
    const oldWrapper = existingTag.tagSupport.templater.wrapper;
    const newWrapper = templater.wrapper;
    let isSameTag = false;
    if (oldWrapper && newWrapper) {
        const oldFunction = oldWrapper.original;
        const newFunction = newWrapper.original;
        isSameTag = oldFunction === newFunction;
    }
    const oldTagSupport = existingTag.tagSupport;
    const oldGlobal = oldTagSupport.templater.global;
    // const placeholderElm = ownerTag.tagSupport.templater.global.placeholderElm
    const placeholderElm = oldGlobal.placeholder;
    if (placeholderElm) {
        if (!placeholderElm.parentNode) {
            throw new Error('stop here no subject parent node update existing tag');
        }
    }
    if (!isSameTag) {
        (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(oldTagSupport.templater.global.oldest, subject);
        return (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_1__.processSubjectComponent)(templater, subject, 
        // ??? - newly changed
        insertBefore, // oldInsertBefore,
        ownerTag, {
            forceElement: false,
            counts: { added: 0, removed: 0 },
        });
    }
    else {
        const newTagSupport = templater.tagSupport;
        const hasChanged = (0,_hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__.hasTagSupportChanged)(oldTagSupport, newTagSupport, templater);
        if (!hasChanged) {
            // if the new props are an object then implicitly since no change, the old props are an object
            const newProps = templater.props;
            if (newProps && typeof (newProps) === 'object') {
                // const newestTag = oldTagSupport.templater.global.newest
                // const oldProps = existingTag.tagSupport.propsConfig.latestCloned as Record<string,any> // newestTag.props as Record<string, any>
                syncFunctionProps(templater, existingTag, ownerTag, newProps);
            }
            return existingTag; // its the same tag component
        }
    }
    const oldestTag = templater.global.oldest; // oldTagSupport.oldest as Tag // existingTag
    const previous = templater.global.newest;
    if (!previous || !oldestTag) {
        throw new Error('how no previous or oldest nor newest?');
    }
    const newTag = (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_3__.renderTagSupport)(templater.tagSupport, false);
    existingTag = subject.tag;
    const newOldest = newTag.tagSupport.templater.global.oldest;
    const hasOldest = newOldest ? true : false;
    if (!hasOldest) {
        return buildNewTag(newTag, 
        // ??? newly changed
        insertBefore, // oldInsertBefore,
        oldTagSupport, subject);
    }
    if (newOldest && templater.children.value.length) {
        const oldKidsSub = newOldest.tagSupport.templater.children;
        oldKidsSub.set(templater.children.value);
    }
    // const newTag = tempResult.newest as Tag
    if (previous && !oldestTag) {
        throw new Error('bad elders');
    }
    // detect if both the function is the same and the return is the same
    const isLikeTag = isSameTag && previous.isLikeTag(newTag);
    if (previous && !oldestTag) {
        throw new Error('bad elders');
    }
    let oldest = oldTagSupport.templater.global.oldest;
    if (isLikeTag) {
        if (!newTag.tagSupport.templater.global.oldest) {
            throw new Error('maybe 6');
        }
        subject.tag = newTag;
        oldestTag.updateByTag(newTag); // the oldest tag has element references
        return newTag;
    }
    else {
        // Although function looked the same it returned a different html result
        if (isSameTag && existingTag) {
            (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(existingTag, subject);
            newTag.tagSupport.templater.global.context = {}; // do not share previous outputs
        }
        oldest = undefined;
    }
    if (!oldest) {
        buildNewTag(newTag, oldTagSupport.templater.global.insertBefore, oldTagSupport, subject);
    }
    oldTagSupport.templater.global.newest = newTag;
    return newTag;
}
function checkStateChanged(state) {
    return !state.newest.every(state => {
        const lastValue = state.lastValue;
        const nowValue = state.get();
        const matched = lastValue === nowValue;
        if (matched) {
            return true;
        }
        return false;
    });
}
function buildNewTag(newTag, oldInsertBefore, oldTagSupport, subject) {
    newTag.buildBeforeElement(oldInsertBefore, {
        forceElement: true,
        counts: { added: 0, removed: 0 },
    });
    newTag.tagSupport.templater.global.oldest = newTag;
    newTag.tagSupport.templater.global.newest = newTag;
    oldTagSupport.templater.global.oldest = newTag;
    oldTagSupport.templater.global.newest = newTag;
    subject.tag = newTag;
    return newTag;
}
function syncFunctionProps(templater, existingTag, ownerTag, newProps) {
    existingTag = existingTag.tagSupport.templater.global.newest;
    // const templater = existingTag.tagSupport.templater
    const priorProps = existingTag.tagSupport.propsConfig.latestCloned;
    const oldLatest = ownerTag.tagSupport.templater.global.newest;
    const ownerSupport = oldLatest.tagSupport;
    Object.entries(priorProps).forEach(([name, value]) => {
        if (!(value instanceof Function)) {
            return;
        }
        const newOriginal = value.original;
        // TODO: The code below maybe irrelevant
        const newCallback = newProps[name];
        const original = newCallback.original;
        if (original) {
            return; // already previously converted
        }
        // Currently, call self but over parent state changes, I may need to call a newer parent tag owner
        priorProps[name].toCall = (...args) => {
            return (0,_alterProps_function__WEBPACK_IMPORTED_MODULE_4__.callbackPropOwner)(newCallback, // value, // newOriginal,
            args, templater, ownerSupport);
        };
        return;
    });
}


/***/ }),

/***/ "../../taggedjs/main/ts/updateExistingValue.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/updateExistingValue.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingValue: () => (/* binding */ updateExistingValue)
/* harmony export */ });
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processTagArray */ "../../taggedjs/main/ts/processTagArray.ts");
/* harmony import */ var _updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateExistingTagComponent.function */ "../../taggedjs/main/ts/updateExistingTagComponent.function.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processRegularValue.function */ "../../taggedjs/main/ts/processRegularValue.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");
/* harmony import */ var _processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processSubjectComponent.function */ "../../taggedjs/main/ts/processSubjectComponent.function.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/bindSubjectCallback.function.ts");
/* harmony import */ var _processTag_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processTag.function */ "../../taggedjs/main/ts/processTag.function.ts");










function updateExistingValue(subject, value, ownerTag, insertBefore) {
    const subjectTag = subject;
    const isComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(value);
    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_5__.checkDestroyPrevious)(subject, value, insertBefore);
    // handle already seen tag components
    if (isComponent) {
        const templater = value;
        // When was something before component
        if (!subjectTag.tag) {
            (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_6__.processSubjectComponent)(templater, subjectTag, insertBefore, // oldInsertBefore as InsertBefore,
            ownerTag, {
                forceElement: true,
                counts: { added: 0, removed: 0 },
            });
            return subjectTag;
        }
        templater.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.TagSupport(
        // subjectTag.tag.tagSupport.ownerTagSupport,
        ownerTag.tagSupport, templater, subjectTag);
        (0,_updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_3__.updateExistingTagComponent)(ownerTag, templater, // latest value
        subjectTag, insertBefore);
        return subjectTag;
    }
    // was component but no longer
    const tag = subjectTag.tag;
    if (tag) {
        handleStillTag(tag, subject, value, ownerTag);
        return subjectTag;
    }
    // its another tag array
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(value)) {
        (0,_processTagArray__WEBPACK_IMPORTED_MODULE_2__.processTagArray)(subject, value, insertBefore, // oldInsertBefore as InsertBefore,
        ownerTag, { counts: {
                added: 0,
                removed: 0,
            } });
        return subject;
    }
    // now its a function
    if (value instanceof Function) {
        // const newSubject = getSubjectFunction(value, ownerTag)
        const bound = (0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_8__.bindSubjectCallback)(value, ownerTag);
        subject.set(bound);
        return subject;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(value)) {
        if (insertBefore.nodeName !== 'TEMPLATE') {
            throw new Error(`expected template - ${insertBefore.nodeName}`);
        }
        (0,_processTag_function__WEBPACK_IMPORTED_MODULE_9__.processTag)(value, subjectTag, insertBefore, ownerTag);
        return subjectTag;
    }
    // we have been given a subject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isSubjectInstance)(value)) {
        return value;
    }
    // This will cause all other values to render
    (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_4__.processRegularValue)(value, subject, 
    // ??? - changed to insertBefore for tag switching with template removal
    insertBefore // oldInsertBefore as InsertBefore,
    );
    return subjectTag;
}
function handleStillTag(existingTag, subject, value, ownerTag) {
    // TODO: We shouldn't need both of these
    const isSameTag = value && (0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_7__.isLikeTags)(existingTag, value);
    const isSameTag2 = value && value.getTemplate && existingTag.isLikeTag(value);
    const tag = value;
    if (!tag.tagSupport) {
        (0,_processTag_function__WEBPACK_IMPORTED_MODULE_9__.applyFakeTemplater)(tag, ownerTag, subject);
    }
    if (isSameTag) {
        existingTag.updateByTag(tag);
        return;
    }
    if (isSameTag || isSameTag2) {
        const subjectTag = subject;
        const global = existingTag.tagSupport.templater.global;
        const insertBefore = global.insertBefore;
        return (0,_processTag_function__WEBPACK_IMPORTED_MODULE_9__.processTag)(value, subjectTag, insertBefore, ownerTag);
    }
    return (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_4__.processRegularValue)(value, subject, subject.insertBefore);
}


/***/ }),

/***/ "../../taggedjs/main/ts/watch.function.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/watch.function.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _setLet_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLet.function */ "../../taggedjs/main/ts/setLet.function.ts");

/** When an item in watch array changes, callback function will be triggered */
function watch(currentValues, callback) {
    let previousValues = (0,_setLet_function__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [previousValues, previousValues = x]);
    if (previousValues === undefined) {
        callback(currentValues, previousValues);
        // const result = {currentValues, previousValues}
        previousValues = currentValues;
        return currentValues;
    }
    const allExact = currentValues.every((item, index) => item === previousValues[index]);
    if (allExact) {
        return currentValues;
    }
    callback(currentValues, previousValues);
    previousValues.length = 0;
    previousValues.push(...currentValues);
    return currentValues;
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dump: () => (/* binding */ Dump),
/* harmony export */   tagElement: () => (/* reexport safe */ taggedjs__WEBPACK_IMPORTED_MODULE_0__.tagElement)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs-dump */ "./node_modules/taggedjs-dump/js/index.js");
/* harmony import */ var _sampleData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampleData */ "./src/sampleData.ts");




const Dump = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let userJsonString = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)('')(x => [userJsonString, userJsonString = x]);
    // const userJson = JSON.parse(userJsonString)
    let badEval = false;
    let userJson;
    try {
        userJson = sandboxEval(userJsonString, {});
        userJsonString = JSON.stringify(userJson, null, 2);
    }
    catch (err) {
        badEval = true;
        try {
            JSON.parse(userJsonString);
        }
        catch (err) {
            userJson = Object.getOwnPropertyNames(err).reduce((a, key) => (a[key] = err[key]) && a || a, {});
        }
    }
    const change = (event) => {
        userJsonString = event.target.value;
    };
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <h3>🔭 TaggedJs Dump demo page</h3>
    
    <p>Use the textarea below to cast JSON into an interactive display</p>

    ${badEval && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div style="color:white;background-color:red;padding:.5em;"
      >Input data appears to be invalid</div>
    `}
    
    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:.5em;padding:.5em;">
      <textarea wrap="off" placeholder="paste json here"
        onchange=${change}
        style="min-width:400px;min-height:400px;flex:1"
      >${userJson === "" ? "" : userJsonString}</textarea>

      ${userJson === "" ? "" : (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <div style="flex:1;min-width:110px;width:100%;max-width:900px;background-color:rgba(255,255,255,.5);">
          ${(0,taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: userJson
    })}
        </div>
      `}
    </div>

    <br />

    <h3>Sample Dumps</h3>
    <hr />

    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:1em;">      
      <div style="max-width:900px">
        ${(0,taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: {
            test: {
                anotherOne: 22
            },
            arrayTest: [{
                    name: 'something',
                    location: { street: '4361' },
                }, {
                    name: 'in this',
                    location: { street: '2235' },
                }, {
                    name: 'world',
                    location: { street: '4785' },
                }]
        }
    })}
        <hr />
        ${(0,taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: _sampleData__WEBPACK_IMPORTED_MODULE_2__.stripeList
    })}
      </div>
    </div>
  `;
});
// execute script in private context
function sandboxEval(src, ctx) {
    if (!src) {
        return src;
    }
    ctx = new Proxy(ctx, { has: () => true });
    let func = (new Function("with(this) { return (" + src + ")}"));
    return func.call(ctx);
}

})();

var __webpack_exports__Dump = __webpack_exports__.Dump;
var __webpack_exports__tagElement = __webpack_exports__.tagElement;
export { __webpack_exports__Dump as Dump, __webpack_exports__tagElement as tagElement };

//# sourceMappingURL=bundle.js.map