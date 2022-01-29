const heroRouter = require('./superHeroRouter')
const express = require('express')

const router = express.Router()

router.use('/superhero', heroRouter)

module.exports = router