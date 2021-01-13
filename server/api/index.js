const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/drinks', require('./drinks'))

router.use((req, res, next) => {
  const error = new Error('api route not Found')
  error.status = 404
  next(error)
})

module.exports = router
