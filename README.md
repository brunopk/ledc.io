# ledc.io
Client/server app written in Node.js to light LEDs by sending data through socket.io and writing it to the LPT port.

For this project I used a special machine called *frankenstein* created on my own but **having a working LPT port is enough.**

## Running (debug mode)

1. Install dependencies : ``npm install``
2. Set ``DEBUG`` environment variable: ``export DEBUG=ledc.io:*``
3. Run it: ``npm start``

> - ``export DEBUG=ledc.io:*`` tells the ``debug`` module to write everything to the standard output. If you export ``DEBUG`` as ``DEBUG=ledc.io:level``, ``debug()`` function will will only work if it's imported like ``debug = require('debug')('ledc.io:level')`` 
> - To write to the LPT port, commands must be invoked with ``sudo`` (both ``export`` and ``npm start``).
> -  ``package.json`` is configured to make ``npm start`` know it has to invoke ``node ./bin/www`` (``bin/www`` is a Node.js script which starts up the Express server).