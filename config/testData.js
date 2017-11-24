var User = require('../models/user');

module.exports = () => {
  // Users
  var user1Data = {
    name: 'Player 1',
    username: 'Player1',
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
  };

  var user2Data = {
    name: 'Player 2',
    username: 'Player2',
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
  };

  User.findOneAndRemove({ username: 'Player1'}, function (err) {
    if (err) throw err;
  });
  User.findOneAndRemove({ username: 'Player2'}, function (err) {
    if (err) throw err;
  });

  var user1 = new User(user1Data);
  var user2 = new User(user2Data);

  return [user1, user2];

}