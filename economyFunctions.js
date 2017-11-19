const economyStats = require("./config/economyConfig");

exports.mining = (user) => {

  // base mining
  user.assets.resources.platinum += economyStats.baseIncome[user.technology.mining];
  user.assets.resources.crystal += economyStats.baseIncome[user.technology.mining];

  // asteroid mining
  user.assets.resources.platinum += economyStats.asteroidIncome*user.assets.asteroids.platinum;
  user.assets.resources.crystal += economyStats.asteroidIncome*user.assets.asteroids.crystal;

}

