/*
 * This is a wrapper for the LPT hardware interface to control LEDs. It tries to import 'lpt' module and in case of
 * failing (e.g. module its not installed), it creates a 'dummy' interface which simulates a real hardware interface by
 * writing to standard output.
 */

let lpt = null;
// noinspection SpellCheckingInspection
let debug = require('debug')('ledc.io:hardware_interface');

try{
    // noinspection NpmUsedModulesInstalled
    _lpt = require('lpt');
    lpt = {
        Port: class Port {
            constructor(port_number, pp_mode, negotiate){
                this.port = new _lpt.Port(port_number, pp_mode, negotiate);
            }
            set data(value){
                debug(`SENDING INT: ${value}`);
                this.port.data = value;
            }
        }
    }
} catch (ex){
    debug('Cannot import lpt module');
    lpt = {
        Port: class Port {
            set data(value){
                debug(`SENDING INT: ${value}`)
            }
        }

    }
}


module.exports = lpt;

