const Sequelize = require('sequelize')
const db = require('../db')

const Drink = db.define('drink', {
  tea: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    }
  },
  flavor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topping: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    }
  },
})

module.exports = Drink;
