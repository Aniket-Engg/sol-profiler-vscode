# sol-profiler-vscode

sol-profiler extension lists down the attributes of all the functions/constructor of the `.sol` file opened in editor.  It stores generated profile in `.txt` file at project root.

It works best with solidity version >=0.4.22

Note: sol-profiler does not ensure/guarantee any kind of security or correctness of any smart-contract.

## How to use

* Install extension by searching `sol-profiler` in extensions section of VSCode
* Open contract file (`.sol`) in editor whose profile you want to generate
* Open `View -> Command Plattete` (Keyboard Shortcut: CTRL + SHIFT + P)
* Type `sol-profiler`. You will see a text in dropdown as `sol-profiler: generate profile`. Click on it & it's done. (you will see success/failure message as notification)

## Demo

![spvdemo](https://user-images.githubusercontent.com/30843294/53162731-ad751500-35f2-11e9-81a9-214bc81e5791.gif)

For CLI version, see https://www.npmjs.com/package/sol-profiler 


