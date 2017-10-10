//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://<username>@localhost:5432/tunr_models');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");

module.exports.models = {
	Artist: Artist,
	Manager: Manager
};
