const express = require('express')
const usersController = require('../controllers/users')
const route = express.Router()

// route should be https://hostname/posts?type=popular

route.post('/posts', usersController.posts)
route.get('/users', usersController.users)
module.exports = route
