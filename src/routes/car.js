'use strict';

// bring in express but attach Router to express
const express = require('express');

const router = express.Router();

// four CRUD/Rest methods for routers handler
router.get('/car', getAll);
router.post('/car', create);
router.put('/car', update);
router.delete('/car', destroy);

// a function to test the routes

function getAll(req, res) {
  res.send('In Progress');
}

function create(req, res) {
  res.send('In Progress');
}

function update(req, res) {
  res.send('In Progress');
}

function destroy(req, res) {
  res.send('In Progress');
}

module.exports = router;
