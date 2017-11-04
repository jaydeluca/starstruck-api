// Stats
const units = require('./shipStats');

const fight = (ship, defending, attacking) => {
  // Get ship stats
  let targets = units[ship].damage;

  // Fire on targets
  Object.keys(targets).forEach(function(k,i) {
    if (defending[ship] > 0) {
      // calculate damage
      let defenseDamage = defending[ship] * units[ship].damage[k];
      // units killed
      let kills = Math.round(defenseDamage/units[ship].armor);
      if (attacking[k]) attacking[k] = attacking[k]-kills>0 ? attacking[k]-kills : 0;
    }
  });
}

// Order of which units fight
const battleOrder = [
  'turret',
  'wraith',
  'frigate'
]

exports.battle = (attacking, defending) => {
  // Loop through units in battleOrder
  for (ship of battleOrder){
    // Def goes first
    fight(ship, defending.units, attacking.units);
    fight(ship, attacking.units, defending.units);
  }
}

exports.plunder = (attacker, defender) => {

  // potential spoils
  let potentional = defender.assets.asteroids;

  let astrodrones = attacker.units.astrodrone*0.15;
  let total = potentional.platinum + potentional.crystal + potentional.uninitiated;

  let types = [
    'platinum',
    'crystal',
    'uninitiated'
  ];

  // steal some astrodrones
  for (type of types) {

    let stolen = Math.round((defender.assets.asteroids[type]/total)*astrodrones);
    if (stolen > defender.assets.asteroids[type]) {
      stolen = defender.assets.asteroids[type];
    }
    attacker.plunder.asteroids[type] += stolen;
    attacker.units.astrodrone -= stolen;
    defender.assets.asteroids[type] -= stolen;
  }

}