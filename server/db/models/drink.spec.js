/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Drink = db.model('drink')

describe('Drink model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('drink model', () => {
    describe('proper drink', () => {
      let drink1

      beforeEach(async () => {
        drink1 = await Drink.create({
          tea: 'codycom',
          flavor: 'bones',
          topping: 'blue',
          size: 'woof'
        })
      })

      it('returns a drink', () => {
        expect(drink1).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('Drink model')
