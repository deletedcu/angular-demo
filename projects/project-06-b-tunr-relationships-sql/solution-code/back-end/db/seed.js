var DB = require("../models").models;

var lucySongs = [
     {
          title: "O sole mio",
          duration: "3:21",
          date_of_release: "1990",
          album_title: "Three Tenors in Concert",
          artistId: ""
     },
     {
          title: "Nessun dorma",
          duration: "3:21",
          date_of_release: "1990",
          album_title: "Three Tenors in Concert",
          artistId: ""
     }
];

var artistCreate = function(managerId) {
     return DB.Artist.create({
    name: 'Luciano Pavarotti',
    photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
    nationality: 'Italiano',
    instrument: 'Voice',
    home_address: '1 Strada Roma',
    managerId: managerId
  }).then(function(artist) {
     lucySongs.forEach(function(song) {
          song.artistId = artist.id;
     });
     DB.Song.bulkCreate(lucySongs);
  });
};
 
 var managerCreate = function() {
 	return DB.Manager.create({
     name: 'Ricky Bobby',
     email: 'rbobby@gmail.com',
     office_number: '516-877-0304',
     cell_phone_number: '718-989-1231'
 	}).then(function(manager) {
          artistCreate(manager.id);
          adCreate(manager.id);
     });
 };
 
 var songCreate = function() {
 	return DB.Song.create({
 	    title: 'The Best Song Ever',
 	    duration: '3:31',
 	    date_of_release: '7/13/2015',
 	    album_title: 'Best Album Ever'
 	});
 };

var adCreate = function(managerId) {
     return DB.Ad.create({
          headline: "Ricking all the Bobbies since 1972",
          url: "http://www.zombo.com",
          managerId: managerId
     });
};

managerCreate()
.then(songCreate)
.then(function() {
     process.exit();
});