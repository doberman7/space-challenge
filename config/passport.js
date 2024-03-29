const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.use(
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        async(email, password, done) => {
            const user = await User.findOne({ email })
            if (!user) {
                return done(null, false, { errorMessage: 'Incorrect Email' })
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { errorMessage: 'Incorrect Password' })
            }
            done(null, user)
        }
    )
)

passport.serializeUser((user, cb) => {
    cb(null, user._id)
})

passport.deserializeUser(async(id, cb) => {
    const user = await User.findById(id)
    user.password = null
    cb(null, user)
})

module.exports = passport
