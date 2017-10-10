let db = require('../models');

let artists_list = [
  {
   name: 'Luciano Pavarotti',
   photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
   nationality: 'Italiano',
   instrument: 'Voice',
   home_address: '1 Strada Roma'
  }
];

let managers_list = [
  {
   name: 'Ricky Bobby',
   email: 'rbobby@gmail.com',
   office_number: '516-877-0304',
   cell_phone_number: '718-989-1231'
  }
];

let songs_list = [
  {
    title: 'The Best Song Ever',
    duration: '3:31',
    date_of_release: '7/13/2015',
    album_title: 'Best Album Ever'
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
  	db.Manager.remove({}, function(err, managers) {
      console.log('removed all managers');
      db.Manager.create(managers_list, function(err, managers){
        if (err) {
          console.log(err);
          return;
        }
        console.log("created", managers.length, "songs");
        db.Song.remove({}, function(err, songs) {
          console.log('removed all songs');
          db.Song.create(songs_list, function(err, songs){
            if (err) {
              console.log(err);
              return;
            }
            console.log("created", songs.length, "songs");
            process.exit();
          });
        });
      });
    });
  });
});