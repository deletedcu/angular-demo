module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("artist", {
    name: Sequelize.STRING,
    photoUrl: Sequelize.STRING,
    nationality: Sequelize.STRING,
    instrument: Sequelize.STRING,
    home_address: Sequelize.STRING
  }//,
  // {
  //   instanceMethods: {
  //     shout: function(){
  //       console.log("My name is " + this.name);
  //     }
  //   }
  // }
  );
  // model.sing = function(){
  //   console.log("Tra la la!");
  // };
  return model;
};
