## Ships

**Wraith**
- Small ship

**Astrodrone**
- Steals Asteroids


--

## Battle

- Defensive structures go first
  - To offset this advantage: the more you have, the less effective they are (slightly)
- Cycle through each ship in the order

- Plunder goes to attacker
- Salvage goes to defender
  - randomized 1% - 10% cost of each lost unit

  --

## Economy
**Resources:**
- Platinum
- Crystal

**Asteroids:**
- Platinum
- Crystal
- Uninitiated

- Every tick a user gets resources from mining asteroids, as well as a base planet income that can be upgraded and invested in.


# User Model
```javascript
{
    name: 'Player 2',
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
        platinum: 0,
        crystal: 0
      }
    },
    technology: {
      "mining": "one"
    },
    plunder: {
      asteroids: {
        platinum: 0,
        crystal: 0,
        uninitiated: 0
      }
    }
  }
```

## Fleet Model

```javascript
var fleetSchema = new Schema({
  user_id: Number,
  name: String,
  /* Status Options: 0: 'home', 1: 'attacking', 2: 'defending' */
  status: { type: Number, default: 0 },
  /* Position Options: 'outbound', 'inbound', 'battle' */
  position: {
    direction: String,
    eta: { type: Number, default: 0 }
  },
  units: {
    wraith: { type: Number, default: 0 },
    frigate: { type: Number, default: 0 },
    astrodrone: { type: Number, default: 0 }
  },
  plunder: {
    asteroids: {
      platinum: { type: Number, default: 0 },
      crystal: { type: Number, default: 0 },
      uninitiated: { type: Number, default: 0 }
    }
  },
  created_at: Date,
  updated_at: Date
});
```