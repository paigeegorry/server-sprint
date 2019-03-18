const express = require('express');
const app = express();
// const connection = require('../lib/middleware/connection');
const { handler } = require('../lib/middleware/error.js');

app.use(require('../lib/middleware/cors'));
app.use(express.json());
app.use(handler);

module.exports = app;
