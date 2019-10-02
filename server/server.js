//////
const express = require('express');
const http = require('http');
const path = require('path');

/********** SOCKET CON EXPRESS*********/
const app = express();
const serverApp = require('http').createServer(app);
/*************************************/
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = require('socket.io')(serverApp);
require('./sockets/socket');

serverApp.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});