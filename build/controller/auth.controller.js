"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileLogin = exports.changeForgotPassword = exports.generatePasswordCode = exports.register = exports.login = void 0;
var response_1 = __importDefault(require("../helpers/response"));
var nodemailer_1 = __importDefault(require("nodemailer"));
var users_model_1 = require("../model/users.model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var express_validator_1 = require("express-validator");
dotenv_1.default.config();
var _a = process.env, APP_KEY = _a.APP_KEY, USER_EMAIL = _a.USER_EMAIL, PASS_EMAIL = _a.PASS_EMAIL;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, err, findEmail, checkEmail, compare, payload, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                err = (0, express_validator_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return [2 /*return*/, (0, response_1.default)(res, err.array()[0].msg, null, 400)];
                }
                return [4 /*yield*/, (0, users_model_1.checkEmailModel)(email)];
            case 1:
                findEmail = _b.sent();
                checkEmail = findEmail[0][0];
                if (!!checkEmail) return [3 /*break*/, 2];
                return [2 /*return*/, (0, response_1.default)(res, 'Email not found', checkEmail, 404)];
            case 2: return [4 /*yield*/, bcrypt_1.default.compare(password, checkEmail.password)];
            case 3:
                compare = _b.sent();
                if (compare) {
                    payload = { id: checkEmail.id, email: checkEmail.email };
                    token = jsonwebtoken_1.default.sign(payload, APP_KEY || '', { expiresIn: '2 day' });
                    return [2 /*return*/, (0, response_1.default)(res, 'Login success', { token: token }, 200)];
                }
                else {
                    return [2 /*return*/, (0, response_1.default)(res, 'Wrong email or password', null, 400)];
                }
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err, findEmail, checkEmail, _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                data = req.body;
                err = (0, express_validator_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return [2 /*return*/, (0, response_1.default)(res, err.array()[0].msg, null, 400)];
                }
                return [4 /*yield*/, (0, users_model_1.checkEmailModel)(data.email)];
            case 1:
                findEmail = _e.sent();
                checkEmail = findEmail[0][0];
                if (!checkEmail) return [3 /*break*/, 2];
                return [2 /*return*/, (0, response_1.default)(res, 'email already in use', null, 400)];
            case 2:
                _a = data;
                _c = (_b = bcrypt_1.default).hash;
                _d = [data.password];
                return [4 /*yield*/, bcrypt_1.default.genSalt()];
            case 3: return [4 /*yield*/, _c.apply(_b, _d.concat([_e.sent()]))];
            case 4:
                _a.password = _e.sent();
                return [4 /*yield*/, (0, users_model_1.registerModel)(data)];
            case 5:
                _e.sent();
                return [2 /*return*/, (0, response_1.default)(res, 'Register Success', null, 200)];
        }
    });
}); };
exports.register = register;
var generatePasswordCode = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err, data, findEmail, checkEmail, code, form, transporter, info, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                err = (0, express_validator_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return [2 /*return*/, (0, response_1.default)(res, err.array()[0].msg, null, 400)];
                }
                data = req.body;
                return [4 /*yield*/, (0, users_model_1.checkEmailModel)(data.email)];
            case 1:
                findEmail = _a.sent();
                checkEmail = findEmail[0][0];
                if (!!checkEmail) return [3 /*break*/, 2];
                return [2 /*return*/, (0, response_1.default)(res, 'email not found', null, 404)];
            case 2:
                code = Math.floor(Math.random() * 9999);
                form = {
                    code: code,
                    email: data.email,
                };
                transporter = nodemailer_1.default.createTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    port: 578,
                    secure: false,
                    auth: {
                        user: USER_EMAIL,
                        pass: PASS_EMAIL
                    },
                });
                return [4 /*yield*/, transporter.sendMail({
                        from: USER_EMAIL,
                        to: data.email,
                        subject: 'Verification code✔',
                        text: "your code is " + code, // plain text body
                    })];
            case 3:
                info = _a.sent();
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, (0, users_model_1.generateCodePassword)(form)];
            case 5:
                _a.sent();
                return [2 /*return*/, (0, response_1.default)(res, "forgot password code is " + code, null, 200)];
            case 6:
                err_1 = _a.sent();
                return [2 /*return*/, (0, response_1.default)(res, err_1, null, 400)];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.generatePasswordCode = generatePasswordCode;
var changeForgotPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err, data, _a, _b, _c, _d, form, results;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                err = (0, express_validator_1.validationResult)(req);
                if (!err.isEmpty()) {
                    return [2 /*return*/, (0, response_1.default)(res, err.array()[0].msg, null, 400)];
                }
                data = req.body;
                _a = data;
                _c = (_b = bcrypt_1.default).hash;
                _d = [data.password];
                return [4 /*yield*/, bcrypt_1.default.genSalt()];
            case 1: return [4 /*yield*/, _c.apply(_b, _d.concat([_e.sent()]))];
            case 2:
                _a.password = _e.sent();
                form = {
                    password: data.password,
                    code: data.code,
                    email: data.email,
                };
                return [4 /*yield*/, (0, users_model_1.changeForgotPasswordModel)(form)];
            case 3:
                results = _e.sent();
                if (!(results[0].affectedRows > 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, users_model_1.changeCodeToNull)(form)];
            case 4:
                _e.sent();
                return [2 /*return*/, (0, response_1.default)(res, "change password success", null, 200)];
            case 5: return [2 /*return*/, (0, response_1.default)(res, "invalid forgot password code or email", null, 400)];
        }
    });
}); };
exports.changeForgotPassword = changeForgotPassword;
var getProfileLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.authUser.id;
                return [4 /*yield*/, (0, users_model_1.getProfile)(id)];
            case 1:
                results = _a.sent();
                user = results[0][0];
                return [2 /*return*/, (0, response_1.default)(res, 'Data User', user, 200)];
        }
    });
}); };
exports.getProfileLogin = getProfileLogin;
