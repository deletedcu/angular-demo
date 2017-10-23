var DB = require("../models");

DB.sequelize.sync({force: true}).then(function(){
  process.exit();
});