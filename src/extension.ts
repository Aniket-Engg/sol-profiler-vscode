import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.sol-profiler.generate', () => {
		vscode.window.showInformationMessage('sol-profiler is ready to generate profile');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
