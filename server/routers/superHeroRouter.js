const express = require('express')
const { createSuperHero, getAll, addImageById } = require('../controllers/superHeroController')
const {upload} = require('../middleware')


const superHeroRouter = express.Router()

superHeroRouter.post('/', upload.single('add_image'), createSuperHero)

superHeroRouter.get('/:pageId', getAll)

superHeroRouter.patch('/:heroId/images', upload.single('add_image'), addImageById)

module.exports = superHeroRouter