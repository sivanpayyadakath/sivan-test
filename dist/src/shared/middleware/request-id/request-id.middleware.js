"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestIdMiddleware = void 0;
const constant_1 = require("./../../constant");
const uuid_1 = require("uuid");
exports.RequestIdMiddleware = (req, res, next) => {
    if (!req.headers[constant_1.REQUEST_ID_TOKEN_HEADER]) {
        req.headers[constant_1.REQUEST_ID_TOKEN_HEADER] = uuid_1.v4();
    }
    res.set(constant_1.REQUEST_ID_TOKEN_HEADER, req.headers[constant_1.REQUEST_ID_TOKEN_HEADER]);
    next();
};
//# sourceMappingURL=request-id.middleware.js.map