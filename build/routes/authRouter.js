"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../controller/auth.controller");
var auth = (0, express_1.Router)();
auth.get('/login', auth_controller_1.login);
exports.default = auth;
