var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AdSchema = new Schema({
  headline: String,
  url: String
});

var ManagerSchema = new Schema({
  name: String,
  email: String,
  office_number: String,
  cell_phone_number: String,
  artists: [{type: Schema.Types.ObjectId, ref: 'Artist'}],
  ad: AdSchema
});

var Manager = mongoose.model('Manager', ManagerSchema);

module.exports = Manager;