const express = require('express')
const app = express()
const authRoutes = require('./api/routes/authRoutes')
const dbConnect = require('./config/dbConnection')
const cors = require('cors')
const bodyParser = require('body-parser')

module.exports = (config) => {
    dbConnect(config.mongoURI)
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/auth', authRoutes)

    app.listen(config.PORT, () => {
        console.log(`Running on port ${config.PORT}`)
    })
}