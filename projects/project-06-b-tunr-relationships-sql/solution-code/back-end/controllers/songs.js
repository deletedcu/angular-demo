var db = require('../models');
var Song = db.models.Song;

function index(req, res) {
	Song.findAll().then(function(songs) {
		res.json(songs);
	});
}

function show(req, res) {
  Song.findById(req.params.id)
  .then(function(song){
    if(!song) res.send("song not found");
    else res.json(song);
  });	
}

function create(req, res) {
	Song.create(req.body).then(function(song){
    if(!song) res.send("song not saved");
    else res.json(song);
  });
}

function update(req, res) {
  Song.findById(req.params.id)
  .then(function(song){
    if(!song) res.send("song not found");
    else return song.updateAttributes(req.body);
  })
  .then(function(song){
    res.json(song);
  });
}

function destroy(req, res) {
  Song.findById(req.params.id)
  .then(function(song){
    if(!song) res.send("song not found");
    else return song.destroy();
  })
  .then(function(){
    res.send("song deleted");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;