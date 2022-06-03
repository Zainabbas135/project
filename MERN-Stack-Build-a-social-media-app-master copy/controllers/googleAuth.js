const passport = require('passport');
require('../passport-setup/setup');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();
const authCtrl = require('./authCtrl');

const loginMiddleware = (req, res, next) => {
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }, (err, user, info) => {
        if (err || !user) {
            console.log(user);
            console.log(err);
            res.status(401).json({
                message: 'Error in Google Auth',
                statusCode: 400,
            });
        } else {
            req.user = user;
            next();
        }
    })(req, res, next);
};

const loginController = (req, res) => {
    try {
        const access_token = createAccessToken({ id: user._id })
        const refresh_token = createRefreshToken({ id: user._id })

        res.cookie('refreshtoken', refresh_token, {
            httpOnly: true,
            path: '/api/refresh_token',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
        })

        res.json({
                msg: 'Login Success!',
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })
            // const token = jwt.sign({ id: req.user._id }, process.env.ACCESS_TOKEN_SECRET, {
            //     expiresIn: '1h',
            // });
            // res.cookie(
            //     'user',
            //     JSON.stringify({
            //         user: {
            //             user_id: req.user._id,
            //             name: req.user.name,
            //             picture: req.user.picture,
            //         },
            //         accessToken: `Bearer ${token}`,
            //         statusCode: 200,
            //     }), { maxAge: 3600000 },
            // );
            // res.redirect('http://localhost:3000');
    } catch (error) {
        res.status(400).json({
            message: 'Authentication failed',
            statusCode: 400,
        });
        res.cookie(
            'error',
            JSON.stringify({
                message: 'Authentication failed',
                statusCode: 400,
            }), { maxAge: 360000 },
        );
        // res.redirect('http://localhost:3000');
    }
};

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    }),
);

router.get(
    '/google/callback',
    loginMiddleware,
    loginController,
)

module.exports = router;