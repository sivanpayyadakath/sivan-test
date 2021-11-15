"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiError = void 0;
const common_1 = require("@nestjs/common");
class BaseApiError extends common_1.HttpException {
    constructor(message, status, details, localizedMessage) {
        super(message, status);
        this.name = BaseApiError.name;
        this.localizedMessage = localizedMessage;
        this.details = details;
    }
}
exports.BaseApiError = BaseApiError;
//# sourceMappingURL=base-api-error.js.map