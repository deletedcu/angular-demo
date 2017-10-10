var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ManagerSchema = new Schema({
  name: String,
  email: String,
  office_number: String,
  cell_phone_number: String
});

var Manager = mongoose.model('Manager', ManagerSchema);

module.exports = Manager;