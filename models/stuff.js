var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stuffSchema = new Schema({
  task: String
});

module.exports = mongoose.model('stuff', stuffSchema);