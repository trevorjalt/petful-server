const express = require('express')
const json = require('body-parser').json()

const PeopleService = require('./people-service')
const peopleRouter = express.Router()

peopleRouter
  .route('/')
  .get((req, res) => {
    try {
      res.status(200).json(PeopleService.get())
    }
    catch (e) {
      res.status(404).json({e:'There are no more people in the queue!'})
    }
  })
  .post(json, (req, res, next) => {
    try {
      const { person } = req.body
      PeopleService.enqueue(person)
      res.status(201).json(PeopleService.get())
    }
    catch (e) {
      next(e)
    }
  })

module.exports = peopleRouter
