var socket = io();

// Esuchar informacion (on)
socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Perdida de conexion');
});

//Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Marco',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})