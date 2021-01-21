const router = require('express').Router()
const {Order, OrderItem, Tea, User} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {include: Tea})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.get('/:orderId/orderitem', async (req, res, next) => {
  try {
    const order = await OrderItem.findAll({
      where: {
        orderId: req.params.orderId
      }
    })
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
    await orderItem.save()
    const order = await Order.findByPk(req.params.orderId, {
      include: {
        model: Tea,
        where: {
          id: req.body.id
        }
      }
    })
    console.log('api', order)
    res.json(order)
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

router.post('/checkout/:orderId', async (req, res, next) => {
  try {
    const curOrder = await Order.findByPk(req.params.orderId)
    curOrder.active = false
    await curOrder.save()

    const user = await User.findByPk(req.body.id)
    await Order.create({
      userId: user.id,
      active: true
    })
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
