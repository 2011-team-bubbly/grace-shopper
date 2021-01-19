const router = require('express').Router()
const {Order, OrderItem, Tea} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {include: Tea})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.post('/:orderId', async (req, res, next) => {
  try {
    const [orderItem, created] = await OrderItem.findOrCreate({
      where: {
        orderId: req.params.orderId,
        teaId: req.body.id
      }
    })
    if (created) {
      orderItem.quantity = 1
    } else {
      orderItem.quantity += 1
    }
    orderItem.subtotal = req.body.price * orderItem.quantity
    orderItem.save()
    res.json(orderItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/:orderId/:teaId', async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: {
        orderId: req.params.orderId,
        teaId: req.params.teaId
      }
    })
    await orderItem.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
