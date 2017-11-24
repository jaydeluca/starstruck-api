var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tickSchema = new Schema({
  position: Number
});

module.exports = mongoose.model('Tick', tickSchema);