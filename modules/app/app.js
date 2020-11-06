const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const peopleRouter = require('../people/people-router')
const petsRouter = require('../pets/pets-router')

const app = express()

app.use(cors())
app.use(helmet())

app.use('/api/people', peopleRouter)
app.use('/api/pets', petsRouter)

module.exports = app