const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/teas', require('./teas'))
router.use('/orders', require('./orders'))
// router.use('/admin', require('./admin'))

router.use((req, res, next) => {
  const error = new Error('api route not Found')
  error.status = 404
  next(error)
})

module.exports = router
