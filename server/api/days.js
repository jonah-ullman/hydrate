const router = require('express').Router()

module.exports = router

router.get('/today', async (req, res, next) => {
  try {
    console.log(req.user, 'user')
  } catch (error) {
    next(error)
  }
})
