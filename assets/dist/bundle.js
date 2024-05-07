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


const arrayDisplay = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ array, showLevels, showAll, showKids, columnNames, formatChange, toggleColumnDialog, allowMaximize, everySimpleValue, }) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    ${array.map((item, index) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${(0,_index__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: paramValueKeys(item, columnNames),
        showLevels,
        showAll,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
        onHeaderClick: toggleColumnDialog,
        allowMaximize,
        everySimpleValue,
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
showAll, showKids, toggleColumnDialog, columnNames, formatChange, allowMaximize, everySimpleValue, }) => {
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
        allowMaximize,
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




const arraysDisplay = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ showLevels, showAll, showKids, array, arrayView, formatChange, allowMaximize, everySimpleValue, }) => {
    const allColumnNames = array.length ? Object.keys(array[0]) : [];
    let columnNames = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.letState)(allColumnNames)(x => [columnNames, columnNames = x]);
    let showColumnDialog = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.letState)(false)(x => [showColumnDialog, showColumnDialog = x]);
    let uniqueId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.state)('columnDialog' + performance.now());
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
        formatChange, everySimpleValue,
    }) : (0,_arrayDisplay_tag__WEBPACK_IMPORTED_MODULE_3__.arrayDisplay)({
        array, showLevels, showAll, showKids,
        formatChange,
        columnNames,
        toggleColumnDialog,
        allowMaximize, everySimpleValue
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
    let mouseOverEditShow = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(false)(x => [mouseOverEditShow, mouseOverEditShow = x]);
    let edit = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(false)(x => [edit, edit = x]);
    let editFormula = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(undefined)(x => [editFormula, editFormula = x]);
    const formulas = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.state)([]);
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
    function toggle() {
        const index = columnNames.indexOf(name);
        if (index >= 0) {
            columnNames.splice(index, 1);
            return;
        }
        columnNames.push(name);
    }
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
    };
    const updateFormula = (formula, newFormula) => {
        formula.stringFormula = newFormula;
        formula.value = sandboxRunEval(newFormula, { array });
    };
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <a onclick=${toggle} style="cursor:pointer;">
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

/***/ "./node_modules/taggedjs-dump/js/dump.tag.js":
/*!***************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/dump.tag.js ***!
  \***************************************************/
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
key, value, showKids = false, showLevels = -1, showAll = false, format = 'flex', formatChange = x => format = x, isRootDump = true, onHeaderClick, allowMaximize, everySimpleValue, }) => {
    if (isRootDump && allowMaximize === undefined) {
        allowMaximize = true;
    }
    const isObject = () => value && value instanceof Object;
    const typing = value === null ? 'null' : typeof (value);
    let show = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(false)(x => [show, show = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setProp)(x => [format, format = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setProp)(x => [showAll, showAll = x]);
    let arrayView = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(undefined)(x => [arrayView, arrayView = x]);
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
                onHeaderClick,
                everySimpleValue,
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
            allowMaximize,
            everySimpleValue,
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
                allowMaximize,
                everySimpleValue,
            }))}
      </div>
    `;
    }
    /* IF 1: undefined ELSE goto simpleTemplate */
    if ([null, undefined].includes(value)) {
        return (0,_dumpSimple_tag__WEBPACK_IMPORTED_MODULE_2__.dumpSimple)({
            key: key,
            value: typing,
            onHeaderClick,
            everySimpleValue,
        });
    }
    /* IF 2: simple value ELSE goto objectTemplate */
    if (['boolean', 'number', 'string'].includes(typing)) {
        return (0,_dumpSimple_tag__WEBPACK_IMPORTED_MODULE_2__.dumpSimple)({ key: key, value, onHeaderClick, everySimpleValue });
    }
    return objectTemplate();
});
//# sourceMappingURL=dump.tag.js.map

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
showLevels, formatChange, allowMaximize, everySimpleValue, }) => {
    let showValue = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.letState)(undefined)(x => [showValue, showValue = x]);
    let arrayView = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.letState)(undefined)(x => [arrayView, arrayView = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.watch)([show], ([show]) => showValue = show);
    let maximize = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.letState)(false)(x => [maximize, maximize = x]);
    const maximizeId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.state)(() => 'maximize-dump-' + performance.now());
    const toggleMaximize = () => {
        maximize = !maximize;
        if (maximize) {
            document.getElementById(maximizeId).showModal();
        }
    };
    const minimize = () => document.getElementById(maximizeId).close();
    const getHeader = (allowMaximize) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
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
      ${allowMaximize && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
        &nbsp;<a onclick=${toggleMaximize}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `;
    const displayOptions = {
        showLevels, showAll, showKids,
        formatChange,
        array: value,
        arrayView: arrayView,
        allowMaximize,
        everySimpleValue,
    };
    const body = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    <!-- array displays wrap -->
    <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
      ${(0,_arraysDisplay_component__WEBPACK_IMPORTED_MODULE_0__.arraysDisplay)(displayOptions)}
    </div>
  `;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    ${getHeader(allowMaximize)}
    ${(showAll || showValue || showKids || (showValue == undefined && showLevels > 0)) && body}
  </div>

  <!-- maximize -->
  <dialog id=${maximizeId} class="dump-dialog" style="padding:0"
    onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
    ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
    ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
    ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
  >
    <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
      ${maximize && getHeader(false)}
    </div>
    
    ${maximize && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${(0,_arraysDisplay_component__WEBPACK_IMPORTED_MODULE_0__.arraysDisplay)({ ...displayOptions, allowMaximize: false })}
      </div>
    `}

    <div style="padding:.25em">
      <button type="button" onclick=${minimize} style="width:100%">🅧 close</button>
    </div>
  </dialog>

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
key, showKids, show, showLevels, value, showAll, onHeaderClick, formatChange, allowMaximize, everySimpleValue, }) => {
    let showLower = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(false)(x => [showLower, showLower = x]);
    let maximize = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(false)(x => [maximize, maximize = x]);
    const maximizeId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.state)(() => 'maximize-dump-' + performance.now());
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.watch)([show], ([show]) => showLower = show);
    const continueDump = !key || showKids || showLower || (showLower == undefined && showLevels > 0);
    const toggleMaximize = () => {
        maximize = !maximize;
        if (maximize) {
            document.getElementById(maximizeId).showModal();
        }
    };
    const minimize = () => document.getElementById(maximizeId).close();
    const getHead = (allowMaximize) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;" +
        (showLower ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
    >
      <a onclick=${() => showLower = !showLower}>
        <strong>${key}</strong>
        <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
          {${Object.keys(value).length}}
        </sup>
      </a>
      ${allowMaximize && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        &nbsp;<a onclick=${toggleMaximize}><span style="width:10px;height:10px;border:1px solid white;border-top-width:3px;display:inline-block;"></span></a>
      `}
    </div>
  `;
    const getDumpBody = (allowMaximize) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
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
        allowMaximize,
        everySimpleValue,
    })}
      `.key([key, value]))}
    </div>
  `;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${key && getHead(allowMaximize)}
        ${continueDump && getDumpBody(allowMaximize)}

        <!-- maximize -->
        <dialog id=${maximizeId} class="dump-dialog" style="padding:0"
          onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
          ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
          ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
          ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
        >
          <div style="padding:.25em" onmousedown="this.parentNode.draggable=true">
            ${maximize && getHead(false)}
          </div>
          
          ${maximize && getDumpBody(false)}

          <div style="padding:.25em">
            <button type="button" onclick=${minimize} style="width:100%">🅧 close</button>
          </div>
        </dialog>
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


function dumpSimple({ key, value, onHeaderClick, everySimpleValue }) {
    const isLinkValue = value.search && (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
    // const result = everySimpleValue && everySimpleValue(value, key)
    let displayValue;
    if (everySimpleValue) {
        displayValue = simpleValue({ value, everySimpleValue });
    }
    else {
        displayValue = isLinkValue ? linkValue(value) : simpleValue({ value });
    }
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${key && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${onHeaderClick && "pointer"}
          onclick=${onHeaderClick}
        >${key}</div>
      `}
      ${displayValue}
    </div>
  `;
}
const simpleValue = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ value, everySimpleValue }) => {
    const isLikeNull = [undefined, null, 'null'].includes(value);
    const number = value;
    const isLargeNumber = !isNaN(number) && number > 1000000000;
    const title = !isLargeNumber ? '' : getLargeNumberTitle(number);
    let downTime = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)(0)(x => [downTime, downTime = x]);
    const startMouseDown = () => {
        downTime = Date.now();
    };
    const markMouseUp = (event) => {
        if (Date.now() - downTime > 300) {
            event.preventDefault();
            event.stopPropagation();
            return true; // a manual drag copy is taking place
        }
        (0,_copyText_function__WEBPACK_IMPORTED_MODULE_1__.copyText)(value); // a regular click took place
    };
    let displayValue = value;
    if (everySimpleValue) {
        displayValue = everySimpleValue(value);
    }
    displayValue = displayValue === null && 'null' || displayValue === false && 'false' || displayValue === undefined && 'undefined' || displayValue;
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
    >${displayValue}</div>
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
/* harmony export */   dump: () => (/* reexport safe */ _dump_tag__WEBPACK_IMPORTED_MODULE_0__.dump)
/* harmony export */ });
/* harmony import */ var _dump_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dump.tag */ "./node_modules/taggedjs-dump/js/dump.tag.js");

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
const variablePrefix = '__tagvar';
const escapeVariable = '--' + variablePrefix + '--';
const escapeSearch = new RegExp(escapeVariable, 'g');
class Tag {
    strings;
    values;
    isTagClass = true;
    // present only when an array. Populated by Tag.key()
    memory = {};
    templater;
    constructor(strings, values) {
        this.strings = strings;
        this.values = values;
    }
    /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
    key(arrayValue) {
        this.memory.arrayValue = arrayValue;
        return this;
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
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _cloneValueArray_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloneValueArray.function */ "../../taggedjs/main/ts/cloneValueArray.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _destroy_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destroy.support */ "../../taggedjs/main/ts/destroy.support.ts");
/* harmony import */ var _elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elementDestroyCheck.function */ "../../taggedjs/main/ts/elementDestroyCheck.function.ts");
/* harmony import */ var _updateContextItem_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateContextItem.function */ "../../taggedjs/main/ts/updateContextItem.function.ts");
/* harmony import */ var _processNewValue_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processNewValue.function */ "../../taggedjs/main/ts/processNewValue.function.ts");
/* harmony import */ var _setTagPlaceholder_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setTagPlaceholder.function */ "../../taggedjs/main/ts/setTagPlaceholder.function.ts");
/* harmony import */ var _interpolations_interpolateElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interpolations/interpolateElement */ "../../taggedjs/main/ts/interpolations/interpolateElement.ts");
/* harmony import */ var _interpolations_interpolateTemplate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interpolations/interpolateTemplate */ "../../taggedjs/main/ts/interpolations/interpolateTemplate.ts");
/* harmony import */ var _afterInterpolateElement_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./afterInterpolateElement.function */ "../../taggedjs/main/ts/afterInterpolateElement.function.ts");
/* harmony import */ var _renderSubjectComponent_function__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./renderSubjectComponent.function */ "../../taggedjs/main/ts/renderSubjectComponent.function.ts");















const prefixSearch = new RegExp(_Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix, 'g');
/** used only for apps, otherwise use TagSupport */
class BaseTagSupport {
    templater;
    subject;
    isApp = true;
    appElement; // only seen on this.getAppElement().appElement
    propsConfig;
    // stays with current render
    memory = {
        state: [],
    };
    // travels with all rerenderings
    global = {
        context: {}, // populated after reading interpolated.values array converted to an object {variable0, variable:1}
        providers: [],
        /** Indicator of re-rending. Saves from double rending something already rendered */
        renderCount: 0,
        deleted: false,
        subscriptions: []
    };
    constructor(templater, subject) {
        this.templater = templater;
        this.subject = subject;
        const children = templater.children; // children tags passed in as arguments
        const kidValue = children.value;
        const props = templater.props; // natural props
        const latestCloned = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_1__.deepClone)(props);
        this.propsConfig = {
            latest: props,
            latestCloned, // assume its HTML children and then detect
            lastClonedKidValues: kidValue.map(kid => {
                const cloneValues = (0,_cloneValueArray_function__WEBPACK_IMPORTED_MODULE_3__.cloneValueArray)(kid.values);
                return cloneValues;
            })
        };
        // if the latest props are not HTML children, then clone the props for later render cycles to compare
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagTemplater)(props) && !(0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagClass)(props)) {
            this.propsConfig.latestCloned = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_1__.deepClone)(latestCloned);
        }
    }
}
class TagSupport extends BaseTagSupport {
    templater;
    ownerTagSupport;
    subject;
    version;
    isApp = false;
    hasLiveElements = false;
    childTags = []; // tags on me
    clones = []; // elements on document. Needed at destroy process to know what to destroy
    // may not be needed anymore?
    strings;
    values;
    lastTemplateString = undefined; // used to compare templates for updates
    constructor(templater, // at runtime rendering of a tag, it needs to be married to a new TagSupport()
    ownerTagSupport, subject, version = 0) {
        super(templater, subject);
        this.templater = templater;
        this.ownerTagSupport = ownerTagSupport;
        this.subject = subject;
        this.version = version;
    }
    destroy(options = {
        stagger: 0,
        byParent: false, // Only destroy clones of direct children
    }) {
        const global = this.global;
        const subject = this.subject;
        // put back down the template tag
        const insertBefore = global.insertBefore;
        if (insertBefore.nodeName === 'TEMPLATE') {
            const placeholder = global.placeholder;
            if (placeholder && !('arrayValue' in this.memory)) {
                if (!options.byParent) {
                    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__.restoreTagMarker)(this);
                }
            }
        }
        // the isComponent check maybe able to be removed
        const isComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagComponent)(this.templater) ? true : false;
        if (isComponent) {
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_5__.runBeforeDestroy)(this, this);
        }
        const childTags = options.byParent ? [] : (0,_destroy_support__WEBPACK_IMPORTED_MODULE_6__.getChildTagsToDestroy)(this.childTags);
        // signify that no further event rendering should take place by making logic think a render occurred during event
        // signify immediately child has been deleted (looked for during event processing)
        childTags.forEach(child => {
            const subGlobal = child.global;
            delete subGlobal.newest;
            subGlobal.deleted = true;
            // delete subGlobal.placeholder
            // restoreTagMarker(child)
        });
        // data reset
        delete global.placeholder;
        delete subject.tagSupport;
        global.context = {};
        delete global.oldest;
        delete global.newest;
        global.deleted = true;
        this.childTags.length = 0;
        this.hasLiveElements = false;
        delete subject.tagSupport;
        this.destroySubscriptions();
        let mainPromise;
        if (this.ownerTagSupport) {
            this.ownerTagSupport.childTags = this.ownerTagSupport.childTags.filter(child => child !== this);
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
        const global = this.global;
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
            promise = (0,_elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_7__.elementDestroyCheck)(customElm, stagger);
        }
        const next = () => {
            clone.parentNode?.removeChild(clone);
            const ownerSupport = this.ownerTagSupport;
            if (ownerSupport) {
                // Sometimes my clones were first registered to my owner, remove them from owner
                ownerSupport.clones = ownerSupport.clones.filter(compareClone => compareClone !== clone);
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
    update() {
        return this.updateContext(this.global.context);
    }
    updateBy(tagSupport) {
        const tempTag = tagSupport.templater.tag;
        this.updateConfig(tempTag.strings, tempTag.values);
    }
    updateConfig(strings, values) {
        this.strings = strings;
        this.updateValues(values);
    }
    updateValues(values) {
        this.values = values;
        return this.updateContext(this.global.context);
    }
    updateContext(context) {
        const thisTag = this.templater.tag;
        const strings = this.strings || thisTag.strings;
        const values = this.values || thisTag.values;
        strings.map((_string, index) => {
            const variableName = _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + index;
            const hasValue = values.length > index;
            const value = values[index];
            // is something already there?
            const exists = variableName in context;
            if (exists) {
                return (0,_updateContextItem_function__WEBPACK_IMPORTED_MODULE_8__.updateContextItem)(context, variableName, value);
            }
            if (!hasValue) {
                return;
            }
            // 🆕 First time values below
            context[variableName] = (0,_processNewValue_function__WEBPACK_IMPORTED_MODULE_9__.processNewValue)(hasValue, value, this);
        });
        return context;
    }
    /** Function that kicks off actually putting tags down as HTML elements */
    buildBeforeElement(insertBefore, options = {
        forceElement: false,
        counts: { added: 0, removed: 0 },
    }) {
        const subject = this.subject;
        const global = this.global;
        global.insertBefore = insertBefore;
        if (!global.placeholder) {
            (0,_setTagPlaceholder_function__WEBPACK_IMPORTED_MODULE_10__.setTagPlaceholder)(global);
        }
        const placeholderElm = global.placeholder;
        global.oldest = this;
        global.newest = this;
        subject.tagSupport = this;
        this.hasLiveElements = true;
        // remove old clones
        if (this.clones.length) {
            // this.destroyClones()
            // this.clones.forEach(clone => this.checkCloneRemoval(clone, 0))
        }
        global.insertBefore = insertBefore;
        const context = this.update();
        const template = this.getTemplate();
        const isForceElement = options.forceElement;
        const elementContainer = document.createElement('div');
        elementContainer.id = 'tag-temp-holder';
        // render content with a first child that we can know is our first element
        elementContainer.innerHTML = `<template id="temp-template-tag-wrap">${template.string}</template>`;
        // Search/replace innerHTML variables but don't interpolate tag components just yet
        const { tagComponents } = (0,_interpolations_interpolateElement__WEBPACK_IMPORTED_MODULE_11__.interpolateElement)(elementContainer, context, template, this, // ownerSupport,
        {
            forceElement: options.forceElement,
            counts: options.counts
        });
        (0,_afterInterpolateElement_function__WEBPACK_IMPORTED_MODULE_13__.afterInterpolateElement)(elementContainer, placeholderElm, this, // ownerSupport
        context, options);
        // Any tag components that were found should be processed AFTER the owner processes its elements. Avoid double processing of elements attributes like (oninit)=${}
        tagComponents.forEach(tagComponent => {
            (0,_interpolations_interpolateTemplate__WEBPACK_IMPORTED_MODULE_12__.subscribeToTemplate)(tagComponent.insertBefore, tagComponent.subject, tagComponent.ownerSupport, options.counts, { isForceElement });
            (0,_afterInterpolateElement_function__WEBPACK_IMPORTED_MODULE_13__.afterInterpolateElement)(elementContainer, tagComponent.insertBefore, tagComponent.ownerSupport, context, options);
        });
    }
    getTemplate() {
        const thisTag = this.templater.tag;
        const strings = this.strings || thisTag.strings;
        const values = this.values || thisTag.values;
        const string = strings.map((string, index) => {
            const safeString = string.replace(prefixSearch, _Tag_class__WEBPACK_IMPORTED_MODULE_0__.escapeVariable);
            const endString = safeString + (values.length > index ? `{${_Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix}${index}}` : '');
            const trimString = endString.replace(/>\s*/g, '>').replace(/\s*</g, '<');
            return trimString;
        }).join('');
        const interpolation = (0,_interpolations_interpolateElement__WEBPACK_IMPORTED_MODULE_11__.interpolateString)(string);
        this.lastTemplateString = interpolation.string;
        return {
            interpolation,
            string: interpolation.string,
            strings,
            values,
            context: this.global.context || {},
        };
    }
    /** Used during HMR only where static content itself could have been edited */
    async rebuild() {
        delete this.strings; // seek the templater strings instead now
        delete this.values; // seek the templater strings instead now
        restoreTagMarkers(this);
        const newSupport = (0,_renderSubjectComponent_function__WEBPACK_IMPORTED_MODULE_14__.renderSubjectComponent)(this.subject, this, this.ownerTagSupport);
        await this.destroy();
        newSupport.buildBeforeElement(this.global.insertBefore, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
        return newSupport;
    }
    getAppElement() {
        let tag = this;
        while (tag.ownerTagSupport) {
            tag = tag.ownerTagSupport;
        }
        return tag;
    }
}
function restoreTagMarkers(support) {
    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__.restoreTagMarker)(support);
    support.childTags.forEach(childTag => restoreTagMarkers(childTag.global.oldest));
}


/***/ }),

/***/ "../../taggedjs/main/ts/TemplaterResult.class.ts":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/ts/TemplaterResult.class.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplaterResult: () => (/* binding */ TemplaterResult)
/* harmony export */ });
class TemplaterResult {
    props;
    children;
    isTemplater = true;
    tagged;
    wrapper;
    tag;
    constructor(props, children) {
        this.props = props;
        this.children = children;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/afterInterpolateElement.function.ts":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/ts/afterInterpolateElement.function.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterInterpolateElement: () => (/* binding */ afterInterpolateElement)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "../../taggedjs/main/ts/render.ts");
/* harmony import */ var _interpolations_interpolateTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolations/interpolateTemplate */ "../../taggedjs/main/ts/interpolations/interpolateTemplate.ts");


function afterInterpolateElement(container, insertBefore, tagSupport, 
// preClones: Clones,
context, options) {
    const clones = (0,_render__WEBPACK_IMPORTED_MODULE_0__.buildClones)(container, insertBefore);
    if (!clones.length) {
        return clones;
    }
    clones.forEach(clone => (0,_interpolations_interpolateTemplate__WEBPACK_IMPORTED_MODULE_1__.afterElmBuild)(clone, options, context, tagSupport));
    tagSupport.clones.push(...clones);
    return clones;
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
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "../../taggedjs/main/ts/state/index.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");





/* Used to rewrite props that are functions. When they are called it should cause parent rendering */
function alterProps(props, ownerSupport) {
    const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTag)(props);
    const watchProps = isPropTag ? 0 : props;
    const newProps = resetFunctionProps(watchProps, ownerSupport);
    return newProps;
}
function resetFunctionProps(props, ownerSupport) {
    if (typeof (props) !== 'object' || !ownerSupport) {
        return props;
    }
    const newProps = props;
    // BELOW: Do not clone because if first argument is object, the memory ref back is lost
    // const newProps = {...props} 
    Object.entries(newProps).forEach(([name, value]) => {
        if (value instanceof Function) {
            const toCall = newProps[name].toCall;
            if (toCall) {
                return; // already previously converted
            }
            newProps[name] = (...args) => {
                return newProps[name].toCall(...args); // what gets called can switch over parent state changes
            };
            // Currently, call self but over parent state changes, I may need to call a newer parent tag owner
            newProps[name].toCall = (...args) => {
                return callbackPropOwner(value, args, ownerSupport);
            };
            newProps[name].original = value;
            return;
        }
    });
    return newProps;
}
function callbackPropOwner(toCall, callWith, ownerSupport) {
    // const renderCount = ownerSupport.global.renderCount
    const cycle = (0,_tagRunner__WEBPACK_IMPORTED_MODULE_4__.isInCycle)();
    const result = toCall(...callWith);
    const run = () => {
        const lastestOwner = ownerSupport.global.newest;
        if (cycle) {
            // appears a prop function was called sync/immediately so lets see if owner changed state
            const allMatched = lastestOwner.memory.state.every(state => {
                const lastValue = state.lastValue;
                const get = state.get();
                const equal = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)((0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(lastValue), get);
                return equal;
            });
            if (allMatched) {
                return result; // owner did not change
            }
        }
        const newest = (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__.renderTagSupport)(lastestOwner, true);
        lastestOwner.global.newest = newest;
        return result;
    };
    if (!cycle) {
        return run();
    }
    _state__WEBPACK_IMPORTED_MODULE_3__.setUse.memory.tagClosed$.toCallback(run);
    return result;
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
        wasArray.forEach(({ tagSupport }) => destroyArrayTag(tagSupport, { added: 0, removed: 0 }));
        return 'array';
    }
    const tagSubject = subject;
    const lastSupport = tagSubject.tagSupport;
    // no longer tag or component?
    if (lastSupport) {
        const isValueTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTag)(newValue);
        const isSubjectTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTag)(subject.value);
        if (isSubjectTag && isValueTag) {
            const newTag = newValue;
            // its a different tag now
            if (!(0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__.isLikeTags)(newTag, lastSupport)) {
                // put template back down
                restoreTagMarker(lastSupport);
                (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(lastSupport, tagSubject);
                return 2;
            }
            return false;
        }
        const isValueTagComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(newValue);
        if (isValueTagComponent) {
            return false; // its still a tag component
        }
        // put template back down
        restoreTagMarker(lastSupport);
        // destroy old component, value is not a component
        (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(lastSupport, tagSubject);
        return 'different-tag';
    }
    const displaySubject = subject;
    const hasLastValue = 'lastValue' in displaySubject;
    const lastValue = displaySubject.lastValue; // TODO: we maybe able to use displaySubject.value and remove concept of lastValue
    // was simple value but now something bigger
    if (hasLastValue && lastValue !== newValue) {
        destroySimpleValue(insertBefore, displaySubject);
        return 'changed-simple-value';
    }
    return false;
}
function destroyArrayTag(tagSupport, counts) {
    (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagSupportPast)(tagSupport);
    tagSupport.destroy({
        stagger: counts.removed++,
    });
    const insertBefore = tagSupport.global.insertBefore;
    const parentNode = insertBefore.parentNode;
    parentNode.removeChild(insertBefore);
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
function restoreTagMarker(lastSupport) {
    const insertBefore = lastSupport.global.insertBefore;
    const global = lastSupport.global;
    const placeholderElm = global.placeholder;
    if (placeholderElm) {
        (0,_insertAfter_function__WEBPACK_IMPORTED_MODULE_3__.insertAfter)(insertBefore, placeholderElm);
        delete global.placeholder;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/cloneValueArray.function.ts":
/*!**********************************************************!*\
  !*** ../../taggedjs/main/ts/cloneValueArray.function.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneValueArray: () => (/* binding */ cloneValueArray)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");


function cloneValueArray(values) {
    return values.map((value) => {
        const tag = value;
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(value)) {
            const tagComponent = value;
            return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(tagComponent.props);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagClass)(tag) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagTemplater)(tag)) {
            return cloneValueArray(tag.values);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(tag)) {
            return cloneValueArray(tag);
        }
        return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(value);
    });
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
    const directEqual = obj1 === obj2;
    if (directEqual || isSameFunctions(obj1, obj2)) {
        return true;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj1)) {
        return true;
    }
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        // both are dates and were already determined not the same
        if (obj1 instanceof Date && obj2 instanceof Date) {
            return obj1.getTime() === obj2.getTime();
        }
        // Register the cloned object to avoid cyclic references
        visited.set(obj1, 0);
        // Check if obj1 and obj2 are both arrays
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            return isArrayDeepEqual(obj1, obj2, visited);
        }
        else if (Array.isArray(obj1) || Array.isArray(obj2)) {
            // One is an array, and the other is not
            return false;
        }
        return isObjectDeepEqual(obj1, obj2, visited);
    }
    return false;
}
function isObjectDeepEqual(obj1, obj2, visited) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length === 0 && keys2.length === 0) {
        return true;
    }
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const keyFound = keys2.includes(key);
        if (!keyFound || !isDeepEqual(obj1[key], obj2[key], visited)) {
            return false;
        }
    }
    return true;
}
function isArrayDeepEqual(obj1, obj2, visited) {
    if (obj1.length !== obj2.length) {
        return false;
    }
    for (let i = 0; i < obj1.length; i++) {
        if (!isDeepEqual(obj1[i], obj2[i], visited)) {
            return false;
        }
    }
    return true;
}
function isSameFunctions(fn0, fn1) {
    const bothFunction = fn0 instanceof Function && fn1 instanceof Function;
    return bothFunction && fn0.toString() === fn1.toString();
}


/***/ }),

/***/ "../../taggedjs/main/ts/destroy.support.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/destroy.support.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChildTagsToDestroy: () => (/* binding */ getChildTagsToDestroy)
/* harmony export */ });
function getChildTagsToDestroy(childTags, allTags = []) {
    for (let index = childTags.length - 1; index >= 0; --index) {
        const cTag = childTags[index];
        allTags.push(cTag);
        childTags.splice(index, 1);
        getChildTagsToDestroy(cTag.childTags, allTags);
    }
    return allTags;
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
function destroyTagMemory(oldTagSupport, subject) {
    // must destroy oldest which is tag with elements on stage
    const oldest = oldTagSupport.global.oldest;
    oldest.destroy();
    destroyTagSupportPast(oldTagSupport);
    oldTagSupport.global.context = {};
}
function destroyTagSupportPast(oldTagSupport) {
    delete oldTagSupport.global.oldest;
    delete oldTagSupport.global.newest;
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

/***/ "../../taggedjs/main/ts/errors.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/errors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* binding */ ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* binding */ StateMismatchError),
/* harmony export */   SyncCallbackError: () => (/* binding */ SyncCallbackError),
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
class SyncCallbackError extends TagError {
    constructor(message, details) {
        super(message, 'sync-callback-error', details);
        this.name = SyncCallbackError.name;
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
/* harmony export */   ArrayNoKeyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_2__.ArrayNoKeyError),
/* harmony export */   BaseTagSupport: () => (/* reexport safe */ _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__.BaseTagSupport),
/* harmony export */   StateMismatchError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_2__.StateMismatchError),
/* harmony export */   Subject: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.Subject),
/* harmony export */   SyncCallbackError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_2__.SyncCallbackError),
/* harmony export */   Tag: () => (/* reexport safe */ _Tag_class__WEBPACK_IMPORTED_MODULE_10__.Tag),
/* harmony export */   TagError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_2__.TagError),
/* harmony export */   TagSupport: () => (/* reexport safe */ _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__.TagSupport),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.ValueSubject),
/* harmony export */   callbackMaker: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.callbackMaker),
/* harmony export */   combineLatest: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.combineLatest),
/* harmony export */   hmr: () => (/* binding */ hmr),
/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   interpolateElement: () => (/* reexport safe */ _interpolations_interpolateElement__WEBPACK_IMPORTED_MODULE_8__.interpolateElement),
/* harmony export */   interpolateString: () => (/* reexport safe */ _interpolations_interpolateElement__WEBPACK_IMPORTED_MODULE_8__.interpolateString),
/* harmony export */   isSubjectInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_3__.isSubjectInstance),
/* harmony export */   isTag: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_3__.isTag),
/* harmony export */   isTagArray: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagArray),
/* harmony export */   isTagClass: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagClass),
/* harmony export */   isTagComponent: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagComponent),
/* harmony export */   isTagTemplater: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagTemplater),
/* harmony export */   letState: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.letState),
/* harmony export */   onDestroy: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.onDestroy),
/* harmony export */   onInit: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.onInit),
/* harmony export */   providers: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.providers),
/* harmony export */   renderTagSupport: () => (/* reexport safe */ _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_12__.renderTagSupport),
/* harmony export */   renderWithSupport: () => (/* reexport safe */ _renderWithSupport_function__WEBPACK_IMPORTED_MODULE_13__.renderWithSupport),
/* harmony export */   runBeforeRender: () => (/* reexport safe */ _tagRunner__WEBPACK_IMPORTED_MODULE_11__.runBeforeRender),
/* harmony export */   setProp: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.setProp),
/* harmony export */   setUse: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.setUse),
/* harmony export */   state: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.state),
/* harmony export */   tag: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_0__.tag),
/* harmony export */   tagElement: () => (/* reexport safe */ _tagElement__WEBPACK_IMPORTED_MODULE_9__.tagElement),
/* harmony export */   tags: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_0__.tags),
/* harmony export */   watch: () => (/* reexport safe */ _state_index__WEBPACK_IMPORTED_MODULE_4__.watch),
/* harmony export */   willCallback: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.willCallback),
/* harmony export */   willPromise: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.willPromise),
/* harmony export */   willSubscribe: () => (/* reexport safe */ _subject_index__WEBPACK_IMPORTED_MODULE_5__.willSubscribe)
/* harmony export */ });
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag */ "../../taggedjs/main/ts/tag.ts");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ "../../taggedjs/main/ts/html.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/index */ "../../taggedjs/main/ts/state/index.ts");
/* harmony import */ var _subject_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject/index */ "../../taggedjs/main/ts/subject/index.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _ElementTargetEvent_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementTargetEvent.interface */ "../../taggedjs/main/ts/ElementTargetEvent.interface.ts");
/* harmony import */ var _interpolations_interpolateElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interpolations/interpolateElement */ "../../taggedjs/main/ts/interpolations/interpolateElement.ts");
/* harmony import */ var _tagElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tagElement */ "../../taggedjs/main/ts/tagElement.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");
/* harmony import */ var _renderWithSupport_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./renderWithSupport.function */ "../../taggedjs/main/ts/renderWithSupport.function.ts");

















const hmr = {
    tagElement: _tagElement__WEBPACK_IMPORTED_MODULE_9__.tagElement, renderWithSupport: _renderWithSupport_function__WEBPACK_IMPORTED_MODULE_13__.renderWithSupport, renderTagSupport: _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_12__.renderTagSupport,
};


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

/***/ "../../taggedjs/main/ts/interpolations/bindSubjectCallback.function.ts":
/*!*****************************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/bindSubjectCallback.function.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindSubjectCallback: () => (/* binding */ bindSubjectCallback),
/* harmony export */   runTagCallback: () => (/* binding */ runTagCallback)
/* harmony export */ });
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");
/** File largely responsible for reacting to element events, such as onclick */

function bindSubjectCallback(value, tagSupport) {
    // Is this children? No override needed
    if (value.isChildOverride) {
        return value;
    }
    const subjectFunction = (element, args) => runTagCallback(value, tagSupport, element, args);
    // link back to original. Mostly used for <div oninit ondestroy> animations
    subjectFunction.tagFunction = value;
    return subjectFunction;
}
function runTagCallback(value, tagSupport, bindTo, args) {
    const renderCount = tagSupport.global.renderCount;
    const method = value.bind(bindTo);
    const callbackResult = method(...args);
    const sameRenderCount = renderCount === tagSupport.global.renderCount;
    // already rendered OR tag was deleted before event processing
    if (!sameRenderCount || tagSupport.global.deleted) {
        if (callbackResult instanceof Promise) {
            return callbackResult.then(() => {
                return 'promise-no-data-ever'; // tag was deleted during event processing
            });
        }
        return 'no-data-ever'; // already rendered
    }
    const newest = (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_0__.renderTagSupport)(tagSupport.global.newest, true);
    tagSupport.global.newest = newest;
    if (callbackResult instanceof Promise) {
        return callbackResult.then(() => {
            if (tagSupport.global.deleted) {
                return 'promise-no-data-ever'; // tag was deleted during event processing
            }
            const newest = (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_0__.renderTagSupport)(tagSupport.global.newest, true);
            tagSupport.global.newest = newest;
            return 'promise-no-data-ever';
        });
    }
    // Caller always expects a Promise
    return 'no-data-ever';
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations/elementInitCheck.ts":
/*!*****************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/elementInitCheck.ts ***!
  \*****************************************************************/
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

/***/ "../../taggedjs/main/ts/interpolations/inputAttribute.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/inputAttribute.ts ***!
  \***************************************************************/
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

/***/ "../../taggedjs/main/ts/interpolations/interpolateAttributes.ts":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/interpolateAttributes.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateAttributes: () => (/* binding */ interpolateAttributes)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function */ "../../taggedjs/main/ts/interpolations/processAttribute.function.ts");

function howToSetAttribute(element, name, value) {
    element.setAttribute(name, value);
}
function howToSetInputValue(element, name, value) {
    /*
    if((element as any)[name] === value) {
      return // its already the value we are setting
    }
    */
    element[name] = value;
}
function interpolateAttributes(child, scope, ownerSupport) {
    const attrNames = child.getAttributeNames();
    let howToSet = howToSetAttribute;
    attrNames.forEach(attrName => {
        if (child.nodeName === 'INPUT' && attrName === 'value') {
            howToSet = howToSetInputValue;
        }
        const value = child.getAttribute(attrName);
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)(attrName, value, child, scope, ownerSupport, howToSet);
        howToSet = howToSetAttribute; // put back
    });
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations/interpolateContentTemplates.ts":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/interpolateContentTemplates.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateContentTemplates: () => (/* binding */ interpolateContentTemplates)
/* harmony export */ });
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateTemplate */ "../../taggedjs/main/ts/interpolations/interpolateTemplate.ts");

function interpolateContentTemplates(element, context, tagSupport, options, children) {
    if (!children || element.tagName === 'TEMPLATE') {
        return { clones: [], tagComponents: [] }; // done
    }
    // counting for animation stagger computing
    const counts = options.counts;
    const clones = [];
    const tagComponents = [];
    const childArray = new Array(...children);
    childArray.forEach(child => {
        const { clones: nextClones, tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(child, context, tagSupport, counts, options);
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
                    const { tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(subChild, context, tagSupport, counts, options);
                    if (tagComponent) {
                        tagComponents.push(tagComponent);
                    }
                }
                const { clones: nextClones, tagComponents: nextTagComponent } = interpolateContentTemplates(subChild, context, tagSupport, options, subChild.children);
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

/***/ "../../taggedjs/main/ts/interpolations/interpolateElement.ts":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/interpolateElement.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateElement: () => (/* binding */ interpolateElement),
/* harmony export */   interpolateString: () => (/* binding */ interpolateString)
/* harmony export */ });
/* harmony import */ var _interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateAttributes */ "../../taggedjs/main/ts/interpolations/interpolateAttributes.ts");
/* harmony import */ var _interpolations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolations */ "../../taggedjs/main/ts/interpolations/interpolations.ts");
/* harmony import */ var _interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolateContentTemplates */ "../../taggedjs/main/ts/interpolations/interpolateContentTemplates.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");




/** Review elements within an element */
function interpolateElement(container, // element containing innerHTML to review interpolations
context, // variables used to evaluate
interpolatedTemplates, ownerSupport, options) {
    const clones = [];
    const tagComponents = [];
    const result = interpolatedTemplates.interpolation;
    const template = container.children[0];
    const children = template.content.children;
    if (result.keys.length) {
        const { clones: nextClones, tagComponents: nextTagComponents } = (0,_interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__.interpolateContentTemplates)(container, context, ownerSupport, options, children);
        clones.push(...nextClones);
        tagComponents.push(...nextTagComponents);
    }
    (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(container, context, ownerSupport);
    processChildrenAttributes(children, context, ownerSupport);
    return { clones, tagComponents };
}
function processChildrenAttributes(children, context, ownerSupport) {
    new Array(...children).forEach(child => {
        (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(child, context, ownerSupport);
        if (child.children) {
            processChildrenAttributes(child.children, context, ownerSupport);
        }
    });
}
function interpolateString(string) {
    const result = (0,_interpolations__WEBPACK_IMPORTED_MODULE_1__.interpolateToTemplates)(string);
    result.string = result.string.replace(_Tag_class__WEBPACK_IMPORTED_MODULE_3__.escapeSearch, _Tag_class__WEBPACK_IMPORTED_MODULE_3__.variablePrefix);
    return result;
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations/interpolateTemplate.ts":
/*!********************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/interpolateTemplate.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterElmBuild: () => (/* binding */ afterElmBuild),
/* harmony export */   interpolateTemplate: () => (/* binding */ interpolateTemplate),
/* harmony export */   subscribeToTemplate: () => (/* binding */ subscribeToTemplate)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _elementInitCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementInitCheck */ "../../taggedjs/main/ts/interpolations/elementInitCheck.ts");
/* harmony import */ var _processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../processSubjectValue.function */ "../../taggedjs/main/ts/processSubjectValue.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scanTextAreaValue.function */ "../../taggedjs/main/ts/interpolations/scanTextAreaValue.function.ts");
/* harmony import */ var _updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../updateExistingValue.function */ "../../taggedjs/main/ts/updateExistingValue.function.ts");






function interpolateTemplate(insertBefore, // <template end interpolate /> (will be removed)
context, // variable scope of {`__tagvar${index}`:'x'}
ownerSupport, // Tag class
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
                ownerSupport,
                subject: existingSubject,
                insertBefore
            }
        };
    }
    let isForceElement = options.forceElement;
    subscribeToTemplate(insertBefore, existingSubject, ownerSupport, counts, { isForceElement });
    return { clones };
}
function subscribeToTemplate(insertBefore, subject, ownerSupport, counts, // used for animation stagger computing
{ isForceElement }) {
    let called = false;
    const callback = (value) => {
        if (called) {
            (0,_updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__.updateExistingValue)(subject, value, ownerSupport, insertBefore);
            return;
        }
        const templater = value;
        (0,_processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__.processSubjectValue)(templater, subject, insertBefore, ownerSupport, {
            counts: { ...counts },
            forceElement: isForceElement,
        });
        if (isForceElement) {
            isForceElement = false; // only can happen once
        }
        called = true;
    };
    const sub = subject.subscribe(callback);
    ownerSupport.global.subscriptions.push(sub);
}
function afterElmBuild(elm, options, context, ownerSupport) {
    if (!elm.getAttribute) {
        return;
    }
    const tagName = elm.nodeName; // elm.tagName
    if (tagName === 'TEXTAREA') {
        (0,_scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__.scanTextAreaValue)(elm, context, ownerSupport);
    }
    let diff = options.counts.added;
    diff = (0,_elementInitCheck__WEBPACK_IMPORTED_MODULE_1__.elementInitCheck)(elm, options.counts) - diff;
    if (elm.children) {
        new Array(...elm.children).forEach((child, index) => {
            const subOptions = {
                ...options,
                counts: options.counts,
            };
            return afterElmBuild(child, subOptions, context, ownerSupport);
        });
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations/interpolations.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/interpolations.ts ***!
  \***************************************************************/
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
        keys.push(id);
        return `<template interpolate end id="${id}"></template>`;
    });
    return { string, keys };
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations/processAttribute.function.ts":
/*!**************************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/processAttribute.function.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processAttribute: () => (/* binding */ processAttribute)
/* harmony export */ });
/* harmony import */ var _inputAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputAttribute */ "../../taggedjs/main/ts/interpolations/inputAttribute.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/interpolations/bindSubjectCallback.function.ts");



const startRegX = /^\s*{__tagvar/;
const endRegX = /}\s*$/;
function isTagVar(value) {
    return value && value.search(startRegX) >= 0 && value.search(endRegX) >= 0;
}
function processAttribute(attrName, value, child, scope, ownerSupport, howToSet) {
    if (isTagVar(value)) {
        return processScopedNameValueAttr(attrName, value, child, scope, ownerSupport, howToSet);
    }
    if (isTagVar(attrName)) {
        const contextValueSubject = getContextValueByVarString(scope, attrName);
        let lastValue;
        // the above callback gets called immediately since its a ValueSubject()
        const sub = contextValueSubject.subscribe((value) => {
            processNameOnlyAttr(value, lastValue, child, ownerSupport, howToSet);
            lastValue = value;
        });
        ownerSupport.global.subscriptions.push(sub); // this is where unsubscribe is picked up
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
child, scope, ownerSupport, howToSet) {
    // get the code inside the brackets like "variable0" or "{variable0}"
    const result = getContextValueByVarString(scope, value);
    return processNameValueAttr(attrName, result, child, ownerSupport, howToSet);
}
function getContextValueByVarString(scope, value) {
    const code = value.replace('{', '').split('').reverse().join('').replace('}', '').split('').reverse().join('');
    return scope[code];
}
function processNameOnlyAttr(attrValue, lastValue, child, ownerSupport, howToSet) {
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
        processNameValueAttr(attrValue, '', child, ownerSupport, howToSet);
        return;
    }
    if (attrValue instanceof Object) {
        Object.entries(attrValue).forEach(([name, value]) => processNameValueAttr(name, value, child, ownerSupport, howToSet));
        return;
    }
}
function processNameValueAttr(attrName, result, child, ownerSupport, howToSet) {
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
                newAttrValue = (0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_2__.bindSubjectCallback)(newAttrValue, ownerSupport);
            }
            return processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet);
        };
        // 🗞️ Subscribe. Above callback called immediately since its a ValueSubject()
        const sub = result.subscribe(callback);
        // Record subscription for later unsubscribe when element destroyed
        ownerSupport.global.subscriptions.push(sub);
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

/***/ "../../taggedjs/main/ts/interpolations/scanTextAreaValue.function.ts":
/*!***************************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations/scanTextAreaValue.function.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scanTextAreaValue: () => (/* binding */ scanTextAreaValue)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function */ "../../taggedjs/main/ts/interpolations/processAttribute.function.ts");

const search = new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');
function scanTextAreaValue(textarea, context, ownerSupport) {
    const value = textarea.value;
    if (value.search(search) >= 0) {
        const match = value.match(/__tagvar(\d{1,4})/);
        const token = match ? match[0] : '';
        const dynamic = '{' + token + '}';
        textarea.value = '';
        textarea.setAttribute('text-var-value', dynamic);
        const howToSet = (_elm, _name, value) => textarea.value = value;
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)('text-var-value', dynamic, // realValue, // context[token].value,
        textarea, context, ownerSupport, howToSet);
    }
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
/* harmony export */   isTag: () => (/* binding */ isTag),
/* harmony export */   isTagArray: () => (/* binding */ isTagArray),
/* harmony export */   isTagClass: () => (/* binding */ isTagClass),
/* harmony export */   isTagComponent: () => (/* binding */ isTagComponent),
/* harmony export */   isTagTemplater: () => (/* binding */ isTagTemplater)
/* harmony export */ });
function isTagComponent(value) {
    return value?.wrapper?.original instanceof Function;
}
function isTag(value) {
    return isTagTemplater(value) || isTagClass(value);
}
function isTagTemplater(value) {
    const templater = value;
    return templater?.isTemplater === true && templater.wrapper === undefined;
}
function isTagClass(value) {
    const templater = value;
    return templater?.isTagClass === true;
}
function isSubjectInstance(subject) {
    return (subject?.isSubject === true || subject?.subscribe) ? true : false; // subject?.isSubject === true || 
}
function isTagArray(value) {
    return value instanceof Array && value.every(x => isTagClass(x) || isTagTemplater(x));
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
function isLikeTags(tagSupport0, // new
tagSupport1) {
    const templater0 = tagSupport0.templater;
    const templater1 = tagSupport1.templater;
    const tag0 = templater0?.tag || tagSupport0;
    const tag1 = templater1.tag;
    const strings0 = tag0.strings;
    const strings1 = tagSupport1.strings || tag1.strings;
    if (strings0.length !== strings1.length) {
        return false;
    }
    const everyStringMatched = strings0.every((string, index) => strings1[index] === string);
    if (!everyStringMatched) {
        return false;
    }
    const values0 = tagSupport0.values || tag0.values;
    const values1 = tagSupport1.values || tag1.values;
    const valuesLengthsMatch = values0.length === values1.length;
    if (!valuesLengthsMatch) {
        return false;
    }
    const allVarsMatch = values1.every((value, index) => {
        const compareTo = values0[index];
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
/* harmony import */ var _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplaterResult.class */ "../../taggedjs/main/ts/TemplaterResult.class.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");




function processNewValue(hasValue, value, ownerSupport) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(value)) {
        const tagSubject = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
        return tagSubject;
    }
    if (value instanceof Function) {
        return new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
    }
    if (!hasValue) {
        return new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(undefined);
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagTemplater)(value)) {
        const templater = value;
        const tag = templater.tag;
        return processNewTag(tag, ownerSupport);
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagClass)(value)) {
        return processNewTag(value, ownerSupport);
    }
    // is already a value subject?
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isSubjectInstance)(value)) {
        return value;
    }
    return new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value);
}
function processNewTag(value, ownerSupport) {
    const tag = value;
    let templater = tag.templater;
    if (!templater) {
        const children = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject([]);
        templater = new _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_2__.TemplaterResult(undefined, children);
        templater.tag = tag;
        tag.templater = templater;
    }
    const subject = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(templater);
    const tagSupport = subject.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_3__.TagSupport(templater, ownerSupport, subject);
    return subject;
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "../../taggedjs/main/ts/state/index.ts");
/* harmony import */ var _processTagResult_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processTagResult.function */ "../../taggedjs/main/ts/processTagResult.function.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _renderSubjectComponent_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderSubjectComponent.function */ "../../taggedjs/main/ts/renderSubjectComponent.function.ts");




function processSubjectComponent(templater, subject, insertBefore, ownerSupport, options) {
    // Check if function component is wrapped in a tag() call
    // TODO: This below check not needed in production mode
    if (templater.tagged !== true) {
        const wrapper = templater.wrapper;
        const original = wrapper.original;
        let name = original.name || original.constructor?.name;
        if (name === 'Function') {
            name = undefined;
        }
        const label = name || original.toString().substring(0, 120);
        const error = new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${label}\n\n`);
        throw error;
    }
    const tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_2__.TagSupport(templater, ownerSupport, subject);
    let reSupport = subject.tagSupport;
    const global = tagSupport.global = reSupport?.global || tagSupport.global;
    global.insertBefore = insertBefore;
    const providers = _state__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.providerConfig;
    providers.ownerSupport = ownerSupport;
    const isRender = !reSupport || options.forceElement;
    if (isRender) {
        const support = reSupport || tagSupport;
        reSupport = (0,_renderSubjectComponent_function__WEBPACK_IMPORTED_MODULE_3__.renderSubjectComponent)(subject, support, ownerSupport);
    }
    (0,_processTagResult_function__WEBPACK_IMPORTED_MODULE_1__.processTagResult)(reSupport, subject, // The element set here will be removed from document. Also result.tag will be added in here
    insertBefore, // <template end interpolate /> (will be removed)
    options);
    return reSupport;
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
    ValueTypes["templater"] = "templater";
    ValueTypes["tagArray"] = "tag-array";
    ValueTypes["tagComponent"] = "tag-component";
    ValueTypes["value"] = "value";
})(ValueTypes || (ValueTypes = {}));
function getValueType(value) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(value)) {
        return ValueTypes.tagComponent;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagTemplater)(value)) {
        return ValueTypes.templater;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagClass)(value)) {
        return ValueTypes.tag;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(value)) {
        return ValueTypes.tagArray;
    }
    return ValueTypes.value;
}
// export type ExistingValue = TemplaterResult | Tag[] | TagSupport | Function | Subject<unknown> | RegularValue | Tag
function processSubjectValue(value, subject, // could be tag via result.tag
insertBefore, // <template end interpolate /> (will be removed)
ownerSupport, // owner
options) {
    const valueType = getValueType(value);
    switch (valueType) {
        case ValueTypes.templater:
            (0,_processTag_function__WEBPACK_IMPORTED_MODULE_4__.processTag)(value, insertBefore, ownerSupport, subject);
            return;
        case ValueTypes.tag:
            const tag = value;
            let templater = tag.templater;
            if (!templater) {
                templater = (0,_processTag_function__WEBPACK_IMPORTED_MODULE_4__.tagFakeTemplater)(tag);
            }
            (0,_processTag_function__WEBPACK_IMPORTED_MODULE_4__.processTag)(templater, insertBefore, ownerSupport, subject);
            return;
        case ValueTypes.tagArray:
            return (0,_processTagArray__WEBPACK_IMPORTED_MODULE_2__.processTagArray)(subject, value, insertBefore, ownerSupport, options);
        case ValueTypes.tagComponent:
            (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__.processSubjectComponent)(value, subject, insertBefore, ownerSupport, options);
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
/* harmony export */   getFakeTemplater: () => (/* binding */ getFakeTemplater),
/* harmony export */   processTag: () => (/* binding */ processTag),
/* harmony export */   setupNewTemplater: () => (/* binding */ setupNewTemplater),
/* harmony export */   tagFakeTemplater: () => (/* binding */ tagFakeTemplater)
/* harmony export */ });
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject */ "../../taggedjs/main/ts/subject/index.ts");


/** Could be a regular tag or a component. Both are Tag.class */
function processTag(templater, insertBefore, ownerSupport, // owner
subject) {
    let tagSupport = subject.tagSupport;
    // first time seeing this tag?
    if (!tagSupport) {
        tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.TagSupport(templater, ownerSupport, subject);
        setupNewTemplater(tagSupport, ownerSupport, subject);
        ownerSupport.childTags.push(tagSupport);
    }
    subject.tagSupport = tagSupport;
    tagSupport.ownerTagSupport = ownerSupport;
    tagSupport.buildBeforeElement(insertBefore, {
        counts: { added: 0, removed: 0 },
        forceElement: true,
    });
}
function setupNewTemplater(tagSupport, ownerSupport, subject) {
    tagSupport.global.oldest = tagSupport;
    tagSupport.global.newest = tagSupport;
    // asking me to render will cause my parent to render
    tagSupport.ownerTagSupport = ownerSupport;
    subject.tagSupport = tagSupport;
}
function tagFakeTemplater(tag) {
    const templater = getFakeTemplater();
    templater.tag = tag;
    tag.templater = templater;
    return templater;
}
function getFakeTemplater() {
    return {
        children: new _subject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject([]), // no children
        props: {},
        isTag: true,
        isTemplater: false,
        tagged: false,
        // wrapper: (() => undefined) as unknown as Wrapper,
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
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");






function processTagArray(subject, value, // arry of Tag classes
insertBefore, // <template end interpolate />
ownerSupport, options) {
    const clones = ownerSupport.clones; // []
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
        const subValue = value[index - removed];
        const subTag = subValue;
        // const tag = subTag?.templater.tag as Tag
        const lastTag = item.tagSupport.templater.tag;
        const newArrayValue = subTag?.memory.arrayValue;
        const lastArrayValue = lastTag.memory.arrayValue;
        const destroyItem = lessLength || !areLikeValues(newArrayValue, lastArrayValue);
        if (destroyItem) {
            const last = lastArray[index];
            const tagSupport = last.tagSupport;
            (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_2__.destroyArrayTag)(tagSupport, options.counts);
            last.deleted = true;
            ++removed;
            ++options.counts.removed;
            return false;
        }
        return true;
    });
    value.forEach((item, index) => {
        const previous = lastArray[index];
        const previousSupport = previous?.tagSupport;
        const subTag = item;
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_5__.isTagClass)(subTag) && !subTag.templater) {
            (0,_processTag_function__WEBPACK_IMPORTED_MODULE_3__.tagFakeTemplater)(subTag);
        }
        const tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_4__.TagSupport(subTag.templater, ownerSupport, new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(undefined));
        // tagSupport.templater = subTag.templater
        if (previousSupport) {
            (0,_processTag_function__WEBPACK_IMPORTED_MODULE_3__.setupNewTemplater)(tagSupport, ownerSupport, previousSupport.subject);
            const global = previousSupport.global;
            tagSupport.global = global;
            global.newest = tagSupport;
        }
        // check for html``.key()
        const keySet = 'arrayValue' in subTag.memory;
        if (!keySet) {
            const details = {
                template: tagSupport.getTemplate().string,
                array: value,
                ownerTagContent: ownerSupport.lastTemplateString,
            };
            const message = 'Use html`...`.key(item) instead of html`...` to template an Array';
            console.error(message, details);
            const err = new _errors__WEBPACK_IMPORTED_MODULE_1__.ArrayNoKeyError(message, details);
            throw err;
        }
        const couldBeSame = lastArray.length > index;
        if (couldBeSame) {
            const prevSupport = previous.tagSupport;
            const prevGlobal = prevSupport.global;
            // subTag.tagSupport = subTag.tagSupport || prevSupport
            const oldest = prevGlobal.oldest;
            oldest.updateBy(tagSupport);
            return [];
        }
        processAddTagArrayItem(runtimeInsertBefore, tagSupport, index, options, lastArray);
        ownerSupport.childTags.push(tagSupport);
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
function processAddTagArrayItem(before, tagSupport, index, options, lastArray) {
    const lastValue = {
        tagSupport, index
    };
    // Added to previous array
    lastArray.push(lastValue);
    const counts = {
        added: options.counts.added + index,
        removed: options.counts.removed,
    };
    const newTempElm = document.createElement('template');
    const parent = before.parentNode;
    parent.insertBefore(newTempElm, before);
    tagSupport.buildBeforeElement(newTempElm, // before,
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
function processTagResult(tagSupport, subject, // used for recording past and current value
insertBefore, // <template end interpolate />
{ counts, forceElement, }) {
    // *if appears we already have seen
    const subjectTag = subject;
    const lastSupport = subjectTag.tagSupport;
    const prevSupport = lastSupport?.global.oldest || undefined; // || tag.tagSupport.oldest // subjectTag.tag
    const justUpdate = prevSupport; // && !forceElement
    if (prevSupport && justUpdate) {
        return processTagResultUpdate(tagSupport, subjectTag, prevSupport);
    }
    tagSupport.buildBeforeElement(insertBefore, {
        counts,
        forceElement,
    });
}
function processTagResultUpdate(tagSupport, subject, // used for recording past and current value
prevSupport) {
    // components
    if (subject instanceof Function) {
        const newSupport = subject(prevSupport);
        prevSupport.updateBy(newSupport);
        subject.tagSupport = newSupport;
        return;
    }
    prevSupport.updateBy(tagSupport);
    subject.tagSupport = tagSupport;
    return;
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
/* harmony import */ var _state_provider_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/provider.utils */ "../../taggedjs/main/ts/state/provider.utils.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _renderWithSupport_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderWithSupport.function */ "../../taggedjs/main/ts/renderWithSupport.function.ts");



/** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
function renderExistingTag(oldestSupport, // oldest with elements on html
newSupport, // new to be rendered
ownerSupport, // ownerSupport
subject) {
    const lastSupport = subject.tagSupport;
    const global = lastSupport.global;
    // share point between renders
    newSupport.global = global;
    const preRenderCount = global.renderCount;
    (0,_state_provider_utils__WEBPACK_IMPORTED_MODULE_0__.providersChangeCheck)(oldestSupport);
    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    const prevSupport = global.newest;
    if (preRenderCount !== global.renderCount) {
        oldestSupport.updateBy(prevSupport);
        return prevSupport; // already rendered during triggered events
    }
    const toRedrawTag = prevSupport || lastSupport || global.oldest;
    const reSupport = (0,_renderWithSupport_function__WEBPACK_IMPORTED_MODULE_2__.renderWithSupport)(newSupport, toRedrawTag, subject, 
    // oldestSupport,
    ownerSupport);
    const oldest = global.oldest || oldestSupport;
    reSupport.global.oldest = oldest;
    if ((0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__.isLikeTags)(prevSupport, reSupport)) {
        subject.tagSupport = reSupport;
        oldest.updateBy(reSupport);
    }
    return reSupport;
}


/***/ }),

/***/ "../../taggedjs/main/ts/renderSubjectComponent.function.ts":
/*!*****************************************************************!*\
  !*** ../../taggedjs/main/ts/renderSubjectComponent.function.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSubjectComponent: () => (/* binding */ renderSubjectComponent)
/* harmony export */ });
/* harmony import */ var _renderWithSupport_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWithSupport.function */ "../../taggedjs/main/ts/renderWithSupport.function.ts");

function renderSubjectComponent(subject, reSupport, ownerSupport) {
    const preClones = ownerSupport.clones.map(clone => clone);
    reSupport = (0,_renderWithSupport_function__WEBPACK_IMPORTED_MODULE_0__.renderWithSupport)(reSupport, subject.tagSupport, // existing tag
    subject, ownerSupport);
    reSupport.global.newest = reSupport;
    if (ownerSupport.clones.length > preClones.length) {
        const myClones = ownerSupport.clones.filter(fClone => !preClones.find(clone => clone === fClone));
        reSupport.clones.push(...myClones);
    }
    ownerSupport.childTags.push(reSupport);
    return reSupport;
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
/* harmony import */ var _renderExistingTag_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderExistingTag.function */ "../../taggedjs/main/ts/renderExistingTag.function.ts");


/** Main function used by all other callers to render/update display of a tag component */
function renderTagSupport(tagSupport, // must be latest/newest state render
renderUp) {
    const global = tagSupport.global;
    const templater = tagSupport.templater;
    // is it just a vanilla tag, not component?
    if (!templater.wrapper) { // || isTagTemplater(templater) 
        const ownerTag = tagSupport.ownerTagSupport;
        ++global.renderCount;
        return renderTagSupport(ownerTag, true);
    }
    const subject = tagSupport.subject;
    let ownerSupport;
    let selfPropChange = false;
    const shouldRenderUp = renderUp && tagSupport;
    if (shouldRenderUp) {
        ownerSupport = tagSupport.ownerTagSupport;
        if (ownerSupport) {
            const nowProps = templater.props;
            const latestProps = tagSupport.propsConfig.latestCloned;
            selfPropChange = !(0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(nowProps, latestProps);
        }
    }
    const oldest = tagSupport.global.oldest;
    const tag = (0,_renderExistingTag_function__WEBPACK_IMPORTED_MODULE_1__.renderExistingTag)(oldest, tagSupport, ownerSupport, // useTagSupport,
    subject);
    const renderOwner = ownerSupport && selfPropChange;
    if (renderOwner) {
        const ownerTagSupport = ownerSupport;
        renderTagSupport(ownerTagSupport, true);
        return tag;
    }
    return tag;
}


/***/ }),

/***/ "../../taggedjs/main/ts/renderWithSupport.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/renderWithSupport.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderWithSupport: () => (/* binding */ renderWithSupport)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "../../taggedjs/main/ts/state/index.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _destroyTag_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destroyTag.function */ "../../taggedjs/main/ts/destroyTag.function.ts");




function renderWithSupport(tagSupport, // new
lastSupport, // previous
subject, // events & memory
ownerSupport) {
    const oldRenderCount = tagSupport.global.renderCount;
    beforeWithRender(tagSupport, ownerSupport, lastSupport);
    const templater = tagSupport.templater;
    // NEW TAG CREATED HERE
    const wrapper = templater.wrapper;
    const reSupport = wrapper(tagSupport, subject);
    /* AFTER */
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runAfterRender)(tagSupport, reSupport);
    // When we rendered, only 1 render should have taken place OTHERWISE rendering caused another render and that is the latest instead
    if (reSupport.global.renderCount > oldRenderCount + 1) {
        return tagSupport.global.newest;
    }
    tagSupport.global.newest = reSupport;
    const isLikeTag = !lastSupport || (0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_2__.isLikeTags)(lastSupport, reSupport);
    if (!isLikeTag) {
        destroyUnlikeTags(lastSupport, reSupport, subject);
    }
    const lastOwnerSupport = lastSupport?.ownerTagSupport;
    reSupport.ownerTagSupport = (ownerSupport || lastOwnerSupport);
    return reSupport;
}
function beforeWithRender(tagSupport, ownerSupport, lastSupport) {
    const lastOwnerSupport = lastSupport?.ownerTagSupport;
    const runtimeOwnerSupport = lastOwnerSupport || ownerSupport;
    if (lastSupport) {
        const lastState = lastSupport.memory.state;
        const memory = tagSupport.memory;
        memory.state = [...lastState];
        tagSupport.global = lastSupport.global;
        (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRedraw)(tagSupport, lastSupport);
    }
    else {
        // first time render
        (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRender)(tagSupport, runtimeOwnerSupport);
        // TODO: Logic below most likely could live within providers.ts inside the runBeforeRender function
        const providers = _state__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        providers.ownerSupport = runtimeOwnerSupport;
    }
}
function destroyUnlikeTags(lastSupport, // old
reSupport, // new
subject) {
    const oldGlobal = lastSupport.global;
    const insertBefore = oldGlobal.insertBefore;
    (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_3__.destroyTagMemory)(lastSupport, subject);
    // when a tag is destroyed, disconnect the globals
    reSupport.global = { ...oldGlobal }; // break memory references
    const global = reSupport.global;
    global.insertBefore = insertBefore;
    global.deleted = false;
    delete global.oldest;
    delete global.newest;
    delete subject.tagSupport;
}


/***/ }),

/***/ "../../taggedjs/main/ts/setTagPlaceholder.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/setTagPlaceholder.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTagPlaceholder: () => (/* binding */ setTagPlaceholder)
/* harmony export */ });
function setTagPlaceholder(global) {
    const insertBefore = global.insertBefore;
    const placeholder = global.placeholder = document.createTextNode('');
    const parentNode = insertBefore.parentNode;
    parentNode.insertBefore(placeholder, insertBefore);
    parentNode.removeChild(insertBefore);
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/callbackMaker.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/state/callbackMaker.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callbackMaker: () => (/* binding */ callbackMaker)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");
/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.utils */ "../../taggedjs/main/ts/state/state.utils.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "../../taggedjs/main/ts/errors.ts");




let innerCallback = (callback) => (a, b, c, d, e, f) => {
    throw new _errors__WEBPACK_IMPORTED_MODULE_3__.SyncCallbackError('Callback function was called immediately in sync and must instead be call async');
};
const callbackMaker = () => innerCallback;
const originalGetter = innerCallback; // callbackMaker
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: (tagSupport) => initMemory(tagSupport),
    beforeRedraw: (tagSupport) => initMemory(tagSupport),
    afterRender: (_tagSupport) => {
        innerCallback = originalGetter; // prevent crossing callbacks with another tag
    },
});
function updateState(stateFrom, stateTo) {
    stateFrom.forEach((state, index) => {
        const fromValue = (0,_state_utils__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(state);
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
    // ensure that the oldest has the latest values first
    updateState(state, oldState);
    // run the callback
    const promise = callback(...args);
    // send the oldest state changes into the newest
    updateState(oldState, state);
    (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__.renderTagSupport)(tagSupport, false);
    if (promise instanceof Promise) {
        promise.finally(() => {
            // send the oldest state changes into the newest
            updateState(oldState, state);
            (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_2__.renderTagSupport)(tagSupport, false);
        });
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/index.ts":
/*!*********************************************!*\
  !*** ../../taggedjs/main/ts/state/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callbackMaker: () => (/* reexport safe */ _callbackMaker_function__WEBPACK_IMPORTED_MODULE_6__.callbackMaker),
/* harmony export */   letState: () => (/* reexport safe */ _letState_function__WEBPACK_IMPORTED_MODULE_3__.letState),
/* harmony export */   onDestroy: () => (/* reexport safe */ _onDestroy__WEBPACK_IMPORTED_MODULE_8__.onDestroy),
/* harmony export */   onInit: () => (/* reexport safe */ _onInit__WEBPACK_IMPORTED_MODULE_7__.onInit),
/* harmony export */   providers: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_5__.providers),
/* harmony export */   setProp: () => (/* reexport safe */ _setProp_function__WEBPACK_IMPORTED_MODULE_4__.setProp),
/* harmony export */   setUse: () => (/* reexport safe */ _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse),
/* harmony export */   state: () => (/* reexport safe */ _state_function__WEBPACK_IMPORTED_MODULE_2__.state),
/* harmony export */   watch: () => (/* reexport safe */ _watch_function__WEBPACK_IMPORTED_MODULE_0__.watch)
/* harmony export */ });
/* harmony import */ var _watch_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watch.function */ "../../taggedjs/main/ts/state/watch.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");
/* harmony import */ var _state_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.function */ "../../taggedjs/main/ts/state/state.function.ts");
/* harmony import */ var _letState_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./letState.function */ "../../taggedjs/main/ts/state/letState.function.ts");
/* harmony import */ var _setProp_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setProp.function */ "../../taggedjs/main/ts/state/setProp.function.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers */ "../../taggedjs/main/ts/state/providers.ts");
/* harmony import */ var _callbackMaker_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callbackMaker.function */ "../../taggedjs/main/ts/state/callbackMaker.function.ts");
/* harmony import */ var _onInit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onInit */ "../../taggedjs/main/ts/state/onInit.ts");
/* harmony import */ var _onDestroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onDestroy */ "../../taggedjs/main/ts/state/onDestroy.ts");











/***/ }),

/***/ "../../taggedjs/main/ts/state/letState.function.ts":
/*!*********************************************************!*\
  !*** ../../taggedjs/main/ts/state/letState.function.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   letState: () => (/* binding */ letState)
/* harmony export */ });
/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.utils */ "../../taggedjs/main/ts/state/state.utils.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function letState(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    const rearray = config.rearray;
    let getSetMethod;
    const restate = rearray[config.array.length];
    if (restate) {
        let oldValue = (0,_state_utils__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            get: () => (0,_state_utils__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
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
        get: () => (0,_state_utils__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
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

/***/ "../../taggedjs/main/ts/state/onDestroy.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/state/onDestroy.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDestroy: () => (/* binding */ onDestroy)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");

function setCurrentTagSupport(support) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.destroyCurrentSupport = support;
}
function onDestroy(callback) {
    const tagSupport = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.destroyCurrentSupport;
    tagSupport.global.destroyCallback = callback;
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
    beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
    beforeDestroy: (tagSupport) => {
        const callback = tagSupport.global.destroyCallback;
        if (callback) {
            callback();
        }
    }
});


/***/ }),

/***/ "../../taggedjs/main/ts/state/onInit.ts":
/*!**********************************************!*\
  !*** ../../taggedjs/main/ts/state/onInit.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onInit: () => (/* binding */ onInit)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");

function setCurrentTagSupport(support) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.currentSupport = support;
}
function onInit(callback) {
    const tagSupport = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.currentSupport;
    if (!tagSupport.global.init) {
        tagSupport.global.init = callback;
        callback(); // fire init
    }
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
    beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
});


/***/ }),

/***/ "../../taggedjs/main/ts/state/provider.utils.ts":
/*!******************************************************!*\
  !*** ../../taggedjs/main/ts/state/provider.utils.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providersChangeCheck: () => (/* binding */ providersChangeCheck)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _renderTagSupport_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderTagSupport.function */ "../../taggedjs/main/ts/renderTagSupport.function.ts");


function providersChangeCheck(tagSupport) {
    const global = tagSupport.global;
    const providersWithChanges = global.providers.filter(provider => !(0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(provider.instance, provider.clone));
    // reset clones
    providersWithChanges.forEach(provider => {
        const appElement = tagSupport.getAppElement();
        handleProviderChanges(appElement, provider);
        provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
    });
}
function handleProviderChanges(appElement, provider) {
    const tagsWithProvider = getTagsWithProvider(appElement, provider);
    tagsWithProvider.forEach(({ tagSupport, renderCount, provider }) => {
        if (tagSupport.global.deleted) {
            return; // i was deleted after another tag processed
        }
        const notRendered = renderCount === tagSupport.global.renderCount;
        if (notRendered) {
            provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
            (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_1__.renderTagSupport)(tagSupport, false);
        }
    });
}
function getTagsWithProvider(tagSupport, provider, memory = []) {
    const global = tagSupport.global;
    const compare = global.providers;
    const hasProvider = compare.find(xProvider => xProvider.constructMethod === provider.constructMethod);
    if (hasProvider) {
        memory.push({
            tagSupport,
            renderCount: global.renderCount,
            provider: hasProvider,
        });
    }
    tagSupport.childTags.forEach(child => getTagsWithProvider(child, provider, memory));
    return memory;
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/providers.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/state/providers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providers: () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");
/* harmony import */ var _state_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.function */ "../../taggedjs/main/ts/state/state.function.ts");



_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig = {
    providers: [],
    ownerSupport: undefined,
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
            // fake calling state the same number of previous times
            for (let x = 0; x < existing.stateDiff; ++x) {
                (0,_state_function__WEBPACK_IMPORTED_MODULE_2__.state)(existing.stateDiff);
            }
            return (0,_state_function__WEBPACK_IMPORTED_MODULE_2__.state)(existing.stateDiff);
        }
        const oldStateCount = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig.array.length;
        // Providers with provider requirements just need to use providers.create() and providers.inject()
        const instance = 'prototype' in constructMethod ? new constructMethod() : constructMethod();
        const stateDiff = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig.array.length - oldStateCount;
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        config.providers.push({
            constructMethod,
            instance,
            clone: (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(instance),
            stateDiff,
        });
        (0,_state_function__WEBPACK_IMPORTED_MODULE_2__.state)(() => instance); // tie provider to a state for rendering change checking
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
            ownerTagSupport: config.ownerSupport
        };
        while (owner.ownerTagSupport) {
            const ownerProviders = owner.ownerTagSupport.global.providers;
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
            owner = owner.ownerTagSupport; // cause reloop
        }
        const msg = `Could not inject provider: ${constructor.name} ${constructor}`;
        console.warn(`${msg}. Available providers`, config.providers);
        throw new Error(msg);
    }
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport, ownerSupport) => {
        run(tagSupport, ownerSupport);
    },
    beforeRedraw: (tagSupport, newTagSupport) => {
        run(tagSupport, newTagSupport.ownerTagSupport);
    },
    afterRender: (tagSupport) => {
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        tagSupport.global.providers = [...config.providers];
        config.providers.length = 0;
    }
});
function run(tagSupport, ownerSupport) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    config.ownerSupport = ownerSupport;
    if (tagSupport.global.providers.length) {
        config.providers.length = 0;
        config.providers.push(...tagSupport.global.providers);
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/setProp.function.ts":
/*!********************************************************!*\
  !*** ../../taggedjs/main/ts/state/setProp.function.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setProp: () => (/* binding */ setProp)
/* harmony export */ });
/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.utils */ "../../taggedjs/main/ts/state/state.utils.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setProp(getSet) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    const rearray = config.rearray;
    const [propValue] = getSet(undefined);
    getSet(propValue); // restore original value instead of undefined
    const restate = rearray[config.array.length];
    if (restate) {
        let watchValue = restate.watch;
        let oldValue = (0,_state_utils__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        const push = {
            get: () => (0,_state_utils__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
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
        get: () => (0,_state_utils__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(push),
        callback: getSet,
        lastValue: propValue,
        watch: propValue,
    };
    config.array.push(push);
    return propValue;
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/setUse.function.ts":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/ts/state/setUse.function.ts ***!
  \*******************************************************/
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

/***/ "../../taggedjs/main/ts/state/state.function.ts":
/*!******************************************************!*\
  !*** ../../taggedjs/main/ts/state/state.function.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");
/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.utils */ "../../taggedjs/main/ts/state/state.utils.ts");


/** Used for variables that need to remain the same variable during render passes */
function state(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.stateConfig;
    let getSetMethod;
    const rearray = config.rearray;
    const restate = rearray[config.array.length];
    if (restate) {
        let oldValue = (0,_state_utils__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            get: () => (0,_state_utils__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(push),
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
        get: () => (0,_state_utils__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(push),
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return initValue;
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/state.utils.ts":
/*!***************************************************!*\
  !*** ../../taggedjs/main/ts/state/state.utils.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateEchoBack: () => (/* binding */ StateEchoBack),
/* harmony export */   getStateValue: () => (/* binding */ getStateValue)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/state/setUse.function.ts");


_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig = {
    array: [], // state memory on the first render
    // rearray: [] as State,
};
const beforeRender = (tagSupport) => initState(tagSupport);
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender,
    beforeRedraw: beforeRender,
    afterRender: (tagSupport) => {
        const memory = tagSupport.memory;
        // const state: State = memory.state
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
        const rearray = config.rearray;
        if (rearray.length) {
            if (rearray.length !== config.array.length) {
                const message = `States lengths has changed ${rearray.length} !== ${config.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`;
                const wrapper = tagSupport.templater?.wrapper;
                const details = {
                    oldStates: config.array,
                    newStates: config.rearray,
                    tagFunction: wrapper.original,
                };
                const error = new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, details);
                console.warn(message, details);
                throw error;
            }
        }
        delete config.rearray; // clean up any previous runs
        delete config.tagSupport;
        memory.state = config.array; // [...config.array]
        memory.state.forEach(item => item.lastValue = getStateValue(item)); // set last values
        config.array = [];
    }
});
function getStateValue(state) {
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
    const memory = tagSupport.memory;
    const state = memory.state;
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    // TODO: This guard may no longer be needed
    if (config.rearray) {
        checkStateMismatch(tagSupport, config, state);
    }
    config.rearray = [];
    if (state?.length) {
        state.forEach(state => getStateValue(state));
        config.rearray.push(...state);
    }
    config.tagSupport = tagSupport;
}
function checkStateMismatch(tagSupport, config, state) {
    const wrapper = tagSupport.templater?.wrapper;
    const wasWrapper = config.tagSupport?.templater.wrapper;
    const message = 'last state not cleared. Possibly in the middle of rendering one component and another is trying to render';
    if (!wasWrapper) {
        return; // its not a component or was not a component before
    }
    console.error(message, {
        config,
        tagFunction: wrapper.original,
        wasInMiddleOf: wasWrapper.original,
        state,
        expectedClearArray: config.rearray,
    });
    throw new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, {
        config,
        tagFunction: wrapper.original,
        state,
        expectedClearArray: config.rearray,
    });
}


/***/ }),

/***/ "../../taggedjs/main/ts/state/watch.function.ts":
/*!******************************************************!*\
  !*** ../../taggedjs/main/ts/state/watch.function.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _letState_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./letState.function */ "../../taggedjs/main/ts/state/letState.function.ts");

/**
 * When an item in watch array changes, callback function will be triggered. Does not trigger on initial watch setup.
 * @param currentValues T[]
 * @param callback WatchCallback
 * @returns T[]
 */
function watch(currentValues, callback) {
    let previousValues = (0,_letState_function__WEBPACK_IMPORTED_MODULE_0__.letState)(undefined)(x => [previousValues, previousValues = x]);
    // First time running watch?
    if (previousValues === undefined) {
        // callback(currentValues, previousValues) // do not call during init
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
    onSubscription;
    methods = [];
    isSubject = true;
    subscribers = [];
    subscribeWith;
    // unsubcount = 0 // 🔬 testing
    constructor(value, onSubscription) {
        this.value = value;
        this.onSubscription = onSubscription;
    }
    subscribe(callback) {
        const subscription = getSubscription(this, callback);
        // are we within a pipe?
        const subscribeWith = this.subscribeWith;
        if (subscribeWith) {
            // are we in a pipe?
            if (this.methods.length) {
                const orgCallback = callback;
                callback = (value) => {
                    runPipedMethods(value, this.methods, lastValue => orgCallback(lastValue, subscription));
                };
            }
            return subscribeWith(callback);
        }
        this.subscribers.push(subscription);
        SubjectClass.globalSubs.push(subscription); // 🔬 testing
        if (this.onSubscription) {
            this.onSubscription(subscription);
        }
        return subscription;
    }
    set(value) {
        this.value = value;
        // Notify all subscribers with the new value
        this.subscribers.forEach(sub => {
            // (sub.callback as any).value = value
            sub.callback(value, sub);
        });
    }
    next = this.set;
    toPromise() {
        return new Promise((res, rej) => {
            this.subscribe((x, subscription) => {
                subscription.unsubscribe();
                res(x);
            });
        });
    }
    /** like toPromise but faster */
    toCallback(callback) {
        this.subscribe((x, subscription) => {
            subscription.unsubscribe();
            callback(x);
        });
        return this;
    }
    pipe(...operations) {
        const subject = new Subject();
        subject.methods = operations;
        subject.subscribeWith = (x) => this.subscribe(x);
        return subject;
    }
}
function removeSubFromArray(subscribers, callback) {
    const index = subscribers.findIndex(sub => sub.callback === callback);
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
    subscription.callback = callback;
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
    subscription.next = (value) => {
        callback(value, subscription);
    };
    return subscription;
}
function runPipedMethods(value, methods, onComplete) {
    const cloneMethods = [...methods];
    const firstMethod = cloneMethods.shift();
    const next = (newValue) => {
        if (cloneMethods.length) {
            return runPipedMethods(newValue, cloneMethods, onComplete);
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "../../taggedjs/main/ts/state/index.ts");
/* harmony import */ var _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplaterResult.class */ "../../taggedjs/main/ts/TemplaterResult.class.ts");
/* harmony import */ var _interpolations_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolations/bindSubjectCallback.function */ "../../taggedjs/main/ts/interpolations/bindSubjectCallback.function.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _alterProps_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alterProps.function */ "../../taggedjs/main/ts/alterProps.function.ts");
/* harmony import */ var _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject/ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");








const tags = [];
let tagCount = 0;
/** Wraps a tag component in a state manager and always push children to last argument as an array */
// export function tag<T>(a: T): T;
function tag(tagComponent) {
    /** function developer triggers */
    const result = (function tagWrapper(props, children) {
        // is the props argument actually children?
        const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagClass)(props) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagTemplater)(props) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(props);
        if (isPropTag) {
            children = props;
            props = undefined;
        }
        const { childSubject, madeSubject } = kidsToTagArraySubject(children);
        childSubject.isChildSubject = true;
        const templater = new _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_2__.TemplaterResult(props, childSubject);
        // attach memory back to original function that contains developer display logic
        const innerTagWrap = getTagWrap(templater, madeSubject);
        innerTagWrap.original = tagComponent.lastResult?.original || tagComponent;
        templater.tagged = true;
        templater.wrapper = innerTagWrap;
        return templater;
    }); // we override the function provided and pretend original is what's returned
    updateResult(result, tagComponent);
    // group tags together and have hmr pickup
    updateComponent(tagComponent);
    tags.push(tagComponent);
    // fake the return as being (props?, children?) => TemplaterResult
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
    tagComponent.setUse = _state__WEBPACK_IMPORTED_MODULE_1__.setUse;
    tagComponent.tagIndex = tagCount++; // needed for things like HMR
    tagComponent.lastResult = tagComponent;
}
/** creates/returns a function that when called then calls the original component function
 * Gets used as templater.wrapper()
 */
function getTagWrap(templater, madeSubject) {
    // this function gets called by taggedjs
    const innerTagWrap = function (oldTagSetup, subject) {
        const global = oldTagSetup.global;
        ++global.renderCount;
        const childSubject = templater.children;
        const lastArray = global.oldest?.templater.children.lastArray;
        if (lastArray) {
            childSubject.lastArray = lastArray;
        }
        const originalFunction = innerTagWrap.original;
        let props = templater.props;
        let castedProps = (0,_alterProps_function__WEBPACK_IMPORTED_MODULE_6__.alterProps)(props, oldTagSetup.ownerTagSupport);
        const clonedProps = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_4__.deepClone)(props); // castedProps
        // CALL ORIGINAL COMPONENT FUNCTION
        const tag = originalFunction(castedProps, childSubject);
        tag.templater = templater;
        templater.tag = tag;
        const tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_5__.TagSupport(templater, oldTagSetup.ownerTagSupport, subject, global.renderCount);
        tagSupport.global = global;
        tagSupport.propsConfig = {
            latest: props,
            latestCloned: clonedProps,
            lastClonedKidValues: tagSupport.propsConfig.lastClonedKidValues,
        };
        tagSupport.memory = oldTagSetup.memory; // state handover
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
                        const ownerSupport = tagSupport.ownerTagSupport;
                        (0,_interpolations_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_3__.runTagCallback)(value, // callback
                        ownerSupport, this, // bindTo
                        args);
                    };
                    valuesValue.isChildOverride = true;
                });
            });
        }
        return tagSupport;
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
/* harmony export */   runWrapper: () => (/* binding */ runWrapper),
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
        appElements[appElmIndex].tagSupport.destroy();
        appElements.splice(appElmIndex, 1);
        // an element already had an app on it
        console.warn('Found and destroyed app element already rendered to element', { element });
    }
    // Create the app which returns [props, runOneTimeFunction]
    const wrapper = app(props);
    // have a function setup and call the tagWrapper with (props, {update, async, on})
    const tagSupport = runWrapper(wrapper);
    // TODO: is the below needed?
    tagSupport.appElement = element;
    tagSupport.isApp = true;
    tagSupport.global.isApp = true;
    const templateElm = document.createElement('template');
    templateElm.setAttribute('id', 'app-tag-' + appElements.length);
    templateElm.setAttribute('app-tag-detail', appElements.length.toString());
    element.appendChild(templateElm);
    element.destroy = async () => {
        await tagSupport.destroy();
        const insertBefore = tagSupport.global.insertBefore;
        const parentNode = insertBefore.parentNode;
        parentNode.removeChild(insertBefore);
    };
    tagSupport.buildBeforeElement(templateElm);
    tagSupport.global.oldest = tagSupport;
    tagSupport.global.newest = tagSupport;
    element.setUse = app.original.setUse;
    appElements.push({ element, tagSupport });
    return {
        tagSupport,
        tags: app.original.tags,
    };
}
function runWrapper(templater) {
    let newSupport = {};
    const subject = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_2__.ValueSubject(newSupport);
    newSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.BaseTagSupport(templater, subject);
    subject.set(templater);
    subject.tagSupport = newSupport;
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_1__.runBeforeRender)(newSupport, undefined);
    // Call the apps function for our tag templater
    const wrapper = templater.wrapper;
    const tagSupport = wrapper(newSupport, subject);
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_1__.runAfterRender)(newSupport, tagSupport);
    return tagSupport;
}


/***/ }),

/***/ "../../taggedjs/main/ts/tagRunner.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/tagRunner.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInCycle: () => (/* binding */ isInCycle),
/* harmony export */   runAfterRender: () => (/* binding */ runAfterRender),
/* harmony export */   runBeforeDestroy: () => (/* binding */ runBeforeDestroy),
/* harmony export */   runBeforeRedraw: () => (/* binding */ runBeforeRedraw),
/* harmony export */   runBeforeRender: () => (/* binding */ runBeforeRender)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "../../taggedjs/main/ts/state/index.ts");
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject */ "../../taggedjs/main/ts/subject/index.ts");
// TODO: This should be more like `new TaggedJs().use({})`


// Emits event at the end of a tag being rendered. Use tagClosed$.toPromise() to render a tag after a current tag is done rendering
_state__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.tagClosed$ = new _subject__WEBPACK_IMPORTED_MODULE_1__.Subject(undefined, subscription => {
    if (!isInCycle()) {
        subscription.next(); // we are not currently processing so process now
    }
});
function isInCycle() {
    return _state__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.stateConfig.tagSupport;
}
// Life cycle 1
function runBeforeRender(tagSupport, ownerSupport) {
    _state__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRender(tagSupport, ownerSupport));
}
// Life cycle 2
function runAfterRender(tagSupport, ownerTagSupport) {
    _state__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.afterRender(tagSupport, ownerTagSupport));
    _state__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.tagClosed$.next(ownerTagSupport);
}
// Life cycle 3
function runBeforeRedraw(tagSupport, ownerTagSupport) {
    _state__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRedraw(tagSupport, ownerTagSupport));
}
// Life cycle 4 - end of life
function runBeforeDestroy(tagSupport, ownerTagSupport) {
    _state__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeDestroy(tagSupport, ownerTagSupport));
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

/***/ "../../taggedjs/main/ts/updateContextItem.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/updateContextItem.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateContextItem: () => (/* binding */ updateContextItem)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");


function updateContextItem(context, variableName, value) {
    const subject = context[variableName];
    const tagSubject = subject;
    const tagSupport = tagSubject.tagSupport;
    if (tagSupport) {
        if (value) {
            if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(value)) {
                const templater = value;
                let newSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__.TagSupport(templater, tagSupport.ownerTagSupport, subject);
                if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(tagSupport)) {
                    shareTemplaterGlobal(tagSupport, newSupport);
                }
            }
        }
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(value)) {
        return; // emits on its own
    }
    // listeners will evaluate updated values to possibly update display(s)
    subject.set(value);
    return;
}
function shareTemplaterGlobal(oldTagSupport, tagSupport) {
    const oldTemp = oldTagSupport.templater;
    const oldWrap = oldTemp.wrapper; // tag versus component
    const oldValueFn = oldWrap.original;
    const templater = tagSupport.templater;
    const newWrapper = templater.wrapper;
    const newValueFn = newWrapper?.original;
    const fnMatched = oldValueFn === newValueFn;
    if (fnMatched) {
        tagSupport.global = oldTagSupport.global;
        const newest = oldTagSupport.global.newest;
        if (newest) {
            const prevState = newest.memory.state;
            tagSupport.memory.state = [...prevState];
        }
    }
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
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");






function updateExistingTagComponent(ownerSupport, tagSupport, // lastest
subject, insertBefore) {
    let lastSupport = subject.tagSupport?.global.newest; // || subject.tagSupport
    let oldestTag = lastSupport.global.oldest;
    const oldWrapper = lastSupport.templater.wrapper;
    const newWrapper = tagSupport.templater.wrapper;
    let isSameTag = false;
    if (oldWrapper && newWrapper) {
        const oldFunction = oldWrapper.original;
        const newFunction = newWrapper.original;
        isSameTag = oldFunction === newFunction;
    }
    const templater = tagSupport.templater;
    if (!isSameTag) {
        const oldestSupport = lastSupport.global.oldest;
        (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(oldestSupport, subject);
        return (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_1__.processSubjectComponent)(templater, subject, insertBefore, ownerSupport, {
            forceElement: false,
            counts: { added: 0, removed: 0 },
        });
    }
    else {
        const hasChanged = (0,_hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__.hasTagSupportChanged)(lastSupport, tagSupport, templater);
        if (!hasChanged) {
            // if the new props are an object then implicitly since no change, the old props are an object
            const newProps = templater.props;
            if (newProps && typeof (newProps) === 'object') {
                syncFunctionProps(lastSupport, ownerSupport, newProps);
            }
            return lastSupport; // its the same tag component
        }
    }
    const previous = lastSupport.global.newest;
    const newSupport = (0,_renderTagSupport_function__WEBPACK_IMPORTED_MODULE_3__.renderTagSupport)(tagSupport, false);
    lastSupport = subject.tagSupport;
    const newOldest = newSupport.global.oldest;
    const hasOldest = newOldest ? true : false;
    if (!hasOldest) {
        return buildNewTag(newSupport, insertBefore, lastSupport, subject);
    }
    if (newOldest && templater.children.value.length) {
        const oldKidsSub = newOldest.templater.children;
        oldKidsSub.set(templater.children.value);
    }
    // detect if both the function is the same and the return is the same
    const isLikeTag = isSameTag && (0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_5__.isLikeTags)(previous, newSupport);
    if (isLikeTag) {
        subject.tagSupport = newSupport;
        oldestTag.updateBy(newSupport); // the oldest tag has element references
        return newSupport;
    }
    else {
        // Although function looked the same it returned a different html result
        if (isSameTag && lastSupport) {
            (0,_destroyTag_function__WEBPACK_IMPORTED_MODULE_2__.destroyTagMemory)(lastSupport, subject);
            newSupport.global.context = {}; // do not share previous outputs
        }
        oldestTag = undefined;
    }
    if (!oldestTag) {
        lastSupport = newSupport;
        buildNewTag(newSupport, lastSupport.global.insertBefore, lastSupport, subject);
    }
    lastSupport.global.newest = newSupport;
    return newSupport;
}
function buildNewTag(newSupport, oldInsertBefore, oldTagSupport, subject) {
    newSupport.buildBeforeElement(oldInsertBefore, {
        forceElement: true,
        counts: { added: 0, removed: 0 },
    });
    newSupport.global.oldest = newSupport;
    newSupport.global.newest = newSupport;
    oldTagSupport.global.oldest = newSupport;
    oldTagSupport.global.newest = newSupport;
    subject.tagSupport = newSupport;
    return newSupport;
}
function syncFunctionProps(lastSupport, ownerSupport, newProps) {
    lastSupport = lastSupport.global.newest || lastSupport;
    const priorPropConfig = lastSupport.propsConfig;
    const priorProps = priorPropConfig.latestCloned;
    const prevSupport = ownerSupport.global.newest;
    Object.entries(priorProps).forEach(([name, value]) => {
        if (!(value instanceof Function)) {
            return;
        }
        // TODO: The code below maybe irrelevant
        const newCallback = newProps[name];
        const original = newCallback.original;
        if (original) {
            return; // already previously converted
        }
        // Currently, call self but over parent state changes, I may need to call a newer parent tag owner
        priorProps[name].toCall = (...args) => {
            return (0,_alterProps_function__WEBPACK_IMPORTED_MODULE_4__.callbackPropOwner)(newCallback, // value, // newOriginal,
            args, prevSupport);
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
/* harmony import */ var _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplaterResult.class */ "../../taggedjs/main/ts/TemplaterResult.class.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processTagArray */ "../../taggedjs/main/ts/processTagArray.ts");
/* harmony import */ var _updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateExistingTagComponent.function */ "../../taggedjs/main/ts/updateExistingTagComponent.function.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processRegularValue.function */ "../../taggedjs/main/ts/processRegularValue.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");
/* harmony import */ var _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject/ValueSubject */ "../../taggedjs/main/ts/subject/ValueSubject.ts");
/* harmony import */ var _processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./processSubjectComponent.function */ "../../taggedjs/main/ts/processSubjectComponent.function.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");
/* harmony import */ var _interpolations_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interpolations/bindSubjectCallback.function */ "../../taggedjs/main/ts/interpolations/bindSubjectCallback.function.ts");
/* harmony import */ var _processTag_function__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./processTag.function */ "../../taggedjs/main/ts/processTag.function.ts");
/* harmony import */ var _insertAfter_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./insertAfter.function */ "../../taggedjs/main/ts/insertAfter.function.ts");













function updateExistingValue(subject, value, ownerSupport, insertBefore) {
    const subjectTag = subject;
    const isComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagComponent)(value);
    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_6__.checkDestroyPrevious)(subject, value, insertBefore);
    // handle already seen tag components
    if (isComponent) {
        return prepareUpdateToComponent(value, subjectTag, insertBefore, ownerSupport);
    }
    // was component but no longer
    const tagSupport = subjectTag.tagSupport;
    if (tagSupport) {
        handleStillTag(subject, value, ownerSupport);
        return subjectTag;
    }
    // its another tag array
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagArray)(value)) {
        (0,_processTagArray__WEBPACK_IMPORTED_MODULE_3__.processTagArray)(subject, value, insertBefore, // oldInsertBefore as InsertBefore,
        ownerSupport, { counts: {
                added: 0,
                removed: 0,
            } });
        return subject;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagTemplater)(value)) {
        (0,_processTag_function__WEBPACK_IMPORTED_MODULE_11__.processTag)(value, insertBefore, ownerSupport, subjectTag);
        return subjectTag;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagClass)(value)) {
        const tag = value;
        let templater = tag.templater;
        if (!templater) {
            templater = (0,_processTag_function__WEBPACK_IMPORTED_MODULE_11__.getFakeTemplater)();
            tag.templater = templater;
            templater.tag = tag;
        }
        (0,_processTag_function__WEBPACK_IMPORTED_MODULE_11__.processTag)(templater, insertBefore, ownerSupport, subjectTag);
        return subjectTag;
    }
    // we have been given a subject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isSubjectInstance)(value)) {
        return value;
    }
    // now its a function
    if (value instanceof Function) {
        const bound = (0,_interpolations_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_10__.bindSubjectCallback)(value, ownerSupport);
        subject.set(bound);
        return subject;
    }
    // This will cause all other values to render
    (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_5__.processRegularValue)(value, subject, insertBefore);
    return subjectTag;
}
function handleStillTag(subject, value, ownerSupport) {
    const lastSupport = subject.tagSupport;
    let templater = value;
    const isClass = (0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagClass)(value);
    if (isClass) {
        const tag = value;
        templater = tag.templater;
        if (!templater) {
            const children = new _subject_ValueSubject__WEBPACK_IMPORTED_MODULE_7__.ValueSubject([]);
            templater = new _TemplaterResult_class__WEBPACK_IMPORTED_MODULE_1__.TemplaterResult(undefined, children);
            templater.tag = tag;
            tag.templater = templater;
        }
    }
    const valueSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.TagSupport(templater, ownerSupport, subject);
    if (isClass) {
        valueSupport.global = lastSupport.global;
    }
    const isSameTag = value && (0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_9__.isLikeTags)(lastSupport, valueSupport);
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagTemplater)(value)) {
        (0,_processTag_function__WEBPACK_IMPORTED_MODULE_11__.setupNewTemplater)(valueSupport, ownerSupport, subject);
    }
    if (isSameTag) {
        lastSupport.updateBy(valueSupport);
        return;
    }
    if (isSameTag) {
        // const subjectTag = subject as TagSubject
        const global = lastSupport.global;
        const insertBefore = global.insertBefore;
        return (0,_processTag_function__WEBPACK_IMPORTED_MODULE_11__.processTag)(templater, insertBefore, ownerSupport, subject);
    }
    return (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_5__.processRegularValue)(value, subject, subject.insertBefore);
}
function prepareUpdateToComponent(templater, subjectTag, insertBefore, ownerSupport) {
    // When last value was not a component
    if (!subjectTag.tagSupport) {
        (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_8__.processSubjectComponent)(templater, subjectTag, insertBefore, // oldInsertBefore as InsertBefore,
        ownerSupport, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
        return subjectTag;
    }
    const tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.TagSupport(templater, ownerSupport, subjectTag);
    const subjectSup = subjectTag.tagSupport;
    const prevSupport = subjectSup.global.newest;
    if (prevSupport) {
        const newestState = prevSupport.memory.state;
        tagSupport.memory.state = [...newestState];
    }
    else {
        const placeholder = subjectSup.global.placeholder;
        if (placeholder && !insertBefore.parentNode) {
            (0,_insertAfter_function__WEBPACK_IMPORTED_MODULE_12__.insertAfter)(insertBefore, placeholder);
            delete subjectSup.global.placeholder;
        }
        (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_8__.processSubjectComponent)(templater, subjectTag, insertBefore, ownerSupport, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
        return subjectTag;
    }
    tagSupport.global = subjectSup.global;
    subjectTag.tagSupport = tagSupport;
    (0,_updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_4__.updateExistingTagComponent)(ownerSupport, tagSupport, // latest value
    subjectTag, insertBefore);
    return subjectTag;
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
    let userJsonString = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.letState)('')(x => [userJsonString, userJsonString = x]);
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
        style="min-width:300px;min-height:400px;flex:1"
      >${userJson === "" ? "" : userJsonString}</textarea>

      ${userJson === "" ? "" : (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <div style="flex:1;min-width:110px;width:100%;max-width:900px;background-color:rgba(255,255,255,.5);min-width:300px">
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
        value: _sampleData__WEBPACK_IMPORTED_MODULE_2__.stripeList,
        everySimpleValue: (value) => {
            if (typeof value === 'string' && value.substring(0, 3) === 'pm_') {
                return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<a style="color:blue;">${value}</a>`;
            }
            return value;
        }
    })}
      </div>
    </div>
  `;
});
//cha
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