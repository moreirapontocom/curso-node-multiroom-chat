var app = require('./config/server');

var server = app.listen(4200, function() {
    console.log('Server is online');
});

require('socket.io').listen(server);