var express = require('express');
var socket = require('socket.io');
var economy = require('./economyFunctions');
var economyConfig = require('./config/economyConfig');
var mongoose = require('mongoose');
var testData = require('./config/testData');
var User = require('./models/user');
var Tick = require('./models/tick');

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

// Data Storage
mongoose.connect('mongodb://localhost:27017/starstruck');

const users = testData();

var game = {
  tick: new Tick({position: 0}),
  users,
  config: {
    economy: economyConfig
  }
};

setInterval(function () {
  for (user of game.users) {
    economy.mining(user);
    user.save();
  }

  game.tick.position++;
  game.tick.save();
  io.emit('tick', game)
}, 5000);