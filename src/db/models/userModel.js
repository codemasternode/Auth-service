const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

let userSchema = Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true
    },
    name: String,
    surname: String,
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', function (next) {
    let user = this

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, (err, encrypted) => {
            if (err) return next(err)

            user.password = encrypted
            next()
        })
    })
})


userSchema.methods.comparePassword = function (passwordToCheck, callback) {
    bcrypt.compare(passwordToCheck, this.password, function (err, isMatch) {
        if (err) {
            return callback(err)
        }
        callback(isMatch)
    })
}

module.exports = mongoose.model('User', userSchema)