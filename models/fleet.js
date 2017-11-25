var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fleetSchema = new Schema({
  user_id: Number,
  name: String,
  status: { type: Number, default: 0 },
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

module.exports = mongoose.model('Fleet', fleetSchema);