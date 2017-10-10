var DB = require("../models").models;

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  });
};

artistCreate()
.then(function() {
	process.exit();
});
