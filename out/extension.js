"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('djw is speaking!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable1 = vscode.commands.registerCommand('djava.yes', () => {
        vscode.window.showInformationMessage('哦对的对的对的!');
    });
    let disposable2 = vscode.commands.registerCommand('djava.no', () => {
        vscode.window.showInformationMessage('不对不对不对!');
    });
    context.subscriptions.push(disposable1);
    context.subscriptions.push(disposable2);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map