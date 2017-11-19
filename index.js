var express = require('express');
var socket = require('socket.io');
var economy = require('./economyFunctions');

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



// Users
const users = [
  {
    name: 'Player 1',
    units: {
      wraith: 100,
      frigate: 50,
      astrodrone: 30
    },
    assets: {
      asteroids: {
        platinum: 76,
        crystal: 40,
        uninitiated: 3
      },
      resources: {
        platinum: 0,
        crystal: 0
      }
    },
    technology: {
      "mining": "one"
    },
    plunder: {
      asteroids: {
        platinum: 0,
        crystal: 0,
        uninitiated: 0
      }
    }
  },
  {
    name: 'Player 2',
    units: {
      turret: 50,
      wraith: 30,
      frigate: 40
    },
    assets: {
      asteroids: {
        platinum: 76,
        crystal: 40,
        uninitiated: 3
      },
      resources: {
        platinum: 0,
        crystal: 0
      }
    },
    technology: {
      "mining": "one"
    },
    plunder: {
      asteroids: {
        platinum: 0,
        crystal: 0,
        uninitiated: 0
      }
    }
  }
];



var tick = {
  id: 0,
  users
};
setInterval(function () {

  for (user of tick.users) {
    economy.mining(user);
  }

  tick.id++;
  io.emit('tick', tick)
}, 3000);