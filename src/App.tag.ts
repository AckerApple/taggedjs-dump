
import { html, states, tag } from 'taggedjs'
import { dump } from 'taggedjs-dump'
import { stripeList } from './sampleData'
export { tagElement } from 'taggedjs'

const sampleDump = {
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
}

const stripeDump = {
  value: stripeList,
  everySimpleValue: (value: any) => {
    if(typeof value === 'string' && value.substring(0,3) === 'pm_') {
      return html`<a style="color:blue;">${value}</a>`
    }
    
    return value
  }
}

export const App = tag(() => {
  let userJsonString = ''
  let renderCount = 0
  let userJson: any = ''
  let badEval = false
  
  states(get => [{userJsonString, renderCount, userJson, badEval}] = get({userJsonString, renderCount, userJson, badEval}))

  ++renderCount
  
  // const userJson = JSON.parse(userJsonString)

  const change = (event: any) => {
    userJsonString = event.target.value

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
  }
  
  return html`
    <h3>🔭 TaggedJs Dump demo page</h3>
    
    <p>Use the textarea below to cast JSON into an interactive display</p>

    ${badEval && html`
      <div style="color:white;background-color:red;padding:.5em;"
      >Input data appears to be invalid</div>
    `}
    
    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:.5em;padding:.5em;flex-wrap:wrap">
      <textarea wrap="off" placeholder="paste json here"
        onchange=${change}
        style="min-width:300px;height:400px;flex-grow:.5;"
      >${userJson === "" ? "" : userJsonString}</textarea>

      ${userJson === "" ? "" : html`
        <div style="flex-grow:2;min-width:110px;max-width:98vw;width:100%;background-color:rgba(255,255,255,.5);min-width:300px">
          <div style="max-width:1400px;">
            ${dump({
              value: userJson
            })}
          </div>
        </div>
      `}
    </div>

    <br />

    <h3>Sample Dumps</h3>
    <hr />

    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:1em;">      
      <div style="max-width:1400px">
        ${dump(sampleDump)}
        <hr />
        ${dump(stripeDump)}
      </div>
    </div>
  `
})

//cha

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
