import { tagElement } from "taggedjs"
import { App } from "./App.tag"

export function run() {
  const element = document.getElementsByTagName('app')[0]
  const start = Date.now()
  tagElement(App, element, {test:1})
  const end = Date.now() - start
  console.info(`⏱️ rendered in ${end}ms`)
}
