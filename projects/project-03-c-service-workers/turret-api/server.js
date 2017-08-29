const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost/imperial-fleet');

const Schema = mongoose.Schema;

const TurretSchema = new Schema({
	turretNumber: Number,
	damage: Number
});

const Turret = mongoose.model('Turret', TurretSchema);

app.use(cors());

app.get('/', function(req, res) {
	res.send("Did you mean to go to /api/turret/:id?");
});

app.get('/api/turret/:id', function(req, res) {
	Turret.findOne({turretNumber: req.params.id}, function(err, turret) {
		res.send(turret);
	});
});

app.listen(3000);