"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var testRoute_1 = __importDefault(require("./modules/testRoute"));
var PORT = 4444;
// create an instance server
var app = (0, express_1.default)();
// add routing for / path
app.get('/', function (req, res) {
    res.json({
        message: 'Hello World 🌍'
    });
});
app.get('/newtest', function (req, res) {
    (0, testRoute_1.default)().then(function (x) {
        console.log(x);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(x);
    });
});
// app.use('/', vaildateParamters, resizeRoute)
// Handle 404 Error
// app.use(vaildateRoute)
// start express server
app.listen(PORT, function () {
    console.log("Servr is starting at prot:".concat(PORT));
});
exports.default = app;
