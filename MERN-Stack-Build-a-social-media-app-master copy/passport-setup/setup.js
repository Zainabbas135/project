const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/userModel');


passport.serializeUser((user, done) => {
    done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/google/callback',
    passReqToCallback: true,
}, (request, accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }, async(err, user) => {
        if (err) {
            return done(err, null);
        }
        if (user) {
            return done(null, user);
        } else {
            await new User({
                googleId: profile.id,
                fullname: profile.displayName,
                username: profile.displayName,
                email: profile.emails[0].value,
                picture: profile.picture,
            }).save((error, newUser) => {
                if (!error) {
                    return done(null, newUser);
                }
                return done(error, null);
            });
        }
    });
}), );

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});