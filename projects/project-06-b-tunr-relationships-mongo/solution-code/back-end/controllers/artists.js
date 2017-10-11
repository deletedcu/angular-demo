var db = require('../models');
var Artist = db.Artist;

function index(req, res) {
  Artist.find({}, function(err, artists) {
    if (err) res.send(err);
    else res.json(artists);
  });
}

function show(req, res) {
  Artist.findById(req.params.id).populate('songs')
    .exec(function(err, artist){
      if (err) res.send(err);
      else res.json(artist);
    });  
}

function create(req, res) {
  Artist.create(req.body, function(err, artist){
    if (err) res.end(err);
    else res.json(artist);
  });
}

function update(req, res) {
  Artist.findByIdAndUpdate(req.params.id, 
    {$set: req.body}, function(err, artist){
    if (err) res.send(err);
    else res.json(artist);
  });
}

function destroy(req, res) {
  Artist.findByIdAndRemove(req.params.id, function(err, artist){
    if (err) res.send(err);
    else res.send("artist deleted");
  }); 
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;