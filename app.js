var app = require('./config/server');

var server = app.listen(4200, function() {
    console.log('Server is online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket) {
    console.log('User has connected');

    socket.on('disconnect', function(socket) {
        console.log('User left');
    });

    socket.on('msgToServer', function(data) {
        
        // Will return the message only to user who emitted to server
        socket.emit('msgToClient', {
            apelido: data.apelido,
            msg: data.msg
        });

        // Broadcast will send the message to all users connected except the one who emitted to server
        socket.broadcast.emit('msgToClient', {
            apelido: data.apelido,
            msg: data.msg
        });
    });
});