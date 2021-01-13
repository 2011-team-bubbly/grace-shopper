/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Drink = db.model('drink')

describe('Drink model', () => {
  let drink
  before(() => db.sync({force: true}))
  beforeEach(() => {
    drink = {
      tea: 'green',
      flavor: 'bones',
      topping: 'boba',
      size: 'small'
    }
  })
  afterEach(() => db.sync({force: true}))

  it('has fields tea, flavor, topping, size', async () => {
    drink.notARealAttribute = 'does not compute'
    const savedDrink = await Drink.create(drink)
    expect(savedDrink.tea).to.equal('green')
    expect(savedDrink.flavor).to.equal('bones')
    expect(savedDrink.topping).to.equal('boba')
    expect(savedDrink.size).to.equal('small')
    expect(savedDrink.notARealAttribute).to.equal(undefined)
  })

  it('flavor cannot be null', async () => {
    drink.flavor = null
    try {
      const emptyDrinkFlavor = await Drink.create(drink)
      if (emptyDrinkFlavor) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('topping cannot be null', async () => {
    drink.topping = null
    try {
      const emptyDrinkTopping = await Drink.create(drink)
      if (emptyDrinkTopping) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('tea cannot be null or an empty string', async () => {
    drink.tea = ''
    try {
      const emptyDrinkTea = await Drink.create(drink)
      if (emptyDrinkTea) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }

    //test for null
    drink.tea = null
    try {
      const emptyDrinkTea = await Drink.create(drink)
      if (emptyDrinkTea) {
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('size cannot be null or an empty string', async () => {
    drink.size = ''
    try {
      const emptyDrinkSize = await Drink.create(drink)
      if (emptyDrinkSize) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }

    //test for null
    drink.size = null
    try {
      const emptyDrinkSize = await Drink.create(drink)
      if (emptyDrinkSize) {
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  // describe('drink model', () => {
  //   describe('proper drink', () => {
  //     let drink1

  //     beforeEach(async () => {
  //       drink1 = await Drink.create({
  //         tea: 'codycom',
  //         flavor: 'bones',
  //         topping: 'blue',
  //         size: 'woof'
  //       })
  //     })

  //     it('returns a drink', () => {
  //       expect(drink1).to.be.equal(true)
  //     })

  //     it('returns false if the password is incorrect', () => {
  //       expect(cody.correctPassword('bonez')).to.be.equal(false)
  //     })
  //   }) // end describe('correctPassword')
  // }) // end describe('instanceMethods')
}) // end describe('Drink model')
