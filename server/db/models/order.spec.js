/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  let order
  before(() => db.sync({force: true}))
  beforeEach(() => {
    order = {
      active: true
    }
  })
  afterEach(() => db.sync({force: true}))

  it('has fields type, flavor, topping, size, price, inventory', async () => {
    order.notARealAttribute = 'does not compute'
    const savedOrder = await Order.create(order)
    expect(savedOrder.active).to.equal(true)
    expect(savedOrder.notARealAttribute).to.equal(undefined)
  })
})
