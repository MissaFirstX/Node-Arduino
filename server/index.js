const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));


server.listen(4000, function () {
    console.log('Server listening on port ', 4000)
});

// ****************** Comunicación Serial ******************************* //
const { SerialPort, ReadlineParser } = require('serialport');

// Create a port
const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser())


// The open event is always emitted
parser.on('data', function (data) {
    let temp = parseInt(data,10);        
    io.emit('temperature', data);
});

// Open errors will be emitted as an error event
port.on('error', function (err) {
    console.log('Error: ', err.message)
});

io.on("connection", (data) => {
    console.log(data); 
});

