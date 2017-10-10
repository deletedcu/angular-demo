var DB = require("../models").models;

 var artistCreate = function() {
 	return DB.Artist.create({
     name: 'Luciano Pavarotti',
     photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
     nationality: 'Italiano',
     instrument: 'Voice',
     home_address: '1 Strada Roma'
   });
 };
 
 var managerCreate = function() {
 	return DB.Manager.create({
     name: 'Ricky Bobby',
     email: 'rbobby@gmail.com',
     office_number: '516-877-0304',
     cell_phone_number: '718-989-1231'
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
 
 artistCreate()
 .then(managerCreate)
 .then(songCreate)
 .then(function() {
 	process.exit();
 }); 