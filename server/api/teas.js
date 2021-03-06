const router = require('express').Router()
const {Tea} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allTeas = await Tea.findAll()
    // const userId = req.query.userId
    // const user = await User.findByPk(userId)
    // console.log('whats is ', req.teas)

    res.send(allTeas)
    // } else {
    //   throw new Error('Not Authorized!')
    // }
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
    next(error)
  }
})
router.post('/add', async (req, res, next) => {
  try {
    const addTea = req.body
    console.log('what is req.body', addTea)
    // const userId = req.query.userId
    // const user = await User.findByPk(userId)
    if (req.user.dataValues.admin) {
      const newTea = await Tea.create(addTea)
      console.log('new tea from route', newTea)
      res.json(newTea)
    } else {
      throw new Error(401)
    }
  } catch (error) {
    next(error)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    // const userId = req.pram.userId
    // const user = await User.findByPk(userId)
    if (req.user.dataValues.admin) {
      await Tea.destroy({where: {id: req.params.id}})
      res.sendStatus(204)
    } else {
      throw new Error('Not Authorized!')
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:teaId', async (req, res, next) => {
  try {
    if (req.user.dataValues.admin) {
      const updatedTea = await Tea.findByPk(req.params.teaId)
      await updatedTea.update(req.body)
      res.status(204).send(updatedTea)
    } else {
      throw new Error('Not Authorized!')
    }
  } catch (error) {
    next(error)
  }
})
