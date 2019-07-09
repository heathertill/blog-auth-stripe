import * as passport from 'passport';
import { RequestHandler } from 'express-serve-static-core';

export const checkToken = (req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) {
            req.user = user
            return next();
        } else {
            return next();
        }
        
    })(req, res, next);
}

export const isAdmin: RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401)
    } else {
        return next();
    }
};