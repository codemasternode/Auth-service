import app from './app'

const server = app.listen(app.get('port'), () => {
    console.log('App is running', app.get('port'))
})

export default server
