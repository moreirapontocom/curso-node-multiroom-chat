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
});