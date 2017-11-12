var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

var server = app.listen(4000, function() {
  console.log('listening on Port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket) {
  console.log('made socket connection', socket.id);
})

var tick = 0;
setInterval(function () {
  tick++;
  io.emit('tick', tick)
  console.log(tick);
}, 3000);