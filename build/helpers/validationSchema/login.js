"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginShema = {
    email: {
        isEmail: {
            bail: true,
            errorMessage: 'Wrong email format'
        }
    },
    password: {
        isLength: {
            errorMessage: 'password length must be 6 characters at least',
            options: {
                min: 6
            }
        }
    }
};
exports.default = loginShema;
