var User = require('../models/user');

module.exports = () => {
  // Users
  var user1 = new User({
    name: 'Player 1',
    username: 'Player'+Math.random(),
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
  });

  var user2 = new User({
    name: 'Player 2',
    username: 'Player'+Math.random(),
    units: {
      turret: 50,
      wraith: 30,
      frigate: 40
    },
    assets: {
      asteroids: {
        platinum: 56,
        crystal: 70,
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
  });

  user1.save(function(err) {
    if (err) throw err;
  });

  user2.save(function(err) {
    if (err) throw err;
  });

  return [user1, user2];

}