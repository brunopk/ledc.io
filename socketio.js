var messages = [{
    author: "Carlos",
    text: "Hola! que tal?"
},{
    author: "Pepe",
    text: "Muy bien! y tu??"
},{
    author: "Paco",
    text: "Genial!"
}];

var connectionListener = (socket) => {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message', (data) => {
        console.log(data);
    })
};
 module.exports = connectionListener;