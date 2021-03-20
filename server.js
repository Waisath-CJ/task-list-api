// require necessary NPM packages
const express = require('express')

// define server and client ports
// used for cors and local port declaration
const serverDevPort = 4741
const clientDevPort = 7165

// instantiate express application object
const app = express()

// define port for API to run on
const port = process.env.PORT || serverDevPort

// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(express.json())
// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }))

// register routes
app.use('/', (req, res, next) => {
  res.write("Hello world!")
  res.send()
})

// run API on designated port (4741 in this case)
app.listen(port, () => {
  console.log('listening on port ' + port)
})