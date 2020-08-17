const Sequelize = require('sequelize')
const db = require('../db')
const {computeWater} = require('./utils')

const User = db.define('user', {
  googleId: {
    type: Sequelize.STRING,
  },
  weight: {
    type: Sequelize.INTEGER,
  },
  activity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 1440,
    },
  },
  waterTotal: {
    type: Sequelize.VIRTUAL,
    get() {
      return computeWater(this.weight, this.activity)
    },
  },
  phone: {
    type: Sequelize.INTEGER,
  },
  texts: {
    type: Sequelize.BOOLEAN,
  },
  textStart: {
    type: Sequelize.TIME,
  },
  textEnd: {
    type: Sequelize.TIME,
  },
  hasProfile: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

module.exports = User
