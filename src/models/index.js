`use strict`
//this index file in models will help conntect to  postgres database

require('dotenv').config();

//this line use to connect database
//DATABASE_URL Heroku uses this name
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:'

// Bring in two things from Sequelize
// Sequelize lets us create data models,
// DataTypes represent the types of data we can create in SQL
// only want to bring in sequelize once in the model/index file
const{Sequelize, DataTypes} = require ('sequelize');

const carModel = require('./car.js');
const gameModel = require('./game.js');

//this work like the express(), 
let sequelize = new Sequelize (DATABASE_URL);

//changed the sequelize object using a model
const car = carModel(sequelize, DataTypes);
const game = gameModel(sequelize, DataTypes);

module.exports = {
  dataBase: sequelize, //use this in our entry file and our test file to tell our environments we are preparing to do CRUD.
  car,
  game
};
