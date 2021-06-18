'use strict';

// entry point import 

require('dotenv').config();

const server = require('./src/server.js');

const PORT = process.env.PORT || 3000;

server.start(PORT);
