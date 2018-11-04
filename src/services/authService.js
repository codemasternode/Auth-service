const mongoose = require('mongoose')
const User = require('../db/models/userModel')

exports.addUser = (userFromBody) => {
    let user = new User(userFromBody)
    return user.save()
}   