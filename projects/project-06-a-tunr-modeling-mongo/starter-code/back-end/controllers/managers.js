var db = require('../models');
var Manager = db.Manager;

function index(req, res) {
	Manager.find({}, function(err, managers) {
		if (err) res.send(err);
		else res.json(managers);
	});
}

module.exports.index = index;