
const repository = (connection) => {
    const { db } = connection
    const collection = db.collection('users')

    const getUserByUsername = (username) => {
        return new Promise((resolve, reject) => {
            let user = collection.find({ username })
            if (!user) {
                reject(new Error('There is no user with username: ' + username))
            }
            resolve(user)
        })
    }
}

const connect = (connection) => {
    return new Promise((resolve, reject) => {
        if (!connection) {
            reject('Connection not supported')
        }
        resolve(repository(connection))
    })
}

module.exports = Object.assign({}, { connect })