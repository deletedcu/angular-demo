module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("ad", {
    headline: Sequelize.STRING,
    url: Sequelize.STRING
  });
  return model;
};