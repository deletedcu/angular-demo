//Connect
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunr_models");

module.exports.Artist = require("./artist");
module.exports.Manager = require("./manager");
module.exports.Song = require("./song");