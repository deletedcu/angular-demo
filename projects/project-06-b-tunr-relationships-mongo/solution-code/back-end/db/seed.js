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

let lucySongs = [
  {
    title: "O sole mio",
    duration: "3:21",
    date_of_release: "1990",
    album_title: "Three Tenors in Concert"
  },
  {
    title: "Nessun dorma",
    duration: "3:21",
    date_of_release: "1990",
    album_title: "Three Tenors in Concert"
  }
];

let rickBobAd = {
  headline: "Shake and Bake",
  url: "https://www.youtube.com/watch?v=vjNLsXwU790"
};

db.Song.remove({}, function(err, songs) {
  console.log('removed all songs');
  db.Song.create(lucySongs, function(err, savedSongs){
    if (err) {
      console.log(err);
      return;
    }
    console.log("created", savedSongs.length, "songs");

    db.Artist.remove({}, function(err, artists) {
      let lucy = new db.Artist({
        name: artists_list[0].name,
        photoUrl: artists_list[0].photoUrl,
        nationality: artists_list[0].nationality,
        instrument: artists_list[0].instrument,
        home_address: artists_list[0].home_address
      });
      lucy.songs = savedSongs;  
      lucy.save(function(err, savedArtist){
        if (err) {
          return console.log(err);
        }
        console.log('saved ' + savedArtist.name);
        db.Manager.remove({}, function(err, managers) {
          console.log('removed all managers');
          let bobby = new db.Manager({
            name: managers_list[0].name,
            email: managers_list[0].email,
            office_number: managers_list[0].office_number,
            cell_phone_number: managers_list[0].cell_phone_number
          });
          bobby.artists = savedArtist;
          bobby.ad = rickBobAd;
          bobby.save(function(err, savedManager){
            if (err) {
              console.log(err);
              return;
            }
            console.log("saved", savedManager.name);
            process.exit();
          });
        });
      });
    });
  });
});