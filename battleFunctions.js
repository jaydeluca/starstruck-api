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

      console.log(`D: ${ship} A: ${k}`);
      console.log(`kills: ${kills}`);
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