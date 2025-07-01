const UserController = require('../controllers/UserController')

const express = require('express')

const router = express.Router()

router.post('/user/insert/',UserController.insert)
router.get('/user/list/',UserController.list)
router.post('/user/login/',UserController.login)

module.exports = router