'use strict'

// bring in Express

const express = require ('express');
const carRouter = require('./routes/car.js');
const gameRouter = require('./routes/game.js');

const logger = require ('./middleware/logger.js');
const validator = require ('./middleware/validator.js');

const err404 = require ('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');

const app = express();

// hookup router's resouces

app.use(carRouter);
app.use(gameRouter);

app.use(logger);
app.use(validator);

app.get('/person',validator,(req,res)=>{
  res.send({
    name:"louis",
  })
})

app.use(err404);
app.use(err500);




module.exports = {
  app: app,
  start:(PORT)=> {
    app.listen(PORT, () => console.log('Server is Running'))
  },
}
