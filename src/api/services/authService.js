const mongoose = require('mongoose')
const _ = require('lodash')
const User = require('../../db/models/userModel')
const jwt = require('jsonwebtoken')
const secret = require('../../utilites/secret');


exports.addUser = (userFromBody) => {
    let user = new User(userFromBody)
    return new Promise((resolve, reject) => {
        User.findOne({ username: user.username })
            .then((doc) => {
                if (doc) {
                    reject()
                }
                user.save().then((doc) => {
                    resolve(user)
                }).catch((err) => {
                    console.log(err)
                    reject()
                })
            })
    })
}

exports.loginUser = function (user, goodCredentials, badCredentials) {
    User.findOne({ username: user.username }, (err, doc) => {
        if (err || !doc) {
            badCredentials()
        } else {
            doc.comparePassword(user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    badCredentials()
                }
    
                if (isMatch) {
                    goodCredentials(jwt.sign({ username: doc }, secret.keyForJWT, { algorithm: 'HS256' }))
                }
    
            })
        }
       
    })
}