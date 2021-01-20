// const router = require('express').Router()
// const {Tea, User} = require('../db/models')

// router.get('/:userId', async (req, res, next) => {
//   try {
//     const allTeas = await Tea.findAll()
//    const userId = req.query.userId
//     const user = await User.findByPk(userId)
//     if (user.admin) {
//       //user is admin
//       res.send(allTeas)
//     } else {
//       throw new Error('Not Autorized!')
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// router.post('/add', async (req, res, next) => {
//   try {
//     const addTea = req.body
//     const userId = req.query.userId
//     const user = await User.findByPk(userId)
//     if (user.admin) {
//       const newTea = await Tea.create(addTea)
//       res.json(newTea)
//     } else {
//       throw new Error('Not Autorized!')
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const userId = req.query.userId
//     const user = await User.findByPk(userId)
//     if (user.admin) {
//       await Tea.destroy({where: {id: req.params.id}})
//       res.sendStatus(204)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// module.exports = router
