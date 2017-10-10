module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("manager", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    office_number: Sequelize.STRING,
    cell_phone_number: Sequelize.STRING
  });
  return model;
};