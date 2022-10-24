"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//importing function from resizeImage module
var resizeImage_1 = require("../modules/resizeImage");
var route = express_1.default.Router();
route.get('/resize', function (req, res, next) {
    //Store the parameters in varaible an do the type assertion
    var name = req.query.name;
    var width = parseInt(req.query.w);
    var height = parseInt(req.query.h);
    console.log(req.query.name);
    console.log(parseInt(req.query.w));
    console.log(parseInt(req.query.h));
    try {
        //Check if the image needed with the parameters is already in the outDir folder
        (0, resizeImage_1.checkIfImageExist)(name, width, height).then(function (check) {
            if (!check.isExist) {
                console.log('not Exist');
                //Start resizing image after confirming that the image is not exist
                (0, resizeImage_1.resizeImage)(name, width, height)
                    .then(function (newresizedImage) {
                    //send the image back to the user and display it on the browser
                    (0, resizeImage_1.getImage)(req, res, newresizedImage);
                    //catch the error from not founding the image in the source folder
                })
                    .catch(function (err) {
                    console.log(err + ' File not Exist');
                    //send the message to the user
                    res.write('File not Exist');
                    res.end();
                });
            }
            else {
                console.log('Dose exist');
                //send the existed image back to the user
                (0, resizeImage_1.getImage)(req, res, check.path);
            }
        });
    }
    catch (e) {
        console.log('Something went wrong');
        res.write('Something went wrong');
        res.end();
    }
    next();
});
exports.default = route;
