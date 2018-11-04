const router = require('express').Router()
const loginControll = require('../controllers/authController')

router.post('/login', (req, res) => loginControll.login(req, res))
router.post('/register', (req, res) => loginControll.register(req, res))

module.exports = router



