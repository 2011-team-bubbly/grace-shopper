'use strict'

const db = require('../server/db')
const {User, Tea, Order, OrderItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Mati',
      lastName: 'Dejene',
      email: 'mati@email.com',
      password: '123',
      admin: true
    }),
    User.create({
      firstName: 'M',
      lastName: 'D',
      email: 'md@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Eric',
      lastName: 'Zou',
      email: 'eric@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'E',
      lastName: 'Z',
      email: 'ez@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Leon',
      lastName: 'Zhao',
      email: 'Leon@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'L',
      lastName: 'Z',
      email: 'lz@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Naomi',
      lastName: 'Diaz',
      email: 'naomi@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'N',
      lastName: 'D',
      email: 'nd@email.com',
      password: '123'
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
      price: 500
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
      price: 400
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'vanilla',
      topping: 'boba',
      size: ' extra large',
      price: 700
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'coconut',
      topping: 'rasberry',
      size: 'medium',
      price: 500
    }),
    Tea.create({
      type: 'blackberry',
      flavor: 'strawberry',
      topping: 'jelly',
      size: 'medium',
      price: 499
    }),
    Tea.create({
      type: 'orange',
      flavor: 'mango',
      topping: 'boba',
      size: 'large',
      price: 599
    }),
    Tea.create({
      type: 'jasmine',
      flavor: '',
      topping: '',
      size: 'small',
      price: 399
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'vanilla',
      topping: '',
      size: ' extra large',
      price: 999
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'coconut',
      topping: 'boba',
      size: 'large',
      price: 800
    }),
    Tea.create({
      type: 'blackcherry',
      flavor: 'blueberry',
      topping: 'jelly',
      size: 'medium',
      price: 500
    }),
    Tea.create({
      type: 'jasmine',
      flavor: '',
      topping: 'boba',
      size: 'large',
      price: 600
    }),
    Tea.create({
      type: 'chai',
      flavor: 'pasion',
      topping: 'boba',
      size: 'small',
      price: 400
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'vanilla',
      topping: 'grape',
      size: ' extra large',
      price: 700
    }),
    Tea.create({
      type: 'grape',
      flavor: 'coconut',
      topping: 'rasberry',
      size: 'small',
      price: 400
    }),
    Tea.create({
      type: 'black',
      flavor: 'strawberry',
      topping: 'jelly',
      size: 'large',
      price: 600
    }),
    Tea.create({
      type: 'jasmine',
      flavor: 'mango',
      topping: 'boba',
      size: 'extra large',
      price: 700
    }),
    Tea.create({
      type: 'green',
      flavor: 'ginger',
      topping: '',
      size: 'small',
      price: 399
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'butter',
      topping: 'popcorn',
      size: 'large',
      price: 800
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'pine',
      topping: 'pineapple',
      size: 'large',
      price: 800
    }),
    Tea.create({
      type: 'black',
      flavor: 'peanut butter',
      topping: 'jelly',
      size: 'medium',
      price: 500
    }),
    Tea.create({
      type: 'jasmine',
      flavor: 'jelly',
      topping: 'boba',
      size: 'large',
      price: 6000
    }),
    Tea.create({
      type: 'chai',
      flavor: 'chocolate',
      topping: 'boba',
      size: 'small',
      price: 400
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'chocolate',
      topping: 'boba',
      size: ' extra large',
      price: 700
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'milk',
      topping: 'rasberry',
      size: 'medium',
      price: 500
    }),
    Tea.create({
      type: 'blackberry',
      flavor: 'blueberry',
      topping: 'jelly',
      size: 'medium',
      price: 499
    }),
    Tea.create({
      type: 'mint',
      flavor: 'mango',
      topping: 'boba',
      size: 'large',
      price: 599
    }),
    Tea.create({
      type: 'jasmine',
      flavor: 'raspberry',
      topping: '',
      size: 'small',
      price: 399
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'rum',
      topping: '',
      size: ' extra large',
      price: 999
    }),
    Tea.create({
      type: 'earl grey',
      flavor: 'fudge',
      topping: 'boba',
      size: 'large',
      price: 800
    }),
    Tea.create({
      type: 'blackcherry',
      flavor: 'watermelon',
      topping: 'jelly',
      size: 'medium',
      price: 500
    }),
    Tea.create({
      type: 'jasmine',
      flavor: 'mango',
      topping: 'boba',
      size: 'extra large',
      price: 900
    }),
    Tea.create({
      type: 'chai',
      flavor: 'pasion',
      topping: '',
      size: 'small',
      price: 400
    }),
    Tea.create({
      type: 'oolong',
      flavor: 'vanilla',
      topping: '',
      size: ' extra large',
      price: 700
    }),
    Tea.create({
      type: 'milk',
      flavor: 'coconut',
      topping: 'rasberry',
      size: 'medium',
      price: 500
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
