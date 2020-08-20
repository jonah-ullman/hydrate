const router = require('express').Router()
const {Day} = require('../db/models')

module.exports = router

router.get('/today', async (req, res, next) => {
  try {
    const [today] = await Day.findOrCreate({
      where: {
        userId: req.user.id,
        date: new Date(),
      },
    })
    res.json(today)
  } catch (error) {
    next(error)
  }
})

router.put('/today', async (req, res, next) => {
  try {
    const today = await Day.findOne({
      where: {
        date: new Date(),
        userId: req.user.id,
      },
    })
    const updatedToday = await today.increment('water', {by: req.body.toAdd})
    res.json(updatedToday)
  } catch (error) {
    next(error)
  }
})
