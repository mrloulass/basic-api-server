'use strict'

const express = require('express');

const router = express.Router();

router.get('/game', getAll);
router.post('/game', create);
router.put('/game', update);
router.delete('/game', destroy);

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
