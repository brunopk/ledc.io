# ledc.io
Client/server app written in Node.js to light LEDs by sending data with socket.io 

Currently LEDs are controlled sending signals through the and writing the LPT port (with the [lpt node module](https://www.npmjs.com/package/lpt)). I run this app on [frankenstein](https://github.com/brunopk/frankenstein) but **having a working LPT port is enough.** Next step is using the GPIO ports of the Raspberry Pi. 

## Requirements

- Node.js (tested on Node v10.16.3)
- yarn 1.12.4 (a package manager like `npm`)

## Running

1. Add user to the lp group : `usermod -a -G lp alarm`
2. Install dependencies : `yarn install`
3. Run it: `yarn start`

## Running (debug mode)

1. Add user to the lp group : `usermod -a -G lp alarm`
2. Install dependencies : `yarn install`
3. Run it: `yarn debug`

## How to install client side dependencies (javascript and stylesheet)

1. Find the name of the dependency (for instance `jquery`)
2. Edit postinstall script (`bin/postinstall`):
    ```javascript
    require('fs').unlink(require('path').resolve('public/jquery'), function(){
        require('fs').symlinkSync(require('path').resolve('node_modules/jquery'), 'public/jquery', 'junction')
    })
    ````
3. Install dependency: `yarn add jquery`

> - Its recommended to add the symlink folder created on step 2 to the `.gitignore`
> - Dependencies can be searched on [yarn website](https://classic.yarnpkg.com)

More information about `yarn`:
 - [Installing and removing external software using node package manager on Webstorm (with yarn and npm)](https://www.jetbrains.com/help/webstorm/installing-and-removing-external-software-using-node-package-manager.html)
 - [Installing yarn](https://classic.yarnpkg.com/en/docs/install)
