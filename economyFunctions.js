const economyStats = require("./config/economyConfig");

exports.mining = (user) => {
  user.assets.resources.platinum += economyStats.baseIncome[user.technology.mining];
  user.assets.resources.crystal += economyStats.baseIncome[user.technology.mining];
}

