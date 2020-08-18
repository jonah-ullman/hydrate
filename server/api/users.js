const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.put('/', async (req, res, next) => {
  try {
    const response = await User.update(req.body, {
      where: {id: req.user.id},
      returning: true,
    })
    const updatedUser = response[1][0]
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})
