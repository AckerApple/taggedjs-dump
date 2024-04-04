import { html, set, setLet, tag } from "taggedjs";
export const columnEditor = tag(({ name, array, included, columnNames, allColumnNames }) => {
    let mouseOverEditShow = setLet(false)(x => [mouseOverEditShow, mouseOverEditShow = x]);
    let edit = setLet(false)(x => [edit, edit = x]);
    let editFormula = setLet(undefined)(x => [editFormula, editFormula = x]);
    const formulas = set([]);
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
    return html `
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
      
      ${included && columnNames.length !== allColumnNames.length ? html `
        <a style="color:blue;" onclick=${goAll}><small>all</small></a>
      ` : html `
        <a style="color:blue;" onclick=${goOnly}><small>only</small></a>
      `}
    </div>

    ${edit && html `
      <div style="width:100%;padding:0.3em;">
        <div style="font-size:0.7em;text-align:center;">
          <strong>Column Settings</strong>
        </div>
        <div>
          ${editFormula && html `
            <div style="padding:0.3em;">
              <strong>edit formula</strong>
            </div>
            <textarea wrap="off"
              onchange=${(evt) => updateFormula(editFormula, evt.target.value)}
            >${editFormula.value}</textarea>
          `}
          <div style="display:flex;flex-wrap:wrap;gap:1em">
            ${formulas.map(formula => html `
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
    ctx = new Proxy(ctx, { has: () => true });
    let func = (new Function("with(this) { return (" + src + ")}"));
    return func.call(ctx);
}
//# sourceMappingURL=columnEditor.component.js.map