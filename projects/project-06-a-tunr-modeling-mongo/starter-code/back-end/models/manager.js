var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ManagerSchema = new Schema({
  name: String
});

var Manager = mongoose.model('Manager', ManagerSchema);

module.exports = Manager;