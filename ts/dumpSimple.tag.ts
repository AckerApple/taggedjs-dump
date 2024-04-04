import { html, setLet } from "taggedjs"
import { OnHeaderClick } from "./index"
import { copyText } from "./copyText.function"

export function dumpSimple({key, value, onHeaderClick}: {
  key: string
  value: any
  onHeaderClick?: OnHeaderClick
}) {
  const isLinkValue = value.search && (value.slice(0,8)==='https://' || value.slice(0,7)==='http://')
  
  return html`
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${key && html`
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          style.cursor=${ onHeaderClick && "pointer" }
          onclick=${onHeaderClick}
        >${key}</div>
      `}
      ${isLinkValue ? linkValue(value) : simpleValue(value)}
    </div>
  `
}

const simpleValue = (
  value: string | undefined | null | boolean
) => {
  const isLikeNull = [undefined,null,'null'].includes(value as null | undefined)
  const number = value as unknown as number
  const isLargeNumber = !isNaN(number) && number > 1000000000
  const title = !isLargeNumber ? '' : getLargeNumberTitle(number)
  let downTime = setLet(0)(x => [downTime, downTime = x])

  const startMouseDown = () => {
    downTime = Date.now()
  }

  const markMouseUp = (event: Event) => {
    if(Date.now() - downTime > 300) {
      event.preventDefault()
      event.stopPropagation()
      console.log('xx')
      return true // a manual drag copy is taking place
    }

    console.log('copied')
    copyText(value as string) // a regular click took place
  }

  return html`
    <div class="hover-bg-warning active-bg-energized"
      onmousedown=${startMouseDown}
      onmouseup=${markMouseUp}
      style="cursor:pointer;"
      style.background-color=${isLikeNull ? 'rgba(0,0,0,.5)' : ''}
      style.color = ${
        (value === true && '#28a54c') ||
        (value === false && '#e42112') ||
        isLikeNull && 'white' || ''
      }
      title=${title}
    >${value === null && 'null' || value === false && 'false' || value === undefined && 'undefined' || value}</div>
  `
}

function getLargeNumberTitle(number: number) {
  return number > 946702800000 ?
  'Milliseconds > Unix epoch:\n' + (new Date(number).toLocaleString()) :
  'Seconds > Unix epoch:\n' + (new Date(number*1000).toLocaleString())
}

const linkValue = (value: string) => {
  return html`
    <a onclick=${() => copyText(value)} href=${value}
      target="_blank"
      class="hover-bg-warning active-bg-energized"
      title="tap to copy"
    >${value}</a>
  `
}