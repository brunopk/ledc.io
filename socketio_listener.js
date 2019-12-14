let lpt = require('./hardware_interface');
let port = new lpt.Port(0, 'byte', false);

let connectionListener = (socket) => {
    socket.on('port_data', (data) => { port.data = data });
};

 module.exports = connectionListener;