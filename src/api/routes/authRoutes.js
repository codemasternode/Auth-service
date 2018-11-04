const router = require('express').Router()
const loginControll = require('../controllers/authController')

router.get('/login', loginControll.login)
router.get('/register', loginControll.register)

module.exports = router



