var db = require('../models');
var Manager = db.Manager;

function index(req, res) {
  Manager.find({}, function(err, managers) {
    if (err) res.send(err);
    else res.json(managers);
  });
}

function show(req, res) {
  Manager.findById(req.params.id).populate('artists')
    .exec(function(err, manager){
      if (err) res.send(err);
      else res.json(manager);
    });  
}

function create(req, res) {
  Manager.create(req.body, function(err, manager){
    if (err) res.end(err);
    else res.json(manager);
  });
}

function update(req, res) {
  Manager.findByIdAndUpdate(req.params.id, 
    {$set: req.body}, function(err, manager){
    if (err) res.send(err);
    else res.json(manager);
  });
}

function destroy(req, res) {
  Manager.findByIdAndRemove(req.params.id, function(err, manager){
    if (err) res.send(err);
    else res.send("manager deleted");
  }); 
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;