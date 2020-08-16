const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const [user] = await User.findOrCreate({
      where: {
        id: -1,
      },
    })
    req.login(user, (err) => (err ? next(err) : res.json(user)))
  } catch (error) {
    next(error)
  }
})
