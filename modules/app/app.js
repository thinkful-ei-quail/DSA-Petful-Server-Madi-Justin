const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { NODE_ENV } = require('../config')
const peopleRouter = require('../people/people.router')
const petsRouter = require('../pets/pets.router')

const app = express()

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting))

app.use(helmet())
app.use(cors())

app.use('/people', peopleRouter)
app.use('/pets', petsRouter)

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { error };
  }
  res.status(500).json(response);
});

module.exports = app
