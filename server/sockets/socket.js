const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        //console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien'
            });
        } else {
            callback({
                resp: 'Todo salio Mal!!!!'
            })
        }

        callback();
    })


});
/////