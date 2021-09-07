"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var response_1 = __importDefault(require("../helpers/response"));
var login = function (req, res) {
    return (0, response_1.default)(res, 'Login Success');
    // return res.json({
    //     success: true,
    //     message: 'Login Success'
    // })
};
exports.login = login;
