const router = require('express').Router()
const {Tea} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allTeas = await Tea.findAll()
    res.send(allTeas)
  } catch (error) {
    next(error)
  }
})

router.get('/:teaId', async (req, res, next) => {
  try {
    const id = Number(req.params.teaId)
    if (isNaN(id)) {
      return res.sendStatus(400)
    }
    const tea = await Tea.findByPk(req.params.teaId)
    if (!tea) {
      return res.sendStatus(404)
    }
    res.status(200).json(tea)
  } catch (error) {
    console.log('There was and error in the drinkId api route', error)
    next(error)
  }
})
