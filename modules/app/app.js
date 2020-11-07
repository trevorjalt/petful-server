const express = require('express')
const cors = require('cors')
require('dotenv').config()
const helmet = require('helmet')
const peopleRouter = require('../people/people-router')
const petsRouter = require('../pets/pets-router')

const app = express()

app.options('*', cors())
app.use(cors({
    origin: CLIENT_ORIGIN
}))
app.use(helmet())

app.use('/api/people', peopleRouter)
app.use('/api/pets', petsRouter)

module.exports = app