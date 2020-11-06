const express = require('express')
const json = require('body-parser').json()

const PetService = require('./pets-service')
const PeopleService = require('../people/people-service')

const petsRouter = express.Router()

petsRouter
  .route('/')
  .get((req, res) => {
    try {
      res.status(200).json(PetService.getAll())
    }
    catch (e) {
      res.status(404).json({e: 'There are no more pets to adopt!'})
    }
  })

petsRouter
  .route('/cat')
  .get((req, res) => {
    try {
      res.status(200).json(PetService.get('cat'))
    }
    catch (e) {
      res.status(404).json({e: 'There are no more cats to adopt!'})
    }
  })
  .delete(json, (req, res, next) => {
    try {
      PetService.dequeue('cat')
      PeopleService.dequeue()
      res.status(204).end()
    }
    catch (e) {
      next(e)
    }
  })

petsRouter
.route('/dog')
.get((req, res) => {
  try {
    res.status(200).json(PetService.get('dog'))
  }
  catch (e) {
    res.status(404).json({e: 'There are no more dogs to adopt!'})
  }
})
.delete(json, (req, res, next) => {
  try {
    PetService.dequeue('dog')
    PeopleService.dequeue()
    res.status(204).end()
  }
  catch (e) {
    next(e)
  }
})


module.exports = petsRouter
