import { html, tag } from 'taggedjs'
import { dump } from './dump.tag'
export { tagElement } from 'taggedjs'

export const Dump = tag(() => {
  return html`
    hello world -
    <div style="max-width:900px">
      ${dump({
        value: {
          test: {
            anotherOne: 22
          },
          arrayTest: [{name:'something'}, {name:'in this'}, {name:'world'}]
        }
      })}
    </div>
  `
})
