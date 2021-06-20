'use strict';

//create a model 
//a function at recieve a instance of sequelize and DataTypes 
//return a sequelize model created
const carModel = (sequelize, DataTypes) => {
  return sequelize.define('Car', {
    name:{
      type: DataTypes.STRING,
      require: true,
    },
    color:{
      type: DataTypes.STRING,
      require:true,
    },
    doors:{
      type: DataTypes.INTEGER,
    }
  })
}

module.exports = carModel;
