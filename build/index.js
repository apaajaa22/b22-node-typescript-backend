"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
var PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use('/', routes_1.default);
app.get('/', function (req, res) {
    return res.json({
        success: true,
        message: 'Backend is running well'
    });
});
app.listen(PORT, function () {
    // tslint:disable-next-line: no-console
    console.log("app listen to " + PORT);
});
