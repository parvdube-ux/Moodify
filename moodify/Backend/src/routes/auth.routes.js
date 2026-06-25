const express = require('express')
const authController = require("../controllers/auth.controller")
const authUser = require('../middlewares/auth.middleware')

const router = express.Router()

router.post('/register',authController.register)

router.post('/login',authController.login)

router.get('/get-me',authUser,authController.getme)

router.post('/logout',authController.logout)

module.exports = router