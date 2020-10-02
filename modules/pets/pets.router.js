const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pets = Pets.get()
  res.status(200).json(pets)
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const {pet} = req.body
  Pets.dequeue(pet)
  res.status(204)
})

module.exports = router
