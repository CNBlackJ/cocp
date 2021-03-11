const vscode = require('vscode')
const fs = require('fs')

function provideCompletionItems(document, position, token, context) {
  try {
    const offset = document.offsetAt(position);
    const beforeStartOffset = Math.max(0, offset - 1);
    const beforeStart = document.positionAt(beforeStartOffset);
    const text = document.getText(new vscode.Range(beforeStart, position))
    console.log(text)
    fs.writeFileSync('./test.json', text)
  } catch (e) {
    console.log(e)
  }
}

module.exports = provideCompletionItems
