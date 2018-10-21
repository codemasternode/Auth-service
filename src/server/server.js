const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const authAPI = require('../api/authentication')
const registerAPI = require('../api/register')

const start = (options) => {
    return new Promise((resolve, reject) => {
        if (!options.repo) {
            reject(new Error("The server must have set repo"))
        }
        if (!options.port) {
            reject(new Error("The server must have set port"))
        }

        const app = express()

        app.use(morgan('dev'))
        app.use(helmet())
        app.use((err, req, res, next) => {
            reject(new Error('Something is wrong!!!! Error: ' + err))
            res.status(500).send('Something is wrong')
        })


        //here add routers
        app.use('/register', registerAPI)
        app.use('/auth', authAPI)


        const server = app.listen(options.port, () => {
            resolve(server)
        })

    })
}