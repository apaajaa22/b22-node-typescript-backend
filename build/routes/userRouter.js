"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../controller/auth.controller");
var auth_1 = __importDefault(require("../middlewares/auth"));
var user = (0, express_1.Router)();
user.get('/login', auth_1.default, auth_controller_1.getProfileLogin);
exports.default = user;
