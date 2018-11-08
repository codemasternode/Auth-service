const lodash = require('lodash')
const { addUser, loginUser } = require('../services/authService')

exports.login = (req, res) => {
    let user = req.body
    loginUser(user, (token) => {
        res.send({ token })
    }, () => {
        res.status(401).send()
    })
}

exports.register = (req, res) => {
    let user = lodash.pick(req.body, ['username', 'password', 'name', 'surname'])
    addUser(user)
        .then((doc) => {
            console.log(doc)
            return res.send(doc)
        }).catch(() => {
            return res.send(401, {})
        })
}