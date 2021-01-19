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

router.post('/addTea', async (req, res, next) => {
  try {
    const addTea = req.body
    const newTea = await Tea.Create(addTea)
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
