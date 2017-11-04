const actions = require('./battleFunctions');

// Mock fleets
const attacker = {
  units: {
    wraith: 100,
    frigate: 50,
    astrodrone: 30
  },
  plunder: {
    asteroids: {
      platinum: 0,
      crystal: 0,
      uninitiated: 0
    }
  }
}

const defender = {
  units: {
    turret: 50,
    wraith: 30,
    frigate: 40
  },
  assets: {
    asteroids: {
      platinum: 76,
      crystal: 40,
      uninitiated: 3
    },
    resources: {
      platinum: 394829,
      crystal: 390239
    }
  }
}

// How many rounds an attack lasts
let rounds = 3;

// Battle!
for(let x = 1; x <= rounds; x++) {
  actions.battle(attacker, defender);
  actions.plunder(attacker, defender);
}

console.log('Attacker');
console.log(attacker);
console.log('Defender');
console.log(defender);
