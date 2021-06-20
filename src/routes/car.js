'use strict';

// bring in express but attach Router to express
const express = require('express');

const data = require('../models/index.js');

const router = express.Router();

// four CRUD/Rest methods for routers handler
router.get('/car', getAll);
router.get('/car/:carId', getOne);
router.post('/car', create);
router.put('/car/:carId', update);
router.delete('/car/:carId', destroy);

// a function to test the routes

async function getAll(req, res) {
  const carItems = await data.car.findAll();
  // console.log('check car Items from storage',carItems);
  res.status(200).send(carItems);
}

async function create(req, res) {
  const carObject = req.body;
  const carData = await data.car.create(carObject);
  res.status(200).send(carData);
}

async function getOne(req, res) {
  const carId = req.params.carId;
  const carItem = await data.car.findOne({
    where: {
      id: carId
    }
  });
  res.status(200).send(carItem);
}

async function update(req, res) {
  const carId = req.params.carId;
  const carObject = req.body;
  const carData = await data.car.findOne({
    where: {
      id: carId
    }
  });
  await carData.update(carObject);
  res.status(200).send(carData);
}

async function destroy(req, res) {
  const carId = req.params.carId;
  await data.car.destroy({
    where:{
      id: carId
    }
  });
  res.status(204).send('Deleted Item');
}

module.exports = router;
