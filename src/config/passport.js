const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require('./models/user')


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, cb) => {
        //place for DB call
        return UserModel.findOne({ email: email })
            .then((user) => {
                if (!user) {
                    return cb(null, false, { message: 'Incorrect email or password' })
                }
                return cb(null, user, { message: "Logged successfully" })
            }).catch((err) => {
                console.log(err)
                cb(err)
            })
    }
))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jwt_secret'
},
    (jwtPayload, cb) => {
        return UserModel.findOneById(jwtPayload.id)
            .then((user) => {
                return cb(null, user)
            })
            .catch((err) => {
                return cb(err)
            })
    }
))