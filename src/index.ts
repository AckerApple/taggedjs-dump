import { html, setLet, tag } from 'taggedjs'
import { dump } from 'taggedjs-dump'
import { stripeList } from './sampleData'
export { tagElement } from 'taggedjs'

export const Dump = tag(() => {
  let userJsonString = setLet('null')(x => [userJsonString, userJsonString = x])
  
  // const userJson = JSON.parse(userJsonString)
  const userJson = sandboxEval(userJsonString, {})
  userJsonString = JSON.stringify(userJson, null, 2)
  
  return html`
    <h3>🔭 TaggedJs Dump</h3>
    <div style="display:flex;align-item:center;justify-content: center;">
      <div>
        <textarea wrap="off" placeholder="past json here" onchange=${(event: any) => userJsonString = event.target.value}
        >${userJsonString}</textarea>
      </div>
      
      <div style="width:100%;max-width:900px;background-color:rgba(255,255,255,.5);">
        ${dump({
          value: userJson
        })}
      </div>
      
      <div style="max-width:900px">
        ${dump({
          value: {
            test: {
              anotherOne: 22
            },
            arrayTest: [{
              name:'something',
              location: {street: '4361'},
            }, {
              name:'in this',
              location: {street: '2235'},
            }, {
              name:'world',
              location: {street: '4785'},
            }]
          }
        })}
        <hr />
        ${dump({
          value: stripeList
        })}
      </div>
    </div>
  `
})

// execute script in private context
function sandboxEval(
  src: string,
  ctx: Record<string, any>
){
  ctx = new Proxy(ctx, {has: () => true})
  let func = (new Function("with(this) { return (" + src + ")}"));
  return func.call(ctx)
}
