// polyfills for IE
import 'core-js/stable'
import 'regenerator-runtime/runtime'

window.addEventListener('DOMContentLoaded', (event) => {
  let codeBlocks = document.querySelectorAll('code[class*=":title="')
  console.log(codeBlocks)

  Array.from(codeBlocks).forEach((block) => {
    const codeToolbar = block.closest('div.code-toolbar')
    console.log(codeToolbar)
    const title = block.classList[1].substr(7)
    const titleBlock = document.createElement('div')

    codeToolbar.classList.add('has-title')
    titleBlock.innerHTML = title
    titleBlock.classList.add('code-title')

    codeToolbar.parentNode.insertBefore(titleBlock, codeToolbar)
  })
})
