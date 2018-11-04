const express = require('express')
const app = express()
const authRoutes = require('./api/routes/authRoutes')
const dbConnect = require('./config/dbConnection')

app.use('/auth', authRoutes)

module.exports = (config) => {
    dbConnect(config.mongoURI)
    app.listen(config.PORT, () => {
        console.log(`Running on port ${config.PORT}`)
    })
}