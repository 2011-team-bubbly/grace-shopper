/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Tea = db.model('tea')

describe('Tea model', () => {
  let tea
  before(() => db.sync({force: true}))
  beforeEach(() => {
    tea = {
      type: 'green',
      flavor: 'bones',
      topping: 'boba',
      size: 'small',
      price: 500,
      inventory: 5
    }
  })
  afterEach(() => db.sync({force: true}))

  it('has fields type, flavor, topping, size, price, inventory', async () => {
    tea.notARealAttribute = 'does not compute'
    const savedDrink = await Tea.create(tea)
    expect(savedDrink.type).to.equal('green')
    expect(savedDrink.flavor).to.equal('bones')
    expect(savedDrink.topping).to.equal('boba')
    expect(savedDrink.size).to.equal('small')
    expect(savedDrink.price).to.equal(500)
    expect(savedDrink.inventory).to.equal(5)
    expect(savedDrink.notARealAttribute).to.equal(undefined)
  })

  it('flavor cannot be null', async () => {
    tea.flavor = null
    try {
      const nullTeaFlavor = await Tea.create(tea)
      if (nullTeaFlavor) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('topping cannot be null', async () => {
    tea.topping = null
    try {
      const nullTeaTopping = await Tea.create(tea)
      if (nullTeaTopping) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('type cannot be null or an empty string', async () => {
    tea.type = ''
    try {
      const emptyTeaType = await Tea.create(tea)
      if (emptyTeaType) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }

    //test for null
    tea.type = null
    try {
      const nullTeaType = await Tea.create(tea)
      if (nullTeaType) {
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('size cannot be null or an empty string', async () => {
    tea.size = ''
    try {
      const emptyTeaSize = await Tea.create(tea)
      if (emptyTeaSize) {
        //this should not happen because Sequelize should reject this due to tea = ''
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      //will always come here, but error message varies
      expect(error.message).to.not.have.string('Validation should have failed')
    }

    //test for null
    tea.size = null
    try {
      const nullteaSize = await Tea.create(tea)
      if (nullteaSize) {
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('price cannot be less than 0', async () => {
    tea.price = -1
    try {
      const negativeTeaPrice = await Tea.create(tea)
      if (negativeTeaPrice) {
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })

  it('inventory cannot be less than 0', async () => {
    tea.inventory = -1
    try {
      const negativeTeaInventory = await Tea.create(tea)
      if (negativeTeaInventory) {
        throw Error('Validation should have failed with invalid')
      }
    } catch (error) {
      expect(error.message).to.not.have.string('Validation should have failed')
    }
  })
})
