'use strict'

const db = require('../server/db')
const {User, Tea, Order, OrderItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'mati',
      lastName: 'dejene',
      email: 'cody@email.com',
      password: '123',
      admin: false
    }),
    User.create({
      firstName: 'mati',
      lastName: 'dejene',
      email: 'murphy@email.com',
      password: '123',
      admin: true
    }),
    User.create({
      firstName: 'react',
      lastName: 'redux',
      email: 'react@email.com',
      password: '12345',
      admin: true
    })
  ])

  const teas = await Promise.all([
    Tea.create({
      type: 'black',
      flavor: 'strawberry',
      topping: 'jelly',
      size: 'medium',
      price: 499
    }),
    Tea.create({
      type: 'jasmine',
      flavor: 'mango',
      topping: 'boba',
      size: 'large',
      price: 599
    }),
    Tea.create({
      type: 'green',
      flavor: '',
      topping: '',
      size: 'small',
      price: 399
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'butter',
      topping: 'popcorn',
      size: ' extra large',
      price: 9999
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'coconut',
      topping: 'pineapple',
      size: 'large',
      price: 800
    }),
    Tea.create({
      type: 'black',
      flavor: 'blueberry',
      topping: 'jelly',
      size: 'medium',
      price: 5000
    }),
    Tea.create({
      type: 'jasmine',
      flavor: 'mint',
      topping: 'boba',
      size: 'large',
      price: 6000
    }),
    Tea.create({
      type: 'chai',
      flavor: '',
      topping: 'boba',
      size: 'small',
      price: 4000
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'vanilla',
      topping: 'boba',
      size: ' extra large',
      price: 7000
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'coconut',
      topping: 'rasberry',
      size: 'medium',
      price: 5000
    })
  ])

  const orders = await Promise.all([
    Order.create({
      userId: 1
    }),
    Order.create({
      userId: 2
    }),
    Order.create({
      userId: 2
    }),
    Order.create({
      userId: 1
    }),
    Order.create({
      userId: 6
    }),
    Order.create({
      userId: 3
    }),
    Order.create({
      userId: 4
    }),
    Order.create({
      userId: 5
    }),
    Order.create({
      userId: 6
    }),
    Order.create({
      userId: 4
    })
  ])

  const orderItems = await Promise.all([
    OrderItem.create({
      orderId: 1,
      teaId: 1,
      quantity: 3
    }),
    OrderItem.create({
      orderId: 1,
      teaId: 2,
      quantity: 7
    }),
    OrderItem.create({
      orderId: 3,
      teaId: 2,
      quantity: 1
    }),
    OrderItem.create({
      orderId: 4,
      teaId: 1,
      quantity: 1
    }),
    OrderItem.create({
      orderId: 5,
      teaId: 2,
      quantity: 2
    }),
    OrderItem.create({
      orderId: 6,
      teaId: 3,
      quantity: 2
    }),
    OrderItem.create({
      orderId: 7,
      teaId: 4,
      quantity: 4
    }),
    OrderItem.create({
      orderId: 8,
      teaId: 5,
      quantity: 1
    }),
    OrderItem.create({
      orderId: 9,
      teaId: 5,
      quantity: 1
    })
  ])

  console.log(`seeded ${orderItems.length} orderItems`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${teas.length} teas`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
