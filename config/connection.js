var mongoose = require('mongoose');
var db = 'mongodb://localhost/scheduler';

module.exports = mongoose.connect(db);