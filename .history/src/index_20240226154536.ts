import { html, tag } from 'taggedjs'
import { dump } from './dump.tag'
import { stripeList } from './sampleData'
export { tagElement } from 'taggedjs'

export const Dump = tag(() => {
  return html`
    hello world -
    <div style="display:flex;align-item:center;justify-content: center;">
      <div style="max-width:900px">
        ${dump({
          value: {
            test: {
              anotherOne: 22
            },
            arrayTest: [{name:'something'}, {name:'in this'}, {name:'world'}]
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
