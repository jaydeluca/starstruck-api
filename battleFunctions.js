// Stats
const units = require("./config/shipStats");
const battleConfig = require("./config/battleConfig");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// This is the battle engine for a particular ship, will mutate both defender and attacker
const fight = (ship, defender, attacker) => {
  // Get ship stats
  let targets = units[ship].damage;

  // Fire on targets
  Object.keys(targets).forEach(function(k,i) {
    if (defender[ship] > 0) {
      // calculate damage
      let defenseDamage = defender[ship] * units[ship].damage[k];
      // units killed
      let kills = Math.round(defenseDamage/units[ship].armor);
      if (attacker[k]) attacker[k] = attacker[k]-kills>0 ? attacker[k]-kills : 0;
    }
  });
}

// Order of which units fight
const battleOrder = [
  "turret",
  "wraith",
  "frigate"
]

exports.battle = (attacker, defender) => {
  // Loop through units in battleOrder
  for (ship of battleOrder){
    // Def goes first
    fight(ship, defender.units, attacker.units);
    fight(ship, attacker.units, defender.units);
  }
}

exports.plunder = (attacker, defender) => {

  // potential spoils
  let potentional = defender.assets.asteroids;
  let multiplyer = battleConfig.astrodroneEffectiveness + getRandomIntInclusive(-5, 8)/100;
  let astrodrones = attacker.units.astrodrone*multiplyer;
  let total = potentional.platinum + potentional.crystal + potentional.uninitiated;

  let asteroidTypes = [
    "platinum",
    "crystal",
    "uninitiated"
  ];

  // steal some asteroids
  for (type of asteroidTypes) {
    let stolen = Math.round((defender.assets.asteroids[type]/total)*astrodrones);
    if (stolen > defender.assets.asteroids[type]) {
      stolen = defender.assets.asteroids[type];
    }
    attacker.plunder.asteroids[type] += stolen;
    attacker.units.astrodrone -= stolen;
    defender.assets.asteroids[type] -= stolen;
  }

  // steal some resources
  let resourceTypes = [
    "platinum",
    "crystal"
  ]

  for (type of resourceTypes) {
    let stolen = Math.round((defender.assets.asteroids[type]/total)*astrodrones);
    if (stolen > defender.assets.asteroids[type]) {
      stolen = defender.assets.asteroids[type];
    }
    attacker.plunder.asteroids[type] += stolen;
    attacker.units.astrodrone -= stolen;
    defender.assets.asteroids[type] -= stolen;
  }



}