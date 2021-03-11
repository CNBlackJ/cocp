// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const provideCompletionItems = require('./provideCompletionItems');
const Store = require('./store')

const COMPLETION_TRIGGERS = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
  " ",
  ".",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  ",",
  ":",
  "'",
  '"',
  "=",
  "<",
  ">",
  "/",
  "\\",
  "+",
  "-",
  "|",
  "&",
  "*",
  "%",
  "=",
  "$",
  "#",
  "@",
  "!",
	"\n"
];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	backgroundInit(context)
}

// this method is called when your extension is deactivated
function deactivate() {}

function backgroundInit(context) {
	let disposable = vscode.commands.registerCommand('coco.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from vinli!');
	});
	context.subscriptions.push(disposable);

	new Store(context.globalState)

  vscode.languages.registerCompletionItemProvider(
    { pattern: "**" },
    {
			provideCompletionItems
    },
    ...COMPLETION_TRIGGERS
  );
}

module.exports = {
	activate,
	deactivate
}
