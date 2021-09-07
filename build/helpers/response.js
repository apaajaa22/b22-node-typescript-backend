"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response = function (res, message, data, status) {
    var success = true;
    if (!status) {
        status = 200;
    }
    if (status >= 400) {
        success = false;
    }
    return res.json({
        success: success,
        message: message,
        data: data
    });
};
exports.default = response;
