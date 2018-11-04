const lodash = require('lodash')
const { addUser } = require('../../services/authService')

exports.login = (req, res) => {
    res.send('This is login')
}

exports.register = (req, res) => {
    console.log(req.body,'body')
    let user = lodash.pick(req.body, ['username', 'password', 'name', 'surname'])
    console.log(user)
    addUser(user)
        .then((doc) => {
            if (doc) {
                res.send(doc)
            }
        }).catch((err) => {
            if (err) {
                res.send().status(400)
            }
        })
}