// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express()

const timestamp = (req, res, next) => {
  const timestamp = new Date()
  req.timestamp = timestamp.toString()
  next()
}

app.use(timestamp)

const config = {
  views: 'views',
  static: 'public',
  logging: true,
}

vertex.configureApp(app, config)

// import routes
const index = require('./routes/index')
const register = require('./routes/register')

// set routes
app.use('/', index)
app.use('/register', register)

module.exports = app
