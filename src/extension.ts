import * as vscode from 'vscode';
const parser = require("solparse");
const table  = require('table');
const fs = require('fs');
const path = require('path');
import {parsePartData} from './utils/parse';
import {processFile, getPragma} from './utils/file';

export function activate(context: vscode.ExtensionContext) {

  	let disposable = vscode.commands.registerCommand('extension.sol-profiler.generate', async() => {
		let config  = {
			border: {
				topBody: `─`,
				topJoin: `┬`,
				topLeft: `┌`,
				topRight: `┐`,
		
				bottomBody: `─`,
				bottomJoin: `┴`,
				bottomLeft: `└`,
				bottomRight: `┘`,
		
				bodyLeft: `│`,
				bodyRight: `│`,
				bodyJoin: `│`,
		
				joinBody: `─`,
				joinLeft: `├`,
				joinRight: `┤`,
				joinJoin: `┼`
			}
		};
		let version;
		let tableRows:any = [];
		try{
			let filePath = vscode.window.activeTextEditor!.document.fileName;
			let pathArray = filePath.split('/');
			let file = pathArray[pathArray.length -1];
			let fileArray = file.split('.');
			if(fileArray[fileArray.length -1] != 'sol') {
				throw new Error('Open a solidity(.sol) file in editor.');
			}

			let contractName = file.substr(0, file.length - 4);
			let pragma = await getPragma(filePath);
			let code = await processFile(filePath, true);
			let source = parser.parse(pragma + '\n\n' + code);
			if(source.body[0].type == 'PragmaStatement') {
				let pragmaData = source.body[0];
				version = pragmaData.start_version.operator + pragmaData.start_version.version;
				if(pragmaData.end_version) {
					version += pragmaData.end_version.operator + pragmaData.end_version.version;
				}
			}

				tableRows.push(['','File: ' + file + ' , Solidity Pragma: ' + version, '','','','']);

				// Adding header row 
				tableRows.push(['Contract/Library', 'Function/Constructor','Visibility','View/Pure','Returns','Modifiers']);
				source.body.forEach((contract: any) => {
					if(contract['type'] == 'ContractStatement' || contract.type == 'LibraryStatement') {
						contract.body.forEach(function(part : any) {
						if(part.type == 'ConstructorDeclaration' || (part.type == 'FunctionDeclaration' && part.is_abstract == false)) {
							let {contractName, functionName, visibility, viewOrPure, returns, modifiers} = parsePartData(contract, part);
							tableRows.push([contractName, functionName, visibility, viewOrPure, returns, modifiers]);
						}
					});
					}
				});
				var fileData = table.table(tableRows, config);
				if(!fs.existsSync(path.join(vscode.workspace.rootPath, '/profiles'))) {
					fs.mkdirSync(path.join(vscode.workspace.rootPath, '/profiles'));
				}
				let profilePath = vscode.workspace.rootPath + '/profiles/' + contractName + "_Profile.txt";
				fs.writeFileSync(profilePath, fileData);
				vscode.window.showInformationMessage(`Profile for contract '${contractName}' generated and stored at ${profilePath}.`);
			}catch(error){
				vscode.window.showErrorMessage("Error in generating profile: " + error.message);
			}
		});

  	context.subscriptions.push(disposable);
}

export function deactivate() {}
