var db = require('../models');
var Song = db.Song;

function index(req, res) {
  Song.find({}, function(err, songs) {
    if (err) res.send(err);
    else res.json(songs);
  });
}

function show(req, res) {
  Song.findById(req.params.id, function(err, song){
    if (err) res.send(err);
    else if (!song) res.send(res, "not found");
    else res.json(song);
  });  
}

function create(req, res) {
  Song.create(req.body, function(err, song){
    if (err) res.end(err);
    else if (!song) res.send(res, "not saved");
    else res.json(song);
  });
}

function update(req, res) {
  Song.findByIdAndUpdate(req.params.id, 
    {$set: req.body}, function(err, song){
    if (err) res.send(err);
    else res.json(song);
  });
}

function destroy(req, res) {
  Song.findByIdAndRemove(req.params.id, function(err, song){
    if (err) res.send(err);
    else if (!song) res.send(res, "not found");
    else res.send("song deleted");
  }); 
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;