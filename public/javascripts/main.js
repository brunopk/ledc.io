// TODO poner la URL correcta

$(document).ready(function(){

    let socket = io.connect('http://localhost:3000', { 'forceNew': true });
    let actual_value = 0;

    for(let i = 0; i < 8; i++)
        $(`#toggle-${i}`).change(function() {
            let mask = 1 << i;
            if($(this).prop('checked'))
                actual_value = actual_value | mask;
            else
                actual_value = actual_value & ~mask;
            socket.emit('port_data', actual_value);

        });
});
