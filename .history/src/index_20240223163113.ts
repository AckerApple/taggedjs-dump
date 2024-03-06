import { html, tag } from 'taggedjs'
import { dump } from './dump.tag'
export { tagElement } from 'taggedjs'

export const Dump = tag(() => {
  return html`
    hello world -
    ${dump({
      value: {
        test: {
          anotherOne: 22
        },
        arrayTest: ['something', 'in this', 'world']
      }
    })}
  `
})
