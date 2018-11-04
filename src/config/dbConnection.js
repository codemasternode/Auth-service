const mongoose = require('mongoose')

module.exports = (mongoURI) => {

    mongoose.set('useCreateIndex', true)
    mongoose.connect(mongoURI, {useNewUrlParser: true })

    let db = mongoose.connection

    db.on('error', () => {
        console.error.bind(console, 'MongoDB fail connect with AuthService')
        throw new Error(`Couldn't connect to ${mongoURI}`)
    })

    db.once('open', () => {
        console.log(`Auth Service connect with ${mongoURI}`)
    })
}