var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  units: {
    wraith: Number,
    frigate: Number,
    astrodrone: Number
  },
  assets: {
    asteroids: {
      platinum: Number,
      crystal: Number,
      uninitiated: Number
    },
    resources: {
      platinum: Number,
      crystal: Number
    }
  },
  technology: {
    "mining": String
  },
  plunder: {
    asteroids: {
      platinum: Number,
      crystal: Number,
      uninitiated: Number
    }
  },
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);
module.exports = User;