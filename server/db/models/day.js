const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
  water: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  date: {
    type: Sequelize.DATEONLY,
  },
})

module.exports = Day
