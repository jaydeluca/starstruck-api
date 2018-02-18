var express = require('express');
var socket = require('socket.io');
var economy = require('./economyFunctions');
var score = require('./scoreFunctions');
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
  tick: new Tick({position: 0, rankings: []}),
  users,
  config: {
    economy: economyConfig
  }
};

setInterval(function () {
  rankings = [];
  for (user of game.users) {
    economy.mining(user);
    score.calculateScore(user);
    user.save();
    rankings.push({
      user: user.username,
      score: user.score
    })
  }
  game.tick.rankings = rankings.sort(function (a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
  });
  game.tick.position++;
  game.tick.save();
  io.emit('tick', game)
}, 5000);