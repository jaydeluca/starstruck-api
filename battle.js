// Stats
const ships = {
  wraith: {
    speed: 0,
    damage: {
      wraith: 0.2,
      frigate: 0.1
    },
    armor: 3,
  },
  frigate: {
    speed: 2,
    damage: {
      wraith: 0.7,
      frigate: 0.3
    },
    armor: 7
  }
}

const battleOrder = [
  'wraith',
  'frigate'
]

// Stats for defensive structures
const defenses = {
  turret: {
    speed: 1,
    damage: {
      wraith: 0.5,
      frigate: 0.2
    },
    armor: 3
  }
}

const attacker = {
  fleet1: {
    wraith: 100,
    frigate: 50
  }
}

const defender = {
  fleet1: {
    wraith: 30,
    frigate: 40
  },
  defenses: {
    turret: 50
  }
}

function engageDefenses(attacking, defending) {
      // Defense Turrets fire first
      Object.keys(defending.defenses).forEach((defense, i) => {
        // get stats
        let targets = defenses[defense].damage

        // attack the shipppps
        Object.keys(targets).forEach((target, i) => {
          // calculate damage
          let defenseDamage = defending.defenses[defense] * defenses[defense].damage[target];
          // ships killed
          let kills = Math.round(defenseDamage/ships[target].armor);
          attacking[target] = attacking[target]-kills>0 ? attacking[target]-kills : 0;

          console.log(`D: ${defense} A: ${target}`);
          console.log(`kills: ${kills}`);
        });
      });
}


function battle (attacking, defending) {

  // Loop through ships in battleOrder
  for (ship of battleOrder){
    // Def goes first
    fight(ship, defending, attacking);
    fight(ship, attacking, defending);
  }
}

function fight(ship, defending, attacking) {
  // Get ship stats
  let targets = ships[ship].damage;

  // Fire on targets
  Object.keys(targets).forEach(function(k,i) {
    if (defending[ship] > 0) {
      // calculate damage
      let defenseDamage = defending[ship] * ships[ship].damage[k];
      // ships killed
      let kills = Math.round(defenseDamage/ships[ship].armor);
      attacking[k] = attacking[k]-kills>0 ? attacking[k]-kills : 0;

      console.log(`D: ${ship} A: ${k}`);
      console.log(`kills: ${kills}`);
    }
  });
}

// console.log('Starting Attacker:');
// console.log(attacker);

// console.log('Starting Defender:');
// console.log(defender);

// How many rounds an attack lasts
let rounds = 3;

// Battle!
for(let x = 1; x <= rounds; x++) {
  console.log(`Round ${x}:`);
  engageDefenses(attacker.fleet1, defender);
  battle(attacker.fleet1, defender.fleet1);
  console.log(`Round ${x} Attacker:`);
  console.log(attacker);
  console.log(`Round ${x} Defender:`);
  console.log(defender);
}
