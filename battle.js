const actions = require('./battleFunctions');

// Mock fleets
const attacker = {
  units: {
    wraith: 100,
    frigate: 50
  }
}

const defender = {
  units: {
    turret: 50,
    wraith: 30,
    frigate: 40
  }
}

// How many rounds an attack lasts
let rounds = 3;

// Battle!
for(let x = 1; x <= rounds; x++) {
  console.log(`Round ${x}:`);
  actions.battle(attacker, defender);
  console.log(`Round ${x} Attacker:`);
  console.log(attacker);
  console.log(`Round ${x} Defender:`);
  console.log(defender);
}