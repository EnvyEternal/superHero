const express = require('express')
const { createSuperHero, getAll } = require('../controllers/superHeroController')


const superHeroRouter = express.Router()

superHeroRouter.post('/', createSuperHero)

superHeroRouter.get('/:pageId', getAll)

module.exports = superHeroRouter