// Score calculation
const scoreStats = require("./config/scoreConfig");

exports.calculateScore = (user) => {
  let score = 0, types;

  // asteroids
  types = ['platinum', 'crystal', 'uninitiated'];
  types.forEach(type => score += user.assets.asteroids[type] * scoreStats.asteroids[type]);

  // resources
  types = ['platinum', 'crystal'];
  types.forEach(type => score += user.assets.resources[type] * scoreStats.resources[type]);

  // ships
  types = ['wraith', 'frigate', 'astrodrone'];
  types.forEach(type => score += user.units[type] ? user.units[type] * scoreStats.ships[type] : 0);

  user.score = score;

}

