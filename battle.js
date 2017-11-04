// Stats
const units = {
  wraith: {
    type: 'Ship',
    speed: 0,
    damage: {
      wraith: 0.2,
      frigate: 0.1,
      turret: 0.1
    },
    armor: 3,
  },
  frigate: {
    type: 'Ship',
    speed: 2,
    damage: {
      wraith: 0.7,
      frigate: 0.3,
      turret: 0.3
    },
    armor: 7
  },
  turret: {
    type: 'Defense',
    speed: 1,
    damage: {
      wraith: 0.5,
      frigate: 0.2
    },
    armor: 3
  }
}

// Order of which units fight
const battleOrder = [
  'turret',
  'wraith',
  'frigate'
]

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

function battle (attacking, defending) {
  // Loop through units in battleOrder
  for (ship of battleOrder){
    // Def goes first
    fight(ship, defending.units, attacking.units);
    fight(ship, attacking.units, defending.units);
  }
}

function fight(ship, defending, attacking) {
  // Get ship stats
  let targets = units[ship].damage;

  // Fire on targets
  Object.keys(targets).forEach(function(k,i) {
    if (defending[ship] > 0) {
      // calculate damage
      let defenseDamage = defending[ship] * units[ship].damage[k];
      // units killed
      let kills = Math.round(defenseDamage/units[ship].armor);
      attacking[k] = attacking[k]-kills>0 ? attacking[k]-kills : 0;

      console.log(`D: ${ship} A: ${k}`);
      console.log(`kills: ${kills}`);
    }
  });
}

// How many rounds an attack lasts
let rounds = 3;

// Battle!
for(let x = 1; x <= rounds; x++) {
  console.log(`Round ${x}:`);
  battle(attacker, defender);
  console.log(`Round ${x} Attacker:`);
  console.log(attacker);
  console.log(`Round ${x} Defender:`);
  console.log(defender);
}
