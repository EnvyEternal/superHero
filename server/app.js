const express = require('express')
const router = require('./routers/router')
const cors = require('cors')

const app = express()

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())
app.use('/api', router)
app.use(cors({
  origin:'*'
}))

module.exports = app
