const User = require('./user')
const Day = require('./day')

User.hasMany(Day)
Day.belongsTo(User)

module.exports = {
  User,
  Day,
}
