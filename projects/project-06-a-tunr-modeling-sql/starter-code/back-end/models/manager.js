module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("manager", {
    name: Sequelize.STRING
  });
  return model;
};
