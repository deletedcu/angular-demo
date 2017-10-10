module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("song", {
    title: Sequelize.STRING,
    duration: Sequelize.STRING,
    date_of_release: Sequelize.STRING,
    album_title: Sequelize.STRING
  });
  return model;
};