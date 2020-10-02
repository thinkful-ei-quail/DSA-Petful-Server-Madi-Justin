const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get()
  res.status(200).send(people) //check to make sure this works
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { name } = req.body
  People.enqueue(name)
  res.status(201).json(name)
})

router.delete('/', (req, res) => {
  People.dequeue()
  res.status(204).end()
})

module.exports = router
