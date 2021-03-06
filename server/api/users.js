const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    // const userId = req.query.id
    // const user = await User.findByPk(userId)
    // console.log('whats is ', req.user)
    if (req.user.dataValues.admin) {
      //user is admin
      res.json(users)
    } else {
      throw new Error('Not Authorized!')
    }
  } catch (err) {
    next(err)
  }
})
