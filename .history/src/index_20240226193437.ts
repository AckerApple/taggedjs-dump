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
            /*arrayTest: [{
              name:'something',
              location: {street: '4361'},
            }, {
              name:'in this',
              location: {street: '2235'},
            }, {
              name:'world',
              location: {street: '4785'},
            }]*/
          }
        })}
        <hr />
        ${/*dump({
          value: stripeList
        })*/false}
      </div>
    </div>
  `
})
