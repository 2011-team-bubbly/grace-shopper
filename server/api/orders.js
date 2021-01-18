const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
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
        teaId: req.body.tea.id
      }
    })
    if (created) {
      orderItem.quantity = 1
    } else {
      orderItem.quantity += 1
    }
    orderItem.subtotal = req.body.tea.price * orderItem.quantity
    orderItem.save()
    res.json(orderItem)
  } catch (error) {
    next(error)
  }
})
