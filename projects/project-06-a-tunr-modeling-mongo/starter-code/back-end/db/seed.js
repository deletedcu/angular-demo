let db = require('./models');

let artists_list = [
	{
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  }
];

db.Artist.remove({}, function(err, artists) {
  console.log('removed all artists');
  db.Artist.create(artists_list, function(err, artists){
  	if (err) {
  	  console.log(err);
  	  return;
  	}
  	console.log("created", artists.length, "artists");
  	process.exit();
  });
});