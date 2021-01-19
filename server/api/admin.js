const router = require('express').Router()
const {Tea} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const allTeas = await Tea.findAll()
    res.send(allTeas)
  } catch (error) {
    next(error)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const addTea = req.body
    console.log('new tea', addTea)
    const newTea = await Tea.create(addTea)
    res.json(newTea)
  } catch (error) {
    next(error)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    await Tea.destroy({where: {id: req.params.id}})
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
