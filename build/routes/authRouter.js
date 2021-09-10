"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var auth_controller_1 = require("../controller/auth.controller");
var forgotPassword_1 = __importDefault(require("../helpers/validationSchema/forgotPassword"));
var login_1 = __importDefault(require("../helpers/validationSchema/login"));
var register_1 = __importDefault(require("../helpers/validationSchema/register"));
var changeForgotPassword_1 = __importDefault(require("../helpers/validationSchema/changeForgotPassword"));
var auth = (0, express_1.Router)();
auth.post('/login', (0, express_validator_1.checkSchema)(login_1.default), auth_controller_1.login);
auth.post('/register', (0, express_validator_1.checkSchema)(register_1.default), auth_controller_1.register);
auth.post('/forgot-password', (0, express_validator_1.checkSchema)(forgotPassword_1.default), auth_controller_1.generatePasswordCode);
auth.patch('/forgot-change-password', (0, express_validator_1.checkSchema)(changeForgotPassword_1.default), auth_controller_1.changeForgotPassword);
exports.default = auth;
