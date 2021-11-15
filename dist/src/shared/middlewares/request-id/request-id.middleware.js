"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestIdMiddleware = void 0;
const uuid_1 = require("uuid");
const constants_1 = require("../../constants");
exports.RequestIdMiddleware = (req, res, next) => {
    if (!req.headers[constants_1.REQUEST_ID_TOKEN_HEADER] ||
        !uuid_1.validate(req.header(constants_1.REQUEST_ID_TOKEN_HEADER))) {
        req.headers[constants_1.REQUEST_ID_TOKEN_HEADER] = uuid_1.v4();
    }
    res.set(constants_1.REQUEST_ID_TOKEN_HEADER, req.headers[constants_1.REQUEST_ID_TOKEN_HEADER]);
    next();
};
//# sourceMappingURL=request-id.middleware.js.map