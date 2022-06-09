/* eslint-disable no-console */

const express = require('express')

// import constants from './config/constants';
const constants = require('./config/constants')
require('./config/database')

const middlewaresConfig = require('./config/middlewares') ;
const apiRoutes = require('./modules');

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${constants.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great
    `);
  }
});
