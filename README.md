[![Travis (.com)](https://img.shields.io/travis/com/Aniket-Engg/sol-profiler-vscode.svg?style=for-the-badge)](https://travis-ci.com/Aniket-Engg/sol-profiler-vscode)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/Aniket-Engg.sol-profiler-vscode.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=Aniket-Engg.sol-profiler-vscode)
[![Visual Studio Marketplace Installs - Azure DevOps Extension](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/Aniket-Engg.sol-profiler-vscode.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=Aniket-Engg.sol-profiler-vscode)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/Aniket-Engg.sol-profiler-vscode.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=Aniket-Engg.sol-profiler-vscode)
[![Visual Studio Marketplace Rating (Stars)](https://img.shields.io/visual-studio-marketplace/stars/Aniket-Engg.sol-profiler-vscode.svg?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=Aniket-Engg.sol-profiler-vscode)
[![GitHub](https://img.shields.io/github/license/aniket-engg/sol-profiler-vscode.svg?style=for-the-badge)](https://github.com/Aniket-Engg/sol-profiler-vscode/blob/master/LICENSE)

# sol-profiler-vscode

[sol-profiler-vscode](https://marketplace.visualstudio.com/items?itemName=Aniket-Engg.sol-profiler-vscode) extension generates & stores Solidity smart contract methods profile. Contract file should be opened in editor. Generated profile helps to get knowledge of method attributes any time later at one glance.

**Note:** sol-profiler-vscode extension does not ensure/guarantee any kind of security or correctness of any smart-contract.

## Features

* Generates & stores profile in a folder named `profiles` in a .txt file named with suffix `_Profile`
* Supports file import from relative path and `node_modules`(like openzeppelin-solidity etc.) both
* Explicitly marks `abstract` and `fallback` functions
* Explicitly marks `library` and `interface` contracts
* Since Solidity release [v0.5.0](https://github.com/ethereum/solidity/releases/tag/v0.5.0), Explicit data location for all variables of struct, array or mapping types is now mandatory, so profile also include the storage location of parameters defined explicitly.

## How to use

* Install extension by searching `sol-profiler` in extensions section of VSCode
* Open contract file (`.sol`) in editor whose profile you want to generate
* Open `View -> Command Palette` (Keyboard Shortcut: `CTRL + SHIFT + P`)
* Type `sol-profiler`. You will see a text in dropdown as `sol-profiler: generate profile`. Click on it & you're done. (As result, success/failure message will be shown as notification)

## Demo

![spvDemo2](https://user-images.githubusercontent.com/30843294/55622296-68c9c580-57bd-11e9-9395-fe104d909d39.gif)

For CLI version, see https://www.npmjs.com/package/sol-profiler 

## License
[MIT](https://github.com/Aniket-Engg/sol-profiler-vscode/blob/master/LICENSE)


