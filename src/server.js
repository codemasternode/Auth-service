const app = require('./app')

const config = {
    PORT: process.env.PORT || 3000,
    mongoURI: process.env.mongoURI || 'mongodb://localhost:27017/authServiceDB'
}

app(config)