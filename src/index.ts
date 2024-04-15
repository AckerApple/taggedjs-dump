import { html, setLet, tag } from 'taggedjs'
import { dump } from 'taggedjs-dump'
import { stripeList } from './sampleData'
export { tagElement } from 'taggedjs'

export const Dump = tag(() => {
  let userJsonString = setLet('')(x => [userJsonString, userJsonString = x])
  
  // const userJson = JSON.parse(userJsonString)
  let badEval = false
  let userJson
  try {
    userJson = sandboxEval(userJsonString, {})
    userJsonString = JSON.stringify(userJson, null, 2)
  } catch(err: any) {
    badEval = true
    try {
      JSON.parse(userJsonString)
    } catch (err: any) {
      userJson = Object.getOwnPropertyNames(err).reduce((a, key) => (a[key] = err[key]) && a || a, {} as any)
    }
  }

  const change = (event: any) => {
    userJsonString = event.target.value
  }
  
  return html`
    <h3>🔭 TaggedJs Dump demo page</h3>
    
    <p>Use the textarea below to cast JSON into an interactive display</p>

    ${badEval && html`
      <div style="color:white;background-color:red;padding:.5em;"
      >Input data appears to be invalid</div>
    `}
    
    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:.5em;padding:.5em;">
      <textarea wrap="off" placeholder="past json here"
        onchange=${change}
        style="min-width:400px;min-height:400px;flex:1"
      >${userJson === "" ? "" : userJsonString}</textarea>

      ${userJson === "" ? "" : html`
        <div style="flex:1;min-width:110px;width:100%;max-width:900px;background-color:rgba(255,255,255,.5);">
          ${dump({
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
  if(!src) {
    return src
  }

  ctx = new Proxy(ctx, {has: () => true})
  let func = (new Function("with(this) { return (" + src + ")}"));
  return func.call(ctx)
}
