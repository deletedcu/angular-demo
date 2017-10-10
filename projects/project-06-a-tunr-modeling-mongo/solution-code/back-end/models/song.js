var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
	title: String,
	duration: String,
	date_of_release: String,
	album_title: String
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;