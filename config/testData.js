var User = require('../models/user');
var Fleet = require('../models/fleet');
var Tick = require('../models/tick');

module.exports = () => {

  // clear db
  Fleet.collection.remove();
  User.collection.remove();
  Tick.collection.remove();

  // Users
  var user1Data = {
    name: 'Player 1',
    username: 'Player1',
    score: 10,
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
    score: 15,
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

  var user1 = new User(user1Data);
  var user2 = new User(user2Data);

  var fleet1 = new Fleet({
    user_id: user1._id,
    name: "Test Fleet",
    position: {
      direction: "home",
    },
  });

  user1.fleets = [fleet1];

  user1.save();

  // user1.fleets = [fleet1];

  return [user1, user2];

}