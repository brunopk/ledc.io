# ledc.io
Client/server app written in Node.js to light LEDs by sending data with socket.io and writing it to the LPT port with [lpt](https://www.npmjs.com/package/lpt). I run this app on [frankenstein](https://github.com/brunopk/frankenstein) but **having a working LPT port is enough.** 

## Requirements

- Node.js (tested on Node v12.0.4 LTS)
- NPM
- Bower (Installed with : ``npm install -g bower``)

## Running (debug mode)

1. Add user to the lp group : ``usermod -a -G lp alarm``
2. Install NPM dependencies : ``npm install``
4. Install Bower dependencies: ``bower install``
5. Set ``DEBUG`` environment variable: ``export DEBUG=ledc.io:*``
6. Run it: ``npm start``

> - ``export DEBUG=ledc.io:*`` tells the ``debug`` module to write everything to the standard output. If you export ``DEBUG`` as ``DEBUG=ledc.io:level``, ``debug()`` function will will only work if it's imported like ``debug = require('debug')('ledc.io:level')`` 
> -  ``package.json`` is configured to make ``npm start`` know it has to invoke ``node ./bin/www`` (``bin/www`` is a Node.js script which starts up the Express server).

