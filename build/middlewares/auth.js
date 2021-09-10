"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var response_1 = __importDefault(require("../helpers/response"));
var dotenv_1 = __importDefault(require("dotenv"));
var APP_KEY = process.env.APP_KEY;
dotenv_1.default.config();
var auth = function (req, res, next) {
    var _a;
    if ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) {
        if (req.headers.authorization.startsWith('Bearer')) {
            try {
                var token = req.headers.authorization.slice(7);
                var user = jsonwebtoken_1.default.verify(token, APP_KEY || '');
                req.authUser = user;
                next();
            }
            catch (err) {
                return (0, response_1.default)(res, 'You must be loggin first', null, 401);
            }
        }
    }
    else {
        return (0, response_1.default)(res, 'Auth token is needed!', null, 401);
    }
};
exports.default = auth;
