// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

async function getInput() {
  const inputBox = await vscode.window.showQuickPick(
    ["( •̀ ω •́ )✧", "╰(*°▽°*)╯", "(┬┬﹏┬┬)"],
    {
      onDidSelectItem(item:string) {
        vscode.window.showInformationMessage(item);
      },
    }
  );
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("telescode.input", async () => {
      await getInput();
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
