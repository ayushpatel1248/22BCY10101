const express = require('express')
const testController = require('../controllers/test')
const route = express.Router()

route.post('/test', testController.test)

module.exports = route
