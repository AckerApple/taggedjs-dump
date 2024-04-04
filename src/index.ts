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
    <h3>🔭 TaggedJs Dump demo page</h3>
    
    <p>Use the textarea below to cast JSON into an interactive display</p>
    
    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:1em;">
      <textarea wrap="off" placeholder="past json here" onchange=${(event: any) => userJsonString = event.target.value}
        style="min-width:400px;min-height:400px;flex-grow:1em"
      >${userJsonString}</textarea>

      <div style="flex-grow:1em;min-width:110px;width:100%;max-width:900px;background-color:rgba(255,255,255,.5);">
        ${dump({
          value: userJson
        })}
      </div>
    </div>

    <br />

    <h3>Sample Dumps</h3>
    <hr />

    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:1em;">      
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
