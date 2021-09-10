"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authRouter_1 = __importDefault(require("./authRouter"));
var userRouter_1 = __importDefault(require("./userRouter"));
var router = (0, express_1.Router)();
router.use('/auth', authRouter_1.default);
router.use('/user', userRouter_1.default);
exports.default = router;
