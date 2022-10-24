"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vaildateParamters = exports.vaildateRoute = void 0;
//Made this to make sure the user will enter the correct route in the URL
var vaildateRoute = function (req, res, next) {
    if (req.originalUrl === '/resize') {
        return next();
    }
    else {
        res.status(404);
        console.log('Ops !.');
        res.write('Ops !.. You are on the wrong page');
        res.end();
        next();
    }
};
exports.vaildateRoute = vaildateRoute;
// this will validate the URL paramters, and give a guide to the correct format
var vaildateParamters = function (req, res, next) {
    if (req.originalUrl !== '/resize') {
        return next();
    }
    else {
        var width = parseInt(req.query.w);
        var height = parseInt(req.query.h);
        if (isNaN(width) || isNaN(height)) {
            console.log('Your Paramters is wrong');
            res.write("Your Paramters is wrong.. right format \"/resize?name={name}&&w={image_width}&&h={image_height}\"");
            res.end();
            next();
        }
        else {
            next();
        }
    }
};
exports.vaildateParamters = vaildateParamters;
