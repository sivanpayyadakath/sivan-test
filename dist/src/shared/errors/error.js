"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFoundError = void 0;
const common_1 = require("@nestjs/common");
const base_api_error_1 = require("./base-api-error");
class ResourceNotFoundError extends base_api_error_1.BaseApiError {
    constructor(name, id) {
        const message = `Resource ${name} with id ${id} not found.`;
        super(message, common_1.HttpStatus.NOT_FOUND);
        this.name = ResourceNotFoundError.name;
        this.localizedMessage = {
            ja: `ID${id}のリソース${name}が見つかりません。`,
        };
    }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
//# sourceMappingURL=error.js.map