const router = require('express').Router()
const {Drink} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allDrinks = await Drink.findAll()
    res.send(allDrinks)
  } catch (error) {
    next(error)
  }
})

router.get('/:drinkId', async (req, res, next) => {
  try {
    const id = Number(req.params.drinkId)
    if (isNaN(id)) {
      return res.sendStatus(400)
    }
    const drink = await Drink.findByPk(req.params.drinkId)
    if (!drink) {
      return res.sendStatus(404)
    }
    res.status(200).json(drink)
  } catch (error) {
    console.log('There was and error in the drinkId api route', error)
    next(error)
  }
})
