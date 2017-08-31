const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imperial-fleet');

const Schema = mongoose.Schema;

const TurretSchema = new Schema({
	turretNumber: Number,
	damage: Number
});

const Turret = mongoose.model('Turret', TurretSchema);

const allTurrets = [
	{
		turretNumber: 1,
		damage: 2
	},
	{
		turretNumber: 2,
		damage: 0
	},
	{
		turretNumber: 3,
		damage: 8
	},
	{
		turretNumber: 4,
		damage: 6
	},
	{
		turretNumber: 5,
		damage: 4
	},
	{
		turretNumber: 6,
		damage: 2
	},
	{
		turretNumber: 7,
		damage: 0
	},
	{
		turretNumber: 8,
		damage: 1
	},
	{
		turretNumber: 9,
		damage: 2
	},
	{
		turretNumber: 10,
		damage: 3
	},
		{
		turretNumber: 11,
		damage: 4
	},
	{
		turretNumber: 12,
		damage: 5
	},
	{
		turretNumber: 13,
		damage: 6
	},
	{
		turretNumber: 14,
		damage: 7
	},
	{
		turretNumber: 15,
		damage: 8
	},
	{
		turretNumber: 16,
		damage: 9
	}
];

Turret.remove({}, function(err, turrets) {
	Turret.create(allTurrets, function(err, turrets) {
		console.log("Created " + turrets.length + " turrets");
		process.exit();
	});
});